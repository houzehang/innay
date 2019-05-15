import React from 'react'
import { connect } from 'react-redux'
import {
	onExitMyCourses,
	onLessonsComming,
	onLessonsDone,
	onLessonsTotalComming,
	onLessonsTotalDone
} from '../actions'

import net from "../network"

class MyCourse extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			comming_page_selected: true
		}
		this.__reset();
	}

	__reset(){
		this.$page_comming 			 	= 1;
		this.$page_done 			 	= 1;

		this.$no_morelessons_comming 	= false;
		this.$no_morelessons_done 	 	= false;

		this.$querying_comming_lessons 	= false;
		this.$querying_done_lessons 	= false;

		this.props.onLessonsComming([])
		this.props.onLessonsDone([])
		this.props.onLessonsTotalDone(0)
	}

	componentDidMount() {
		this.__query_courses();
	}

	componentWillUnmount() {
		this.__reset()
	}

	__query_courses(more) {
		if (this.state.comming_page_selected) {
			//未上课程
			if (this.$no_morelessons_comming || this.$querying_comming_lessons) return;
			if (more || this.$page_comming == 1) {
				this.$querying_comming_lessons = true;				
				net.getLessonListComming({ page: this.$page_comming }).then(res => {
					this.$querying_comming_lessons = false;
					if (res && res.list && res.list.data && res.list.data.length > 0) {
						this.$page_comming = Number(res.list.current_page) + 1;
						let latest 		   = (this.props.commingRooms || []).concat(res.list.data || []);
						this.props.onLessonsComming(latest);
						res.total && res.total.length > 0 && this.props.onLessonsTotalComming(res.total);
					} else {
						this.$no_morelessons_comming = true;
					}
				});
			}
		} else {
			//已上课程
			if (this.$no_morelessons_done || this.$querying_done_lessons) return;
			if (more || this.$page_done == 1) {
				this.$querying_done_lessons = true;
				return net.getLessonListDone({ page: this.$page_done }).then(res => {
					this.$querying_done_lessons = false;
					if (res && res.list && res.list.data && res.list.data.length > 0) {
						this.$page_done = Number(res.list.current_page) + 1;
						let latest 		= (this.props.doneRooms || []).concat(res.list.data || []);
						this.props.onLessonsDone(latest);
						res.total && res.total.length > 0 && this.props.onLessonsTotalDone(res.total);
					} else {
						this.$no_morelessons_done = true;
					}
				});
			}
		}
	}

	handleScroll(event) {
		const clientHeight = event.target.clientHeight
		const scrollHeight = event.target.scrollHeight
		const scrollTop = event.target.scrollTop
		const isBottom = (clientHeight + scrollTop === scrollHeight)
		if (isBottom) {
			this.__query_courses(true);
		}
	}

	__select_page(page) {
		this.setState({
			comming_page_selected: (page == 1)
		});
		this.__reset()

		setTimeout(() => {
			this.__query_courses();
		}, 0);
	}

	render() {
		let _commingRooms = []
		let _doneRooms 	  = []

		return (
			<div className="page student-page" >
				<div className="inner">
					<div className="student-box">
						<div className="my-courses">
							<div className="nav-area">
								<div className="btn-exit" onClick={() => {
									this.props.onExitMyCourses()
								}}></div>
								<div className={this.state.comming_page_selected ? "switch-bar" : "switch-bar first-selected"} >
									<div className="switch-bar-left" onClick={() => { this.__select_page(1); }}>
										<span>要上课程</span>
									</div>
									<div className="switch-bar-right" onClick={() => { this.__select_page(2); }}>
										<span>已上课程</span>
									</div>
								</div>
								{this.props.totalDone && this.props.totalDone.length > 0 ? 
									<div className="course-according">
										<span className="label">课时消耗情况：</span>
										<span className="value">{this.state.comming_page_selected ? this.props.totalComming : this.props.totalDone}</span>
									</div> 
								: ""}

							</div>
							{(this.props.commingRooms || []).forEach((room, index) => {
								if (index == 0) {
									room.can_download = true;
									room.can_enter 	  = true;
								}
								_commingRooms.push(<div className="lesson-box-panel" key={"comming_room_" + index}>
									<div className="date-tip"><div className="date-icon"></div><span>{room.class_date} {room.week_day}</span></div>
									<div className="lesson-box">
										<div className="cover">
											<img src={room.avatar} alt="" />
										</div>
										<div className="info">
											<div className="name"><span>{room.name}</span></div>
											<div className="desc">课时简介：{room.content}</div>
											{/* <div className="index"><span>老师：{room.teacher_name}</span></div> */}
											<div className="tag"><div className="tag-kind">{room.label}</div><span className="tag-effect">{"学习力提升：" + (room.ability || "")}</span></div>
											<div className="date"><span>{room.between_time}</span></div>
										</div>
										<div className="btns-panel">
											{room.can_enter && room.class_state == 'normal' ? <button className="start-btn" onClick={() => {
												this.props.onStartRoom(room)
											}}></button> : ""}
											{!room.can_enter ? <button className = "waiting-btn"></button> : ""}
											{room.class_state == 'normal' ? "" : <div className="leave-flag"></div>}
										</div>
									</div>
								</div>);

							})}
							{this.state.comming_page_selected ? 
							
								<div onScroll = {(event) => {this.handleScroll(event)}} 
									className = {_commingRooms.length > 0 ? "courses-comming-area" : "courses-comming-area empty-area"} 
									id		  = "courses-comming-area">
									{_commingRooms.length > 0 ? 
										_commingRooms 
									: 
										<div className="empty">
											<div className="icon"></div>
											<span>接下来没有课程了~</span>
										</div>
									}
								</div> 
								: 
								<div className="courses-done-area" id="courses-done-area">
									{(this.props.doneRooms || []).forEach((room, index) => {
										_doneRooms.push(<div className="lesson-done-box-panel" key={"done_room_" + index}>
											<div className="box-panel-top">
												<span className="lesson-name">{room.name}</span>
												<span className="lesson-level">（{room.lesson_name}）</span>
											</div>
											<div className="box-panel-center">
												<span className="lesson-time">{room.class_date} {room.class_time}</span>
											</div>
											<div className="box-panel-bottom">
												<span className={room.class_state == 'normal' ? 'lesson-state' : "lesson-state abnormal"} >{room.class_state == 'normal' ? '正常结束' : (room.class_state == 'leave' ? "请假" : "未到课")}</span>
												{(room.button_hf && room.button_playback_pc) ? <div className="btn-view-record" onClick={() => {
													this.props.onRecordRoom(room)
												}}>回放
												{room.beta ? <div className="beta-icon"></div> : ""}
												</div> : ""}
												<div className="star-icon"></div>
												<span className="star-count">{room.star}</span>
											</div>
										</div>)
									})}
									<div className={_doneRooms.length > 0 ? "container" : "container empty-container"}>
										{_doneRooms.length > 0 ? 
											_doneRooms 
										: 
											<div className="empty">
												<div className="icon"></div>
												<span>已上的课程会在这里显示哦~</span>
											</div>
										}
									</div>
								</div>
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		commingRooms: state.main.commingRooms,
		doneRooms: state.main.doneRooms,
		totalComming: state.main.totalComming,
		totalDone: state.main.totalDone,
	}
}

const mapDispatchToProps = dispatch => ({
	onExitMyCourses: () => dispatch(onExitMyCourses()),
	onLessonsComming: (rooms) => dispatch(onLessonsComming(rooms)),
	onLessonsDone: (rooms) => dispatch(onLessonsDone(rooms)),
	onLessonsTotalComming: (rooms) => dispatch(onLessonsTotalComming(rooms)),
	onLessonsTotalDone: (rooms) => dispatch(onLessonsTotalDone(rooms)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyCourse)