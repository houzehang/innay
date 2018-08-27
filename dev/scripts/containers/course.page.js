import React from 'react';
import { connect } from 'react-redux'
import StudentHead from '../components/student-head'
import HandsUp from '../components/handsup'
import { 
	onEndCourse, onRoomMoreInfo,
	onNewStream, onStreamLeave,
	onHandsupSwitch, onNewGift,
	onHandsupRank, onUserMuted, onMuteAllSwitch, onDancing,
	onBeginCourse,
	onPauseCourse,
	onResumeCourse,
	onCourseTick,
	confirm, alert,
	onEnterTester,
	onMagicSwitch,
	showLoading,hideLoading,onRankSwitch,
	onProgressUpdate,
	onUpdateGift, onProgressReset
} from '../actions'
const net 			= require("../network")
const Room 			= require("../AgoraStream")
const Signalize		= require('../AgoraSignal')
const Session   	= require('../session')
const Const   		= require('../../const')
const {ipcRenderer} 	= $require('electron');
import * as types from '../constants/ActionTypes'

class Course extends React.Component {
	constructor(props) {
		super(props)
		this.$uuid      = 0
		this.$session 	= new Session(this)
		this.$recording = this.props.recording
		this.state 		= { 
			time: new Date().getTime()/1000, 
			control: !this.props.status.started 
		}
		this.$view_mode = this.props.account.dentity != types.DENTITY.MASTER ||
						  this.$recording
		if (!this.$recording) {
			this.$room 		= new Room(this)
			this.$signal	= new Signalize(this)
		}
		this.$audios_files = {}
		ipcRenderer.on("DOWNLOADED", (event, url, file)=>{
			net.log({name:"DOWNLOADED",url,file})
			this.$audios_files[url] = file
		})
	}

