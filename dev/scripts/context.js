const storage 				= require("./Storage")
const {ipcRenderer,remote} 	= $require("electron");
const path 					= $require("path")
const fs 					= $require("fs")
const LogDog 		 		= remote.require('pandora-nodejs-sdk')
const USER_DATA_ROOT 		= remote.app.getPath("userData")

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
	 * 设置为低端设备
	 */
	get oldDevice(){
		return this.$old_device
	}

	set oldDevice(old){
		this.$old_device = !!old
		localStorage.setItem("IS_OLD_DEVICE", old ? 1 : 0)
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

	get rkey() {
		return "TNyv1khX-,5IOzgBWgpu"
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
			console.log('update agora logs success')
		}).catch((error)=>{
			console.error('update agora logs failed ', error)
		})
	}
}

module.exports = new Context