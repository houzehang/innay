const Eventer 			= require("./eventer")
const ENV   			= require("../../env")
const $ 				= require("jquery")
const Conf 				= require("../const")
const AgoraRtcEngine 	= require('../agora/AgoraSdk')

class Session extends Eventer {
	constructor(inst) {
		super()
		this.$inst 		= inst
		this.$uuid 	 	= 0
		this.$_parts 	= []
		this.$jsready 	= false
		this.$queue		= []
	}

	uuid() {
		return ++this.$uuid
	}

	init(dom) {
		window.CANVAS_HOLDER = dom
		this.$dom = $(dom)
		this.__bind()
		this.__createWebview()
	}
	/**
	 * 创建webview
	 */
	__createWebview() {
		let prefix
		if (ENV.DEBUG) {
			prefix = "http://localhost:3000"
		} else if(ENV.TEST) {
			prefix = Conf.TEST_URL
		} else {
			prefix = Conf.ONLINE_URL
		}
		$.get(`${prefix}/app?from=app&t=`+new Date().getTime(),(response)=>{
			if (this.$inst.isMaster()) {
				window.CANVAS_LOCATION = `${prefix}/app?from=app`
			} else {
				window.CANVAS_LOCATION = `${prefix}/app?from=native`
			}
			window.CANVAS_SIZE     = [ 
				this.$dom.width(), 
				this.$dom.height()
			]
			console.log('window.CANVAS_SIZE',window.CANVAS_SIZE);
			response.replace(/<link\s+href="([^"]+)"/g, (m,result)=>{
				if (!/^\//.test(result)) {
					result = "/app" + result
				}
				$(`<link href="${prefix+result}" rel="stylesheet"/>`).appendTo("head")
				return
			})
			$(`<script cocos="true" src="${prefix}/cocos.js"></script>`).appendTo("head")
			let scripts = []
			response.replace(/<script.+?src="([^"]+)"/g, (m,result)=>{
				if (/(flexible)/.test(result)) return
				if (!/^\//.test(result)) {
					result = "/app/" + result
				}
				scripts.push(prefix+result)
				return
			})
			let _next = ()=>{
				let script = scripts.shift()
				if (script) {
					$.getScript(script, ()=>{
						_next()
					})
				}
			}
			_next()
		})

		// let webview   = $(`<webview class="webview" nodeintegration='true' src="${prefix}/app?from=app&t=${new Date().getTime()}" partition="persist:kecheng"></webview>`);
		// this.$webview = webview[0];
	}

	reload() {
		
	}

	__bind() {
		window.ON_SESSION_MESSAGE = (message)=>{
			console.log("receive session message",message)
			this.receive_message(message);
		}
	}

	/**
	 * 向注入线程发送消息
	 * @param {*} data 
	 */
	send_message(type, data = {}, extra = {}) {
		if (this.$jsready) {
			let message = {
				message: data,
				from: this.$inst.props.account.id,
				to: "app",
				type
			}
			for(let key in extra) {
				message[key] = extra[key]
			}
			if (window.BridgeH5Do) {
				window.BridgeH5Do(message)
			}
		} else {
			this.$queue.push([type, data, extra])
		}
	}

	receive_message(message) {
		if (message.type == "jsready") {
			this.$jsready = true
			console.log("jsready..",this.$queue)
			this.$queue.forEach((message)=>{
				this.send_message(...message)
			})
			this.$queue = []
		}
		this.trigger("NEW_MESSAGE", message) 
	}

	destroy() {
		this.$_parts 	= []
		this.$jsready 	= false
		this.$queue		= []
	}
}

module.exports = Session