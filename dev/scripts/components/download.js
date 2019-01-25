import React from 'react'
import PropTypes from 'prop-types'
require("../../less/download.less")
const ENV = require("../../../env")
const {ipcRenderer} 	= $require('electron');
const context = require("../context")

class Download extends React.Component {
	constructor(props) {
		super(props)
		this.$webview = React.createRef()
	}

	componentDidMount() {
		context.detector.uncheck()
		this.$webview.current.addEventListener("dom-ready", ()=>{
			if (ENV.TC_DEBUG || ENV.TEST) {
				this.$webview.current.openDevTools(); 
			}
			this.$webview.current.send("userinfo", this.props.user)
		});
		this.$webview.current.addEventListener('ipc-message', (event) => {
			if (event.channel == "completed") {
				this.props.complete()
			} else if (event.channel == "loadsound") {
				ipcRenderer.send("DOWNLOAD",event.args[0])
			}
		})
		console.log("download mount");
	}

	componentWillUnmount() {
		context.detector.check()
		this.$webview.current.loadURL("_blank")
		console.log("download unmount");
	}

	render() {
		let prefix
		if (ENV.DEBUG) {
			prefix = "http://localhost:3000"
		} else if (ENV.TEST) {
			prefix = "http://kecheng1.runsnailrun.com"
			// prefix = "https://kecheng1.mx0a.com"
			// prefix = "https://admintest.youshiyuwen.cn"
		} else {
			prefix = "https://www.muwenyuwen.com"
		}
		return (
			<div>
				<webview ref={this.$webview} className="download-webview" nodeintegration='true' src={`${prefix}/app/downloader.html?lesson=${this.props.name}&t=${new Date().getTime()}`} partition="persist:kecheng"></webview>
			</div>
		)
	}
}

Download.propTypes = {
	name: PropTypes.string.isRequired,
	complete: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
}

export default Download