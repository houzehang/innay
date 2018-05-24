import React from 'react'
import PropTypes from 'prop-types'

class StudentHead extends React.Component {
	render() {
		let gifts = this.props.user ? this.props.user.gifts.map((item)=>(
			<div className={"item gift-"+item.id} key={item.id}>
				<div className="icon"></div>
				<div className="num">{item.total}</div>
			</div>
		)) : ""
		return this.props.user ? (
					<div className="student">
						<div className="avatar-head" id={"student_"+this.props.user.id} style={{
							backgroundImage : `url(${this.props.user.avatarurl})`
						}}>
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
									<div className="btns">
										<button className={this.props.user.unmuted?"speak-btn on":"speak-btn"} onClick={()=>{
											this.props.onClickSpeak(this.props.user)
										}}></button>
										<button className="gift-btn" onClick={()=>{
											this.props.onClickGift(this.props.user)
										}}></button>
										<button className={this.props.user.dancing?"speak-btn on":"speak-btn"} onClick={()=>{
											this.props.onClickView(this.props.user)
										}}></button>
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
	handsup		 : PropTypes.object.isRequired,
	speak 		 : PropTypes.bool,
	onClickSpeak : PropTypes.func,
	onClickGift  : PropTypes.func,
	onClickView  : PropTypes.func
}

export default StudentHead