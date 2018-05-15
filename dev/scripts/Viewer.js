let Const 		= require("../const.js");
const net 		= require("./network")
const DMG 		= require("./DataManager").DataManager
const context 	= require("./context")
let Calendar	= require("./calendar")
const room 		= require("./room")
const signal	= require('./signal')
/**
 * 对应mvc结构中的View，所有界面相关的处理均在本类中实现
 */
class Viewer {
	constructor() {
		this.data 		= {}
		this.$calendar 	= new Calendar(this)
		this.__bind();
		if (net.token) {
			this.content()
		} else {
			this.login()
		}
	}

	__resize() {

	}

	/**
	 * 绑定来自DataManager的数据更新事件，并进行试图渲染
	 */
	__bind() {
		$(window).on("resize", ()=>{
			this.__resize();
		});
		this.__resize();
		$("body").on("click",".login-btn",()=>{
			let mobile 		= $("input[name=mobile]").val()
			let password 	= $("input[name=password]").val()
			if (!mobile || !password) {
				alert("请输入手机号或密码！")
				return
			}
			context.loading.show("正在登录...")
			net.login({
				mobile, password
			}).then((res)=>{
				net.token 		= res.token
				net.sigtoken 	= res.signaling_token
				context.dmg.userinfo = res.user
				this.content()
				context.loading.hide()
			},()=>{
				context.loading.hide()
			}).done()
		})

		$("body").on("click", ".start-btn",(event)=>{
			let index = $(event.currentTarget).attr("data-index")
			let data = context.dmg.courses[index]
			$(".enter-layer .enter-time").text(data.start_time)
			$(".enter-layer").show()
			setTimeout(()=>{
				$(".enter-layer").addClass("show")
			},100)
			context.course = data
		})
		$("body").on("click",".mask .close-btn,.mask .cancel-btn",(event)=>{
			let target = $(event.currentTarget).parents(".mask")
			target.removeClass("show")
			setTimeout(()=>{
				target.hide()
			},300)
		})
		$("body").on("click",".enter-btn",(event)=>{
			$(".mask").removeClass("show")
			setTimeout(()=>{
				$(".mask").hide()
			},300)
			this.course()
		})
		$("body").on("click",".switch",(event)=>{
			let target = $(event.currentTarget).parents(".buttons")
			target.toggleClass("open")
		})
		$("body").on("click",".back-btn",(event)=>{
			$(".back-layer").show()
			setTimeout(()=>{
				$(".back-layer").addClass("show")
			},100)
		})
		$("body").on("click",".ok-btn",()=>{
			$(".back-layer").removeClass("show")
			setTimeout(()=>{
				$(".back-layer").hide()
			},300)
			this.leaveCourse()
		})
		$("body").on("click",".course-close",()=>{
			$(".exit-layer").show()
			setTimeout(()=>{
				$(".exit-layer").addClass("show")
			},100)
		})
		$("body").on("click",".exit-btn",()=>{
			$(".exit-layer").removeClass("show")
			setTimeout(()=>{
				$(".exit-layer").hide()
			},300)
			this.leaveCourse()
		})
		$("body").on("click",".gift,.handsup",(event)=>{
			let target = $(event.currentTarget)
			target.toggleClass("disabled")
		})
		room.on("NEW_STREAM", (stream)=>{
			let id = stream.getId()
			let dom = $(`#students_${id}`)
			if (dom.length === 0) {
				let idle = $("#students .idle"),
					cell = $(`<div id="students_${id}" class="cell"></div>`)
				if (idle.length == 0) {
					$('#students').append(cell)
				} else {
					$(idle[0]).replaceWith(cell)
				}
			}
			stream.play('students_' + stream.getId());
		})
		room.on("REMOVE_STREAM", (stream)=>{
			$('#students_' + stream.getId()).remove();
			let cells = $("#students .cell")
			if (cells.length < Const.CELL_COUNT) {
				$('#students').append(`<div class="cell idle"></div>`)
			}
		})
		room.on("LEAVE_ROOM", ()=>{
			$("#master-video").html("")
			$("#students").html("")
		})
	}

	login() {
		$(".page").hide()
		$(".login-page").show()
	}

	content() {
		$(".page").hide()
		let cells = []
		for(let i=0;i<Const.CELL_COUNT;i++) {
			cells.push(`<div class="cell idle"></div>`)
		}
		$("#students").html(cells.join(''))
		let choosed = this.data.calendar_data.choosed_txt
		net.lessons(`${choosed.year}-${choosed.month}`).then((res)=>{
			let dates = res.dates
			this.$calendar.setHighlighted(dates)
		}).done()
		this.__get_courses()
		$(".calendar-page,.course-page").show()
		console.log("call signal init...")
		signal.init()
	}

	course() {
		if (context.course) {
			$(".page").addClass("next")
			net.getRoomInfo(context.course.channel_id).then((result)=>{
				context.room = result
				room.start()
				signal.join()
				signal.send({"hello":"world"})
			})
		}
	}

	leaveCourse() {
		$(".page").removeClass("next")
		room.leave()
		signal.leave()
	}

	__get_courses() {
		let choosed = this.data.calendar_data.choosed_txt
		net.lessonsByDate(`${choosed.year}-${choosed.month}-${choosed.day}`).then((res)=>{
			context.render("courses-tmpl", {
				courses: res.rooms
			})
			context.dmg.courses = res.rooms
		})
	}

	onDateChanged(date) {
		this.__get_courses()
	}
}

module.exports = Viewer;