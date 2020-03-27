
import Conf from "../../const"
import $ 	from "jquery"
import Util from './Util'
class NetUtil extends Util{
    constructor(){
        super()
    }

    get baseUrl(){
		let env_conf = window.ENV_CONF || {}
		if (env_conf.DEBUG || env_conf.TEST) {
			return Conf.TEST_URL
		} else {
			return Conf.ONLINE_URL
		}
	}

    post(url, data={}){
        $.post(this.baseUrl +url, data)
    }

    quest(url, data = {}){
        return new Promise((resolve, reject)=>{
            $.ajax(this.baseUrl + url, {
                ...data,
                success: (...args)=>{
                    console.log('MINGXI_DEBUG_LOG>>>>>>>>>request success',url, data);
                    data.success(resolve, reject, ...args)
                },
                error: (...args)=>{
                    data.error && data.error(resolve, reject, ...args)
                }
            })
        })
    }
}
export default new NetUtil