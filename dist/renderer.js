module.exports=function(e){var t={};function s(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="./",s(s.s=8)}([function(e,t){e.exports=require("electron")},function(e,t){e.exports="undefined"==typeof process||!process||!!process.type&&"renderer"===process.type},function(e,t){e.exports=require("electron-log")},function(e,t){e.exports={SENTRY_DSN:"http://b60c18f7cca84085a184bc77582cabaf@121.36.22.201:9000/2",TEST_URL:(()=>{try{return localStorage.getItem("debug_ip")||"http://kecheng1.youshiyuwen.cn"}catch(e){}})(),ONLINE_URL:"https://www.mingxiyuwen.com",TENCENT_APPID:1400098973,TENCENT_ACCOUNTTYPE:28218,VIDEO_T_QUALITY:"480P_3",VIDEO_S_QUALITY:"120P_3",MAIN_WINDOW_SIZE:{width:1070,height:590},ROOM_ID:111111,LARGE_MODE:480,DANCE_MODE:200,SMALL_MODE:88,WEB_IM_GROUP_TIP:{JOIN:1,QUIT:2,KICK:3,SET_ADMIN:4,CANCEL_ADMIN:5,MODIFY_GROUP_INFO:6,MODIFY_MEMBER_INFO:7},CELL_COUNT:4,LOGIN_E_NET:201,LOGOUT_E_KICKED:103,LOGOUT_E_NET:102,LOGOUT_SUCCESS:101,GENERAL_E_NOT_LOGIN:1003,JS_READY:"jsready",INIT_ROOM:"initroom",MEMBER_ADD:"member_add",MEMBER_LEAVE:"member_leave",CLEARLINES:"clearlines",NEXT_PAGE:"nextpage",SYNC:"sync",VIDEO_PLAY:"videoplay",VIDEO_STOP:"videostop",OPEN_RACE:"#openrace",CLOSE_RACE:"#closerace",OPEN_MIC:"#openmic",CLOSE_MIC:"#closemic",COURSE_PAUSE:"#coursepause",COURSE_RESUME:"#courseresume",PUT_DANCE:"#putdance",BACK_DANCE:"#backdance",SCENE_MOVE:"scenemove",START_COURSE:"*startcourse",STOP_COURSE:"*stopcourse",WARN:"warn",WARN_RELIEVE:"warn_relieve",ENABLE_MAGIC:"enablemagic",DISABLE_MAGIC:"disablemagic",MUTE_ALL:"#muteall",UNMUTE_ALL:"#unmuteall",SHOW_RANKS:"*showranks",HIDE_RANKS:"*hideranks",OPEN_MEDDLE:"open_meddle",UPDATE:{AVAILABLE:"update available",LASTEST:"the lastest version",CHECKING:"checking for update",ERROR:"update error",DOWNLOADING:"update downloading",DOWNLOADED:"update downloaded",DOWNLOADING_UI:"downloading ui",DOWNLOADED_UI:"downloaded ui"},COCOS:1,ILLEGAL_AUDIOS:["cyberlink webcam splitter","manycam virtual webcam","BBlivePreview","CamTwist","17GuaGua Cam","PixelMaster Video HDR","PG splitter","Built-in iSight","6room"],DOMAIN_URL:"https://mingxicn-test.oss-cn-beijing.aliyuncs.com/domain-yaduobao.json",DOMAIN_URL_TEST:"http://kechengassets.mx0a.com/steven.json",DOMAIN_LIST_DEFAULT:{frame:["https://bundlesyuntest.mx0a.com","https://mingxi-bundles-test.oss-cn-beijing.aliyuncs.com"],bundles:["https://bundlesyuntest.mx0a.com","https://mingxi-bundles-test.oss-cn-beijing.aliyuncs.com"]},DOMAIN_LIST_DEFAULT_TEST:{frame:["https://bundlesyuntest.mx0a.com","https://mingxi-bundles-test.oss-cn-beijing.aliyuncs.com"],bundles:["https://bundlesyuntest.mx0a.com","https://mingxi-bundles-test.oss-cn-beijing.aliyuncs.com"]},EBTN_STYLE_CONFIG:{kNormal:["ok","cancel"],kDeviceTest:["check-again","check-jump"],kChangePwd:["changepwd","none"],kClassExit:["leave-class","end-class"]},LINE_CONFIRM_TITLE:{lineTitle:["title-text"]}}},function(e,t){e.exports={DEBUG:!1,TC_DEBUG:!1,TEST:!1,TEACHER:!1}},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);s(5),s(6),s(7);var r=s(0),n=s.n(r),o=s(3),i=s.n(o),a=i.a,l=s(1),_=s.n(l);const d="MESSAGE_RPC_BRIDGE";var c=new class{constructor(){this.$uuid=0,this.$handlers={},this.$sender_pool={},this.$delegate={},_.a?(this.$sender=n.a.ipcRenderer,this.$receiver=n.a.ipcRenderer):this.$receiver=n.a.ipcMain,this.__bind()}__bind(){this.$receiver.on(d,(e,t)=>{if(!_.a){let s=e.sender.getOwnerBrowserWindow();s&&"id"in t&&(this.$sender_pool[t.id]=s)}this.__received(t)})}__send(e){let t=this.$sender;!t&&"id"in e&&(t=this.$sender_pool[e.id]),t?t.send(d,e):console.error("no sender for message",e)}__received(e){if("error"in e||"result"in e){const t=e.id,s=this.$handlers[t];if(s){try{s(e.error,e.result)}catch(e){console.error("call message handler error",e)}delete this.$handlers[t],delete this.$sender_pool[t]}else console.error("no callback handler for message",t)}else if("method"in e){let t=this.$delegate[e.method],s=e.id;if(!t)return void this.__send({id:s,error:`no method named ${e.method}`});let r=this.$sender||this.$sender_pool[s];Promise.resolve(t(e.args,r)).then((t=null)=>{e.id&&this.__send({id:s,result:t})}).catch(e=>{this.__send({id:s,error:e.message})})}}set delegate(e){for(let t in e)this.$delegate[t]=e[t]}removeDelegate(e){delete this.$delegate[e]}call({method:e,args:t,sender:s}){if(_.a||s)return new Promise((r,n)=>{let o=(_.a?"R":"M")+ ++this.$uuid;this.$handlers[o]=(e,t)=>{e?n(e):r(t)},_.a||(this.$sender_pool[o]=s),this.__send({id:o,method:e,args:t})});console.error("call from main process must set sender")}},u=s(2),m=s.n(u),p=s(4);var h=new class{constructor(){console.log("MINGXI_DEBUG_LOG>>>>>>>>>remove db",""),this.$domains={},this.$types={}}get types(){return this.$types}get domains(){return this.$domains}set domains(e){this.$domains=e}pull(e){let t=t=>{if(console.log("MINGXI_DEBUG_LOG>>>>>>>>>domains",t),t){let e={};for(const s in t){let r=t[s]||[];e[s]=r.map(e=>({url:e}))}console.log("MINGXI_DEBUG_LOG>>>>>>>>>result",e),this.$domains=e,this.__snyc_domains()}e()};this.$timer_pulling_domain=setTimeout(()=>{clearTimeout(this.$timer_pulling_domain),this.$timer_pulling_domain=null,t()},5e3),c.call({method:"getDomains",args:{url:i.a.DOMAIN_URL}}).then(e=>{clearTimeout(this.$timer_pulling_domain),this.$timer_pulling_domain=null,t(e)})}__snyc_domains(){}clearDoaminMarks(e){let t=this.domains[e];t&&t.map(t=>{console.log("MINGXI_DEBUG_LOG>>>>>>>>>clear kind",e),t.active=!1,t.used=!1})}availibleDomain(e,t){if(m.a.log("search availibleDomain kind",e,t),"query"==e&&localStorage.getItem("debug_ip")&&!t)return localStorage.getItem("debug_ip");try{let s=this.$domains[e],r=null,n=null;if(!s)return null;let o=s=>(s.used=!0,s.active=!0,m.a.log("[debug-domain]",`使用了一个${t?"新的":""}域名:`,e,s.url),s.url);for(let e of s){let{url:s,used:i,active:a}=e;t||n||(n=()=>(m.a.log("[debug-domain]","use back up",e.url),o(e))),(t?a||i:!a)?e.active=!1:r||(o(e),r=s)}return this.__snyc_domains(),m.a.log("found:",r),r||t||!n?r:n()}catch(e){}return null}};const E=r.remote.require("electron-updater").autoUpdater,g=r.remote.require("electron-log"),D=e=>document.getElementById(e);new class{constructor(){this.__bind(),this.state={version:r.remote.app.getVersion(),message:"",progress:null},h.domains=p.TEST||p.DEBUG?a.DOMAIN_LIST_DEFAULT_TEST:a.DOMAIN_LIST_DEFAULT,this.__setState(this.state),h.pull(()=>{this.__start_updater()})}__setStatus(e,t){let s;s=e==a.UPDATE.LASTEST?"已是最新版本。":e==a.UPDATE.AVAILABLE?"发现新版本":e==a.UPDATE.CHECKING?"正在检查新版本...":e==a.UPDATE.ERROR?`更新出错，错误信息:${t}`:e==a.UPDATE.DOWNLOADING?"正在下载新版本...":e==a.UPDATE.DOWNLOADED?"下载完成，请等待安装...":e==a.UPDATE.DOWNLOADING_UI?"正在下载基础包...":e==a.UPDATE.DOWNLOADED_UI?"下载完成，请等待解压...":"正在检查版本更新...",this.__setState({message:s,progress:t})}__bind(){D("closeBtn").onclick=function(){r.remote.getCurrentWindow().close()},D("restart-btn").onclick=function(){console.log("reclick"),r.remote.app.relaunch(),r.remote.app.exit(0)}}__do_update_bundle(e,t){g.error("开始下载框架包",e,t),c.call({method:"startDownloadTask",args:{pack:"classroom-ui",url:`${t}/${e.url}`,md5:e.md5,version:e.version,autoUnzip:!0,checksum:!0}}).then(e=>{let t=e.identity;c.delegate={[`${t}/progress`]:({total:e,transferred:t,percent:s})=>{this.__setStatus(a.UPDATE.DOWNLOADING,{percent:100*s>>0})},[`${t}/error`]:e=>{this.__setStatus(a.UPDATE.ERROR,e.message),g.error("下载工程框架出错",e)},[`${t}/success`]:e=>{this.__setStatus(a.UPDATE.DOWNLOADED_UI),this.__on_complete()}}}).catch(e=>{g.error("下载工程框架出错",e)})}__update_bundle(e){let t=h.availibleDomain("bundles",e);return t?(g.log("[debug-domain]","使用static域名",t),g.error("检测基础框架是否有更新",t),c.call({method:"isUpdateAvailable",args:{url:`${t}/app-yaduobao.json`,pack:"classroom-ui"}}).then(e=>{g.error("检测基础框架是否有更新成功",e),e.available?(this.__setStatus(a.UPDATE.DOWNLOADING_UI),this.__do_update_bundle(e.server,t)):(this.__setStatus(a.UPDATE.LASTEST),this.__on_complete())}).catch(e=>{g.error("检测基础框架是否有更新出错",e),this.__update_bundle(!0)||this.__setState({progress:null,error:e})}),!0):(g.log("[debug-domain]","没有可用的bundles域名",e),!1)}__start_updater(){E.logger=g,E.logger.transports.file.level="info",E.on("checking-for-update",()=>{this.__setStatus(a.UPDATE.CHECKING)}),E.on("update-available",()=>{this.__setStatus(a.UPDATE.AVAILABLE)}),E.on("update-not-available",()=>{g.log("[debug-domain]","热更新检测完成，无需更新"),this.__update_bundle()}),E.on("error",e=>{g.error("基础框架更新出错",e),g.log("检测是否有备用热更域名");let t=h.availibleDomain("software",!0);t?(g.log("[debug-domain]","正在尝试下一个热更新域名:",t),E.setFeedURL(t),E.checkForUpdates()):setTimeout(()=>{this.__update_bundle()},2e3)}),E.on("download-progress",e=>{this.__setStatus(a.UPDATE.DOWNLOADING,e)}),E.on("update-downloaded",()=>{this.__setStatus(a.UPDATE.DOWNLOADED),setTimeout(()=>{E.quitAndInstall()},2e3)}),E.checkForUpdates()}__setState(e={}){for(let t in e)this.state[t]=e[t];this.__render()}__on_complete(){r.ipcRenderer.send("render.complete"),c.call({method:"openMainWindow",args:{pack:"classroom-ui",data:{}}}).catch(e=>{g.error("开启主框架窗口出错",e),this.__setState({progress:null,error:e.message})})}__render(){this.state.progress?(D("progress").style.display="flex",D("percent").innerText=`${this.state.progress.percent>>0}%`,D("bar").style.width=`${this.state.progress.percent}%`):D("progress").style.display="none",this.state.error?(D("tips").innerText=`当前版本: ${this.state.version}, 更新出错：${this.state.error}`,D("restart-btn").style.display="flex"):(D("tips").innerText=`当前版本: ${this.state.version}${this.state.message?",":""} ${this.state.message}`,D("restart-btn").style.display="none")}}}]);