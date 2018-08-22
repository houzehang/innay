const DEBUG 	= require("../../env").DEBUG
const Eventer 	= require("./eventer")

class NetDetector extends Eventer {
	constructor() {
		super()
		this.$size 			= 439924
		this.$net_status 	= [ 300, 600, 1000, 2000 ]
		this.$times 		= 2
		this.$status        = 1
		if (DEBUG) {
			this.$file = "https://lessons.runsnailrun.com/netdetector.jpg"
		} else {
			this.$file = "https://lessons.mw019.com/netdetector.jpg"
		}
	}

	__once(complete) {
		let start_time 	= new Date().getTime(), 
			level 		= this.$net_status.length
		this.__detect(()=>{
			let now 	= new Date().getTime()
			let delay 	= now - start_time
			for(let i=0,len=this.$net_status.length;i<len;i++) {
				let item = this.$net_status[i]
				if (delay <= item) {
					level = i + 1
					break
				}
			}
			this.$status = level
			complete(level)
		}, ()=>{
			this.$status = 0
			complete(false)
		})
	}

	__detect(complete, error) {
		$.ajax(`${this.$file}?t=${new Date().getTime()}`, {
			method : "GET",
			success: complete,
			error  : error
		})
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

	check() {
		let current = this.$times, T;
		clearTimeout(this.$timer);
		(T = ()=>{
			this.__once((result)=>{
				if (!result) {
					this.trigger("NET:ERROR")
				} else {
					this.trigger("NET:STATUS", result)
					if (--current > 0) {
						this.$timer = setTimeout(T, 1000)
					}
				}
			})
		})()
	}

	unload() {
		clearTimeout(this.$timer)
	}
}

module.exports = NetDetector