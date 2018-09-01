const DEBUG 	= require("../../env").DEBUG
const Eventer 	= require("./eventer")

class NetDetector extends Eventer {
	constructor() {
		super()
		// 0-4 个状态
		// 0 为网络断开，1-4 数字越高网络越差
		this.$status = 1
	}

	get good() {
		return this.$status == 1
	}

	get offline() {
		return this.$status == 0
	}

	get warning() {
		return this.$status == 0 || this.$status > 2
	}

	onSignalTime(delay) {
		delay -= 0
		if (!delay) return
		let status
		if (delay <= 100) {
			status = 1
		} else if (delay <= 300) {
			status = 2
		} else if (delay <= 1000) {
			status = 3
		} else {
			status = 4
		}
		this.__setStatus(status)
	}

	onAjaxTime(delay) {
		delay -= 0
		if (!delay) return
		let status
		if (delay <= 300) {
			status = 1
		} else if (delay <= 500) {
			status = 2
		} else if (delay <= 1200) {
			status = 3
		} else {
			status = 4
		}
		this.__setStatus(status)
	}

	__setStatus(value) {
		this.$status = value
		this.trigger("NET:STATUS", this.$status)
	}

	unload() {
	}
}

module.exports = NetDetector