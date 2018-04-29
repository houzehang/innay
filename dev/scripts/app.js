let tmpl    	= require("./jquery.tmpl.js");
let Q 			= require("q");
let Const 		= require("../const.js");
let Calendar	= require("./calendar")
class App {
	constructor() {
		console.log("app...")
		this.data 		= {}
		this.$calendar 	= new Calendar(this)
		this.__bind()
	}

	__bind() {
		$(".start-btn").on("click",()=>{
			$(".enter-layer").show()
			setTimeout(()=>{
				$(".enter-layer").addClass("show")
			},100)
		})
		$(".mask").on("click",".close-btn,.cancel-btn",(event)=>{
			let target = $(event.currentTarget).parents(".mask")
			target.removeClass("show")
			setTimeout(()=>{
				target.hide()
			},300)
		})
		$(".enter-btn").on("click",(event)=>{
			$(".page").addClass("next")
			$(".mask").removeClass("show")
			setTimeout(()=>{
				$(".mask").hide()
			},300)
		})
		$(".switch").on("click",(event)=>{
			let target = $(event.currentTarget).parents(".buttons")
			target.toggleClass("open")
		})
		$(".back-btn").on("click",(event)=>{
			$(".back-layer").show()
			setTimeout(()=>{
				$(".back-layer").addClass("show")
			},100)
		})
		$(".ok-btn").on("click",()=>{
			$(".page").removeClass("next")
		})
		$(".course-close").on("click",()=>{
			$(".exit-layer").show()
			setTimeout(()=>{
				$(".exit-layer").addClass("show")
			},100)
		})
		$(".exit-btn").on("click",()=>{
			$(".page").removeClass("next")
			$(".exit-layer").removeClass("show")
			setTimeout(()=>{
				$(".exit-layer").hide()
			},300)
		})
		$(".gift,.handsup").on("click",(event)=>{
			let target = $(event.currentTarget)
			target.toggleClass("disabled")
		})
	}

	onDateChanged(date) {
		let choosed = this.data.calendar_data.choosed
		let today   = this.data.calendar_data.today
		if (this.$calendar.__is_sameday(choosed, today)) {

		} else {

		}
	}
}

module.exports = new App