
import {remote}    from 'electron';
import DB          from '../../../core/DB'
import bridge 	   from '../../../core/MessageBridge'
import Const 	   from '../../../config/const'
const logger       = remote.require('electron-log')

class DomainUtil {
    constructor(){
		DB.update()
		this.$domains = JSON.parse(DB.get('DOMAINS') || '{}')
    }

    get domains(){
        return this.$domains
    }

    set domains(domains){
        this.$domains = domains
    }

	pull(callback){
		let nextStep = (domains)=>{
			if (domains) {
				this.$domains = domains
				this.__snyc_domains()
			}
			callback()
		}
		this.$timer_pulling_domain = setTimeout(() => {
			clearTimeout(this.$timer_pulling_domain)
			this.$timer_pulling_domain = null
			nextStep()
		}, 5000);
		bridge.call({
			method: "getDomains",
			args: {
                url:Const.DOMAIN_URL
            }
		}).then((serverInfo)=>{
			clearTimeout(this.$timer_pulling_domain)
			this.$timer_pulling_domain = null
			nextStep(serverInfo)
		})
	}

	__snyc_domains(){
		DB.store('DOMAINS', JSON.stringify(this.$domains))
    }
    
	availibleDomain(kind, retry){
		try {
			let detail = this.$domains[kind]
			let found   = null
			let backup  = null
			if (!detail) {
				return null;
			}
			let useThis = (item)=>{
				item.used   = true
				item.active = true
				logger.log('[debug-domain]',`使用了一个${ retry ? "新的" : ""}域名:`, kind, item.url)
				return item.url
			}
            for (let item of detail) {
                let {url, used, active} = item;
				let condition = retry ? (!active && !used) : active
				if (!retry && !backup) {
					backup = ()=>{
						return useThis(item)
					}
				}
                if (condition) {
                    if (!found) {
						useThis(item)
                        found = url
                    }
                } else {
                    item.active = false
                }
			}
			this.__snyc_domains()
			if (!found && !retry && backup) {
				return backup()
			}
			return found;
		} catch (error) {
		}
		return null;
	}
}
export default new DomainUtil