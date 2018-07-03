import React from 'react'
import PropTypes from 'prop-types'

class Handsup extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {
		return (
			<div className="handsup-layer">
				
			</div>
		)
	}
}

Handsup.propTypes = {
	users  : PropTypes.arrayOf(PropTypes.shape({
		avatar	: PropTypes.string.isRequired,
		nickname: PropTypes.string.isRequired,
		rank	: PropTypes.number
	})),
	onClickClose: PropTypes.func.isRequired
}

export default Handsup