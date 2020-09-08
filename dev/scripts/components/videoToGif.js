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
            videoPositionFrom: 0,
            videoShow: true,
            mp4: '',
            mp4W: 480,
            mp4H: 480,
            gif: '',
            videoDuration: 0
        }
        this.$darwin = new RegExp('darwin', 'i').test(os.type())
        this.$temp_gif_folder = path.join(remote.app.getPath("userData"), "gif_out")
        fs.ensureDirSync(this.$temp_gif_folder)
    }
    componentDidMount(){
        this.props.onDownloadFfmpeg()
        this.__settle_slider()
    }

    __check_ffmpeg(){
        localStorage.removeItem('ffmpeg_ready')
        this.props.onDownloadFfmpeg(true)
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
                
                $("#value1").text(value * this.state.videoDuration / 100);
                $("#value1").attr("value",value);
            }
            //当鼠标按键抬起时解绑鼠标移动事件
            document.onmouseup=()=>{
                document.onmousemove=null;
            }
        }
        slider2.onmousedown=(e)=>{
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
                
                $("#value2").text(value * this.state.videoDuration / 100);
                $("#value2").attr("value",value);
            }
            document.onmouseup=()=>{
                document.onmousemove=null;
            }
        }
    }
    
    __preview(){
        let exec 			= child_process.exec;
        let execSync 		= child_process.execSync;
        let ffmpeg          = context.ffmpeg.replace(/ /g,'\\ ');
        console.log('MINGXI_DEBUG_LOG>>>>>>>>>ffmpeg',ffmpeg);
            
        let fileName		= `video_preview.gif`
        let newFolderFile	= this.$darwin ? `${this.$temp_gif_folder}/${fileName}` : `${this.$temp_gif_folder}\\${fileName}`
        let finalFile 		= newFolderFile.replace(/ /g,'\\ ')
        let command = `${ffmpeg} -t 10 -ss 00:00:30 -i ${this.state.mp4.replace('file://','')} -s ${this.state.mp4W+"x"+this.state.mp4H} -y ${finalFile}`
        command = window._test_command || command
        console.log('MINGXI_DEBUG_LOG>>>>>>>>>command is:',command);
        this.props.showLoading('生成中...')
        exec(command, (error, stdout, stderr)=>{
            console.log('MINGXI_DEBUG_LOG>>>>>>>>>[exec] error',error);
            console.log('MINGXI_DEBUG_LOG>>>>>>>>>[exec] stdout',stdout);
            console.log('MINGXI_DEBUG_LOG>>>>>>>>>[exec] stderr',stderr);
            if (!error) {
                this.setState({
                    gif: null
                }, ()=>{
                    this.setState({
                        gif: newFolderFile+"?t="+Date.now()
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
                this.setState({
                    videoShow: false
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

	render() {
		return <div className='gif-container'>
            <div className='preview'>
                {this.state.videoShow ? <video width='400px' height='300px' className='video-preview' id={`video_preview`} controls="controls" onDoubleClick={()=>{
                    
                }} onDurationChange={(event)=>{
                    console.log('MINGXI_DEBUG_LOG>>>>>>>>>event.currentTarget',event.currentTarget);
                    this.setState({
                        videoDuration: event.currentTarget.duration
                    })
                }} onLoadedMetadata={(event)=>{
                    this.props.hideLoading()
                    this.setState({
                        mp4W: event.currentTarget.videoWidth,
                        mp4H: event.currentTarget.videoHeight
                    })
                }}>
                    {this.state.mp4 ? <source src={this.state.mp4} type="video/mp4"></source> : ''}
                </video> : ''}
                
                <div className='gif-preview'>
                    {this.state.gif ? <img className='img' src={"file://"+this.state.gif} alt=""/> : <div className="tips">
                        <span>第一步 : 导入视频</span>
                        <span>第二步 : 设置开始和截止时间</span>
                        <span>第三步 : 生成GIF</span>
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
                                <span id="value1" className="value1" value="0">0</span>
                            </span>
                        </div>
                        <div id="slideRight" className="slideRight">
                            <span id="slider2" className="slider2">
                                <span id="value2" className="value2" value="100">100</span>
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

					<button className={`btn btn-primary`} onClick={()=>{
						this.__preview()
					}}>
					生成GIF
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