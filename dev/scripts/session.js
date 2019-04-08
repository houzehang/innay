import Eventer 			from "./eventer"
import {DEBUG,TEST}     from "../../env"
import Conf 			from "../const"
import context 			from "./context"
import request 			from "superagent"

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
		this.$dom = context.get(dom)
		this.__bind()
		this.__createWebview()
	}
	/**
	 * 创建webview
	 */
	__createWebview() {
		let prefix
		if (DEBUG) {
			prefix = "http://localhost:3000"
		} else if(TEST) {
			prefix = Conf.TEST_URL
		} else {
			prefix = Conf.ONLINE_URL
		}
		request.get(`${prefix}/app?from=app&t=`+new Date().getTime()).then((response)=>{
			if (this.$inst.isMaster()) {
				window.CANVAS_LOCATION = `${prefix}/app?from=app`
			} else {
				window.CANVAS_LOCATION = `${prefix}/app?from=native`
			}
			window.CANVAS_SIZE     = [ 
				this.$dom.offsetWidth, 
				this.$dom.offsetHeight
			]
			let scripts = []
			response.replace(/<script.+?src="([^"]+)"/g, (m,result)=>{
				if (/(flexible)|(zepto)|(vconsole)|(cocos2d-js)/.test(result)) return
				if (/^\//.test(result)) {
					result = prefix + result
				}
				scripts.push(result)
				return
			})
			let _next = ()=>{
				let url = scripts.shift()
				if (url) {
					var script = document.createElement('script');
					script.async = true;
					script.src = url;
					script.onload = _next
					document.getElementsByTagName('head')[0].appendChild(script);
				}
			}
			_next()
		})
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
		context.empty(this.$dom)
	}
}

export default Session