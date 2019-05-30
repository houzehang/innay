import React from 'react';
import { connect } from 'react-redux'
import { 
	onEndCourse, onRoomMoreInfo,
	onNewStream, onStreamLeave,
	onHandsupSwitch, onNewGift,
	onWarn,
	onHandsupRank, onUserMuted, onMuteAllSwitch, onSilentSwitch,
	onDancing,
	onBeginCourse,
	onPauseCourse,
	onResumeCourse,
	onCourseTick,
	confirm, alert,
	onEnterTester,
	onMagicSwitch,
	showLoading,hideLoading,onRankSwitch,
	onProgressUpdate,
	onUpdateGift, onProgressReset, onUserAddRoom,
	onQuestionList,
	onQuestionDetail
} from '../actions' 

import CourseBase from './course.base.page'
const Const = require('../../const')
const {getCurrentWindow} = $require('electron').remote;
const { ipcRenderer } 	 = $require('electron');

const Room 			 = require("../AgoraStream")
const Signalize 	 = require('../AgoraSignal')
const context 		 = require("../context")
const Storage 		 = require('../Storage')

class Course extends CourseBase {
	constructor(props) {
		super(props)

		this.$room = new Room(this)
		this.$signal = new Signalize(this)
		this.$downloaded_handler = (event, url, file) => {
			context.addDownloaded(url, file)			
		}
		ipcRenderer.on("DOWNLOADED", this.$downloaded_handler);
		
		if (context && context.detector) {
			context.detector.waring_threshold = 2;
		}
		this.$view_mode = 1
		
		this.state 		= { 
			control	   		: !this.props.status.started,
			process	   		: {current:0,total:0},
			blind  	   		: context.oldDevice,
			blindAlert 		: context.oldDevice,
			blindAlertSecond: 30
		}
	}

	__init_device_doctor() {
		let video_devices 	= this.$room.rtc.getVideoDevices()
		let audio_devices   = this.$room.rtc.getAudioRecordingDevices()
		let speaker_devices = this.$room.rtc.getAudioPlaybackDevices()

		let currentVideoDevice 	 = this.$room.rtc.getCurrentVideoDevice(),
			currentAudioDevice 	 = this.$room.rtc.getCurrentAudioRecordingDevice(),
			currentSpeakerDevice = this.$room.rtc.getCurrentAudioPlaybackDevice(),
			currentVideoName, 
			currentAudioName,
			currentSpeakerName

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
		this.setState({ 
			currentVideoDevice,
			currentAudioDevice,
			currentSpeakerDevice,
			currentVideoName,
			currentAudioName,
			currentSpeakerName,
			video_devices,
			audio_devices,
			speaker_devices
		})
	}

	/**
	 * 刷新视频流显示
	 * 低端设备不显示其他学生流
	 */
	updateStreams() {
		let oldDevice = context.oldDevice
		if (oldDevice) {
			//不显示其他学生视频流
			let closeUsers = []
			this.props.students.map((student = {})=>{
				let id   = student.id
				let self = id == this.props.account.id

				if(id && id != this.$dancing_id && !self && student.online){
					try{
						this.$room.unsubscribe(id)
						this.$room.rtc.destroyRender(id)
						closeUsers.push(id)
					}catch(error){
						console.error(error)
					}
				}
			})
			if (closeUsers.length > 0) {
				this.$session.send_message("CLOSE_USERS", { closeUsers })
			}
			
		}else{
			//显示其他学生视频流
			this.props.students.map((student = {})=>{
				let id   = student.id
				let self = id == this.props.account.id
				if(	id && id != this.$dancing_id && !self && student.online){
					try{
						this.$room.rtc.subscribe(id, {width: Const.SMALL_MODE, height: Const.SMALL_MODE, cocos: true })
						//param-2: 0 - high, 1 - low
						this.$room.rtc.setRemoteVideoStreamType(id, 1)
						//param-1: type of renderer, 0 - local, 1 - remote, 2 - device test, 3 - video source
						this.$room.rtc.setVideoRenderDimension(1, id, Const.SMALL_MODE, Const.SMALL_MODE)
					}catch(error){
						console.error(error)
					}
				}
			})
		}
	}

