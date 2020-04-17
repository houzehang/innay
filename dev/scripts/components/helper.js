import React from 'react'
import PropTypes from 'prop-types'
import "../../less/helper.less"
import net from "../network"
import os from "os"
import electron from 'electron'
const shell = electron.shell
const URL_SUNLOGIN_MAC = 'https://mingxi-software.oss-cn-beijing.aliyuncs.com/sunlogin/SunloginClient9.8.dmg'
const URL_SUNLOGIN_WIN = 'https://mingxi-software.oss-cn-beijing.aliyuncs.com/sunlogin/SunloginClient_10.3.0.27372.exe'

class Helper extends React.Component {
	constructor(props) {
		super(props)
		this.state 	 = { info: {} }
		this.$darwin = new RegExp('darwin', 'i').test(os.type())
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
				<div className="tips">遇到问题请扫码联系助教老师</div>
				<div className="tips sunlogin" onClick={
					()=>{
						shell.openExternal(this.$darwin ? URL_SUNLOGIN_MAC : URL_SUNLOGIN_WIN)
					}
				}>☞下载向日葵远程辅助工具</div>
			</div>
		)
	}
}

export default Helper