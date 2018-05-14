class Loading {
	constructor() {
		this.$dom = $(`<div class="loading-mask"><div class="loading-text"></div></div>`)
		this.$dom.hide().appendTo("body")
	}

	show(message = "") {
		$(".loading-text",this.$dom).html(message)
		this.$dom.fadeIn()
	}

	hide() {
		this.$dom.fadeOut()
	}
}

module.exports = Loading