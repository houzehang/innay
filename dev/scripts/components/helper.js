import React from 'react'
import PropTypes from 'prop-types'
import "../../less/helper.less"
import net from "../network"

class Helper extends React.Component {
	constructor(props) {
		super(props)
		this.state = { info: {} }
	}

	componentDidMount() {
		net.getContactInfo().then(data=>{
			this.setState({info: data.contact})
		})
	}

	componentWillUnmount() {
	}

	render() {
		return (
			<div className="helper-block">
				<div className="code">
					<img src={this.state.info.contact_qrcode}/>
				</div>
				<div className="name">{this.state.info.nickname}</div>
				<div className="tips">遇到问题请扫码练习助教老师</div>
			</div>
		)
	}
}

export default Helper