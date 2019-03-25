import React from 'react';
import { connect } from 'react-redux'
import StudentHead from '../components/student-head'
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
const Const   		 = require('../../const')
const AgoraRtcEngine = require('../../agora/AgoraSdk')
const Storage 		 = require('../Storage')

import * as types from '../constants/ActionTypes'

import CourseBase from './course.base.page'
const net = require("../network")
const $ = require("jquery")

class Course extends CourseBase {
	constructor(props) {
		super(props)
		this.$view_mode = 1
		this.$in_warning = false;
		this.$warning_id = null;
		
		this.$client = new AgoraRtcEngine()
		this.$client.initialize(Const.AGORA_APPID);
		let currentVideoDevice 	 = Storage.get("VIDEO_DEVICE") 	  || this.$client.getCurrentVideoDevice(),
			currentAudioDevice 	 = Storage.get("AUDIO_DEVICE") 	  || this.$client.getCurrentAudioRecordingDevice(),
			currentSpeakerDevice = Storage.get("PLAYBACK_DEVICE") || this.$client.getCurrentAudioPlaybackDevice(),
			currentVideoName, 
			currentAudioName,
			currentSpeakerName

		if (currentVideoDevice) {
			this.$client.setVideoDevice(currentVideoDevice);
		}
		if (currentAudioDevice) {
			this.$client.setAudioRecordingDevice(currentAudioDevice);
		}
		if (currentSpeakerDevice) {
			this.$client.setAudioPlaybackDevice(currentSpeakerDevice);
		}

		let video_devices 	= this.$client.getVideoDevices()
		let audio_devices   = this.$client.getAudioRecordingDevices()
		let speaker_devices = this.$client.getAudioPlaybackDevices()

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
		this.state 		= { 
			control: !this.props.status.started,
			process: {current:0,total:0},
			currentVideoDevice,
			currentAudioDevice,
			currentSpeakerDevice,
			currentVideoName,
			currentAudioName,
			currentSpeakerName,
			video_devices,
			audio_devices,
			speaker_devices
		}
	}

