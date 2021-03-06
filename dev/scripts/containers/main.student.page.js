import React from 'react';
import { connect } from 'react-redux'
import Download from '../components/download'
import CourseRecord from './course.student.replay.page'
import CourserFlow from './course.student.flow.page'
import Devices from './devices'
import SideBar from '../components/sidebar'
import GlobalMsg from '../components/globalMsg'
import ViewUser from '../components/viewuser'
import ViewChangePwd from '../components/viewChangePwd'
import Helper from '../components/helper'
import net from "../network"
import Camp from '../components/camp'
import Const from '../../const'
import "../../less/mainpage.less"
import fs from 'fs'
import path from 'path'
import * as types from '../constants/ActionTypes'
import Toast from './toast'
import { 
    onRoomInfo,
	onLogout, onStartCourse,
	confirm, alert, hide, onChangeUserInfo, onEnterTester,onEnterMyCourses,onExitMyCourses,onLessonComming,onLessonsComming,onLessonsDone,onLessonsTotalComming,onLessonsTotalDone,onCampLesson,
	onCourseRecording,
	showLoading,
	hideLoading,
	onChangePwd,
	onShowGlobalMsg,
	onShowTost
} from '../actions'
import { setTimeout } from 'core-js';
import context from "../context"
import storage from "../Storage"
import bridge from '../../../core/MessageBridge'
import {ipcRenderer, remote} from "electron"
import MyCourse from './mycourse';
import { test } from 'shelljs';

