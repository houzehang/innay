/**
 * 样式文件
 */
import '../less/anim.less'
import '../less/common.less'
import '../less/version.less'

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {ipcRenderer} from 'electron';
import Const from '../const'
import {remote} from 'electron';

const middleware = [ thunk ];
const store = createStore(
	rootReducer,
	applyMiddleware(...middleware)
)

class Version extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			version: remote.app.getVersion(),
			message: "",
			progress : null
		}
	}

	componentDidMount() {
		ipcRenderer.on('message', (event, status, data)=>{
			let message
			if (status == Const.UPDATE.LASTEST) {
				message = "已是最新版本。"
			} else if (status == Const.UPDATE.AVAILABLE) {
				message = "发现新版本。"
			} else if (status == Const.UPDATE.CHECKING) {
				message = "正在检查新版本..."
			} else if (status == Const.UPDATE.ERROR) {
				message = "更新出错！"
			} else if (status == Const.UPDATE.DOWNLOADING) {
				message = "正在下载新版本..."
			} else if (status == Const.UPDATE.DOWNLOADED) {
				message = "下载完成，请等待安装..."
			}
			this.setState({message, progress: data})
		})
	}

	render() {
		return <div className="page">
			<div className="close-btn" onClick={()=>{
				var window = remote.getCurrentWindow();
       			window.close();
			}}></div>
			<div className="logo"></div>
			<div className="tips">当前版本: {this.state.version}, {this.state.message}</div>
			{this.state.progress?(
				<div className="progress">
					<div className="bar">
						<div className="bar-i" style={{
							width: `${this.state.progress.percent}%`
						}}></div>
					</div>
					<div className="txt">{this.state.progress.percent>>0}%</div>
				</div>
			):""}
		</div>
	}
}
render(
	<Provider store={store}>
		<Version/>
	</Provider>, 
	document.getElementById("app")
)