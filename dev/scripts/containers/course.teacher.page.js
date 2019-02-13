
import StudentHead from '../components/student-head'
import React from 'react';
import HandsUp from '../components/handsup'
const net = require("../network")
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
	onCourseStartingTick,
	confirm, alert,
	onEnterTester,
	onMagicSwitch,
	showLoading, hideLoading, onRankSwitch,
	onProgressUpdate,
	onUpdateGift, onProgressReset, onUserAddRoom
} from '../actions'
const Session = require('../session')
const Const = require('../../const')
const Hotkey = require('../../hotkey')
const { ipcRenderer } = $require('electron');
const context = require('../context')
const $ = require("jquery")

import CourseBase from './course.base.page'

class Course extends CourseBase {
	constructor(props) {
		super(props)
		this.state = {
			no_confirm_mask: false,
			time: new Date().getTime() / 1000,
			time_diff: 0,
			control: this.props.room.state == 0,
			process: { current: 0, total: 0 },
			warning: 0,
			warning_message: "",
			warning_shown: false
		}
	}

	componentDidMount() {
		//已经上课
		if (this.props.room.state == 1) {
			this.props.onBeginCourse();
			this.setState({ control: false })
		}
		let onNewStream = ()=>{

		}
		super.componentDidMount();
	}

	__send_init_room() {
		// 发送init-room
		let masters = []
		this.props.room.teachers.forEach((teacher) => {
			masters.push(teacher.id)
		})
		let userinfos = [this.props.teacher]
		userinfos = userinfos.concat(this.props.students)
		this.$session.send_message(Const.INIT_ROOM, {
			channel_id: this.props.room.channel_id,
			token: net.token
		}, {
			master_ids: masters,
			userinfos: userinfos
		})
	}

	__tick() {
		super.__tick(()=>{
			// 根据上课时间设置警告
			let minute = Math.abs(this.props.status.duration) / 60 >> 0
			if (this.props.status.duration <= -5*60) {
				this.setState({
					warning: 3,
					warning_message: `已经拖堂${minute}分钟啦，请尽快结束！`,
					warning_shown: false
				})
			} else if (this.props.status.duration <= 0) {
				this.setState({
					warning: 2,
					warning_message: "课程已到结束时间，请注意！",
					warning_shown: false
				})
			} else if (this.props.status.duration <= 5*60) {
				this.setState({
					warning: 2,
					warning_message: `距离课程结束还有${minute}分钟，请注意！`,
					warning_shown: false
				})
			} else if (this.props.status.duration <= 15*60) {
				if (this.state.warning != 1) {
					this.setState({
						warning: 1,
						warning_message: `距离课程结束还有${minute}分钟，请注意！`,
						warning_shown: false
					})
					setTimeout(()=>{
						this.setState({
							warning_shown: true
						})
					}, 20000)
				}
			}
			if (this.props.status.waiting - this.state.time_diff >= -1000 && 
				this.props.status.waiting - this.state.time_diff <= 1000 * 60 * 30 && 
				!this.props.status.started) {
				this.props.onCourseStartingTick()
			}
		});
	}

	leaveCourse() {
		if (this.$waiting_to_tester) {
			this.props.onEnterTester("course")
		} else {
			this.props.onEndCourse()
		}
	}

	preLeaveCourse(leaveOnly) {
		function __endCourse(){
			this.props.showLoading("正在退出房间...")
			// 发送关闭房间请求
			net.closeRoom(this.props.room.channel_id).then((res) => {
				if (res.status) {
					this.$session.send_message(Const.STOP_COURSE)
					this.$signal.send({
						type: "closeroom",
						from: this.props.account.id,
						to: "all"
					})
				}
			})
		}
		function __leaveCourse(){
			this.props.showLoading("正在退出房间...")
			this.leaveCourse()
		}
		if (leaveOnly) {
			if (this.props.status.started && this.isChairMaster () && (!this.props.status.duration || this.props.status.duration <= 0)) {
				this.props.confirm({
					content: "请确认是否要结束课程",
					sure_txt: "结束课程",
					cancel_txt: "确认离开",
					sure: ()=>{
						__endCourse.bind(this)();
					},
					cancel: ()=>{
						__leaveCourse.bind(this)();
					}
				})

			}else{
				this.props.confirm({
					content: "确定要临时退出房间吗？",
					sure: () => {
						__leaveCourse.bind(this)();
					}
				})
			}
		} else {
			this.props.confirm({
				content: "确定要结束本次课程吗？",
				sure: () => {
					__endCourse.bind(this)();
				}
			})
		}
	}

