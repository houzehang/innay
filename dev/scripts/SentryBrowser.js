/**
 * https://docs.sentry.io/
 * http://47.93.191.180:9000/sentry/mx-pc-student/
 */
import * as SentryClient from '@sentry/browser'
import * as os from 'os'
import Const from './../../config/const'
import SENTRY_CFG from './config/sentry'
import {ipcRenderer, remote} from "electron"
import ToolUtil from './utils/ToolUtil'

class Sentry {
    constructor(){
        this.$client = SentryClient
        ipcRenderer.on('sentry_log', (event, data={}) => {
            if (data.info) {
                this.__captureEvent(data.title, data.level, data.info, data.extra)
            } else {
                this.__captureMessage(data.title, data.level)
            }
        })
        this.$prefix_hash = {
            fatal:'✙✙',
            error:'✖✖',
            log  :'✎✎',
            info :'✔✔',
            warning :'☂☂',
        }
        //拦截报错
        window.alert = ((_alertOrgin)=>{
            return (parms)=>{
                this.captureEventWithCode(20003, {
                    message: parms
                }, {}, parms.toString().substring(0, 30)+'..')
                _alertOrgin(parms)
            }
        })(window.alert)
        
        this.$round = Number(localStorage.getItem('LAUNCH_ROUND')||'1')
        localStorage.setItem('LAUNCH_ROUND',this.$round + 1)

        this.$cpu_status = ''
        
        this.getCPUUsage()

        let lobbyWindow = remote.getCurrentWindow()
        lobbyWindow.on('close', (e)=>{
            this.captureMessageWithCode(10003)
        })
    }

    init(){
        console.log('init sentry debug#test:',window.ENV_CONF.DEBUG, window.ENV_CONF.TEST);
        this.$client.init({
            dsn         : Const.SENTRY_DSN,
            environment : window.ENV_CONF.DEBUG ? "DEBUG" : (window.ENV_CONF.TEST ? "TEST_OR_PREONLINE" : "ONLINE"),
            debug       : false,
            beforeSend  :(event) => {
                // Note that this only will work in the renderer process, it's a noop on the main process
                if (event.exception) {
                    // this.showReport()
                }
                return event;
            }
        });
    }

    __get_ip(){
        const interfaces = os.networkInterfaces();
        let result = 'Uknown';
        for (let devName in interfaces) {
            let iface = interfaces[devName];
            for (let i = 0; i < iface.length; i++) {
                let alias = iface[i];
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    result = alias.address;
                }
            }
        }
        return result
    }

    showReport(){
        this.$client.showReportDialog({
            title           : "功能建议",
            subtitle        : "为了更快解决您的问题，请在发生问题时或再次遇到问题时，立即反馈问题哦～",
            name            : this.$nickname || '',
            subtitle2       : "",
            labelEmail      : "电子邮件（用于接收问题处理进度通知）",
            labelComments   : "问题与操作步骤描述",
            errorFormEntry  : "请填写完整后重试",
            labelSubmit     : "提交",
            onLoad          : ()=>{
                try {
                    document.getElementById('id_email').setAttribute('placeholder', '')
                    document.getElementById('id_comments').setAttribute('placeholder', '')
                } catch (error) {}
            }
        })
    }

    bindUser(uid, name, mobile, version, token){
        this.$uid       = uid
        this.$nickname  = name
        this.$mobile    = mobile
        this.$version   = version
        this.$token     = token
        this.$profile   = localStorage.getItem('MINGXI.INC')
        this.$client.configureScope(scope => {
            scope.setTag('version', version);
            scope.setTag('app_version', '1.0.2');
            scope.setUser({ 
                id: uid,
                username: name,
                mobile,
                ip_address: this.__get_ip()
            });
        });
    }

    getCPUUsage(){ 
        var stats1      = this.getCPUInfo();
        var startIdle   = stats1.idle;
        var startTotal  = stats1.total;
        if (this.$timer_cpu_observer) clearTimeout(this.$timer_cpu_observer)
        this.$timer_cpu_observer = setTimeout(() => {
            var stats2          = this.getCPUInfo();
            var endIdle         = stats2.idle;
            var endTotal        = stats2.total;
            var idle 	        = endIdle - startIdle;
            var total 	        = endTotal - startTotal;
            var perc	        = idle / total;
            this.$cpu_status    = '【 CPU使用：'+((1 - perc)*100).toFixed(2) + '% 】'
            this.getCPUUsage()
        }, 1000 );
    }

    getCPUInfo(){ 
        var cpus = os.cpus();
        
        var user = 0;
        var nice = 0;
        var sys = 0;
        var idle = 0;
        var irq = 0;
        var total = 0;
        
        for(var cpu in cpus){
            user += cpus[cpu].times.user;
            nice += cpus[cpu].times.nice;
            sys  += cpus[cpu].times.sys;
            irq  += cpus[cpu].times.irq;
            idle += cpus[cpu].times.idle;
        }
        
        var total = user + nice + sys + idle + irq;
        
        return {
            'idle': idle, 
            'total': total
        };
    }

    __captureMessage(content, level){
        return this.$client.captureMessage(`${this.__prefixForLevel(level)}【${this.$round}th】【${this.$uid||"-"} / ${this.$nickname||"-"} / ${this.$mobile||"-"}】【${ToolUtil.formatDate(Date.now(), 'Y-M-D h:m:s')}】【${content}】`,level);
    }

    __captureEvent(title, level, data, extra){
        return this.$client.captureEvent({
            message: `${this.__prefixForLevel(level)}【${this.$round}th】【${this.$uid||"-"} / ${this.$nickname||"-"} / ${this.$mobile||"-"}】【${ToolUtil.formatDate(Date.now(), 'Y-M-D h:m:s')}】【${title}】`,
            extra: {
                _cpu_mem_       : this.$cpu_status + `【 内存使用：总共${(os.totalmem()/1024/1024).toFixed(2)}M 剩余${(os.freemem()/1024/1024).toFixed(2)}M 】`,
                _profile_       : this.$profile,
                ...data
            },
            ...extra,
            ...{
                level

            }
        });
    }

    __prefixForLevel(level){
        return this.$prefix_hash[level || 'fatal']
    }

    captureMessageWithCode(code, titleExtra=''){
        console.log('MINGXI_DEBUG_LOG>>>>>>>>>code',code);
        let detail  = SENTRY_CFG.MESSAGE[code]
        let title   = detail[0];
        let level   = SENTRY_CFG.LEVEL[detail[1]]
        return this.__captureMessage(title+titleExtra, level)
    }

    captureEventWithCode(code, data={}, extra={}, titleExtra=''){
        let detail  = SENTRY_CFG.EVENT[code]
        let title   = detail[0];
        let level   = SENTRY_CFG.LEVEL[detail[1]]
        return this.__captureEvent(title+titleExtra, level, data, extra)
    }
}

export default new Sentry;