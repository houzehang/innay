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
	onUpdateGift, onProgressReset, onUserAddRoom
} from '../actions' 

import CourseBase from './course.base.page'
const Const = require('../../const')
const {getCurrentWindow} = $require('electron').remote;
const context = require("../context")

class Course extends CourseBase {
	constructor(props) {
		super(props)
		this.state 		= { 
			control: !this.props.status.started,
			process: {current:0,total:0}
		}
		this.$view_mode = 1
		this.$in_warning = false;
		this.$warning_id = null;
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
			console.log("new stream from student",self,id)
			// 如果是低端设备则不显示流信息
			if (self || !context.isOldDevice()) {
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
			// this.$session.destroy()
			// if (this.$waiting_to_tester) {
			// 	this.props.onEnterTester("course")
			// } else {
			// 	this.props.onEndCourse()
			// }
			// if (this.props.onLeaveRoom) {
			// 	this.props.onLeaveRoom();
			// }
			getCurrentWindow().reload()
		})
		if (this.$timer_warning) {
			clearTimeout(this.$timer_warning);
		}
		super.componentDidMount();
	}

	__dancing_handler(data) {
		if (!data.message || !data.message.id) return
		let id = data.message.id
		let isSelf = id == this.props.account.id
		let render = this.$room.rtc.getRender(isSelf ? 0 : id)
		switch (data.type) {
			case Const.PUT_DANCE:
			if(this.$dancing_id) {
				if (context.isOldDevice()) {
					// 老设备需要关闭流
					this.$room.unsubscribe(this.$dancing_id)
					this.$room.rtc.destroyRender(this.$dancing_id)
				}
			}
			this.$dancing_id = id
			if (context.isOldDevice()) {
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
			if (context.isOldDevice()) {
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

	render() {
		return (
			<div className="page course-page student">
				<div className="inner">
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
	onUserAddRoom 	: (id) => dispatch(onUserAddRoom(id))
})
  
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Course)