	get uuid() {
		return ++this.$uuid
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

	__load_sound(url) {
		console.log("call load file...",url)
		ipcRenderer.send("DOWNLOAD",url)
	}

	playMusic(url, needevent) {
		this.stopMusic()
		let soundUrl = url
		if (this.$audios_files[url]) {
			soundUrl = this.$audios_files[url]
		}
		let result = this.$room.rtc.startAudioMixing(soundUrl,true,false,1)
		net.log({name:"play music",soundUrl,needevent,result})
		if (needevent) {
			this.$playing = url
			this.$session.send_message("soundupdate",{url:this.$playing,time:0})
		} else {
			this.$playing = false
		}
	}

	stopMusic(noevent) {
		let result = this.$room.rtc.stopAudioMixing()
		console.log("stop audio mix",result)
		if (this.$playing) {
			if (!noevent) {
				this.$session.send_message("soundended", {url:this.$playing})
			}
			this.$playing = null
		}
	}

	showDraft(draft) {
		if (this.isMaster()) {
			this.setState({ draft })
		}
	}

	hideDraft() {
		this.setState({ draft: null })
	}

	componentWillUnmount() {
		clearInterval(this.$tick_timer)
		clearInterval(this.$music_timer)
		clearTimeout(this.$back_timer)
		clearTimeout(this.$put_timer)
		$(`#dancing-head`).empty()
		$('.avatar-head').empty()
		clearTimeout(this.$reload_timer)
		$(window).off("resize")
		this.props.hideLoading()
	}

	componentDidMount() {
		this.$reload_timer = null
		$(window).on("resize", ()=>{
			clearTimeout(this.$reload_timer)
			this.$reload_timer = setTimeout(()=>{
				this.$session.reload()
				// 发送init room message
				this.__send_init_room()
			},1000)
		})
		if (!this.$recording) {
			this.$room.init()
			this.$room.on("NEW_STREAM", (stream)=>{
				// 判断是不是主班老师
				let id = stream.getId()
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
				if (this.$waiting_to_tester) {
					this.props.onEnterTester()
				} else {
					this.props.onEndCourse()
				}
			})
			let $waiting_timer = null
			this.$signal.on("RECONNECT_SIGNAL", ()=>{
				this.props.showLoading("网络不稳定哦，正在重连中~")
			})
			this.$signal.on("CONNECT_SIGNAL", ()=>{
				this.props.showLoading("正在连线其他人，稍等一下~")
				$waiting_timer = setTimeout(()=>{
					this.props.showLoading("当前网络环境不太好哦，耐心等一等吧~")
				},6000)
			})
			this.$signal.on("CONNECTED_SIGNAL", ()=>{
				this.props.hideLoading()
				clearTimeout($waiting_timer)
				this.$session.send_message("signal_connected")
			})
			this.$signal.on("CONNECT_SIGNAL_ERROR", ()=>{
				this.props.showLoading("当前网络环境不太好哦，耐心等一等吧~")
				clearTimeout($waiting_timer)
			})
			this.$signal.on("CONNECT_KICKED", ()=>{
				this.props.showLoading("有人登录了你的帐号哦~")
				clearTimeout($waiting_timer)
			})
			this.$signal.on("CHANNEL_NEW_USER", (user)=>{
				this.$session.send_message(Const.MEMBER_ADD, {}, {
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
				console.log("receive new from app",message)
				this.__on_signal_message(message)
			})
		} else {
			// 向服务器拉取录播的视频流
			let data = {
				23 : {
					url: "https://kecheng-server.oss-cn-beijing.aliyuncs.com/1022_3452c367ea4c44fcab114d7a60524de5.f0.mp4",
					created_at: 1529754515000
				},
				26 : {
					url: "https://kecheng-server.oss-cn-beijing.aliyuncs.com/1022_3452c367ea4c44fcab114d7a60524de5.f0.mp4",
					created_at: 1529754515000
				}
			}
			this.$record_video_data = data
			for(let id in data) {
				let isMaster = this.isMaster(id)
				if (isMaster) {
					let stream = this.__build_stream(id)
					this.props.onNewStream(stream)
					break
				}
			}
		}
		this.$session.on("NEW_MESSAGE", (message)=>{
			this.__on_session_message(message)
		})
		net.getRoomInfo(this.props.room.channel_id).then((result)=>{
			this.props.onRoomMoreInfo(result)
			if (!this.$recording) {
				this.$room.start()
				this.$signal.join()
			}
			this.__send_init_room()
		})
		this.$session.init("#course-content")
		net.getServerTime().then((res)=>{
			this.setState({ time: res.time*1000 })
		})
		this.$room.rtc.on("audiomixingfinished", ()=>{
			console.log("on audiomixingfinished",this.$playing)
			if (this.$playing) {
				this.$session.send_message("soundended", {url:this.$playing})
				this.$playing = null
			}
		})
		this.__tick()
	}

	__send_init_room() {
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
			recording  : this.$recording,
			master_ids : masters,
			userinfos  : userinfos
		})
	}

	__build_stream(id) {
		let data = this.$record_video_data[id]
		if (!data) return
		return { 
			getId: ()=>id, 
			play: (dom)=>{
				if (data.showing) return
				data.showing = true
				dom = $(`#${dom}`)
				$(`<div id="record_${id}"><video id="video_${id}" src='${data.url}'></video></div>`).css({
					"width":"100%","height":"100%"
				}).appendTo(dom)
				let isMaster = this.isMaster(id),
					video    = $(`#video_${id}`)
				if (isMaster) {
					video.on("timeupdate", ()=>{
						let time = video[0].currentTime * 1000 >> 0
						time = data.created_at - 0 + time
						this.$session.send_message("recordtimeupdate", {time})
					})
					this.$record_video = video
					if (this.$record_ready) {
						video[0].play()
					}
				} else {
					video[0].play()
				}
			}
		}
	}

	__tick() {
		this.$tick_timer = setInterval(()=>{
			this.props.onCourseTick()
		},1000)
		this.$music_timer = setInterval(()=>{
			if (this.$playing) {
				// 检测播放音乐
				let time = this.$room.rtc.getAudioMixingCurrentPosition()
				this.$session.send_message("soundupdate",{url:this.$playing,time})
			}
		},100)
	}

	__on_session_message(message, force) {
		if (message.to == "app" || force) {
			let data = message.message, result
			switch(message.type) {
				case Const.JS_READY :
				break
				case "starttest":
				break
				case Const.OPEN_MIC:
				if (!this.$recording) {
					this.props.onUserMuted(data.uid, false, message.to=="app")
					this.$room.stream_audio(data.uid)
				}
				break
				case Const.CLOSE_MIC:
				if (!this.$recording) {
					this.props.onUserMuted(data.uid, true)
					this.$room.stream_audio(data.uid)
				}
				break
				case Const.ENABLE_MAGIC:
				this.props.onMagicSwitch(true)
				break
				case Const.DISABLE_MAGIC:
				this.props.onMagicSwitch(false)
				break
				case Const.MUTE_ALL:
				this.props.onMuteAllSwitch(true)
				this.$room.stream_audio(this.props.account.id)
				break
				case Const.UNMUTE_ALL:
				this.props.onMuteAllSwitch(false)
				this.$room.stream_audio(this.props.account.id)
				break
				case Const.SHOW_RANKS:
				this.props.onRankSwitch(true)
				break
				case Const.HIDE_RANKS:
				this.props.onRankSwitch(false)
				break
				case Const.PUT_DANCE:
				this.props.onDancing(data.id, true)
				break
				case Const.BACK_DANCE:
				this.props.onDancing(data.id, false)
				break
				case Const.MEMBER_ADD:
				if (this.$recording) {
					data.forEach((item)=>{
						let stream = this.__build_stream(item.id)
						if (stream) {
							this.props.onNewStream(stream)
						}
					})
				}
				break
				case Const.MEMBER_LEAVE:
				// if (this.$recording) {
				// 	data.forEach((id)=>{
				// 		let stream = this.__build_stream(id)
				// 		if (stream) {
				// 			stream.leave()
				// 			this.props.onStreamLeave(stream)
				// 		}
				// 	})
				// }
				break
				case "record_ready":
				if (this.$record_video) {
					this.$record_video[0].play()
				}
				this.$record_ready = true
				break
				case "playsound":
				let url = data.url, needevent = data.needevent
				this.playMusic(url, needevent)
				break
				case "stopsound":
				let noevent = data.noevent
				this.stopMusic(noevent)
				break
				case "showdraft":
				this.showDraft(data.content)
				break
				case "loadsound":
				this.__load_sound(data.url)
				break
				default:
				if (message.type.indexOf("*") == -1) {
					this.__on_signal_message(message)
				}
				break
			}
		} else {
			this.$signal.send(message)
		}
	}

	__on_signal_message(message) {
		let data = message.message
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
			case Const.START_TEST:
			case Const.STOP_TEST:
			break
			case Const.NEXT_PAGE:
			this.$playing = false
			this.hideDraft()
			this.props.onProgressReset()
			this.$session.send_message(null, null, message)
			break
			case Const.DISABLE_MAGIC:
			this.props.onProgressReset()
			this.$session.send_message(null, null, message)
			break
			case "gift":
			this.props.onNewGift(data)
			this.$session.send_message(null, null, message)
			break
			case "progress":
			//接收到来自学生的进度提示通知界面调整
			if (this.props.switches.magic) {
				this.props.onProgressUpdate(message.from, data.percent)
			}
			break
			default:
			this.$session.send_message(null, null, message)
		}
	}

