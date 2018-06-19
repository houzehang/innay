import React from 'react';
import { connect } from 'react-redux'
import StudentHead from '../components/student-head'
import Devices from './devices'
import { 
	onEndCourse, onGiftList, onRoomMoreInfo,
	onNewStream, onStreamLeave,
	onHandsupSwitch, onGiftSwitch, onNewGift,
	onHandsupRank, onUserMuted, onDancing,
	onBeginCourse,
	onPauseCourse,
	onResumeCourse,
	onCourseTick,
	confirm, alert
} from '../actions'
const net 		= require("../network")
const Room 		= require("../AgoraStream")
const Signalize	= require('../AgoraSignal')
const Session   = require('../session')
const Const   	= require('../../const')
import * as types from '../constants/ActionTypes'

class Course extends React.Component {
	constructor(props) {
		super(props)
		this.$session 	= new Session(this)
		this.$room 		= new Room(this)
		this.$signal	= new Signalize(this)
		this.state 		= { time: new Date().getTime()/1000 }
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

	getUser(id) {
		if (id == this.props.teacher.id) {
			return this.props.teacher
		}
		for(let i=0,len=this.props.students.length;i<len;i++) {
			let item = this.props.students[i]
			if (item.id == id) {
				return item
			}
		}
	}

	componentWillUnmount() {
		clearInterval(this.$tick_timer)
		clearTimeout(this.$back_timer)
		clearTimeout(this.$put_timer)
	}

	componentDidMount() {
		this.$room.init()
		this.$room.on("NEW_STREAM", (stream)=>{
			// 判断是不是主班老师
			let id = stream.getId()
			let isMaster = this.isChairMaster(id)
			let isSubMaster = this.isSubMaster(id)
			if (isSubMaster) {
				return
			}
			console.log("new stream")
			this.props.onNewStream(stream)
		})
		this.$room.on("REMOVE_STREAM", (stream)=>{
			this.props.onStreamLeave(stream)
		})
		this.$room.on("LEAVE_ROOM", ()=>{
			this.$session.destroy()
			this.props.onEndCourse()
		})
		this.$signal.on("CHANNEL_NEW_USER", (user)=>{
			this.$session.send_message(Const.MEMBER_ADD, {
			}, {
				userinfos  : [user]
			})
			console.log("channel new user...",user)
		})
		this.$signal.on("CHANNEL_USER_LEAVE", (id)=>{
			this.$session.send_message(Const.MEMBER_LEAVE, {
			}, {
				userinfos  : [id]
			})
		})
		this.$signal.on("NEW_MESSAGE", (message)=>{
			console.log("receive new signal message",message)
			this.__on_signal_message(message)
		})
		this.$session.on("NEW_MESSAGE", (message)=>{
			this.__on_session_message(message)
		})
		net.getGiftsList().then((data)=>{
			this.props.onGiftList(data.gifts)
		})
		net.getRoomInfo(this.props.room.channel_id).then((result)=>{
			this.props.onRoomMoreInfo(result)
			this.$room.start()
			this.$signal.join()
			// 发送init-room
			let masters = []
			this.props.room.teachers.forEach((teacher)=>{
				masters.push(teacher.id)
			})
			let userinfos = [ this.props.teacher ]
			userinfos.concat(this.props.students)
			this.$session.send_message(Const.INIT_ROOM, {
				channel_id: this.props.room.channel_id,
				token: net.token
			}, {
				master_ids : masters,
				userinfos  : userinfos
			})
		})
		this.$session.init("#course-content")
		net.getServerTime().then((res)=>{
			this.setState({ time: res.time*1000 })
		})
		this.__tick()
	}

	__tick() {
		this.$tick_timer = setInterval(()=>{
			this.setState({ time: this.state.time+1000 })
			this.props.onCourseTick()
		},1000)
	}

	__on_session_message(message, force) {
		console.log("receive new session message",message)
		if (message.to == "app" || force) {
			let data = message.message
			switch(message.type) {
				case Const.JS_READY :
				break
				case "starttest":
				break
				case Const.OPEN_MIC:
				this.props.onUserMuted(data.uid, false, message.to=="app")
				this.$room.stream_audio(data.uid)
				break
				case Const.CLOSE_MIC:
				this.props.onUserMuted(data.uid, true)
				this.$room.stream_audio(data.uid)
				break
				case Const.OPEN_GIFT:
				this.props.onGiftSwitch(true)
				break
				case Const.CLOSE_GIFT:
				this.props.onGiftSwitch(false)
				break
				case Const.PUT_DANCE:
				this.props.onDancing(data.id, true)
				break
				case Const.BACK_DANCE:
				this.props.onDancing(data.id, false)
				break
				default:
				this.__on_signal_message(message)
				break
			}
		} else if (message.to == "all") {
			this.$signal.send(message)
		}
	}

	__on_signal_message(message) {
		let data = message.message
		console.log("signal message",message)
		switch(message.type) {
			case "closeroom":
			this.leaveCourse()
			break
			case Const.OPEN_MIC:
			case Const.CLOSE_MIC:
			case Const.OPEN_GIFT:
			case Const.CLOSE_GIFT:
			case Const.PUT_DANCE:
			case Const.BACK_DANCE:
			this.$session.send_message(null, null, message)
			break
			case Const.OPEN_RACE:
			this.props.onHandsupSwitch(true)
			this.$session.send_message(null, null, message)
			break
			case Const.CLOSE_RACE:
			this.props.onHandsupSwitch(false)
			this.$session.send_message(null, null, message)
			break
			case "racerank":
			this.props.onHandsupRank(data.uid, data.rank)
			break
			case "starttest":
			case "stoptest":
			break
			case "gift":
			this.props.onNewGift(data)
			default:
			this.$session.send_message(null, null, message)
		}
	}

	leaveCourse() {
		this.$room.leave()
		this.$signal.leave()
	}

	preLeaveCourse() {
		this.props.confirm({
			content : "确定要结束本次课程吗？",
			sure: ()=>{
				// 发送关闭房间请求
				net.closeRoom(this.props.room.channel_id).then((res)=>{
					if (res.status) {
						this.$signal.send({
							type: "closeroom",
							from: this.props.account.id,
							to: "all"
						})
					}
				})
			}
		})
	}

	__show_gift_layer() {
		$(".gift-layer").show()
		setTimeout(()=>{
			$(".gift-layer").addClass("show")
		},100)
	}

	__hide_gift_layer() {
		$(".gift-layer").removeClass("show")
		setTimeout(()=>{
			$(".gift-layer").hide()
		},300)
	}

	__send_gift() {
		if (this.$gift_data) {
			console.log("send gift",this.$gift_data)
			net.sendGift({
				channel_id : this.props.room.channel_id,
				to_id: this.$gift_data.to,
				gift_id: this.$gift_data.gift.id
			}).then((res)=>{
				let total = res.total, toUser = this.getUser(this.$gift_data.to),
					single = res.single
				this.$signal.send({
					type: "gift",
					from: this.props.account.id,
					to: "all",
					message: {
						uid: this.$gift_data.to,
						gift: this.$gift_data.gift,
						total, single,
						from_username: this.props.account.child_name,
						to_username: toUser.child_name
					}
				})
			})
		}
	}

	__put_to_dancing(id) {
		if (this.$last_dancing) {
			if (this.$last_dancing == id) {
				return
			}
			this.__back_from_dancing(this.$last_dancing)
		}
		console.log("do put message",id)
		$(`#student_${id}`).empty()
		this.$room.dance(id, $("#dancing-head")[0], true)
		this.$last_dancing = id
	}

	__back_from_dancing(id) {
		if (!this.$last_dancing || this.$last_dancing != id) {
			return
		}
		this.$session.send_message(Const.BACK_DANCE, { id })
		$(`#dancing-head`).empty()
		this.$room.dance(id, $(`#student_${id}`)[0])
		this.$last_dancing = null
	}

	__time_to_str() {
		let time = this.state.time
		let date = new Date(time)
		let year = date.getFullYear(),
			month = date.getMonth() + 1,
			day = date.getDate(),
			hour = date.getHours(),
			minutes = date.getMinutes()
		let format   = (num)=>num>9?num:("0"+num)
		return [
			<p key="0">{format(hour)}:{format(minutes)}</p>,
			<p key="1">{year}/{month}/{day}</p>
		]
	}

	__counter_time_to_str() {
		let duration = this.props.status.duration
		let hour 	 = duration / 60 / 60 >> 0
		duration 	-= hour * 60 * 60
		let minutes  = duration / 60 >> 0
		duration 	-= minutes * 60
		let seconds  = duration
		let format   = (num)=>num>9?num:("0"+num)
		return [
			<div key="0" className="couter-g">{format(hour)}</div>,
			<div key="1" className="couter-g">{format(minutes)}</div>,
			<div key="2" className="couter-g last">{format(seconds)}</div>
		]
	}

	setVideoDevices(devices) {
		this.$video_devices = devices
	}

	setAudioDevices(devices) {
		this.$audio_devices = devices
	}

	setSpeakerDevices(devices) {
		console.log("devices",devices)
		this.$speaker_devices = devices
	}

	onHelpClick() {
		this.props.alert({
			title: "设备调试",
			content : <Devices rtc={this.$room.rtc} 
				video_devices={this.$video_devices}
				audio_devices={this.$audio_devices}
				speaker_devices={this.$speaker_devices}
			/>,
			sure: ()=>{

			}
		})
	}

	render() {
		let dancing
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
						student.stream.play('student_'+student.id)
						student.stream_inited = true
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
		students.forEach((item)=>{
			if (!item.stream_time) {
				item.stream_time = new Date().getTime() + 10000000
			}
		})
		students.sort((prev,next)=>{
			return next.stream_time < prev.stream_time ? 1 : -1
		})
		for(let i=0,len=students.length;i<len;i++) {
			let item = students[i]
			if (item.dancing) {
				dancing = item
				break
			}
		}
		students = students.map((student)=>(
			<StudentHead key={student.id} isTeacher={this.props.account.dentity == types.DENTITY.MASTER} handsup={{
				opened: this.props.switches.handsup,
				rank  : student.rank || ""
			}} user={student.stream?student:null} onClickSpeak={(user)=>{
				if (!user.unmuted) {
					this.$session.send_message(Const.OPEN_MIC, {
						uid: user.id - 0
					})
				} else {
					this.$session.send_message(Const.CLOSE_MIC, {
						uid: user.id - 0
					})
				}
			}} onClickGift={(user)=>{
				if (user.id == this.props.account.id) {
					this.props.alert({
						content : "不能给自己送礼物哦~"
					})
					return
				}
				if (this.isMaster() || this.props.switches.gift) {
					this.$gift_data = {
						to: user.id
					}
					this.__show_gift_layer()
				} else {
					this.props.alert({
						content : "现在还不能送礼物哦~"
					})
				}
			}} onClickView={(user)=>{
				if (user.dancing) {
					this.$session.send_message(Const.BACK_DANCE, { id: user.id })
				} else {
					this.$session.send_message(Const.PUT_DANCE, { id: user.id })
				}
			}}/>
		))
		return (
			<div className="page course-page">
				<div className="inner">
					{this.props.account.dentity != types.DENTITY.STUDENT?(
						<div className="controls">
							<button className="course-start" disabled={this.props.status.started?"true":""} onClick={()=>{
								this.props.onBeginCourse()
							}}></button>
							<button className={this.props.status.paused?"course-pause paused":"course-pause"} onClick={()=>{
								if (this.props.status.paused) {
									this.props.onResumeCourse()
									console.log("send message coursepause")
									this.$session.send_message(Const.COURSE_RESUME)
								} else {
									this.props.onPauseCourse()
									this.$session.send_message(Const.COURSE_PAUSE)
								}
							}}></button>
							<button className="course-end" onClick={()=>{
								this.preLeaveCourse()
							}}></button>
							<button className="help-btn" onClick={()=>{
								this.onHelpClick()
							}}></button>
						</div>
					):""}
					<div className="content">
						<div className="course-content kc-canvas-area" id="course-content"></div>
						{this.props.account.dentity != types.DENTITY.STUDENT?(
							<div className="operations">
								<button className={this.props.switches.handsup?"course-handsup":"course-handsup off"} onClick={()=>{
									if (this.props.switches.handsup) {
										this.$session.send_message(Const.CLOSE_RACE)
									} else {
										this.$session.send_message(Const.OPEN_RACE)
									}
								}}></button>
								<button className={this.props.switches.gift?"course-gift":"course-gift off"} onClick={()=>{
									if (this.props.switches.gift) {
										this.$session.send_message(Const.CLOSE_GIFT)
									} else {
										this.$session.send_message(Const.OPEN_GIFT)
									}
								}}></button>
								<button className="course-prevpage" onClick={()=>{
									this.$session.send_message("appprevpage")
								}}></button>
								<button className="course-clear" onClick={()=>{
									this.$session.send_message("appclearall")
								}}></button>
								<button className="course-nextpage" onClick={()=>{
									this.$session.send_message("appnextpage")
								}}></button>
							</div>
						):""}
					</div>
					<div className="info">
						<div className="avatars">
							<div className="teacher-area">
								<div className="avatar">
									<div className="avatar-head" id="master-head">
									{this.props.teacher.stream?"":<img src={this.props.teacher.avatarurl}/>}
									</div>
									<div className="avatar-info">老师：{this.props.teacher.child_name}</div>
								</div>
								<div className={dancing?"avatar":"avatar nothing"}>
									<div className="ph-text">未指定小朋友发言</div>
									<div className="avatar-head" id="dancing-head"></div>
									<div className="avatar-info">学生：{dancing?dancing.child_name:""}</div>
								</div>
							</div>
							<div className="student-area">
								{students}
							</div>
						</div>
						{this.props.account.dentity != types.DENTITY.STUDENT?(
							<div className="counter">
								倒计时：
								{this.__counter_time_to_str()}
								<div className="split"></div>
								<div className="time">{this.__time_to_str()}</div>
							</div>
						):(
							<div className="counter pull-right">
								<button className="help-btn" onClick={()=>{
									this.onHelpClick()
								}}></button>
								<div className="time">{this.__time_to_str()}</div>
							</div>
						)}
					</div>
				</div>
				{this.props.giftlist?(
				<div className="mask gift-layer dialog-layer" style={{display:"none"}}>
					<div className="dialog">
						<div className="title">
							送礼物
							<div className="close-btn" onClick={()=>{
								this.__hide_gift_layer()
							}}></div>
						</div>
						<div className="content">
							<div className="gifts">
								{this.props.giftlist.map((gift)=>(
									<div className="gift-item" key={gift.id} onClick={()=>{
										this.$gift_data.gift = gift
										this.__hide_gift_layer()
										this.__send_gift()
									}}>
										<div className="gift-icon">
											<img src={gift.icon}/>
										</div>
										<div className="gift-name">{gift.name}</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				):""}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		account : state.login.account,
		room 	: state.room.info,
		gifts 	: state.room.gifts,
		students: state.room.students,
		teacher : state.room.teacher,
		giftlist: state.room.giftlist,
		started : state.main.courseStarted,
		switches: state.room.switches,
		status  : state.room.status
	}
}

const mapDispatchToProps = dispatch => ({
	onGiftList		: (data) => dispatch(onGiftList(data)),
	onRoomMoreInfo	: (data) => dispatch(onRoomMoreInfo(data)),
	onNewStream		: (data) => dispatch(onNewStream(data)),
	onStreamLeave	: (data) => dispatch(onStreamLeave(data)),
	onHandsupSwitch : (status) => dispatch(onHandsupSwitch(status)),
	onGiftSwitch    : (status) => dispatch(onGiftSwitch(status)),
	onNewGift    	: (data) => dispatch(onNewGift(data)),
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
})
  
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Course)
