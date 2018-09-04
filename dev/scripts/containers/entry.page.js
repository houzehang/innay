import React from 'react';
import {
	HashRouter as Router,
	Route, Redirect,
	Link
} from 'react-router-dom'
import createHistory from "history/createBrowserHistory"
import { connect } from 'react-redux'
import Login from './login.page'
import Main from './main.page'
import Dialog from './dialog'
import NetStatus from '../components/netstatus'
import { alert, confirm, onNetStatusBad, onNetStatusGood } from '../actions'
const history = createHistory()
const NetDetector = require("../netdetector")
const context = require("../context")

class Entry extends React.Component {
	constructor(props) {
		super(props)
		this.state = {netstatus: 1, netwarning: false}
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
		detector.on("NET:STATUS", (level)=>{
			console.log("net status", level)
			this.setState({ netstatus: level, netwarning: detector.warning })
		})
		detector.on("NET_STATUS_BAD", ()=>{
			if (!this.$in_status_bad) {
				this.props.confirm({
					content: "系统检测到你的网络不太好，为保证您的上课体验，建议您开启弱网络优化？",
					sure_txt: "开启",
					cancel_txt: "不开启",
					sure: ()=>{
						this.$in_status_bad = true
						this.props.onNetStatusBad()
					}
				})
			}
		})
		detector.on("NET_STATUS_GOOD", ()=>{
			if (this.$in_status_bad) {
				this.props.confirm({
					content: "系统检测到你的网络恢复了，建议你关闭弱网络优化~",
					sure: ()=>{
						this.$in_status_bad = false
						this.props.onNetStatusGood()
					}
				})
			}
		})
		setTimeout(()=>{
			detector.check()
		},2000)
	}
	
	render() {
		const { dialog, account } = this.props
		let DialogComponent = ()=>{
			if (!dialog.hide) {
				if (dialog.alert) {
					const configure = dialog.alert
					return <Dialog configure={configure} type="alert" open={!dialog.hide}/>
				} else if (dialog.confirm) {
					const configure = dialog.confirm
					return <Dialog configure={configure} type="confirm" open={!dialog.hide}/>
				}
			}
			return ""
		}
		return <Router>
			<div className="full-h">
				<Route exact path="/" render={
					()=>{
						if (!account) {
							return <Login/>
						} else {
							return <Main/>
						}
					}
				}></Route>
				<DialogComponent/>
				<NetStatus status={this.state.netstatus} warning={this.state.netwarning}/>
			</div>
		</Router>
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		account : state.login.account,
		dialog  : state.dialog
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