const CHANNEL = "MESSAGE_RPC_BRIDGE"
class MessageBridge {
	constructor() {
		this.$uuid 			= 0
		this.$handlers 		= {}
	}

	__bind() {
		this.$receiver.on(CHANNEL, (_, message)=>{
			this.__received(message)
		})
	}

	__send(data) {
		this.$sender.send(CHANNEL, data)
	}

	__received(message) {
		if ("error" in message || "result" in message) {
			const id = message.id
			const handler = this.$handlers[id]
			if (handler) {
				try {
					handler(message.error, message.result)
				} catch(e) {
					console.error("call message handler error", e)
				}
				delete this.$handlers[id]
			} else {
				console.error("no callback handler for message", id)
			}
		} else if("method" in message){
			let method = this.$context[message.method],
				id     = message.id
			if (!method) {
				this.__send({id, error: 'no method'})
				return;
			}
			Promise.resolve(method(message.args)).then((result=null)=>{
				if (message.id) {
					this.__send({
						id, result
					})
				}
			}).catch((e)=>{
				this.__send({id, error: e.message})
				throw e;
			})
		}
	}

	init(sender, receiver, context) {
		this.$context   	= context
		this.$sender 		= sender
		this.$receiver 		= receiver
		this.__bind()
	}

	call(method, args) {
		if (!this.$sender || !this.$receiver) {
			console.error("you must init first.")
			return
		}
		return new Promise((resolve, reject)=>{
			let id = ++this.$uuid
			let handler = (err, result)=>{
				if (err) {
					reject(err)
				} else {
					resolve(result)
				}
			}
			this.$handlers[id] = handler
			this.__send({
				id, method, args
			})
		})
	}
}

export default new MessageBridge