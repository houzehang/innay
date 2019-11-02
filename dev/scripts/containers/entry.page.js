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
const remote = $require('electron').remote;
import bridge from '../../../core/MessageBridge'
const logger = remote.require('electron-log')
class Entry extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		this.__start_detector()
		console.log("did mount...")
		// 清除本地缓存的课件资源
		bridge.call({
			method	: "clearCachedData",
			args 	: {packs: [ 
				{ name: "course-ui" },
				{ name: "preview-ui" }
			]}
		}).then(()=>{
			logger.log("APP启动清除课程资源缓存成功！")
		}).catch(error=>{
			logger.error("APP启动清除程资源缓存失败", error)
		})
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
			<div className="full-h" >
				<div className='slave' onDoubleClick={()=>{
					var window = remote.getCurrentWindow();
					window.webContents.openDevTools();
				}}></div>
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