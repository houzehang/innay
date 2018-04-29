/**
 * 全局数据中心，每个Session均存储一个该类实例
 * 所有界面中需要的数据均存储到该对象中
 * 数据变更后通过SigSlot类通知Viewer进行重绘
 * 类似于简单的Vue功能实现
 */
let Storage 	= require("./Storage.js");
let Const   	= require("../const.js");

class SigSlot {
	constructor() {
		this.$eventer 	= $("<div/>");
	}

	on(...params) {
		this.$eventer.on(...params);
	}

	trigger(...params) {
		this.$eventer.trigger(...params);
	}
}

class DataManager {
	constructor(session) {
		this.$sigslot   = session.$sigslot;
	}
}

module.exports = {DataManager,SigSlot};