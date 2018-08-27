const Q 		= require('q')
const Eventer 	= require('./eventer')
const context 	= require('./context')
const DEBUG   	= require("../../env").DEBUG
class Network extends Eventer {
	constructor() {
		super()
		if (DEBUG) {
			this.$base_url = "https://kecheng1.runsnailrun.com"
		} else {
			this.$base_url = "https://www.muwenyuwen.com"
		}
		this.$log_queue = []
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
		data.client = "pc"
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
				success: (res)=>{
					resolve(res.data)
				},
				error: (res)=>{
					if (res.status == 401) {
						//登录
						this.trigger("LOGOUT_NEEDED")
						return
					}
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
		return this.__request("/user/login", data, "post")
	}

	/**
	 * 获取课程安排
	 * @param {*} date 
	 */
	lessons(date) {
		return this.__request("/room/lesson_date", {
			date
		})
	}

	/**
	 * 获取当日课程
	 */
	lessonsByDate(date) {
		return this.__request("/room/lesson_list", {
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

	/**
	 * 开始上课
	 */
	beginClass(channel_id) {
		return this.__request('/room/class_begin',{channel_id},"post")
	}

	/**
	 * 发送log数据
	 * @param {*} data 
	 */
	log(data={}) {
		console.log(data)
		data.user = context.user.id
		this.$log_queue.push(data)
		clearTimeout(this.$log_delay)
		this.$log_delay = setTimeout(()=>{
			if (this.$log_queue.length > 0) {
				$.post(`${this.$base_url}/api/h5_log`,{logs:this.$log_queue})
			}
			this.$log_queue = []
		},5000)
	}
}

module.exports = new Network