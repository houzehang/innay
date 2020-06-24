
import {remote}    from 'electron';
import bridge 	   from './MessageBridge'
import Const 	   from '../config/const'
import logger      from 'electron-log'
import {TEST, DEBUG } from '../env';

class DomainMgr {
    constructor(){
		// DB.update()
		console.log('MINGXI_DEBUG_LOG>>>>>>>>>remove db','');
		this.$domains = {}//JSON.parse(DB.get('DOMAINS') || '{}')
		this.$types = {}
	}
	
	get types(){
		return this.$types
	}

    get domains(){
        return this.$domains
    }

    set domains(domains){
        this.$domains = domains
    }

	pull(callback){
		let nextStep = (domains)=>{
			console.log('MINGXI_DEBUG_LOG>>>>>>>>>domains',domains);
			if (domains) {
				let result = {}
				for (const key in domains) {
					let element = domains[key] || [];
					result[key] = element.map((url)=>{
						return {
							url
						}
					})		
				}
				console.log('MINGXI_DEBUG_LOG>>>>>>>>>result',result);

				this.$domains = result
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
                url: Const.DOMAIN_URL
            }
		}).then((serverInfo)=>{
			clearTimeout(this.$timer_pulling_domain)
			this.$timer_pulling_domain = null
			nextStep(serverInfo)
		})
	}

	__snyc_domains(){
		// DB.store('DOMAINS', JSON.stringify(this.$domains))
    }
    
	clearDoaminMarks(kind){
		let detail = this.domains[kind]
		if (detail) {
			detail.map((item)=>{
				console.log('MINGXI_DEBUG_LOG>>>>>>>>>clear kind',kind);
				item.active = false;
				item.used 	= false
			})
		}
	}
	
	availibleDomain(kind, retry){
		logger.log('search availibleDomain kind', kind, retry)
		if (kind == 'query' && localStorage.getItem('debug_ip') && !retry) {
			return localStorage.getItem('debug_ip')
		}
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
						logger.log('[debug-domain]','use back up',item.url)
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
			logger.log('found:',found)
			if (!found && !retry && backup) {
				return backup()
			}
			return found;
		} catch (error) {
		}
		return null;
	}
}
export default new DomainMgr