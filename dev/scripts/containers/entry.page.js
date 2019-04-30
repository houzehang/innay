import React from 'react';
import {
	HashRouter as Router,
	Route
} from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './login.page'
import MainStudentPage from './main.student.page'
import Dialog from './dialog'
import { alert, confirm, onNetStatusBad, onNetStatusGood } from '../actions'
import NetDetector from "../netdetector"
import context from "../context"
import * as types from '../constants/ActionTypes'

class Entry extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		this.__start_detector()
	}

	componentWillUnmount() {
		this.$detector.unload()
	}

	__start_detector() {
		let detector = new NetDetector
		context.detector = detector
		context.detector.waring_threshold = 3;
	}
	
	render() {
		const { dialog, account } = this.props
		return <Router>
			<div className="full-h">
				<Route exact path="/" render={
					()=>{
						if (!account) {
							return <Login/>
						} else {
							return <MainStudentPage/>
						}
					}
				}></Route>
				{dialog.showing ? <Dialog data={dialog}/> : ""}
			</div>
		</Router>
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		account 	: state.login.account,
		dialog  	: state.dialog
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		confirm : (data) 	=> dispatch(confirm(data)),
		onNetStatusBad: () 	=> dispatch(onNetStatusBad()),
		onNetStatusGood: () => dispatch(onNetStatusGood())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Entry)