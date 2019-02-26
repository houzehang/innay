import React from 'react';
import { connect } from 'react-redux'
require("../../less/devices.less")
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import { findDOMNode } from 'react-dom';
const path				= $require("path")
const Const 			= require("../../const")
const DEBUG 			= require("../../../env").DEBUG
const Storage 			= require("../Storage")
const AgoraRtcEngine 	= require('../../agora/AgoraSdk')
const $ 				= require("jquery")
import { 
	onExitTester
} from '../actions'
class Devices extends React.Component {
	constructor(props) {
		super(props)
		this.$client = new AgoraRtcEngine()
		this.$client.initialize(Const.AGORA_APPID);
		this.$client.setChannelProfile(1);
		this.$client.setClientRole(1);
		this.$client.setAudioProfile(0, 1);
		this.$client.setParameters('{"che.audio.live_for_comm":true}');
		this.$client.setParameters('{"che.audio.enable.agc":false}');
		this.$client.setParameters('{"che.video.moreFecSchemeEnable":true}');
		this.$client.setParameters('{"che.video.lowBitRateStreamParameter":{"width":192,"height":108,"frameRate":15,"bitRate":100}}');
		this.$client.enableDualStreamMode(true);
		this.$client.enableVideo();
		this.$client.enableLocalVideo(true);
		this.$client.setVideoProfile(45);
		this.$client.enableLastmileTest()

		let video_devices 	= this.$client.getVideoDevices()
		let audio_devices 	= this.$client.getAudioRecordingDevices()
		let speaker_devices = this.$client.getAudioPlaybackDevices()

		let currentVideoDevice 	= Storage.get("VIDEO_DEVICE"),
			currentAudioDevice 	= Storage.get("AUDIO_DEVICE"),
			currentSpeakerDevice= Storage.get("PLAYBACK_DEVICE")
		if (!currentVideoDevice) {
			currentVideoDevice  = this.$client.getCurrentVideoDevice()
		}
		if (!currentAudioDevice) {
			currentAudioDevice  = this.$client.getCurrentAudioRecordingDevice()
		}
		if (!currentSpeakerDevice) {
			currentSpeakerDevice= this.$client.getCurrentAudioPlaybackDevice()
		}
		if (currentVideoDevice) {
			this.$client.setVideoDevice(currentVideoDevice);
		}
		if (currentAudioDevice) {
			this.$client.setAudioRecordingDevice(currentAudioDevice);
		}
		if (currentSpeakerDevice) {
			this.$client.setAudioPlaybackDevice(currentSpeakerDevice);
		}

		let currentVideoName, currentSpeakerName, currentAudioName
		for(let i=0,len=video_devices.length;i<len;i++) {
			let item = video_devices[i]
			if (item.deviceid == currentVideoDevice) {
				currentVideoName = item.devicename
			}
		}
		for(let i=0,len=audio_devices.length;i<len;i++) {
			let item = audio_devices[i]
			if (item.deviceid == currentAudioDevice) {
				currentAudioName = item.devicename
			}
		}
		for(let i=0,len=speaker_devices.length;i<len;i++) {
			let item = speaker_devices[i]
			if (item.deviceid == currentSpeakerDevice) {
				currentSpeakerName = item.devicename
			}
		}
		this.$quality_msg = ["未知","极好","好","一般","差","极差","不可用"]
		this.state = {
			currentVideoDevice, 
			currentVideoName,
			currentSpeakerDevice,
			currentSpeakerName,
			currentAudioDevice,
			currentAudioName,
			video_devices, audio_devices, speaker_devices,
			volume: this.$client.getAudioPlaybackVolume(),
			step: 1,
			netquality: 0,
			net_history: [0]
		}

		this.$client.on("lastmilequality", (quality) => {
			console.log("quality",quality)
			let qualities = this.state.net_history
			qualities = qualities.splice(qualities.length-50,qualities.length)
			qualities.push(quality)
			this.setState({ netquality: quality, net_history: qualities })
		})
	}

