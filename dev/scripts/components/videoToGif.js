// https://www.jianshu.com/p/9af00bfe21b3
import React from 'react'
import PropTypes from 'prop-types'
import context from "../context"
import electron from "electron"
import Toast from './../components/toast.export'
const clipboard = electron.clipboard
const $ = $require('jquery')

import os from "os"
import fs from 'fs-extra'
import path from "path"
import child_process from 'child_process'
import {remote, ipcRenderer, dialog} from 'electron'
class VideoToGif extends React.Component {
	constructor(props) {
		super(props)
		this.state = { 
            videoShow: true,
            mp4: '',
            mp4W: 480,
            mp4H: 480,
            gif: '',
            gifRaw: '',
            videoDuration: 0,
        }
        this.$play_reason = {}
        this.$video_elem = null
        this.$darwin = new RegExp('darwin', 'i').test(os.type())
        this.$temp_gif_folder = path.join(remote.app.getPath("userData"), "gif_out")
        fs.ensureDirSync(this.$temp_gif_folder)
    }
    componentDidMount(){
        this.props.onDownloadFfmpeg()
        this.__settle_slider()
    }

    componentWillUnmount(){
        this.$video_elem = null
        this.$play_reason = {}
    }

    __check_ffmpeg(){
        localStorage.removeItem('ffmpeg_ready')
        this.props.onDownloadFfmpeg(true)
    }