	componentDidMount() {
		this.$room.init()
		this.$room.on("NEW_STREAM", (stream) => {
			// 判断是不是主班老师
			let id = stream.getId()
			let isSubMaster = this.isSubMaster(id)
			if (isSubMaster) {
				return
			}
			let self = id == this.props.account.id
			// 如果是低端设备则不显示流信息
			if (self || this.isChairMaster(id) || !context.oldDevice) {
				stream.play()
			}
			this.$session.send_message("NEW_STREAM", {
				id,
				render: ()=>{
					let render = this.$room.rtc.getRender(self ? 0 : id)
					if (render) {
						return render.canvas
					}
				}
			})
		})
		this.$room.on("REMOVE_STREAM", (stream) => {
			let id = stream.getId()
			this.$session.send_message("REMOVE_STREAM", { id })
			// 老师监听到有人退出如果还在上台，则发送他下台指令
			if (this.isChairMaster()) {
				if (id) {
					if (this.$last_dancing == id) {
						this.$session.send_message(Const.BACK_DANCE, { id })
					}
				}
			}
		})
		this.$room.on("ADD_ROOM", (id) => {
			// 新用户加入
			this.$session.send_message("ADD_ROOM", { id })
			this.$room.refreshMute()
		})
		this.$room.on("LEAVE_ROOM", ()=>{
			if (this.$entered) {
				localStorage.setItem("ENTERED",1)
				getCurrentWindow().reload()
			} else {
				this.$session.destroy()
				this.props.onEndCourse()
				if (this.props.onLeaveRoom) {
					this.props.onLeaveRoom();
				}
			}
		})
		this.__init_device_doctor()
		super.componentDidMount();
	}


	componentWillUnmount() {
		this.__blind_destory()
		super.componentWillUnmount()
	}

	__dancing_handler(data) {
		if (!data.message || !data.message.id) return
		let id = data.message.id
		let isSelf = id == this.props.account.id
		let render = this.$room.rtc.getRender(isSelf ? 0 : id)
		switch (data.type) {
			case Const.PUT_DANCE:
			if(this.$dancing_id) {
				if (context.oldDevice) {
					// 老设备需要关闭流
					this.$room.unsubscribe(this.$dancing_id)
					this.$room.rtc.destroyRender(this.$dancing_id)
				}
			}
			this.$dancing_id = id
			if (context.oldDevice) {
				if (!isSelf) {
					// 老设备需要开启流
					this.$room.rtc.subscribe(id, {width: Const.LARGE_MODE, height: Const.LARGE_MODE, cocos: true })
					this.$room.rtc.setRemoteVideoStreamType(id, 0)
					this.$room.rtc.setVideoRenderDimension(1, id, Const.LARGE_MODE, Const.LARGE_MODE)
					return
				}
			}
			if (!isSelf) {
				this.$room.rtc.setRemoteVideoStreamType(id, 0)
			}
			this.$room.rtc.setVideoRenderDimension(isSelf ? 0 : 1, id, Const.LARGE_MODE, Const.LARGE_MODE)
			if (render) {
				render.updateSize({width: Const.LARGE_MODE, height: Const.LARGE_MODE})
			}
			break
			case Const.BACK_DANCE:
			this.$dancing_id = null
			if (context.oldDevice) {
				if (!isSelf) {
					// 老设备需要关闭流
					this.$room.unsubscribe(id)
					this.$room.rtc.destroyRender(id)
					return
				}
			}
			if (!isSelf) {
				this.$room.rtc.setRemoteVideoStreamType(id, 1)
			}
			this.$room.rtc.setVideoRenderDimension(isSelf ? 0 : 1, id, Const.SMALL_MODE, Const.SMALL_MODE)
			if (render) {
				render.updateSize({width: Const.SMALL_MODE, height: Const.SMALL_MODE})
			}
			break
		}
	}

	__on_session_message(message, force) {
		if (message.to == "app" || force) {
			switch (message.type) {
				case Const.PUT_DANCE:
				case Const.BACK_DANCE:
				this.__dancing_handler(message)
				break
			}
		}
		super.__on_session_message(message, force)
	}

	__on_signal_message(data) {
		this.__dancing_handler(data)
		super.__on_signal_message(data)
	}

	leaveCourse() {
		this.$room.leave()
		this.$signal.leave()
	}

	preLeaveCourse() {
		this.props.confirm({
			content : "确定要临时退出房间吗？",
			sure: ()=>{
				this.props.showLoading("正在退出房间...")
				this.leaveCourse()
			}
		})
	}

	__select_question(id){
		this.props.onQuestionDetail(id);
		this.props.onQuestionList(false);
	}

