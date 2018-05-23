import React from 'react';
import { connect } from 'react-redux'
import StudentHead from '../components/student-head'
import { 
	onEndCourse, onGiftList, onRoomMoreInfo,
	onNewStream, onStreamLeave,
	onHandsupSwitch, onGiftSwitch, onNewGift,
	onHandsupRank, onUserMuted
} from '../actions'
const net 		= require("../network")
const Room 		= require("../room")
const Signalize	= require('../signal')
const Session   = require('../session')
const Const   	= require('../../const')

class Course extends React.Component {
	constructor(props) {
		super(props)
		this.$session 	= new Session(this)
		this.$room 		= new Room(this)
		this.$signal	= new Signalize(this)
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
			return {
				child_name: this.props.teacher.name,
				id
			}
		}
		for(let i=0,len=this.props.students.length;i<len;i++) {
			let item = this.props.students[i]
			if (item.id == id) {
				return item
			}
		}
	}

	componentDidMount() {
		this.$room.on("NEW_STREAM", (stream)=>{
			// 判断是不是主班老师
			let id = stream.getId()
			let isMaster = this.isChairMaster(id)
			let isSubMaster = this.isSubMaster(id)
			if (isSubMaster) {
				return
			}
			console.log("new stream",stream)
			this.props.onNewStream(stream)
		})
		this.$room.on("REMOVE_STREAM", (stream)=>{
			this.props.onStreamLeave(stream)
		})
		this.$room.on("LEAVE_ROOM", ()=>{
			this.$session.destroy()
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
			console.log("receive new session message",message)
			if (message.to == "app") {
				let data = message.message
				switch(message.type) {
					case Const.JS_READY :
					break
					case "starttest":
					break
					case Const.OPEN_MIC:
					case Const.CLOSE_MIC:
					case Const.OPEN_RACE:
					case Const.CLOSE_RACE:
					case Const.OPEN_GIFT:
					case Const.CLOSE_GIFT:
					this.__on_signal_message(message)
					break
					break
				}
			} else if (message.to == "all") {
				this.$signal.send(message)
			}
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
	}

	__on_signal_message(message) {
		let data = message.message
		switch(message.type) {
			case "closeroom":
			if (this.isMaster()) {
				this.leaveCourse()
 			} else {
				alert("本次课程已结束，小朋友请到“大语文”小程序完成课后作业")
				this.leaveCourse()
			}
			break
			case Const.OPEN_RACE:
			this.props.onHandsupSwitch(true)
			this.$session.send_message(null, null, message)
			break
			case Const.CLOSE_RACE:
			this.props.onHandsupSwitch(false)
			this.$session.send_message(null, null, message)
			break
			case Const.OPEN_MIC:
			this.props.onUserMuted(data.uid, false)
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
		// $(".page").removeClass("next")
		// room.leave()
		// signal.leave()
		// context.dmg.destroy()
		// setTimeout(()=>{
		// 	remote.getCurrentWindow().reload()
		// },500)
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
				channel_id : context.course.channel_id,
				to_id: this.$gift_data.to,
				gift_id: this.$gift_data.gift.id
			}).then((res)=>{
				let total = res.total, toUser = this.getUser(this.$gift_data.to)
				this.$signal.send({
					type: "gift",
					from: this.props.account.id,
					to: "all",
					message: {
						uid: this.$gift_data.to,
						gift: this.$gift_data.gift,
						total,
						from_username: this.props.account.child_name,
						to_username: toUser.child_name
					}
				})
			})
		}
	}

	render() {
		setTimeout(()=>{
			let teacher = this.props.teacher
			if (teacher.stream && !teacher.stream_inited) {
				teacher.stream_inited = true
				teacher.stream.play('master-head');
			}
			if (this.props.students) {
				this.props.students.forEach((student)=>{
					if(student.stream && !student.stream_inited) {
						student.stream.play('student_'+student.id)
						student.stream_inited = true
					}
				})
			}
		},0)
		let students = (this.props.students||[]).concat()
		students.sort((prev,next)=>{
			if (next.stream) {
				return prev.stream ? -1 : 1
			}
			return 0
		})
		students = students.map((student)=>(
			<StudentHead key={student.id} handsup={{
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
					return
				}
				if (this.isMaster() || this.props.switches.gift) {
					this.$gift_data = {
						to: user.id
					}
					this.__show_gift_layer()
				} else {
					alert("现在还不能送礼物哦~")
				}
			}}/>
		))
		return (
			<div className={"page course-page "+(this.props.started?"next":"")}>
				<div className="inner">
					<div className="controls">
						<button className="course-start"></button>
						<button className="course-pause"></button>
						<button className="course-end"></button>
					</div>
					<div className="content">
						<div className="course-content" id="course-content"></div>
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
							<button className="course-nextpage" onClick={()=>{
								this.$session.send_message("appnextpage")
							}}></button>
							<button className="course-prevstep" onClick={()=>{
								this.$session.send_message("appprevstep")
							}}></button>
							<button className="course-nextstep" onClick={()=>{
								this.$session.send_message("appnextstep")
							}}></button>
							<button className="course-clear" onClick={()=>{
								this.$session.send_message("appclearall")
							}}></button>
						</div>
					</div>
					<div className="info">
						<div className="avatars">
							<div className="teacher-area">
								<div className="avatar">
									<div className="avatar-head" id="master-head">
									{this.props.teacher.stream?"":<img src={this.props.teacher.avatarurl}/>}
									</div>
									<div className="avatar-info">老师：{this.props.teacher.name}</div>
								</div>
								<div className="avatar nothing">
									<div className="ph-text">未指定学生发言</div>
									<div className="avatar-head" id="master-head"></div>
									<div className="avatar-info">学生：伊珊珊</div>
								</div>
							</div>
							<div className="student-area">
								{students}
							</div>
						</div>
						<div className="counter">
							倒计时：
							<div className="couter-g">01</div>
							<div className="couter-g">09</div>
							<div className="couter-g last">35</div>
							<div className="split"></div>
							<div className="time">
								<p>11:33</p>
								<p>2018/5/17</p>
							</div>
						</div>
					</div>
				</div>
				{this.props.giftlist?(
				<div className="mask gift-layer" style={{display:"none"}}>
					<div className="dialog">
						<button className="close-btn"></button>
						<div className="title-icon"></div>
						<div className="gifts">
							{this.props.giftlist.map((gift)=>{
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
							})}
						</div>
					</div>
				</div>
				):""}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	console.log("course page...",state.room.teacher)
	return {
		account : state.login.account,
		room 	: state.room.info,
		gifts 	: state.room.gifts,
		students: state.room.students,
		teacher : state.room.teacher,
		giftlist: state.room.giftlist,
		started : state.main.courseStarted,
		switches: state.room.switches
	}
}

const mapDispatchToProps = dispatch => ({
	onGiftList		: (data) => dispatch(onGiftList(data)),
	onEndCourse 	: () => dispatch(onEndCourse()),
	onRoomMoreInfo	: (data) => dispatch(onRoomMoreInfo(data)),
	onNewStream		: (data) => dispatch(onNewStream(data)),
	onStreamLeave	: (data) => dispatch(onStreamLeave(data)),
	onHandsupSwitch : (status) => dispatch(onHandsupSwitch(status)),
	onGiftSwitch    : (status) => dispatch(onGiftSwitch(status)),
	onNewGift    	: (data) => dispatch(onNewGift(data)),
	onHandsupRank   : (id, rank) => dispatch(onHandsupRank(id, rank)),
	onUserMuted 	: (id, status) => dispatch(onUserMuted(id, status))
})
  
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Course)
