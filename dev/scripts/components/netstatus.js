import React from 'react'
import PropTypes from 'prop-types'
require("../../less/netstatus.less")

class NetStatus extends React.Component {
	render() {
		return (
			<div className={`netstatus s-${this.props.status}`}>
				<div className="dot"></div>
				<div className="desc"></div>
			</div>
		)
	}
}


NetStatus.propTypes = {
	status: PropTypes.number.isRequired
}

export default NetStatus