	componentDidMount() {
		super.componentDidMount();
		this.$room.on("LEAVE_ROOM", ()=>{
			this.$session.destroy()
			if (this.$waiting_to_tester) {
				this.props.onEnterTester("course")
			} else {
				this.props.onEndCourse()
			}
			if (this.props.onLeaveRoom) {
				this.props.onLeaveRoom();
			}
		})
		if (this.$timer_warning) {
			clearTimeout(this.$timer_warning);
		}
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
			this.$client.setVideoDevice(value);

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
			this.$client.setAudioRecordingDevice(value);
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
			this.$client.setAudioPlaybackDevice(value);
		}
		this.$room.__resume_devices()
	}

	render() {
		let dancing, warning
		setTimeout(()=>{
			let teacher = this.props.teacher
			if (teacher.stream && !teacher.stream_inited) {
				teacher.stream_inited = true
				teacher.stream.play('master-head');
			}
			if (this.props.students) {
				this.props.students.forEach((student)=>{
					if(student.stream && !student.stream_inited) {
						console.log("play stream",student.id)
						// 开启了弱网络优化时
						if (this.__in_weak_net()) {
							if (student.id == this.props.account.id) {
								student.stream.play('student_'+student.id)
								student.stream_inited = true
							}
						} else {
							if (student.id != this.$last_dancing) {
								student.stream.play('student_'+student.id)
							}
							student.stream_inited = true
						}
					}
					if (student.stream_inited) {
						// 开启了弱网络优化时，只保留自己的流和正在上台人的流
						if (this.__in_weak_net()) {
							if (student.id != this.props.account.id && 
								this.$last_dancing != student.id) {
								student.stream.stop()
								student.stream_inited = false
							}
						}
					}
					if (!student.stream && student.id == this.$last_dancing) {
						this.$room.rtc.rtcengine.unsubscribe(this.$last_dancing)
						this.$last_dancing = null
					}
				})
			}
			if (dancing) {
				this.__put_to_dancing(dancing.id)
			} else {
				if (this.$last_dancing) {
					this.__back_from_dancing(this.$last_dancing)
				}
				this.$last_dancing = null
			}
		},0)
		let students = (this.props.students||[]).concat()
		// 排序按照进入场景的时间来排序
		students.sort((prev,next)=>{
			next = next.online_time || new Date().getTime()+1000000
			prev = prev.online_time || new Date().getTime()+1000000
			return next < prev ? 1 : -1
		})

		for(let i=0,len=students.length;i<len;i++) {
			let item = students[i]
			if (item.dancing && item.stream) {
				dancing = item
			}
		}
		let studentHeads = students.map((student)=>(
			<StudentHead 
				key={student.id} 
				isTeacher={false} 
				user={student} 
				features={this.props.room.features}
				withFrame={this.props.account.id == student.id}
				onClickSpeak={(user)=>{}} 
				onClickGift={(user)=>{}} 
				onClickView={(user)=>{}}/>
		))
		let handsupStudents = []
		students.forEach((student)=>{
			if (student.online) {
				handsupStudents.push(student)
			}
		})

		let TeacherView = <div className="teacher-area">
			<div className="avatars">
				<div className="avatar">
					<div className="avatar-head" id="master-head" style={{
						"backgroundImage" : this.props.teacher.stream?"":`url(${this.props.teacher.avatarurl})`
					}}>
					</div>
					<div className="avatar-info">老师：{this.props.teacher.child_name}</div>
				</div>
				<div className={dancing?"avatar":(this.state.draft?"avatar draft":"avatar nothing")}>
					<div className="ph-text">未指定小朋友发言</div>
					<div className="avatar-head" id="dancing-head"></div>
					<div className="avatar-info">学生：{dancing?dancing.child_name:""}</div>
					<div className={this.state.draft?"draft-text":"draft-text none"} dangerouslySetInnerHTML={{__html: this.state.draft}}></div>
				</div>
			</div>
		</div>
		let StudentView = <div className="student-area">
			{studentHeads}
		</div>

		let displayDeviceName, curDevice, devices, emptyText;
		if (this.props.switches.questionDetail == 1) {
			displayDeviceName = this.state.currentVideoName
			curDevice 		  = this.state.currentVideoDevice
			devices			  = this.state.video_devices
			emptyText		  = '无可用摄像头设备'
			
		}else if(this.props.switches.questionDetail == 2){
			displayDeviceName = this.state.currentAudioName
			curDevice 		  = this.state.currentAudioDevice
			devices			  = this.state.audio_devices
			emptyText		  = '无可用麦克风设备'
		}else if(this.props.switches.questionDetail == 3){
			displayDeviceName = this.state.currentSpeakerName
			curDevice 		  = this.state.currentSpeakerDevice
			devices			  = this.state.speaker_devices
			emptyText		  = '无可用扬声器设备'
		}

		return (
			<div className="page course-page student">
				<div className="inner">
				{this.props.switches.questionDetail?
					<div className="question-detail">
						<div className="container">
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
								this.__select_device()
							}}>
							</div>
							<button className="close-btn" onClick={()=>{
								this.__select_question(0);
							}}></button>
						</div>
					</div>

				:""}
					
					<div className="content">
						<div className="course-content kc-canvas-area" id="course-content"></div>
					</div>
					<div className="entities-area">
						{TeacherView}
						{StudentView}
						<div className="counter icon">
							<button className="help-btn" onClick={()=>{
								// this.onHelpClick()
								this.props.onQuestionList(!this.props.switches.questionList);
							}}></button>
						</div>
						{this.props.switches.questionList?
							<div className="question-list">
								<button className="question-cell cell-1" onClick={()=>{
									this.__select_question(1);
								}}>老师看不到我？</button>
								<button className="question-cell cell-2" onClick={()=>{
									this.__select_question(2);
								}}>老师听不到我的声音？</button>
								<button className="question-cell cell-3" onClick={()=>{
									this.__select_question(3);
								}}>听不到老师的声音？</button>
							</div>	
						:""}
					</div>
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