	leaveCourse() {
		this.$room.leave()
		this.$signal.leave()
	}

	preLeaveCourse(leaveOnly) {
		if (leaveOnly) {
			this.props.confirm({
				content : "确定要临时退出房间吗？",
				sure: ()=>{
					this.props.showLoading("正在退出房间...")
					this.leaveCourse()
				}
			})
		} else {
			this.props.confirm({
				content : "确定要结束本次课程吗？",
				sure: ()=>{
					this.props.showLoading("正在退出房间...")
					// 发送关闭房间请求
					net.closeRoom(this.props.room.channel_id).then((res)=>{
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
			})
		}
	}

	__on_clipshare() {
		this.props.confirm({
			content : "确认截取所有学生屏幕吗？",
			sure: ()=>{
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
			content : "确认送给所有学生奖励吗？",
			sure: ()=>{
				this.__send_gift()
			}
		})
	}

	__send_gift(user) {
		let ids = []
		if (!user) {
			this.props.students.forEach((student)=>{
				if (student.stream) {
					ids.push(student.id)
				}
			})
			if (ids.length == 0) {
				return
			}
		}
		net.sendGift({
			channel_id : this.props.room.channel_id,
			to_id: user ? user.id : ids.join(",")
		}).then((res)=>{
			// 送礼物结果
			// 更新本地礼物数量
			this.props.onUpdateGift(res)
			res.forEach((item)=>{
				this.$signal.send({
					type: "gift",
					from: this.props.account.id,
					to: item.to_id,
					message: {
						uid: item.to_id,
						total: item.total
					}
				})
			})
		})
	}

	__put_to_dancing(id) {
		if (this.$last_dancing) {
			if (this.$last_dancing == id) {
				return
			}
			this.__back_from_dancing(this.$last_dancing)
		}
		console.log("do put message",id)
		if (this.$recording) {
			$(`#record_${id}`).css({
				position: "fixed",
				left	: $("#dancing-head").offset().left,
				top 	: $("#dancing-head").offset().top,
				width	: $("#dancing-head").width(),
				height	: $("#dancing-head").height()
			})
		} else {
			$(`#student_${id}`).empty()
			$("#dancing-head").empty()
			this.$room.dance(id, $("#dancing-head")[0], true)
		}
		this.$last_dancing = id
	}

	__back_from_dancing(id) {
		if (!this.$last_dancing || this.$last_dancing != id) {
			return
		}
		if (this.$recording) {
			$(`#record_${id}`).css({
				position: "static",
				left	: 0,
				top 	: 0,
				width	: "100%",
				height	: "100%"
			})
		} else {
			$(`#dancing-head`).empty()
			$(`#student_${id}`).empty()
			this.$room.dance(id, $(`#student_${id}`)[0])
		}
		this.$last_dancing = null
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
		this.$speaker_devices = devices
	}

	onHelpClick() {
		this.props.confirm({
			title: "设备检测",
			content : "即将进行设备检测，是否暂时退出教室？",
			sure: ()=>{
				this.props.showLoading("正在退出房间...")
				this.$waiting_to_tester = true
				this.leaveCourse()
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
			if (item.dancing && item.stream) {
				dancing = item
				break
			}
		}
		let studentHeads = students.map((student)=>(
			<StudentHead key={student.id} isTeacher={!this.$view_mode} user={student.stream?student:null} onClickSpeak={(user)=>{
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
				// 只有老师可以送礼物
				if (this.isMaster()) {
					this.__send_gift(user)
				}
			}} onClickView={(user)=>{
				if (user.dancing) {
					this.$session.send_message(Const.BACK_DANCE, { id: user.id })
				} else {
					this.$session.send_message(Const.PUT_DANCE, { id: user.id })
				}
			}}/>
		))
		let handsupStudents = []
		students.forEach((student)=>{
			if (student.stream) {
				handsupStudents.push(student)
			}
		})
		return (
			<div className="page course-page">
				<div className="inner">
					{!this.$view_mode?(
						<div className="controls-wrapper">
							<div className={this.state.control?"controls open":"controls close"}  onClick={()=>{
								if (!this.state.control) {
									this.setState({control: true})
								}
							}}>
								<button className="page-back" onClick={()=>{
									this.preLeaveCourse(true)
								}}></button>
								<div className="spliter"></div>
								{!this.props.status.started?(
									<button className="course-start" onClick={()=>{
										this.setState({control: false})
										this.$session.send_message(Const.START_COURSE)
										net.beginClass(this.props.room.channel_id)
										this.props.onBeginCourse()
									}}></button>
								):(
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
								)}
								<button className="course-end" onClick={()=>{
									this.preLeaveCourse()
								}}></button>
								<button className="course-next" onClick={()=>{
								}}></button>
								<button className="help-btn" onClick={()=>{
									this.onHelpClick()
								}}></button>
								<div className="switch-btn" onClick={()=>{
									if (this.state.control) {
										this.setState({control: false})
									}
								}}></div>
							</div>
						</div>
					):""}
					<div className="content">
						<div className="course-content kc-canvas-area" id="course-content"></div>
						{this.props.switches.handsup&&!this.$view_mode?<HandsUp users={handsupStudents} onClickClose={()=>{
							this.$session.send_message(Const.CLOSE_RACE)
						}}/>:""}
						{!this.$view_mode?(
							<div className="operations">
								<button className={this.props.switches.handsup?"course-handsup":"course-handsup off"} onClick={()=>{
									if (this.props.switches.handsup) {
										this.$session.send_message(Const.CLOSE_RACE)
									} else {
										this.$session.send_message(Const.OPEN_RACE)
									}
								}}></button>
								<button className="course-gift" onClick={()=>{
									this.__send_gift_to_all()
								}}></button>
								<button className={this.props.switches.magic?"course-magic":"course-magic off"} onClick={()=>{
									if (this.props.switches.magic) {
										this.$session.send_message(Const.DISABLE_MAGIC)
									} else {
										this.$session.send_message(Const.ENABLE_MAGIC)
									}
								}}></button>
								<button className={this.props.switches.muteall?"course-muteall off":"course-muteall"} onClick={()=>{
									if (this.props.switches.muteall) {
										this.$session.send_message(Const.UNMUTE_ALL)
									} else {
										this.$session.send_message(Const.MUTE_ALL)
									}
								}}></button>
								<button className="course-clip" onClick={()=>{
									this.__on_clipshare()
								}}></button>
								<button className="course-prevpage" onClick={()=>{
									this.props.onMagicSwitch(false)
									this.$session.send_message("appprevpage")
								}}></button>
								<button className="course-clear" onClick={()=>{
									this.$session.send_message("appclearall")
								}}></button>
								<button className="course-nextpage" onClick={()=>{
									this.props.onMagicSwitch(false)
									this.$session.send_message("appnextpage")
								}}></button>
								<button className={this.props.switches.rank?"course-rank":"course-rank off"} onClick={()=>{
									if (this.props.switches.rank) {
										this.$session.send_message(Const.HIDE_RANKS)
									} else {
										this.$session.send_message(Const.SHOW_RANKS)
									}
								}}></button>
							</div>
						):""}
					</div>
					<div className="info">
						<div className="avatars">
							<div className="teacher-area">
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
							<div className="student-area">
								{studentHeads}
							</div>
						</div>
						{!this.$view_mode?(
							<div className="counter">
								倒计时：
								{this.__counter_time_to_str()}
							</div>
						):(
							<div className="counter pull-right">
								<button className="help-btn" onClick={()=>{
									this.onHelpClick()
								}}></button>
							</div>
						)}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		account : state.login.account,
		room 	: state.room.info,
		students: state.room.students,
		teacher : state.room.teacher,
		started : state.main.courseStarted,
		switches: state.room.switches,
		status  : state.room.status
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
	onEnterTester 	: () => dispatch(onEnterTester()),
	showLoading 	: (message) => dispatch(showLoading(message)),
	hideLoading 	: () => dispatch(hideLoading()),
	onUpdateGift 	: (data) => dispatch(onUpdateGift(data)),
	onProgressUpdate: (id, percent) => dispatch(onProgressUpdate(id, percent)),
	onProgressReset : () => dispatch(onProgressReset()),
})
  
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Course)
