import React from 'react';
import { connect } from 'react-redux'
import Calendar from '../components/calendar'
import Download from '../components/download'
import Course from './course.page'
import CourseRecord from './course.record'
import Devices from './devices'
import SideBar from '../components/sidebar'
import ViewUser from '../components/viewuser'
import Helper from '../components/helper'
import * as types from '../constants/ActionTypes'
const net = require("../network")
import { 
	onRoomList, onCalendarData, onRoomInfo,
	onLogout, onStartCourse, onEndCourse,
	confirm, alert, hide, onChangeUserInfo, onEnterTester
} from '../actions'
const context = require("../context")
const storage = require("../Storage")

class Main extends React.Component {
	constructor(props) {
		super(props)
		this.$detect_delay 		= 5000
		this.$cache_valid_time 	= 60*60*1000
		this.$calendarRef  		= React.createRef()
		this.state = { recording: false }
		this.recordsRoom = {};
		net.on("LOGOUT_NEEDED", ()=>{
			this.onLogout()
		})
	}

	strToDate(str) {
		let parsed = str.split(/[-: ]/)
		return new Date(parsed[0], parsed[1] - 1, parsed[2]||1, parsed[3]||0, parsed[4]||0, parsed[5]||0)
	}

	componentDidMount() {
		let { account } = this.props  
		if (account.dentity == types.DENTITY.STUDENT) {
			net.lessonsByHistory().then(res=>{
				const {data} = res.list;
				this.recordsRoom = (data[data.length-1]);
			});
			net.lessonsByDate().then((res)=>{
				// 计算剩余时间
				let room = res.rooms[0]
				if (room) {
					let date = this.strToDate(room.start_time)
					let left = date.getTime() - new Date().getTime()
					room.left = left
					// if (left <= 5 * 60 * 1000) {
					room.can_enter = true
					// }
					// if (left <= 60 * 60 * 1000) {
					room.can_download = true
					// }
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
				this.props.onRoomList(res.rooms)
			})
		}
		context.user = this.props.account
	}

	__student_page() {
		let room 
		if (this.props.rooms && this.props.rooms.length > 0) {
			room = this.props.rooms[0]
		}
		console.warn(this.props.rooms)
		return (
			<div className="page student-page">
				<div className="inner">
					<div className="student-box">
						<div className="student-icon"></div>
						{ room ? ([
							room.left > 0 ? (
								<div key="0" className="time">距离下次上课还有
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
							),
							<div key="1" className="lesson-box">
								<div className="cover">
									<img src={room.avatar} alt=""/>
								</div>
								<div className="info">
									<div className="name">{room.name}</div>
									<div className="index">老师：{room.teacher_name}</div>
								</div>
								<button className={room.can_enter?"start-btn":"start-btn waiting"} disabled={!room.can_enter} onClick={()=>{
									this.onStartRoom(room)
								}}></button>
								{room.can_download?<button className="download-btn" onClick={()=>{
									this.onDownload(room)
								}}></button>:""}
							</div>
						]) : ([
							<div key="0" className="time">接下来没有课程啦～</div>,
							<div key="1" className="no-lesson">
								去“明兮大语文”小程序<br/>
								和其他小朋友一起完成作业吧~
							</div>
						]) }
					</div>
				</div>
			</div>
		)
	}

	__on_pick_date(data) {
		this.props.onCalendarData(data)
		let choosed = data.choosed_txt
		net.lessonsByDate(`${choosed.year}-${choosed.month}-${choosed.day}`).then((res)=>{
			this.props.onRoomList(res.rooms)
		})
	}

	__on_change_month(data) {
		let month = data.month > 9 ? data.month : ("0"+data.month)
		net.lessons(`${data.year}-${month}`).then((res)=>{
			let dates = res.dates
			this.$calendarRef.current.setHighlighted(dates)
		}).done()
	}

	__master_page() {
		let calendar = <Calendar onPickDate={(data)=>{
			this.__on_pick_date(data)
		}} onChangeMonth={(data)=>{
			this.__on_change_month(data)
		}} higlighted={this.state.higlighted} ref={this.$calendarRef}/>
		return (
			<div className="page calendar-page">
				<div className="calendar-inner">
					{calendar}
					{
						this.props.rooms ? 
						<div className="courses">
							<div className="title">
								<div className="label">今日课程</div>
							</div>
							{
								this.props.rooms.length == 0 ? <div className="nothing">今日没有课哦~</div> :
								(this.props.rooms.map((room,index)=>(
									<div className="row" key={index}>
										<div className="cover">
											<img src={room.avatar} alt=""/>
										</div>
										<div className="info">
											<div className="name">{room.name}</div>
											<div className="index">{room.lesson_name}</div>
											<div className="date">上课时间：{room.start_time}</div>
										</div>
										<button className="start-btn" disabled={room.state==2} onClick={()=>{
											this.onStartRoom(room)
										}}></button>
										{room.button_hf?<button className="record-btn" onClick={()=>{
											this.onRecordRoom(room)
										}}></button>:<button className="download-btn" onClick={()=>{
											this.onDownload(room)
										}}></button>}									
									</div>
								)))
							}
						</div>:""
					}
				</div>
			</div>
		)
	}

	onStartRoom(data) {
		// 判断最近1小时内是否下载过课程包，如果下载过则不提示下载
		let lastest_download = storage.get(`download_${data.en_name}`)
		if (lastest_download) {
			let delay = new Date().getTime() - lastest_download
			if (delay <= this.$cache_valid_time) {
				this.__onStartRoom(data)
				return
			}
		}
		if (context.detector.offline) {
			this.props.confirm({
				content: "您的网络已经断开，建议您检查网络后再开始上课。",
				sure_txt: "去检查网络",
				cancel_txt: "坚持上课",
				cancel: ()=>{
					this.__onStartRoom(data)
				}
			})
		} else {
			this.props.confirm({
				content: "为保证上课体验，建议您先下载课程包再开始上课。",
				sure_txt: "去下载",
				cancel_txt: "直接上课",
				sure: ()=>{
					this.onDownload(data, true)
				},
				cancel: ()=>{
					this.__onStartRoom(data)
				}
			})
		}
	}

	__onStartRoom(data,isRecord) {
		this.props.onRoomInfo(data)
		if(isRecord){
			this.props.hide()
			setTimeout(()=>{
				this.onEnterRoom()	
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

	onRecordRoom(data) {
		console.log("onRecordRoom",data)
		this.setState({ recording: true })
		// 判断最近1小时内是否下载过课程包，如果下载过则不提示下载
		let lastest_download = storage.get(`download_${data.en_name}`)
		if (lastest_download) {
			let delay = new Date().getTime() - lastest_download
			if (delay <= this.$cache_valid_time) {
				this.__onStartRoom(data,true)
				return
			}
		}
		if (context.detector.offline) {
			this.props.confirm({
				content: "您的网络已经断开，建议您检查网络后再开始上课。",
				sure_txt: "去检查网络",
				cancel_txt: "坚持上课",
				cancel: ()=>{
					this.__onStartRoom(data,true)
				}
			})
		} else {
			this.onDownload(data, true, true);			
		}
	}

	onDownload(data, canenter,isRecord) {
		console.log("download",data)
		this.props.alert({
			title: "下载课程包",
			content: <Download name={data.en_name} complete={()=>{
				// 存储最后一次下载时间
				storage.store(`download_${data.en_name}`,new Date().getTime())
				if (canenter) {
					this.__onStartRoom(data,isRecord)
				} else {
					this.props.alert({
						content: "下载完成。"
					})
				}
			}} user={this.props.account}/>,
			nobutton: true,
			noanim	: true
		})
	}

	onEnterRoom() {
		this.props.onStartCourse()
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
			}}/>
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
		let { account } = this.props 
		let content, sidebar = ""
		if (this.props.started) {
			//如果是回放加载回放组件
			content = this.state.recording ? <CourseRecord/>:<Course/>
		} else if (this.props.testing) {
			content = <Devices />
		} else {
			if (account.dentity == types.DENTITY.STUDENT) {
				content = this.__student_page()
			} else {
				content = this.__master_page()
			}
			sidebar = <SideBar user={this.props.account} onDeviceTest={()=>{
				this.props.onEnterTester("main")
			}} onViewUser={()=>{
				this.__view_user()
			}} onViewHelper={()=>{
				this.__on_helper()
			}}/>
		}
		return (
			<div className="full-h">{sidebar}{content}</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		account : state.login.account,
		rooms 	: state.main.rooms,
		room 	: state.room.info,
		gifts 	: state.room.gifts,
		calendar: state.main.calendar,
		started : state.main.courseStarted,
		testing : state.main.enterTester
	}
}

const mapDispatchToProps = dispatch => ({
	onRoomList     		: (rooms) => dispatch(onRoomList(rooms)),
	onRoomInfo	   		: (data) => dispatch(onRoomInfo(data)),
	onCalendarData 		: (data) => dispatch(onCalendarData(data)),
	onLogout       		: () => dispatch(onLogout()),
	onStartCourse  		: () => dispatch(onStartCourse()),
	confirm 	   		: (data) => dispatch(confirm(data)),
	alert 	   	   		: (data) => dispatch(alert(data)),
	hide 				: () => dispatch(hide()),
	onEnterTester 		: (fromPage) => dispatch(onEnterTester(fromPage)),
	onChangeUserInfo 	: (user) => dispatch(onChangeUserInfo(user))
})
  
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main)