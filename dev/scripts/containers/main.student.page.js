import React from 'react';
import { connect } from 'react-redux'
import Download from '../components/download'
import CourseRecord from './course.student.replay.page'
import CourserFlow from './course.student.flow.page'
import Devices from './devices'
import SideBar from '../components/sidebar'
import ViewUser from '../components/viewuser'
import ViewChangePwd from '../components/viewChangePwd'
import Helper from '../components/helper'
import net from "../network"
import Camp from '../components/camp'
import "../../less/mainright.less"
import * as types from '../constants/ActionTypes'
import { 
    onRoomInfo,
	onLogout, onStartCourse,
	confirm, alert, hide, onChangeUserInfo, onEnterTester,onEnterMyCourses,onExitMyCourses,onLessonComming,onLessonsComming,onLessonsDone,onLessonsTotalComming,onLessonsTotalDone,onCampLesson,
	onCourseRecording,
	showLoading,
	hideLoading,
	onChangePwd
} from '../actions'
import { setTimeout } from 'core-js';
import context from "../context"
import storage from "../Storage"
import bridge from '../../../core/MessageBridge'
import {ipcRenderer, remote} from "electron"
import MyCourse from './mycourse';

class Main extends React.Component {
	constructor(props) {
		super(props)
		this.$detect_delay 		= 5000
		this.$cache_valid_time 	= 60*60*1000
        this.state ={
			showChangePwdMask   : false
		}
		net.on("LOGOUT_NEEDED", ()=>{
			this.onLogout()
		})
		console.log('this.props.account.id == ',this.props.account.id)
		ipcRenderer.on("room-closed", ()=>{
			this.__get_lesson_comming();
			context.upload_system_logs()
			context.upload_agora_logs()
		})
		this.__check_device();
	}

	__check_device(){
		let checked = localStorage.getItem('DEVICE_CHECKED_ALREADY') == 1;
		if(!checked){
			this.props.showLoading("首次进入，需要为您做些优化")
		}
		this.$timer_device_check = setInterval(() => {
			//轮询等待systeminfo
			if (window.ENV_CONF && window.ENV_CONF.systeminfo) {
				clearInterval(this.$timer_device_check);
				this.$timer_device_check = null;
				net.checkDevice().then((res)=>{
					this.props.hideLoading();
					context.oldDevice 		 = !!res.old_device
					context.joinClassEnabled = !!res.to_class;
					
					if(res.old_user || checked) return;
					this.props.alert({
						content: "欢迎进入明兮学堂，为了您更好的体验，请先来检测下设备吧",
						sure: ()=>{
							this.props.onEnterTester("main")
						},
						sure_txt: "设备检测",
						close_hidden: true
					});
				
				});
			}
		}, 200);
	}

	strToDate(str) {
		let parsed = str.split(/[-: ]/)
		return new Date(parsed[0], parsed[1] - 1, parsed[2]||1, parsed[3]||0, parsed[4]||0, parsed[5]||0)
    }
    
    __get_lesson_comming(){
		net.getLessonComming().then((res)=>{
			// 计算剩余时间
			let room = res.room;
			if (room) {
				let date = this.strToDate(room.start_time)
				let left = date.getTime() - new Date().getTime()
				room.left = left
				if (left > 0) {
					let days  	= left / 1000 / 60 / 60 / 24 >> 0
					left       -= days * 1000 * 60 * 60 * 24
					let hours 	= left / 1000 / 60 / 60 >> 0
					let minutes = (left - hours * 60 * 60 * 1000)/1000/60 >> 0
					room.days   = days
					room.hours  = hours
					room.minutes= minutes
				}
			}
			this.props.onLessonComming(room)

			net.getCampLesson().then((room)=>{
				console.log('camp room info',room);
				this.props.onCampLesson(room);
			})
		})
	}
	
	__isOldPassWord(){
		net.checkPwIsDefault().then(res=>{
			if(res.status && this.state.showChangePwdMask){
				this.props.alert({
					content: "系统检测您现在使用的默认密码，为了账户的安全，建议进行修改。",
					sure: ()=>{
						this.__view_change_pwd()
					},
					sure_txt: "修改密码",
					close_hidden: true
				});
			}
		})
	}

