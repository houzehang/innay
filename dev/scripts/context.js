import storage from './Storage'
import {ipcRenderer,remote} from "electron"
import path from "path"
import fs from "fs"
const LogDog 		 = remote.require('pandora-nodejs-sdk')
const logger 		 = remote.require('electron-log')
const USER_DATA_ROOT = remote.app.getPath("userData")
import Const from '../const'
class Context {

	get agoraAppId(){
		let env_conf = window.ENV_CONF || {}
		if(env_conf.TEST||env_conf.DEBUG){
			return "8255568bc0ab4117bce79c6ca65e1c99"
		} 
		return "d75fe75ab0404a90b2ed7e5bab216f80"
	}

	get agoraChannelKey(){
		let env_conf = window.ENV_CONF || {}
		if(env_conf.TEST||env_conf.DEBUG){
			return "83dfd49b300c4c1d8af4a5ff68c12214"
		} 
		return "7c9b6ed9bba54dc59471cfa09e9f23ea"
	}

	get dmg() {
		return this.$dmg
	}

	set dmg(dmg) {
		this.$dmg = dmg
	}

	get user() {
		return this.$user || {}
	}

	set user(user) {
		this.$user = user
	}

	get loading() {
		return this.$loading
	}

	set loading(loading) {
		this.$loading = loading
	}

	get detector() {
		return this.$detector
	}

	set detector(detector) {
		this.$detector = detector
	}

	get course() {
		return this.$course
	}

	set course(course) {
		this.$course = course
	}

	get room() {
		return this.$room
	}

	set room(room) {
		this.$room = room
	}

	get session() {
		return this.$session
	}

	set session(session) {
		this.$session = session
	}

	get storage() {
		if (!this.$storage) {
			this.$storage = storage
		}
		return this.$storage
	}

	set storage(storage) {
		this.$storage = storage
	}

	set usingBackupUrl(state) {
		this.$using_backup_url = state
	}

	get usingBackupUrl() {
		return this.$using_backup_url
	}

	get video_device_id() {
		return this.$video_device_id
	}

	set video_device_id(video_device_id) {
		this.$video_device_id = video_device_id
	}

	get audio_device_id() {
		return this.$audio_device_id
	}

	set audio_device_id(audio_device_id) {
		this.$audio_device_id = audio_device_id
	}

	get domains(){
		return this.$domains || Const.DOMAIN_LIST_DEFAULT
	}
	
	set domains(domains){
		this.$domains = domains 
	}

	set distPath(distPath){
		this.$dist_path = distPath
	}

	get distPath(){
		return this.$dist_path;
	}

	addDownloaded(url, file) {
		if (!this.$local_files) {
			this.$local_files = {}
		}
		this.$local_files[url] = file
	}

	getDownloaded(url) {
		if (!this.$local_files) {
			return 
		}
		return this.$local_files[url]
	}

	send_to_main(params) {
		console.log("send_to_main",ipcRenderer,params)
		ipcRenderer.send(...params);
	}

	restoreOldDevice() {
		// 设置兼容旧版本的old device数据
		let oldDevice = localStorage.getItem("IS_OLD_DEVICE")
		if (oldDevice) {
			console.log("copy low version old device")
			// localStorage.removeItem("IS_OLD_DEVICE")
		}
	}

	/**
	 * 设置为低端设备
	 */
	set oldDevice(old){
		DB.store("IS_OLD_DEVICE",old & 1)
	}

	set joinClassEnabled(enabled){
		this.$join_class_enabled = !!enabled;
	}

	get joinClassEnabled(){
		if (this.$join_class_enabled === undefined) {
			return true;
		}
		return this.$join_class_enabled;
	}