const AUDIO_BACKGROUND 	= require('./../../assets/relax_background.mp3')
const AUDIO_SHANGKE 	= require('./../../assets/relax_shangke.mp3')
const AUDIO_XIUXI		= require('./../../assets/relax_xiuxi.mp3')
class Main extends React.Component {
	constructor(props) {
		super(props)
		this.$detect_delay 		= 5000
		this.$cache_valid_time 	= 60*60*1000
        this.state ={
			showChangePwdMask   : false,
			timeDiff:	0,
			progress: 0.1,
			audioOn: true,
			relaxTime: '',
			audio_url: '',
			relaxDone5To10: false,
			tipJoing: false
		}
		net.on("LOGOUT_NEEDED", ()=>{
			this.onLogout()
		})
		ipcRenderer.on("room-closed", ()=>{
			this.__get_lesson_comming();
			context.upload_system_logs()
			context.upload_agora_logs()
		})
		this.$audio_bg  = React.createRef()
		this.$audio_tip = React.createRef()
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
						content: "欢迎进入程序宝，为了您更好的体验，请先来检测下设备吧",
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

	__serverTime(){
		return new Date().getTime() + this.state.timeDiff
	}
	
	__stop_relax(room){
		if (room && room.follow) {
			this.$audio_bg.pause()
			this.$audio_tip.pause()
			this.$timer_relax && clearInterval(this.$timer_relax)
			this.$timer_relax_3_to_5 && clearInterval(this.$timer_relax_3_to_5)
			this.setState({
				relaxTime: '',
				progress: 0,
				tipJoing: false
			})
		}
	}

    __get_lesson_comming(){
		net.getServerTime().then((res) => {
			this.setState({ time: res.time * 1000 });
			this.setState({ timeDiff: res.time * 1000 - Date.now() });
			net.getLessonComming().then((res)=>{
				// 计算剩余时间
				let room = res.room;
				if (room) {
					//1.转换成UI展示所需格式的时间
					//todo: remove test code
					// room.start_time  = '2020-04-24 11:53'
					// room.follow		= true

					let relaxKey 	= `RELAX_REC_${room.channel_id}`
					let relaxTmKey  = `RELAX_TOTAL_${room.channel_id}`
					let relaxShown	= localStorage.getItem(relaxKey) == '1'
					let date 		= this.strToDate(room.start_time)
					let startTime 	= date.getTime()
					
					let left 		= startTime - this.__serverTime()
					let totalHist   = localStorage.getItem(relaxTmKey)
					let total       = parseInt(totalHist || left)
					!totalHist && localStorage.setItem(relaxTmKey, left.toString())
					let __secondToDate = (result)=>{
						var h = Math.floor(result / 3600) < 10 ? '0'+Math.floor(result / 3600) : Math.floor(result / 3600);
						var m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60));
						var s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60));
						return result = (h + ":" + m + ":" + s).replace(/^00:/,'');
					}
					room.left 	 	= left
					if (left > 0) {
						let days  	= left / 1000 / 60 / 60 / 24 >> 0
						left       -= days * 1000 * 60 * 60 * 24
						let hours 	= left / 1000 / 60 / 60 >> 0
						let minutes = (left - hours * 60 * 60 * 1000)/1000/60 >> 0
						room.days   = days
						room.hours  = hours
						room.minutes= minutes

						//relax time
						if (room.follow && !relaxShown && room.class_state != 'xiuxue') {
							let __handler_relax  = ()=>{
								let left 	 = startTime - this.__serverTime()
								let progress = Math.max(1, 100 * (1 - left / total)) 
								if (left <= 3 * 60 * 1000) {
									this.__stop_relax(room)
									
									this.props.hide()
									this.onStartRoom(room)
									
									return false;
								}
								let relaxTime = __secondToDate(left / 1000)
								this.setState({
									relaxTime,
									progress
								})

								//state1: 5-10分钟
								let hit5To10  = left >= 5 * 60 * 1000 && left < 10 * 60 * 1000
								let hit3To5   = left >= 3 * 60 * 1000 && left < 5 * 60 * 1000
								if (hit5To10 && !this.$relax_done_5_to_10) {
									this.$relax_done_5_to_10 = true
									this.$audio_tip.src = this.__get_audio('xiuxi')
									this.$audio_tip.play()
								}
								//state1: 3-5分钟
								if (hit3To5 && !this.$relax_done_3_to_5) {
									this.$relax_done_3_to_5 = true
									this.$audio_tip.pause()
									this.$audio_tip.src = this.__get_audio('shangke')
									this.$audio_tip.play()
									this.$timer_relax_3_to_5 = setInterval(() => {
										this.$audio_tip.play()
									}, 20 * 1000);
									//呼吸动作
									this.setState({
										tipJoing: true
									})
								}
								return true
							}
							this.$timer_relax = setInterval(() => {
								__handler_relax()
							}, 1000);
							if (__handler_relax()) {
								//后台自动下载
								this.onStartRoom(room, true)
								//背景音乐
								this.$audio_bg.src = this.__get_audio('background')
								if (this.state.audioOn) {
									this.$audio_bg.play()
								}
							} 
						}
					} else if (room.follow && !relaxShown) {
						//如果没有弹出过relax，直接进入教室
						localStorage.setItem(relaxKey, '1')
						this.onStartRoom(room)
					}
					this.props.onLessonComming(room)
				}
	
				net.getCampLesson().then((room)=>{
					console.log('camp room info',room);
					this.props.onCampLesson(room);
				})
			})
		})
	}

	__get_audio(name){
		let soundUrl = {
			background: AUDIO_BACKGROUND,
			xiugxi: AUDIO_XIUXI,
			shangke: AUDIO_SHANGKE,
		}[name]
		
		return soundUrl
	}
	
	__isOldPassWord(){
		net.checkPwIsDefault().then(res=>{
			if(res.status && this.state.showChangePwdMask){
				this.props.confirm({
					title: "温馨提示",
					content: "系统检测您现在使用的默认密码，为了账户的安全，建议进行修改。",
					sure: ()=>{
						this.__view_change_pwd()
					},
					sure_txt: "修改密码",
					close_hidden: true,
					style: Const.EBTN_STYLE_CONFIG.kChangePwd
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
					点击<span onClick={()=>{
						console.log('MINGXI_DEBUG_LOG>>>>>>>>>','');
						this.$jump_to_homework = true
						this.props.onEnterMyCourses();
					}}> 这里 </span>和其他<br/>小朋友一起完成作业吧～
				</div>
			] 
		}
	}

	__student_page() {
		let room = this.props.commingRoom;
		if (room) {
			room.can_enter = true
		}
		let relaxBubbleSize = 1
		let addon			= 0.01
		let progress 		= this.state.progress
		let thickness 		= 0.05
		let current 		= progress;
		let styRadialMask1  = {
			borderTopLeftRadius:`${(relaxBubbleSize / 2 + addon)}rem`, 
			borderTopRightRadius:`${(relaxBubbleSize / 2 + addon)}rem`, 
			width:`${(relaxBubbleSize + addon)}rem`, 
			height:`${(relaxBubbleSize / 2 + addon)}rem`, 
			top:`${(-(relaxBubbleSize + addon))}rem`, 
			left:`${(-addon / 2)}rem`, 
			visibility:`${current <= 50 ? 'visible' : 'hidden'}`,
		}
		let styRadialMask2 	= {
			borderTopLeftRadius:`${(relaxBubbleSize / 2 + addon)}rem`, 
			borderTopRightRadius:`${(relaxBubbleSize / 2 + addon)}rem`, 
			width:`${(relaxBubbleSize + addon)}rem`, 
			height:`${(relaxBubbleSize / 2 + addon)}rem`, 
			top:`${(-(relaxBubbleSize + relaxBubbleSize / 2  + addon * 2))}rem`, 
			left:`${(-addon / 2)}rem`, 
			// visibility:`${current > 50 && current <100 ? 'visible' : 'hidden'}`,
		}
		let styDot2 = {
			visibility:`${current > 50 && current <100 ? 'visible' : 'hidden'}`
		}
		let styRadialMask3 = {
			borderTopLeftRadius:`${(relaxBubbleSize / 2 + addon)}rem`, 
			borderTopRightRadius:`${(relaxBubbleSize / 2 + addon)}rem`, 
			width:`${(relaxBubbleSize)}rem`, 		 
			height:`${(relaxBubbleSize / 2)}rem`, 		 
			top:`${-2.022||(-(relaxBubbleSize * 2 + addon * 2))}rem`,  
			visibility:`${current > 50 ? 'visible' : 'hidden'}`
		}
		let styRadialInner = {
			width:`${(relaxBubbleSize - thickness * 2)}rem`, 
			height:`${(relaxBubbleSize - (thickness * 2) + addon)}rem`, 
			top:`${-2.476||(-(relaxBubbleSize * 2.49 - thickness + addon * 3))}rem`, 
			left:`${0.0474||thickness}rem`,
		}

		if (progress > 50) {
			styRadialMask1.transform = `rotate(270deg)`
			styRadialMask2.transform = `rotate(${90 + (progress * 3.6)}deg)`
		} else {
			styRadialMask1.transform = `rotate(${90 + (progress * 3.6)}deg)`
		}

		let showBubble = (room||{}).class_state !== 'xiuxue' && this.state.relaxTime

		return (
			<div className="page student-pages">
				<audio src='' crossOrigin='anonymous' loop="loop" autoPlay={'autoplay'} ref={(ref)=>{
					this.$audio_bg = ref
				}}/>
				<audio src="" crossOrigin='anonymous' autoPlay={'autoplay'} ref={(ref)=>{
					this.$audio_tip = ref
				}}/>
				<div className="inner">
					<div className={"student-box" + (showBubble ? " lower" : "")}>
						{this.state.relaxTime ? 	<div className="relax-bubble">
								<div className="tip-label">{`课间休息还有${(()=>{
									let relaxTime = this.state.relaxTime
									let detail    = relaxTime.split(':')
									let hours	  = detail.length == 2 ? 0 : parseInt(detail[0])
									let minutes	  = detail.length == 2 ? parseInt(detail[0]) : parseInt(detail[1])  
									let seconds	  = detail.length == 2 ? parseInt(detail[1]) : parseInt(detail[2]) 
									return (hours > 0 ? `${hours}小时`: '') + minutes + '分'// + seconds + '秒'
									
								})()}哦～`}</div>
								<div className={"btn-audio"+(this.state.audioOn ? "": " off")} onClick={
									()=>{
										let targetState = !this.state.audioOn
										this.setState({
											audioOn: targetState
										})
										if (targetState) {
											this.$audio_bg.play()
										} else {
											this.$audio_bg.pause()
										}
									}
								}></div>
								<div className="anim-sprite"></div>
								<div className="col-md-25 col-sm-50">
									<div className="tox-progress">
										<div className="progress-inner">
											<div className={"time-number"+(this.state.relaxTime.length <= 5 ? "" : " small")}>
												<span>{this.state.relaxTime}</span>
											</div>
											<div className="radial-outer"></div>
											<div className="radial-mask-1" style={styRadialMask1}>
												<div className="dot"></div>
											</div>
											<div className="radial-mask-2" style={styRadialMask2}>
												<div className="dot" style={styDot2}></div>
												<div className="dot2"></div>
											</div>
											<div className="radial-mask-3" style={styRadialMask3}>
												<div className="dot"></div>
											</div>
											<div className="radial-inner"  style={styRadialInner}></div>
										</div>
									</div>
								</div>
							</div> : ''}
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
                                        <div className="tag">
											<div className="tag-kind">{room.label}</div>
											<div className="tag-effect">{"学习能力提升："+(room.ability)}</div>
										</div>
                                        <div className="date"><span>{room.class_date} {room.class_time}</span></div>
                                    </div>
									
                                    <div className="btns-panel">
										{room.can_enter && room.class_state == 'normal' ?<div className="start-imgbtn">
											<img className={'start'+(this.state.tipJoing ? " breath" : "")} src={require('../../assets/attend-class.png')} onClick={()=>{
											// this.__stop_relax(room)
											this.onStartRoom(room)
										}} alt=""/>
											<img className='foot' src={require('../../assets/foot.png')} alt=""/>
										</div>:""}
										
										{room.preview_status == "on" && room.prepare_name && !room.follow && (room||{}).class_state != 'xiuxue' ? <div className="preview-imgbtn"><img src={require('../../assets/preview-btn.png')} onClick={()=>{
											this.onStartPreview(room)
										}} alt=""/></div> : ""}
										{this.__get_room_flag(room.class_state)}
									</div>
                                </div>,
                                
                                showBubble ?"":(room.left > 0 ? (
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
                                ))
                            ]) : this.__camp_room() }
                        </div>
					</div>
				</div>
			</div>
		)
    }

	__get_room_flag(state){
		if (state == 'leave') {
			return <div className="flag leave-flag"></div>
		}else if (state == 'back') {
			return <div className="flag back-flag"></div>
		}else if (state == 'xiuxue') {
			return <div className="flag xiuxue-flag"></div>
		}
		return ''
	}

	onStartPreview(data) {
		this.onDownloadPreview(data)
	}

	onStartHomework(data) {
		this.onDownloadHomework(data)
	}
	
	onStartRoom(data, withoutJoining) {
		console.log('MINGXI_DEBUG_LOG>>>>>>>>>onStartRoom',withoutJoining);
		if (!context.joinClassEnabled) {
			this.props.alert({
				content: "亲爱的宝妈您好，因我们课件的动画和交互较多，经检测您目前的设备可能不支持我们的正常上课，为了避免影响您的上课体验，请联系您的顾问老师帮您解决，感谢您的支持！",
				sure: ()=>{}
			});
			return;
		}
		this.onDownload(data, false, false, withoutJoining)
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

	onDownload(room, isRecord, camp, withoutJoining) {
		let follow 	= room.follow
		let content = <Download data={room} recording={isRecord} camp={camp} complete={(data)=>{
			if (follow && withoutJoining) {
				console.log('download over but without joining');
			} else {
				if (follow) {
					let relaxKey 	= `RELAX_REC_${room.channel_id}`
					let relaxTmKey 	= `RELAX_TOTAL_${room.channel_id}`
					localStorage.setItem(relaxKey, '1')
					localStorage.removeItem(relaxTmKey)
				}
				this.props.hide()
				bridge.call({
					method	: "openLiveRoom",
					args	: { pack: "liveroom", data }
				}).catch(error=>{
					console.error(error)
				})
			}
		}} error={(error)=>{
			
		}} user={this.props.account}/>
		this.props.hide()
		this.__stop_relax()
		this.props.alert({
			title: "下载课程包",
			content,
			nobutton: true,
			noanim	: true,
			hidden: !!withoutJoining
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
			}}/>,
			linestyle: Const.LINE_CONFIRM_TITLE.lineTitle
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
		let content, sidebar = "", globalMsg;
		let flow = this.props.campRoom && this.props.commingRoom;
		if (this.props.globalMsg) {
			globalMsg = <GlobalMsg></GlobalMsg>
		}
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
			}} 
				checkDoneRooms={!!this.$jump_to_homework}
			/>
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
			let __forbidden = ()=>{
				if (this.state.relaxTime) {
					this.props.onShowTost({
						content: "马上就要上课啦，不要走开哦～"
					}) 
					return true
				}
				return false
			}
			sidebar = <SideBar flow={flow} user={this.props.account} onDeviceTest={()=>{
				!__forbidden() && this.props.onEnterTester("main")
			}} onViewUser={()=>{
				!__forbidden() && this.__view_user()
			}} onViewHelper={()=>{
				!__forbidden() && this.__on_helper()
			}} onEnterMyCourses={()=>{
				this.$jump_to_homework = false
				!__forbidden() && this.props.onEnterMyCourses();
			}} onViewCamp={()=>{
				!__forbidden() && this.__view_camp()
			}}/>
		}
		console.log("this.props.started",this.props.changePwd)
		return (
		<div className="full-h" onDragStart={(e)=>{
			e.preventDefault()
		}}>{sidebar}{content}{globalMsg}{this.props.showToastState.showing?<Toast data={this.props.showToastState} /> : ''}</div>
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
		globalMsg   : state.main.globalMsg,
		showToastState : state.toast
	}
}

const mapDispatchToProps = dispatch => ({
	onRoomInfo	   		: (data) => dispatch(onRoomInfo(data)),//没有使用
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
	onCampLesson        : (room) => dispatch(onCampLesson(room)),//训练营
	hideLoading 		: () => dispatch(hideLoading()),
	showLoading 		: (message) => dispatch(showLoading(message)),
	onShowGlobalMsg 	: (message) => dispatch(onShowGlobalMsg(message)),
	onShowTost   		: (configure) => dispatch(onShowTost(configure))
})
  
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main)