	componentDidMount() {
		console.log("frompage",this.props.fromPage)
	}

	componentWillUnmount() {
		try {
			this.$client.videoSourceLeave();
			this.$client.videoSourceRelease();
			this.$client.stopPreview();
			this.$client.stopAudioRecordingDeviceTest();
			this.$client.removeAllListeners('audiovolumeindication');
			this.$client.stopAudioPlaybackDeviceTest();
			this.$client.disableLastmileTest()
		} catch (err) {
			console.log("client leave failed ", err);
		}
	}

	onStartMicTest() {
		this.$client.startAudioRecordingDeviceTest(100)
		this.$client.on('audiovolumeindication', (uid, volume, speaker, totalVolume) => {
			if (this.state.step == 2) {
				this.setState({
					inputVolume: parseInt(totalVolume / 255 * 13, 10)
				});
			}
		});
	}

	onChangeVolume(value) {
		this.setState({volume: value})
		this.$client.setAudioPlaybackVolume(value);
	}

	onStartPreview() {
		if (this.$previewing) return
		this.$client.setupLocalVideo($("#video-area")[0]);
		this.$client.startPreview();
		this.$previewing = true
	}

	onStopPreview() {
		this.$previewing = false
		this.$client.stopPreview();
		$("#video-area").empty()
		setTimeout(()=>{
			this.setState({step: 2})
		})
	}

	step1() {
		setTimeout(()=>{
			this.onStartPreview()
		},0)
		return (
			<div className="step-content">
				<div className="step-title">确认摄像头能够正常显示，如有问题切换设备试试</div>
				<div className="selector">
					设备：<div className="select-box">{this.state.currentVideoName}</div>
					<select className="select" value={this.state.currentVideoDevice} onChange={(event)=>{
						var index = event.nativeEvent.target.selectedIndex;
						var name  = event.nativeEvent.target[index].text
						this.setState({currentVideoDevice : event.target.value, currentVideoName: name})
						Storage.store("VIDEO_DEVICE",event.target.value)
						this.$client.setVideoDevice(event.target.value);
					}}>
					{
						this.state.video_devices.length > 0 ?
							this.state.video_devices.map((device)=>(
							<option key={device.deviceid} value={device.deviceid}>
								{device.devicename}
							</option>
							))
						:
							<option key="nothing" disabled selected>
								无可用摄像头设备
							</option>
					}
					</select>
				</div>
				<div className="video-area" id="video-area"></div>
				<div className="step-btns">
					<button onClick={()=>{
						this.onStartMicTest()
						this.onStopPreview()
					}} className="step-btn">下一步</button>
				</div>
			</div>
		)
	}

	step2() {
		let Steps = []
		for(let i=0;i<12;i++) {
			if (i >= this.state.inputVolume) {
				Steps.push(<div className="mic-step" key={i}></div>)
			} else {
				Steps.push(<div className="mic-step on" key={i}></div>)
			}
		}
		return (
			<div className="step-content">
				<div className="step-title">说几句话确认音量有变化，如有问题切换设备试试</div>
				<div className="selector">
					设备：<div className="select-box">{this.state.currentAudioName}</div>
					<select className="select" value={this.state.currentAudioDevice} onChange={(event)=>{
						var index = event.nativeEvent.target.selectedIndex;
						var name  = event.nativeEvent.target[index].text
						this.setState({currentAudioDevice : event.target.value, currentAudioName: name})
						Storage.store("AUDIO_DEVICE",event.target.value)
						this.$client.setAudioRecordingDevice(event.target.value);
					}}>
					{
						this.state.audio_devices.length > 0 ?
							this.state.audio_devices.map((device)=>(
							<option key={device.deviceid} value={device.deviceid}>
								{device.devicename}
							</option>
							))
						:
							<option key="nothing" disabled selected>
								无可用麦克风设备
							</option>
					}
					</select>
				</div>
				<div className="mic-area">
					<div className="mic-icon"></div>
					{Steps}
				</div>
				<div className="step-btns">
					<button onClick={()=>{
    					this.$client.stopAudioRecordingDeviceTest();
						this.setState({step: 3})
					}} className="step-btn">下一步</button>
					<button onClick={()=>{
    					this.$client.stopAudioRecordingDeviceTest();
						this.setState({step: 1})
					}} className="prev-step-btn">上一步</button>
				</div>
			</div>
		)
	}

