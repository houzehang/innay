!function(e){function t(t){for(var o,a,r=t[0],l=t[1],d=t[2],u=0,h=[];u<r.length;u++)a=r[u],i[a]&&h.push(i[a][0]),i[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(c&&c(t);h.length;)h.shift()();return n.push.apply(n,d||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],o=!0,r=1;r<s.length;r++){var l=s[r];0!==i[l]&&(o=!1)}o&&(n.splice(t--,1),e=a(a.s=s[0]))}return e}var o={},i={0:0},n=[];function a(t){if(o[t])return o[t].exports;var s=o[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=o,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(s,o,function(t){return e[t]}.bind(null,o));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="./";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var c=l;n.push([174,1]),s()}({1:function(e,t){e.exports=require("electron")},104:function(e,t){e.exports=require("constants")},106:function(e,t){e.exports=require("stream")},108:function(e,t){e.exports=require("util")},109:function(e,t){e.exports=require("assert")},122:function(e,t){e.exports=require("buffer")},13:function(e,t){e.exports=require("path")},138:function(e,t){},139:function(e,t){},157:function(e,t){},158:function(e,t){},161:function(e,t){e.exports=require("zlib")},172:function(e,t){e.exports=require("querystring")},174:function(e,t,s){"use strict";s.r(t);s(11),s(86),s(87),s(88),s(89);var o=s(2),i=s.n(o),n=s(52),a=s(4),r=s(10);var l=(e={type:"alert",configure:{content:""}},t)=>{switch(t.type){case"SHOW_ALERT":return{...e,type:"alert",configure:t.configure,showing:!0};case"SHOW_CONFIRM":return{...e,type:"confirm",configure:t.configure,showing:!0};case"HIDE_DIALOG":return{...e,showing:!1};default:return e}};var d=(e={},t)=>{switch(t.type){case"LOGIN_SUCCESS":return{...e,account:t.account};case"LOGOUT":return{...e,account:null};case"CHANGE_USER_INFO":return{...e,account:t.user};default:return e}};var c=(e={},t)=>{switch(t.type){case"ROOM_LIST":return{...e,rooms:t.rooms};case"ROOM_INFO":return{...e,room:t.data};case"CALENDAR_DATA":return{...e,calendar:t.data};case"START_COURSE":return{...e,courseStarted:!0};case"COURSE_END":return{...e,courseStarted:!1};case"ENTER_TESTER":return{...e,courseStarted:!1,enterTester:!0,fromPage:t.page};case"ENTER_MY_COURSES":return{...e,enterMyCourses:!0};case"EXIT_MY_COURSES":return{...e,enterMyCourses:!1};case"EXIT_TESTER":let s=e.fromPage;return{...e,enterTester:!1,courseStarted:"course"==s};case"NET_STATUS_BAD":return{...e,netStatus:0};case"NET_STATUS_GOOD":return{...e,netStatus:1};case"COURSE_RECORDING":return{...e,recording:t.status,flow:t.camp};case"LESSON_COMMING":return{...e,commingRoom:t.commingRoom};case"CAMP_LESSON":return{...e,campRoom:t.campRoom};case"LESSONS_COMMING":return console.log("LESSONS_COMMING action.commingRooms",t.commingRooms),{...e,commingRooms:t.commingRooms};case"LESSONS_DONE":return console.log("LESSONS_DONE action.doneRooms",t.doneRooms),{...e,doneRooms:t.doneRooms};case"LESSONS_TOTAL_COMMING":return{...e,totalComming:t.totalComming};case"LESSONS_TOTAL_DONE":return{...e,totalDone:t.totalDone};case"CHANGE_PASSWORD":return console.log("MINGXI=============action.changePwd",t.changePwd,t.fromViewUser),{...e,changePwd:t.changePwd,fromViewUser:t.fromViewUser};case"SHOW_GLOBAL_MSG":return{...e,globalMsg:t.globalMsg};default:return e}};var u=new class{constructor(e="MINGXI.INC"){if(this.$namespace=e,this.$data=localStorage.getItem(this.$namespace),console.log("namespace...",e,this.$data),this.$data)try{this.$data=JSON.parse(this.$data)}catch(e){this.$data={},localStorage.removeItem(this.$namespace)}else this.$data={}}get(e){return this.$data[e]}store(e,t){this.$data[e]=t,localStorage.setItem(this.$namespace,JSON.stringify(this.$data))}clear(){localStorage.removeItem(this.$namespace)}};var h=(e={},t)=>{let s,o,i,n;switch(t.type){case"ROOM_INFO":let a=t.data,r={child_name:a.teacher_name,avatarurl:a.teacher_avatar,id:a.teacher_id};if(!a.camp){let e=a.start_time.split(/[-: ]/),s=new Date(e[0],e[1]-1,e[2]||1,e[3]||0,e[4]||0,e[5]||0).getTime()-Date.now(),o=u.get("STATUS_"+a.channel_id);(n=(n=o||{duration:t.data.duration,waiting:s,id:a.channel_id})||{}).waiting=s}return{...e,info:t.data,switches:{gift:!0,muteall:!0},dancing:[],status:n,teacher:r};case"ROOM_GIFT":return{...e,gifts:t.data};case"ROOM_MORE_INFO":let l={...e.info};return l.channel_token=t.data.channel_token,l.features=t.data.features,console.log(t.data.students,"action.data.students"),{...e,info:l,students:t.data.students};case"NEW_GIFT":let d=t.data;for(let t=0,s=(i=[...e.students]).length;t<s;t++){let e=i[t];e.id==d.uid&&(e.gift_total=d.total)}return{...e,students:i};case"WARN":let c=t.data;for(let s=0,o=(i=[...e.students]).length;s<o;s++){let e=i[s];e.id==c.uid?e.warn=t.status:e.warn=!1}return{...e,students:i};case"USER_MUTED":if(i=[...e.students])for(let e=0,s=i.length;e<s;e++){let s=i[e];s.id==t.id&&(s.unmuted=!t.mute,s.unmuted&&!t.recovering&&s.speak++)}return{...e,students:i};case"USER_ADD_ROOM":if(r={...e.teacher},t.id==r.id)return r.online=!0,{...e,teacher:r};for(let s=0,o=(i=[...e.students]).length;s<o;s++){let e=i[s];if(e.id==t.id){e.online=!0,e.online_time=(new Date).getTime();break}}return{...e,students:i};case"NEW_STREAM":if((s=t.stream.getId())==(r={...e.teacher}).id)return r.stream=t.stream,r.online=!0,r.stream_inited=!1,{...e,teacher:r};for(let s=0,o=(i=[...e.students]).length;s<o;s++){let e=i[s];e.id==t.stream.getId()&&(e.stream=t.stream,e.online=!0,e.online_time||(e.online_time=(new Date).getTime()),e.stream_inited=!1)}return{...e,students:i};case"STREAM_LEAVE":if((s=t.stream.getId())==(r={...e.teacher}).id)return r.stream=null,r.online=!1,r.stream_inited=!1,{...e,teacher:r};for(let t=0,o=(i=[...e.students]).length;t<o;t++){let e=i[t];e.id==s&&(e.stream=null,e.online_time=null,e.online=!1,e.dancing=!1,e.stream_inited=!1)}return{...e,students:i};case"HANDSUP_SWITCH":if((o={...e.switches}).handsup=t.status,e.students=e.students||[],i=[...e.students])for(let e=0,t=i.length;e<t;e++)i[e].rank=null;return{...e,switches:o,students:i};case"GIFT_SWITCH":return(o={...e.switches}).gift=t.status,{...e,switches:o};case"MAGIC_SWITCH":return(o={...e.switches}).magic=t.status,{...e,switches:o};case"MUTEALL_SWITCH":if(o={...e.switches},i=[...e.students])for(let e=0,s=i.length;e<s;e++)i[e].unmuted=!t.status;return o.muteall=t.status,{...e,students:i,switches:o};case"RANK_SWITCH":return(o={...e.switches}).rank=t.status,{...e,switches:o};case"SILENT_SWITCH":return(o={...e.switches}).silent=t.status,{...e,switches:o};case"HANDSUP_RANK":if(i=[...e.students])for(let e=0,s=i.length;e<s;e++){let s=i[e];if(s.id==t.id){s.rank=t.rank,s.handsup++;break}}return{...e,students:i};case"DANCING":if(i=[...e.students])for(let e=0,s=i.length;e<s;e++){let s=i[e];s.id==t.id?s.dancing=t.status:s.dancing=!1}return{...e,students:i};case"COURSE_BEGIN":return(n={...e.status}).started=!0,u.store("STATUS_"+n.id,n),{...e,status:n};case"COURSE_PAUSE":return(n={...e.status}).paused=!0,u.store("STATUS_"+n.id,n),{...e,status:n};case"COURSE_RESUME":return(n={...e.status}).paused=!1,u.store("STATUS_"+n.id,n),{...e,status:n};case"COURSE_END":return(n={...e.status}).started=!1,n.paused=!1,u.store("STATUS_"+n.id,n),{...e,status:n};case"COURSE_TICK":return(n={...e.status}).started&&!n.paused?(n.duration--,u.store("STATUS_"+n.id,n),{...e,status:n}):e;case"COURSE_STARTING_TICK":return(n={...e.status}).waiting-=1e3,{...e,status:n};case"GIFT_UPDATE":i=[...e.students];let h=t.data;if(i)for(let e=0,t=i.length;e<t;e++){let t=i[e];for(let e=0,s=h.length;e<s;e++){let s=h[e];if(s.to_id==t.id){t.gift_total=s.total;break}}}return{...e,students:i};case"PROGRESS_UPDATE":i=[...e.students];let p=t.percent,_=t.id;if(i)if(100==p){let e=null,t=1;for(let s=0,o=i.length;s<o;s++){let o=i[s];o.id==_?(o.percent=p,e=o):o.progress_rank&&t++}e&&(e.progress_rank=t)}else for(let e=0,t=i.length;e<t;e++){let t=i[e];if(t.id==_){t.percent=p;break}}return{...e,students:i};case"PROGRESS_RESET":if(i=[...e.students])for(let e=0,t=i.length;e<t;e++){let t=i[e];t.progress_rank=null,t.percent=null}return{...e,students:i};case"QUESTION_LIST":return(o={...e.switches}).questionList=t.status,{...e,switches:o};case"QUESTION_DETAIL":return(o={...e.switches}).questionDetail=t.status,{...e,switches:o};default:return e}};var p=(e={type:"toast",configure:{content:""}},t)=>{switch(t.type){case"SHOW_TOAST":return{...e,type:"toast",configure:t.configure,showing:!0};case"HIDE_DIALOG":return{...e,showing:!1};default:return e}},_=Object(r.c)({dialog:l,login:d,main:c,room:h,toast:p}),m=s(177),g=s(178),f=s(23),v=s.n(f);var E=new class{constructor(){this.$inited=!1}__init(){this.$dom=v()('<div class="loading-mask"><div class="loading-close"></div><div class="loading-text"></div></div>'),this.$dom.hide().appendTo("body"),this.$inited=!0,v()(this.$dom).on("click",".loading-close",()=>{this.hide()})}show(e=""){this.$inited||this.__init(),v()(".loading-text",this.$dom).html(e),this.$dom.fadeIn()}hide(){this.$dom&&this.$dom.fadeOut()}};const S=e=>({type:"SHOW_CONFIRM",configure:e}),N=()=>e=>{let t=u.get("USER_INFO");t&&e(w(t))},w=e=>t=>{u.store("USER_INFO",e),t({type:"LOGIN_SUCCESS",account:e})},y=e=>({type:"SHOW_GLOBAL_MSG",globalMsg:e});var b;var O,T=Object(a.b)((e,t)=>({globalMsg:e.main.globalMsg}),(e,t)=>({onShowGlobalMsg:t=>{e(y(t))}}))(class extends i.a.Component{constructor(e){super(e)}componentDidMount(){}componentWillUnmount(){}render(){return this.props.globalMsg?function(e,t,s,o){b||(b="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,n=arguments.length-3;if(t||0===n||(t={children:void 0}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===n)t.children=o;else if(n>1){for(var r=new Array(n),l=0;l<n;l++)r[l]=arguments[l+3];t.children=r}return{$$typeof:b,type:e,key:void 0===s?null:""+s,ref:null,props:t,_owner:null}}("div",{className:"global-msg-pannel"},void 0,"【系统提示】"+this.props.globalMsg):""}}),I=(s(98),s(0),s(1)),C=s.n(I),D=s(55),$=s.n(D).a;function A(e,t,s,o){O||(O="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,n=arguments.length-3;if(t||0===n||(t={children:void 0}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===n)t.children=o;else if(n>1){for(var r=new Array(n),l=0;l<n;l++)r[l]=arguments[l+3];t.children=r}return{$$typeof:O,type:e,key:void 0===s?null:""+s,ref:null,props:t,_owner:null}}var M=Object(a.b)((e,t)=>({showing:e.toast.showing}),(e,t)=>({dispatchHide:()=>{e({type:"HIDE_DIALOG"})}}))(class extends i.a.Component{constructor(e){super(e),I.ipcRenderer.on("hotkey",(e,t)=>{this.onHotKey&&"function"==typeof this.onHotKey&&this.onHotKey(t)})}componentDidMount(){let e=setTimeout(()=>{this.props.dispatchHide(),clearTimeout(e)},3e3)}render(){const{type:e,configure:t}=this.props.data;return A("div",{className:"toast-box"},void 0,A("div",{className:"toast"},void 0,A("p",{},void 0,t.content)))}componentWillUnmount(){}}),R=s(56),L=s.n(R),k=s(57),U=s.n(k),P=s(58),G=s.n(P);const F="MINGXI-INC";var x=new class{constructor(){let e;e=G.a?I.remote.app:I.app;const t=new U.a(`${e.getPath("userData")}/db.json`);this.$db=L()(t)}get(e){let t=this.$db.get(F).cloneDeep().value();if(t)return t[e]}store(e,t){let s=this.$db.get(F).value()||{};s[e]=t,this.$db.set(F,{...s}).write()}remove(e){let t=this.$db.get(F).value();t&&t[e]&&(delete t[e],this.$db.set(F,{...t}).write())}clear(){this.$db.unset(F).write()}update(){this.$db.read()}},j=s(13),H=s.n(j),B=s(9),W=s.n(B),K=s(59),V=s.n(K).a;const q=I.remote.require("pandora-nodejs-sdk"),Y=I.remote.require("electron-log"),z=I.remote.app.getPath("userData");var X,J=new class{get agoraAppId(){let e=window.ENV_CONF||{};return e.TEST||e.DEBUG?"8255568bc0ab4117bce79c6ca65e1c99":"d75fe75ab0404a90b2ed7e5bab216f80"}get agoraChannelKey(){let e=window.ENV_CONF||{};return e.TEST||e.DEBUG?"83dfd49b300c4c1d8af4a5ff68c12214":"7c9b6ed9bba54dc59471cfa09e9f23ea"}get dmg(){return this.$dmg}set dmg(e){this.$dmg=e}get user(){return this.$user||{}}set user(e){this.$user=e}get loading(){return this.$loading}set loading(e){this.$loading=e}get detector(){return this.$detector}set detector(e){this.$detector=e}get course(){return this.$course}set course(e){this.$course=e}get room(){return this.$room}set room(e){this.$room=e}get session(){return this.$session}set session(e){this.$session=e}get storage(){return this.$storage||(this.$storage=u),this.$storage}set storage(e){this.$storage=e}set usingBackupUrl(e){this.$using_backup_url=e}get usingBackupUrl(){return this.$using_backup_url}get video_device_id(){return this.$video_device_id}set video_device_id(e){this.$video_device_id=e}get audio_device_id(){return this.$audio_device_id}set audio_device_id(e){this.$audio_device_id=e}get domains(){return this.$domains||V.DOMAIN_LIST_DEFAULT}set domains(e){this.$domains=e}set distPath(e){this.$dist_path=e}get distPath(){return this.$dist_path}addDownloaded(e,t){this.$local_files||(this.$local_files={}),this.$local_files[e]=t}getDownloaded(e){if(this.$local_files)return this.$local_files[e]}send_to_main(e){console.log("send_to_main",I.ipcRenderer,e),I.ipcRenderer.send(...e)}restoreOldDevice(){localStorage.getItem("IS_OLD_DEVICE")&&(console.log("copy low version old device"),x.store("IS_OLD_DEVICE",1))}set oldDevice(e){x.store("IS_OLD_DEVICE",1&e)}set joinClassEnabled(e){this.$join_class_enabled=!!e}get joinClassEnabled(){return void 0===this.$join_class_enabled||this.$join_class_enabled}get(e,t=document){return"object"==typeof e?e:(t&&"string"==typeof t&&(t=this.get(t)),/^\./.test(e)?t.getElementsByClassName(e.replace(/^\./,"")):(/^#/.test(e)&&(e=e.replace(/^#/,"")),document.getElementById(e)))}offset(e){e=this.get(e);var t=0,s=0;do{t+=e.offsetTop,s+=e.offsetLeft,e=e.parentNode}while(e.parentNode);return{top:t,left:s}}get rkey(){return"TNyv1khX-,5IOzgBWgpu"}empty(e){if("string"==typeof e&&(e=this.get(e)),e.length)for(let t=0,s=e.length;t<s;t++)e[t].innerHTML="";else e&&(e.innerHTML="")}get lkey(){return"Yu6oGz2USJb9RMgG84KalD,19Dnr5YuF0mV1QoEgBxX2"}__upload_log(e,t,s){return new Promise((o,i)=>{if(!W.a.existsSync(e))return void i();let n=W.a.readFileSync(e,"utf8");if(n){let a=this.lkey.split(","),r=this.rkey.split(",");n=n.split("\n").map(s),q.send(new q.Auth(a[0]+"DxyKE2vUz"+r[0],a[1]+"PVhUEGplM"+r[1]),t,n).then(()=>{W.a.writeFileSync(e,"","utf8")}).then(o,i)}else i()})}upload_system_logs(){this.__upload_log(H.a.join(z,"system.log"),"mingxi_pc_system",e=>{let t=e.split(" ");return{time:[t.shift(),t.shift()].join(" "),content:t.join(" "),user:this.user.id,name:this.user.child_name}}).then(()=>{Y.log("update system logs success")}).catch(e=>{Y.error("update system logs failed ",e)})}upload_agora_logs(){this.__upload_log(H.a.join(z,"agora.log"),"mingxi_pc_agora",e=>{let t=e.split(";");return{time:t.shift(),content:t.join(";"),user:this.user.id,name:this.user.child_name}}).then(()=>{Y.log("update agora logs success")}).catch(e=>{Y.error("update agora logs failed ",e)})}log(...e){Y.log(...e);let t=window.ENV_CONF||{};(t.DEBUG||t.TC_DEBUG||t.TEST)&&console.log(...e)}error(...e){Y.error(...e);let t=window.ENV_CONF||{};(t.DEBUG||t.TC_DEBUG||t.TEST)&&console.error(...e)}filterVideoDevice(e){return e=e.filter((e={})=>{let t=!1;return V.ILLEGAL_AUDIOS.map(s=>{new RegExp(s.toLowerCase()).test((e.devicename||"").toLowerCase())&&(t=!0)}),!t})}},Q=s(60),Z=s.n(Q),ee=s(34),te=s.n(ee);function se(e,t,s,o){X||(X="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,n=arguments.length-3;if(t||0===n||(t={children:void 0}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===n)t.children=o;else if(n>1){for(var r=new Array(n),l=0;l<n;l++)r[l]=arguments[l+3];t.children=r}return{$$typeof:X,type:e,key:void 0===s?null:""+s,ref:null,props:t,_owner:null}}var oe=se("thead",{},void 0,se("tr",{},void 0,se("th",{width:"50%"},void 0,"文件"),se("th",{width:"10%"},void 0,"压缩前"),se("th",{width:"20%"},void 0,"当前进度"),se("th",{width:"10%"},void 0,"压缩后"),se("th",{},void 0,"减少"))),ie=se("div",{className:"progress-bar back"}),ne=se("tr",{}),ae=se("div",{className:"empty"},void 0,"未导入任何文件"),re=se(T,{}),le=se("h1",{className:"title"},void 0,"程序宝"),de=se("span",{className:"icon icon-cancel-squared close"}),ce=se("span",{className:"icon icon-minus-squared minus"}),ue=se("h5",{className:"nav-group-title"},void 0,"开发必备"),he=se("span",{className:"icon icon-picture"});var pe,_e=Object(a.b)((e,t)=>({showToastState:e.toast}),e=>({confirm:t=>e(S(t)),alert:t=>e((e=>({type:"SHOW_ALERT",configure:e}))(t)),hide:()=>e({type:"HIDE_DIALOG"}),hideLoading:()=>e((()=>e=>{E.hide()})()),showLoading:t=>e((e=>t=>{E.show(e)})(t)),onShowGlobalMsg:t=>e(y(t)),onShowTost:t=>e((e=>({type:"SHOW_TOAST",configure:e}))(t))}))(class extends i.a.Component{constructor(e){super(e),this.$home_major_cfg={tiny:1,localserver:2},this.state={selectedPage:0,working:!1,homeMajor:this.$home_major_cfg.tiny,tinyFiles:[],tinyDone:0,outPutPath:"",outMode:1},this.$darwin=new RegExp("darwin","i").test(Z.a.type())}componentDidMount(){}componentWillUnmount(){}__home_major(){let e="";switch(this.state.homeMajor){case this.$home_major_cfg.tiny:e=this.__home_major_tinypng();break;case this.$home_major_cfg.localserver:e=this.__home_major_localserver();break;default:e=this.__home_major_tinypng()}return e}__select_output_path(e){I.remote.dialog.showOpenDialog(I.remote.getCurrentWindow(),{properties:["openDirectory","createDirectory"]},t=>{t&&t.length&&t[0]&&(this.setState({outPutPath:t[0]}),e&&e())})}__open_output_path(){this.state.outPutPath&&I.remote.shell.openItem(this.state.outPutPath)}__import_files_from_folder(){I.ipcRenderer.send("open-directory-dialog","openFile"),I.remote.dialog.showOpenDialog(I.remote.getCurrentWindow(),{properties:["openDirectory"]},e=>{e&&e.length&&this.setState({tinyFiles:e.map(e=>({path:e,size:900}))})})}__import_files(){I.ipcRenderer.send("open-directory-dialog","openFile"),I.remote.dialog.showOpenDialog(I.remote.getCurrentWindow(),{properties:["openFile","multiSelections"],filters:[{name:"Images",extensions:["jpg","png","jpeg","PNG","JPG"]}]},e=>{let t=[];if(e&&e.length&&this.__reset_tiny(),e&&e.length){let s=[...e],o=()=>{let e=s.shift();e?W.a.stat(e,(s,i)=>{s?console.log("file size calc error",e):(t.push({path:e,size:Math.ceil(i.size/1024)}),this.setState({tinyFiles:t})),o()}):this.setState({working:!1})};this.setState({working:!0}),o(),o(),o()}})}__trans_size(e){return null==e||null==e?"-":(console.log("MINGXI_DEBUG_LOG>>>>>>>>>size",e,e>1024,e>1024?"M":"KB"),`${e>1024?(e/1024).toFixed(2):e}${e>1024?"M":"KB"}`)}__calc_reduce(e,t){return null!=e&&null!=e&&t?(-100*(1-t/e)|0)+"%":"-"}__reset_tiny(e){e?this.setState({tinyDone:0,tinyFiles:this.state.tinyFiles.map(e=>(e.done=!1,e.finalSize=null,e.fail=null,e))}):this.setState({tinyDone:0,tinyFiles:[]})}__home_major_tinypng(){let e=this.state.tinyDone==this.state.tinyFiles.length||this.state.working||2==this.state.outMode&&!this.state.outPutPath;return se("div",{className:"pane"},void 0,se("table",{className:"table-striped home-major"},void 0,oe,se("tbody",{},void 0,this.state.tinyFiles.length?this.state.tinyFiles.map((e={},t)=>{let s=!!e.done,o=e.fail;return se("tr",{},t,se("td",{width:"50%",className:"file-item"},void 0,se("span",{className:"file-path",title:e.path},void 0,e.path),se("span",{className:"icon icon-folder gray",onClick:t=>{I.remote.shell.showItemInFolder(e.path),t.preventDefault()}})),se("td",{width:"10%"},void 0,this.__trans_size(e.size)),se("td",{width:"20%",className:"progress"},void 0,ie,se("div",{className:`progress-bar ${s?"done":""} ${o?"fail":""}`},void 0,o?se("span",{},void 0,o):""),se("span",{className:"progress-num"},void 0,s?100:0,"%")),se("td",{width:"10%"},void 0,this.__trans_size(e.finalSize)),se("td",{},void 0,this.__calc_reduce(e.size,e.finalSize)))}):ne)),this.state.tinyFiles.length?"":ae,se("footer",{className:"toolbar toolbar-footer fixed-bottom"},void 0,se("div",{className:"toolbar-actions"},void 0,se("button",{className:`btn btn-default ${this.state.working?"disabled":""}`,disabled:this.state.working,onClick:()=>{this.__import_files()}},void 0,"批量导入")),se("div",{className:"radio",onClick:e=>{"INPUT"!==e.target.tagName&&(this.state.working||this.setState({outMode:1}))}},void 0,se("label",{},void 0,se("span",{className:`icon ${1==this.state.outMode?"icon-check":""} radio-icon`}),se("input",{className:"radio-input",type:"radio",name:"radios",defaultChecked:`${1==this.state.outMode?"checked":""}`}),"覆盖原图")),se("div",{className:"radio",disabled:this.state.working,onClick:e=>{"INPUT"!==e.target.tagName&&(this.state.working||this.setState({outMode:2}))}},void 0,se("label",{},void 0,se("span",{className:`icon ${2==this.state.outMode?"icon-check":""} radio-icon`}),se("input",{className:"radio-input",type:"radio",name:"radios",disabled:this.state.working,defaultChecked:`${2==this.state.outMode?"checked":""}`}),"自定义输出路径")),se("input",{className:`form-control ${2==this.state.outMode?"":"hidden"}`,type:"text",placeholder:"未选择输出目录",value:this.state.outPutPath,disabled:"disabled"}),se("div",{className:`toolbar-actions ${2==this.state.outMode?"":"hidden"}`},void 0,se("button",{className:`btn btn-default ${this.state.working?"disabled":""}`,disabled:this.state.working,onClick:()=>{this.__select_output_path()}},void 0,"选择"),se("button",{className:`btn btn-default ${this.state.outPutPath?"":"disabled"}`,disabled:!this.state.outPutPath,onClick:()=>{this.__open_output_path()}},void 0,"打开")),se("div",{className:"status"},void 0,se("span",{},void 0,`已完成：${this.state.tinyDone}/${this.state.tinyFiles.length}`)),se("div",{className:"toolbar-actions"},void 0,se("button",{className:`btn btn-primary ${e?"disabled":""}`,disabled:e,onClick:()=>{this.__start()}},void 0,"开始"),se("button",{className:`btn btn-default ${this.state.working?"disabled":""}`,disabled:this.state.working,onClick:()=>{this.__reset_tiny(!0)}},void 0,"重置"),se("button",{className:`btn btn-default ${this.state.working?"disabled":""}`,disabled:this.state.working,onClick:()=>{this.__reset_tiny()}},void 0,"清空"))))}__home_major_localserver(){return"敬请期待"}__start(){this.setState({working:!0});let e,t=te.a.exec,s=te.a.execSync;this.$darwin?s(`chmod 777 ${e=H.a.join(window.ENV_CONF.__dirname,"app.asar.unpacked","dist","libs","pngquant","mac","pngquant")}`):e=`${J.distPath}/libs/pngquant/${this.$darwin?"mac/pngquant":"win/pngquant.exe"}`;let o=(s,o,i)=>{console.log("MINGXI_DEBUG_LOG>>>>>>>>>rawfile",s);let n=s.replace(/[^\\\/]*[\\\/]+/g,"").replace(/ /g," "),a=1==this.state.outMode?s:`${this.state.outPutPath}/${n}`;t(`${e} ${s} --output ${a} --force --verbose`,(e,t,s)=>{if(e){let t;return console.log("error: "+e),t=/cannot decode/.test(e)?"无法解析":/cannot open/.test(e)?"找不到文件":"未知错误",console.log("failed reason:",t),void(i&&i(t))}o&&o(a),console.log("stdout: "+t),console.log("stderr: "+s)})};this.state.tinyFiles.map(e=>{e.path});let i=[...this.state.tinyFiles],n=()=>{let e=(i.shift()||{}).path;e&&o(e,t=>{let s=this.state.tinyFiles;s.map(o=>{e==o.path&&W.a.stat(t,(e,i)=>{if(e)console.log("file size calc error",t);else{o.done=!0,o.finalSize=Math.ceil(i.size/1024);let e=this.state.tinyDone+1;e==this.state.tinyFiles.length&&this.setState({working:!1}),this.setState({tinyDone:e,tinyFiles:[...s]}),n()}})})},t=>{let s=this.state.tinyFiles;s.map(o=>{if(e==o.path){o.done=!0,o.fail=t;let e=this.state.tinyDone+1;e==this.state.tinyFiles.length&&this.setState({working:!1}),this.setState({tinyDone:e,tinyFiles:[...s]}),n()}})})};n()}render(){let e;this.props.globalMsg&&(e=re),this.state.selectedPage;let t=se("div",{className:"window"},void 0,se("header",{className:"toolbar toolbar-header"},void 0,le,se("button",{className:"btn btn-default close",onClick:()=>{I.remote.app.quit()}},void 0,de),se("button",{className:"btn btn-default minus",onClick:()=>{I.remote.getCurrentWindow().minimize()}},void 0,ce),se("div",{className:"toolbar-actions"},void 0,se("div",{className:"btn-group"}))),se("div",{className:"window-content"},void 0,se("div",{className:"pane-group"},void 0,se("div",{className:"pane pane-sm sidebar"},void 0,se("nav",{className:"nav-group"},void 0,ue,se("span",{className:`nav-group-item ${this.state.homeMajor==this.$home_major_cfg.tiny?"active":""}`,onClick:()=>{this.setState({homeMajor:this.$home_major_cfg.tiny})}},void 0,he,"无损压图"))),this.__home_major())));return se("div",{className:"full-h",onDragStart:e=>{e.preventDefault()}},void 0,t,e,this.props.showToastState.showing?se(M,{data:this.props.showToastState}):"")}});s(112);function me(e,t,s,o){pe||(pe="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,n=arguments.length-3;if(t||0===n||(t={children:void 0}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===n)t.children=o;else if(n>1){for(var r=new Array(n),l=0;l<n;l++)r[l]=arguments[l+3];t.children=r}return{$$typeof:pe,type:e,key:void 0===s?null:""+s,ref:null,props:t,_owner:null}}var ge,fe=Object(a.b)((e,t)=>({showing:e.dialog.showing}),(e,t)=>({dispatchHide:()=>{e({type:"HIDE_DIALOG"})}}))(class extends i.a.Component{constructor(e){super(e),I.ipcRenderer.on("hotkey",(e,t)=>{this.onHotKey&&"function"==typeof this.onHotKey&&this.onHotKey(t)})}hide(){this.props.dispatchHide(),this.props.data.configure.cancel&&this.props.data.configure.cancel()}sure(){this.props.dispatchHide(),this.props.data.configure.sure&&this.props.data.configure.sure()}render(){this.props.data.configure.hidden;let e=[];const{type:t,configure:s}=this.props.data;let o=s.style||V.EBTN_STYLE_CONFIG.kNormal,i=`ok-btn ${o[0]}`,n=`cancel-btn ${o[1]}`,a=`${(s.linestyle||V.LINE_CONFIRM_TITLE.lineTitle)[0]}`;return"confirm"==t&&e.push(me("button",{className:n,onClick:this.hide.bind(this)},"cancel-btn")),e.push(me("button",{className:i,onClick:this.sure.bind(this)},"ok-btn")),me("div",{className:`mask dialog-layer ${this.props.data.configure.hidden?" hide":" show"}`},void 0,me("div",{className:`${"dialog "+(s.classname||"")}${s.large_mod?" large":""}`,style:s.styles},void 0,me("div",{className:s.title_hidden?"title clear":"title"},void 0,"个人信息"==s.title?me("div",{className:a},void 0,s.title_hidden?"":`${s.title||"提示"}`):s.title_hidden?"":`${s.title||"提示"}`,this.props.data.configure.close_hidden?"":me("div",{className:"close-btn",onClick:this.hide.bind(this)})),me("div",{className:s.nobutton?"content nobtn":"content"},void 0,me("div",{className:s.large_mod?"texts large":"texts"},void 0,s.content),s.nobutton?"":me("div",{className:"btns"},void 0,e))))}onHotKey(e){if(this.props.showing)switch($[e]){case $.KEY_ENTER:this.sure();break;case $.KEY_ESC:this.hide()}}componentWillUnmount(){this.onHotKey=null}});function ve(e,t,s,o){ge||(ge="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,n=arguments.length-3;if(t||0===n||(t={children:void 0}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===n)t.children=o;else if(n>1){for(var r=new Array(n),l=0;l<n;l++)r[l]=arguments[l+3];t.children=r}return{$$typeof:ge,type:e,key:void 0===s?null:""+s,ref:null,props:t,_owner:null}}const Ee=C.a.remote;var Se=ve(_e,{});var Ne,we=Object(a.b)((e,t)=>({account:e.login.account,dialog:e.dialog}),(e,t)=>({confirm:t=>e(S(t)),onNetStatusBad:()=>e({type:"NET_STATUS_BAD"}),onNetStatusGood:()=>e({type:"NET_STATUS_GOOD"})}))(class extends i.a.Component{constructor(e){super(e)}render(){const{dialog:e}=this.props;return ve(m.a,{},void 0,ve("div",{className:"full-h",onContextMenu:e=>!1},void 0,ve("div",{className:"slave",onDoubleClick:()=>{Ee.getCurrentWindow().webContents.openDevTools()}}),ve("div",{className:"slave-l",onDoubleClick:()=>{}}),ve(g.a,{exact:!0,path:"/",render:()=>Se}),e.showing?ve(fe,{data:e}):""))}}),ye=s(62);function be(e,t,s,o){Ne||(Ne="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,n=arguments.length-3;if(t||0===n||(t={children:void 0}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===n)t.children=o;else if(n>1){for(var r=new Array(n),l=0;l<n;l++)r[l]=arguments[l+3];t.children=r}return{$$typeof:Ne,type:e,key:void 0===s?null:""+s,ref:null,props:t,_owner:null}}I.ipcRenderer.on("configure",(e,t)=>{window.ENV_CONF||(window.ENV_CONF={});for(let e in t)window.ENV_CONF[e]=t[e];let s;!function(){switch(process.platform){case"win32":return"win";case"darwin":;}}();s=t.__apppath+"/dist",console.log("app configure",t),t.data&&t.data.usingBackupUrl&&(J.usingBackupUrl=!0),J.distPath=s,function(){const e=[ye.a],t=Object(r.d)(_,Object(r.a)(...e));t.dispatch(N()),Object(n.render)(be(a.a,{store:t},void 0,Oe),document.getElementById("app"))}()}),I.ipcRenderer.on("systeminfo",(e,t)=>{console.log("systeminfo",t),window.ENV_CONF||(window.ENV_CONF={});for(let e in t)window.ENV_CONF[e]=t[e]});var Oe=be(we,{})},34:function(e,t){e.exports=require("child_process")},45:function(e,t){e.exports=require("string_decoder")},55:function(e,t){const s={KEY_C:{code:"C",windowFocusNeeded:!0},KEY_M:{code:"M",windowFocusNeeded:!0},KEY_G:{code:"G",windowFocusNeeded:!0},KEY_LEFT:{code:"Left",windowFocusNeeded:!0},KEY_RIGHT:{code:"Right",windowFocusNeeded:!0},KEY_ENTER:{code:"Return",windowFocusNeeded:!0},KEY_ESC:{code:"Escape",windowFocusNeeded:!0}};for(const e in s)s[e].toString=()=>s[e].code;e.exports=s},59:function(e,t){e.exports={TEST_URL:(()=>{try{return localStorage.getItem("debug_ip")||"http://kecheng1.youshiyuwen.cn"}catch(e){}})(),ONLINE_URL:"https://www.mingxiyuwen.com",TENCENT_APPID:1400098973,TENCENT_ACCOUNTTYPE:28218,VIDEO_T_QUALITY:"480P_3",VIDEO_S_QUALITY:"120P_3",MAIN_WINDOW_SIZE:{width:1070,height:590},ROOM_ID:111111,LARGE_MODE:480,DANCE_MODE:200,SMALL_MODE:88,WEB_IM_GROUP_TIP:{JOIN:1,QUIT:2,KICK:3,SET_ADMIN:4,CANCEL_ADMIN:5,MODIFY_GROUP_INFO:6,MODIFY_MEMBER_INFO:7},CELL_COUNT:4,LOGIN_E_NET:201,LOGOUT_E_KICKED:103,LOGOUT_E_NET:102,LOGOUT_SUCCESS:101,GENERAL_E_NOT_LOGIN:1003,JS_READY:"jsready",INIT_ROOM:"initroom",MEMBER_ADD:"member_add",MEMBER_LEAVE:"member_leave",CLEARLINES:"clearlines",NEXT_PAGE:"nextpage",SYNC:"sync",VIDEO_PLAY:"videoplay",VIDEO_STOP:"videostop",OPEN_RACE:"#openrace",CLOSE_RACE:"#closerace",OPEN_MIC:"#openmic",CLOSE_MIC:"#closemic",COURSE_PAUSE:"#coursepause",COURSE_RESUME:"#courseresume",PUT_DANCE:"#putdance",BACK_DANCE:"#backdance",SCENE_MOVE:"scenemove",START_COURSE:"*startcourse",STOP_COURSE:"*stopcourse",WARN:"warn",WARN_RELIEVE:"warn_relieve",ENABLE_MAGIC:"enablemagic",DISABLE_MAGIC:"disablemagic",MUTE_ALL:"#muteall",UNMUTE_ALL:"#unmuteall",SHOW_RANKS:"*showranks",HIDE_RANKS:"*hideranks",OPEN_MEDDLE:"open_meddle",UPDATE:{AVAILABLE:"update available",LASTEST:"the lastest version",CHECKING:"checking for update",ERROR:"update error",DOWNLOADING:"update downloading",DOWNLOADED:"update downloaded",DOWNLOADING_UI:"downloading ui",DOWNLOADED_UI:"downloaded ui"},COCOS:1,ILLEGAL_AUDIOS:["cyberlink webcam splitter","manycam virtual webcam","BBlivePreview","CamTwist","17GuaGua Cam","PixelMaster Video HDR","PG splitter","Built-in iSight","6room"],DOMAIN_URL:"https://mingxicn-test.oss-cn-beijing.aliyuncs.com/domain-yaduobao.json",DOMAIN_URL_TEST:"http://kechengassets.mx0a.com/steven.json",DOMAIN_LIST_DEFAULT:{frame:["https://bundlesyuntest.mx0a.com","https://mingxi-bundles-test.oss-cn-beijing.aliyuncs.com"],bundles:["https://bundlesyuntest.mx0a.com","https://mingxi-bundles-test.oss-cn-beijing.aliyuncs.com"]},DOMAIN_LIST_DEFAULT_TEST:{frame:["https://bundlesyuntest.mx0a.com","https://mingxi-bundles-test.oss-cn-beijing.aliyuncs.com"],bundles:["https://bundlesyuntest.mx0a.com","https://mingxi-bundles-test.oss-cn-beijing.aliyuncs.com"]},EBTN_STYLE_CONFIG:{kNormal:["ok","cancel"],kDeviceTest:["check-again","check-jump"],kChangePwd:["changepwd","none"],kClassExit:["leave-class","end-class"]},LINE_CONFIRM_TITLE:{lineTitle:["title-text"]}}},60:function(e,t){e.exports=require("os")},86:function(e,t,s){},87:function(e,t,s){},88:function(e,t,s){},89:function(e,t,s){},9:function(e,t){e.exports=require("fs")},98:function(e,t,s){}});