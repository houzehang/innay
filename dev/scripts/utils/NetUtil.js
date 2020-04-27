
import Conf from "../../const"
import $ 	from "jquery"
import Util from './Util'
import DomainMgr from './../../../core/DomainMgr'
class NetUtil extends Util{
    constructor(){
        super()
    }

    get baseUrl(){
        return DomainMgr.availibleDomain('query')
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