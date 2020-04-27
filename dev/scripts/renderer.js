/**
 * 样式文件
 */
import '../less/anim.less'
import '../less/common.less'
import '../less/version.less'

import {remote, ipcRenderer} from 'electron';
import Const from '../const'
import bridge from '../../core/MessageBridge'
import DomainMgr from '../../core/DomainMgr'
const autoUpdater 	= remote.require('electron-updater').autoUpdater
const logger 		= remote.require('electron-log')
import {TEST, DEBUG } from '../../env';
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
		// default domains from location
		DomainMgr.domains = (TEST || DEBUG) ? Const.DOMAIN_LIST_DEFAULT_TEST : Const.DOMAIN_LIST_DEFAULT
		this.__setState(this.state)
		// update domains json config from oss
		DomainMgr.pull(()=>{
			this.__start_updater()
		})
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

		G("restart-btn").onclick = function() {
			console.log("reclick")
			remote.app.relaunch()
			remote.app.exit(0)
		}
	}

	__do_update_bundle(result, url) {
		logger.error("开始下载框架包", result, url)
		bridge.call({
			method: "startDownloadTask", 
			args: {
				pack		: "classroom-ui", 
				url			: `${url}/${result.url}`, 
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
					logger.error("下载工程框架出错", error)
				},
				[`${identity}/success`] : (data)=>{
					this.__setStatus(Const.UPDATE.DOWNLOADED_UI);
					this.__on_complete()
				}
			}
		}).catch(err=>{
			logger.error("下载工程框架出错", err)
		})
	}

	__update_bundle(retry) {
		let	url = DomainMgr.availibleDomain('bundles', retry)
		if (!url) {
			logger.log('[debug-domain]','没有可用的bundles域名',retry)
			return false;
		}
		logger.log('[debug-domain]','使用static域名',url)
		logger.error("检测基础框架是否有更新", url)
		bridge.call({
			method: "isUpdateAvailable",
			args: {
				url : `${url}/app.json`,
				pack: "classroom-ui"
			}
		}).then(result=>{
			logger.error("检测基础框架是否有更新成功", result)
			if (result.available) {
				this.__setStatus(Const.UPDATE.DOWNLOADING_UI);
				this.__do_update_bundle(result.server, url)
			} else {
				this.__setStatus(Const.UPDATE.LASTEST);
				this.__on_complete()
			}
		}).catch(error=>{
			logger.error("检测基础框架是否有更新出错", error)
			if (!this.__update_bundle(true)) {
				this.__setState({
					progress: null,
					error	: error
				})
			} 
		})
		return true
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
			logger.log('[debug-domain]','热更新检测完成，无需更新')
			this.__update_bundle()
		})
		autoUpdater.on('error', (err) => {
			logger.error("基础框架更新出错",err)
			logger.log("检测是否有备用热更域名")
			let nextAvailibleDomain = DomainMgr.availibleDomain('software', true)
			if (nextAvailibleDomain) {
				logger.log('[debug-domain]','正在尝试下一个热更新域名:',nextAvailibleDomain)
				autoUpdater.setFeedURL(nextAvailibleDomain)
				autoUpdater.checkForUpdates();
			} else {
				setTimeout(() => {
					this.__update_bundle()
				}, 2000)
			}
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
			args	: {pack: "classroom-ui", data: {}}
		}).catch(err=>{
			logger.error("开启主框架窗口出错", err)
			this.__setState({
				progress: null,
				error	: err.message
			})
		})
	}

	__render() {
		if (this.state.progress) {
			G("progress").style.display = "flex"
			G("percent").innerText 		= `${this.state.progress.percent>>0}%`
			G("bar").style.width 		= `${this.state.progress.percent}%`
		} else {
			G("progress").style.display = "none"
		}
		if (this.state.error) {
			G("tips").innerText = `当前版本: ${this.state.version}, 更新出错：${this.state.error}`
			G("restart-btn").style.display = "flex"
		} else {
			G("tips").innerText = `当前版本: ${this.state.version}${this.state.message ? ',' : ''} ${this.state.message}`
			G("restart-btn").style.display = "none"
		}
	}
}

new Renderer()