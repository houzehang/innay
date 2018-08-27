const storage 		= require("./Storage")
const {ipcRenderer} = $require("electron");
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

	render(id, data) {
		let target   = $("#"+id)
		let template = $.templates("#"+id);
		let html	 = $(template.render(data));
		let dom 	 = $(`[tmplid=tmpl_${id}]`)
		html.attr("tmplid", "tmpl_"+id)
		if (dom.length > 0) {
			dom.replaceWith(html)
		} else {
			target.after(html);
		}
	}

	send_to_main(params) {
		console.log("send_to_main",ipcRenderer,params)
		ipcRenderer.send(...params);
	}
}

module.exports = new Context