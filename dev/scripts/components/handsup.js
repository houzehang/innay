import React from 'react'
import PropTypes from 'prop-types'
require("../../less/handsup.less")

class Handsup extends React.Component {
	constructor(props) {
		super(props)
		this.state = { show:false }
	}

	componentDidMount() {
		setTimeout(()=>{
			this.setState({show:true})
		},100)
	}

	render() {
		return (
			<div className={this.state.show?"handsup-layer show":"handsup-layer"}>
				<div className="handsup-title">举手顺序</div>
				<div className="handsup-users">
				{this.props.users.map(user=>(
					<div className="handsup-user" key={user.id}>
						<div className="avatar" style={{
							backgroundImage: `url(${user.child_avatar})`
						}}></div>
						<div className="nickname">{user.child_name}</div>
						{user.rank?<div className="rank">{user.rank}</div>:""}
					</div>
				))}
				</div>
				<div className="handsup-close" onClick={()=>{
					this.props.onClickClose()
				}}>关闭举手</div>
			</div>
		)
	}
}

Handsup.propTypes = {
	users  : PropTypes.arrayOf(PropTypes.shape({
		avatarurl	: PropTypes.string.isRequired,
		child_name 	: PropTypes.string.isRequired,
		rank		: PropTypes.number
	})),
	onClickClose: PropTypes.func.isRequired
}

export default Handsup