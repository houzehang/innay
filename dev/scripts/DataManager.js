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
		this.$user_list = new Serialize
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
}

module.exports = DataManager;