	__select_device(value, name){
		let curIndex = 0, device;
		if (this.props.switches.questionDetail == 1) {
			if (!value && !name) {
				this.state.video_devices.map((device,index)=>{
					if (device && device.deviceid == this.state.currentVideoDevice) {
						curIndex = index;
					}
				});
				if (++curIndex >= this.state.video_devices.length) {
					curIndex = 0;
				}
				device = this.state.video_devices[curIndex];
				value = device.deviceid;
				name  = device.devicename;
			}

			this.setState({currentVideoDevice : value, currentVideoName: name})
			Storage.store("VIDEO_DEVICE",value)
			this.$room.rtc.setVideoDevice(value);

		}else if(this.props.switches.questionDetail == 2){
			if (!value && !name) {
				this.state.audio_devices.map((device,index)=>{
					if (device && device.deviceid == this.state.currentAudioDevice) {
						curIndex = index;
					}
				});
				if (++curIndex >= this.state.audio_devices.length) {
					curIndex = 0;
				}
				device = this.state.audio_devices[curIndex];
				value  = device.deviceid;
				name   = device.devicename;
			}

			this.setState({currentAudioDevice : value, currentAudioName: name})
			Storage.store("AUDIO_DEVICE",value)
			this.$room.rtc.setAudioRecordingDevice(value);
		}else if(this.props.switches.questionDetail == 3){
			if (!value && !name) {
				this.state.speaker_devices.map((device,index)=>{
					if (device && device.deviceid == this.state.currentSpeakerDevice) {
						curIndex = index;
					}
				});
				if (++curIndex >= this.state.speaker_devices.length) {
					curIndex = 0;
				}
				device = this.state.speaker_devices[curIndex];
				value  = device.deviceid;
				name   = device.devicename;
			}
			
			this.setState({currentSpeakerDevice : value, currentSpeakerName: name})
			Storage.store("PLAYBACK_DEVICE",value)
			this.$room.rtc.setAudioPlaybackDevice(value);
		}
		this.$room.__resume_devices()
	}

	__blind_destory(){
		this.setState({
			blindAlert: false
		})
		if (this.$timer_blind) {
			clearInterval(this.$timer_blind)
			this.$timer_blind = null
		}
	}

	__blind_alert(){
		if (this.state.blindAlert) {
			if (!this.$timer_blind) {
				this.$timer_blind = setInterval(() => {
					this.setState({
						blindAlertSecond: this.state.blindAlertSecond - 1
					})
					if (this.state.blindAlertSecond <= 0) {
						this.__blind_destory()
					}
				}, 1000);
			}
			return <div className="blind-alert">
				<div className="tips">
					<span>系统已自动检测您的硬件和网络，为了您的上课体验，已自动设置“不看其他学生”</span>
					<span>点击下方帮助按钮可修改此设置</span>
				</div>
				<button className="close-btn" onClick={()=>{
					this.__blind_destory()
				}}>{`我知道了(${this.state.blindAlertSecond}s)`}</button>
			</div>
		}
		return ''
	}