	__on_clipshare() {
		this.props.confirm({
			content: "确认截取所有学生屏幕吗？",
			sure: () => {
				this.$session.send_message("clipshare")
			}
		})
	}

	/**
	 * 给所有人发送礼物
	 */
	__send_gift_to_all() {
		this.props.confirm({
			title: "礼物奖励",
			content: "确认送给所有学生奖励吗？",
			sure: () => {
				this.__send_gift()
			}
		})
	}

	__send_gift(user) {
		let ids = []
		if (!user) {
			this.props.students.forEach((student) => {
				if (student.online) {
					ids.push(student.id)
				}
			})
			if (ids.length == 0) {
				return
			}
		}
		net.sendGift({
			channel_id: this.props.room.channel_id,
			to_id: user ? user.id : ids.join(",")
		}).then((res) => {
			// 送礼物结果
			// 更新本地礼物数量
			this.props.onUpdateGift(res)
			res.forEach((item) => {
				this.$signal.send({
					type: "gift",
					from: this.props.account.id,
					to: "all",
					message: {
						uid: item.to_id,
						total: item.total
					}
				})
			})
		})
	}

	/**
	 * 坐姿警告
	 */
	__warn(user) {
		if (!user) return;
		net.warn({
			channel_id: this.props.room.channel_id,
			user_id: user.id,
			lesson_page: this.state.process.current || 1
		}).then((res)=>{
			this.$session.send_message(Const.WARN, {
				uid: user.id - 0,
				leave_id: res.leave_id,
				time: this.__get_server_time()
			})
		})
	}

	__on_start_course() {
		this.props.confirm({
			content: "真的真的要上课吗？？",
			sure: () => {
				this.setState({ control: false })
				this.$session.send_message(Const.START_COURSE)
				let user_ids = '';
				this.props.students.map((student)=>{
					if(student && student.online){
						if(user_ids == ''){
							user_ids += student.id;
						}else{
							user_ids += (','+student.id);
						}
					}
				});
				net.beginClass(this.props.room.channel_id, user_ids)
				this.props.onBeginCourse()
			}
		})
	}

	__counter_time_to_str() {
		let duration = Math.max(0, this.props.status.duration)
		let hour = duration / 60 / 60 >> 0
		duration -= hour * 60 * 60
		let minutes = duration / 60 >> 0
		duration -= minutes * 60
		let seconds = duration
		let format = (num) => num > 9 ? num : ("0" + num)
		return [
			<div key="0" className="couter-g">{format(hour)}:</div>,
			<div key="1" className="couter-g">{format(minutes)}:</div>,
			<div key="2" className="couter-g last">{format(seconds)}</div>
		]
	}

	__counter_starting_time_to_str() {
		let waiting = this.props.status.waiting;
		let left = waiting - this.state.time_diff
		let days, hours, minutes, seconds;
		if (left < 1000 * 60 * 30 && left > 0) {
			days = left / 1000 / 60 / 60 / 24 >> 0
			left -= days * 1000 * 60 * 60 * 24
			hours = left / 1000 / 60 / 60 >> 0
			minutes = (left - hours * 60 * 60 * 1000) / 1000 / 60 >> 0
			seconds = (left % (1000 * 60)) / 1000 >> 0;
			seconds = days > 0 ? `` : `${seconds}秒`;
			days = days > 0 ? `${days}天` : ``;
			return `距离开始上课还有${days}${hours}小时${minutes}分钟${seconds}`;
		}else if(left <= 0){
			return `上课时间已经过啦，快点开始上课吧！`;
		}
	}

