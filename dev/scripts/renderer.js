/**
 * 样式文件
 */
import '../less/anim.less'
import '../less/common.less'
import '../less/version.less'

import {remote, ipcRenderer} from 'electron';
import Const from '../const'
const autoUpdater 	= remote.require('electron-updater').autoUpdater
const log 			= remote.require('electron-log')

class Renderer {
	constructor() {
		this.__bind()
		this.state = {
			version: remote.app.getVersion(),
			message: "正在检查版本更新...",
			progress : null
		}
		this.__setState()
		this.__start_updater()
	}

	__setStatus(status, data) {
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
		this.__setState({message, progress: data})
	}

	__bind() {
		this.__G("closeBtn").onclick = function() {
			var window = remote.getCurrentWindow();
			window.close();
		}
	}

	__start_updater() {
		autoUpdater.logger = log;
		autoUpdater.logger.transports.file.level = 'info';
		autoUpdater.on('checking-for-update', () => {
			this.__setStatus(Const.UPDATE.CHECKING);
		})
		autoUpdater.on('update-available', () => {
			this.__setStatus(Const.UPDATE.AVAILABLE);
		})
		autoUpdater.on('update-not-available', () => {
			this.__setStatus(Const.UPDATE.LASTEST);
			// createMainWindow()
			// updateWindow.close()
			this.__on_complete()
		})
		autoUpdater.on('error', (err) => {
			this.__setStatus(Const.UPDATE.ERROR);
			setTimeout(() => {
				createMainWindow()
				updateWindow.close()
			}, 2000)
		})
		autoUpdater.on('download-progress', (progress) => {
			this.__setStatus(Const.UPDATE.DOWNLOADING, progress);
		})
		autoUpdater.on('update-downloaded', () => {
			this.__setStatus(Const.UPDATE.DOWNLOADED);
			setTimeout(() => {
				autoUpdater.quitAndInstall();
			}, 3000)
		});
		autoUpdater.checkForUpdates();
	}
	
	__G(id) {
		return document.getElementById(id)
	}

	__setState(state = {}) {
		for(let key in state) {
			this.state[key] = state[key]
		}
		this.__render()
	}

	__on_complete() {
		ipcRenderer.send("render.complete")
	}

	__render() {
		if (this.state.progress) {
			this.__G("progress").style.display 	= "flex"
			this.__G("percent").innerText 		= `${this.state.progress.percent>>0}%`
			this.__G("bar").style.width 			= `${this.state.progress.percent}%`
		} else {
			this.__G("progress").style.display 	= "none"
		}
		this.__G("tips").innerText = `当前版本: ${this.state.version}, ${this.state.message}`
	}
}

new Renderer()