	render() {
		let displayDeviceName, curDevice, devices, emptyText, tipsText;
		if (this.props.switches.questionDetail == 1) {
			displayDeviceName = this.state.currentVideoName
			curDevice 		  = this.state.currentVideoDevice
			devices			  = this.state.video_devices
			emptyText		  = '无可用摄像头设备'
			tipsText 		  = '点击下拉框切换一个设备，看看老师能不能看到你。'
			
		}else if(this.props.switches.questionDetail == 2){
			displayDeviceName = this.state.currentAudioName
			curDevice 		  = this.state.currentAudioDevice
			devices			  = this.state.audio_devices
			emptyText		  = '无可用麦克风设备'
			tipsText 		  = '点击下拉框切换一个设备，问问老师能不能听到你。'
		}else if(this.props.switches.questionDetail == 3){
			displayDeviceName = this.state.currentSpeakerName
			curDevice 		  = this.state.currentSpeakerDevice
			devices			  = this.state.speaker_devices
			emptyText		  = '无可用扬声器设备'
			tipsText 		  = '点击下拉框切换一个设备，听听看能不能听到老师说话。'
		}
		return (
			<div className="page course-page student">
				<div className="inner">
				{this.props.switches.questionDetail?
					<div className="question-detail">
						<div className="container">
							<div className="tips">{tipsText}</div>
							<div className="selector">
								设备：<div className="select-box">{displayDeviceName}</div>
								<select className="select" value={curDevice} onChange={(event)=>{
									var index = event.nativeEvent.target.selectedIndex;
									var name  = event.nativeEvent.target[index].text
									this.__select_device(event.target.value,name);
								}}>
								{
									devices.length > 0 ?
									devices.map((device)=>(
										<option key={device.deviceid} value={device.deviceid}>
											{device.devicename}
										</option>
										))
									:
										<option key="nothing" disabled selected>
											{emptyText}
										</option>
								}
								</select>
							</div>
							<div className="btn-switch" onClick={()=>{
								this.__select_question(0)
							}}>
							</div>
							<button className="close-btn" onClick={()=>{
								this.__select_question(0);
							}}></button>
						</div>
					</div>

				:""}
					<div className="course-page-back" onClick={()=>{
						this.preLeaveCourse()
					}}></div>
					<div className="content">
						<div className="course-content kc-canvas-area cocos" id="course-content"></div>
					</div>
					<div className="counter icon">
						<button className="help-btn warn-btn" onClick={()=>{
							// this.onHelpClick()
							this.__blind_destory()
							this.props.onQuestionList(!this.props.switches.questionList);
						}}></button>
					</div>
					{this.props.switches.questionList?
						<div className="question-container" onClick={()=>{
							this.__select_question(0);
						}}>
							<div className="question-list">
								<button className="question-cell cell-1" onClick={(e)=>{
									e.stopPropagation();
									this.__select_question(1);
								}}>老师看不到我？</button>
								<button className="question-cell cell-2" onClick={(e)=>{
									e.stopPropagation();
									this.__select_question(2);
								}}>老师听不到我的声音？</button>
								<button className="question-cell cell-3" onClick={(e)=>{
									e.stopPropagation();
									this.__select_question(3);
								}}>听不到老师的声音？</button>

								<div className="question-cell" onClick = {(e)=>{
										e.stopPropagation();
										let blind 	= !this.state.blind
										let execute = ()=>{
											context.oldDevice = blind
											this.setState({blind})
											this.updateStreams()
										}
										if (context.oldDeviceInfact && !blind) {
											this.props.onQuestionList(false);
											this.props.confirm({
												content: "系统通过综合分析您的硬件和网络环境，为了保证宝贝良好的上课体验，不建议您开启此设置。",
												sure_txt: "继续开启",
												cancel_txt: "不开启",
												title: "温馨提示",
												sure: ()=>{
													execute()
												},
												cancel: ()=>{}
											})
										}else{
											execute()
										}
									}}>
									<input type="checkbox" value = '不看其他学生' checked = {this.state.blind} onChange={()=>{}} />
									<span>不看其他学生</span>
								</div>
							</div>	
						</div>
					: this.__blind_alert() }
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		account 	: state.login.account,
		room 		: state.room.info,
		students	: state.room.students,
		teacher 	: state.room.teacher,
		started 	: state.main.courseStarted,
		switches	: state.room.switches,
		status  	: state.room.status,
		netStatus 	: state.main.netStatus
	}
}

const mapDispatchToProps = dispatch => ({
	onRoomMoreInfo	: (data) => dispatch(onRoomMoreInfo(data)),
	onNewStream		: (data) => dispatch(onNewStream(data)),
	onStreamLeave	: (data) => dispatch(onStreamLeave(data)),
	onHandsupSwitch : (status) => dispatch(onHandsupSwitch(status)),
	onMagicSwitch   : (status) => dispatch(onMagicSwitch(status)),
	onRankSwitch    : (status) => dispatch(onRankSwitch(status)),
	onMuteAllSwitch : (status) => dispatch(onMuteAllSwitch(status)),
	onSilentSwitch  : (status) => dispatch(onSilentSwitch(status)),
	onNewGift    	: (data) => dispatch(onNewGift(data)),
	onWarn       	: (data,status) => dispatch(onWarn(data,status)),
	onHandsupRank   : (id, rank) => dispatch(onHandsupRank(id, rank)),
	onUserMuted 	: (id, status, recovering) => dispatch(onUserMuted(id, status, recovering)),
	onDancing 		: (id, status) => dispatch(onDancing(id, status)),
	onEndCourse 	: () => dispatch(onEndCourse()),
	onBeginCourse 	: () => dispatch(onBeginCourse()),
	onPauseCourse 	: () => dispatch(onPauseCourse()),
	onResumeCourse 	: () => dispatch(onResumeCourse()),
	onCourseTick 	: () => dispatch(onCourseTick()),
	confirm 		: (data) => dispatch(confirm(data)),
	alert 	    	: (data) => dispatch(alert(data)),
	onEnterTester 	: (page) => dispatch(onEnterTester(page)),
	showLoading 	: (message) => dispatch(showLoading(message)),
	hideLoading 	: () => dispatch(hideLoading()),
	onUpdateGift 	: (data) => dispatch(onUpdateGift(data)),
	onProgressUpdate: (id, percent) => dispatch(onProgressUpdate(id, percent)),
	onProgressReset : () => dispatch(onProgressReset()),
	onUserAddRoom 	: (id) => dispatch(onUserAddRoom(id)),
	onQuestionList  : (status) => dispatch(onQuestionList(status)),
	onQuestionDetail: (status) => dispatch(onQuestionDetail(status))
})
  
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Course)
