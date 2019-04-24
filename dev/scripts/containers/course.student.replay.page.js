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
    onQuestionDetail,
    onCourseRecording
} from '../actions' 

import CourseBase from './course.base.page'
const net                = require("../network")
const Const              = require('../../const')
const {getCurrentWindow} = $require('electron').remote;

const {ipcRenderer}  = $require('electron');

const fs 			 = $require('fs')

class Course extends CourseBase {
	constructor(props) {
		super(props)
		this.$uuid          = 0
        this.$audio 	    = React.createRef()
        this.$audios_files 	= {}

		ipcRenderer.on("DOWNLOADED", (event, url, file)=>{
			this.$audios_files[url] = file
		})
    }
    
	componentDidMount() {

		this.$session.on("NEW_MESSAGE", (message) => {
			this.__on_session_message(message)
        })
        
		this.$session.init("#course-content")
        this.__query_roominfo_more();
        
		net.getServerTime().then((res) => {
			this.setState({ time: res.time * 1000 });
			this.setState({ time_diff: res.time * 1000 - Date.now() });
        })
        
		this.$audio.addEventListener("ended", ()=>{
			console.log("on audiomixingfinished",this.$playing)
			if (this.$playing) {
				this.$session.send_message("soundended", {url:this.$playing})
				this.$playing = null
			}
		})
		this.__tick()
    }

	componentWillUnmount() {
		this.$session.destroy()
		clearInterval(this.$tick_timer)
		clearInterval(this.$music_timer)
		$(window).off("resize")
		this.props.hideLoading()
	}

	__tick() {
		this.$tick_timer = setInterval(()=>{
			this.props.onCourseTick()
		},1000)
		this.$music_timer = setInterval(()=>{
			if (this.$playing) {
				// 检测播放音乐
				let time = Math.floor(this.$audio.currentTime * 1000)
				this.$session.send_message("soundupdate",{url:this.$playing,time})
			}
		},100)
    }
    
	__query_roominfo_more(){
		net.getRoomInfoForRecord(this.props.room.channel_id).then((result)=>{
			this.props.onRoomMoreInfo(result)
			this.__send_init_room()
		})
	}

	__send_init_room() {
		// 发送init-room
		let masters = []
		this.props.room.teachers.forEach((teacher)=>{
			masters.push(teacher.id)
		})
		let userinfos = [ this.props.teacher ]
		userinfos = userinfos.concat(this.props.students)
		this.$session.send_message(Const.INIT_ROOM, {
			channel_id: this.props.room.channel_id,
			token: net.token
		}, {
			recording  : true,
			master_ids : masters,
            userinfos  : userinfos,
            
			classroom_info: {
				teacher_name	: this.props.room.teacher_name,
				teacher_id		: this.props.room.teacher_id,
				teacher_avatar	: this.props.room.teacher_avatar,
				channel_token	: this.props.room.channel_token,
				agora_appid 	: Const.AGORA_APPID,
				userid 			: this.props.account.id,
				version			: this.props.room.version,
				offset_time		: this.props.room.offset_time
			}
		})
	}

	__on_session_message(message, force) {
		if (message.to == "app" || force) {
			let data = message.message, result
			switch (message.type) {
				case Const.JS_READY:
					break
				case Const.OPEN_MIC:
					break
				case Const.CLOSE_MIC:
					break
				case Const.ENABLE_MAGIC:
					this.props.onMagicSwitch(true)
					break
				case Const.DISABLE_MAGIC:
					this.props.onMagicSwitch(false)
					break
				case Const.MUTE_ALL:
					break
				case Const.UNMUTE_ALL:
					break
				case Const.SHOW_RANKS:
					this.props.onRankSwitch(true)
					break
				case Const.HIDE_RANKS:
					this.props.onRankSwitch(false)
					break
				case Const.PUT_DANCE:
					break
				case Const.BACK_DANCE:
					break
				case Const.START_COURSE:
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
				case "showfeature":
					this.showFeature(data.feature);
				case "loadsound":
					this.__load_sound(data.url)
					break
				case "course-process":
					this.setState({ process: data })
					break
				default:
					if (message.type.indexOf("*") == -1) {
						this.__on_signal_message(message)
					}
					break
			}
		} else {
			this.__on_signal_message(message)
		}
	}

	leaveCourse() {
        localStorage.setItem("ENTERED",1)
        getCurrentWindow().reload()
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

    playMusic(url, needevent) {
        this.stopMusic()
		let soundUrl = url
		if (this.$audios_files[url]) {
			soundUrl = this.$audios_files[url]
			const blob 		= fs.readFileSync(soundUrl)
			const base64 	= Buffer.from(blob).toString('base64')
			soundUrl 		= 'data:audio/mp3;base64,' + base64
		}
		this.$audio.src = soundUrl
		this.$audio.play()
		if (needevent) {
			this.$playing = url
			this.$session.send_message("soundupdate",{url:this.$playing,time:0})
		} else {
			this.$playing = false
		}
	}

	stopMusic(noevent) {
		let result = this.$audio.pause()
		console.log("stop audio mix - replay",result)
		if (this.$playing) {
			if (!noevent) {
				this.$session.send_message("soundended", {url:this.$playing})
			}
			this.$playing = null
		}
    }
    
	render() {
		return (
			<div className="page course-page student">
				<div className="inner">
                    <audio src="" ref={(ref)=>{
                        this.$audio = ref
                    }}/>
                    <div className="videos-container" id='videos-container'></div>
					<div className="course-page-back" onClick={()=>{
						this.preLeaveCourse()
					}}></div>
					<div className="content">
						<div className="course-content kc-canvas-area cocos" id="course-content"></div>
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
	onQuestionDetail: (status) => dispatch(onQuestionDetail(status)),
	onCourseRecording   : (status) => dispatch(onCourseRecording(status))
})
  
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Course)