	onHotKey(hotkeyName) {
		switch (Hotkey[hotkeyName]) {
			case Hotkey.KEY_C:
				this.__on_clipshare();
				break;
			case Hotkey.KEY_M:
				if (this.props.switches.magic) {
					this.$session.send_message(Const.DISABLE_MAGIC)
				} else {
					this.$session.send_message(Const.ENABLE_MAGIC)
				}
				break;
			case Hotkey.KEY_LEFT:
				this.props.onMagicSwitch(false)
				this.$session.send_message("appprevpage")
				break;
			case Hotkey.KEY_RIGHT:
				this.props.onMagicSwitch(false)
				this.$session.send_message("appnextpage")
				break;
			case Hotkey.KEY_G:
				this.__send_gift_to_all()
				break;
			default:
				break;
		}
	}

	__get_feature_name(feature_en_name){
		let features = this.props.room.features || [];
		let result;
		features.map((_feature)=>{
			if (_feature && _feature.en_name == feature_en_name) {
				result = _feature.name;
			}
		});
		return result;
	}

	__get_feature_color(feature_en_name){
		let features = this.props.room.features || [];
		let result;
		features.map((_feature)=>{
			if (_feature && _feature.en_name == feature_en_name) {
				result = _feature.color;
			}
		});
		return `#${result}`;
	}

