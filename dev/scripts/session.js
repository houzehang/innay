const Eventer = require("./eventer")
const DEBUG   = require("../../env").DEBUG

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

	get view() {
		return this.$webview
	}

	init(dom) {
		this.$dom = $(dom)
		this.__bind()
		this.__createWebview()
	}
	/**
	 * 创建webview
	 */
	__createWebview() {
		let prefix = "https://kecheng.runsnailrun.com"
		$.get(`${prefix}/app?from=app&t=`+new Date().getTime(),(response)=>{
			window.CANVAS_HOLDER   = "#course-content"
			window.CANVAS_LOCATION = `${prefix}/app?from=app`
			window.CANVAS_SIZE     = [ 
				$("#course-content").width(), 
				$("#course-content").height()
			]
			response.replace(/<link\s+href="([^"]+)"/g, (m,result)=>{
				if (!/^\//.test(result)) {
					result = "/app" + result
				}
				$(`<link href="${prefix+result}" rel="stylesheet"/>`).appendTo("head")
				return
			})
			response.replace(/<script.+?src="([^"]+)"/g, (m,result)=>{
				if (/(flexible)|(zepto)/.test(result)) return
				if (!/^\//.test(result)) {
					result = "/app/" + result
				}
				$(`<script type="text/javascript" defer src="${prefix+result}"></script>`).appendTo("body")
				return
			})
		})
		// let partition = this.uuid()
		// let webview   = $(`<webview class="webview" src="https://kecheng.runsnailrun.com/app?from=app" partition="persist:kecheng${partition}" preload="./libs/inject.js"></webview>`);
		// this.$webview = webview[0];
	}

	__bind() {
		window.BridgeH5Command = (callback, content)=>{
			this.receive_message(JSON.parse(content));
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
			BridgeH5Do(JSON.stringify(message))
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
		$(this.$webview).remove()
	}
}

module.exports = Session