const Q 		= require('q')
const Eventer 	= require('./eventer')
const context 	= require('./context')
class Network extends Eventer {
	constructor() {
		super()
		this.$base_url = "https://kecheng.runsnailrun.com"
		this.__restore_token()
	}

	__restore_token() {
		this.$token = ""
		let result = context.storage.get("DYW_TOKEN")
		if (result) {
			this.$token = result
		}
		result = context.storage.get("DYW_SIG_TOKEN")
		if (result) {
			this.$sigtoken = result
		}
	}

	__request(url, data = {}, method="get") {
		return Q.Promise((resolve, reject)=>{
			$.ajax(this.$base_url + url, {
				headers: { 
					"Authorization": `Bearer ${this.$token}`,
					"Accept" : "application/json"
				},
				method : method.toUpperCase(),
				data,
				dataType: "json",
				statusCode: {
					403: ()=>{
						this.trigger("LOGIN_NEEDED")
					}
				},
				success: function(res){
					resolve(res.data)
				},
				error: function(res) {
					if (res.responseJSON) {
						alert(res.responseJSON.message)
					} else {
						alert("啊哦，网络出问题啦~")
					}
					reject()
				}
			})
		})
	}

	set token(token) {
		context.storage.store("DYW_TOKEN",token)
		this.$token = token
	}

	get token() {
		return this.$token
	}

	set sigtoken(sigtoken) {
		context.storage.store("DYW_SIG_TOKEN",sigtoken)
		this.$sigtoken = sigtoken
	}

	get sigtoken() {
		return this.$sigtoken
	}

	/**
	 * 用户登录
	 * @param {*} data 
	 */
	login(data) {
		return this.__request("/user/login", data)
	}

	/**
	 * 获取课程安排
	 * @param {*} date 
	 */
	lessons(date) {
		return this.__request("/room/lesson_date", {
			client_type: "app",
			date
		})
	}

	/**
	 * 获取当日课程
	 */
	lessonsByDate(date) {
		return this.__request("/room/lesson_list", {
			client_type: "app",
			date
		})
	}

	/**
	 * 获取房间数据
	 * @param {*} channel_id 
	 */
	getRoomInfo(channel_id) {
		return this.__request("/room/channel_key", {
			channel_id
		}, "post")
	}

	/**
	 * 获取礼物列表
	 */
	getGiftsList() {
		return this.__request("/api/gifts", {})
	}

	/**
	 * 发礼物
	 */
	sendGift(data) {
		return this.__request("/api/give_gift", data, "post")
	}

	/**
	 * 关闭房间
	 */
	closeRoom(channel_id) {
		return this.__request("/room/close_the_room", {channel_id}, "post")
	}

	/**
	 * 获取当前时间
	 */
	getServerTime() {
		return this.__request('/api/time')
	}
}

module.exports = new Network