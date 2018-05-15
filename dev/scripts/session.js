const Eventer = require("./eventer")
const context = require("./context")

class Session extends Eventer {
	constructor() {
		super()
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
		this.__createWebview()
		this.__bind()
		this.$dom.html("")
		this.$dom.append(this.$webview)
	}
	/**
	 * 创建webview
	 */
	__createWebview() {
		let partition = this.uuid()
		let webview   = $(`<webview class="webview" src="http://kecheng.runsnailrun.com/app?from=app" partition="persist:kecheng${partition}" preload="./scripts/inject.js"></webview>`);
		this.$webview = webview[0];
	}

	__bind() {
		if (this.$webview) {
			$(this.$webview).off('dom-ready');
			$(this.$webview).on('dom-ready', () => {
				this.$webview.openDevTools();
			});
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
				from: context.dmg.userinfo.id,
				to: "app",
				type
			}
			for(let key in extra) {
				message[key] = extra[key]
			}
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