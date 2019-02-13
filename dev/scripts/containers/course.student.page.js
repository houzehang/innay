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
const Const   		= require('../../const')
import * as types from '../constants/ActionTypes'

import CourseBase from './course.base.page'
const net = require("../network")
const $ = require("jquery")

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

	isMaster(id) {
		return false;
	}

	isChairMaster(id) {
		return false;
	}

	isSubMaster(id) {
		return false;
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

	__warned(data){
		let warn_needed  = false;
		let max_duration = 30000;

		let warn_time = data.time;
		if (!warn_time || (this.__get_server_time() - Number(warn_time)) > max_duration) {
			console.log('warning abort!');
			return;
		}

		for (let i = 0,len = this.props.students.length; i < len; i++) {
			let student =  this.props.students[i];	
			if (student && this.props.account.id == student.id) {
				if (this.$in_warning) {
					console.log('i am in waring ...',student.id);
					return;
				}else{
					warn_needed = true;
				}
			}
		}
		if (!warn_needed) return;
		if (!data.leave_id) return;
		
		this.$in_warning = true;
		this.$warning_id = data.leave_id;

		this.props.onWarn(data, true);
		console.log('warned!!!!',data.uid);

		let check_times = 0;
		let check_limit = 4;
		let success = (reason)=>{

			this.$in_warning = false;
			this.props.onWarn(data, false);

			clearTimeout(this.$timer_warning);
			clearTimeout(this.$timer_check_again);
			this.$timer_warning = null;
			this.$timer_check_again = null;

			console.log('success reason:',reason);
		}
		
		this.$timer_warning = setTimeout(() => {
			success('too long time!');
		}, max_duration);

		let check = ()=>{
			let canvas_dom = $(`#student_${this.props.account.id} div canvas`),
				w 		   = 48,
				h 		   = 48;
			if (canvas_dom) {
				check_times++;
				console.log('check_times:',check_times);
				let canvas 		= canvas_dom[0],
					pre_w  		= canvas.width,
					pre_h  		= canvas.height;

				canvas.width 	= w;
				canvas.height 	= h;
				let context 	= canvas.getContext('webgl'),
					base64  	= canvas.toDataURL('image/jpeg')

				canvas.width 	= pre_w;
				canvas.height 	= pre_h;

				net.baseUpload({
					upload_file	: base64,
					leave_id 	: this.$warning_id,
					user_id		: this.props.account.id,
					channel_id	: this.props.room.channel_id,
					token		: net.token
				}).then((res)=>{
					console.log('baseUploadres == ',res)
					if (res && res.status) {
						success('success!!');
					}else if(check_times >= check_limit){
						success('overtimes!!');
					}else{
						this.$timer_check_again = setTimeout(() => {
							clearTimeout(this.$timer_check_again);
							this.$timer_check_again = null;
							check();
						}, 5000);
					}
				});
			}else{
				success('no dream!');
			}
		}
		check();
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
 			if (item.warn) {
				warning = item
			}
		}
		let warned = this.props.account.id == (warning || {}).id;
		
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
		return (
			<div className="page course-page student">
				<div className="inner">
					<div className="content">
						<div className="course-content kc-canvas-area" id="course-content"></div>
						{warned?<div className="warn-mask">
							<div className="warn-word">
								<div className="warn-word-icon"></div>
								<span className="warn-word-content">坐姿提醒</span>
							</div>
							<div className="warn-panel">
								<span className="warn-text">不在红框中会减小星星哦~</span>
								<div className="warn-head"></div>
								<div className="warn-head-frame"></div>
							</div>
						</div>:""}
					</div>
					<div className="entities-area">
						{TeacherView}
						{StudentView}
						<div className="counter icon">
							<button className="help-btn" onClick={()=>{
								this.onHelpClick()
							}}></button>
						</div>
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