	__remindChangePwd(){
		this.__remindTime()
		this.__isOldPassWord()
	}
	__remindTime(){
		let remindTime = new Date().getTime()
		let nowTime    = localStorage.getItem("FIRSTTIME") 
		let sevenDay   = 24*60*60*1000*7
		if(remindTime-nowTime > sevenDay) {
			this.setState({
				showChangePwdMask: true
			})
		} else{
			this.setState({
				showChangePwdMask: false
			})
		} 
    }
    
	componentDidMount() {  
		this.__get_lesson_comming();
		context.user = this.props.account
		context.restoreOldDevice()
		net.reportSystemBaseInfo()
	}

	componentWillUnmount() {
		if (this.$timer_device_check) {
			clearInterval(this.$timer_device_check)
			this.$timer_device_check = null;
		}
		ipcRenderer.removeAllListeners("room-closed")
	}

	__camp_room(){
		let room = this.props.campRoom;
		if (room) {

			room.students = []
			return 	<div key="1" className="lesson-box flow">
						<div className="cover">
							<img src={room.avatar} alt=""/>
						</div>
						<div className="info">
							<div className="name"><span>{room.name}</span></div>
							<div className="desc">课时简介：{room.content||'暂无'}</div>
							{/* <div className="index"><span>老师：{room.teacher_name}</span></div> */}
							<div className="tag">
								<div className="tag-kind">{room.open_tip || '开放时间'}</div>
								<div className="date"><span>{room.open_date}</span></div>
							</div>
						</div>
						
						<div className="btns-panel">
							<button className="start-btn flow" onClick={()=>{
								this.onRecordRoom(room, true)
							}}>{room.start_study}</button>
						</div>

						<div className="camp-flag">
						</div>
					</div>
		}else{
			return [
				<div key="0" className="time">接下来没有课程啦～</div>,
				<div key="1" className="no-lesson">
					去“明兮大语文”小程序<br/>
					和其他小朋友一起完成作业吧~
				</div>
			]
		}
	}

	__student_page() {
		let room = this.props.commingRoom;
		if (room) {
			room.can_enter = true
			room.can_download = true
		}
		
		return (
			<div className="page student-pages">
				<div className="inner">
					<div className="student-box">
                        <div className="main-page">
                            { room ? ([
                                <div key="1" className="lesson-box">
                                    <div className="cover">
									    <div className="cover-img"> 
                                          <img src={room.avatar} alt=""/>
										</div>
										<div className="name">{room.name}</div>
                                    </div>
                                    <div className="info">
                                        <div className="desc">课时简介：{room.content||'暂无'}</div>
                                        {/* <div className="index"><span>老师：{room.teacher_name}</span></div> */}
                                        <div className="tag"><div className="tag-kind">{room.label}</div><span className="tag-effect">{"学习力提升："+(room.ability)}</span></div>
                                        <div className="date"><span>{room.class_date} {room.class_time}</span></div>
                                    </div>
									
                                    <div className="btns-panel">
										{room.can_enter && room.class_state == 'normal' ?<div className="start-imgbtn">
											<img src={require('../../assets/attend-class.png')} onClick={()=>{
											this.onStartRoom(room)
										}} alt=""/>
										</div>:""}
										
										{room.preview_status == "on" && room.prepare_name ? <div className="preview-imgbtn"><img src={require('../../assets/preview-btn.png')} onClick={()=>{
											this.onStartPreview(room)
										}} alt=""/></div> : ""}
										{this.__get_room_flag(room.class_state)}
									</div>
                                </div>,
                                
                                room.left > 0 ? (
                                    <div key="0" className="time">上课倒计时：
                                    {
                                        room.days > 0 ? <label><span>{room.days}</span>天</label> : ""
                                    }
                                    {
                                        room.hours > 0 ? <label><span>{room.hours}</span>小时</label> : ""
                                    }
                                    {
                                        room.minutes > 0 ? <label><span>{room.minutes}</span>分钟</label> : ""
                                    }
                                    </div>
                                ) : (
                                    <div key="0" className="time">老师开始讲课啦，赶快进入教室哦！</div>
                                )
                            ]) : this.__camp_room() }
                        </div>
					</div>
				</div>
			</div>
		)
    }

