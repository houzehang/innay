const DEBUG 	= require("../../env").DEBUG
const Eventer 	= require("./eventer")

class NetDetector extends Eventer {
	constructor() {
		super()
		this.$size 			= 439924
		this.$net_status 	= [ 200, 500, 1000, 2000 ]
		this.$times 		= 1
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
			complete(level)
		}, ()=>{
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
}

module.exports = NetDetector