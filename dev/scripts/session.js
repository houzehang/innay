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
		// this.__bind()
		// this.__createWebview()


		this.$dom = $(dom)
		this.__createWebview()
		this.__bind()
		this.$dom.html("")
		this.$dom.append(this.$webview)
	}
	/**
	 * 创建webview
	 */
	__createWebview() {
		// let prefix
		// if (DEBUG) {
		// 	prefix = "http://localhost:3000"
		// } else {
		// 	prefix = "https://kecheng1.runsnailrun.com"
		// }
		// $.get(`${prefix}/app?from=app&t=`+new Date().getTime(),(response)=>{
		// 	window.CANVAS_HOLDER   = "#course-content"
		// 	window.CANVAS_LOCATION = `${prefix}/app?from=app`
		// 	window.CANVAS_SIZE     = [ 
		// 		$("#course-content").width(), 
		// 		$("#course-content").height()
		// 	]
		// 	response.replace(/<link\s+href="([^"]+)"/g, (m,result)=>{
		// 		if (!/^\//.test(result)) {
		// 			result = "/app" + result
		// 		}
		// 		$(`<link href="${prefix+result}" rel="stylesheet"/>`).appendTo("head")
		// 		return
		// 	})
		// 	$(`<script cocos="true" src="${prefix}/cocos.js"></script>`).appendTo("head")
		// 	let scripts = []
		// 	response.replace(/<script.+?src="([^"]+)"/g, (m,result)=>{
		// 		if (/(flexible)|(zepto)/.test(result)) return
		// 		if (!/^\//.test(result)) {
		// 			result = "/app/" + result
		// 		}
		// 		scripts.push(prefix+result)
		// 		return
		// 	})
		// 	let _next = ()=>{
		// 		let script = scripts.shift()
		// 		if (script) {
		// 			$.getScript(script, ()=>{
		// 				_next()
		// 			})
		// 		}
		// 	}
		// 	_next()
		// })


		let partition = this.uuid()
		let webview   = $(`<webview class="webview" src="https://kecheng1.runsnailrun.com/app?from=app" partition="persist:kecheng${partition}" preload="./libs/inject.js"></webview>`);
		this.$webview = webview[0];
	}

	__bind() {
		// window.BridgeH5Command = (callback, content)=>{
		// 	this.receive_message(JSON.parse(content));
		// }

		if (this.$webview) {
			$(this.$webview).off('page-title-updated');
			$(this.$webview).on('page-title-updated', (event)=>{
				event = event.originalEvent;
				let parsed = event.title.match(/^#PART#(\d+)#(\d+)#(.+)$/);
				if (parsed) {
					let index = parseInt(parsed[1],10),
						total = parseInt(parsed[2],10);
					if (index == total) {
						this.$_parts.push(parsed[3]);
						let data = this.$_parts.join("");
						try {
							this.receive_message(JSON.parse(data));
						} catch(e) {
							console.error(e,data);
						}
						this.$_parts = [];
					} else if (index < total){
						this.$_parts.push(parsed[3]);
					} else {
						this.$_parts = [];
					}
				}
			});
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
			// BridgeH5Do(JSON.stringify(message))

			this.$webview.executeJavaScript(`BridgeH5Do(${JSON.stringify(message)})`);
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