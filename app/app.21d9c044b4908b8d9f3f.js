!function(e){function t(t){for(var s,a,r=t[0],d=t[1],c=t[2],u=0,m=[];u<r.length;u++)a=r[u],n[a]&&m.push(n[a][0]),n[a]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(e[s]=d[s]);for(l&&l(t);m.length;)m.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],s=!0,r=1;r<o.length;r++){var d=o[r];0!==n[d]&&(s=!1)}s&&(i.splice(t--,1),e=a(a.s=o[0]))}return e}var s={},n={0:0},i=[];function a(t){if(s[t])return s[t].exports;var o=s[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=s,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(o,s,function(t){return e[t]}.bind(null,s));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="./";var r=window.webpackJsonp=window.webpackJsonp||[],d=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var l=d;i.push([172,1]),o()}({107:function(e,t){e.exports=require("buffer")},123:function(e,t){},124:function(e,t){},142:function(e,t){},143:function(e,t){},146:function(e,t){e.exports=require("zlib")},15:function(e,t){e.exports=require("fs")},157:function(e,t){e.exports=require("querystring")},163:function(e,t){e.exports=require("constants")},165:function(e,t){e.exports=require("stream")},167:function(e,t){e.exports=require("util")},168:function(e,t){e.exports=require("assert")},172:function(e,t,o){"use strict";o.r(t);o(10),o(84),o(85),o(86),o(87);var s=o(1),n=o.n(s),i=o(51),a=o(4),r=o(9);var d=(e={type:"alert",configure:{content:""}},t)=>{switch(t.type){case"SHOW_ALERT":return{...e,type:"alert",configure:t.configure,showing:!0};case"SHOW_CONFIRM":return{...e,type:"confirm",configure:t.configure,showing:!0};case"HIDE_DIALOG":return{...e,showing:!1};default:return e}};var c=(e={},t)=>{switch(t.type){case"LOGIN_SUCCESS":return{...e,account:t.account};case"LOGOUT":return{...e,account:null};case"CHANGE_USER_INFO":return{...e,account:t.user};default:return e}};var l=(e={},t)=>{switch(t.type){case"ROOM_LIST":return{...e,rooms:t.rooms};case"ROOM_INFO":return{...e,room:t.data};case"CALENDAR_DATA":return{...e,calendar:t.data};case"START_COURSE":return{...e,courseStarted:!0};case"COURSE_END":return{...e,courseStarted:!1};case"ENTER_TESTER":return{...e,courseStarted:!1,enterTester:!0,fromPage:t.page};case"ENTER_MY_COURSES":return{...e,enterMyCourses:!0};case"EXIT_MY_COURSES":return{...e,enterMyCourses:!1};case"EXIT_TESTER":let o=e.fromPage;return{...e,enterTester:!1,courseStarted:"course"==o};case"NET_STATUS_BAD":return{...e,netStatus:0};case"NET_STATUS_GOOD":return{...e,netStatus:1};case"COURSE_RECORDING":return{...e,recording:t.status,flow:t.camp};case"LESSON_COMMING":return{...e,commingRoom:t.commingRoom};case"CAMP_LESSON":return{...e,campRoom:t.campRoom};case"LESSONS_COMMING":return console.log("LESSONS_COMMING action.commingRooms",t.commingRooms),{...e,commingRooms:t.commingRooms};case"LESSONS_DONE":return console.log("LESSONS_DONE action.doneRooms",t.doneRooms),{...e,doneRooms:t.doneRooms};case"LESSONS_TOTAL_COMMING":return{...e,totalComming:t.totalComming};case"LESSONS_TOTAL_DONE":return{...e,totalDone:t.totalDone};case"CHANGE_PASSWORD":return console.log("MINGXI=============action.changePwd",t.changePwd,t.fromViewUser),{...e,changePwd:t.changePwd,fromViewUser:t.fromViewUser};case"SHOW_GLOBAL_MSG":return{...e,globalMsg:t.globalMsg};default:return e}};var u=new class{constructor(e="MINGXI.INC"){if(this.$namespace=e,this.$data=localStorage.getItem(this.$namespace),console.log("namespace...",e,this.$data),this.$data)try{this.$data=JSON.parse(this.$data)}catch(e){this.$data={},localStorage.removeItem(this.$namespace)}else this.$data={}}get(e){return this.$data[e]}store(e,t){this.$data[e]=t,localStorage.setItem(this.$namespace,JSON.stringify(this.$data))}clear(){localStorage.removeItem(this.$namespace)}};var m=(e={},t)=>{let o,s,n,i;switch(t.type){case"ROOM_INFO":let a=t.data,r={child_name:a.teacher_name,avatarurl:a.teacher_avatar,id:a.teacher_id};if(!a.camp){let e=a.start_time.split(/[-: ]/),o=new Date(e[0],e[1]-1,e[2]||1,e[3]||0,e[4]||0,e[5]||0).getTime()-Date.now(),s=u.get("STATUS_"+a.channel_id);(i=(i=s||{duration:t.data.duration,waiting:o,id:a.channel_id})||{}).waiting=o}return{...e,info:t.data,switches:{gift:!0,muteall:!0},dancing:[],status:i,teacher:r};case"ROOM_GIFT":return{...e,gifts:t.data};case"ROOM_MORE_INFO":let d={...e.info};return d.channel_token=t.data.channel_token,d.features=t.data.features,console.log(t.data.students,"action.data.students"),{...e,info:d,students:t.data.students};case"NEW_GIFT":let c=t.data;for(let t=0,o=(n=[...e.students]).length;t<o;t++){let e=n[t];e.id==c.uid&&(e.gift_total=c.total)}return{...e,students:n};case"WARN":let l=t.data;for(let o=0,s=(n=[...e.students]).length;o<s;o++){let e=n[o];e.id==l.uid?e.warn=t.status:e.warn=!1}return{...e,students:n};case"USER_MUTED":if(n=[...e.students])for(let e=0,o=n.length;e<o;e++){let o=n[e];o.id==t.id&&(o.unmuted=!t.mute,o.unmuted&&!t.recovering&&o.speak++)}return{...e,students:n};case"USER_ADD_ROOM":if(r={...e.teacher},t.id==r.id)return r.online=!0,{...e,teacher:r};for(let o=0,s=(n=[...e.students]).length;o<s;o++){let e=n[o];if(e.id==t.id){e.online=!0,e.online_time=(new Date).getTime();break}}return{...e,students:n};case"NEW_STREAM":if((o=t.stream.getId())==(r={...e.teacher}).id)return r.stream=t.stream,r.online=!0,r.stream_inited=!1,{...e,teacher:r};for(let o=0,s=(n=[...e.students]).length;o<s;o++){let e=n[o];e.id==t.stream.getId()&&(e.stream=t.stream,e.online=!0,e.online_time||(e.online_time=(new Date).getTime()),e.stream_inited=!1)}return{...e,students:n};case"STREAM_LEAVE":if((o=t.stream.getId())==(r={...e.teacher}).id)return r.stream=null,r.online=!1,r.stream_inited=!1,{...e,teacher:r};for(let t=0,s=(n=[...e.students]).length;t<s;t++){let e=n[t];e.id==o&&(e.stream=null,e.online_time=null,e.online=!1,e.dancing=!1,e.stream_inited=!1)}return{...e,students:n};case"HANDSUP_SWITCH":if((s={...e.switches}).handsup=t.status,e.students=e.students||[],n=[...e.students])for(let e=0,t=n.length;e<t;e++)n[e].rank=null;return{...e,switches:s,students:n};case"GIFT_SWITCH":return(s={...e.switches}).gift=t.status,{...e,switches:s};case"MAGIC_SWITCH":return(s={...e.switches}).magic=t.status,{...e,switches:s};case"MUTEALL_SWITCH":if(s={...e.switches},n=[...e.students])for(let e=0,o=n.length;e<o;e++)n[e].unmuted=!t.status;return s.muteall=t.status,{...e,students:n,switches:s};case"RANK_SWITCH":return(s={...e.switches}).rank=t.status,{...e,switches:s};case"SILENT_SWITCH":return(s={...e.switches}).silent=t.status,{...e,switches:s};case"HANDSUP_RANK":if(n=[...e.students])for(let e=0,o=n.length;e<o;e++){let o=n[e];if(o.id==t.id){o.rank=t.rank,o.handsup++;break}}return{...e,students:n};case"DANCING":if(n=[...e.students])for(let e=0,o=n.length;e<o;e++){let o=n[e];o.id==t.id?o.dancing=t.status:o.dancing=!1}return{...e,students:n};case"COURSE_BEGIN":return(i={...e.status}).started=!0,u.store("STATUS_"+i.id,i),{...e,status:i};case"COURSE_PAUSE":return(i={...e.status}).paused=!0,u.store("STATUS_"+i.id,i),{...e,status:i};case"COURSE_RESUME":return(i={...e.status}).paused=!1,u.store("STATUS_"+i.id,i),{...e,status:i};case"COURSE_END":return(i={...e.status}).started=!1,i.paused=!1,u.store("STATUS_"+i.id,i),{...e,status:i};case"COURSE_TICK":return(i={...e.status}).started&&!i.paused?(i.duration--,u.store("STATUS_"+i.id,i),{...e,status:i}):e;case"COURSE_STARTING_TICK":return(i={...e.status}).waiting-=1e3,{...e,status:i};case"GIFT_UPDATE":n=[...e.students];let m=t.data;if(n)for(let e=0,t=n.length;e<t;e++){let t=n[e];for(let e=0,o=m.length;e<o;e++){let o=m[e];if(o.to_id==t.id){t.gift_total=o.total;break}}}return{...e,students:n};case"PROGRESS_UPDATE":n=[...e.students];let p=t.percent,h=t.id;if(n)if(100==p){let e=null,t=1;for(let o=0,s=n.length;o<s;o++){let s=n[o];s.id==h?(s.percent=p,e=s):s.progress_rank&&t++}e&&(e.progress_rank=t)}else for(let e=0,t=n.length;e<t;e++){let t=n[e];if(t.id==h){t.percent=p;break}}return{...e,students:n};case"PROGRESS_RESET":if(n=[...e.students])for(let e=0,t=n.length;e<t;e++){let t=n[e];t.progress_rank=null,t.percent=null}return{...e,students:n};case"QUESTION_LIST":return(s={...e.switches}).questionList=t.status,{...e,switches:s};case"QUESTION_DETAIL":return(s={...e.switches}).questionDetail=t.status,{...e,switches:s};default:return e}};var p=(e={type:"toast",configure:{content:""}},t)=>{switch(t.type){case"SHOW_TOAST":return{...e,type:"toast",configure:t.configure,showing:!0};case"HIDE_DIALOG":return{...e,showing:!1};default:return e}},h=Object(r.c)({dialog:d,login:c,main:l,room:m,toast:p}),v=o(175),g=o(176),_=o(23),f=o.n(_);var N=new class{constructor(){this.$inited=!1}__init(){this.$dom=f()('<div class="loading-mask"><div class="loading-close"></div><div class="loading-text"></div></div>'),this.$dom.hide().appendTo("body"),this.$inited=!0,f()(this.$dom).on("click",".loading-close",()=>{this.hide()})}show(e=""){this.$inited||this.__init(),f()(".loading-text",this.$dom).html(e),this.$dom.fadeIn()}hide(){this.$dom&&this.$dom.fadeOut()}};const E=e=>({type:"SHOW_CONFIRM",configure:e}),S=()=>e=>{let t=u.get("USER_INFO");t&&e(O(t))},O=e=>t=>{u.store("USER_INFO",e),t({type:"LOGIN_SUCCESS",account:e})},b=e=>({type:"SHOW_GLOBAL_MSG",globalMsg:e});var w;var T,y=Object(a.b)((e,t)=>({globalMsg:e.main.globalMsg}),(e,t)=>({onShowGlobalMsg:t=>{e(b(t))}}))(class extends n.a.Component{constructor(e){super(e)}componentDidMount(){}componentWillUnmount(){}render(){return this.props.globalMsg?function(e,t,o,s){w||(w="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&n)for(var a in n)void 0===t[a]&&(t[a]=n[a]);else t||(t=n||{});if(1===i)t.children=s;else if(i>1){for(var r=new Array(i),d=0;d<i;d++)r[d]=arguments[d+3];t.children=r}return{$$typeof:w,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}("div",{className:"global-msg-pannel"},void 0,"【系统提示】"+this.props.globalMsg):""}}),D=(o(96),o(0),o(2)),I=o.n(D),C=o(54),A=o.n(C).a;function R(e,t,o,s){T||(T="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&n)for(var a in n)void 0===t[a]&&(t[a]=n[a]);else t||(t=n||{});if(1===i)t.children=s;else if(i>1){for(var r=new Array(i),d=0;d<i;d++)r[d]=arguments[d+3];t.children=r}return{$$typeof:T,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}var L,M=Object(a.b)((e,t)=>({showing:e.toast.showing}),(e,t)=>({dispatchHide:()=>{e({type:"HIDE_DIALOG"})}}))(class extends n.a.Component{constructor(e){super(e),D.ipcRenderer.on("hotkey",(e,t)=>{this.onHotKey&&"function"==typeof this.onHotKey&&this.onHotKey(t)})}componentDidMount(){let e=setTimeout(()=>{this.props.dispatchHide(),clearTimeout(e)},3e3)}render(){const{type:e,configure:t}=this.props.data;return R("div",{className:"toast-box"},void 0,R("div",{className:"toast"},void 0,R("p",{},void 0,t.content)))}componentWillUnmount(){}});function U(e,t,o,s){L||(L="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&n)for(var a in n)void 0===t[a]&&(t[a]=n[a]);else t||(t=n||{});if(1===i)t.children=s;else if(i>1){for(var r=new Array(i),d=0;d<i;d++)r[d]=arguments[d+3];t.children=r}return{$$typeof:L,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}var $=U(y,{}),k=U("h1",{className:"title"},void 0,"压多宝"),G=U("span",{className:"icon icon-cancel-squared close"}),P=U("span",{className:"icon icon-minus-squared minus"}),x=U("div",{className:"toolbar-actions"},void 0,U("div",{className:"btn-group"},void 0,U("button",{className:"btn btn-default"},void 0,U("span",{className:"icon icon-home"})),U("button",{className:"btn btn-default"},void 0,U("span",{className:"icon icon-folder"})),U("button",{className:"btn btn-default active"},void 0,U("span",{className:"icon icon-cloud"})),U("button",{className:"btn btn-default"},void 0,U("span",{className:"icon icon-popup"})),U("button",{className:"btn btn-default"},void 0,U("span",{className:"icon icon-shuffle"}))),U("button",{className:"btn btn-default"},void 0,U("span",{className:"icon icon-home icon-text"}),"Filters")),F=U("div",{className:"window-content"},void 0,U("div",{className:"pane-group"},void 0,U("div",{className:"pane pane-sm sidebar"},void 0,U("nav",{className:"nav-group"},void 0,U("h5",{className:"nav-group-title"},void 0,"Favorites"),U("span",{className:"nav-group-item"},void 0,U("span",{className:"icon icon-home"}),"connors"),U("span",{className:"nav-group-item active"},void 0,U("span",{className:"icon icon-light-up"}),"Photon"),U("span",{className:"nav-group-item"},void 0,U("span",{className:"icon icon-download"}),"Downloads"),U("span",{className:"nav-group-item"},void 0,U("span",{className:"icon icon-folder"}),"Documents"),U("span",{className:"nav-group-item"},void 0,U("span",{className:"icon icon-window"}),"Applications"),U("span",{className:"nav-group-item"},void 0,U("span",{className:"icon icon-signal"}),"AirDrop"),U("span",{className:"nav-group-item"},void 0,U("span",{className:"icon icon-monitor"}),"Desktop")),U("nav",{className:"nav-group"},void 0,U("h5",{className:"nav-group-title"},void 0,"Tags"),U("span",{className:"nav-group-item"},void 0,U("span",{className:"icon icon-record"}),"Red"),U("span",{className:"nav-group-item",href:"#"},void 0,U("span",{className:"icon icon-record"}),"Orange"),U("span",{className:"nav-group-item",href:"#"},void 0,U("span",{className:"icon icon-record"}),"Green"),U("span",{className:"nav-group-item",href:"#"},void 0,U("span",{className:"icon icon-record"}),"Blue")),U("nav",{className:"nav-group"},void 0,U("h5",{className:"nav-group-title"},void 0,"Devices"),U("span",{className:"nav-group-item"},void 0,U("span",{className:"icon icon-drive"}),"Backup disk"),U("span",{className:"nav-group-item"},void 0,U("span",{className:"icon icon-drive"}),"Backup disk"),U("span",{className:"nav-group-item"},void 0,U("span",{className:"icon icon-drive"}),"Backup disk"),U("span",{className:"nav-group-item"},void 0,U("span",{className:"icon icon-drive"}),"Backup disk"))),U("div",{className:"pane"},void 0,U("table",{className:"table-striped"},void 0,U("thead",{},void 0,U("tr",{},void 0,U("th",{},void 0,"Name"),U("th",{},void 0,"Kind"),U("th",{},void 0,"Date Modified"),U("th",{},void 0,"Author"))),U("tbody",{},void 0,U("tr",{},void 0,U("td",{},void 0,"bars.scss"),U("td",{},void 0,"Document"),U("td",{},void 0,"Oct 13, 2015"),U("td",{},void 0,"connors")),U("tr",{},void 0,U("td",{},void 0,"base.scss"),U("td",{},void 0,"Document"),U("td",{},void 0,"Oct 13, 2015"),U("td",{},void 0,"connors")),U("tr",{},void 0,U("td",{},void 0,"button-groups.scss"),U("td",{},void 0,"Document"),U("td",{},void 0,"Oct 13, 2015"),U("td",{},void 0,"connors")),U("tr",{},void 0,U("td",{},void 0,"buttons.scss"),U("td",{},void 0,"Document"),U("td",{},void 0,"Oct 13, 2015"),U("td",{},void 0,"connors")),U("tr",{},void 0,U("td",{},void 0,"docs.scss"),U("td",{},void 0,"Document"),U("td",{},void 0,"Oct 13, 2015"),U("td",{},void 0,"connors")),U("tr",{},void 0,U("td",{},void 0,"forms.scss"),U("td",{},void 0,"Document"),U("td",{},void 0,"Oct 13, 2015"),U("td",{},void 0,"connors")),U("tr",{},void 0,U("td",{},void 0,"grid.scss"),U("td",{},void 0,"Document"),U("td",{},void 0,"Oct 13, 2015"),U("td",{},void 0,"connors")),U("tr",{},void 0,U("td",{},void 0,"icons.scss"),U("td",{},void 0,"Document"),U("td",{},void 0,"Oct 13, 2015"),U("td",{},void 0,"connors")),U("tr",{},void 0,U("td",{},void 0,"images.scss"),U("td",{},void 0,"Document"),U("td",{},void 0,"Oct 13, 2015"),U("td",{},void 0,"connors")),U("tr",{},void 0,U("td",{},void 0,"lists.scss"),U("td",{},void 0,"Document"),U("td",{},void 0,"Oct 13, 2015"),U("td",{},void 0,"connors")),U("tr",{},void 0,U("td",{},void 0,"mixins.scss"),U("td",{},void 0,"Document"),U("td",{},void 0,"Oct 13, 2015"),U("td",{},void 0,"connors")),U("tr",{},void 0,U("td",{},void 0,"navs.scss"),U("td",{},void 0,"Document"),U("td",{},void 0,"Oct 13, 2015"),U("td",{},void 0,"connors")),U("tr",{},void 0,U("td",{},void 0,"normalize.scss"),U("td",{},void 0,"Document"),U("td",{},void 0,"Oct 13, 2015"),U("td",{},void 0,"connors")),U("tr",{},void 0,U("td",{},void 0,"photon.scss"),U("td",{},void 0,"Document"),U("td",{},void 0,"Oct 13, 2015"),U("td",{},void 0,"connors")),U("tr",{},void 0,U("td",{},void 0,"tables.scss"),U("td",{},void 0,"Document"),U("td",{},void 0,"Oct 13, 2015"),U("td",{},void 0,"connors")),U("tr",{},void 0,U("td",{},void 0,"tabs.scss"),U("td",{},void 0,"Document"),U("td",{},void 0,"Oct 13, 2015"),U("td",{},void 0,"connors")),U("tr",{},void 0,U("td",{},void 0,"utilities.scss"),U("td",{},void 0,"Document"),U("td",{},void 0,"Oct 13, 2015"),U("td",{},void 0,"connors")),U("tr",{},void 0,U("td",{},void 0,"variables.scss"),U("td",{},void 0,"Document"),U("td",{},void 0,"Oct 13, 2015"),U("td",{},void 0,"connors")))))));var H,j=Object(a.b)((e,t)=>({showToastState:e.toast}),e=>({confirm:t=>e(E(t)),alert:t=>e((e=>({type:"SHOW_ALERT",configure:e}))(t)),hide:()=>e({type:"HIDE_DIALOG"}),hideLoading:()=>e((()=>e=>{N.hide()})()),showLoading:t=>e((e=>t=>{N.show(e)})(t)),onShowGlobalMsg:t=>e(b(t)),onShowTost:t=>e((e=>({type:"SHOW_TOAST",configure:e}))(t))}))(class extends n.a.Component{constructor(e){super(e)}componentDidMount(){}componentWillUnmount(){}render(){let e;this.props.globalMsg&&(e=$);let t=U("div",{className:"window"},void 0,U("header",{className:"toolbar toolbar-header"},void 0,k,U("button",{className:"btn btn-default close",onClick:()=>{D.remote.app.quit()}},void 0,G),U("button",{className:"btn btn-default minus",onClick:()=>{D.remote.getCurrentWindow().minimize()}},void 0,P),x),F);return U("div",{className:"full-h",onDragStart:e=>{e.preventDefault()}},void 0,t,e,this.props.showToastState.showing?U(M,{data:this.props.showToastState}):"")}}),B=o(55),W=o.n(B).a;o(97);function K(e,t,o,s){H||(H="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&n)for(var a in n)void 0===t[a]&&(t[a]=n[a]);else t||(t=n||{});if(1===i)t.children=s;else if(i>1){for(var r=new Array(i),d=0;d<i;d++)r[d]=arguments[d+3];t.children=r}return{$$typeof:H,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}var V=Object(a.b)((e,t)=>({showing:e.dialog.showing}),(e,t)=>({dispatchHide:()=>{e({type:"HIDE_DIALOG"})}}))(class extends n.a.Component{constructor(e){super(e),D.ipcRenderer.on("hotkey",(e,t)=>{this.onHotKey&&"function"==typeof this.onHotKey&&this.onHotKey(t)})}hide(){this.props.dispatchHide(),this.props.data.configure.cancel&&this.props.data.configure.cancel()}sure(){this.props.dispatchHide(),this.props.data.configure.sure&&this.props.data.configure.sure()}render(){this.props.data.configure.hidden;let e=[];const{type:t,configure:o}=this.props.data;let s=o.style||W.EBTN_STYLE_CONFIG.kNormal,n=`ok-btn ${s[0]}`,i=`cancel-btn ${s[1]}`,a=`${(o.linestyle||W.LINE_CONFIRM_TITLE.lineTitle)[0]}`;return"confirm"==t&&e.push(K("button",{className:i,onClick:this.hide.bind(this)},"cancel-btn")),e.push(K("button",{className:n,onClick:this.sure.bind(this)},"ok-btn")),K("div",{className:`mask dialog-layer ${this.props.data.configure.hidden?" hide":" show"}`},void 0,K("div",{className:`${"dialog "+(o.classname||"")}${o.large_mod?" large":""}`,style:o.styles},void 0,K("div",{className:o.title_hidden?"title clear":"title"},void 0,"个人信息"==o.title?K("div",{className:a},void 0,o.title_hidden?"":`${o.title||"提示"}`):o.title_hidden?"":`${o.title||"提示"}`,this.props.data.configure.close_hidden?"":K("div",{className:"close-btn",onClick:this.hide.bind(this)})),K("div",{className:o.nobutton?"content nobtn":"content"},void 0,K("div",{className:o.large_mod?"texts large":"texts"},void 0,o.content),o.nobutton?"":K("div",{className:"btns"},void 0,e))))}onHotKey(e){if(this.props.showing)switch(A[e]){case A.KEY_ENTER:this.sure();break;case A.KEY_ESC:this.hide()}}componentWillUnmount(){this.onHotKey=null}}),Y=o(56),q=o.n(Y),X=o(57),J=o.n(X),z=o(58),Q=o.n(z);const Z="MINGXI-INC";var ee=new class{constructor(){let e;e=Q.a?D.remote.app:D.app;const t=new J.a(`${e.getPath("userData")}/db.json`);this.$db=q()(t)}get(e){let t=this.$db.get(Z).cloneDeep().value();if(t)return t[e]}store(e,t){let o=this.$db.get(Z).value()||{};o[e]=t,this.$db.set(Z,{...o}).write()}remove(e){let t=this.$db.get(Z).value();t&&t[e]&&(delete t[e],this.$db.set(Z,{...t}).write())}clear(){this.$db.unset(Z).write()}update(){this.$db.read()}},te=o(22),oe=o.n(te),se=o(15),ne=o.n(se);const ie=D.remote.require("pandora-nodejs-sdk"),ae=D.remote.require("electron-log"),re=D.remote.app.getPath("userData");var de,ce=new class{get agoraAppId(){let e=window.ENV_CONF||{};return e.TEST||e.DEBUG?"8255568bc0ab4117bce79c6ca65e1c99":"d75fe75ab0404a90b2ed7e5bab216f80"}get agoraChannelKey(){let e=window.ENV_CONF||{};return e.TEST||e.DEBUG?"83dfd49b300c4c1d8af4a5ff68c12214":"7c9b6ed9bba54dc59471cfa09e9f23ea"}get dmg(){return this.$dmg}set dmg(e){this.$dmg=e}get user(){return this.$user||{}}set user(e){this.$user=e}get loading(){return this.$loading}set loading(e){this.$loading=e}get detector(){return this.$detector}set detector(e){this.$detector=e}get course(){return this.$course}set course(e){this.$course=e}get room(){return this.$room}set room(e){this.$room=e}get session(){return this.$session}set session(e){this.$session=e}get storage(){return this.$storage||(this.$storage=u),this.$storage}set storage(e){this.$storage=e}set usingBackupUrl(e){this.$using_backup_url=e}get usingBackupUrl(){return this.$using_backup_url}get video_device_id(){return this.$video_device_id}set video_device_id(e){this.$video_device_id=e}get audio_device_id(){return this.$audio_device_id}set audio_device_id(e){this.$audio_device_id=e}get domains(){return this.$domains||W.DOMAIN_LIST_DEFAULT}set domains(e){this.$domains=e}addDownloaded(e,t){this.$local_files||(this.$local_files={}),this.$local_files[e]=t}getDownloaded(e){if(this.$local_files)return this.$local_files[e]}send_to_main(e){console.log("send_to_main",D.ipcRenderer,e),D.ipcRenderer.send(...e)}restoreOldDevice(){localStorage.getItem("IS_OLD_DEVICE")&&(console.log("copy low version old device"),ee.store("IS_OLD_DEVICE",1))}set oldDevice(e){ee.store("IS_OLD_DEVICE",1&e)}set joinClassEnabled(e){this.$join_class_enabled=!!e}get joinClassEnabled(){return void 0===this.$join_class_enabled||this.$join_class_enabled}get(e,t=document){return"object"==typeof e?e:(t&&"string"==typeof t&&(t=this.get(t)),/^\./.test(e)?t.getElementsByClassName(e.replace(/^\./,"")):(/^#/.test(e)&&(e=e.replace(/^#/,"")),document.getElementById(e)))}offset(e){e=this.get(e);var t=0,o=0;do{t+=e.offsetTop,o+=e.offsetLeft,e=e.parentNode}while(e.parentNode);return{top:t,left:o}}get rkey(){return"TNyv1khX-,5IOzgBWgpu"}empty(e){if("string"==typeof e&&(e=this.get(e)),e.length)for(let t=0,o=e.length;t<o;t++)e[t].innerHTML="";else e&&(e.innerHTML="")}get lkey(){return"Yu6oGz2USJb9RMgG84KalD,19Dnr5YuF0mV1QoEgBxX2"}__upload_log(e,t,o){return new Promise((s,n)=>{if(!ne.a.existsSync(e))return void n();let i=ne.a.readFileSync(e,"utf8");if(i){let a=this.lkey.split(","),r=this.rkey.split(",");i=i.split("\n").map(o),ie.send(new ie.Auth(a[0]+"DxyKE2vUz"+r[0],a[1]+"PVhUEGplM"+r[1]),t,i).then(()=>{ne.a.writeFileSync(e,"","utf8")}).then(s,n)}else n()})}upload_system_logs(){this.__upload_log(oe.a.join(re,"system.log"),"mingxi_pc_system",e=>{let t=e.split(" ");return{time:[t.shift(),t.shift()].join(" "),content:t.join(" "),user:this.user.id,name:this.user.child_name}}).then(()=>{ae.log("update system logs success")}).catch(e=>{ae.error("update system logs failed ",e)})}upload_agora_logs(){this.__upload_log(oe.a.join(re,"agora.log"),"mingxi_pc_agora",e=>{let t=e.split(";");return{time:t.shift(),content:t.join(";"),user:this.user.id,name:this.user.child_name}}).then(()=>{ae.log("update agora logs success")}).catch(e=>{ae.error("update agora logs failed ",e)})}log(...e){ae.log(...e);let t=window.ENV_CONF||{};(t.DEBUG||t.TC_DEBUG||t.TEST)&&console.log(...e)}error(...e){ae.error(...e);let t=window.ENV_CONF||{};(t.DEBUG||t.TC_DEBUG||t.TEST)&&console.error(...e)}filterVideoDevice(e){return e=e.filter((e={})=>{let t=!1;return W.ILLEGAL_AUDIOS.map(o=>{new RegExp(o.toLowerCase()).test((e.devicename||"").toLowerCase())&&(t=!0)}),!t})}};function le(e,t,o,s){de||(de="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&n)for(var a in n)void 0===t[a]&&(t[a]=n[a]);else t||(t=n||{});if(1===i)t.children=s;else if(i>1){for(var r=new Array(i),d=0;d<i;d++)r[d]=arguments[d+3];t.children=r}return{$$typeof:de,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}const ue=I.a.remote;var me=le(j,{});var pe,he=Object(a.b)((e,t)=>({account:e.login.account,dialog:e.dialog}),(e,t)=>({confirm:t=>e(E(t)),onNetStatusBad:()=>e({type:"NET_STATUS_BAD"}),onNetStatusGood:()=>e({type:"NET_STATUS_GOOD"})}))(class extends n.a.Component{constructor(e){super(e)}render(){const{dialog:e}=this.props;return le(v.a,{},void 0,le("div",{className:"full-h"},void 0,le("div",{className:"slave",onDoubleClick:()=>{ue.getCurrentWindow()}}),le("div",{className:"slave-l",onDoubleClick:()=>{}}),le(g.a,{exact:!0,path:"/",render:()=>me}),e.showing?le(V,{data:e}):""))}}),ve=o(60);function ge(e,t,o,s){pe||(pe="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&n)for(var a in n)void 0===t[a]&&(t[a]=n[a]);else t||(t=n||{});if(1===i)t.children=s;else if(i>1){for(var r=new Array(i),d=0;d<i;d++)r[d]=arguments[d+3];t.children=r}return{$$typeof:pe,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}D.ipcRenderer.on("configure",(e,t)=>{window.ENV_CONF||(window.ENV_CONF={});for(let e in t)window.ENV_CONF[e]=t[e];let o;!function(){switch(process.platform){case"win32":return"win";case"darwin":;}}();o=t.__apppath+"/dist",console.log("app configure",t),t.data&&t.data.usingBackupUrl&&(ce.usingBackupUrl=!0),function(){const e=[ve.a],t=Object(r.d)(h,Object(r.a)(...e));t.dispatch(S()),Object(i.render)(ge(a.a,{store:t},void 0,_e),document.getElementById("app"))}()}),D.ipcRenderer.on("systeminfo",(e,t)=>{console.log("systeminfo",t),window.ENV_CONF||(window.ENV_CONF={});for(let e in t)window.ENV_CONF[e]=t[e]});var _e=ge(he,{})},2:function(e,t){e.exports=require("electron")},22:function(e,t){e.exports=require("path")},44:function(e,t){e.exports=require("string_decoder")},54:function(e,t){const o={KEY_C:{code:"C",windowFocusNeeded:!0},KEY_M:{code:"M",windowFocusNeeded:!0},KEY_G:{code:"G",windowFocusNeeded:!0},KEY_LEFT:{code:"Left",windowFocusNeeded:!0},KEY_RIGHT:{code:"Right",windowFocusNeeded:!0},KEY_ENTER:{code:"Return",windowFocusNeeded:!0},KEY_ESC:{code:"Escape",windowFocusNeeded:!0}};for(const e in o)o[e].toString=()=>o[e].code;e.exports=o},55:function(e,t){e.exports={TEST_URL:(()=>{try{return localStorage.getItem("debug_ip")||"http://kecheng1.youshiyuwen.cn"}catch(e){}})(),ONLINE_URL:"https://www.mingxiyuwen.com",TENCENT_APPID:1400098973,TENCENT_ACCOUNTTYPE:28218,VIDEO_T_QUALITY:"480P_3",VIDEO_S_QUALITY:"120P_3",MAIN_WINDOW_SIZE:{width:1070,height:590},ROOM_ID:111111,LARGE_MODE:480,DANCE_MODE:200,SMALL_MODE:88,WEB_IM_GROUP_TIP:{JOIN:1,QUIT:2,KICK:3,SET_ADMIN:4,CANCEL_ADMIN:5,MODIFY_GROUP_INFO:6,MODIFY_MEMBER_INFO:7},CELL_COUNT:4,LOGIN_E_NET:201,LOGOUT_E_KICKED:103,LOGOUT_E_NET:102,LOGOUT_SUCCESS:101,GENERAL_E_NOT_LOGIN:1003,JS_READY:"jsready",INIT_ROOM:"initroom",MEMBER_ADD:"member_add",MEMBER_LEAVE:"member_leave",CLEARLINES:"clearlines",NEXT_PAGE:"nextpage",SYNC:"sync",VIDEO_PLAY:"videoplay",VIDEO_STOP:"videostop",OPEN_RACE:"#openrace",CLOSE_RACE:"#closerace",OPEN_MIC:"#openmic",CLOSE_MIC:"#closemic",COURSE_PAUSE:"#coursepause",COURSE_RESUME:"#courseresume",PUT_DANCE:"#putdance",BACK_DANCE:"#backdance",SCENE_MOVE:"scenemove",START_COURSE:"*startcourse",STOP_COURSE:"*stopcourse",WARN:"warn",WARN_RELIEVE:"warn_relieve",ENABLE_MAGIC:"enablemagic",DISABLE_MAGIC:"disablemagic",MUTE_ALL:"#muteall",UNMUTE_ALL:"#unmuteall",SHOW_RANKS:"*showranks",HIDE_RANKS:"*hideranks",OPEN_MEDDLE:"open_meddle",UPDATE:{AVAILABLE:"update available",LASTEST:"the lastest version",CHECKING:"checking for update",ERROR:"update error",DOWNLOADING:"update downloading",DOWNLOADED:"update downloaded",DOWNLOADING_UI:"downloading ui",DOWNLOADED_UI:"downloaded ui"},COCOS:1,ILLEGAL_AUDIOS:["cyberlink webcam splitter","manycam virtual webcam","BBlivePreview","CamTwist","17GuaGua Cam","PixelMaster Video HDR","PG splitter","Built-in iSight","6room"],DOMAIN_URL:"https://mingxicn-test.oss-cn-beijing.aliyuncs.com/domain-yaduobao.json",DOMAIN_URL_TEST:"http://kechengassets.mx0a.com/steven.json",DOMAIN_LIST_DEFAULT:{frame:["https://bundlesyuntest.mx0a.com","https://mingxi-bundles-test.oss-cn-beijing.aliyuncs.com"],bundles:["https://bundlesyuntest.mx0a.com","https://mingxi-bundles-test.oss-cn-beijing.aliyuncs.com"]},DOMAIN_LIST_DEFAULT_TEST:{frame:["https://bundlesyuntest.mx0a.com","https://mingxi-bundles-test.oss-cn-beijing.aliyuncs.com"],bundles:["https://bundlesyuntest.mx0a.com","https://mingxi-bundles-test.oss-cn-beijing.aliyuncs.com"]},EBTN_STYLE_CONFIG:{kNormal:["ok","cancel"],kDeviceTest:["check-again","check-jump"],kChangePwd:["changepwd","none"],kClassExit:["leave-class","end-class"]},LINE_CONFIRM_TITLE:{lineTitle:["title-text"]}}},84:function(e,t,o){},85:function(e,t,o){},86:function(e,t,o){},87:function(e,t,o){},96:function(e,t,o){}});