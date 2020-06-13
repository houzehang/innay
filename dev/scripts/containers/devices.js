import React from 'react';
import { connect } from 'react-redux'
import "../../less/devices.less"
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import path				from "path"
import Const 			from "../../const"
import Storage  		from "../../../core/DB"
import AgoraRtcEngine 	from '../../agora/AgoraSdk'
import net 				from "../network"
import context		    from "../context"
import { remote } 		from "electron"
import { 
	onExitTester,alert,confirm
} from '../actions'
class Devices extends React.Component {
	constructor(props) {
		super(props)
		Storage.update()
		
		this.$client = new AgoraRtcEngine()
		this.$client.initialize(context.agoraAppId);
		this.$client.on('error', (err, msg)=>{
			console.error("Got error msg:", err);
			net.log({"DEVICE-TEST":`init error, code: ${err}, message: ${msg}`})
			context.log(`device-init error, code: ${err}, message: ${msg}`)
		});
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
		this.$client.setVideoProfile(450);
		this.$client.enableLastmileTest()
		this.$client.setAudioPlaybackVolume(150);
		this.$agora_log_file = path.join(remote.app.getPath("userData"),"agora.log")
		this.$client.setLogFile(this.$agora_log_file)
		this.$max_device_volumn = 0
		
		this.$quality_msg = ["未知","极好","好","一般","差","极差","不可用"]
		this.state = {
			volume: this.$client.getAudioPlaybackVolume() / 255 * 100 >> 0,
			step: 0,
			netquality: 0,
			net_history: [0],
			check_over: 0,
			camera_failed: false,
			mic_failed: false,
			speaker_failed: false 
		}

		let deviceInfo = this.__resume_devices()
		for (let key in deviceInfo) {
			this.state[key] = deviceInfo[key]
		}

		this.$client.on("lastmilequality", (quality) => {
			console.log("quality",quality)
			let qualities = this.state.net_history
			qualities = qualities.splice(qualities.length-50,qualities.length)
			qualities.push(quality)
			this.setState({ netquality: quality, net_history: qualities })
			if (quality == 1 || quality == 2) {
				quality = 1
			} else if (quality == 3) {
				quality = 2
			} else if (quality == 4) {
				quality = 3
			} else if (quality == 5) {
				quality = 4
			} else {
				quality = 0
			}
			net.log({name:"NET:STATUS", status: quality, from: "DEVICE-TEST"})
			context.log(`device-net status: ${quality}`)
		})
	}

	__is_device_in(devices, id) {
		if (!id) return false
		let found
		for(let i=0,len=devices.length;i<len;i++) {
			let item = devices[i]
			if (item.deviceid == id) {
				found = true
				break
			}
		}
		return found
	}

	__resume_devices() {
		let currentVideoDevice 		= Storage.get("VIDEO_DEVICE"),
			currentAudioDevice 		= Storage.get("AUDIO_DEVICE"),
			currentSpeakerDevice  	= Storage.get("PLAYBACK_DEVICE")
		
		let video_devices 	= this.$client.getVideoDevices()
		let audio_devices 	= this.$client.getAudioRecordingDevices()
		let speaker_devices = this.$client.getAudioPlaybackDevices()
		video_devices 		= context.filterVideoDevice(video_devices);

		if (!this.__is_device_in(video_devices,currentVideoDevice)) {
			currentVideoDevice = null
		}
		if (!this.__is_device_in(audio_devices,currentAudioDevice)) {
			currentAudioDevice = null
		}
		if (!this.__is_device_in(speaker_devices,currentSpeakerDevice)) {
			currentSpeakerDevice = null
		}
		if (currentVideoDevice) {
			this.$client.setVideoDevice(currentVideoDevice);
		} else {
			currentVideoDevice = this.$client.getCurrentVideoDevice()
		}
		if (currentAudioDevice) {
			this.$client.setAudioRecordingDevice(currentAudioDevice);
		} else {
			currentAudioDevice = this.$client.getCurrentAudioRecordingDevice()
		}
		if (currentSpeakerDevice) {
			this.$client.setAudioPlaybackDevice(currentSpeakerDevice);
		} else {
			currentSpeakerDevice = this.$client.getCurrentAudioPlaybackDevice()
		}
		let currentVideoName 	= '无可用摄像头设备', 
			currentSpeakerName	= '无可用扬声器设备', 
			currentAudioName	= '无可用麦克风设备'
		for(let i=0,len=video_devices.length;i<len;i++) {
			let item = video_devices[i]
			if (item.deviceid == currentVideoDevice) {
				currentVideoName = item.devicename
				break
			}
		}
		for(let i=0,len=audio_devices.length;i<len;i++) {
			let item = audio_devices[i]
			if (item.deviceid == currentAudioDevice) {
				currentAudioName = item.devicename
				break
			}
		}
		for(let i=0,len=speaker_devices.length;i<len;i++) {
			let item = speaker_devices[i]
			if (item.deviceid == currentSpeakerDevice) {
				currentSpeakerName = item.devicename
				break
			}
		}
		net.log({
			"DEVICE-TEST"	: 'device list', 
			"camera"		: video_devices, 
			"mic"			: audio_devices, 
			"speaker"		: speaker_devices 
		})
		context.log(`device-list camera:${video_devices} mic:${audio_devices} speaker:${speaker_devices}`)

		return {
			currentVideoDevice, 
			currentVideoName,
			currentSpeakerDevice,
			currentSpeakerName,
			currentAudioDevice,
			currentAudioName,
			video_devices, audio_devices, speaker_devices
		}
	}

