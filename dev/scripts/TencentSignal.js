const Const   = require('../const')
const net 	  = require('./network')
const Q 	  = require('q')
const Eventer = require('./eventer')

class TencentSignal extends Eventer {
	constructor(inst) {
		super()
		this.$prefix 	= "userid_web_"
		this.inst 		= inst
		this.$inited    = false
		this.$queue 	= []
	}

	init() {
		return Q.Promise((resolve, reject)=>{
			if (this.$inited) {
				resolve();
			} else {
				$.ajax({
					method : 'POST',
					contentType:'application/json;charset=utf-8',
					url: "http://xzb.qcloud.com/webrtc/weapp/webrtc_room/get_login_info",
					data: JSON.stringify({
						"userID" : this.$prefix + this.inst.props.account.id
					}),
					success: (response)=>{
						console.log("aaa",response)
						webim.login({
							sdkAppID   	: response.sdkAppID,
							accountType	: response.accountType,
							identifier	: response.userID,
							userSig 	: response.userSig
						}, {
							onBigGroupMsgNotify: ()=>{

							},
							onMsgNotify: (message)=>{
								console.log("onMsgNotify",message)
							},
							onFriendSystemNotifys: ()=>{

							}
						}, {
							isLogOn: false
						}, ()=>{
							resolve()
						}, ()=>{
							reject()
						})
					}
				})
			}
		})
	}

	join() {
		this.init().then(()=>{
			
		})
	}

	leave() {
		webim.logout();
	}

	send(message) {
		
	}
}

module.exports = TencentSignal