	get(dom, parent=document) {
		if (typeof dom == "object") {
			return dom
		}
		if (parent && typeof parent == "string") {
			parent = this.get(parent)
		}
		if (/^\./.test(dom)) {
			return parent.getElementsByClassName(dom.replace(/^\./,""))
		} else if (/^#/.test(dom)) {
			dom = dom.replace(/^#/,"")
		}
		return document.getElementById(dom)
	}

	offset(dom) {
		dom = this.get(dom)
        var top = 0, left = 0;
        do {
			top  += dom.offsetTop
			left += dom.offsetLeft
            dom = dom.parentNode
	   } while (dom.parentNode)
	   return {top, left}
	}
	get rkey() {
		return "TNyv1khX-,5IOzgBWgpu"
	}

	empty(dom) {
		if (typeof dom == "string") {
			dom = this.get(dom)
		}
		if (dom.length) {
			for(let i=0,len=dom.length;i<len;i++) {
				dom[i].innerHTML = ""
			}
		} else if (dom) {
			dom.innerHTML = ""
		}
	}

	get lkey() {
		return "Yu6oGz2USJb9RMgG84KalD,19Dnr5YuF0mV1QoEgBxX2"
	}

	__upload_log(file, repo, parser) {
		return new Promise((resolve, reject)=>{
			if (!fs.existsSync(file)) {
				reject()
				return
			}
			let content = fs.readFileSync(file, "utf8")
			if (content) {
				let lkey = this.lkey.split(","),
					rkey = this.rkey.split(",")
				content = content.split("\n").map(parser)
				LogDog.send(
					new LogDog.Auth(
						lkey[0]+'DxyKE2vUz'+rkey[0], 
						lkey[1]+'PVhUEGplM'+rkey[1]
					),
					repo,
					content
				).then(()=>{
					fs.writeFileSync(file, "", "utf8")
				}).then(resolve, reject)
			} else {
				reject()
			}
		})
	}

	upload_system_logs(){
		this.__upload_log(path.join(USER_DATA_ROOT, "system.log"), "mingxi_pc_system", (line)=>{
			let parsed = line.split(" ")
			let time   = [parsed.shift(),parsed.shift()].join(" ")
			return {
				time, 
				content	: parsed.join(" "), 
				user: this.user.id,
				name: this.user.child_name
			}
		}).then(()=>{
			logger.log('update system logs success')
		}).catch((error)=>{
			logger.error('update system logs failed ', error)
		})
	}

	upload_agora_logs(){
		this.__upload_log(path.join(USER_DATA_ROOT, "agora.log"),  "mingxi_pc_agora", (line)=>{
			let parsed = line.split(";")
			let time   = parsed.shift()
			return {
				time, 
				content: parsed.join(";"), 
				user: this.user.id,
				name: this.user.child_name
			}
		}).then(()=>{
			logger.log('update agora logs success')
		}).catch((error)=>{
			logger.error('update agora logs failed ', error)
		})
	}

	log(...args){
		logger.log(...args)
		let env_conf = window.ENV_CONF || {}
		if(env_conf.DEBUG || env_conf.TC_DEBUG || env_conf.TEST){
			console.log(...args)
		}
	}

	error(...args){
		logger.error(...args)
		let env_conf = window.ENV_CONF || {}
		if(env_conf.DEBUG || env_conf.TC_DEBUG || env_conf.TEST){
			console.error(...args)
		}
	}

	filterVideoDevice(video_devices) {
		video_devices = video_devices.filter((cur={})=>{
			let found = false
			Const.ILLEGAL_AUDIOS.map((lim)=>{
				if (new RegExp(lim.toLowerCase()).test((cur.devicename || '').toLowerCase())) {
					found = true
				}
			})
			return !found
		})
		return video_devices
	}

	set sentryBrowser(sentry){
		this.$sentry_browser = sentry
	}

	get sentryBrowser(){
		return this.$sentry_browser
	}

	mark(code, info, extra={}, titleExtra=''){
		if (info) {
			this.$sentry_browser.captureEventWithCode(code, info, extra, titleExtra)
		} else {
			this.$sentry_browser.captureMessageWithCode(code, titleExtra)
		}
	}

	markClick(event){
		try {
			let __getClickData = (targetObj)=>{
				for (const key in targetObj) {
					if (/reactEventHandlers/.test(key)) {
						return targetObj[key]
					}
				}
				return {}
			}
	
	
			let __getElementDesc = (element)=>{
				if (element.id !== ""){
					return '@id='+element.id;
				}
				if (element.getAttribute("class") !== null){ 
					return '@class='+element.getAttribute("class");
				}
			}
	
	
			let __getTargetTruly = (target)=>{
				if (!target) return null;
				let targetObj 	= {...target};
				let clickData 	= __getClickData(targetObj)
				let onClick 	= clickData.onClick;
				if (onClick) {
					return [target,onClick.toString()]
				}
				return __getTargetTruly(target.parentNode)
			}
	
			let targetReal = __getTargetTruly(event.target)
			if (targetReal) {
				let elementDesc = __getElementDesc(targetReal[0])
				let eventDetail = targetReal[1]
				if (elementDesc && !/full-h/.test(elementDesc)) {
					this.mark(20006, {
						eventDetail
					}, {}, elementDesc)
				}
			}
		} catch (error) {
			console.error('mark click error',error.message)
		}
	}

	showReport(){
		this.$sentry_browser.showReport()
	}
}

export default new Context