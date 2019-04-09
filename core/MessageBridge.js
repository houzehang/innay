export default class MessageBridge {
	constructor() {
		this.$uuid = 0	
	}

	get uuid() {
		return this.$uuid++
	}

	call(method, ...args) {
		return new Promise((resolve, reject)=>{
			let id = this.uuid
			
		})
	}
}