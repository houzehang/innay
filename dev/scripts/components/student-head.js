import React from 'react'
import PropTypes from 'prop-types'

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
		if (this.props.tencent) {
			hasUser = this.props.user.stream
		}
		let gifts = hasUser ? this.props.user.gifts.map((item)=>(
			<div className={"item gift-"+item.id} key={item.id}>
				<div className="icon"></div>
				<div className="num">{item.total}</div>
			</div>
		)) : ""
		return hasUser ? (
					<div className={this.state.hover?"student hover":"student"} key={this.props.user.id+""} onMouseOver={(event)=>{
						this.setState({ hover:true })
					}} onMouseOut={(event)=>{
						this.setState({ hover:false })
					}}>
						<div className="avatar-head" id={"student_"+this.props.user.id} style={{
							backgroundImage : `url(${this.props.user.avatarurl})`
						}}>
							{this.props.tencent?(
								<div id={"player_"+this.props.user.id}>
									<video id={"video"+this.props.user.id} autoPlay={true} playsInline={true}/>
								</div>
							):""}
						</div>
						<div className="avatar-info">{this.props.user.child_name}</div>
						{this.props.handsup.opened ? <div className="avatar-handsup">{this.props.handsup.rank||""}</div>:""}
						<div className="avatar-details">
							<div className="summary">
								<div className="summary-inner">
									<div className="items">
										<div className="item handsup">
											<div className="icon"></div>
											<div className="num">{this.props.user.handsup}</div>
										</div>
										<div className="item speak">
											<div className="icon"></div>
											<div className="num">{this.props.user.speak}</div>
										</div>
										{gifts}
									</div>
									<div className={this.props.isTeacher?"btns":"btns student"}>
										{this.props.isTeacher?(
											<button className={this.props.user.unmuted?"speak-btn on":"speak-btn"} onClick={()=>{
												this.props.onClickSpeak(this.props.user)
											}}></button>
										):""}
										<button className="gift-btn" onClick={()=>{
											this.props.onClickGift(this.props.user)
										}}></button>
										{this.props.isTeacher?(
											<button className={this.props.user.dancing?"view-btn on":"view-btn"} onClick={()=>{
												this.props.onClickView(this.props.user)
											}}></button>
										):""}
									</div>
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
		child_name 	: PropTypes.string.isRequired,
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
	handsup		 : PropTypes.object.isRequired,
	speak 		 : PropTypes.bool,
	onClickSpeak : PropTypes.func,
	onClickGift  : PropTypes.func,
	onClickView  : PropTypes.func
}

export default StudentHead