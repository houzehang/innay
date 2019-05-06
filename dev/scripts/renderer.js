/**
 * 样式文件
 */
import '../less/anim.less'
import '../less/common.less'
import '../less/version.less'

import {remote, ipcRenderer} from 'electron';
import Const from '../const'
import bridge from '../../core/MessageBridge'
import { DEBUG, TEST } from '../../env'
const autoUpdater 	= remote.require('electron-updater').autoUpdater
const logger 		= remote.require('electron-log')
const G = (id) => {
	return document.getElementById(id)
}
class Renderer {
	constructor() {
		this.__bind()
		this.state = {
			version: remote.app.getVersion(),
			message: "",
			progress : null
		}
		this.$base_url = "http://localhost:8080"
		// if (DEBUG) {
		// 	base_url = "http://localhost:8080"
		// } else if (TEST) {
		// 	base_url = "http://bundles.runsnailrun.com"
		// } else {
		// 	base_url = "https://bundles.mw019.com"
		// }
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
			message = `更新出错，错误信息:${data}`
		} else if (status == Const.UPDATE.DOWNLOADING) {
			message = "正在下载新版本..."
		} else if (status == Const.UPDATE.DOWNLOADED) {
			message = "下载完成，请等待安装..."
		} else if (status == Const.UPDATE.DOWNLOADING_UI) {
			message = "正在下载基础包..."
		} else if (status == Const.UPDATE.DOWNLOADED_UI) {
			message = "下载完成，请等待解压..."
		} else {
			message = "正在检查版本更新..."
		}
		this.__setState({message, progress: data})
	}

	__bind() {
		G("closeBtn").onclick = function() {
			var window = remote.getCurrentWindow();
			window.close();
		}
	}

	__do_update_bundle(result) {
		bridge.call({
			method: "startDownloadTask", 
			args: {
				pack		: "classroom-ui", 
				url			: `${this.$base_url}/${result.url}`, 
				md5			: result.md5,
				version		: result.version,
				autoUnzip	: true,
				checksum    : true 
			}
		}).then((result)=>{
			let identity = result.identity
			bridge.delegate = {
				[`${identity}/progress`] : ({ total, transferred, percent })=>{
					this.__setStatus(Const.UPDATE.DOWNLOADING, {percent: percent*100 >> 0});
				},
				[`${identity}/error`] : (error)=>{
					this.__setStatus(Const.UPDATE.ERROR, error.message);
				},
				[`${identity}/success`] : (data)=>{
					this.__setStatus(Const.UPDATE.DOWNLOADED_UI);
					this.__on_complete()
				}
			}
		}).catch(err=>{
			console.log("error happened",err)
			logger.error(err)
		})
	}

	__update_bundle() {
		bridge.call({
			method: "isUpdateAvailable",
			args: {
				url : `${this.$base_url}/app.json`,
				pack: "classroom-ui"
			}
		}).then(result=>{
			if (result.available) {
				this.__setStatus(Const.UPDATE.DOWNLOADING_UI);
				this.__do_update_bundle(result.server)
			} else {
				this.__setStatus(Const.UPDATE.LASTEST);
				this.__on_complete()
			}
		})
	}

	__start_updater() {
		autoUpdater.logger = logger;
		autoUpdater.logger.transports.file.level = 'info';
		autoUpdater.on('checking-for-update', () => {
			this.__setStatus(Const.UPDATE.CHECKING);
		})
		autoUpdater.on('update-available', () => {
			this.__setStatus(Const.UPDATE.AVAILABLE);
		})
		autoUpdater.on('update-not-available', () => {
			this.__update_bundle()
		})
		autoUpdater.on('error', (err) => {
			logger.error("update error",err)
			setTimeout(() => {
				this.__update_bundle()
			}, 2000)
		})
		autoUpdater.on('download-progress', (progress) => {
			this.__setStatus(Const.UPDATE.DOWNLOADING, progress);
		})
		autoUpdater.on('update-downloaded', () => {
			this.__setStatus(Const.UPDATE.DOWNLOADED);
			setTimeout(() => {
				autoUpdater.quitAndInstall();
			}, 2000)
		});
		autoUpdater.checkForUpdates();
	}

	__setState(state = {}) {
		for(let key in state) {
			this.state[key] = state[key]
		}
		this.__render()
	}

	__on_complete() {
		ipcRenderer.send("render.complete")
		bridge.call({
			method	: "openMainWindow",
			args	: "classroom-ui"
		}).catch(err=>{
			console.error(err)
		})
	}

	__render() {
		if (this.state.progress) {
			G("progress").style.display 	= "flex"
			G("percent").innerText 		= `${this.state.progress.percent>>0}%`
			G("bar").style.width 		= `${this.state.progress.percent}%`
		} else {
			G("progress").style.display 	= "none"
		}
		G("tips").innerText = `当前版本: ${this.state.version}, ${this.state.message}`
	}
}

new Renderer()