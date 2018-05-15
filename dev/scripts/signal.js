require('./AgoraSig-1.3.0')
const Const   = require('../const')
const context = require('./context')
const net 	  = require('./network')
const Q 	  = require('q')
const Eventer = require('./eventer')
class Signalize extends Eventer {
	constructor() {
		super()
		this.$signal 	= Signal(Const.AGORA_APPID)
		this.$inited    = false
		this.$queue 	= []
	}

	init() {
		return Q.Promise((resolve, reject)=>{
			if (this.$inited) {
				resolve();
			} else {
				// 傻逼的sdk，accout参数必须为字符串
				this.$session = this.$signal.login(context.dmg.userinfo.id+"", net.sigtoken)
				this.$session.onLoginSuccess = ()=>{
					this.$inited = true
					resolve()
					console.log("session logined...")
				}
				this.$session.onLoginFailed = (ecode)=>{
					if (ecode == Const.LOGIN_E_NET) {
						setTimeout(()=>{
							this.init().then(resolve, reject).done()
						},2000)
					}
					console.log("session login failed...",ecode)
				}
				this.$session.onLogout = (ecode)=>{
					if (ecode == Const.LOGOUT_E_NET) {
						setTimeout(()=>{
							this.init().then(resolve, reject).done()
						},2000)
					}
					console.log("session logout",ecode)
				}
				this.$session.onError = (ecode)=>{
					if (ecode == Const.GENERAL_E_NOT_LOGIN) {
						setTimeout(()=>{
							this.init().then(resolve, reject).done()
						},2000)
					}
					console.log("session error",ecode)
				}
			}
		})
	}

	join() {
		this.init().then(()=>{
			let channel = this.$session.channelJoin(context.course.channel_id)
			channel.onChannelJoined = ()=>{
				// 上报自己的用户信息
				this.$channel = channel
				this.$channel.channelSetAttr("data", JSON.stringify(context.dmg.userinfo), ()=>{
					console.log("set user info success", context.dmg.userinfo)
					this.trigger("CHANNEL_JOINED", channel)
					// 发送消息队列中的消息
					this.$queue.forEach((message)=>{
						this.send(message)
					})
					this.$queue = []
				})
			}
			channel.onChannelJoinFailed = ()=>{
				console.log("channel join failed, retry after 2s")
				setTimeout(()=>{
					this.join()
				}, 2000)
			}
			let new_user_joined = (account)=>{
				// 获取用户信息
				this.$session.invoke("io.agora.signal.user_get_attr", {
					account, name: "data"
				}, (event, res)=>{
					let userinfo = JSON.parse(res.value)
					console.log("new user joined...",userinfo)
					context.dmg.addUser(userinfo)
					this.trigger("CHANNEL_NEW_USER", userinfo)
				})
			}
			channel.onChannelUserJoined = (account, uid)=>{
				new_user_joined(account)
			}
			channel.onChannelUserList = function(users){
				users.forEach((account)=>{
					new_user_joined(account[0])
				})
			};
			channel.onChannelUserLeaved = (account) => {
				context.dmg.removeUser(account)
				this.trigger("CHANNEL_USER_LEAVE", account)
			}
			channel.onMessageChannelReceive = (account, uid, msg)=>{
				console.log("receive new message", msg)
				let message = JSON.parse(msg)
				this.trigger("NEW_MESSAGE", message)
			};
		},()=>{})
	}

	leave() {
		this.$channel.channelLeave(()=>{
			this.trigger("CHANNEL_LEAVED", this.$channel)
			this.$channel = null
		})
	}

	send(message) {
		message = JSON.stringify(message)
		if (this.$channel) {
			this.$channel.messageChannelSend(message, ()=>{
				console.log("消息发送成功")
			})
		} else {
			this.$queue.push(message)
		}
	}
}

module.exports = new Signalize