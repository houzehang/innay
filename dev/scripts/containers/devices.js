import React from 'react';
import { connect } from 'react-redux'
require("../../less/devices.less")
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import { findDOMNode } from 'react-dom';

class Devices extends React.Component {
	constructor(props) {
		super(props)
		let currentVideoDevice 	 = this.props.rtc.getCurrentVideoDevice(),
			currentSpeakerDevice = this.props.rtc.getCurrentAudioPlaybackDevice(),
			currentAudioDevice   = this.props.rtc.getCurrentAudioRecordingDevice()
		let currentVideoName, currentSpeakerName, currentAudioName
		for(let i=0,len=this.props.video_devices.length;i<len;i++) {
			let item = this.props.video_devices[i]
			if (item.deviceid == currentVideoDevice) {
				currentVideoName = item.devicename
			}
		}
		for(let i=0,len=this.props.audio_devices.length;i<len;i++) {
			let item = this.props.audio_devices[i]
			if (item.deviceid == currentAudioDevice) {
				currentAudioName = item.devicename
			}
		}
		for(let i=0,len=this.props.speaker_devices.length;i<len;i++) {
			let item = this.props.speaker_devices[i]
			if (item.deviceid == currentSpeakerDevice) {
				currentSpeakerName = item.devicename
			}
		}
		this.state = {
			currentVideoDevice, 
			currentVideoName,
			currentSpeakerDevice,
			currentSpeakerName,
			currentAudioDevice,
			currentAudioName,
			volume: 0.5,
			step: 1
		}
	}

	componentDidMount() {
		console.log("start test...")
		this.props.rtc.startAudioRecordingDeviceTest(100)
		this.props.rtc.on('audiovolumeindication', (...args) => {
			console.log(args)
		});
	}

	componentWillUnmount() {
		this.giveBackCamera()
	}

	isMaster(id) {
		if (!id) {
			id = this.props.account.id
		}
		for(let i=0,len=this.props.room.teachers.length;i<len;i++) {
			let item = this.props.room.teachers[i]
			if (item.id == id) {
				return true
			}
		}
	}

	isChairMaster(id) {
		if (!id) {
			id = this.props.account.id
		}
		return this.props.room.teacher_id == id
	}

	isSubMaster(id) {
		if (!id) {
			id = this.props.account.id
		}
		return this.isMaster(id) && !this.isChairMaster(id)
	}

	giveBackCamera() {
		if (this.state.step != 1) {
			return
		}
		if (this.isChairMaster()) {
			let target = $('#master-head')
			if (target.length > 0) {
				target.html("")
				this.props.rtc.setupLocalVideo(target[0])
			}
		} else {
			let target = $('#student_'+this.props.account.id)
			if (target.length > 0) {
				target.html("")
				this.props.rtc.setupLocalVideo(target[0])
			}
		}
	}

	onChangeVolume(value) {
        let audio = findDOMNode(this.refs.tester_audio);
        audio.volume = value
		this.setState({volume: value})
	}

	step1() {
		setTimeout(()=>{
			this.props.rtc.setupLocalVideo($('#video-area')[0])
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
						this.props.rtc.setVideoDevice(event.target.value);
					}}>
					{
						this.props.video_devices.length > 0 ?
							this.props.video_devices.map((device)=>(
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
				<button onClick={()=>{
					this.giveBackCamera()
					$('#video-area').html("")
					setTimeout(()=>{
						this.setState({step: 2})
					},100)
				}} className="step-btn">下一步</button>
			</div>
		)
	}

	step2() {
		let Steps = []
		for(let i=0;i<12;i++) {
			Steps.push(<div className="mic-step" key={i}></div>)
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
						this.props.rtc.setAudioRecordingDevice(event.target.value);
					}}>
					{
						this.props.audio_devices.length > 0 ?
							this.props.audio_devices.map((device)=>(
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
				<button onClick={()=>{
					this.setState({step: 3})
				}} className="step-btn">下一步</button>
				<button onClick={()=>{
					this.setState({step: 1})
				}} className="prev-step-btn">上一步</button>
			</div>
		)
	}

	step3() {
		setTimeout(()=>{
			this.onChangeVolume(this.state.volume)
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
						this.props.rtc.setAudioPlaybackDevice(event.target.value);
					}}>
					{
						this.props.speaker_devices.length > 0 ?
							this.props.speaker_devices.map((device)=>(
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
					<audio ref="tester_audio" src={require("../../assets/sounder.mp3")} autoPlay={true} loop={true}/>
					<div className="progress-bar">
						<Slider
						min={0}
						max={1}
						step={0.01}
						value={this.state.volume}
						onChange={(value)=>{
							this.onChangeVolume(value)
						}}
						/>
					</div>
				</div>
				<button className="step-btn">完成</button>
				<button onClick={()=>{
					this.setState({step: 2})
				}} className="prev-step-btn">上一步</button>
			</div>
		)
	}

	render() {
		return  <div className={"sound-tester s-"+this.state.step}>
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
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		account : state.login.account,
		room 	: state.room.info
	}
}

export default connect(
	mapStateToProps,
	null
)(Devices)