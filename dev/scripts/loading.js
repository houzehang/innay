class Loading {
	constructor() {
		this.$inited = false
	}

	__init() {
		this.$dom = $(`<div class="loading-mask"><div class="loading-text"></div></div>`)
		this.$dom.hide().appendTo("body")
		this.$inited = true
	}

	show(message = "") {
		if (!this.$inited) {
			this.__init()
		}
		$(".loading-text",this.$dom).html(message)
		this.$dom.fadeIn()
	}

	hide() {
		this.$dom.fadeOut()
	}
}

module.exports = new Loading