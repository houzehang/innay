module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s=21)}([function(e,t){e.exports=require("electron")},function(e,t){e.exports="undefined"==typeof process||!process||!!process.type&&"renderer"===process.type},function(e,t){e.exports=require("electron-log")},function(e,t){e.exports={TEST_URL:(()=>{try{return localStorage.getItem("debug_ip")||"http://kecheng1.youshiyuwen.cn"}catch(e){}})(),ONLINE_URL:"https://www.mingxiyuwen.com",TENCENT_APPID:1400098973,TENCENT_ACCOUNTTYPE:28218,VIDEO_T_QUALITY:"480P_3",VIDEO_S_QUALITY:"120P_3",MAIN_WINDOW_SIZE:{width:1070,height:590},ROOM_ID:111111,LARGE_MODE:480,DANCE_MODE:200,SMALL_MODE:88,WEB_IM_GROUP_TIP:{JOIN:1,QUIT:2,KICK:3,SET_ADMIN:4,CANCEL_ADMIN:5,MODIFY_GROUP_INFO:6,MODIFY_MEMBER_INFO:7},CELL_COUNT:4,LOGIN_E_NET:201,LOGOUT_E_KICKED:103,LOGOUT_E_NET:102,LOGOUT_SUCCESS:101,GENERAL_E_NOT_LOGIN:1003,JS_READY:"jsready",INIT_ROOM:"initroom",MEMBER_ADD:"member_add",MEMBER_LEAVE:"member_leave",CLEARLINES:"clearlines",NEXT_PAGE:"nextpage",SYNC:"sync",VIDEO_PLAY:"videoplay",VIDEO_STOP:"videostop",OPEN_RACE:"#openrace",CLOSE_RACE:"#closerace",OPEN_MIC:"#openmic",CLOSE_MIC:"#closemic",COURSE_PAUSE:"#coursepause",COURSE_RESUME:"#courseresume",PUT_DANCE:"#putdance",BACK_DANCE:"#backdance",SCENE_MOVE:"scenemove",START_COURSE:"*startcourse",STOP_COURSE:"*stopcourse",WARN:"warn",WARN_RELIEVE:"warn_relieve",ENABLE_MAGIC:"enablemagic",DISABLE_MAGIC:"disablemagic",MUTE_ALL:"#muteall",UNMUTE_ALL:"#unmuteall",SHOW_RANKS:"*showranks",HIDE_RANKS:"*hideranks",OPEN_MEDDLE:"open_meddle",UPDATE:{AVAILABLE:"update available",LASTEST:"the lastest version",CHECKING:"checking for update",ERROR:"update error",DOWNLOADING:"update downloading",DOWNLOADED:"update downloaded",DOWNLOADING_UI:"downloading ui",DOWNLOADED_UI:"downloaded ui"},COCOS:1,ILLEGAL_AUDIOS:["cyberlink webcam splitter","manycam virtual webcam","BBlivePreview","CamTwist","17GuaGua Cam","PixelMaster Video HDR","PG splitter","Built-in iSight","6room"],DOMAIN_URL:"https://mingxicn-test.oss-cn-beijing.aliyuncs.com/domain-yaduobao.json",DOMAIN_URL_TEST:"http://kechengassets.mx0a.com/steven.json",DOMAIN_LIST_DEFAULT:{frame:["https://bundlesyuntest.mx0a.com","https://mingxi-bundles-test.oss-cn-beijing.aliyuncs.com"],bundles:["https://bundlesyuntest.mx0a.com","https://mingxi-bundles-test.oss-cn-beijing.aliyuncs.com"]},DOMAIN_LIST_DEFAULT_TEST:{frame:["https://bundlesyuntest.mx0a.com","https://mingxi-bundles-test.oss-cn-beijing.aliyuncs.com"],bundles:["https://bundlesyuntest.mx0a.com","https://mingxi-bundles-test.oss-cn-beijing.aliyuncs.com"]},EBTN_STYLE_CONFIG:{kNormal:["ok","cancel"],kDeviceTest:["check-again","check-jump"],kChangePwd:["changepwd","none"],kClassExit:["leave-class","end-class"]},LINE_CONFIRM_TITLE:{lineTitle:["title-text"]}}},function(e,t){e.exports={DEBUG:!0,TC_DEBUG:!0,TEST:!1,TEACHER:!1}},function(e,t){e.exports=require("lowdb")},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=n(10),s=n(19),i=o.readFileSync,a=o.writeFileSync,c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s),r(t,[{key:"read",value:function(){if(!o.existsSync(this.source))return a(this.source,this.serialize(this.defaultValue)),this.defaultValue;try{var e=i(this.source,"utf-8").trim();return e?this.deserialize(e):this.defaultValue}catch(e){throw e instanceof SyntaxError&&(e.message=`Malformed JSON in file: ${this.source}\n${e.message}`),e}}},{key:"write",value:function(e){return a(this.source,this.serialize(e))}}]),t}();e.exports=c},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){var r=n(11),o=n(12),s=n(14),i=n(16),a=[],c=n(17);var u,l,d=function(){};function p(e){o(e),e.gracefulify=p,e.FileReadStream=d,e.FileWriteStream=_,e.createReadStream=function(e,t){return new d(e,t)},e.createWriteStream=function(e,t){return new _(e,t)};var t=e.readFile;e.readFile=function(e,n,r){"function"==typeof n&&(r=n,n=null);return function e(n,r,o){return t(n,r,function(t){!t||"EMFILE"!==t.code&&"ENFILE"!==t.code?("function"==typeof o&&o.apply(this,arguments),f()):h([e,[n,r,o]])})}(e,n,r)};var n=e.writeFile;e.writeFile=function(e,t,r,o){"function"==typeof r&&(o=r,r=null);return function e(t,r,o,s){return n(t,r,o,function(n){!n||"EMFILE"!==n.code&&"ENFILE"!==n.code?("function"==typeof s&&s.apply(this,arguments),f()):h([e,[t,r,o,s]])})}(e,t,r,o)};var r=e.appendFile;r&&(e.appendFile=function(e,t,n,o){"function"==typeof n&&(o=n,n=null);return function e(t,n,o,s){return r(t,n,o,function(r){!r||"EMFILE"!==r.code&&"ENFILE"!==r.code?("function"==typeof s&&s.apply(this,arguments),f()):h([e,[t,n,o,s]])})}(e,t,n,o)});var i=e.readdir;function a(t){return i.apply(e,t)}if(e.readdir=function(e,t,n){var r=[e];"function"!=typeof t?r.push(t):n=t;return r.push(function(e,t){t&&t.sort&&t.sort(),!e||"EMFILE"!==e.code&&"ENFILE"!==e.code?("function"==typeof n&&n.apply(this,arguments),f()):h([a,[r]])}),a(r)},"v0.8"===process.version.substr(0,4)){var c=s(e);d=c.ReadStream,_=c.WriteStream}var u=e.ReadStream;u&&(d.prototype=Object.create(u.prototype),d.prototype.open=function(){var e=this;E(e.path,e.flags,e.mode,function(t,n){t?(e.autoClose&&e.destroy(),e.emit("error",t)):(e.fd=n,e.emit("open",n),e.read())})});var l=e.WriteStream;function d(e,t){return this instanceof d?(u.apply(this,arguments),this):d.apply(Object.create(d.prototype),arguments)}function _(e,t){return this instanceof _?(l.apply(this,arguments),this):_.apply(Object.create(_.prototype),arguments)}l&&(_.prototype=Object.create(l.prototype),_.prototype.open=function(){var e=this;E(e.path,e.flags,e.mode,function(t,n){t?(e.destroy(),e.emit("error",t)):(e.fd=n,e.emit("open",n))})}),e.ReadStream=d,e.WriteStream=_;var m=e.open;function E(e,t,n,r){return"function"==typeof n&&(r=n,n=null),function e(t,n,r,o){return m(t,n,r,function(s,i){!s||"EMFILE"!==s.code&&"ENFILE"!==s.code?("function"==typeof o&&o.apply(this,arguments),f()):h([e,[t,n,r,o]])})}(e,t,n,r)}return e.open=E,e}function h(e){d("ENQUEUE",e[0].name,e[1]),a.push(e)}function f(){var e=a.shift();e&&(d("RETRY",e[0].name,e[1]),e[0].apply(null,e[1]))}c.debuglog?d=c.debuglog("gfs4"):/\bgfs4\b/i.test(process.env.NODE_DEBUG||"")&&(d=function(){var e=c.format.apply(c,arguments);e="GFS4: "+e.split(/\n/).join("\nGFS4: "),console.error(e)}),/\bgfs4\b/i.test(process.env.NODE_DEBUG||"")&&process.on("exit",function(){d(a),n(18).equal(a.length,0)}),e.exports=p(i(r)),process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH&&!r.__patched&&(e.exports=p(r),r.__patched=!0),e.exports.close=(u=r.close,function(e,t){return u.call(r,e,function(e){e||f(),"function"==typeof t&&t.apply(this,arguments)})}),e.exports.closeSync=(l=r.closeSync,function(e){var t=l.apply(r,arguments);return f(),t}),/\bgraceful-fs\b/.test(r.closeSync.toString())||(r.closeSync=e.exports.closeSync,r.close=e.exports.close)},function(e,t){e.exports=require("fs")},function(e,t,n){var r=n(13),o=process.cwd,s=null,i=process.env.GRACEFUL_FS_PLATFORM||process.platform;process.cwd=function(){return s||(s=o.call(process)),s};try{process.cwd()}catch(e){}var a=process.chdir;process.chdir=function(e){s=null,a.call(process,e)},e.exports=function(e){r.hasOwnProperty("O_SYMLINK")&&process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)&&function(e){e.lchmod=function(t,n,o){e.open(t,r.O_WRONLY|r.O_SYMLINK,n,function(t,r){t?o&&o(t):e.fchmod(r,n,function(t){e.close(r,function(e){o&&o(t||e)})})})},e.lchmodSync=function(t,n){var o,s=e.openSync(t,r.O_WRONLY|r.O_SYMLINK,n),i=!0;try{o=e.fchmodSync(s,n),i=!1}finally{if(i)try{e.closeSync(s)}catch(e){}else e.closeSync(s)}return o}}(e);e.lutimes||function(e){r.hasOwnProperty("O_SYMLINK")?(e.lutimes=function(t,n,o,s){e.open(t,r.O_SYMLINK,function(t,r){t?s&&s(t):e.futimes(r,n,o,function(t){e.close(r,function(e){s&&s(t||e)})})})},e.lutimesSync=function(t,n,o){var s,i=e.openSync(t,r.O_SYMLINK),a=!0;try{s=e.futimesSync(i,n,o),a=!1}finally{if(a)try{e.closeSync(i)}catch(e){}else e.closeSync(i)}return s}):(e.lutimes=function(e,t,n,r){r&&process.nextTick(r)},e.lutimesSync=function(){})}(e);e.chown=s(e.chown),e.fchown=s(e.fchown),e.lchown=s(e.lchown),e.chmod=n(e.chmod),e.fchmod=n(e.fchmod),e.lchmod=n(e.lchmod),e.chownSync=a(e.chownSync),e.fchownSync=a(e.fchownSync),e.lchownSync=a(e.lchownSync),e.chmodSync=o(e.chmodSync),e.fchmodSync=o(e.fchmodSync),e.lchmodSync=o(e.lchmodSync),e.stat=c(e.stat),e.fstat=c(e.fstat),e.lstat=c(e.lstat),e.statSync=u(e.statSync),e.fstatSync=u(e.fstatSync),e.lstatSync=u(e.lstatSync),e.lchmod||(e.lchmod=function(e,t,n){n&&process.nextTick(n)},e.lchmodSync=function(){});e.lchown||(e.lchown=function(e,t,n,r){r&&process.nextTick(r)},e.lchownSync=function(){});"win32"===i&&(e.rename=(t=e.rename,function(n,r,o){var s=Date.now(),i=0;t(n,r,function a(c){if(c&&("EACCES"===c.code||"EPERM"===c.code)&&Date.now()-s<6e4)return setTimeout(function(){e.stat(r,function(e,s){e&&"ENOENT"===e.code?t(n,r,a):o(c)})},i),void(i<100&&(i+=10));o&&o(c)})}));var t;function n(t){return t?function(n,r,o){return t.call(e,n,r,function(e){l(e)&&(e=null),o&&o.apply(this,arguments)})}:t}function o(t){return t?function(n,r){try{return t.call(e,n,r)}catch(e){if(!l(e))throw e}}:t}function s(t){return t?function(n,r,o,s){return t.call(e,n,r,o,function(e){l(e)&&(e=null),s&&s.apply(this,arguments)})}:t}function a(t){return t?function(n,r,o){try{return t.call(e,n,r,o)}catch(e){if(!l(e))throw e}}:t}function c(t){return t?function(n,r){return t.call(e,n,function(e,t){if(!t)return r.apply(this,arguments);t.uid<0&&(t.uid+=4294967296),t.gid<0&&(t.gid+=4294967296),r&&r.apply(this,arguments)})}:t}function u(t){return t?function(n){var r=t.call(e,n);return r.uid<0&&(r.uid+=4294967296),r.gid<0&&(r.gid+=4294967296),r}:t}function l(e){if(!e)return!0;if("ENOSYS"===e.code)return!0;var t=!process.getuid||0!==process.getuid();return!(!t||"EINVAL"!==e.code&&"EPERM"!==e.code)}e.read=(p=e.read,function(t,n,r,o,s,i){var a;if(i&&"function"==typeof i){var c=0;a=function(u,l,d){if(u&&"EAGAIN"===u.code&&c<10)return c++,p.call(e,t,n,r,o,s,a);i.apply(this,arguments)}}return p.call(e,t,n,r,o,s,a)}),e.readSync=(d=e.readSync,function(t,n,r,o,s){for(var i=0;;)try{return d.call(e,t,n,r,o,s)}catch(e){if("EAGAIN"===e.code&&i<10){i++;continue}throw e}});var d;var p}},function(e,t){e.exports=require("constants")},function(e,t,n){var r=n(15).Stream;e.exports=function(e){return{ReadStream:function t(n,o){if(!(this instanceof t))return new t(n,o);r.call(this);var s=this;this.path=n;this.fd=null;this.readable=!0;this.paused=!1;this.flags="r";this.mode=438;this.bufferSize=65536;o=o||{};var i=Object.keys(o);for(var a=0,c=i.length;a<c;a++){var u=i[a];this[u]=o[u]}this.encoding&&this.setEncoding(this.encoding);if(void 0!==this.start){if("number"!=typeof this.start)throw TypeError("start must be a Number");if(void 0===this.end)this.end=1/0;else if("number"!=typeof this.end)throw TypeError("end must be a Number");if(this.start>this.end)throw new Error("start must be <= end");this.pos=this.start}if(null!==this.fd)return void process.nextTick(function(){s._read()});e.open(this.path,this.flags,this.mode,function(e,t){if(e)return s.emit("error",e),void(s.readable=!1);s.fd=t,s.emit("open",t),s._read()})},WriteStream:function t(n,o){if(!(this instanceof t))return new t(n,o);r.call(this);this.path=n;this.fd=null;this.writable=!0;this.flags="w";this.encoding="binary";this.mode=438;this.bytesWritten=0;o=o||{};var s=Object.keys(o);for(var i=0,a=s.length;i<a;i++){var c=s[i];this[c]=o[c]}if(void 0!==this.start){if("number"!=typeof this.start)throw TypeError("start must be a Number");if(this.start<0)throw new Error("start must be >= zero");this.pos=this.start}this.busy=!1;this._queue=[];null===this.fd&&(this._open=e.open,this._queue.push([this._open,this.path,this.flags,this.mode,void 0]),this.flush())}}}},function(e,t){e.exports=require("stream")},function(e,t,n){"use strict";e.exports=function(e){if(null===e||"object"!=typeof e)return e;if(e instanceof Object)var t={__proto__:e.__proto__};else var t=Object.create(null);return Object.getOwnPropertyNames(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}),t}},function(e,t){e.exports=require("util")},function(e,t){e.exports=require("assert")},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(20);e.exports=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=n.defaultValue,i=void 0===s?{}:s,a=n.serialize,c=void 0===a?o:a,u=n.deserialize,l=void 0===u?JSON.parse:u;r(this,e),this.source=t,this.defaultValue=i,this.serialize=c,this.deserialize=l}},function(e,t,n){"use strict";e.exports=function(e){return JSON.stringify(e,null,2)}},function(e,t,n){"use strict";n.r(t);n(7),n(8),n(9);var r=n(0),o=n.n(r),s=n(3),i=n.n(s),a=i.a,c=n(1),u=n.n(c);const l="MESSAGE_RPC_BRIDGE";var d=new class{constructor(){this.$uuid=0,this.$handlers={},this.$sender_pool={},this.$delegate={},u.a?(this.$sender=o.a.ipcRenderer,this.$receiver=o.a.ipcRenderer):this.$receiver=o.a.ipcMain,this.__bind()}__bind(){this.$receiver.on(l,(e,t)=>{if(!u.a){let n=e.sender.getOwnerBrowserWindow();n&&"id"in t&&(this.$sender_pool[t.id]=n)}this.__received(t)})}__send(e){let t=this.$sender;!t&&"id"in e&&(t=this.$sender_pool[e.id]),t?t.send(l,e):console.error("no sender for message",e)}__received(e){if("error"in e||"result"in e){const t=e.id,n=this.$handlers[t];if(n){try{n(e.error,e.result)}catch(e){console.error("call message handler error",e)}delete this.$handlers[t],delete this.$sender_pool[t]}else console.error("no callback handler for message",t)}else if("method"in e){let t=this.$delegate[e.method],n=e.id;if(!t)return void this.__send({id:n,error:`no method named ${e.method}`});let r=this.$sender||this.$sender_pool[n];Promise.resolve(t(e.args,r)).then((t=null)=>{e.id&&this.__send({id:n,result:t})}).catch(e=>{this.__send({id:n,error:e.message})})}}set delegate(e){for(let t in e)this.$delegate[t]=e[t]}removeDelegate(e){delete this.$delegate[e]}call({method:e,args:t,sender:n}){if(u.a||n)return new Promise((r,o)=>{let s=(u.a?"R":"M")+ ++this.$uuid;this.$handlers[s]=(e,t)=>{e?o(e):r(t)},u.a||(this.$sender_pool[s]=n),this.__send({id:s,method:e,args:t})});console.error("call from main process must set sender")}},p=n(5),h=n.n(p),f=n(6),_=n.n(f);const m="MINGXI-INC";var E=new class{constructor(){let e;e=u.a?r.remote.app:r.app;const t=new _.a(`${e.getPath("userData")}/db.json`);this.$db=h()(t)}get(e){let t=this.$db.get(m).cloneDeep().value();if(t)return t[e]}store(e,t){let n=this.$db.get(m).value()||{};n[e]=t,this.$db.set(m,{...n}).write()}remove(e){let t=this.$db.get(m).value();t&&t[e]&&(delete t[e],this.$db.set(m,{...t}).write())}clear(){this.$db.unset(m).write()}update(){this.$db.read()}},y=n(2),g=n.n(y),S=n(4);var O=new class{constructor(){E.update(),this.$domains=JSON.parse(E.get("DOMAINS")||"{}"),this.$types={}}get types(){return this.$types}get domains(){return this.$domains}set domains(e){this.$domains=e}pull(e){let t=t=>{if(console.log("MINGXI_DEBUG_LOG>>>>>>>>>domains",t),t){let e={};for(const n in t){let r=t[n]||[];e[n]=r.map(e=>({url:e}))}console.log("MINGXI_DEBUG_LOG>>>>>>>>>result",e),this.$domains=e,this.__snyc_domains()}e()};this.$timer_pulling_domain=setTimeout(()=>{clearTimeout(this.$timer_pulling_domain),this.$timer_pulling_domain=null,t()},5e3),d.call({method:"getDomains",args:{url:i.a.DOMAIN_URL}}).then(e=>{clearTimeout(this.$timer_pulling_domain),this.$timer_pulling_domain=null,t(e)})}__snyc_domains(){E.store("DOMAINS",JSON.stringify(this.$domains))}clearDoaminMarks(e){let t=this.domains[e];t&&t.map(t=>{console.log("MINGXI_DEBUG_LOG>>>>>>>>>clear kind",e),t.active=!1,t.used=!1})}availibleDomain(e,t){if(g.a.log("search availibleDomain kind",e,t),"query"==e&&localStorage.getItem("debug_ip")&&!t)return localStorage.getItem("debug_ip");try{let n=this.$domains[e],r=null,o=null;if(!n)return null;let s=n=>(n.used=!0,n.active=!0,g.a.log("[debug-domain]",`使用了一个${t?"新的":""}域名:`,e,n.url),n.url);for(let e of n){let{url:n,used:i,active:a}=e;t||o||(o=()=>(g.a.log("[debug-domain]","use back up",e.url),s(e))),(t?a||i:!a)?e.active=!1:r||(s(e),r=n)}return this.__snyc_domains(),g.a.log("found:",r),r||t||!o?r:o()}catch(e){}return null}};const b=r.remote.require("electron-updater").autoUpdater,v=r.remote.require("electron-log"),D=e=>document.getElementById(e);new class{constructor(){this.__bind(),this.state={version:r.remote.app.getVersion(),message:"",progress:null},O.domains=S.TEST||S.DEBUG?a.DOMAIN_LIST_DEFAULT_TEST:a.DOMAIN_LIST_DEFAULT,this.__setState(this.state),O.pull(()=>{this.__start_updater()})}__setStatus(e,t){let n;n=e==a.UPDATE.LASTEST?"已是最新版本。":e==a.UPDATE.AVAILABLE?"发现新版本。":e==a.UPDATE.CHECKING?"正在检查新版本...":e==a.UPDATE.ERROR?`更新出错，错误信息:${t}`:e==a.UPDATE.DOWNLOADING?"正在下载新版本...":e==a.UPDATE.DOWNLOADED?"下载完成，请等待安装...":e==a.UPDATE.DOWNLOADING_UI?"正在下载基础包...":e==a.UPDATE.DOWNLOADED_UI?"下载完成，请等待解压...":"正在检查版本更新...",this.__setState({message:n,progress:t})}__bind(){D("closeBtn").onclick=function(){r.remote.getCurrentWindow().close()},D("restart-btn").onclick=function(){console.log("reclick"),r.remote.app.relaunch(),r.remote.app.exit(0)}}__do_update_bundle(e,t){v.error("开始下载框架包",e,t),d.call({method:"startDownloadTask",args:{pack:"classroom-ui",url:`${t}/${e.url}`,md5:e.md5,version:e.version,autoUnzip:!0,checksum:!0}}).then(e=>{let t=e.identity;d.delegate={[`${t}/progress`]:({total:e,transferred:t,percent:n})=>{this.__setStatus(a.UPDATE.DOWNLOADING,{percent:100*n>>0})},[`${t}/error`]:e=>{this.__setStatus(a.UPDATE.ERROR,e.message),v.error("下载工程框架出错",e)},[`${t}/success`]:e=>{this.__setStatus(a.UPDATE.DOWNLOADED_UI),this.__on_complete()}}}).catch(e=>{v.error("下载工程框架出错",e)})}__update_bundle(e){let t=O.availibleDomain("bundles",e);return t?(v.log("[debug-domain]","使用static域名",t),v.error("检测基础框架是否有更新",t),d.call({method:"isUpdateAvailable",args:{url:`${t}/app-yaduobao.json`,pack:"classroom-ui"}}).then(e=>{v.error("检测基础框架是否有更新成功",e),e.available?(this.__setStatus(a.UPDATE.DOWNLOADING_UI),this.__do_update_bundle(e.server,t)):(this.__setStatus(a.UPDATE.LASTEST),this.__on_complete())}).catch(e=>{v.error("检测基础框架是否有更新出错",e),this.__update_bundle(!0)||this.__setState({progress:null,error:e})}),!0):(v.log("[debug-domain]","没有可用的bundles域名",e),!1)}__start_updater(){b.logger=v,b.logger.transports.file.level="info",b.on("checking-for-update",()=>{this.__setStatus(a.UPDATE.CHECKING)}),b.on("update-available",()=>{this.__setStatus(a.UPDATE.AVAILABLE)}),b.on("update-not-available",()=>{v.log("[debug-domain]","热更新检测完成，无需更新"),this.__update_bundle()}),b.on("error",e=>{v.error("基础框架更新出错",e),v.log("检测是否有备用热更域名");let t=O.availibleDomain("software",!0);t?(v.log("[debug-domain]","正在尝试下一个热更新域名:",t),b.setFeedURL(t),b.checkForUpdates()):setTimeout(()=>{this.__update_bundle()},2e3)}),b.on("download-progress",e=>{this.__setStatus(a.UPDATE.DOWNLOADING,e)}),b.on("update-downloaded",()=>{this.__setStatus(a.UPDATE.DOWNLOADED),setTimeout(()=>{b.quitAndInstall()},2e3)}),b.checkForUpdates()}__setState(e={}){for(let t in e)this.state[t]=e[t];this.__render()}__on_complete(){r.ipcRenderer.send("render.complete"),d.call({method:"openMainWindow",args:{pack:"classroom-ui",data:{}}}).catch(e=>{v.error("开启主框架窗口出错",e),this.__setState({progress:null,error:e.message})})}__render(){this.state.progress?(D("progress").style.display="flex",D("percent").innerText=`${this.state.progress.percent>>0}%`,D("bar").style.width=`${this.state.progress.percent}%`):D("progress").style.display="none",this.state.error?(D("tips").innerText=`当前版本: ${this.state.version}, 更新出错：${this.state.error}`,D("restart-btn").style.display="flex"):(D("tips").innerText=`当前版本: ${this.state.version}${this.state.message?",":""} ${this.state.message}`,D("restart-btn").style.display="none")}}}]);