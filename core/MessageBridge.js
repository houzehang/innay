import IN_RENDER from 'is-electron-renderer'
import electron  from 'electron'
const CHANNEL = "MESSAGE_RPC_BRIDGE"
class MessageBridge {
	constructor() {
		this.$uuid 			= 0
		this.$handlers 		= {}
		this.$sender_pool   = {}
		this.$delegate      = {}
		if (IN_RENDER) {
			this.$sender    = electron.ipcRenderer
			this.$receiver  = electron.ipcRenderer
		} else {
			this.$receiver  = electron.ipcMain
		}
		this.__bind()
	}

	__bind() {
		this.$receiver.on(CHANNEL, (event, message)=>{
			if (!IN_RENDER) {
				let sender = event.sender.getOwnerBrowserWindow()
				if (sender && "id" in message) {
					this.$sender_pool[message.id] = sender
				}
			}
			this.__received(message)
		})
	}

	__send(data) {
		let sender = this.$sender
		if (!sender && "id" in data) {
			sender = this.$sender_pool[data.id]
		}
		if (sender) {
			sender.send(CHANNEL, data)
		} else {
			console.error("no sender for message", data)
		}
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
				delete this.$sender_pool[id]
			} else {
				console.error("no callback handler for message", id)
			}
		} else if("method" in message){
			let method = this.$delegate[message.method],
				id     = message.id
			if (!method) {
				this.__send({id, error: `no method named ${message.method}`})
				return;
			}
			let sender = this.$sender || this.$sender_pool[id]
			Promise.resolve(method(message.args, sender)).then((result=null)=>{
				if (message.id) {
					this.__send({
						id, result
					})
				}
			}).catch((error)=>{
				this.__send({id, error: error.message})
			})
		}
	}

	set delegate(delegate) {
		for (let key in delegate) {
			this.$delegate[key] = delegate[key]
		}
	}

	removeDelegate(key) {
		delete this.$delegate[key]
	}

	call({ method, args, sender }) {
		if (!IN_RENDER && !sender) {
			console.error("call from main process must set sender")
			return
		}
		return new Promise((resolve, reject)=>{
			let id = (IN_RENDER ? "R":"M")+(++this.$uuid)
			let handler = (err, result)=>{
				if (err) {
					reject(err)
				} else {
					resolve(result)
				}
			}
			this.$handlers[id] = handler
			if (!IN_RENDER) {
				this.$sender_pool[id] = sender
			}
			this.__send({
				id, method, args
			})
		})
	}
}

export default new MessageBridge