import React from 'react'
import { connect } from 'react-redux'
import * as types from '../constants/ActionTypes'

import { 
    onShowGlobalMsg
} from '../actions'
class GlobalMsg extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
	}

	render() {
		return (
			this.props.globalMsg ?  
			<div className="global-msg-pannel">
				{"【系统提示】"+this.props.globalMsg}
			</div>
			:
			""
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		globalMsg : state.main.globalMsg
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onShowGlobalMsg: (content) => {
			dispatch(onShowGlobalMsg(content))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GlobalMsg)