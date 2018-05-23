import React from 'react';
import { connect } from 'react-redux'
import Calendar from '../components/calendar'
import Course from './course.page'
import * as types from '../constants/ActionTypes'
const net = require("../network")
import { 
	onRoomList, onCalendarData, onRoomInfo,
	onLogout, onStartCourse, onEndCourse
} from '../actions'

class Main extends React.Component {
	constructor(props) {
		super(props)
		this.$calendarRef = React.createRef()
		this.state = {}
	}

	componentDidMount() {
		let { calendar, account } = this.props  
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
	}

	__student_page() {
		let room 
		if (this.props.rooms && this.props.rooms.length > 0) {
			room = this.props.rooms[0]
		}
		return (
			<div className="page student-page">
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
						<div className="time">老师开始讲课啦，赶快进入教室哦！</div>
					),
					<div key="1" className="lesson-box">
						<div className="cover">
							<img src={room.avatar} alt=""/>
						</div>
						<div className="info">
							<div className="title">{room.name}</div>
							<div className="teacher">老师：{room.teacher_name}</div>
						</div>
						<button className={!room.can_enter?"start-btn disabled":"start-btn"}></button>
					</div>
				]) : ([
					<div key="0" className="time">接下来没有课程啦～</div>,
					<div key="1" className="lesson-box">
						去“大语文”小程序<br/>
						和其他小朋友一起读诗
					</div>
				]) }
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
			<div className={this.props.started?"page calendar-page next":"page calendar-page"}>
				<button className="logout-btn" onClick={this.onLogout.bind(this)}>退出</button>
				{calendar}
				{
					this.props.rooms ? 
					<div className="courses">
						<div className="title">
							<div className="label">今日课程</div>
						</div>
						{
							this.props.rooms.length == 0 ? <div className="nothing"></div> :
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
									<button className={room.state==2?"start-btn disabled":"start-btn"} onClick={()=>{
										this.onStartRoom(room)
									}}></button>
								</div>
							)))
						}
					</div>:""
				}
				<div className="mask enter-layer" style={{display:"none"}}>
					<div className="dialog">
						<button className="close-btn" onClick={()=>{
							this.closeLayer(".enter-layer")
						}}></button>
						<div className="title-icon"></div>
						<div className="content">上课时间：<span className="enter-time">{this.props.room?this.props.room.start_time:""}</span><br/>确认现在开始上课吗？</div>
						<button className="enter-btn" onClick={()=>{
							this.onEnterRoom()
						}}></button>
					</div>
				</div>
			</div>
		)
	}

	closeLayer(target) {
		$(target).removeClass("show")
		setTimeout(()=>{
			$(target).hide()
		},300)
	}

	onStartRoom(data) {
		this.props.onRoomInfo(data)
		$(".enter-layer").show()
		setTimeout(()=>{
			$(".enter-layer").addClass("show")
		},100)
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
		if (account.dentity == types.DENTITY.STUDENT) {
			content = this.__student_page()
		} else {
			content = this.__master_page()
		}
		return (
			<div className="full-h">
				{content}
				{this.props.started?<Course/>:""}
			</div>
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
		started : state.main.courseStarted
	}
}

const mapDispatchToProps = dispatch => ({
	onRoomList     : (rooms) => dispatch(onRoomList(rooms)),
	onRoomInfo	   : (data) => dispatch(onRoomInfo(data)),
	onCalendarData : (data) => dispatch(onCalendarData(data)),
	onLogout       : () => dispatch(onLogout()),
	onStartCourse  : () => dispatch(onStartCourse()),
	onEndCourse    : () => dispatch(onEndCourse()),
})
  
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main)