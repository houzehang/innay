
import Conf from "../../const"
import $ 	from "jquery"
import Util from './Util'
import DomainMgr from './../../../core/DomainMgr'
class NetUtil extends Util{
    constructor(){
        super()
        this.$status_white_list = [
            200, 301,302,400,401,403,404,419,422,500
        ]
    }

    get baseUrl(){
        if (!this.$base_url) {
            this.$base_url = DomainMgr.availibleDomain('query')
        }
        return this.$base_url
	}

    post(url, data={}){
        $.post(this.baseUrl +url, data)
    }

    __status_in_white_list(status){
        return ~this.$status_white_list.indexOf(status)
    }

    __use_new_base_domain(){
        let domain = DomainMgr.availibleDomain('query', true)
        if (!domain) {
            return false
        }
        this.$base_url = domain
        return true
    }

    quest(url, data = {}){
        return new Promise((resolve, reject)=>{
            $.ajax(this.baseUrl + url, {
                ...data,
                success: (...args)=>{
                    data.success(resolve, reject, ...args)
                },
                error: (...args)=>{
                    console.log('request error',url,...args);
                    let errorStatus = ([...args][0] || {}).status
                    if (!this.__status_in_white_list(errorStatus)) {
                        if (this.__use_new_base_domain()) {
                            return this.quest(url, data)
                        } else {
                            if (confirm('域名异常，重新尝试？')) {
                                DomainMgr.clearDoaminMarks('query')
                                return this.quest(url, data)
                            } 
                        }
                    }
                    data.error && data.error(resolve, reject, ...args)
                }
            })
        })
    }
}
export default new NetUtil