	render() {
		let dancing;
		setTimeout(() => {
			let teacher = this.props.teacher
			if (teacher.stream && !teacher.stream_inited) {
				teacher.stream_inited = true
				teacher.stream.play('master-head');
			}
			if (this.props.students) {
				this.props.students.forEach((student) => {
					if (student.stream && !student.stream_inited) {
						console.log("play stream", student.id)
						// 开启了弱网络优化时
						if (this.__in_weak_net()) {
							if (student.id == this.props.account.id) {
								student.stream.play('student_' + student.id)
								student.stream_inited = true
							}
						} else {
							if (student.id != this.$last_dancing) {
								student.stream.play('student_' + student.id)
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
		}, 0)
		let students = (this.props.students || []).concat()
		// 排序按照进入场景的时间来排序
		students.sort((prev, next) => {
			next = next.online_time || new Date().getTime() + 1000000
			prev = prev.online_time || new Date().getTime() + 1000000
			return next < prev ? 1 : -1
		})

		for (let i = 0, len = students.length; i < len; i++) {
			let item = students[i]
			if (item.dancing && item.stream) {
				dancing = item
				break
			}
		}

		let studentHeads = students.map((student, seatIndex) => {
			return <StudentHead 
				key={student.id} 
				isTeacher={true} 
				user={student}
				features={this.props.room.features}
				mainFeature={this.state.feature}
				seatIndex={seatIndex} 
				onClickSpeak={(user) => {
				if (!user.unmuted) {
					this.$session.send_message(Const.OPEN_MIC, {
						uid: user.id - 0
					})
				} else {
					this.$session.send_message(Const.CLOSE_MIC, {
						uid: user.id - 0
					})
				}
			}} onClickGift={(user) => {
				// 只有老师可以送礼物
				if (this.isMaster()) {
					this.__send_gift(user)
				}
			}} onClickView={(user) => {
				if (user.dancing) {
					this.$session.send_message(Const.BACK_DANCE, { id: user.id })
				} else {
					this.$session.send_message(Const.PUT_DANCE, { id: user.id })
				}
			}} onClickWarn={(user)=>{
				if (this.isMaster()) {
					this.__warn(user)
				}
			}}/>
		})
		let handsupStudents = []
		students.forEach((student) => {
			if (student.online) {
				handsupStudents.push(student)
			}
		})

		let feature_tag_style = {
			background: this.__get_feature_color(this.state.feature)
		}

		let TeacherView = <div className="teacher-area">
			<div className="avatars">
				<div className={this.state.draft ? "avatar draft" : "avatar nothing"}>
					<div className={this.state.draft ? "draft-text" : "draft-text none"} dangerouslySetInnerHTML={{ __html: this.state.draft }}></div>
					{this.state.feature?<span className="feature-tag" style={feature_tag_style}>{this.__get_feature_name(this.state.feature)}</span>:""}
				</div>
				<div className="avatar">
					<div className="avatar-head" id="master-head" style={{
						"backgroundImage": this.props.teacher.stream ? "" : `url(${this.props.teacher.avatarurl})`
					}}>
					</div>
					<div className="avatar-info">老师：{this.props.teacher.child_name}<span onClick={()=>{
						net.earlyWarning(this.props.room.channel_id);
					}}></span></div>
					<div className="logo-frame"></div>
					<div className="avatar-head-frame"></div>
					<div className={this.state.warning && !this.state.warning_shown?("warning-box show level-" + this.state.warning):"warning-box level-1"}><div className="warning-icon"></div>{this.state.warning_message}</div>
				</div>
			</div>
		</div>

		dancing && [].splice.call(studentHeads, 2, 0,
			<div className='dancing-container' key="dancing" style={{
				"marginRight": studentHeads.length < 2 ? ((0.9 * (2 - studentHeads.length)) + "rem") : 0
			}}>
				<div className='dancing-student' id="dancing-head" key='dancing-student' >
				</div>
				<div className="avatar-info-student">学生：{dancing.child_name}</div>
				<div className="back-dance-btn" onClick={() => {
					if (this.$last_dancing) {
						this.$session.send_message(Const.BACK_DANCE, { id: this.$last_dancing })
					}
				}}></div>
			</div>
		);

		let StudentView = <div className="student-area">
			{studentHeads}
		</div>

		//上课时间
		let tipStrStarting = this.__counter_starting_time_to_str();
		return (
			<div className="page course-page teacher">
				<div className="inner">
					<div className="controls-wrapper">
						<div className={this.state.control ? "controls open" : "controls close"} onClick={() => {
							if (!this.state.control) {
								this.setState({ control: true })
							}
						}}>
							<button className="page-back" onClick={() => {
								this.preLeaveCourse(true)
							}}></button>
							<div className="spliter"></div>
							{!this.props.status.started ? (
								<button className="course-start" onClick={() => {
									this.__on_start_course()
								}}></button>
							) : (
									[
										<button key="control-1" className={this.props.status.paused ? "course-pause paused" : "course-pause"} onClick={() => {
											if (this.props.status.paused) {
												this.props.onResumeCourse()
												console.log("send message coursepause")
												this.$session.send_message(Const.COURSE_RESUME)
											} else {
												this.props.onPauseCourse()
												this.$session.send_message(Const.COURSE_PAUSE)
											}
										}}></button>,
										<button key="control-2" className="course-end" onClick={() => {
											this.preLeaveCourse()
										}}></button>
									]
								)}
							<button className="help-btn" onClick={() => {
								this.onHelpClick()
							}}></button>
							<button className="gohome-btn" onClick={() => {
								this.$session.send_message("appfirstpage")
							}}></button>
							<div className="switch-btn" onClick={() => {
								if (this.state.control) {
									this.setState({ control: false })
								}
							}}></div>
						</div>
					</div>
					<div className="content">
						{StudentView}
						{this.props.switches.handsup ? <HandsUp users={handsupStudents} onClickClose={() => {
							this.$session.send_message(Const.CLOSE_RACE)
						}} /> : ""}
						{!!tipStrStarting && !this.props.status.started && !this.state.no_confirm_mask && this.isChairMaster() ?
							<div className="course-confirm-mask">
								<div className="course-confirm-dialog">
									<div className="course-start-time-tip">
										{tipStrStarting}
									</div>
									<div className="course-not-begin-btn c-btn" onClick={() => {
										this.setState({ no_confirm_mask: true })
									}}>我是磨课，不上课</div>
									<div className="course-begin-btn c-btn" onClick={() => {
										this.__on_start_course()
									}}>我要开始上课！！</div>
								</div>
							</div> : ""}
						<div className="course-content-area">
							<div className="course-content kc-canvas-area" id="course-content"></div>
							<div className="operations">
								<button className="course-clear" onClick={() => {
									this.$session.send_message("appclearall")
								}}></button>
								<button className={this.props.switches.rank ? "course-rank" : "course-rank off"} onClick={() => {
									if (this.props.switches.rank) {
										this.$session.send_message(Const.HIDE_RANKS)
									} else {
										this.$session.send_message(Const.SHOW_RANKS)
									}
								}}></button>
								<button className="course-clip" onClick={() => {
									this.__on_clipshare()
								}}><span>C</span></button>
								<button className="course-prevpage" onClick={() => {
									this.props.onMagicSwitch(false)
									this.$session.send_message("appprevpage")
								}}><span>◀</span></button>
								<button className={this.props.switches.magic ? "course-magic" : "course-magic off"} onClick={() => {
									if (this.props.switches.magic) {
										this.$session.send_message(Const.DISABLE_MAGIC)
									} else {
										this.$session.send_message(Const.ENABLE_MAGIC)
									}
								}}><span>M</span></button>
								<button className="course-nextpage" onClick={() => {
									this.props.onMagicSwitch(false)
									this.$session.send_message("appnextpage")
								}}><span>▶</span></button>
								<button className="course-gift" onClick={() => {
									this.__send_gift_to_all()
								}}><span>G</span></button>
								<button className={this.props.switches.handsup ? "course-handsup" : "course-handsup off"} onClick={() => {
									if (this.props.switches.handsup) {
										this.$session.send_message(Const.CLOSE_RACE)
									} else {
										this.$session.send_message(Const.OPEN_RACE)
									}
								}}></button>
								<button className={this.props.switches.muteall ? "course-muteall off" : "course-muteall"} onClick={() => {
									if (this.props.switches.muteall) {
										this.$session.send_message(Const.UNMUTE_ALL)
									} else {
										this.$session.send_message(Const.MUTE_ALL)
									}
								}}></button>
								<button className={this.props.switches.silent ? "course-silent off" : "course-silent"} onClick={() => {
									if (this.props.switches.silent) {
										this.$room.keepSilent(false)
										this.props.onSilentSwitch(false)
									} else {
										this.$room.keepSilent(true)
										this.props.onSilentSwitch(true)
									}
								}}></button>
							</div>
						</div>
					</div>
					<div className="entities-area">
						{TeacherView}
						<div className="counter">
							倒计时：
							{this.__counter_time_to_str()}
							<div className="process">课程进度：{this.state.process.current}/{this.state.process.total}</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		account: state.login.account,
		room: state.room.info,
		students: state.room.students,
		start_time: state.room.start_time,
		teacher: state.room.teacher,
		started: state.main.courseStarted,
		switches: state.room.switches,
		status: state.room.status,
		netStatus: state.main.netStatus
	}
}

const mapDispatchToProps = dispatch => ({
	onRoomMoreInfo: (data) => dispatch(onRoomMoreInfo(data)),
	onNewStream: (data) => dispatch(onNewStream(data)),
	onStreamLeave: (data) => dispatch(onStreamLeave(data)),
	onHandsupSwitch: (status) => dispatch(onHandsupSwitch(status)),
	onMagicSwitch: (status) => dispatch(onMagicSwitch(status)),
	onRankSwitch: (status) => dispatch(onRankSwitch(status)),
	onMuteAllSwitch: (status) => dispatch(onMuteAllSwitch(status)),
	onSilentSwitch: (status) => dispatch(onSilentSwitch(status)),
	onNewGift: (data) => dispatch(onNewGift(data)),
	onWarn: (data,status) => dispatch(onWarn(data,status)),
	onHandsupRank: (id, rank) => dispatch(onHandsupRank(id, rank)),
	onUserMuted: (id, status, recovering) => dispatch(onUserMuted(id, status, recovering)),
	onDancing: (id, status) => dispatch(onDancing(id, status)),
	onEndCourse: () => dispatch(onEndCourse()),
	onBeginCourse: () => dispatch(onBeginCourse()),
	onPauseCourse: () => dispatch(onPauseCourse()),
	onResumeCourse: () => dispatch(onResumeCourse()),
	onCourseTick: () => dispatch(onCourseTick()),
	onCourseStartingTick: () => dispatch(onCourseStartingTick()),
	confirm: (data) => dispatch(confirm(data)),
	alert: (data) => dispatch(alert(data)),
	onEnterTester: (page) => dispatch(onEnterTester(page)),
	showLoading: (message) => dispatch(showLoading(message)),
	hideLoading: () => dispatch(hideLoading()),
	onUpdateGift: (data) => dispatch(onUpdateGift(data)),
	onProgressUpdate: (id, percent) => dispatch(onProgressUpdate(id, percent)),
	onProgressReset: () => dispatch(onProgressReset()),
	onUserAddRoom: (id) => dispatch(onUserAddRoom(id))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Course)