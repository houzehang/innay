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

	__show_gift_layer() {
		$(".gift-layer").show()
		setTimeout(()=>{
			$(".gift-layer").addClass("show")
		},100)
	}

	__hide_gift_layer() {
		$(".gift-layer").removeClass("show")
		setTimeout(()=>{
			$(".gift-layer").hide()
		},300)
	}

	__send_gift() {
		if (this.$gift_data) {
			console.log("send gift",this.$gift_data)
			net.sendGift({
				channel_id : context.course.channel_id,
				to_id: this.$gift_data.to,
				gift_id: this.$gift_data.gift.id
			}).then((res)=>{
				let total = res.total, toUser = context.dmg.getUser(this.$gift_data.to)
				signal.send({
					type: "gift",
					from: context.dmg.userinfo.id,
					to: "all",
					message: {
						uid: this.$gift_data.to,
						gift: this.$gift_data.gift,
						total,
						from_username: context.dmg.userinfo.child_name,
						to_username: toUser.child_name
					}
				})
			})
		}
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
		$("body").on("click",".prev-page",()=>{
			context.session.send_message("appprevpage")
		})
		$("body").on("click",".next-page",()=>{
			context.session.send_message("appnextpage")
		})
		$("body").on("click",".clear",()=>{
			context.session.send_message("appclearall")
		})
		$("body").on("click",".prev-step",()=>{
			context.session.send_message("appprevstep")
		})
		$("body").on("click",".next-step",()=>{
			context.session.send_message("appnextstep")
		})
		$("body").on("click",".handsup",(event)=>{
			if (!$(event.currentTarget).hasClass("disabled")) {
				context.session.send_message(Const.CLOSE_RACE)
			} else {
				context.session.send_message(Const.OPEN_RACE)
			}
		})
		$("body").on("click",".sound",(event)=>{
			event.stopPropagation()
			let target = $(event.currentTarget)
			let id = target.attr("data-id")
			if (target.hasClass("mute")) {
				context.session.send_message(Const.OPEN_MIC, {
					uid: id - 0
				})
			} else {
				context.session.send_message(Const.CLOSE_MIC, {
					uid: id - 0
				})
			}
		})
		$("body").on("click",".gift",(event)=>{
			if (!$(event.currentTarget).hasClass("disabled")) {
				context.session.send_message(Const.CLOSE_GIFT)
			} else {
				context.session.send_message(Const.OPEN_GIFT)
			}
		})
		$("body").on("click",".master-head",(event)=>{
			if (context.dmg.isMaster()) return
			if (context.dmg.giftopen) {
				this.$gift_data = {
					to: context.dmg.userinfo.id
				}
				this.__show_gift_layer()
			} else {
				alert("现在还不能送礼物哦~")
			}
		})
		$("body").on("click",".students .cell",(event)=>{
			let id = $(event.currentTarget).attr("data-id")
			if (!id || id == context.dmg.userinfo.id) {
				return
			}
			if (context.dmg.isMaster() || context.dmg.giftopen) {
				this.$gift_data = {
					to: id
				}
				this.__show_gift_layer()
			} else {
				alert("现在还不能送礼物哦~")
			}
		})
		$("body").on("click",".gift-layer .gift-item",(event)=>{
			let index = $(event.currentTarget).attr("data-index")
			if (!index || !this.$gift_data) {
				this.__hide_gift_layer()
				return
			}
			this.$gift_data.gift = context.dmg.gifts[index]
			this.__hide_gift_layer()
			this.__send_gift()
		})
		room.on("NEW_STREAM", (stream)=>{
			// 判断是不是主班老师
			let id = stream.getId()
			let isMaster = context.dmg.isChairMaster(id)
			let isSubMaster = context.dmg.isSubMaster(id)
			if (isSubMaster) {
				return
			}
			if (isMaster) {
				stream.play('master-video');
			} else {
				let dom = $(`#students_${id}`)
				if (dom.length === 0) {
					let user = context.dmg.getUser(id) || {
						child_name: "-"
					}
					let gift = 0
					for(let i=0,len=context.room.gifts.length;i<len;i++) {
						let item = context.room.gifts[i]
						if (item.id == id) {
							gift = item.total
							break
						}
					}
					let muted = context.dmg.isMuted(id), racing = context.dmg.racing
					let idle = $("#students .idle"),
						cell = $(`<div id="students_${id}" class="cell" data-id="${id}">
							<div class="name">${user.child_name}</div>
							<div class="hand" ${racing?'':'style="display:none"'}></div>
							<div class="video" id="students_${id}_video"></div>
							<div class="bar">
								<div class="sound ${muted?'mute':''}" data-id="${id}"></div>
								<div class="ph"></div>
								<div class="gift">${gift}</div>
							</div>
						</div>`)
					if (idle.length == 0) {
						$('#students').append(cell)
					} else {
						$(idle[0]).replaceWith(cell)
					}
				}
				stream.play('students_' + stream.getId() + "_video");
			}
		})
		room.on("REMOVE_STREAM", (stream)=>{
			$('#students_' + stream.getId()).remove();
			let cells = $("#students .cell")
			if (cells.length < Const.CELL_COUNT) {
				$('#students').append(`<div class="cell idle"></div>`)
			}
		})
		room.on("LEAVE_ROOM", ()=>{
			context.session.destroy()
		})
		signal.on("CHANNEL_NEW_USER", (user)=>{
			context.session.send_message(Const.MEMBER_ADD, {
			}, {
				userinfos  : [user]
			})
			console.log("channel new user...",user)
			// 渲染用户列表
			let dom = $("#students_"+user.id)
			if (dom.length > 0) {
				$(".name",dom).text(user.child_name)
			}
		})
		signal.on("CHANNEL_USER_LEAVE", (id)=>{
			context.session.send_message(Const.MEMBER_LEAVE, {
			}, {
				userinfos  : [id]
			})
		})
		signal.on("NEW_MESSAGE", (message)=>{
			console.log("receive new signal message",message)
			this.__on_signal_message(message)
		})
		context.session.on("NEW_MESSAGE", (message)=>{
			console.log("receive new session message",message)
			if (message.to == "app") {
				let data = message.message
				switch(message.type) {
					case Const.JS_READY :
					break
					case "starttest":
					break
					case Const.OPEN_MIC:
					case Const.CLOSE_MIC:
					case Const.OPEN_RACE:
					case Const.CLOSE_RACE:
					case Const.OPEN_GIFT:
					case Const.CLOSE_GIFT:
					this.__on_signal_message(message)
					break
					break
				}
			} else if (message.to == "all") {
				signal.send(message)
			}
		})
	}

	__on_signal_message(message) {
		let data = message.message
		switch(message.type) {
			case "closeroom":
			break
			case Const.OPEN_RACE:
			$("#students .hand").text("").show()
			$(".cell.handsup").removeClass("disabled")
			context.dmg.racing = true
			break
			case Const.CLOSE_RACE:
			$("#students .hand").text("").hide()
			$(".cell.handsup").addClass("disabled")
			context.dmg.racing = false
			break
			case Const.OPEN_MIC:
			if (data.uid) {
				$("#students_"+data.uid+" .sound").removeClass("mute")
			}
			context.dmg.setUnMuted(data.uid)
			room.stream_audio(data.uid)
			break
			case Const.CLOSE_MIC:
			if (data.uid) {
				$("#students_"+data.uid+" .sound").addClass("mute")
			}
			context.dmg.setMuted(data.uid)
			room.stream_audio(data.uid)
			break
			case Const.OPEN_GIFT:
			$(".cell.gift").removeClass("disabled")
			context.dmg.giftopen = true
			break
			case Const.CLOSE_GIFT:
			$(".cell.gift").addClass("disabled")
			context.dmg.giftopen = false
			break
			case "racerank":
			if (data.uid) {
				$("#students_"+data.uid+" .hand").text(data.rank).show()
			}
			break
			case "starttest":
			case "stoptest":
			break
			case "gift":
			let total = data.total
			context.room.gifts.forEach((gift)=>{
				if (gift.id == data.uid) {
					gift.total = total
				}
			})
			$("#students_"+data.uid+" .gift").text(total)
			default:
			context.session.send_message(null, null, message)
		}
	}

	login() {
		$(".page").hide()
		$(".login-page").show()
	}

	content() {
		$(".page").hide()
		if (context.dmg.userinfo.dentity == 2) {
			let choosed = this.data.calendar_data.choosed_txt
			net.lessons(`${choosed.year}-${choosed.month}`).then((res)=>{
				let dates = res.dates
				this.$calendar.setHighlighted(dates)
			}).done()
			this.__get_courses()
			$(".calendar-page,.course-page").show()
		} else {
			$(".student-page,.course-page").show()
			net.lessonsByDate().then((res)=>{
				console.log(res)
			})
		}
		signal.init()
	}

	course() {
		if (context.course) {
			$("#master-video").html("")
			$("#students").html("")
			let cells = []
			for(let i=0;i<Const.CELL_COUNT;i++) {
				cells.push(`<div class="cell idle"></div>`)
			}
			$("#students").html(cells.join(''))
			$(".page").addClass("next")
			// 获取礼物列表
			net.getGiftsList().then((data)=>{
				context.dmg.gifts = data.gifts
				context.render("gifts-tmpl", data)
			})
			net.getRoomInfo(context.course.channel_id).then((result)=>{
				context.room = result
				room.start()
				signal.join()
				context.session.init("#course-content")
				if (!context.dmg.isMaster()) {
					$(".sidebar .buttons").hide()
				} else {
					$(".sidebar .buttons").show()
				}
				// 发送init-room
				let masters = []
				context.course.teachers.forEach((teacher)=>{
					masters.push(teacher.id)
				})
				let userinfos = [ context.dmg.userinfo ]
				userinfos.concat(context.dmg.users)
				context.session.send_message(Const.INIT_ROOM, {
					channel_id: context.course.channel_id,
					token: net.token
				}, {
					master_ids : masters,
					userinfos  : userinfos
				})
			})
		}
	}

	leaveCourse() {
		$(".page").removeClass("next")
		room.leave()
		signal.leave()
		context.dmg.destroy()
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