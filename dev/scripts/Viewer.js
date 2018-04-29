let Const 		= require("../const.js");
/**
 * 对应mvc结构中的View，所有界面相关的处理均在本类中实现
 */
class Viewer {
	constructor() {
		this.__bind();
	}

	/**
	 * 绑定来自DataManager的数据更新事件，并进行试图渲染
	 */
	__bind() {
		this.$sigslot.on(Const.V.CONTACTS_UPDATED, ()=>{
			if (this.$disconnected) return;
			if (this.__is_showing == Const.PAGE.MAIN) {
			}
		});
		$(window).on("resize", ()=>{
			this.__resize();
		});
		this.__resize();
	}

}

module.exports = Viewer;