	__get_room_flag(state){
		if (state == 'leave') {
			return <div className="leave-flag"></div>
		}else if (state == 'back') {
			return <div className="back-flag"></div>
		}else if (state == 'xiuxue') {
			return <div className="xiuxue-flag"></div>
		}
		return ''
	}

	onStartPreview(data) {
		this.onDownloadPreview(data)
	}

	onStartHomework(data) {
		this.onDownloadHomework(data)
	}
	
	onStartRoom(data) {
		if (!context.joinClassEnabled) {
			this.props.alert({
				content: "亲爱的宝妈您好，因我们课件的动画和交互较多，经检测您目前的设备可能不支持我们的正常上课，为了避免影响您的上课体验，请联系您的顾问老师帮您解决，感谢您的支持！",
				sure: ()=>{}
			});
			return;
		}
		this.onDownload(data)
	}

	__onStartRoom(data,isRecord) {
		this.props.onRoomInfo(data)
		if(isRecord){
			this.props.hide()
			setTimeout(()=>{
				this.onEnterRoom(true,camp)	
			},500)
		}else{
			this.props.confirm({
				content: <div>上课时间：{data.start_time}<br/>准备好开始上课了吗？</div>,
				sure: ()=>{
					this.onEnterRoom()
				}
			})
		}
	}

	onRecordRoom(data, camp) {
		// 判断最近1小时内是否下载过课程包，如果下载过则不提示下载
		if (camp) {
			data.camp = true;
			data.teachers = [data.master_teacher_id]

			if (!data.is_enter) {
				this.props.alert({
					content: "该课程不在开放时间"
				})
				return;
			}
		}
		this.onDownload(data, true, camp);			
	}

	onDownloadHomework(room) {
		this.props.alert({
			title: "下载作业包",
			content: <Download data={room} homework={true} complete={(data)=>{
				this.props.hide()
				bridge.call({
					method	: "openLiveRoom",
					args	: { pack: "homeworkroom", data }
				}).catch(error=>{
					console.error(error)
				})
			}} error={(error)=>{
				
			}} user={this.props.account}/>,
			nobutton: true,
			noanim	: true
		})
	}

	onDownloadPreview(room) {
		this.props.alert({
			title: "下载课程包",
			content: <Download data={room} preview={true} complete={(data)=>{
				this.props.hide()
				data.preview = true
				bridge.call({
					method	: "openLiveRoom",
					args	: { pack: "liveroom", data }
				}).catch(error=>{
					console.error(error)
				})
			}} error={(error)=>{
				
			}} user={this.props.account}/>,
			nobutton: true,
			noanim	: true
		})
	}

	onDownload(room, isRecord, camp) {
		this.props.alert({
			title: "下载课程包",
			content: <Download data={room} recording={isRecord} camp={camp} complete={(data)=>{
				this.props.hide()
				bridge.call({
					method	: "openLiveRoom",
					args	: { pack: "liveroom", data }
				}).catch(error=>{
					console.error(error)
				})
			}} error={(error)=>{
				
			}} user={this.props.account}/>,
			nobutton: true,
			noanim	: true
		})
	}

	onEnterRoom(isRecord, camp) {
		if (isRecord) {
			this.props.onCourseRecording(true,camp)
		} else {
			this.props.onStartCourse()
		}
	}

	onConfirmToLogout() {
		this.props.confirm({
			content: "确认退出当前登录的帐号吗？",
			sure: ()=>{
				this.onLogout()
			}
		})
	}

	onLogout() {
		this.props.onLogout()
	}
	
	__view_user() {
		this.props.confirm({
			title: "个人信息",
			nobutton: true,
			content: <ViewUser user={this.props.account} onLogout={()=>{
				this.onConfirmToLogout()
			}} onChangeUser={(user)=>{
				this.props.onChangeUserInfo(user)
			}} alert={(...params)=>{
				this.props.alert(...params)
			}} confirm={(...params)=>{
				this.props.confirm(...params)
			}} changePw={()=>{
				this.__view_change_pwd(true)
			}}/>
		})
	}