    __change_num_to_timestr(value){
        let result  = parseInt(value)
        let h       = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);
        let m       = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60));
        let s       = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60));
        
        let res = '';
        res += `${h}:`;
        res += `${m}:`;
        res += `${s}`;
        return res;
    }

    __settle_slider(){
        var slider1 =document.getElementById("slider1");
        var slider2 =document.getElementById("slider2");
        var slideTool =document.getElementById("slideTool");
        var slideLeft =document.getElementById("slideLeft");
        var slideRight =document.getElementById("slideRight");
        var P1 =document.getElementById("p1");
        //滑块1的鼠标按下事件
        slider1.onmousedown=(e)=>{
            slider1.pressed = true
            var evt =e||event;
            var x =evt.offsetX;
            var y =evt.offsetY;
            console.log("leftMouseDown");
            //当触发滑块1鼠标按下事件时绑定鼠标移动事件
            document.onmousemove=(e)=>{
                var evt =e||event;
                let clientX = evt.clientX - 220
                //根据鼠标的位置和外层的相对偏移量设置滑块的位置
                slider1.style.left=clientX-slideTool.offsetLeft-x+"px";
                if(clientX-slideTool.offsetLeft-x<=0){
                    slider1.style.left="0px";
                }
                if(clientX-slideTool.offsetLeft-x>=550){
                    slider1.style.left="550px";
                }
                if(slider1.offsetLeft >= slider2.offsetLeft){
                    //slider1.style.left = slider2.style.left;
                    slider1.style.left = slider2.offsetLeft + "px";
                }
                //根据滑块的偏移量计算数值
                var value = 100 * slider1.offsetLeft/550;
                slideLeft.style.width=slider1.offsetLeft+"px";
                $("#value1").text(this.__change_num_to_timestr(value * this.state.videoDuration / 100));
                $("#value1").attr("value",value);
            }
            //当鼠标按键抬起时解绑鼠标移动事件
            document.onmouseup=()=>{
                document.onmousemove=null;
                if (slider1.pressed) {
                    slider1.pressed = false
                    this.__preview_video()
                }
            }
        }
        slider2.onmousedown=(e)=>{
            slider2.pressed = true
            console.log('MINGXI_DEBUG_LOG>>>>>>>>>slider2','');
            var evt =e||event;
            var x =evt.offsetX;
            var y =evt.offsetY;
            document.onmousemove=(e)=>{
                var evt =e||event;
                let clientX = evt.clientX - 220
                slider2.style.left=clientX-slideTool.offsetLeft-x+"px";
                if(clientX-slideTool.offsetLeft-x<=0){
                    slider2.style.left="0px";
                }
                if(clientX-slideTool.offsetLeft-x>=550){
                    slider2.style.left="550px";
                }
                if(slider2.offsetLeft <= slider1.offsetLeft){
                    slider2.style.left = slider1.offsetLeft + "px";
                }
                console.log('MINGXI_DEBUG_LOG>>>>>>>>>slider2',slider2.offsetLeft,clientX,evt);
                var value = 100 * slider2.offsetLeft/550;
                console.log('MINGXI_DEBUG_LOG>>>>>>>>>value',value);
                slideRight.style.width=slider2.offsetLeft+"px";
                
                $("#value2").text(this.__change_num_to_timestr(value * this.state.videoDuration / 100));
                $("#value2").attr("value",value);
            }
            document.onmouseup=()=>{
                document.onmousemove=null;
                if (slider2.pressed) {
                    slider2.pressed = false
                    this.__preview_video()
                }
            }
        }
    }

    __preview_video(){
        if (this.$video_elem) {
            let from = $("#value1")[0].getAttribute('value') * this.state.videoDuration / 100;
            let to   = $("#value2")[0].getAttribute('value') * this.state.videoDuration / 100;
            console.log('MINGXI_DEBUG_LOG>>>>>>>>>from, to',from, to);
            this.$video_elem.currentTime = from
            this.$video_elem.from        = from
            this.$video_elem.to          = to
            this.$video_elem.play()
        }
    }
    
    __save_gif(){
        if (this.state.gifRaw) {
            remote.dialog.showSaveDialog(remote.getCurrentWindow(), {
                title: "请选择要保存的文件名",
                buttonLabel: "保存",
                filters: [
                    { name: 'image', extensions: ['gif'] },
                  ]
            },(result) => {
                console.log('MINGXI_DEBUG_LOG>>>>>>>>>result.filePath',result);
                try {
                    fs.copyFileSync(this.state.gifRaw, result)
                    remote.shell.showItemInFolder(result)
                } catch (error) {}
            })
        }
    }

    __preview_gif(){
        let exec 			= child_process.exec;
        let execSync 		= child_process.execSync;
        // console.log('MINGXI_DEBUG_LOG>>>>>>>>>ffmpeg',ffmpeg);
        let ffmpeg
        if (this.$darwin) {
            ffmpeg = context.ffmpeg.replace(/ /g,'\\ ');
            execSync(`chmod 777 '${context.ffmpeg}'`)
        } else {
            ffmpeg = context.ffmpeg
        }
            
        let fileName		= `video_preview.gif`
        let newFolderFile	= this.$darwin ? `${this.$temp_gif_folder}/${fileName}` : `${this.$temp_gif_folder}\\${fileName}`
        let finalFile 		= newFolderFile.replace(/ /g,'\\ ')

        let from        = $("#value1")[0].getAttribute('value') * this.state.videoDuration / 100;
        let to          = $("#value2")[0].getAttribute('value') * this.state.videoDuration / 100;
        let duration    = Math.max(1,parseInt(to - from)) 
        let command     = `${ffmpeg} -t ${duration} -ss ${this.__change_num_to_timestr(from)} -i ${this.state.mp4.replace('file://','')} -s ${this.state.mp4W+"x"+this.state.mp4H} -y ${finalFile}`

        if (!this.$darwin) {
            command = `${ffmpeg} -t ${duration} -ss ${this.__change_num_to_timestr(from)} -i ${this.state.mp4.replace('file://','')} -s ${this.state.mp4W+"x"+this.state.mp4H} -y -vf "fps=10,scale=320:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 ${finalFile}`   
            //-i \\Mac\Home\Desktop\_out.mp4 -vf "fps=10,scale=320:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0  \\Mac\Home\Desktop\output.gif
        }
        command = window._test_command || command
        console.log('MINGXI_DEBUG_LOG>>>>>>>>>command is:',command);
        this.props.showLoading('生成中...')
        exec(command, (error, stdout, stderr)=>{
            console.log('MINGXI_DEBUG_LOG>>>>>>>>>[exec] error',error);
            console.log('MINGXI_DEBUG_LOG>>>>>>>>>[exec] stdout',stdout);
            console.log('MINGXI_DEBUG_LOG>>>>>>>>>[exec] stderr',stderr);
            if (!error) {
                this.setState({
                    gif: null,
                    gifRaw: null,
                }, ()=>{
                    this.setState({
                        gif: newFolderFile+"?t="+Date.now(),
                        gifRaw: newFolderFile
                    })
                })
            }
            this.props.hideLoading()
        })
    }

    __import_files(){
        ipcRenderer.send('open-directory-dialog','openFile');
        remote.dialog.showOpenDialog(remote.getCurrentWindow(), {
            properties: ['openFile'],
            filters: [
                { 
                    name: 'mp4', 
                    extensions: ['mp4'] 
                },
            ]
        }, (files = []) => {
            let file = files[0]
            if (file) {
                this.$video_elem = null
                this.$play_reason = {}
                this.setState({
                    videoShow: false,
                    videoDuration: 0,
                    gif: '',
                    gifRaw: ''
                }, ()=>{
			        this.props.showLoading("载入中...")
                    this.setState({
                        videoShow: true,
                        mp4: "file://"+file
                    })
                })
            }
        })
    }

    __try_to_play(reason){
        this.$play_reason[reason] = true
        if (this.$play_reason['canplay'] && this.$play_reason['duration']) {
            this.$video_elem = $('#video_preview')[0];
            this.props.hideLoading()
        }
    }

	render() {
		return <div className='gif-container'>
            <div className='preview'>
                {this.state.videoShow ? <video width='400px' height='300px' className='video-preview' id={`video_preview`} controls="controls" onDoubleClick={()=>{
                    
                }} onDurationChange={(event)=>{
                    console.log('MINGXI_DEBUG_LOG>>>>>>>>>event.currentTarget',event.currentTarget);
                    this.setState({
                        videoDuration: event.currentTarget.duration
                    }, ()=>{
                        try {
                            $("#value1").text(this.__change_num_to_timestr($("#value1")[0].getAttribute('value') * this.state.videoDuration / 100));
                            $("#value2").text(this.__change_num_to_timestr($("#value2")[0].getAttribute('value') * this.state.videoDuration / 100));
                        } catch (error) {
                            console.log('MINGXI_DEBUG_LOG>>>>>>>>>error',error);
                        }

                        console.log('MINGXI_DEBUG_LOG>>>>>>>>>duration change','');
                        this.__try_to_play('duration')
                    })
                }} onLoadedMetadata={(event)=>{
                    this.setState({
                        mp4W: event.currentTarget.videoWidth,
                        mp4H: event.currentTarget.videoHeight
                    })
                }} onCanPlay={()=>{
                    console.log('MINGXI_DEBUG_LOG>>>>>>>>>can play','');
                    this.__try_to_play('canplay')
                }} onTimeUpdate={(event)=>{
                    console.log('MINGXI_DEBUG_LOG>>>>>>>>>event progress',event.currentTarget.currentTime, event.currentTarget.from,  event.currentTarget.to, this.$video_elem ? this.$video_elem.to : 'none');
                    let from = $("#value1")[0].getAttribute('value') * this.state.videoDuration / 100;
                    let to   = $("#value2")[0].getAttribute('value') * this.state.videoDuration / 100;
                    if ( this.$video_elem){
                        if (event.currentTarget.currentTime > to) {
                            this.$video_elem.pause()
                        }
                    }
                    
                }}>
                    {this.state.mp4 ? <source src={this.state.mp4} type="video/mp4"></source> : ''}
                </video> : ''}
                
                <div className='gif-preview'>
                    {this.state.gif ? <img className='img' src={"file://"+this.state.gif} alt=""/> : <div className="tips">
                        <span>第一步 : 导入视频</span>
                        <span>第二步 : 设置开始和截止时间</span>
                        <span>第三步 : 生成GIF</span>
                        <span>第四步 : 保存GIF</span>
                    </div>}
                </div>
                
            </div>
            <div id="slideToolCtrol" className="slideToolCtrol">
                <div id="slideToolBorder" className="slideToolBorder">
                    <div id="slideTitle" className="slideTitle">
                        <span id="titleSpan" className="titleSpan">设置开始和截止时间</span>
                    </div>
                    <div id="slideTool" className="slideTool">
                        <div id="slideLeft" className="slideLeft">
                            <span id="slider1" className="slider1">
                                <span id="value1" className="value1" value="0">00:00:00</span>
                            </span>
                        </div>
                        <div id="slideRight" className="slideRight">
                            <span id="slider2" className="slider2">
                                <span id="value2" className="value2" value="2">00:00:00</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="toolbar toolbar-footer fixed-bottom">
				<div className="toolbar-actions">
					<button className={`btn btn-default`} onClick={()=>{
						this.__import_files()
					}}>
					导入视频
					</button>

                    <button className={`btn btn-primary preview-video`} onClick={()=>{
						this.__preview_video()
					}}>
					播放预览
					</button>

					<button className={`btn btn-warning preview-gif`} onClick={()=>{
						this.__preview_gif()
					}}>
					生成GIF
					</button>

					<button className={`btn btn-positive save-gif`} onClick={()=>{
						this.__save_gif()
					}}>
					保存GIF
					</button>

                    <button className={`btn btn-default check`} onClick={()=>{
						this.__check_ffmpeg()
					}}>
					检测依赖库
					</button>
				</div>
			</footer>
        </div>
				 
	}
}

VideoToGif.propTypes = {
}

export default VideoToGif