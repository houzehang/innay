// https://www.jianshu.com/p/9af00bfe21b3
import React from 'react'
import PropTypes from 'prop-types'
import context from "../context"
import electron from "electron"
import Toast from './../components/toast.export'
const clipboard = electron.clipboard
const $ = $require('jquery')
import {remote, ipcRenderer, dialog} from 'electron'
class VideoToGif extends React.Component {
	constructor(props) {
		super(props)
		this.state = { 
            videoPositionFrom: 0,
            mp4: ''
        }
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
        slider1.onmousedown=function(e){
            var evt =e||event;
            var x =evt.offsetX;
            var y =evt.offsetY;
            console.log("leftMouseDown");
            //当触发滑块1鼠标按下事件时绑定鼠标移动事件
            document.onmousemove=function(e){
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
                if(slider1.offsetLeft >= slider2.offsetLeft-10){
                    //slider1.style.left = slider2.style.left;
                    slider1.style.left = slider2.offsetLeft - 10 + "px";
                }
                //根据滑块的偏移量计算数值
                var value = 100 * slider1.offsetLeft/550;
                slideLeft.style.width=slider1.offsetLeft+"px";
                
                $("#value1").text(value);
                $("#value1").attr("value",value);
            }
            //当鼠标按键抬起时解绑鼠标移动事件
            document.onmouseup=function(){
                document.onmousemove=null;
            }
        }
        slider2.onmousedown=function(e){
            console.log('MINGXI_DEBUG_LOG>>>>>>>>>slider2','');
            var evt =e||event;
            var x =evt.offsetX;
            var y =evt.offsetY;
            document.onmousemove=function(e){
                var evt =e||event;
                let clientX = evt.clientX - 220
                slider2.style.left=clientX-slideTool.offsetLeft-x+"px";
                if(clientX-slideTool.offsetLeft-x<=0){
                    slider2.style.left="0px";
                }
                if(clientX-slideTool.offsetLeft-x>=550){
                    slider2.style.left="550px";
                }
                if(slider2.offsetLeft-10 <= slider1.offsetLeft){
                    slider2.style.left = slider1.offsetLeft + 10 + "px";
                }
                console.log('MINGXI_DEBUG_LOG>>>>>>>>>slider2',slider2.offsetLeft);
                var value = 100 * slider2.offsetLeft/550;
                console.log('MINGXI_DEBUG_LOG>>>>>>>>>value',value);
                slideRight.style.width=slider2.offsetLeft+"px";
                
                $("#value2").text(value);
                $("#value2").attr("value",value);
            }
            document.onmouseup=function(){
                document.onmousemove=null;
            }
        }
    }
    
    __add_mp4(){
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
                    mp4: "file://"+file
                })
                return;
                let video = $("<video/>")
                video.attr("src", "file://"+file)
                video.on("canplay", ()=>{
                    video.off()
                    video.on("timeupdate", ()=>{
                        console.log('MINGXI_DEBUG_LOG>>>>>>>>>currentTime',video[0].currentTime);
                    })
                    video.on("play", ()=>{
                    })
                    video.on("pause", ()=>{
                    })
                })
                video.on("durationchange", ()=>{
                    console.log('MINGXI_DEBUG_LOG>>>>>>>>>durationchange',video[0].duration);
                })
                video.on("error", ()=>{
                    console.log("on load video error",video)
                })

		        video[0].setAttribute('crossorigin', 'anonymous');
                video[0].playbackRate = 1
                video[0].play()
            }
        })
    }

	render() {
		return <div className='gif-container'>
            <div className='preview'>
                <video width='400px' height='300px' className='video-preview' id={`video_preview`} controls="controls" onDoubleClick={()=>{
                    
                }}>
                    {this.state.mp4 ? <source src={this.state.mp4} type="video/mp4"></source> : ''}
                </video>
                <div className='gif-preview'></div>
            </div>
            <div id="slideToolCtrol" className="slideToolCtrol">
                <div id="slideToolBorder" className="slideToolBorder">
                    <div id="slideTitle" className="slideTitle">
                        <span id="titleSpan" className="titleSpan">设定开始时间和结束时间</span>
                    </div>
                    <div id="slideTool" className="slideTool">
                        <div id="slideLeft" className="slideLeft">
                            <span id="slider1" className="slider1">
                                <span id="value1" className="value1" value="01">01</span>
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
					<button className={`btn btn-default`} disabled={this.state.working} onClick={()=>{
						this.__import_files()
					}}>
					导入视频
					</button>

                    <button className={`btn btn-default`} disabled={this.state.working} onClick={()=>{
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