	step3() {
		setTimeout(()=>{
			let filepath;
			if (DEBUG) {
				filepath = path.join(window.ENV_PATHES.__dirname,'libs','AgoraSDK','music.mp3');
			} else {
				filepath = path.join(window.ENV_PATHES.__dirname, '..', 'app.asar.unpacked','dist','libs','AgoraSDK','music.mp3');
			}
			console.log("filepath",filepath)
			this.$client.startAudioPlaybackDeviceTest(filepath);
		},0)
		return (
			<div className="step-content">
				<div className="step-title">调整音量确认能听到音乐，如有问题切换设备试试</div>
				<div className="selector">
					设备：<div className="select-box">{this.state.currentSpeakerName}</div>
					<select className="select" value={this.state.currentSpeakerDevice} onChange={(event)=>{
						var index = event.nativeEvent.target.selectedIndex;
						var name  = event.nativeEvent.target[index].text
						this.setState({currentSpeakerDevice : event.target.value, currentSpeakerName: name})
						Storage.store("PLAYBACK_DEVICE",event.target.value)
						this.$client.setAudioPlaybackDevice(event.target.value);
					}}>
					{
						this.state.speaker_devices.length > 0 ?
							this.state.speaker_devices.map((device)=>(
							<option key={device.deviceid} value={device.deviceid}>
								{device.devicename}
							</option>
							))
						:
							<option key="nothing" disabled selected>
								无可用扬声器设备
							</option>
					}
					</select>
				</div>
				<div className="music-area">
					<div className="music-icon"></div>
					<div className="progress-bar">
						<Slider
						min={0}
						max={255}
						value={this.state.volume}
						onChange={(value)=>{
							this.onChangeVolume(value)
						}}
						/>
					</div>
				</div>
				<div className="step-btns">
					<button className="step-btn" onClick={()=>{
						this.props.onExitTester()
					}}>完成</button>
					<button onClick={()=>{
						this.$client.stopAudioPlaybackDeviceTest();
						this.onStartMicTest()
						this.setState({step: 2})
					}} className="prev-step-btn">上一步</button>
				</div>
			</div>
		)
	}

	render() {
		return  <div className="sound-outer">
			<button className="page-back" onClick={()=>{
				this.props.onExitTester()
			}}></button>
			<div className={"sound-tester s-"+this.state.step}>
				<div className="network">实时网络状态: {this.$quality_msg[this.state.netquality]}</div>
				<div className="network-bar">
				{this.state.net_history.map((quality,index)=>{
					return <div className={"quality q-"+quality} key={index}></div>
				})}
				</div>
				<div className="steps">
					<div className="line l1"></div>
					<div className="line l2"></div>
					<div className="step step-1">
						<div className="step-name">
							<i className="icon"></i>
							摄像头检测
						</div>
						<div className="step-num">1</div>
					</div>
					<div className="step step-2">
						<div className="step-name">
							<i className="icon"></i>
							麦克风检测
						</div>
						<div className="step-num">2</div>
					</div>
					<div className="step step-3">
						<div className="step-name">
							<i className="icon"></i>
							扬声器检测
						</div>
						<div className="step-num">3</div>
					</div>
				</div>
				{this[`step${this.state.step}`]()}
			</div>
		</div>
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		account : state.login.account,
		room 	: state.room.info,
		fromPage: state.main.fromPage
	}
}


const mapDispatchToProps = dispatch => ({
	onExitTester 	: () => dispatch(onExitTester())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Devices)