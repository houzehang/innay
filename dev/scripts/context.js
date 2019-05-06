import storage from './Storage'
import {ipcRenderer} from "electron"
import DB from '../../core/DB'

class Context {
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

	/**
	 * 是否为低端设备
	 */
	isOldDevice() {
		if (this.$is_old_device !== undefined) {
			return this.$is_old_device
		}
		let oldDevice = DB.get("IS_OLD_DEVICE")
		this.$is_old_device = oldDevice
		return oldDevice
	}

	/**
	 * 设置为低端设备
	 */
	setOldDevice() {
		DB.set("IS_OLD_DEVICE", 1)
		this.$is_old_device = true
	}

	set join_class_enabled(enabled){
		this.$join_class_enabled = !!enabled;
	}

	get join_class_enabled(){
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
}

export default new Context