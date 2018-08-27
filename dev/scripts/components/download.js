import React from 'react'
import PropTypes from 'prop-types'
require("../../less/download.less")
const ENV = require("../../../env")
const {ipcRenderer} 	= $require('electron');

class Download extends React.Component {
	constructor(props) {
		super(props)
		this.$webview = React.createRef()
	}

	componentDidMount() {
		this.$webview.current.addEventListener("dom-ready", ()=>{
			if (ENV.TC_DEBUG) {
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
	}

	render() {
		let prefix
		if (ENV.DEBUG) {
			prefix = "http://localhost:3000"
		} else {
			prefix = "https://www.muwenyuwen.com"
		}
		return (
			<div>
				<webview ref={this.$webview} className="download-webview" nodeintegration='true' src={`${prefix}/app/downloader.html?lesson=${this.props.name}&t=${new Date().getTime()}`} partition="persist:kecheng-download"></webview>
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