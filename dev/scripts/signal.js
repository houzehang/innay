const Signal  = require('./AgoraSig-1.3.0')
const Const   = require('../const')
const context = require('./context')
const net 	  = require('./network')
const Q 	  = require('q')
const Eventer = require('./eventer')

class Signal extends Eventer {
	constructor() {
		super()
		this.$signal 	= Signal(Const.AGORA_APPID)
		this.$inited    = false
	}

	__init() {
		return Q.Promise((resolve, reject)=>{
			if (this.$inited) {
				resolve();
			} else {
				this.$session = this.$signal.login(context.dmg.userinfo.id, net.sigtoken)
				this.$session.onLoginSuccess = ()=>{
					this.$inited = true
					resolve()
				}
				this.$session.onLoginFailed = (ecode)=>{
					if (ecode == LOGIN_E_NET) {
						this.__init().then(resolve, reject).done()
					}
				}
				this.$session.onLogout = (ecode)=>{
					if (ecode == LOGOUT_E_NET) {
						this.__init().then(resolve, reject).done()
					}
				}
				this.$session.onError = (ecode)=>{
					if (ecode == GENERAL_E_NOT_LOGIN) {
						this.__init().then(resolve, reject).done()
					}
				}
			}
		})
	}
}

module.exports = new Signal