	componentDidMount() {
		console.log("frompage",this.props.fromPage)
	}

	componentWillUnmount() {
		try {
			this.$client.videoSourceLeave();
			this.$client.videoSourceRelease();
			this.$client.destroyRender('local')
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
		this.$client.on('audiovolumeindication', (uid, volume, speaker) => {
			if (this.state.step == 2) {
				let volumn =  parseInt(volume / 255 * 13, 10)
				if (volumn > this.$max_device_volumn) {
					this.$max_device_volumn = volumn
				}
				this.setState({
					inputVolume: volumn
				});
			}
		});
	}

	onChangeVolume(value) {
		this.setState({volume: value})
		this.$client.setAudioPlaybackVolume(value / 100 * 255 >> 0);
	}

	onStartPreview() {
		if (this.$previewing) return
		this.$client.setupLocalVideo(context.get("#video-area"));
		this.$client.startPreview();
		this.$previewing = true
	}

	onStopPreviewAndStepTo(step, complete = ()=>{}) {
		this.$previewing = false
		this.$client.destroyRender('local')
		this.$client.stopPreview();
		context.empty("#video-area")
		setTimeout(()=>{
			this.setState({step})
			complete()
		})
	}

	step0() {
		let systemInfo = (window.ENV_CONF||{}).systeminfo || {
			os:{},cpu:{},system:{}
		}
		try{
			let memory 	   = remote.process.getSystemMemoryInfo() || {total:0}
			let os		   = '操作系统：' + (systemInfo.os.distro || '').replace(/[^a-zA-Z_0-9 ]/g,'') + ' ' + (systemInfo.os.kernal || '');
			let cpuBrand   = 'CPU型号：' + (systemInfo.cpu.brand || '');
 			let cpuCores   = 'CPU核数：' + (systemInfo.cpu.physicalCores || '') + '核' + (systemInfo.cpu.cores || '') + '线程';
			let cpuSpeed   = 'CPU主频：' + (systemInfo.cpu.speed || '') + 'Hz' + (systemInfo.cpu.speed == systemInfo.cpu.speedmax ? '' : (' - '+(systemInfo.cpu.speedmax || '') + 'Hz')); 
			let memoray    = '系统内存：' + (Math.round((memory.total||0)/1024/1024*10)/10)+"G";
			let deviceType = '设备型号：' + (systemInfo.system.manufacturer||'') + (systemInfo.system.model||'');
			return (
				<div className="step-content">
					<div className="os-detail-area">
						<div className='os-cell'>
							<div className='cell-tag'>{os}</div>
							<div className='cell-tag'>{cpuBrand}</div>
							<div className='cell-tag'>{cpuCores}</div>
							<div className='cell-tag'>{cpuSpeed}</div>
							<div className='cell-tag'>{memoray}</div>
							<div className='cell-tag'>{deviceType}</div>
						</div>
					</div>
					<div className="step-btns">
						<button onClick={()=>{
							if (!context.joinClassEnabled) {
								this.props.alert({
									content: "亲爱的宝妈您好，因我们课件的动画和交互较多，经检测您目前的设备可能不支持我们的正常上课，为了避免影响您的上课体验，请联系您的顾问老师帮您解决，感谢您的支持！",
									sure: ()=>{}
								});
								return;
							}
							net.log({"DEVICE-TEST": "hardware test passed"})
							context.log('device-hardware test passed')
							this.setState({step: 1})
						}} className="step-btn check-correct"></button>
					</div>
				</div>
			)
		}catch(error){
			console.log('error:device->step0,',error.message || error);
		}
		return '';
	}

	__on_step1_done({ passed }) {
		this.onStartMicTest()
		this.onStopPreviewAndStepTo(2, ()=>{
			this.setState({ camera_failed: !passed })
		})
		net.log({"DEVICE-TEST":`camera test ${passed?"passed":"failed"}`})
		context.log(`device-camera test ${passed?"passed":"failed"}`)
	}

	step1() {
		setTimeout(()=>{
			this.onStartPreview()
		},0)
		return (
			<div className="step-content">
				<div className="step-title">确认摄像头能够正常显示，如有问题切换设备试试</div>
				<div className="selector">
					设备：<div className="select-box">{this.state.currentVideoName}
						<div className="select-icon">
						    <img src={require('../../assets/tester-select.png')}/>
						</div>
					</div>
					<select className="select" value={this.state.currentVideoDevice} onChange={(event)=>{
						var index = event.nativeEvent.target.selectedIndex;
						var name  = event.nativeEvent.target[index].text
						this.setState({currentVideoDevice : event.target.value, currentVideoName: name})
						Storage.store("VIDEO_DEVICE",event.target.value)
						this.$client.setVideoDevice(event.target.value);
						net.log({"DEVICE-TEST":`change camera id:${event.target.value}, name: ${name}`})
						context.log(`device-change camera id:${event.target.value}, name: ${name}`)
					}}>
					{
						this.state.video_devices.length > 0 ?
							this.state.video_devices.map((device)=>(
							<option key={device.deviceid} value={device.deviceid}>
								{device.devicename}
							</option>
							))
						:
							<option key="nothing" disabled>
								无可用摄像头设备
							</option>
					}
					</select>
				</div>
				<div className="video-area" id="video-area" ref={el=>this.$video_area=el}></div>
				<div className="step-btns">
					<div className="stepbtn-box">
						<button onClick={()=>{
							this.__on_step1_done({ passed: false })
						}} className="step-btn no-pass cantsee-image"></button>
						<button onClick={()=>{
							this.__on_step1_done({ passed: true })
						}} className="step-btn clear-image"></button>
					</div>
					<button onClick={()=>{
						this.onStopPreviewAndStepTo(0)
						this.setState({step: 0})
					}} className="prev-step-btn">上一步</button>
				</div>
			</div>
		)
	}

	__on_step2_done({ passed }) {
		this.$client.stopAudioRecordingDeviceTest();
		this.setState({step: 3})
		this.setState({
			check_over: true
		})
		this.setState({ mic_failed: !passed })
		net.log({"DEVICE-TEST": `mic test ${passed?"passed":"failed"}, max volumn: ${this.$max_device_volumn / 12 * 100 >> 0}%`})
		context.log(`device-mic test ${passed?"passed":"failed"}, max volumn: ${this.$max_device_volumn / 12 * 100 >> 0}%`)
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
					设备：<div className="select-box">{this.state.currentAudioName}
					    <div className="select-icon">
						    <img src={require('../../assets/tester-select.png')}/>
						</div>
					</div>
					<select className="select" value={this.state.currentAudioDevice} onChange={(event)=>{
						var index = event.nativeEvent.target.selectedIndex;
						var name  = event.nativeEvent.target[index].text
						this.setState({currentAudioDevice : event.target.value, currentAudioName: name})
						Storage.store("AUDIO_DEVICE",event.target.value)
						this.$client.setAudioRecordingDevice(event.target.value);
						net.log({"DEVICE-TEST":`change mic id:${event.target.value}, name: ${name}`})
						context.log(`device-change mic id:${event.target.value}, name: ${name}`)
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
					<div className="stepbtn-box">
						<button onClick={()=>{
							this.__on_step2_done({passed: false})
						}} className="step-btn no-pass no-voice"></button>
						<button onClick={()=>{
							this.__on_step2_done({passed: true})
						}} className="step-btn see-voice"></button>
					</div>
					<button onClick={()=>{
    					this.$client.stopAudioRecordingDeviceTest();
						this.setState({step: 1})
					}} className="prev-step-btn">上一步</button>
				</div>
			</div>
		)
	}

	__on_step3_done({ passed }) {
		this.$client.stopAudioPlaybackDeviceTest();
		this.setState({ speaker_failed: !passed })
		net.log({"DEVICE-TEST": `speaker test ${passed?"passed":"failed"}`})
		context.log(`device-speaker test ${passed?"passed":"failed"}`)
		let failed
		if (this.state.camera_failed || this.state.mic_failed || !passed) {
			failed = true
		} else {
			failed = false
		}
		if (!failed) {
			this.props.alert({
				content: "设备检测通过，欢迎您进入压多宝。",
				sure: ()=>{
					net.log({"DEVICE-TEST": "user device test success."})
					context.log('device-user device test success.')
					this.__exit()
				}
			})
		} else {
			this.props.confirm({
				content: "设备检测存在异常，请联系课程顾问帮您解决。",
				cancel_txt: "",
				sure_txt: "",
				sure: ()=>{
					net.log({"DEVICE-TEST": "user device test failed and restart."})
					context.log('device-user device test failed and restart.')
					this.$playing = false
					this.setState({step: 1, camera_failed: false, mic_failed: false, speaker_failed: false})
				},
				cancel: ()=>{
					net.log({"DEVICE-TEST": "user device test failed and stepover."})
					context.log('device-user device test failed and stepover.')
					this.__exit()
				},
				style: Const.EBTN_STYLE_CONFIG.kDeviceTest
			})
			context.upload_agora_logs()
		}
	}

	step3() {
		if (!this.$playing) {
			this.$playing = true
			setTimeout(()=>{
				let filepath;
				if ((window.ENV_CONF || {}).DEBUG) {
					filepath = path.join(window.ENV_CONF.__dirname,'libs','AgoraSDK','music.mp3');
				} else {
					filepath = path.join(window.ENV_CONF.__dirname, 'app.asar.unpacked','dist','libs','AgoraSDK','music.mp3');
				}
				console.log("filepath",filepath)
				this.$client.startAudioPlaybackDeviceTest(filepath);
			},0)
		}
		return (
			<div className="step-content">
				<div className="step-title">调整音量确认能听到音乐，如有问题切换设备试试</div>
				<div className="selector">
					设备：<div className="select-box">{this.state.currentSpeakerName}
						<div className="select-icon">
						    <img src={require('../../assets/tester-select.png')}/>
						</div>
					</div>
					<select className="select" value={this.state.currentSpeakerDevice} onChange={(event)=>{
						var index = event.nativeEvent.target.selectedIndex;
						var name  = event.nativeEvent.target[index].text
						this.setState({currentSpeakerDevice : event.target.value, currentSpeakerName: name})
						Storage.store("PLAYBACK_DEVICE",event.target.value)
						this.$client.setAudioPlaybackDevice(event.target.value);
						net.log({"DEVICE-TEST":`change speaker id:${event.target.value}, name: ${name}`})
						context.log(`device-change speaker id:${event.target.value}, name: ${name}`)
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
						max={100}
						value={this.state.volume}
						onChange={(value)=>{
							this.onChangeVolume(value)
						}}
						/>
					</div>
				</div>
				<div className="step-btns">
					<div className="stepbtn-box">
						<button className="step-btn no-pass no-hear" onClick={()=>{
							this.__on_step3_done({passed: false})
						}}></button>
						<button className="step-btn can-hear" onClick={()=>{
							this.__on_step3_done({passed: true})
						}}></button>
					</div>
					<button onClick={()=>{
						this.$playing = false
						this.$client.stopAudioPlaybackDeviceTest();
						this.onStartMicTest()
						this.setState({step: 2})
					}} className="prev-step-btn">上一步</button>
				</div>
			</div>
		)
	}

	__exit() {
		context.upload_system_logs()
		context.upload_agora_logs()
		this.props.onExitTester();
		this.props.onExit()
		if(this.state.check_over){
			localStorage.setItem('DEVICE_CHECKED_ALREADY', 1);
		}
	}

	render() {
		return  <div className="sound-outer">
			<button className="page-back" onClick={()=>{
				this.__exit();
			}}></button>
			<div className={"sound-tester s-"+this.state.step}>
				<div className={this.state.netquality>3?"network bad":"network"}>实时网络状态: {this.$quality_msg[this.state.netquality]}</div>
				<div className="network-bar">
				{this.state.net_history.map((quality,index)=>{
					return <div className={"quality q-"+quality} key={index}></div>
				})}
				</div>
				<div className="steps">
					<div className="line l0"></div>
					<div className={`line l1${this.state.camera_failed ? " failed" : ""}`}></div>
					<div className={`line l2${this.state.mic_failed ? " failed" : ""}`}></div>
					<div className="step step-0">
						<div className="step-name">
							<i className="icon"></i>
							主机检测
						</div>
						<div className="step-num">1</div>
					</div>
					<div className="step step-1">
						<div className="step-name">
							<i className="icon"></i>
							摄像头检测
						</div>
						{this.state.camera_failed?<div className="step-num failed">!</div>:<div className="step-num">2</div>}
						
					</div>
					<div className="step step-2">
						<div className="step-name">
							<i className="icon"></i>
							麦克风检测
						</div>
						{this.state.mic_failed?<div className="step-num failed">!</div>:<div className="step-num">3</div>}
					</div>
					<div className="step step-3">
						<div className="step-name">
							<i className="icon"></i>
							扬声器检测
						</div>
						{this.state.speaker_failed?<div className="step-num failed">!</div>:<div className="step-num">4</div>}
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
	onExitTester 	: () => dispatch(onExitTester()),
	alert 	   	   	: (data) => dispatch(alert(data)),
	confirm 	   	: (data) => dispatch(confirm(data))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Devices)