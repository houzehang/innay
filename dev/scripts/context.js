const Storage 	= require("./Storage")

class Context {
	get dmg() {
		return this.$dmg
	}

	set dmg(dmg) {
		this.$dmg = dmg
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
			this.$storage = new Storage("DYM")
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
}

module.exports = new Context