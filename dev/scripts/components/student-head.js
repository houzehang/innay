import React from 'react'
import PropTypes from 'prop-types'
const $ = require("jquery")

class StudentHead extends React.Component {
	constructor(props) {
		super(props)
		this.state = { hover: false }
	}
	__bind() {
		if (this.props.user && !this.$binded) {
			this.$binded = true
			$(".student-area").on("mouseover", `#student_${this.props.user.id} .fixed`, (event)=>{
				if (this.props.user.dancing) {
					event.stopPropagation()
					event.preventDefault()
				}
			})
		}
	}
	render() {
		this.__bind()
		let hasUser = this.props.user
		let child_name;
		if (this.props.user) {
			child_name = this.props.user.child_name;
		}
		if (!child_name && this.props.user.stream) {
			child_name = this.props.user.stream.$data.child_name;
		}
		return hasUser ? (
					<div className={(this.state.hover?"student hover":"student")+(this.props.user.online?"":" nothing")} key={this.props.user.id+""} onMouseOver={()=>{
						if (this.props.isTeacher) {
							this.setState({ hover:true })
						}
					}} onMouseOut={(event)=>{
						if (this.props.isTeacher) {
							this.setState({ hover:false })
						}
					}}>
						<div className="avatar-head" id={"student_"+this.props.user.id} style={this.props.user.online ? {
							backgroundImage : `url(${this.props.user.avatarurl})`
						} : null}>
						</div>
						<div className="avatar-info">
							{this.props.user.progress_rank ? <div className="avatar-rank">{this.props.user.progress_rank}</div>:""}
							{this.props.user.percent ? <div className={this.props.user.percent==100?"avatar-bar full":"avatar-bar"} style={{"width":this.props.user.percent+"%"}}></div>:"" }
							<div className="avatar-name">{child_name}</div>
							<div className="avatar-stars">{this.props.user.gift_total || 0}</div>
						</div>
						<div className="summary">
							<div className="summary-inner">
								<div className={this.props.isTeacher?"btns":"btns student"}>
									{this.props.isTeacher && this.props.user.stream?(
										<button className={this.props.user.dancing?"view-btn on":"view-btn"} onClick={()=>{
											this.props.onClickView(this.props.user)
										}}></button>
									):""}
									{this.props.isTeacher && this.props.user.online?(
										<button className="gift-btn" onClick={()=>{
											if (this.props.user.online) {
												this.props.onClickGift(this.props.user)
											}
										}}></button>
									):""}
									{this.props.isTeacher && this.props.user.online?(
										<button className={this.props.user.unmuted?"speak-btn on":"speak-btn"} onClick={()=>{
											this.props.onClickSpeak(this.props.user)
										}}></button>
									):""}
									<button className="warn-btn" onClick={()=>{
									}}></button>
								</div>
							</div>
						</div>
					</div>
				) : 
				<div className="student nothing"></div>
	}
}

StudentHead.propTypes = {
	user  : PropTypes.shape({
		id 	     	: PropTypes.number,
		child_name 	: PropTypes.string,
		avatarurl	: PropTypes.string.isRequired,
		handsup 	: PropTypes.number.isRequired,
		speak  		: PropTypes.number.isRequired,
		gifts  		: PropTypes.arrayOf(PropTypes.shape({
			id   	: PropTypes.number,
			total	: PropTypes.number
		}))
	}),
	tencent 	 : PropTypes.bool,
	isTeacher 	 : PropTypes.bool,
	speak 		 : PropTypes.bool,
	onClickSpeak : PropTypes.func,
	onClickGift  : PropTypes.func,
	onClickView  : PropTypes.func
}

export default StudentHead