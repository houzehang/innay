import React from 'react';
import { connect } from 'react-redux'
import StudentHead from '../components/student-head'
import HandsUp from '../components/handsup'
import { 
	onEndCourse, onRoomMoreInfo,
	onNewStream, onStreamLeave,
	onHandsupSwitch, onNewGift,
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
	onUpdateGift, onProgressReset, onUserAddRoom
} from '../actions'
const net 			= require("../network")
const Room 			= require("../recordStream")
const Signalize		= require('../recordSignal')
const Session   	= require('../session')
const Const   		= require('../../const')
const {ipcRenderer} 	= $require('electron');
const context 		= require('../context')
import * as types from '../constants/ActionTypes'

class Course extends React.Component {
	constructor(props) {
		super(props)
		this.$uuid      = 0
		this.$stat_arr 	= []
		this.$session 	= new Session(this)
		this.$recording = true;
		this.state 		= { 
			time: new Date().getTime()/1000, 
			control: !this.props.status.started,
			process: {current:0,total:0},
			students:[],
			teachers:[],
			teacher:{}
		}
		this.$view_mode = this.props.account.dentity != types.DENTITY.MASTER ||
						  this.$recording
		this.$room 		= new Room(this)
        this.$signal	= new Signalize(this)
        this.$audios_files = {}
        this.$data = {usersStream:{},students:[],studentsHash:{},teachersHash:{},teachers:[],teacher:{}};
		this.$session.send_message('record-init');
		this.$record_video_data = {};
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
        return this.$data.teachersHash[id];
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
		context.detector.check()
	}

	componentDidMount() {
		context.detector.uncheck()
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
				this.props.onNewStream(stream)
			})
			this.$room.on("REMOVE_STREAM", (stream)=>{
				this.props.onStreamLeave(stream)
				// 老师监听到有人退出如果还在上台，则发送他下台指令
				if (this.isMaster()) {
					let id = stream.getId()
					if (id) {
						if (this.$last_dancing == id) {
							this.$session.send_message(Const.BACK_DANCE, { id })
						}
					}
				}
			})
			this.$room.on("ADD_ROOM", (id)=>{
				// 新用户加入
				this.props.onUserAddRoom(id)
				this.$room.refreshMute()
			})
			this.$room.on("LEAVE_ROOM", ()=>{
				this.$session.destroy()
				if (this.$waiting_to_tester) {
					this.props.onEnterTester("course")
				} else {
					this.props.onEndCourse()
				}
			})
			this.$room.rtc.on("networkquality", (uid, tx, rx)=>{
				console.log("网络状态：",uid,tx,rx)
				if (uid == 0) {
					let status = Math.max(tx,rx)
					if (status == 1 || status == 2) {
						status = 1
					} else if (status == 3) {
						status = 2
					} else if (status == 4) {
						status = 3
					} else if (status == 5) {
						status = 4
					} else {
						status = 0
					}
					this.$stat_arr.push(status)
					if (this.$stat_arr.length >= 3) {
						let sum = 0
						this.$stat_arr.forEach((status)=>{
							sum += status
						})
						status = sum / this.$stat_arr.length >> 0
						context.detector.setStatus(status)
						this.$stat_arr = []
					} else {
						context.detector.setStatusOnce(status)
					}
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
			this.$signal.on("HIDE_LOADING", ()=>{
				this.props.hideLoading()
				clearTimeout($waiting_timer)
			})
			this.$signal.on("NETWORK_BAD", ()=>{
				this.props.showLoading("网络状态不佳，稍等一下~")
			})
			this.$signal.on("CONNECTED_SIGNAL", ()=>{
				this.props.hideLoading()
				clearTimeout($waiting_timer)
				this.$session.send_message("signal_connected")
			})
			this.$signal.on("RECONNECTED_SIGNAL", ()=>{
				// 重新连接上，拉取最新消息
				this.$session.send_message("signal_reconnected")
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
            this.$room.init();
            this.$room.on('record-init',({message})=>{
				const data = {};
				const {$data} = this;
				const {students,studentsHash,teachers,teachersHash,usersStream} = $data;
				message.forEach(user=>{
					 const { id } = user;
					 user.url = user.hr_url || user.hf_url;
					 user.isMaster = user.dentity == 2;
					 user.online = true;
					 usersStream[id] = user;
					 if (!user.isMaster) {
						 user.child_avatar = user.avatarurl;
						 studentsHash[id] = user;
						 students.push(user)
					 } else {
						 teachersHash[id] = user;
						 teachers.push(user);
						 this.__build_stream(id,user);
					}
					 data[id] = user;
				});
				this.syncVideoTime();
            });		
		}
		this.$session.on("NEW_MESSAGE", (message)=>{
			//拦截用于回放的相关事件
			const RecordTypes = {
				'record-init':true
			};
			if(RecordTypes[message.type]){
				this.$room.trigger(message.type,message);
				return;
			}
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

	__build_stream(id,data) {
		const {$data} = this;
		const {usersStream} = $data;
		if (this.$record_video_data[id] || !usersStream[id] || usersStream[id].stream) return;
		const stream =  { 
			getId: ()=>id, 
			play: (dom)=>{
				if (data.showing) return
				data.showing = true
				dom = $(`#${dom}`)
				$(`<div id="record_${id}"><video id="video_${id}" src='${usersStream[id].url}'></video></div>`).css({
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
                    //this.startHistoryLog();
					if (this.$record_ready) {
						video[0].play();
					}
				} 
			}
        }
		this.$data.usersStream[id].stream = stream;
        return stream;
	}
	syncVideoTime(){
		let video = this.$record_video;
		const videoTime = ()=>{
			if(!video){
				video = this.$record_video ? this.$record_video[0] : false;
			}
			if(video){
				if(video.currentTime >= video.duration){
					console.warn('视频播放结束');
					this.leaveCourse();
					return; 
				}
				this.$session.send_message('record-sync-video',{paused:video.paused,currentTime:video.currentTime,duration:video.duration})
			}
			setTimeout(() => {
				videoTime();
			}, 100);
		};
		videoTime();
	}
	recordUpdateMember({from,type,userinfos=[]},m){
		const {students} = this.state;
		let teacherVideo;
		let currentTime;
		userinfos.forEach(user=>{
			if(user.isMaster){
				user.stream  = this.__build_stream(user.id,user);
				this.$record_video_data[user.id] = user;
				return;
			}
			user.online = type === Const.MEMBER_ADD ;
			let userExists = false;
			for(let i = 0; i < students.length; i++){
				if(students[i].id == user.id){
					students[i] = user;
					userExists = true;
					break;
				}
			}
			if(!userExists){
				teacherVideo = document.querySelector(`#video_${from}`);
				currentTime = teacherVideo ? (teacherVideo.currentTime - user.playTime)|| 0.1 : 0.1;
				user.stream = this.__build_stream(user.id,user,currentTime);
				user.child_avatar = user.child_avatar || user.avatarurl;
				this.$record_video_data[user.id] = user;
				students.push(user);
			}
		});
		this.setState({students});
		setTimeout(() => {
			students.forEach(({id,online})=>{
				const video = document.querySelector(`#video_${id}`);
				console.warn(`播放ID${id} 播放状态${online} 媒体标签${video}`,);
				if(video){
					if(online){
						if(!video.currentTime && currentTime){
							video.currentTime = currentTime;
						}
						video.play();
					}
				}
			});	
		}, 0);
	}
	recordUpdateDance({message,type}){
		const {id} = message;
		const {students} = this.state;
		students.forEach(user=>{
			user.dancing = user.id == id && type === Const.PUT_DANCE;
		});
		this.setState({students});
		console.warn(students,'上下台',type)
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
					this.$room.refreshMute()
				}
				break
				case Const.STOP_COURSE:
					this.leaveCourse();
				break;
				case Const.CLOSE_MIC:
				if (!this.$recording) {
					this.props.onUserMuted(data.uid, true)
					this.$room.refreshMute()
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
				this.$room.refreshMute()
				break
				case Const.UNMUTE_ALL:
				this.props.onMuteAllSwitch(false)
				this.$room.refreshMute()
				break
				case Const.SHOW_RANKS:
				this.props.onRankSwitch(true)
				break
				case Const.HIDE_RANKS:
				this.props.onRankSwitch(false)
				break
				case Const.PUT_DANCE:
				console.warn('收到上台消息');
				this.recordUpdateDance(message);
				//this.props.onDancing(data.id, true)
				//this.$room.refreshMute()
				break
				case Const.BACK_DANCE:
				this.recordUpdateDance(message);
				console.warn('收到下台消息');
				//this.props.onDancing(data.id, false)
				//this.$room.refreshMute()
				break
				case Const.MEMBER_ADD:
				if (this.$recording) {
					this.recordUpdateMember(message,message);
				}
				break
				case Const.MEMBER_LEAVE:
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
				case "course-process":
				this.setState({process:data})
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

	// 是否处于弱网络状态
	__in_weak_net() {
		return this.props.netStatus == 0 && !this.isMaster()
	}

	__on_signal_message(message) {
		let data = message.message
		switch(message.type) {
			case "closeroom":
			this.leaveCourse()
			break
			case Const.OPEN_MIC:
			case Const.CLOSE_MIC:
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
		this.props.alert({
			content : "回放结束",
			sure: ()=>{
				this.props.onEndCourse();
			}
		});
	}

	preLeaveCourse(leaveOnly) {
		this.leaveCourse()
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
					to: "all",
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
			this.$room.cameraTo(id, $("#dancing-head")[0], true)
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
			// 当处于弱网络且不是自己时，直接取消流
			if (this.__in_weak_net() && id != this.props.account.id) {
				let student = this.getUser(id)
				if (student) {
					student.stream_inited = false
				}
				this.$room.unsubscribe(id)
			} else {
				this.$room.cameraTo(id, $(`#student_${id}`)[0])
			}
		}
		this.$last_dancing = null
	}

	__counter_time_to_str() {
		let duration = Math.max(0,this.props.status.duration)
		let hour 	 = duration / 60 / 60 >> 0
		duration 	-= hour * 60 * 60
		let minutes  = duration / 60 >> 0
		duration 	-= minutes * 60
		let seconds  = duration
		let format   = (num)=>num>9?num:("0"+num)
		return [
			<div key="0" className="couter-g">{format(hour)}:</div>,
			<div key="1" className="couter-g">{format(minutes)}:</div>,
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
        const {$data} = this;
		let dancing
		setTimeout(()=>{
            const {usersStream,teachersHash} = $data;
            let teacher = $data.teacher;//this.props.teacher
			if (teacher.stream && !teacher.stream_inited) {
				teacher.stream_inited = true
				teacher.stream.play('master-head');
            }
            Object.values(usersStream).forEach(({id,stream})=>{
                if(stream && !stream.stream_inited){
                    stream.stream_inited = true;
                    stream.play(teachersHash[id] ?`master-head`:`student_${id}`);                
                }
            });		
			if (dancing) {
				console.warn('上台')
				this.__put_to_dancing(dancing.id)
			} else {
				if (this.$last_dancing) {
					console.warn('下台')
					this.__back_from_dancing(this.$last_dancing)
				}
				this.$last_dancing = null
			}
		},0)
		let {students} = this.state;// (this.props.students||[]).concat()
		// 排序按照进入场景的时间来排序
		students.sort((prev,next)=>{
			next = next.online_time || new Date().getTime()+1000000
			prev = prev.online_time || new Date().getTime()+1000000
			return next < prev ? 1 : -1
		})

		// students.sort((prev,next)=>{
		// 	return (next.gift_total||0) > (prev.gift_total||0) ? 1 : -1
		// })
		for(let i=0,len=students.length;i<len;i++) {
			let item = students[i]
			if (item.dancing && item.stream) {
				dancing = item
				break
			}
		}
		let studentHeads = students.map((student)=>(
			<StudentHead key={student.id} isTeacher={!this.$view_mode} user={student.online?student:null} onClickSpeak={(user)=>{
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
					<div className="avatar-info">老师：{this.props.teacher.child_name || ''}</div>
				</div>
				<div className={dancing?"avatar":(this.state.draft?"avatar draft":"avatar nothing")}>
					<div className="ph-text">未指定小朋友发言</div>
					<div className="avatar-head" id="dancing-head"></div>
					<div className="avatar-info">学生：{dancing?dancing.child_name || '' :""}</div>
					{this.$view_mode?<div className="back-dance-btn" onClick={()=>{
						if (this.$last_dancing) {
							this.$session.send_message(Const.BACK_DANCE, { id: this.$last_dancing })
						}
					}}></div>:""}
					<div className={this.state.draft?"draft-text":"draft-text none"} dangerouslySetInnerHTML={{__html: this.state.draft}}></div>
				</div>
			</div>
		</div>
		let StudentView = <div className="student-area">
			{studentHeads}
		</div>
		return (
			<div className="page course-page">
				<div className="inner">
					{this.$view_mode?(
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
								<button className="gohome-btn" onClick={()=>{
									this.$session.send_message("appfirstpage")
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
						{this.props.switches.handsup&&this.$view_mode?<HandsUp users={handsupStudents} onClickClose={()=>{
							this.$session.send_message(Const.CLOSE_RACE)
						}}/>:""}
						{this.$view_mode?(
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
								<button className={this.props.switches.muteall?"course-muteall off":"course-muteall"} onClick={()=>{
									if (this.props.switches.muteall) {
										this.$session.send_message(Const.UNMUTE_ALL)
									} else {
										this.$session.send_message(Const.MUTE_ALL)
									}
								}}></button>
								<button className={this.props.switches.silent?"course-silent off":"course-silent"} onClick={()=>{
									if (this.props.switches.silent) {
										this.$room.keepSilent(false)
										this.props.onSilentSwitch(false)
									} else {
										this.$room.keepSilent(true)
										this.props.onSilentSwitch(true)
									}
								}}></button>
							</div>
						):""}
					</div>
					<div className="entities-area">
						{this.$view_mode?TeacherView:StudentView}
						{this.$view_mode?StudentView:TeacherView}
						{!this.$view_mode?(
							<div className="counter">
								倒计时：
								{this.__counter_time_to_str()}
								<div className="process">课程进度：{this.state.process.current}/{this.state.process.total}</div>
							</div>
						):(
							<div className="counter icon">
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
	onUserAddRoom 	: (id) => dispatch(onUserAddRoom(id))
})
  
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Course)
