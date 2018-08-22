import React from 'react';
import { connect } from 'react-redux'
import Calendar from '../components/calendar'
import Download from '../components/download'
import Course from './course.page'
import Devices from './devices'
import NetStatus from '../components/netstatus'
import * as types from '../constants/ActionTypes'
const net = require("../network")
import { 
	onRoomList, onCalendarData, onRoomInfo,
	onLogout, onStartCourse, onEndCourse,
	confirm, alert
} from '../actions'
const NetDetector = require("../netdetector")

class Main extends React.Component {
	constructor(props) {
		super(props)
		this.$calendarRef = React.createRef()
		this.state = { recording: false, netstatus: 1 }
		net.on("LOGOUT_NEEDED", ()=>{
			this.onLogout()
		})
	}

	strToDate(str) {
		let parsed = str.split(/[-: ]/)
		return new Date(parsed[0], parsed[1] - 1, parsed[2]||1, parsed[3]||0, parsed[4]||0, parsed[5]||0)
	}

	componentWillUnmount() {
		clearInterval(this.$detect_timer)
	}

	componentDidMount() {
		let { account } = this.props  
		if (account.dentity == types.DENTITY.STUDENT) {
			net.lessonsByDate().then((res)=>{
				// 计算剩余时间
				let room = res.rooms[0]
				if (room) {
					let date = this.strToDate(room.start_time)
					let left = date.getTime() - new Date().getTime()
					room.left = left
					if (left <= 5 * 60 * 1000) {
						room.can_enter = true
					}
					if (left <= 60 * 60 * 1000) {
						room.can_download = true
					}
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
		let detector = new NetDetector
		detector.on("NET:ERROR", ()=>{
			console.log("net error")
			this.setState({ netstatus: 0 })
		})
		detector.on("NET:STATUS", (level)=>{
			console.log("net status", level)
			this.setState({ netstatus: level })
		})
		this.$detect_timer = setInterval(()=>{
			detector.check()
		},5000)
		detector.check()
	}

	__student_page() {
		let room 
		if (this.props.rooms && this.props.rooms.length > 0) {
			room = this.props.rooms[0]
		}
		return (
			<div className="page student-page">
				<div className="inner">
					<button className="logout-btn" onClick={this.onLogout.bind(this)}>退出</button>
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
							<button className={room.can_enter?"start-btn":"start-btn waiting"} disabled={room.can_enter?"":"true"} onClick={()=>{
								this.onStartRoom(room)
							}}></button>
							{room.can_download?<button className="download-btn" onClick={()=>{
								this.onDownload(room, room.can_enter)
							}}></button>:""}
						</div>
					]) : ([
						<div key="0" className="time">接下来没有课程啦～</div>,
						<div key="1" className="no-lesson">
							去“沐文大语文”小程序<br/>
							和其他小朋友一起读诗
						</div>
					]) }
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
				<button className="logout-btn" onClick={this.onLogout.bind(this)}>退出</button>
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
										<button className="start-btn" disabled={room.state==2?"true":""} onClick={()=>{
											this.onStartRoom(room)
										}}></button>
										<button className="download-btn" onClick={()=>{
											this.onDownload(room,room.state!=2)
										}}></button>
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
		this.props.onRoomInfo(data)
		this.props.confirm({
			content: <div>上课时间：{data.start_time}<br/>确认现在开始上课吗？</div>,
			sure: ()=>{
				this.onEnterRoom()
			}
		})
	}

	onRecordRoom(data) {
		this.setState({ recording: true })
		this.props.onRoomInfo(data)
		this.onEnterRoom()
	}

	onDownload(data, canenter) {
		this.props.alert({
			title: "下载课程包",
			content: <Download name={data.en_name} complete={()=>{
				if (canenter) {
					this.onStartRoom(data)
				} else {
					this.props.alert({
						content: "下载完成。"
					})
				}
			}}/>,
			nobutton: true
		})
	}

	onEnterRoom() {
		this.props.onStartCourse()
	}

	onLogout() {
		this.props.onLogout()
	}

	render() {
		let { account } = this.props 
		let content
		if (this.props.started) {
			content = <Course recording={this.state.recording}/>
		} else if (this.props.testing) {
			content = <Devices />
		} else {
			if (account.dentity == types.DENTITY.STUDENT) {
				content = this.__student_page()
			} else {
				content = this.__master_page()
			}
		}
		return (
			<div className="full-h"><NetStatus status={this.state.netstatus}/>{content}</div>
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
	onRoomList     : (rooms) => dispatch(onRoomList(rooms)),
	onRoomInfo	   : (data) => dispatch(onRoomInfo(data)),
	onCalendarData : (data) => dispatch(onCalendarData(data)),
	onLogout       : () => dispatch(onLogout()),
	onStartCourse  : () => dispatch(onStartCourse()),
	confirm 	   : (data) => dispatch(confirm(data)),
	alert 	   	   : (data) => dispatch(alert(data))
})
  
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main)