	__view_change_pwd(fromViewUser){
		this.props.onChangePwd(true, !!fromViewUser)
		this.props.hide()
	}

	__view_camp() {
		this.props.confirm({
			nobutton: true,
			title_hidden: true,
			large_mod: true,
			content: <Camp 
				room={this.props.campRoom} 
				onStartLearning={()=>{
					this.onRecordRoom(this.props.campRoom, true)
				}}
			/>
		})
	}

	__on_helper() {
		this.props.confirm({
			title: "问题帮助",
			nobutton: true,
			content: <Helper />
		})
	}

	render() {
		let content, sidebar = ""
		let flow = this.props.campRoom && this.props.commingRoom;
		if (this.props.started) {
			//如果是回放加载回放组件
			content = <CourseForStudent onLeaveRoom={()=>{
				this.__get_lesson_comming();
			}}/>
		} else if (this.props.recording) {
			if (this.props.flow) {
				content = <CourserFlow/>
			}else{
				content = <CourseRecord/>
			}
		} else if (this.props.testing) {
			content = <Devices onExit={()=>{
				this.__get_lesson_comming()
				this.__remindChangePwd()
			}}/>
        } else if (this.props.mycourses){
			content = <MyCourse onStartRoom={(room)=>{
				this.onStartRoom(room)
			}}  onRecordRoom={(room)=>{
				this.onRecordRoom(room)
			}} onStartHomework={(room)=>{
				this.onStartHomework(room)
			}} onStartPreview={(room)=>{
				this.onStartPreview(room)
			}} onExit={()=>{
				this.__get_lesson_comming()
			}}/>
        } else if (this.props.changePwd){
			content = <ViewChangePwd 
			fromViewUser={this.props.fromViewUser}
			onClose={(fromViewUser)=>{
				this.props.onChangePwd(false, false)
				if (fromViewUser) {
					this.__view_user()
				}
			}}/>
		}else {
			content = this.__student_page()
			sidebar = <SideBar flow={flow} user={this.props.account} onDeviceTest={()=>{
				this.props.onEnterTester("main")
			}} onViewUser={()=>{
				this.__view_user()
			}} onViewHelper={()=>{
				this.__on_helper()
			}} onEnterMyCourses={()=>{
				this.props.onEnterMyCourses();
			}} onViewCamp={()=>{
				this.__view_camp()
			}}/>
		}
		return (
			<div className="full-h">{sidebar}{content}</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		account 	: state.login.account,
		rooms 		: state.main.rooms,
		changePwd   : state.main.changePwd,
		fromViewUser: state.main.fromViewUser,
		room 		: state.room.info,
		gifts 		: state.room.gifts,
		calendar	: state.main.calendar,
		started 	: state.main.courseStarted,
		recording	: state.main.recording,
		flow    	: state.main.flow,
        testing 	: state.main.enterTester,
		mycourses   : state.main.enterMyCourses,
		commingRoom : state.main.commingRoom,
		campRoom    : state.main.campRoom,
	}
}

const mapDispatchToProps = dispatch => ({
	onRoomInfo	   		: (data) => dispatch(onRoomInfo(data)),
	onLogout       		: () => dispatch(onLogout()),
	onChangePwd      	: (show, fromViewUser) => dispatch(onChangePwd(show, fromViewUser)),
	onStartCourse  		: () => dispatch(onStartCourse()),
	confirm 	   		: (data) => dispatch(confirm(data)),
	alert 	   	   		: (data) => dispatch(alert(data)),
	hide 				: () => dispatch(hide()),
    onEnterTester 		: (fromPage) => dispatch(onEnterTester(fromPage)),
    onEnterMyCourses    : ()=>dispatch(onEnterMyCourses()),
	onChangeUserInfo 	: (user) => dispatch(onChangeUserInfo(user)),
	onCourseRecording   : (status, camp) => dispatch(onCourseRecording(status, camp)),
	onLessonComming     : (room) => dispatch(onLessonComming(room)),
	onCampLesson        : (room) => dispatch(onCampLesson(room)),
	hideLoading 		: () => dispatch(hideLoading()),
	showLoading 		: (message) => dispatch(showLoading(message)),
})
  
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main)