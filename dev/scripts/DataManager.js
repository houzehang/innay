/**
 * 全局数据中心，每个Session均存储一个该类实例
 * 所有界面中需要的数据均存储到该对象中
 * 数据变更后通过SigSlot类通知Viewer进行重绘
 * 类似于简单的Vue功能实现
 */
let Const   	= require("../const.js");
const Eventer  	= require("./eventer")
const context 	= require("./context")
const Serialize = require("./serialize")

class DataManager extends Eventer {
	constructor() {
		super()
		this.$userInfo = null
		this.$gifts    = []
		this.__reset()
	}

	__reset() {
		this.$user_list 	= new Serialize
		this.$user_unmuted	= {}
		this.$racing		= false
		this.$giftopen 		= true
	}

	destroy() {
		this.__reset()
	}

	set userinfo(userinfo) {
		context.storage.store("USER_INFO", userinfo)
		this.$userInfo = userinfo
	}

	get userinfo() {
		if (!this.$userInfo) {
			this.$userInfo = context.storage.get("USER_INFO")
		}
		return this.$userInfo
	}

	isMaster(id) {
		if (!id) {
			id = this.$userInfo.id
		}
		for(let i=0,len=context.course.teachers.length;i<len;i++) {
			let item = context.course.teachers[i]
			if (item.id == id) {
				return true
			}
		}
	}

	isChairMaster(id) {
		if (!id) {
			id = this.$userInfo.id
		}
		return context.course.teacher_id == id
	}

	isSubMaster(id) {
		if (!id) {
			id = this.$userInfo.id
		}
		return this.isMaster(id) && !this.isChairMaster(id)
	}

	set courses(courses) {
		this.$courses = courses
	}

	get courses() {
		return this.$courses
	}

	getUser(id) {
		if (id == this.$userInfo) {
			return this.$userInfo
		}
		return this.$user_list.get(id)
	}

	addUser(user) {
		this.$user_list.merge([user])
	}

	removeUser(id) {
		this.$user_list.remove(id)
	}

	get users() {
		return this.$user_list.data()
	}

	setUnMuted(id) {
		this.$user_unmuted[id] = true
	}

	setMuted(id) {
		this.$user_unmuted[id] = false
	}

	isMuted(id) {
		return !this.$user_unmuted[id]
	}

	set racing(race) {
		this.$racing = race
	}
	
	get racing() {
		return this.$racing
	}

	set giftopen(giftopen) {
		this.$giftopen = giftopen
	}
	
	get giftopen() {
		if (this.isMaster()) {
			return true
		}
		return this.$giftopen
	}

	set gifts(gifts) {
		this.$gifts = gifts
	}
	
	get gifts() {
		return this.$gifts
	}
}

module.exports = DataManager;