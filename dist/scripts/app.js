(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
	AGORA_APPID 	 	: "d75fe75ab0404a90b2ed7e5bab216f80",
	AGORA_CHANNEL_KEY	: "7c9b6ed9bba54dc59471cfa09e9f23ea",
	VIDEO_QUALITY 		: "480P_4",
	CELL_COUNT 			: 4,
	VIDEO_DEVICE_ID		: "422bbdb68bec0dcbd49a04aee9b4088fd5a50b6536f99ab330dd606bdbdbe09d",
	AUDIO_DEVICE_ID 	: "3ee753f849656cd89dcd2bf6e154c5ac123c94372d147f91b72f1f23101e3d04",
	LOGIN_E_NET			: 201,
	LOGOUT_E_NET		: 102,
	GENERAL_E_NOT_LOGIN : 1003
};
},{}],2:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("AgoraRTC",[],t):"object"==typeof exports?exports.AgoraRTC=t():e.AgoraRTC=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=34)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(13),o=function(){var e,t,i,o,r,a,s=0;return e=function(e){e>4?e=4:e<0&&(e=0),s=e},t=function(){var e=arguments[0],t=arguments;if(!(e<s))switch(e){case 0:t[0]=(0,n.getTimestamp)()+" DEBUG:",console.log.apply(console,t);break;case 1:t[0]=(0,n.getTimestamp)()+" INFO:",console.log.apply(console,t);break;case 2:t[0]=(0,n.getTimestamp)()+" WARN:",console.warn.apply(console,t);break;case 3:t[0]=(0,n.getTimestamp)()+" ERROR:",console.error.apply(console,t);break;default:return t[0]=(0,n.getTimestamp)()+" DEFAULT:",void console.log.apply(console,t)}},i=function(){for(var e=[0],i=0;i<arguments.length;i++)e.push(arguments[i]);t.apply(this,e)},o=function(){for(var e=[1],i=0;i<arguments.length;i++)e.push(arguments[i]);t.apply(this,e)},r=function(){for(var e=[2],i=0;i<arguments.length;i++)e.push(arguments[i]);t.apply(this,e)},a=function(){for(var e=[3],i=0;i<arguments.length;i++)e.push(arguments[i]);t.apply(this,e)},{DEBUG:0,INFO:1,WARNING:2,ERROR:3,NONE:4,setLogLevel:e,log:t,debug:i,info:o,warning:r,error:a}}();t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["webcs-1.agora.io","webcs-2.agora.io"],o=["webcs-3.agora.io","webcs-4.agora.io"],r={"90p_1":[160,90],"120p_1":[160,120],"120p_3":[120,120],"120p_4":[212,120],"180p_1":[320,180],"180p_3":[180,180],"180p_4":[240,180],"240p_1":[320,240],"240p_3":[240,240],"240p_4":[424,240],"360p_1":[640,360],"360p_3":[360,360],"360p_4":[640,360],"360p_6":[360,360],"360p_7":[480,360],"360p_8":[480,360],"360p_9":[640,360],"360p_10":[640,360],"360p_11":[640,360],"480p_1":[640,480],"480p_2":[640,480],"480p_3":[480,480],"480p_4":[640,480],"480p_6":[480,480],"480p_8":[848,480],"480p_9":[848,480],"480p_10":[640,480],"720p_1":[1280,720],"720p_2":[1280,720],"720p_3":[1280,720],"720p_5":[960,720],"720p_6":[960,720],"1080p_1":[1920,1080],"1080p_2":[1920,1080],"1080p_3":[1920,1080],"1080p_5":[1920,1080],"1440p_1":[2560,1440],"1440p_2":[2560,1440],"4k_1":[3840,2160],"4k_3":[3840,2160]};t.GIT_VERSION="release_20180410_01-2-g5dcca91",t.VERSION="2.2.0",t.WEBCS_DOMAIN=n,t.WEBCS_DOMAIN_BACKUP_LIST=o,t.EVENT_REPORT_DOMAIN="webcollector-1.agora.io",t.EVENT_REPORT_BACKUP_DOMAIN="webcollector-2.agora.io",t.WEBCS_BACKUP_CONNECT_TIMEOUT=6e3,t.HTTP_CONNECT_TIMEOUT=5e3,t.SUPPORT_RESOLUTION_LIST=r},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){return(0,l.default)().replace(/-/g,"").toUpperCase()}Object.defineProperty(t,"__esModule",{value:!0}),t.random=t.safeCall=t.is32Uint=t.vsResHack=t.CSCrashRecord=t.audioLevelHelper=t.generateSessionId=t.isLiveTranscodingValid=t.checkSystemRequirements=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=i(3),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(a),d=i(0),c=n(d),u=i(14),l=n(u),p=function(){var e=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,t=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.msGetUserMedia||navigator.mozGetUserMedia||navigator.mediaDevices&&navigator.mediaDevices.getUserMedia,i=window.WebSocket,n=!!e&&!!t&&!!i,o=!1;return c.default.debug(s.getBrowserInfo(),"isAPISupport:"+n),s.isChrome()&&s.getBrowserVersion()>=58&&"iOS"!==s.getBrowserOS()&&(o=!0),s.isFireFox()&&s.getBrowserVersion()>=56&&(o=!0),s.isOpera()&&s.getBrowserVersion()>=45&&(o=!0),s.isSafari()&&s.getBrowserVersion()>=11&&(o=!0),(s.isWeChatBrowser()||s.isQQBrowser())&&"iOS"!==s.getBrowserOS()&&(o=!0),s.isSupportedPC()||s.isSupportedMobile()||(o=!1),n&&o},f=function(){var e=arguments[0];if("function"==typeof e){var t=Array.prototype.slice.call(arguments,1);e.apply(null,t)}},m=window.AudioContext||window.webkitAudioContext,g=m?new m:null,v=function(e){if(g)return this.audioContext=g,this.sourceNode=e.otWebkitAudioSource||this.audioContext.createMediaStreamSource(e),this.analyser=this.audioContext.createAnalyser(),this.timeDomainData=new Uint8Array(this.analyser.frequencyBinCount),this.sourceNode.connect(this.analyser),this.getAudioLevel=function(){if(this.analyser){this.analyser.getByteTimeDomainData(this.timeDomainData);for(var e=0,t=0;t<this.timeDomainData.length;t++)e=Math.max(e,Math.abs(this.timeDomainData[t]-128));return e/128}return c.default.warning("can't find analyser in audioLevelHelper"),0},this},_={shouldBlock:function(){if(localStorage){var e=JSON.parse(localStorage.getItem("agoraCSCrashRecord"));return!!(e&&e.length>6)&&(new Date).getTime()-e[e.length-6]-1e4<0}return!1},record:function(e){if(localStorage){var t=JSON.parse(localStorage.getItem("agoraCSCrashRecord"));t=!t||t.length>50?[]:t,t.push(e),localStorage.setItem("agoraCSCrashRecord",JSON.stringify(t))}}},S=function(e,t,i){try{var n=document.createElement("video");n.setAttribute("autoplay",""),n.setAttribute("muted",""),n.setAttribute("playsinline",""),n.setAttribute("style","position: absolute; top: 0; left: 0; width:1px; high:1px;"),document.body.appendChild(n),n.addEventListener("playing",function(e){s.isFireFox()?n.videoWidth&&(t(n.videoWidth,n.videoHeight),document.body.removeChild(n)):(t(n.videoWidth,n.videoHeight),document.body.removeChild(n))}),n.srcObject=e}catch(e){i(e)}},h=function(e){return!!(0<=e&&e<=4294967295)},E=function(e){var t=["lowLatency","userConfigExtraInfo","transcodingUsers"];for(var i in e)if("lowLatency"===i&&"boolean"!=typeof e[i]||"userConfigExtraInfo"===i&&"object"!==r(e[i])||"transcodingUsers"===i&&!b(e[i])||!~t.indexOf(i)&&"number"!=typeof e[i])throw new Error("Param ["+i+"] is inVaild");return!0},b=function(e){for(var t=0;t<e.length;t++)for(var i in e[t])if("number"!=typeof e[t][i])throw new Error("Param user["+t+"] - ["+i+"] is inVaild");return!0},R=function(e){isNaN(e)&&(e=1e3);var t=+new Date;t=(9301*t+49297)%233280;var i=t/233280;return Math.ceil(i*e)};t.checkSystemRequirements=p,t.isLiveTranscodingValid=E,t.generateSessionId=o,t.audioLevelHelper=v,t.CSCrashRecord=_,t.vsResHack=S,t.is32Uint=h,t.safeCall=f,t.random=R},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=m();return e.name&&"Chrome"===e.name},o=function(){var e=m();return e.name&&"Safari"===e.name},r=function(){var e=m();return e.name&&"Firefox"===e.name},a=function(){var e=m();return e.name&&"OPR"===e.name},s=function(){var e=m();return e.name&&"QQBrowser"===e.name},d=function(){var e=m();return e.name&&"MicroMessenger"===e.name},c=function(){var e=p();return"Linux"===e||"Mac OS X"===e||"Mac OS"===e||-1!==e.indexOf("Windows")},u=function(){var e=p();return"Android"===e||"iOS"===e},l=function(){return m().version},p=function(){return m().os},f=function(){var e,t=navigator.userAgent,i=t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];"Chrome"===i[1]&&null!=(e=t.match(/(OPR(?=\/))\/?(\d+)/i))&&(i=e),"Safari"===i[1]&&null!=(e=t.match(/version\/(\d+)/i))&&(i[2]=e[1]),~t.toLowerCase().indexOf("qqbrowser")&&null!=(e=t.match(/(qqbrowser(?=\/))\/?(\d+)/i))&&(i=e),~t.toLowerCase().indexOf("micromessenger")&&null!=(e=t.match(/(micromessenger(?=\/))\/?(\d+)/i))&&(i=e),~t.toLowerCase().indexOf("edge")&&null!=(e=t.match(/(edge(?=\/))\/?(\d+)/i))&&(i=e),~t.toLowerCase().indexOf("trident")&&null!=(e=/\brv[ :]+(\d+)/g.exec(t)||[])&&(i=[null,"IE",e[1]]);var n=void 0,o=[{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 3.11",r:/Win16/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];for(var r in o){var a=o[r];if(a.r.test(navigator.userAgent)){n=a.s;break}}return{name:i[1],version:i[2],os:n}},m=function(){var e=f();return function(){return e}}();t.getBrowserInfo=m,t.getBrowserVersion=l,t.getBrowserOS=p,t.isChrome=n,t.isSafari=o,t.isFireFox=r,t.isOpera=a,t.isQQBrowser=s,t.isWeChatBrowser=d,t.isSupportedPC=c,t.isSupportedMobile=u},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e={};return e.dispatcher={},e.dispatcher.eventListeners={},e.addEventListener=function(t,i){void 0===e.dispatcher.eventListeners[t]&&(e.dispatcher.eventListeners[t]=[]),e.dispatcher.eventListeners[t].push(i)},e.on=e.addEventListener,e.removeEventListener=function(t,i){var n;-1!==(n=e.dispatcher.eventListeners[t].indexOf(i))&&e.dispatcher.eventListeners[t].splice(n,1)},e.dispatchEvent=function(t){var i;for(i in e.dispatcher.eventListeners[t.type])e.dispatcher.eventListeners[t.type].hasOwnProperty(i)&&"function"==typeof e.dispatcher.eventListeners[t.type][i]&&e.dispatcher.eventListeners[t.type][i](t)},e.dispatchSocketEvent=function(t){var i;for(i in e.dispatcher.eventListeners[t.type])e.dispatcher.eventListeners[t.type].hasOwnProperty(i)&&"function"==typeof e.dispatcher.eventListeners[t.type][i]&&e.dispatcher.eventListeners[t.type][i](t.msg)},e},o=function(e){var t={};return t.type=e.type,t},r=function(e){var t=o(e);return t.stream=e.stream,t.reason=e.reason,t.msg=e.msg,t},a=function(e){var t=o(e);return t.uid=e.uid,t.attr=e.attr,t.stream=e.stream,t},s=function(e){var t=o(e);return t.msg=e.msg,t},d=function(e){var t=o(e);return t.url=e.url,t.reason=e.reason,t};t.EventDispatcher=n,t.StreamEvent=r,t.ClientEvent=a,t.MediaEvent=s,t.LiveStreamingEvent=d},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SUBSCRIBE=t.PUBLISH=t.JOIN_GATEWAY=t.JOIN_CHOOSE_SERVER=t.SESSION_INIT=t.report=void 0;var n=i(1),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(n),r=i(0),a=(function(e){e&&e.__esModule}(r),i(9)),s={type:null,sid:null,lts:null,succ:null,cname:null,uid:null,peerid:null,cid:null,elaps:null,extend:null,vid:0},d=function(){var e={};return e.list={},e.url=(0,a.shouldUseHttps)()?"https://"+o.EVENT_REPORT_DOMAIN+":6443/events/report":"http://"+o.EVENT_REPORT_DOMAIN+":6080/events/report",e.urlBackup=(0,a.shouldUseHttps)()?"https://"+o.EVENT_REPORT_BACKUP_DOMAIN+":6443/events/report":"http://"+o.EVENT_REPORT_BACKUP_DOMAIN+'":6080/events/report',e.sessionInit=function(t,i){i.sid=t;var n=Object.assign(s,i);e.list[t]||(n.startTime=+new Date);var r=Object.assign({},n);delete n.appid,delete n.mode,e.list[t]=n,r.extend=null,r.ver=o.VERSION,r.type="session_init",r.browser=navigator.userAgent,r.lts=+new Date,r.elaps=r.lts-r.startTime,e.send(r)},e.joinChooseServer=function(t,i,n){var o;o=n?Object.assign(e.list[t],i):Object.assign({},e.list[t],i),o.type="join_choose_server";var r=+new Date;o.ev_elaps=r-o.lts,o.elaps=r-o.startTime,o.lts=r,o.serverList=JSON.stringify(o.serverList),e.send(o)},e.joinGateway=function(t,i){var n=Object.assign(e.list[t],i);n.type="join_gateway";var o=+new Date;n.ev_elaps=o-n.lts,n.elaps=o-n.startTime,n.lts=o,e.send(n)},e.publish=function(t,i){var n=Object.assign({},e.list[t],i);n.type="publish";var o=+new Date;n.ev_elaps=o-n.lts,n.elaps=o-n.startTime,n.lts=o,e.send(n)},e.subscribe=function(t,i){var n=Object.assign({},e.list[t],i);n.type="subscribe";var o=+new Date;n.ev_elaps=o-n.lts,n.elaps=o-n.startTime,n.lts=o,e.send(n)},e.firstRemoteFrame=function(t,i){var n=Object.assign({},e.list[t],i);n.type="first_remote_frame",n.lts=+new Date,n.elaps=n.lts-n.startTime,e.send(n)},e.streamSwitch=function(t,i){var n=Object.assign({},e.list[t],i);n.type="stream_switch",n.isdual=i.isdual,n.lts=+new Date,n.elaps=n.lts-n.startTime,e.send(n)},e.audioSendingStopped=function(t,i){var n=Object.assign({},e.list[t],i);n.type="audio_sending_stopped",n.lts=+new Date,n.elaps=n.lts-n.startTime,e.send(n)},e.videoSendingStopped=function(t,i){var n=Object.assign({},e.list[t],i);n.type="video_sending_stopped",n.lts=+new Date,n.elaps=n.lts-n.startTime,e.send(n)},e.send=function(t){try{(0,a.post)(e.url,t,null,function(i){(0,a.post)(e.urlBackup,t,null,function(e){},{timeout:1e4})},{timeout:1e4})}catch(e){}},e}();t.report=d,t.SESSION_INIT="session_init",t.JOIN_CHOOSE_SERVER="join_choose_server",t.JOIN_GATEWAY="join_gateway",t.PUBLISH="publish",t.SUBSCRIBE="subscribe"},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={FAILED:"FAILED",INVALID_KEY:"INVALID_KEY",INVALID_OPERATION:"INVALID_OPERATION",INVALID_PARAMETER:"INVALID_PARAMETER",INVALID_LOCAL_STREAM:"INVALID_LOCAL_STREAM",INVALID_REMOTE_STREAM:"INVALID_REMOTE_STREAM",INVALID_DYNAMIC_KEY:"INVALID_DYNAMIC_KEY",DYNAMIC_KEY_TIMEOUT:"DYNAMIC_KEY_TIMEOUT",NO_VOCS_AVAILABLE:"NO_VOCS_AVAILABLE",NO_VOS_AVAILABLE:"ERR_NO_VOS_AVAILABLE",JOIN_CHANNEL_TIMEOUT:"ERR_JOIN_CHANNEL_TIMEOUT",NO_AVAILABLE_CHANNEL:"NO_AVAILABLE_CHANNEL",LOOKUP_CHANNEL_TIMEOUT:"LOOKUP_CHANNEL_TIMEOUT",LOOKUP_CHANNEL_REJECTED:"LOOKUP_CHANNEL_REJECTED",OPEN_CHANNEL_TIMEOUT:"OPEN_CHANNEL_TIMEOUT",OPEN_CHANNEL_REJECTED:"OPEN_CHANNEL_REJECTED",REQUEST_DEFERRED:"REQUEST_DEFERRED",STREAM_ALREADY_PUBLISHED:"STREAM_ALREADY_PUBLISHED",STREAM_NOT_YET_PUBLISHED:"STREAM_NOT_YET_PUBLISHED",JOIN_TOO_FREQUENT:"JOIN_TOO_FREQUENT",SOCKET_ERROR:"SOCKET_ERROR",SOCKET_DISCONNECTED:"SOCKET_DISCONNECTED",PEERCONNECTION_FAILED:"PEERCONNECTION_FAILED",CONNECT_GATEWAY_ERROR:"CONNECT_GATEWAY_ERROR",SERVICE_NOT_AVAILABLE:"SERVICE_NOT_AVAILABLE",JOIN_CHANNEL_FAILED:"JOIN_CHANNEL_FAILED",PUBLISH_STREAM_FAILED:"PUBLISH_STREAM_FAILED",UNPUBLISH_STREAM_FAILED:"UNPUBLISH_STREAM_FAILED",SUBSCRIBE_STREAM_FAILED:"SUBSCRIBE_STREAM_FAILED",UNSUBSCRIBE_STREAM_FAILED:"UNSUBSCRIBE_STREAM_FAILED",NO_SUCH_REMOTE_STREAM:"NO_SUCH_REMOTE_STREAM",ERR_FAILED:"1",ERR_INVALID_VENDOR_KEY:"101",ERR_INVALID_CHANNEL_NAME:"102",WARN_NO_AVAILABLE_CHANNEL:"103",WARN_LOOKUP_CHANNEL_TIMEOUT:"104",WARN_LOOKUP_CHANNEL_REJECTED:"105",WARN_OPEN_CHANNEL_TIMEOUT:"106",WARN_OPEN_CHANNEL_REJECTED:"107",WARN_REQUEST_DEFERRED:"108",ERR_DYNAMIC_KEY_TIMEOUT:"109",ERR_INVALID_DYNAMIC_KEY:"110",ERR_NO_VOCS_AVAILABLE:"2000",ERR_NO_VOS_AVAILABLE:"2001",ERR_JOIN_CHANNEL_TIMEOUT:"2002",IOS_NOT_SUPPORT:"IOS_NOT_SUPPORT",WECHAT_NOT_SUPPORT:"WECHAT_NOT_SUPPORT",SHARING_SCREEN_NOT_SUPPORT:"SHARING_SCREEN_NOT_SUPPORT",STILL_ON_PUBLISHING:"STILL_ON_PUBLISHING",LOW_STREAM_ALREADY_PUBLISHED:"LOW_STREAM_ALREADY_PUBLISHED",LOW_STREAM_NOT_YET_PUBLISHED:"LOW_STREAM_ALREADY_PUBLISHED",HIGH_STREAM_NOT_VIDEO_TRACE:"HIGH_STREAM_NOT_VIDEO_TRACE",NOT_FIND_DEVICE_BY_LABEL:"NOT_FIND_DEVICE_BY_LABEL",ENABLE_DUALSTREAM_FAILED:"ENABLE_DUALSTREAM_FAILED",DISABLE_DUALSTREAM_FAILED:"DISABLE_DUALSTREAM_FAILED",ELECTRON_NOT_SUPPORT_SHARING_SCREEN:"ELECTRON_NOT_SUPPORT_SHARING_SCREEN"},o={2000:"ERR_NO_VOCS_AVAILABLE",2001:"ERR_NO_VOS_AVAILABLE",2002:"ERR_JOIN_CHANNEL_TIMEOUT",101:"ERR_INVALID_VENDOR_KEY",102:"ERR_INVALID_CHANNEL_NAME",103:"WARN_NO_AVAILABLE_CHANNEL",104:"WARN_LOOKUP_CHANNEL_TIMEOUT",105:"WARN_LOOKUP_CHANNEL_REJECTED",106:"WARN_OPEN_CHANNEL_TIMEOUT",107:"WARN_OPEN_CHANNEL_REJECTED",108:"WARN_REQUEST_DEFERRED",109:"ERR_DYNAMIC_KEY_TIMEOUT",110:"ERR_NO_AUTHORIZED",111:"ERR_VOM_SERVICE_UNAVAILABLE",112:"ERR_NO_CHANNEL_AVAILABLE_CODE",113:"ERR_TOO_MANY_USERS",114:"ERR_MASTER_VOCS_UNAVAILABLE",115:"ERR_INTERNAL_ERROR",116:"ERR_NO_ACTIVE_STATUS",117:"ERR_INVALID_UID",118:"ERR_DYNAMIC_KEY_EXPIRED",119:"ERR_STATIC_USE_DYANMIC_KE",120:"ERR_DYNAMIC_USE_STATIC_KE",2:"K_TIMESTAMP_EXPIRED",3:"K_CHANNEL_PERMISSION_INVALID",4:"K_CERTIFICATE_INVALID",5:"K_CHANNEL_NAME_EMPTY",6:"K_CHANNEL_NOT_FOUND",7:"K_TICKET_INVALID",8:"K_CHANNEL_CONFLICTED",9:"K_SERVICE_NOT_READY",10:"K_SERVICE_TOO_HEAVY",14:"K_UID_BANNED",15:"K_IP_BANNED",16:"K_CHANNEL_BANNED"};t.default=n,t.GatewayErrorCode=o},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getDevices=t.createStream=t.Stream=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=i(18),a=n(r),s=i(8),d=i(4),c=i(0),u=n(c),l=i(3),p=i(27),f=i(2),m=i(5),g=function(e){function t(){return null!==window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)&&window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1]<=35}function i(){return null!==window.navigator.userAgent.match("Firefox")}function n(t,i){return{width:{ideal:t},height:{ideal:i},deviceId:e.cameraId?{exact:e.cameraId}:void 0}}var r=(0,d.EventDispatcher)();if(r.params=Object.assign({},e),r.stream=e.stream,r.aux_stream=void 0,r.url=e.url,r.onClose=void 0,r.local=!1,r.video=!!e.video,r.audio=!!e.audio,r.screen=!!e.screen,r.screenAttributes={width:1920,height:1080,maxFr:5,minFr:1},r.videoSize=e.videoSize,r.player=void 0,r.audioLevelHelper=null,e.attributes=e.attributes||{},r.videoEnabled=!0,r.audioEnabled=!0,r.lowStream=null,r.videoWidth=0,r.videoHeight=0,r.streamId=null,r.streamId=e.streamID,r.mirror=!1!==e.mirror,!(void 0===r.videoSize||r.videoSize instanceof Array&&4===r.videoSize.length))throw Error("Invalid Video Size");r.videoSize=[640,480,640,480],void 0!==e.local&&!0!==e.local||(r.local=!0),r.initialized=!r.local;var c={true:!0,unspecified:!0,"90p_1":n(160,90),"120p_1":n(160,120),"120p_3":n(120,120),"120p_4":n(212,120),"180p_1":n(320,180),"180p_3":n(180,180),"180p_4":n(240,180),"240p_1":n(320,240),"240p_3":n(240,240),"240p_4":n(424,240),"360p_1":n(640,360),"360p_3":n(360,360),"360p_4":n(640,360),"360p_6":n(360,360),"360p_7":n(480,360),"360p_8":n(480,360),"360p_9":n(640,360),"360p_10":n(640,360),"360p_11":n(640,360),"480p_1":n(640,480),"480p_2":n(640,480),"480p_3":n(480,480),"480p_4":n(640,480),"480p_6":n(480,480),"480p_8":n(848,480),"480p_9":n(848,480),"480p_10":n(640,480),"720p_1":n(1280,720),"720p_2":n(1280,720),"720p_3":n(1280,720),"720p_5":n(960,720),"720p_6":n(960,720),"1080p_1":n(1920,1080),"1080p_2":n(1920,1080),"1080p_3":n(1920,1080),"1080p_5":n(1920,1080),"1440p_1":n(2560,1440),"1440p_2":n(2560,1440),"4k_1":n(3840,2160),"4k_3":n(3840,2160)};return r.unmuteAudio=void 0,r.muteAudio=void 0,r.unmuteVideo=void 0,r.muteVideo=void 0,r.setVideoResolution=function(t){return t+="",void 0!==c[t]&&(e.video=c[t],e.attributes=e.attributes||{},e.attributes.resolution=t,!0)},r.setVideoFrameRate=function(t){return!(0,l.isFireFox)()&&("object"===(void 0===t?"undefined":o(t))&&t instanceof Array&&t.length>1&&(e.attributes=e.attributes||{},e.attributes.minFrameRate=t[0],e.attributes.maxFrameRate=t[1],!0))},r.setVideoBitRate=function(t){return"object"===(void 0===t?"undefined":o(t))&&t instanceof Array&&t.length>1&&(e.attributes=e.attributes||{},e.attributes.minVideoBW=t[0],e.attributes.maxVideoBW=t[1],!0)},r.setScreenProfile=function(e){if("string"==typeof e&&r.screen){switch(e){case"480p_1":r.screenAttributes.width=640,r.screenAttributes.height=480,r.screenAttributes.maxFr=5,r.screenAttributes.minFr=1;break;case"480p_2":r.screenAttributes.width=640,r.screenAttributes.height=480,r.screenAttributes.maxFr=30,r.screenAttributes.minFr=25;break;case"720p_1":r.screenAttributes.width=1280,r.screenAttributes.height=720,r.screenAttributes.maxFr=5,r.screenAttributes.minFr=1;break;case"720p_2":r.screenAttributes.width=1280,r.screenAttributes.height=720,r.screenAttributes.maxFr=30,r.screenAttributes.minFr=25;break;case"1080p_1":r.screenAttributes.width=1920,r.screenAttributes.height=1080,r.screenAttributes.maxFr=5,r.screenAttributes.minFr=1;break;case"1080p_2":r.screenAttributes.width=1920,r.screenAttributes.height=1080,r.screenAttributes.maxFr=30,r.screenAttributes.minFr=25}return!0}return!1},r.setVideoProfileCustom=function(e){r.setVideoResolution(e[0]),r.setVideoFrameRate([e[1],e[1]]),r.setVideoBitRate([e[2],e[2]])},r.setVideoProfileCustomPlus=function(t){console.log(t),e.video=n(t.width,t.height),e.attributes=e.attributes||{},e.attributes.resolution=t.width+"x"+t.height,r.setVideoFrameRate([t.framerate,t.framerate]),r.setVideoBitRate([t.bitrate,t.bitrate])},r.setVideoProfile=function(e){if(r.profile=e,"string"==typeof e&&r.video){switch(e){case"120p":case"120P":case"120p_1":case"120P_1":r.setVideoResolution("120p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,65]);break;case"120p_3":case"120P_3":r.setVideoResolution("120p_3"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,50]);break;case"180p":case"180P":case"180p_1":case"180P_1":r.setVideoResolution("180p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,140]);break;case"180p_3":case"180P_3":r.setVideoResolution("180p_3"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,100]);break;case"180p_4":case"180P_4":r.setVideoResolution("180p_4"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,120]);break;case"240p":case"240P":case"240p_1":case"240P_1":r.setVideoResolution("240p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,200]);break;case"240p_3":case"240P_3":r.setVideoResolution("240p_3"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,140]);break;case"240p_4":case"240P_4":r.setVideoResolution("240p_4"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,220]);break;case"360p":case"360P":case"360p_1":case"360P_1":r.setVideoResolution("360p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,400]);break;case"360p_3":case"360P_3":r.setVideoResolution("360p_3"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,260]);break;case"360p_4":case"360P_4":r.setVideoResolution("360p_4"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,600]);break;case"360p_6":case"360P_6":r.setVideoResolution("360p_6"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,400]);break;case"360p_7":case"360P_7":r.setVideoResolution("360p_7"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,320]);break;case"360p_8":case"360P_8":r.setVideoResolution("360p_8"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,490]);break;case"360p_9":case"360P_9":r.setVideoResolution("360p_9"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,800]);break;case"360p_10":case"360P_10":r.setVideoResolution("360p_10"),r.setVideoFrameRate([24,24]),r.setVideoBitRate([20,800]);break;case"360p_11":case"360P_11":r.setVideoResolution("360p_11"),r.setVideoFrameRate([24,24]),r.setVideoBitRate([20,1e3]);break;case"480p":case"480P":case"480p_1":case"480P_1":r.setVideoResolution("480p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,500]);break;case"480p_2":case"480P_2":r.setVideoResolution("480p_2"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,1e3]);break;case"480p_3":case"480P_3":r.setVideoResolution("480p_3"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,400]);break;case"480p_4":case"480P_4":r.setVideoResolution("480p_4"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,750]);break;case"480p_6":case"480P_6":r.setVideoResolution("480p_6"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,600]);break;case"480p_8":case"480P_8":r.setVideoResolution("480p_8"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,610]);break;case"480p_9":case"480P_9":r.setVideoResolution("480p_9"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,930]);break;case"480p_10":case"480P_10":r.setVideoResolution("480p_10"),r.setVideoFrameRate([10,10]),r.setVideoBitRate([20,400]);break;case"720p":case"720P":case"720p_1":case"720P_1":r.setVideoResolution("720p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([30,1130]);break;case"720p_2":case"720P_2":r.setVideoResolution("720p_2"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([30,2e3]);break;case"720p_3":case"720P_3":r.setVideoResolution("720p_3"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([30,1710]);break;case"720p_5":case"720P_5":r.setVideoResolution("720p_5"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([30,910]);break;case"720p_6":case"720P_6":r.setVideoResolution("720p_6"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([30,1380]);break;case"1080p":case"1080P":case"1080p_1":case"1080P_1":r.setVideoResolution("1080p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([50,2080]);break;case"1080p_2":case"1080P_2":r.setVideoResolution("1080p_2"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([50,3e3]);break;case"1080p_3":case"1080P_3":r.setVideoResolution("1080p_3"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([50,3150]);break;case"1080p_5":case"1080P_5":r.setVideoResolution("1080p_5"),r.setVideoFrameRate([60,60]),r.setVideoBitRate([50,4780]);break;case"1440p":case"1440P":case"1440p_1":case"1440P_1":r.setVideoResolution("1440p_1"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([50,4850]);break;case"1440p_2":case"1440P_2":r.setVideoResolution("1440p_2"),r.setVideoFrameRate([60,60]),r.setVideoBitRate([50,7350]);break;case"4k":case"4K":case"4k_1":case"4K_1":r.setVideoResolution("4k_1"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([50,8910]);break;case"4k_3":case"4K_3":r.setVideoResolution("4k_3"),r.setVideoFrameRate([60,60]),r.setVideoBitRate([50,13500]);break;default:r.setVideoResolution("480p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,500])}return!0}return!1},r.getId=function(){return r.streamId},r.getAttributes=function(){return e.screen?r.screenAttributes:e.attributes},r.hasAudio=function(){return r.audio},r.hasVideo=function(){return r.video},r.hasScreen=function(){return r.screen},r.isVideoOn=function(){return(r.hasVideo()||r.hasScreen())&&r.videoEnabled},r.isAudioOn=function(){return r.hasAudio()&&r.audioEnabled},r.init=function(n,a){var d=((new Date).getTime(),arguments[2]);if(void 0===d&&(d=2),!0===r.initialized)return void("function"==typeof a&&a({type:"warning",msg:"STREAM_ALREADY_INITIALIZED"}));if(!0!==r.local)return void("function"==typeof a&&a({type:"warning",msg:"STREAM_NOT_LOCAL"}));try{if((e.audio||e.video||e.screen)&&void 0===e.url){u.default.debug("Requested access to local media");var c=e.video;if(e.screen)var p={video:c,audio:e.audio,screen:!0,data:!0,extensionId:e.extensionId,attributes:r.screenAttributes,fake:e.fake,mediaSource:e.mediaSource};else{var p={video:c,audio:e.audio,fake:e.fake};if(!t()){var m=30,g=30;void 0!==e.attributes.minFrameRate&&(m=e.attributes.minFrameRate),void 0!==e.attributes.maxFrameRate&&(g=e.attributes.maxFrameRate),i()?!0===p.video?(p.video={width:{ideal:r.videoSize[0]},height:{ideal:r.videoSize[1]},frameRate:{ideal:m,max:g}},r.setVideoBitRate([500,500])):"object"===o(p.video)&&(p.video.frameRate={ideal:m,max:g}):(!0===p.audio&&(p.audio=!e.microphoneId||{deviceId:{exact:e.microphoneId}}),!0===p.video?(p.video={width:{ideal:r.videoSize[0]},height:{ideal:r.videoSize[1]},frameRate:{ideal:m,max:g}},r.setVideoBitRate([500,500])):"object"===o(p.video)&&(p.video.frameRate={ideal:m,max:g}))}}u.default.debug(p);var v=Object.assign({},p);if((0,s.GetUserMedia)(v,function(t){u.default.debug("User has granted access to local media"),r.dispatchEvent({type:"accessAllowed"}),r.stream=t,r.initialized=!0,n&&n(),r.hasVideo()&&(0,f.vsResHack)(t,function(e,t){r.videoWidth=e,r.videoHeight=t},function(e){u.default.warning("vsResHack failed:"+e)}),e.screen&&(0,l.isChrome)()&&r.stream&&r.stream.getVideoTracks()[0]&&(r.stream.getVideoTracks()[0].onended=function(){r.dispatchEvent({type:"stopScreenSharing"})})},function(e){var t={type:"error",msg:e.name||e};switch(t.msg){case"Starting video failed":case"TrackStartError":if(r.videoSize=void 0,d>0)return void setTimeout(function(){r.init(n,a,d-1)},1);t.msg="MEDIA_OPTION_INVALID";break;case"DevicesNotFoundError":t.msg="DEVICES_NOT_FOUND";break;case"NotSupportedError":t.msg="NOT_SUPPORTED";break;case"PermissionDeniedError":t.msg="PERMISSION_DENIED",r.dispatchEvent({type:"accessDenied"});break;case"PERMISSION_DENIED":r.dispatchEvent({type:"accessDenied"});break;case"InvalidStateError":t.msg="PERMISSION_DENIED",r.dispatchEvent({type:"accessDenied"});break;case"NotAllowedError":r.dispatchEvent({type:"accessDenied"});break;case"ConstraintNotSatisfiedError":t.msg="CONSTRAINT_NOT_SATISFIED";break;default:t.msg||(t.msg="UNDEFINED")}u.default.error("Media access:",t.msg),"function"==typeof a&&a(t)}),e.screen&&e.audio){var _={video:!1,audio:p.audio};u.default.debug(_),(0,s.GetUserMedia)(_,function(e){u.default.info("User has granted access to auxiliary local media."),r.dispatchEvent({type:"accessAllowed"}),r.aux_stream=e},function(e){var t={type:"error",msg:e.name||e};switch(t.msg){case"Starting video failed":case"TrackStartError":if(r.videoSize=void 0,d>0)return void setTimeout(function(){r.init(n,a,d-1)},1);t.msg="MEDIA_OPTION_INVALID";break;case"DevicesNotFoundError":t.msg="DEVICES_NOT_FOUND";break;case"NotSupportedError":t.msg="NOT_SUPPORTED";break;case"PermissionDeniedError":case"InvalidStateError":t.msg="PERMISSION_DENIED",r.dispatchEvent({type:"accessDenied"});break;case"PERMISSION_DENIED":case"NotAllowedError":r.dispatchEvent({type:"accessDenied"});break;case"ConstraintNotSatisfiedError":t.msg="CONSTRAINT_NOT_SATISFIED";break;default:t.msg||(t.msg="UNDEFINED")}u.default.error("Media access:",t.msg),"function"==typeof a&&a(t)})}}else"function"==typeof a&&a({type:"warning",msg:"STREAM_HAS_NO_MEDIA_ATTRIBUTES"})}catch(e){u.default.error("Stream init:",e),"function"==typeof a&&a({type:"error",msg:e.message||e})}},r.close=function(){if(u.default.debug("Close stream with id",r.streamId),void 0!==r.stream){var e=r.stream.getTracks();for(var t in e)e.hasOwnProperty(t)&&e[t].stop();r.stream=void 0}r.initialized=!1,r.unmuteAudio=void 0,r.muteAudio=void 0,r.unmuteVideo=void 0,r.muteVideo=void 0,r.lowStream&&r.lowStream.close()},r.enableAudio=function(){return u.default.debug("Enable audio stream with id",r.streamId),!(!r.hasAudio()||!r.initialized||void 0===r.stream||!0===r.stream.getAudioTracks()[0].enabled)&&(void 0!==r.unmuteAudio&&r.unmuteAudio(),r.audioEnabled=!0,r.stream.getAudioTracks()[0].enabled=!0,!0)},r.disableAudio=function(){return u.default.debug("Disable audio stream with id",r.streamId),!!(r.hasAudio()&&r.initialized&&void 0!==r.stream&&r.stream.getAudioTracks()[0].enabled)&&(void 0!==r.muteAudio&&r.muteAudio(),r.audioEnabled=!1,r.stream.getAudioTracks()[0].enabled=!1,r.sid&&m.report.audioSendingStopped(r.sid,{succ:!0,reason:"muteAudio"}),!0)},r.enableVideo=function(){return u.default.debug("Enable video stream with id",r.streamId),!(!r.initialized||void 0===r.stream||!r.stream.getVideoTracks().length||!0===r.stream.getVideoTracks()[0].enabled)&&(void 0!==r.unmuteVideo&&r.unmuteVideo(),r.videoEnabled=!0,r.stream.getVideoTracks()[0].enabled=!0,r.lowStream&&r.lowStream.enableVideo(),!0)},r.disableVideo=function(){return u.default.debug("Disable video stream with id",r.streamId),!!(r.initialized&&void 0!==r.stream&&r.stream.getVideoTracks().length&&r.stream.getVideoTracks()[0].enabled)&&(void 0!==r.muteVideo&&r.muteVideo(),r.videoEnabled=!1,r.stream.getVideoTracks()[0].enabled=!1,r.lowStream&&r.lowStream.disableVideo(),r.sid&&m.report.videoSendingStopped(r.sid,{succ:!0,reason:"muteVideo"}),!0)},r.play=function(e,t){r.showing=!1,!r.local||r.video||r.screen?void 0!==e&&(r.player=new a.default({id:r.getId(),stream:r,elementID:e,options:void 0,url:t}),r.showing=!0):r.hasAudio()&&(r.player=new a.default({id:r.getId(),stream:r,elementID:e,options:void 0,url:t}),r.showing=!0)},r.stop=function(){u.default.debug("Stop stream player with id",r.streamId),void 0!==r.player&&r.player.destroy()},r.getStats=function(e){r.pc&&r.pc.getStats?r.pc.getStats(function(t){if(r.pc.isSubscriber){var i=(0,p.subscribeStatsFilter)(t);(0,l.isFireFox)()&&(i.videoReceivedResolutionHeight=r.videoHeight+"",i.videoReceivedResolutionWidth=r.videoWidth+""),e&&e((0,p.subscribeStatsFilter)(t))}else{var i=(0,p.publishStatsFilter)(t);((0,l.isSafari)()||(0,l.isFireFox)())&&(i.videoSendResolutionHeight=r.videoHeight+"",i.videoSendResolutionWidth=r.videoWidth+""),((0,l.isSafari)()||(0,l.isFireFox)())&&r.uplinkStats&&(i.videoSendBandwidth=r.uplinkStats.uplink_available_bandwidth+"",i.videoSendPacketsLost=r.uplinkStats.uplink_cumulative_lost+""),e&&e(i)}}):u.default.warning("use getStats after peerConnection established")},r.getAudioLevel=function(){return r.audioLevelHelper?r.audioLevelHelper.getAudioLevel():r.stream?0!==r.stream.getAudioTracks().length?(r.audioLevelHelper=new f.audioLevelHelper(r.stream),r.audioLevelHelper.getAudioLevel()):void u.default.warning("can't get audioLevel beacuse no audio trace in stream"):(u.default.warning("can't get audioLevel beacuse no stream exist"),0)},r},v=function(e){return u.default.debug("Create stream"),g(e)},_=function(e,t){navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices||(u.default.warning("enumerateDevices() not supported."),t&&t("enumerateDevices() not supported")),navigator.mediaDevices.enumerateDevices().then(function(t){return e(t)}).catch(function(e){return t&&t(e.name+": "+e.message)})};t.Stream=g,t.createStream=v,t.getDevices=_},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.GetUserMedia=t.Connection=void 0;var o=i(22),r=n(o),a=i(23),s=n(a),d=i(24),c=n(d),u=i(25),l=n(u),p=i(26),f=n(p),m=i(0),g=n(m),v=i(6),_=103,S=function(e){var t={};if(e.session_id=_+=1,"undefined"!=typeof window&&window.navigator)if(null!==window.navigator.userAgent.match("Firefox"))t.browser="mozilla",t=(0,f.default)(e);else if(window.navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome"))g.default.debug("Safari"),t=(0,c.default)(e),t.browser="safari";else if(window.navigator.userAgent.indexOf("MSIE "))t=(0,s.default)(e),t.browser="ie";else if(window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1]>=26)t=(0,s.default)(e),t.browser="chrome-stable";else{if(!(window.navigator.userAgent.toLowerCase().indexOf("chrome")>=40))throw t.browser="none","WebRTC stack not available";t=(0,r.default)(e),t.browser="chrome-canary"}else g.default.error("Publish/subscribe video/audio streams not supported yet"),t=(0,l.default)(e);return t},h=function(e,t,i){var n={};return n.callback=t,n.config=e,n.error=i,n.selectSource=function(e,t,i){var n=document.createElement("div");n.setAttribute("style","position: absolute; z-index: 99999999; width: 65%; height: 70%; top:50%; left:50%; -webkit-transform:translate(-50%,-50%); transform:translate(-50%,-50%); border: #333333 1px solid; background: #ffffff; overflow: scroll;display: flex; justify-content: space-around; flex-wrap: wrap;padding: 50px 20px 5px 20px;box-shadow: 10px #333333;"),document.body.appendChild(n),e.map(function(e){if(e.id){var i=document.createElement("div");i.setAttribute("style","width: 30%;text-align: center;");var o=document.createElement("div");o.innerHTML=e.name,o.setAttribute("style","display: inline-block;width: 70%;word-break: keep-all;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;");var r=document.createElement("div");r.setAttribute("style","width: 100%;height: 70%");var a=document.createElement("img");a.setAttribute("style","height: 100%;"),a.src=e.thumbnail.toDataURL(),i.onclick=function(){document.body.removeChild(n),t&&t(e.id)},r.appendChild(a),i.appendChild(r),i.appendChild(o),n.appendChild(i)}});var o=document.createElement("button");o.innerHTML="Back",o.setAttribute("style"," width: 100%; padding:10px 0; background-color: #fff; font-size: 20px; color: #333;border: none;"),o.onclick=function(){document.body.removeChild(n),i&&i("NotAllowedError")},n.appendChild(o)},n.share=function(e){e.desktopCapturer.getSources({types:["window","screen"]},function(e,t){if(e)throw e;n.selectSource(t,function(e){var t=n.config.attributes.width,i=n.config.attributes.height,o=n.config.attributes.maxFr,r=n.config.attributes.minFr,a={audio:!1,video:{mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:e,maxHeight:i,maxWidth:t,maxFrameRate:o,minFrameRate:r}}};navigator.webkitGetUserMedia(a,n.callback,n.error)},n.error)})},n},E=function(e,t,i){if(navigator.getMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,e.screen){var n=null;try{n=window.require("electron")}catch(e){}if(n){if(n.desktopCapturer){h(e,t,i).share(n)}else i(v.ErrorCodes.ELECTRON_NOT_SUPPORT_SHARING_SCREEN);return}if(g.default.debug("Screen access requested"),null!==window.navigator.userAgent.match("Firefox")){if(!~["screen","window","application"].indexOf(e.mediaSource))return i&&i("Invalid mediaSource, mediaSource should be one of [screen, window, application]");var o={};void 0!=e.video.mandatory?(o.video=e.video,o.video.mediaSource=e.mediaSource):o={video:{mediaSource:e.mediaSource}},navigator.getMedia(o,t,i)}else if(null!==window.navigator.userAgent.match("Chrome")){if(window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1]<34)return void i({code:"This browser does not support screen sharing"});var r="okeephmleflklcdebijnponpabbmmgeo";e.extensionId&&(g.default.debug("extensionId supplied, using "+e.extensionId),r=e.extensionId),g.default.debug("Screen access on chrome stable, looking for extension");try{chrome.runtime.sendMessage(r,{getStream:!0},function(n){if(void 0===n){g.default.debug("Access to screen denied");return void i({code:"Access to screen denied"})}var r=n.streamId,a=e.attributes.width,s=e.attributes.height,d=e.attributes.maxFr,c=e.attributes.minFr;o={video:{mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:r,maxHeight:s,maxWidth:a,maxFrameRate:d,minFrameRate:c}}},navigator.getMedia(o,t,i)})}catch(e){g.default.debug("AgoraRTC screensharing plugin is not accessible");var a={code:"no_plugin_present"};return void i(a)}}else g.default.debug("This browser does not support screenSharing")}else window.navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome")?navigator.mediaDevices.getUserMedia(e).then(t).catch(i):"undefined"!=typeof navigator&&navigator.getMedia?navigator.getMedia(e,t,i):g.default.error("Video/audio streams not supported yet")};t.Connection=S,t.GetUserMedia=E},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.shouldUseHttps=t.post=void 0;var n=i(1),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(n),r=function(e,t,i,n){var r=new XMLHttpRequest;r.timeout=t.timeout||o.HTTP_CONNECT_TIMEOUT,r.open("POST",e,!0),r.setRequestHeader("Content-type","application/json; charset=utf-8"),r.onload=function(e){i&&i(r.responseText)},r.onerror=function(t){n&&n(t,e)},r.ontimeout=function(t){n&&n(t,e)},r.send(JSON.stringify(t))},a=function(){return"https:"==document.location.protocol};t.post=r,t.shouldUseHttps=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){e&&e.apply(this,[].slice.call(arguments,1))};t.default=n},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getGatewayList=void 0;var o=i(1),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(o),a=i(0),s=n(a),d=i(9),c=i(5),u=i(2),l=i(6),p=n(l),f=function(e,t,i,n){var o=(new Date).getTime(),r={key:t.appId,cname:t.cname,uid:t.uid};(0,d.post)(e,r,function(r){var a=JSON.parse(r),s=a.error;void 0!=s?(c.report.joinChooseServer(t.sid,{lts:o,succ:!1,csAddr:e,serverList:null,ec:s}),n("Get server node failed ["+s+"]",e)):i(a,e)},function(e,i){"timeout"===e.type?(c.report.joinChooseServer(t.sid,{lts:o,succ:!1,csAddr:i,serverList:null,ec:"timeout"}),n("Connect choose server timeout",i)):c.report.joinChooseServer(t.sid,{lts:o,succ:!1,csAddr:i,serverList:null,ec:"server_wrong"})})},m=function(e,t,i){var n=(new Date).getTime(),o=!1;u.CSCrashRecord.record(n);for(var a=function(i,r){o?c.report.joinChooseServer(e.sid,{lts:n,succ:!0,csAddr:r,serverList:i.gateway_addr,cid:i.cid+"",uid:i.uid+"",ec:null},!1):(clearTimeout(v),o=!0,s.default.debug("Get gateway address:",i.gateway_addr),t(i),c.report.joinChooseServer(e.sid,{lts:n,succ:!0,csAddr:r,serverList:i.gateway_addr,cid:i.cid+"",uid:i.uid+"",ec:null},!0))},l=function(e,t){s.default.error(e,t)},p=r.WEBCS_DOMAIN,m=0;m<p.length;++m){var g;g=(0,d.shouldUseHttps)()?"https://"+p[m]+":5668/getwebgw/jsonp":"http://"+p[m]+":5669/getwebgw/jsonp",f(g,e,a,l)}var v=setTimeout(function(){if(!o)for(var t=r.WEBCS_DOMAIN_BACKUP_LIST,i=0;i<t.length;++i){var n;n=(0,d.shouldUseHttps)()?"https://"+t[i]+":5668/getwebgw/jsonp":"http://"+t[i]+":5669/getwebgw/jsonp",f(n,e,a,l)}},1e3);setTimeout(function(){o||i()},r.WEBCS_BACKUP_CONNECT_TIMEOUT)},g=function(e,t,i){var n=!1,o=null,r=1;!function a(){if(u.CSCrashRecord.shouldBlock())return s.default.warning("CS connetion crash too many times in 10s"),i&&i(p.default.JOIN_TOO_FREQUENT);n||m(e,function(e){n=!0,clearTimeout(o),t(e)},function(){s.default.debug("Request gateway list will be restart in "+r+"s"),o=setTimeout(function(){a()},1e3*r),r=r>=3600?3600:2*r})}()};t.getGatewayList=g},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.AUDIO_SAMPLE_RATE_32000=32e3,t.AUDIO_SAMPLE_RATE_44100=44100,t.AUDIO_SAMPLE_RATE_48000=48e3,t.VIDEO_CODEC_PROFILE_BASELINE=66,t.VIDEO_CODEC_PROFILE_MAIN=77,t.VIDEO_CODEC_PROFILE_HIGH=100,t.REMOTE_VIDEO_STREAM_HIGH=0,t.REMOTE_VIDEO_STREAM_LOW=1,t.REMOTE_VIDEO_STREAM_MEDIUM=2},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=new Date;return e.toTimeString().split(" ")[0]+":"+e.getMilliseconds()};t.getTimestamp=n},function(e,t,i){function n(e,t,i){var n=t&&i||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null),e=e||{};var a=e.random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var s=0;s<16;++s)t[n+s]=a[s];return t||r(a)}var o=i(15),r=i(17);e.exports=n},function(e,t,i){(function(t){var i,n=t.crypto||t.msCrypto;if(n&&n.getRandomValues){var o=new Uint8Array(16);i=function(){return n.getRandomValues(o),o}}if(!i){var r=new Array(16);i=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}e.exports=i}).call(t,i(16))},function(e,t){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t){function i(e,t){var i=t||0,o=n;return o[e[i++]]+o[e[i++]]+o[e[i++]]+o[e[i++]]+"-"+o[e[i++]]+o[e[i++]]+"-"+o[e[i++]]+o[e[i++]]+"-"+o[e[i++]]+o[e[i++]]+"-"+o[e[i++]]+o[e[i++]]+o[e[i++]]+o[e[i++]]+o[e[i++]]+o[e[i++]]}for(var n=[],o=0;o<256;++o)n[o]=(o+256).toString(16).substr(1);e.exports=i},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(19),r=n(o),a=i(20),s=n(a),d=i(0),c=n(d),u=i(21),l=function(e){var t=(0,r.default)({});if(t.id=e.id,t.url=e.url,t.stream=e.stream.stream,t.elementID=e.elementID,t.destroy=function(){t.video.srcObject=null,t.audio.srcObject=null,t.video.pause(),delete t.resizer,document.getElementById(t.div.id)&&t.parentNode.removeChild(t.div)},t.resize=function(){var i=t.container.offsetWidth,n=t.container.offsetHeight;e.stream.screen?.75*i<n?(t.video.style.width=i+"px",t.video.style.height=.75*i+"px",t.video.style.top=-(.75*i/2-n/2)+"px",t.video.style.left="0px"):(t.video.style.height=n+"px",t.video.style.width=4/3*n+"px",t.video.style.left=-(4/3*n/2-i/2)+"px",t.video.style.top="0px"):i===t.containerWidth&&n===t.containerHeight||(.75*i>n?(t.video.style.width=i+"px",t.video.style.height=.75*i+"px",t.video.style.top=-(.75*i/2-n/2)+"px",t.video.style.left="0px"):(t.video.style.height=n+"px",t.video.style.width=4/3*n+"px",t.video.style.left=-(4/3*n/2-i/2)+"px",t.video.style.top="0px")),t.containerWidth=i,t.containerHeight=n},t.div=document.createElement("div"),t.div.setAttribute("id","player_"+t.id),e.stream.video?t.div.setAttribute("style","width: 100%; height: 100%; position: relative; background-color: black; overflow: hidden;"):t.div.setAttribute("style","width: 100%; height: 100%; position: relative; overflow: hidden;"),t.video=document.createElement("video"),t.video.setAttribute("id","video"+t.id),e.stream.local&&!e.stream.screen?e.stream.mirror?t.video.setAttribute("style","width: 100%; height: 100%; position: absolute; transform: rotateY(180deg);"):t.video.setAttribute("style","width: 100%; height: 100%; position: absolute; "):e.stream.video?(t.video.setAttribute("style","width: 100%; height: 100%; position: absolute;"),window.navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome")&&t.video.setAttribute("controls","")):e.stream.screen?t.video.setAttribute("style","width: 100%; height: 100%; position: absolute;"):t.video.setAttribute("style","width: 100%; height: 100%; position: absolute; display: none;"),t.video.setAttribute("autoplay",""),t.video.setAttribute("muted",""),t.video.setAttribute("playsinline",""),e.stream.local&&(t.video.volume=0,t.video.setAttribute("muted","")),t.audio=document.createElement("audio"),t.audio.setAttribute("id","audio"+t.id),t.audio.setAttribute("autoplay",""),e.stream.local&&(t.audio.volume=0,t.audio.setAttribute("muted","")),void 0!==t.elementID?(document.getElementById(t.elementID).appendChild(t.div),t.container=document.getElementById(t.elementID)):(document.body.appendChild(t.div),t.container=document.body),t.parentNode=t.div.parentNode,t.video.addEventListener("playing",function(e){!function e(){if(t.video.videoWidth*t.video.videoHeight>4)return void c.default.debug("video dimensions:",t.video.videoWidth,t.video.videoHeight);setTimeout(e,50)}()}),t.containerWidth=0,t.containerHeight=0,t.resizer=new s.default(t.container,t.resize),t.resize(),e.stream.hasVideo()||e.stream.hasScreen())t.div.appendChild(t.video),t.div.appendChild(t.audio),(0,u.attachMediaStream)(t.video,e.stream.stream),(0,u.attachMediaStream)(t.audio,e.stream.stream);else if(!e.stream.local&&t.video.removeAttribute("muted"),t.div.appendChild(t.video),window.MediaStream){var i=new MediaStream(e.stream.stream.getAudioTracks());t.video.srcObject=i}else t.video.srcObject=e.stream.stream;return t};t.default=l},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(4),o=function(e){var t=(0,n.EventDispatcher)(e);return t.url=".",t};t.default=o},function(e,t,i){var n,o;!function(r,a){n=a,void 0!==(o="function"==typeof n?n.call(t,i,t,e):n)&&(e.exports=o)}(0,function(){function e(e,t){var i=Object.prototype.toString.call(e),n="[object Array]"===i||"[object NodeList]"===i||"[object HTMLCollection]"===i||"[object Object]"===i||"undefined"!=typeof jQuery&&e instanceof jQuery||"undefined"!=typeof Elements&&e instanceof Elements,o=0,r=e.length;if(n)for(;o<r;o++)t(e[o]);else t(e)}if("undefined"==typeof window)return null;var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){return window.setTimeout(e,20)},i=function(n,o){function r(){var e=[];this.add=function(t){e.push(t)};var t,i;this.call=function(){for(t=0,i=e.length;t<i;t++)e[t].call()},this.remove=function(n){var o=[];for(t=0,i=e.length;t<i;t++)e[t]!==n&&o.push(e[t]);e=o},this.length=function(){return e.length}}function a(e,t){return e.currentStyle?e.currentStyle[t]:window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):e.style[t]}function s(e,i){if(e.resizedAttached){if(e.resizedAttached)return void e.resizedAttached.add(i)}else e.resizedAttached=new r,e.resizedAttached.add(i);e.resizeSensor=document.createElement("div"),e.resizeSensor.className="resize-sensor";var n="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",o="position: absolute; left: 0; top: 0; transition: 0s;";e.resizeSensor.style.cssText=n,e.resizeSensor.innerHTML='<div class="resize-sensor-expand" style="'+n+'"><div style="'+o+'"></div></div><div class="resize-sensor-shrink" style="'+n+'"><div style="'+o+' width: 200%; height: 200%"></div></div>',e.appendChild(e.resizeSensor),"static"==a(e,"position")&&(e.style.position="relative");var s,d,c,u,l=e.resizeSensor.childNodes[0],p=l.childNodes[0],f=e.resizeSensor.childNodes[1],m=e.offsetWidth,g=e.offsetHeight,v=function(){p.style.width="100000px",p.style.height="100000px",l.scrollLeft=1e5,l.scrollTop=1e5,f.scrollLeft=1e5,f.scrollTop=1e5};v();var _=function(){d=0,s&&(m=c,g=u,e.resizedAttached&&e.resizedAttached.call())},S=function(){c=e.offsetWidth,u=e.offsetHeight,s=c!=m||u!=g,s&&!d&&(d=t(_)),v()},h=function(e,t,i){e.attachEvent?e.attachEvent("on"+t,i):e.addEventListener(t,i)};h(l,"scroll",S),h(f,"scroll",S)}e(n,function(e){s(e,o)}),this.detach=function(e){i.detach(n,e)}};return i.detach=function(t,i){e(t,function(e){e.resizedAttached&&"function"==typeof i&&(e.resizedAttached.remove(i),e.resizedAttached.length())||e.resizeSensor&&(e.contains(e.resizeSensor)&&e.removeChild(e.resizeSensor),delete e.resizeSensor,delete e.resizedAttached)})},i})},function(e,t,i){"use strict";function n(e){return new Promise(function(t,i){r(e,t,i)})}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=null,a=null,s=null,d=null,c=null,u=null,l={log:function(){},extractVersion:function(e,t,i){var n=e.match(t);return n&&n.length>=i&&parseInt(n[i])}};if("object"===("undefined"==typeof window?"undefined":o(window))&&(!window.HTMLMediaElement||"srcObject"in window.HTMLMediaElement.prototype||Object.defineProperty(window.HTMLMediaElement.prototype,"srcObject",{get:function(){return"mozSrcObject"in this?this.mozSrcObject:this._srcObject},set:function(e){"mozSrcObject"in this?this.mozSrcObject=e:(this._srcObject=e,this.src=URL.createObjectURL(e))}}),r=window.navigator&&window.navigator.getUserMedia),a=function(e,t){e.srcObject=t},s=function(e,t){e.srcObject=t.srcObject},"undefined"!=typeof window&&window.navigator)if(navigator.mozGetUserMedia&&window.mozRTCPeerConnection){if(l.log("This appears to be Firefox"),d="firefox",c=l.extractVersion(navigator.userAgent,/Firefox\/([0-9]+)\./,1),u=31,window.RTCPeerConnection=function(e,t){if(c<38&&e&&e.iceServers){for(var i=[],n=0;n<e.iceServers.length;n++){var o=e.iceServers[n];if(o.hasOwnProperty("urls"))for(var r=0;r<o.urls.length;r++){var a={url:o.urls[r]};0===o.urls[r].indexOf("turn")&&(a.username=o.username,a.credential=o.credential),i.push(a)}else i.push(e.iceServers[n])}e.iceServers=i}return new mozRTCPeerConnection(e,t)},window.RTCSessionDescription||(window.RTCSessionDescription=mozRTCSessionDescription),window.RTCIceCandidate||(window.RTCIceCandidate=mozRTCIceCandidate),r=function(e,t,i){var n=function(e){if("object"!==(void 0===e?"undefined":o(e))||e.require)return e;var t=[];return Object.keys(e).forEach(function(i){if("require"!==i&&"advanced"!==i&&"mediaSource"!==i){var n=e[i]="object"===o(e[i])?e[i]:{ideal:e[i]};if(void 0===n.min&&void 0===n.max&&void 0===n.exact||t.push(i),void 0!==n.exact&&("number"==typeof n.exact?n.min=n.max=n.exact:e[i]=n.exact,delete n.exact),void 0!==n.ideal){e.advanced=e.advanced||[];var r={};"number"==typeof n.ideal?r[i]={min:n.ideal,max:n.ideal}:r[i]=n.ideal,e.advanced.push(r),delete n.ideal,Object.keys(n).length||delete e[i]}}}),t.length&&(e.require=t),e};return c<38&&(l.log("spec: "+JSON.stringify(e)),e.audio&&(e.audio=n(e.audio)),e.video&&(e.video=n(e.video)),l.log("ff37: "+JSON.stringify(e))),navigator.mozGetUserMedia(e,t,i)},navigator.getUserMedia=r,navigator.mediaDevices||(navigator.mediaDevices={getUserMedia:n,addEventListener:function(){},removeEventListener:function(){}}),navigator.mediaDevices.enumerateDevices=navigator.mediaDevices.enumerateDevices||function(){return new Promise(function(e){e([{kind:"audioinput",deviceId:"default",label:"",groupId:""},{kind:"videoinput",deviceId:"default",label:"",groupId:""}])})},c<41){var p=navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);navigator.mediaDevices.enumerateDevices=function(){return p().then(void 0,function(e){if("NotFoundError"===e.name)return[];throw e})}}}else if(navigator.webkitGetUserMedia&&window.webkitRTCPeerConnection){l.log("This appears to be Chrome"),d="chrome",c=l.extractVersion(navigator.userAgent,/Chrom(e|ium)\/([0-9]+)\./,2),u=38,window.RTCPeerConnection=function(e,t){e&&e.iceTransportPolicy&&(e.iceTransports=e.iceTransportPolicy);var i=new webkitRTCPeerConnection(e,t),n=i.getStats.bind(i);return i.getStats=function(e,t,i){var o=this,r=arguments;if(arguments.length>0&&"function"==typeof e)return n(e,t);var a=function(e){var t={};return e.result().forEach(function(e){var i={id:e.id,timestamp:e.timestamp,type:e.type};e.names().forEach(function(t){i[t]=e.stat(t)}),t[i.id]=i}),t};if(arguments.length>=2){var s=function(e){r[1](a(e))};return n.apply(this,[s,arguments[0]])}return new Promise(function(t,i){1===r.length&&null===e?n.apply(o,[function(e){t.apply(null,[a(e)])},i]):n.apply(o,[t,i])})},i},["createOffer","createAnswer"].forEach(function(e){var t=webkitRTCPeerConnection.prototype[e];webkitRTCPeerConnection.prototype[e]=function(){var e=this;if(arguments.length<1||1===arguments.length&&"object"===o(arguments[0])){var i=1===arguments.length?arguments[0]:void 0;return new Promise(function(n,o){t.apply(e,[n,o,i])})}return t.apply(this,arguments)}}),["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(e){var t=webkitRTCPeerConnection.prototype[e];webkitRTCPeerConnection.prototype[e]=function(){var e=arguments,i=this;return new Promise(function(n,o){t.apply(i,[e[0],function(){n(),e.length>=2&&e[1].apply(null,[])},function(t){o(t),e.length>=3&&e[2].apply(null,[t])}])})}});var f=function(e){if("object"!==(void 0===e?"undefined":o(e))||e.mandatory||e.optional)return e;var t={};return Object.keys(e).forEach(function(i){if("require"!==i&&"advanced"!==i&&"mediaSource"!==i){var n="object"===o(e[i])?e[i]:{ideal:e[i]};void 0!==n.exact&&"number"==typeof n.exact&&(n.min=n.max=n.exact);var r=function(e,t){return e?e+t.charAt(0).toUpperCase()+t.slice(1):"deviceId"===t?"sourceId":t};if(void 0!==n.ideal){t.optional=t.optional||[];var a={};"number"==typeof n.ideal?(a[r("min",i)]=n.ideal,t.optional.push(a),a={},a[r("max",i)]=n.ideal,t.optional.push(a)):(a[r("",i)]=n.ideal,t.optional.push(a))}void 0!==n.exact&&"number"!=typeof n.exact?(t.mandatory=t.mandatory||{},t.mandatory[r("",i)]=n.exact):["min","max"].forEach(function(e){void 0!==n[e]&&(t.mandatory=t.mandatory||{},t.mandatory[r(e,i)]=n[e])})}}),e.advanced&&(t.optional=(t.optional||[]).concat(e.advanced)),t};if(r=function(e,t,i){return e.audio&&(e.audio=f(e.audio)),e.video&&(e.video=f(e.video)),l.log("chrome: "+JSON.stringify(e)),navigator.webkitGetUserMedia(e,t,i)},navigator.getUserMedia=r,navigator.mediaDevices||(navigator.mediaDevices={getUserMedia:n,enumerateDevices:function(){return new Promise(function(e){var t={audio:"audioinput",video:"videoinput"};return MediaStreamTrack.getSources(function(i){e(i.map(function(e){return{label:e.label,kind:t[e.kind],deviceId:e.id,groupId:""}}))})})}}),navigator.mediaDevices.getUserMedia){var m=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=function(e){return l.log("spec:   "+JSON.stringify(e)),e.audio=f(e.audio),e.video=f(e.video),l.log("chrome: "+JSON.stringify(e)),m(e)}}else navigator.mediaDevices.getUserMedia=function(e){return n(e)};void 0===navigator.mediaDevices.addEventListener&&(navigator.mediaDevices.addEventListener=function(){l.log("Dummy mediaDevices.addEventListener called.")}),void 0===navigator.mediaDevices.removeEventListener&&(navigator.mediaDevices.removeEventListener=function(){l.log("Dummy mediaDevices.removeEventListener called.")}),a=function(e,t){c>=43?e.srcObject=t:void 0!==e.src?e.src=URL.createObjectURL(t):l.log("Error attaching stream to element.")},s=function(e,t){c>=43?e.srcObject=t.srcObject:e.src=t.src}}else navigator.mediaDevices&&navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)?(l.log("This appears to be Edge"),d="edge",c=l.extractVersion(navigator.userAgent,/Edge\/(\d+).(\d+)$/,2),u=12):l.log("Browser does not appear to be WebRTC-capable");else l.log("This does not appear to be a browser"),d="not a browser";var g={};try{Object.defineProperty(g,"version",{set:function(e){c=e}})}catch(e){}var v;"undefined"!=typeof window&&(v=window.RTCPeerConnection),e.exports={RTCPeerConnection:v,getUserMedia:r,attachMediaStream:a,reattachMediaStream:s,webrtcDetectedBrowser:d,webrtcDetectedVersion:c,webrtcMinimumVersion:u,webrtcTesting:g,webrtcUtils:l}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=function(e){var t={},i=webkitRTCPeerConnection;t.pc_config={iceServers:[]},t.con={optional:[{DtlsSrtpKeyAgreement:!0}]},e.iceServers instanceof Array?t.pc_config.iceServers=e.iceServers:(e.stunServerUrl&&(e.stunServerUrl instanceof Array?e.stunServerUrl.map(function(e){"string"==typeof e&&""!==e&&t.pc_config.iceServers.push({url:e})}):"string"==typeof e.stunServerUrl&&""!==e.stunServerUrl&&t.pc_config.iceServers.push({url:e.stunServerUrl})),e.turnServer&&(e.turnServer instanceof Array?e.turnServer.map(function(e){"string"==typeof e.url&&""!==e.url&&t.pc_config.iceServers.push({username:e.username,credential:e.password,url:e.url})}):"string"==typeof e.turnServer.url&&""!==e.turnServer.url&&t.pc_config.iceServers.push({username:e.turnServer.username,credential:e.turnServer.password,url:e.turnServer.url}))),void 0===e.audio&&(e.audio=!0),void 0===e.video&&(e.video=!0),t.mediaConstraints={mandatory:{OfferToReceiveVideo:e.video,OfferToReceiveAudio:e.audio}},t.roapSessionId=103,t.peerConnection=new i(t.pc_config,t.con),t.peerConnection.onicecandidate=function(e){e.candidate?t.iceCandidateCount+=1:(o.default.debug("PeerConnection State: "+t.peerConnection.iceGatheringState),void 0===t.ices&&(t.ices=0),t.ices=t.ices+1,t.ices>=1&&t.moreIceComing&&(t.moreIceComing=!1,t.markActionNeeded()))};var n=function(t){var i,n;return e.minVideoBW&&e.maxVideoBW&&(i=t.match(/m=video.*\r\n/),n=i[0]+"b=AS:"+e.maxVideoBW+"\r\n",t=t.replace(i[0],n),o.default.debug("Set Video Bitrate - min:"+e.minVideoBW+" max:"+e.maxVideoBW)),e.maxAudioBW&&(i=t.match(/m=audio.*\r\n/),n=i[0]+"b=AS:"+e.maxAudioBW+"\r\n",t=t.replace(i[0],n)),t};return t.processSignalingMessage=function(e){var i,o=JSON.parse(e);t.incomingMessage=o,"new"===t.state?"OFFER"===o.messageType?(i={sdp:o.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+o.messageType+" in state "+t.state):"offer-sent"===t.state?"ANSWER"===o.messageType?(i={sdp:o.sdp,type:"answer"},i.sdp=n(i.sdp),t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)),t.sendOK(),t.state="established"):"pr-answer"===o.messageType?(i={sdp:o.sdp,type:"pr-answer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(i))):"offer"===o.messageType?t.error("Not written yet"):t.error("Illegal message for this state: "+o.messageType+" in state "+t.state):"established"===t.state&&("OFFER"===o.messageType?(i={sdp:o.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+o.messageType+" in state "+t.state))},t.addStream=function(e){t.peerConnection.addStream(e),t.markActionNeeded()},t.removeStream=function(){t.markActionNeeded()},t.close=function(){t.state="closed",t.peerConnection.close()},t.markActionNeeded=function(){t.actionNeeded=!0,t.doLater(function(){t.onstablestate()})},t.doLater=function(e){window.setTimeout(e,1)},t.onstablestate=function(){var e;if(t.actionNeeded){if("new"===t.state||"established"===t.state)t.peerConnection.createOffer(function(e){if(e.sdp=n(e.sdp),o.default.debug("Changed",e.sdp),e.sdp!==t.prevOffer)return t.peerConnection.setLocalDescription(e),t.state="preparing-offer",void t.markActionNeeded();o.default.debug("Not sending a new offer")},function(e){o.default.debug("peer connection create offer failed ",e)},t.mediaConstraints);else if("preparing-offer"===t.state){if(t.moreIceComing)return;t.prevOffer=t.peerConnection.localDescription.sdp,t.sendMessage("OFFER",t.prevOffer),t.state="offer-sent"}else if("offer-received"===t.state)t.peerConnection.createAnswer(function(e){if(t.peerConnection.setLocalDescription(e),t.state="offer-received-preparing-answer",t.iceStarted)return void t.markActionNeeded();var i=new Date;o.default.debug(i.getTime()+": Starting ICE in responder"),t.iceStarted=!0},function(e){o.default.debug("peer connection create answer failed ",e)},t.mediaConstraints);else if("offer-received-preparing-answer"===t.state){if(t.moreIceComing)return;e=t.peerConnection.localDescription.sdp,t.sendMessage("ANSWER",e),t.state="established"}else t.error("Dazed and confused in state "+t.state+", stopping here");t.actionNeeded=!1}},t.sendOK=function(){t.sendMessage("OK")},t.sendMessage=function(e,i){var n={};n.messageType=e,n.sdp=i,"OFFER"===e?(n.offererSessionId=t.sessionId,n.answererSessionId=t.otherSessionId,n.seq=t.sequenceNumber+=1,n.tiebreaker=Math.floor(429496723*Math.random()+1)):(n.offererSessionId=t.incomingMessage.offererSessionId,n.answererSessionId=t.sessionId,n.seq=t.incomingMessage.seq),t.onsignalingmessage(JSON.stringify(n))},t.error=function(e){throw"Error in RoapOnJsep: "+e},t.sessionId=t.roapSessionId+=1,t.sequenceNumber=0,t.actionNeeded=!1,t.iceStarted=!1,t.moreIceComing=!0,t.iceCandidateCount=0,t.onsignalingmessage=e.callback,t.peerConnection.onopen=function(){t.onopen&&t.onopen()},t.peerConnection.onaddstream=function(e){t.onaddstream&&t.onaddstream(e)},t.peerConnection.onremovestream=function(e){t.onremovestream&&t.onremovestream(e)},t.peerConnection.oniceconnectionstatechange=function(e){t.oniceconnectionstatechange&&t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)},t.onaddstream=null,t.onremovestream=null,t.state="new",t.markActionNeeded(),t};t.default=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=function(e){var t={},i=RTCPeerConnection;t.isSubscriber=e.isSubscriber,t.pc_config={iceServers:[]},t.con={optional:[{DtlsSrtpKeyAgreement:!0}]},e.iceServers instanceof Array?t.pc_config.iceServers=e.iceServers:(e.stunServerUrl&&(e.stunServerUrl instanceof Array?e.stunServerUrl.map(function(e){"string"==typeof e&&""!==e&&t.pc_config.iceServers.push({url:e})}):"string"==typeof e.stunServerUrl&&""!==e.stunServerUrl&&t.pc_config.iceServers.push({url:e.stunServerUrl})),e.turnServer&&(e.turnServer instanceof Array?e.turnServer.map(function(e){"string"==typeof e.url&&""!==e.url&&t.pc_config.iceServers.push({username:e.username,credential:e.password,url:e.url})}):"string"==typeof e.turnServer.url&&""!==e.turnServer.url&&t.pc_config.iceServers.push({username:e.turnServer.username,credential:e.turnServer.password,url:e.turnServer.url}))),void 0===e.audio&&(e.audio=!0),void 0===e.video&&(e.video=!0),t.mediaConstraints={mandatory:{OfferToReceiveVideo:e.video,OfferToReceiveAudio:e.audio}},t.roapSessionId=103,t.peerConnection=new i({iceServers:[{urls:["stun:webcs.agora.io:3478"]}]},t.con),t.peerConnection.onicecandidate=function(e){var i,n,r;i=t.peerConnection.localDescription.sdp,n=i.match(/a=candidate:.+typ\ssrflx.+\r\n/),r=i.match(/a=candidate:.+typ\shost.+\r\n/),0===t.iceCandidateCount&&(t.timeout=setTimeout(function(){t.moreIceComing&&(t.moreIceComing=!1,t.markActionNeeded())},1e3)),null===n&&null===r||void 0!==t.ice||(o.default.debug("srflx candidate : "+n+" host candidate : "+r),clearTimeout(t.timeout),t.ice=0,t.moreIceComing=!1,t.markActionNeeded()),t.iceCandidateCount=t.iceCandidateCount+1};var n=function(t){return e.screen&&(t=t.replace("a=x-google-flag:conference\r\n","")),t},r=function(t){var i,n;return e.minVideoBW&&e.maxVideoBW&&(i=t.match(/m=video.*\r\n/),n=i[0]+"b=AS:"+e.maxVideoBW+"\r\n",t=t.replace(i[0],n),o.default.debug("Set Video Bitrate - min:"+e.minVideoBW+" max:"+e.maxVideoBW)),e.maxAudioBW&&(i=t.match(/m=audio.*\r\n/),n=i[0]+"b=AS:"+e.maxAudioBW+"\r\n",t=t.replace(i[0],n)),t};return t.processSignalingMessage=function(e){var i,o=JSON.parse(e);t.incomingMessage=o,"new"===t.state?"OFFER"===o.messageType?(i={sdp:o.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+o.messageType+" in state "+t.state):"offer-sent"===t.state?"ANSWER"===o.messageType?(i={sdp:o.sdp,type:"answer"},i.sdp=n(i.sdp),i.sdp=r(i.sdp),t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)),t.sendOK(),t.state="established"):"pr-answer"===o.messageType?(i={sdp:o.sdp,type:"pr-answer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(i))):"offer"===o.messageType?t.error("Not written yet"):t.error("Illegal message for this state: "+o.messageType+" in state "+t.state):"established"===t.state&&("OFFER"===o.messageType?(i={sdp:o.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+o.messageType+" in state "+t.state))},t.getStatsRate=function(e){t.getStats(function(t){e(t)})},t.getStats=function(e){t.peerConnection.getStats(null,function(i){var n=[],o=[],r=null;Object.keys(i).forEach(function(e){var t=i[e];o.push(t),"ssrc"!==t.type&&"VideoBwe"!==t.type||(r=t.timestamp,n.push(t))}),n.push({id:"time",startTime:t.connectedTime,timestamp:r||new Date}),e(n,o)})},t.addStream=function(e){t.peerConnection.addStream(e),t.markActionNeeded()},t.removeStream=function(){t.markActionNeeded()},t.close=function(){t.state="closed",t.peerConnection.close()},t.markActionNeeded=function(){t.actionNeeded=!0,t.doLater(function(){t.onstablestate()})},t.doLater=function(e){window.setTimeout(e,1)},t.onstablestate=function(){var e;if(t.actionNeeded){if("new"===t.state||"established"===t.state)t.peerConnection.createOffer(function(e){if(e.sdp=r(e.sdp),e.sdp!==t.prevOffer)return t.peerConnection.setLocalDescription(e),t.state="preparing-offer",void t.markActionNeeded();o.default.debug("Not sending a new offer")},function(e){o.default.debug("peer connection create offer failed ",e)},t.mediaConstraints);else if("preparing-offer"===t.state){if(t.moreIceComing)return;t.prevOffer=t.peerConnection.localDescription.sdp,t.prevOffer=t.prevOffer.replace(/a=candidate:.+typ\shost.+\r\n/g,"a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n"),t.sendMessage("OFFER",t.prevOffer),t.state="offer-sent"}else if("offer-received"===t.state)t.peerConnection.createAnswer(function(e){if(t.peerConnection.setLocalDescription(e),t.state="offer-received-preparing-answer",t.iceStarted)return void t.markActionNeeded();var i=new Date;o.default.debug(i.getTime()+": Starting ICE in responder"),t.iceStarted=!0},function(e){o.default.debug("peer connection create answer failed ",e)},t.mediaConstraints);else if("offer-received-preparing-answer"===t.state){if(t.moreIceComing)return;e=t.peerConnection.localDescription.sdp,t.sendMessage("ANSWER",e),t.state="established"}else t.error("Dazed and confused in state "+t.state+", stopping here");t.actionNeeded=!1}},t.sendOK=function(){t.sendMessage("OK")},t.sendMessage=function(e,i){var n={};n.messageType=e,n.sdp=i,"OFFER"===e?(n.offererSessionId=t.sessionId,n.answererSessionId=t.otherSessionId,n.seq=t.sequenceNumber+=1,n.tiebreaker=Math.floor(429496723*Math.random()+1)):(n.offererSessionId=t.incomingMessage.offererSessionId,n.answererSessionId=t.sessionId,n.seq=t.incomingMessage.seq),t.onsignalingmessage(JSON.stringify(n))},t.error=function(e){throw"Error in RoapOnJsep: "+e},t.sessionId=t.roapSessionId+=1,t.sequenceNumber=0,t.actionNeeded=!1,t.iceStarted=!1,t.moreIceComing=!0,t.iceCandidateCount=0,t.onsignalingmessage=e.callback,t.peerConnection.ontrack=function(e){t.onaddstream&&(t.onaddstream(e,"ontrack"),t.peerConnection.onaddstream=null)},t.peerConnection.onaddstream=function(e){t.onaddstream&&(t.onaddstream(e,"onaddstream"),t.peerConnection.ontrack=null)},t.peerConnection.onremovestream=function(e){t.onremovestream&&t.onremovestream(e)},t.peerConnection.oniceconnectionstatechange=function(e){"connected"===e.currentTarget.iceConnectionState&&(t.connectedTime=new Date),t.oniceconnectionstatechange&&t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)},t.onaddstream=null,t.onremovestream=null,t.state="new",t.markActionNeeded(),t};t.default=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=function(e){var t={};RTCPeerConnection;t.isSubscriber=e.isSubscriber,t.pc_config={iceServers:[{urls:["stun:72.251.224.27:3478"]}],bundlePolicy:"max-bundle"},t.con={optional:[{DtlsSrtpKeyAgreement:!0}]},e.iceServers instanceof Array?t.pc_config.iceServers=e.iceServers:(e.stunServerUrl&&(e.stunServerUrl instanceof Array?e.stunServerUrl.map(function(e){"string"==typeof e&&""!==e&&t.pc_config.iceServers.push({url:e})}):"string"==typeof e.stunServerUrl&&""!==e.stunServerUrl&&t.pc_config.iceServers.push({url:e.stunServerUrl})),e.turnServer&&(e.turnServer instanceof Array?e.turnServer.map(function(e){"string"==typeof e.url&&""!==e.url&&t.pc_config.iceServers.push({username:e.username,credential:e.password,url:e.url})}):"string"==typeof e.turnServer.url&&""!==e.turnServer.url&&t.pc_config.iceServers.push({username:e.turnServer.username,credential:e.turnServer.password,url:e.turnServer.url}))),void 0===e.audio&&(e.audio=!0),void 0===e.video&&(e.video=!0),t.mediaConstraints={mandatory:{OfferToReceiveVideo:e.video,OfferToReceiveAudio:e.audio}},t.roapSessionId=103,t.peerConnection=new RTCPeerConnection({iceServers:[{urls:["stun:webcs.agora.io:3478","stun:stun.l.google.com:19302"]}],bundlePolicy:"max-bundle"}),t.peerConnection.onicecandidate=function(i){o.default.debug("PeerConnection: ",e.session_id,i),i.candidate?(0===t.iceCandidateCount&&(t.timeout=setTimeout(function(){t.moreIceComing&&(t.moreIceComing=!1,t.markActionNeeded())},1e3)),t.iceCandidateCount=t.iceCandidateCount+1):(o.default.debug("PeerConnection State: "+t.peerConnection.iceGatheringState),clearTimeout(t.timeout),void 0===t.ices&&(t.ices=0),t.ices=t.ices+1,t.ices>=1&&t.moreIceComing&&(t.moreIceComing=!1,t.markActionNeeded()))};var i=function(t){return e.screen&&(t=t.replace("a=x-google-flag:conference\r\n","")),t},n=function(t){var i,n;return e.minVideoBW&&e.maxVideoBW&&(i=t.match(/m=video.*\r\n/),n=i[0]+"b=AS:"+e.maxVideoBW+"\r\n",t=t.replace(i[0],n),o.default.debug("Set Video Bitrate - min:"+e.minVideoBW+" max:"+e.maxVideoBW)),e.maxAudioBW&&(i=t.match(/m=audio.*\r\n/),n=i[0]+"b=AS:"+e.maxAudioBW+"\r\n",t=t.replace(i[0],n)),t};t.processSignalingMessage=function(e){var o,r=JSON.parse(e);t.incomingMessage=r,"new"===t.state?"OFFER"===r.messageType?(o={sdp:r.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(o)),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state):"offer-sent"===t.state?"ANSWER"===r.messageType?(o={sdp:r.sdp,type:"answer"},o.sdp=i(o.sdp),o.sdp=n(o.sdp),o.sdp=o.sdp.replace(/a=x-google-flag:conference\r\n/g,""),t.peerConnection.setRemoteDescription(new RTCSessionDescription(o)),t.sendOK(),t.state="established"):"pr-answer"===r.messageType?(o={sdp:r.sdp,type:"pr-answer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(o))):"offer"===r.messageType?t.error("Not written yet"):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state):"established"===t.state&&("OFFER"===r.messageType?(o={sdp:r.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(o)),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state))};var r={id:"",type:"",mediaType:"",googCodecName:"opus",aecDivergentFilterFraction:"0",audioInputLevel:"0",bytesSent:"0",packetsSent:"0",googEchoCancellationReturnLoss:"0",googEchoCancellationReturnLossEnhancement:"0"},a={id:"",type:"",mediaType:"",googCodecName:"h264"===e.codec?"H264":"VP8",bytesSent:"0",packetsLost:"0",packetsSent:"0",googAdaptationChanges:"0",googAvgEncodeMs:"0",googEncodeUsagePercent:"0",googFirsReceived:"0",googFrameHeightSent:"0",googFrameHeightInput:"0",googFrameRateInput:"0",googFrameRateSent:"0",googFrameWidthSent:"0",googFrameWidthInput:"0",googNacksReceived:"0",googPlisReceived:"0",googRtt:"0",googFramesEncoded:"0"},s={id:"",type:"",mediaType:"",audioOutputLevel:"0",bytesReceived:"0",packetsLost:"0",packetsReceived:"0",googAccelerateRate:"0",googCurrentDelayMs:"0",googDecodingCNG:"0",googDecodingCTN:"0",googDecodingCTSG:"0",googDecodingNormal:"0",googDecodingPLC:"0",googDecodingPLCCNG:"0",googExpandRate:"0",googJitterBufferMs:"0",googJitterReceived:"0",googPreemptiveExpandRate:"0",googPreferredJitterBufferMs:"0",googSecondaryDecodedRate:"0",googSpeechExpandRate:"0"},d={id:"",type:"",mediaType:"",googTargetDelayMs:"0",packetsLost:"0",googDecodeMs:"0",googMaxDecodeMs:"0",googRenderDelayMs:"0",googFrameWidthReceived:"0",googFrameHeightReceived:"0",googFrameRateReceived:"0",googFrameRateDecoded:"0",googFrameRateOutput:"0",googFramesDecoded:"0",googFrameReceived:"0",googJitterBufferMs:"0",googCurrentDelayMs:"0",googMinPlayoutDelayMs:"0",googNacksSent:"0",googPlisSent:"0",googFirsSent:"0",bytesReceived:"0",packetsReceived:"0"},c={id:"bweforvideo",type:"VideoBwe",googAvailableSendBandwidth:"0",googAvailableReceiveBandwidth:"0",googActualEncBitrate:"0",googRetransmitBitrate:"0",googTargetEncBitrate:"0",googBucketDelay:"0",googTransmitBitrate:"0"},u=0,l=0,p=0;return t.getStatsRate=function(e){t.getStats(function(t){t.forEach(function(e){"outbound-rtp"===e.type&&"video"===e.mediaType&&e.googFramesEncoded&&(e.googFrameRateSent=((e.googFramesEncoded-u)/3).toString(),u=e.googFramesEncoded),"inbound-rtp"===e.type&&-1!=e.id.indexOf("55543")&&(e.googFrameRateReceived&&(e.googFrameRateReceived=((e.googFrameReceived-p)/3).toString(),p=e.googFrameReceived),e.googFrameRateDecoded&&(e.googFrameRateDecoded=((e.googFramesDecoded-l)/3).toString(),l=e.googFramesDecoded))}),e(t)})},t.getStats=function(e){var i=[];t.peerConnection.getStats().then(function(n){n.forEach(function(e){i.push(e),"outbound-rtp"===e.type&&"audio"===e.mediaType&&(r.id=e.id,r.type=e.type,r.mediaType=e.mediaType,r.bytesSent=e.bytesSent?e.bytesSent+"":"0",r.packetsSent=e.packetsSent?e.packetsSent+"":"0"),"outbound-rtp"===e.type&&"video"===e.mediaType&&(a.id=e.id,a.type=e.type,a.mediaType=e.mediaType,a.bytesSent=e.bytesSent?e.bytesSent+"":"0",a.packetsSent=e.packetsSent?e.packetsSent+"":"0",a.googPlisReceived=e.pliCount?e.pliCount+"":"0",a.googNacksReceived=e.nackCount?e.nackCount+"":"0",a.googFirsReceived=e.firCount?e.firCount+"":"0",a.googFramesEncoded=e.framesEncoded?e.framesEncoded+"":"0"),"inbound-rtp"===e.type&&-1!=e.id.indexOf("44444")&&(s.id=e.id,s.type=e.type,s.mediaType="audio",s.packetsReceived=e.packetsReceived?e.packetsReceived+"":"0",s.bytesReceived=e.bytesReceived?e.bytesReceived+"":"0",s.packetsLost=e.packetsLost?e.packetsLost+"":"0",s.packetsReceived=e.packetsReceived?e.packetsReceived+"":"0",s.googJitterReceived=e.jitter?e.jitter+"":"0"),"inbound-rtp"===e.type&&-1!=e.id.indexOf("55543")&&(d.id=e.id,d.type=e.type,d.mediaType="video",d.packetsReceived=e.packetsReceived?e.packetsReceived+"":"0",d.bytesReceived=e.bytesReceived?e.bytesReceived+"":"0",d.packetsLost=e.packetsLost?e.packetsLost+"":"0",d.googJitterBufferMs=e.jitter?e.jitter+"":"0",d.googNacksSent=e.nackCount?e.nackCount+"":"0",d.googPlisSent=e.pliCount?e.pliCount+"":"0",d.googFirsSent=e.firCount?e.firCount+"":"0"),"track"===e.type&&-1!=e.id.indexOf("55543")&&(d.googFrameWidthReceived=e.frameWidth?e.frameWidth+"":"0",d.googFrameHeightReceived=e.frameHeight?e.frameHeight+"":"0",d.googFrameReceived=e.framesReceived?e.framesReceived+"":"0",d.googFramesDecoded=e.framesDecoded?e.framesDecoded+"":"0"),"track"===e.type&&-1!=e.id.indexOf("44444")&&(s.audioOutputLevel=e.audioLevel+"",r.audioInputLevel=e.audioLevel+""),"candidate-pair"===e.type&&(0==e.availableIncomingBitrate?c.googAvailableSendBandwidth=e.availableOutgoingBitrate+"":c.googAvailableReceiveBandwidth=e.availableIncomingBitrate+"")});var o=[c,r,a,s,d];o.push({id:"time",startTime:t.connectedTime,timestamp:new Date}),e(o,i)}).catch(function(e){console.error(e)})},t.addStream=function(e){window.navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome")?e.getTracks().forEach(function(i){return t.peerConnection.addTrack(i,e)}):t.peerConnection.addStream(e),t.markActionNeeded()},t.removeStream=function(){t.markActionNeeded()},t.close=function(){t.state="closed",t.peerConnection.close()},t.markActionNeeded=function(){t.actionNeeded=!0,t.doLater(function(){t.onstablestate()})},t.doLater=function(e){window.setTimeout(e,1)},t.onstablestate=function(){var i;if(t.actionNeeded){if("new"===t.state||"established"===t.state){if(e.isSubscriber&&window.navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome")){var r=t.peerConnection.addTransceiver("audio"),a=t.peerConnection.addTransceiver("video");r.setDirection("recvonly"),a.setDirection("recvonly")}t.peerConnection.createOffer(t.mediaConstraints).then(function(i){if(i.sdp=n(i.sdp),e.isSubscriber||(i.sdp=i.sdp.replace(/a=extmap:4 urn:3gpp:video-orientation\r\n/g,"")),i.sdp!==t.prevOffer)return t.peerConnection.setLocalDescription(i),t.state="preparing-offer",void t.markActionNeeded();o.default.debug("Not sending a new offer")}).catch(function(e){o.default.debug("peer connection create offer failed ",e)})}else if("preparing-offer"===t.state){if(t.moreIceComing)return;t.prevOffer=t.peerConnection.localDescription.sdp,t.sendMessage("OFFER",t.prevOffer),t.state="offer-sent"}else if("offer-received"===t.state)t.peerConnection.createAnswer(function(e){if(t.peerConnection.setLocalDescription(e),t.state="offer-received-preparing-answer",t.iceStarted)return void t.markActionNeeded();var i=new Date;o.default.debug(i.getTime()+": Starting ICE in responder"),t.iceStarted=!0},function(e){o.default.debug("peer connection create answer failed ",e)},t.mediaConstraints);else if("offer-received-preparing-answer"===t.state){if(t.moreIceComing)return;i=t.peerConnection.localDescription.sdp,t.sendMessage("ANSWER",i),t.state="established"}else t.error("Dazed and confused in state "+t.state+", stopping here");t.actionNeeded=!1}},t.sendOK=function(){t.sendMessage("OK")},t.sendMessage=function(e,i){var n={};n.messageType=e,n.sdp=i,"OFFER"===e?(n.offererSessionId=t.sessionId,n.answererSessionId=t.otherSessionId,n.seq=t.sequenceNumber+=1,n.tiebreaker=Math.floor(429496723*Math.random()+1)):(n.offererSessionId=t.incomingMessage.offererSessionId,n.answererSessionId=t.sessionId,n.seq=t.incomingMessage.seq),t.onsignalingmessage(JSON.stringify(n))},t.error=function(e){throw"Error in RoapOnJsep: "+e},t.sessionId=t.roapSessionId+=1,t.sequenceNumber=0,t.actionNeeded=!1,t.iceStarted=!1,t.moreIceComing=!0,t.iceCandidateCount=0,t.onsignalingmessage=e.callback,t.peerConnection.ontrack=function(e){t.onaddstream&&t.onaddstream(e,"ontrack")},t.peerConnection.onremovestream=function(e){t.onremovestream&&t.onremovestream(e)},t.peerConnection.oniceconnectionstatechange=function(e){"connected"===e.currentTarget.iceConnectionState&&(t.connectedTime=new Date),t.oniceconnectionstatechange&&t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)},t.onaddstream=null,t.onremovestream=null,t.state="new",t.markActionNeeded(),t};t.default=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e={};return e.addStream=function(){},e};t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=function(e){var t={},i=(mozRTCPeerConnection,mozRTCSessionDescription),n=!1;t.isSubscriber=e.isSubscriber,t.pc_config={iceServers:[]},e.iceServers instanceof Array?e.iceServers.map(function(e){0===e.url.indexOf("stun:")&&t.pc_config.iceServers.push({url:e.url})}):e.stunServerUrl&&(e.stunServerUrl instanceof Array?e.stunServerUrl.map(function(e){"string"==typeof e&&""!==e&&t.pc_config.iceServers.push({url:e})}):"string"==typeof e.stunServerUrl&&""!==e.stunServerUrl&&t.pc_config.iceServers.push({url:e.stunServerUrl})),void 0===e.audio&&(e.audio=!0),void 0===e.video&&(e.video=!0),t.mediaConstraints={offerToReceiveAudio:e.audio,offerToReceiveVideo:e.video,mozDontOfferDataChannel:!0},t.roapSessionId=103,t.peerConnection=new RTCPeerConnection(t.pc_config),t.peerConnection.onicecandidate=function(e){e.candidate?t.iceCandidateCount+=1:(o.default.debug("PeerConnection State: "+t.peerConnection.iceGatheringState),void 0===t.ices&&(t.ices=0),t.ices=t.ices+1,t.ices>=1&&t.moreIceComing&&(t.moreIceComing=!1,t.markActionNeeded()))},t.checkMLineReverseInSDP=function(e){return!(!~e.indexOf("m=audio")||!~e.indexOf("m=video"))&&e.indexOf("m=audio")>e.indexOf("m=video")},t.reverseMLineInSDP=function(e){var t=e.split("m=audio"),i=t[1].split("m=video"),n="m=video"+i[1],o="m=audio"+i[0];return e=t[0]+n+o},t.processSignalingMessage=function(e){var n,r=JSON.parse(e);t.incomingMessage=r,"new"===t.state?"OFFER"===r.messageType?(r.sdp=u(r.sdp),n={sdp:r.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new i(n),function(){o.default.debug("setRemoteDescription succeeded")},function(e){o.default.info("setRemoteDescription failed: "+e.name)}),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state):"offer-sent"===t.state?"ANSWER"===r.messageType?(r.sdp=u(r.sdp),r.sdp=r.sdp.replace(/ generation 0/g,""),r.sdp=r.sdp.replace(/ udp /g," UDP "),r.sdp=r.sdp.replace(/a=group:BUNDLE audio video/,"a=group:BUNDLE sdparta_0 sdparta_1"),r.sdp=r.sdp.replace(/a=mid:audio/,"a=mid:sdparta_0"),r.sdp=r.sdp.replace(/a=mid:video/,"a=mid:sdparta_1"),t.isMLineReverseInSDP&&(r.sdp=t.reverseMLineInSDP(r.sdp)),n={sdp:r.sdp,type:"answer"},t.peerConnection.setRemoteDescription(new i(n),function(){o.default.debug("setRemoteDescription succeeded")},function(e){o.default.info("setRemoteDescription failed: "+e)}),t.sendOK(),t.state="established"):"pr-answer"===r.messageType?(n={sdp:r.sdp,type:"pr-answer"},t.peerConnection.setRemoteDescription(new i(n),function(){o.default.debug("setRemoteDescription succeeded")},function(e){o.default.info("setRemoteDescription failed: "+e.name)})):"offer"===r.messageType?t.error("Not written yet"):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state):"established"===t.state&&("OFFER"===r.messageType?(n={sdp:r.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new i(n),function(){o.default.debug("setRemoteDescription succeeded")},function(e){o.default.info("setRemoteDescription failed: "+e.name)}),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state))};var r={id:"",type:"",mediaType:"opus",googCodecName:"opus",aecDivergentFilterFraction:"0",audioInputLevel:"0",bytesSent:"0",packetsSent:"0",googEchoCancellationReturnLoss:"0",googEchoCancellationReturnLossEnhancement:"0"},a={id:"",type:"",mediaType:"",googCodecName:"h264"===e.codec?"H264":"VP8",bytesSent:"0",packetsLost:"0",packetsSent:"0",googAdaptationChanges:"0",googAvgEncodeMs:"0",googEncodeUsagePercent:"0",googFirsReceived:"0",googFrameHeightSent:"0",googFrameHeightInput:"0",googFrameRateInput:"0",googFrameRateSent:"0",googFrameWidthSent:"0",googFrameWidthInput:"0",googNacksReceived:"0",googPlisReceived:"0",googRtt:"0"},s={id:"",type:"",mediaType:"",audioOutputLevel:"0",bytesReceived:"0",packetsLost:"0",packetsReceived:"0",googAccelerateRate:"0",googCurrentDelayMs:"0",googDecodingCNG:"0",googDecodingCTN:"0",googDecodingCTSG:"0",googDecodingNormal:"0",googDecodingPLC:"0",googDecodingPLCCNG:"0",googExpandRate:"0",googJitterBufferMs:"0",googJitterReceived:"0",googPreemptiveExpandRate:"0",googPreferredJitterBufferMs:"0",googSecondaryDecodedRate:"0",googSpeechExpandRate:"0"},d={id:"",type:"",mediaType:"",googTargetDelayMs:"0",packetsLost:"0",googDecodeMs:"0",googMaxDecodeMs:"0",googRenderDelayMs:"0",googFrameWidthReceived:"0",googFrameHeightReceived:"0",googFrameRateReceived:"0",googFrameRateDecoded:"0",googFrameRateOutput:"0",googJitterBufferMs:"0",googCurrentDelayMs:"0",googMinPlayoutDelayMs:"0",googNacksSent:"0",googPlisSent:"0",googFirsSent:"0",bytesReceived:"0",packetsReceived:"0",googFramesDecoded:"0"},c=0;t.getStatsRate=function(e){t.getStats(function(t){t.forEach(function(e){"inboundrtp"===e.type&&"video"===e.mediaType&&e.googFrameRateDecoded&&(e.googFrameRateDecoded=((e.googFramesDecoded-c)/3).toString(),c=e.googFramesDecoded)}),e(t)})},t.getStats=function(e){t.peerConnection.getStats().then(function(i){var n=[];Object.keys(i).forEach(function(e){var t=i[e];n.push(t),"outboundrtp"===t.type&&"video"===t.mediaType&&(a.id=t.id,a.type=t.type,a.mediaType=t.mediaType,a.bytesSent=t.bytesSent?t.bytesSent+"":"0",a.packetsSent=t.packetsSent?t.packetsSent+"":"0",a.googPlisReceived=t.pliCount?t.pliCount+"":"0",a.googNacksReceived=t.nackCount?t.nackCount+"":"0",a.googFirsReceived=t.firCount?t.firCount+"":"0",a.googFrameRateSent=t.framerateMean?t.framerateMean+"":"0"),"outboundrtp"===t.type&&"audio"===t.mediaType&&(r.id=t.id,r.type=t.type,r.mediaType=t.mediaType,r.bytesSent=t.bytesSent?t.bytesSent+"":"0",r.packetsSent=t.packetsSent?t.packetsSent+"":"0"),"inboundrtp"!==t.type||"audio"!==t.mediaType||t.isRemote||(s.id=t.id,s.type=t.type,s.mediaType=t.mediaType,s.bytesReceived=t.bytesReceived?t.bytesReceived+"":"0",s.packetsLost=t.packetsLost?t.packetsLost+"":"0",s.packetsReceived=t.packetsReceived?t.packetsReceived+"":"0",s.googJitterReceived=t.jitter?t.jitter+"":"0"),"inboundrtp"!==t.type||"video"!==t.mediaType||t.isRemote||(d.id=t.id,d.type=t.type,d.mediaType=t.mediaType,d.bytesReceived=t.bytesReceived?t.bytesReceived+"":"0",d.googFrameRateReceived=t.framerateMean?t.framerateMean+"":"0",d.googFramesDecoded=t.framesDecoded?t.framesDecoded+"":"0",d.packetsLost=t.packetsLost?t.packetsLost+"":"0",d.packetsReceived=t.packetsReceived?t.packetsReceived+"":"0",d.googJitterBufferMs=t.jitter?t.jitter+"":"0",d.googNacksSent=t.nackCount?t.nackCount+"":"0",d.googPlisSent=t.pliCount?t.pliCount+"":"0",d.googFirsSent=t.firCount?t.firCount+"":"0"),-1!==t.id.indexOf("outbound_rtcp_video")&&(a.packetsLost=t.packetsLost?t.packetsLost+"":"0")});var o=[a,r,s,d];o.push({id:"time",startTime:t.connectedTime,timestamp:new Date}),e(o,n)},function(e){o.default.error(e)})},t.addStream=function(e){n=!0,t.peerConnection.addStream(e),t.markActionNeeded()},t.removeStream=function(){t.markActionNeeded()},t.close=function(){t.state="closed",t.peerConnection.close()},t.markActionNeeded=function(){t.actionNeeded=!0,t.doLater(function(){t.onstablestate()})},t.doLater=function(e){window.setTimeout(e,1)},t.onstablestate=function(){if(t.actionNeeded){if("new"===t.state||"established"===t.state){n&&(t.mediaConstraints=void 0),function(){t.peerConnection.createOffer(function(e){if(e.sdp=u(e.sdp),e.sdp=e.sdp.replace(/a=extmap:1 http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/abs-send-time/,"a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time"),e.sdp!==t.prevOffer)return t.peerConnection.setLocalDescription(e),t.isMLineReverseInSDP=t.checkMLineReverseInSDP(e.sdp),t.state="preparing-offer",void t.markActionNeeded();o.default.debug("Not sending a new offer")},function(e){o.default.debug("Ups! create offer failed ",e)},t.mediaConstraints)}()}else if("preparing-offer"===t.state){if(t.moreIceComing)return;t.prevOffer=t.peerConnection.localDescription.sdp,t.sendMessage("OFFER",t.prevOffer),t.state="offer-sent"}else if("offer-received"===t.state)t.peerConnection.createAnswer(function(e){if(t.peerConnection.setLocalDescription(e),t.state="offer-received-preparing-answer",t.iceStarted)return void t.markActionNeeded();var i=new Date;o.default.debug(i.getTime()+": Starting ICE in responder"),t.iceStarted=!0},function(){o.default.debug("Ups! Something went wrong")});else if("offer-received-preparing-answer"===t.state){if(t.moreIceComing)return;var e=t.peerConnection.localDescription.sdp;t.sendMessage("ANSWER",e),t.state="established"}else t.error("Dazed and confused in state "+t.state+", stopping here");t.actionNeeded=!1}},t.sendOK=function(){t.sendMessage("OK")},t.sendMessage=function(e,i){var n={};n.messageType=e,n.sdp=i,"OFFER"===e?(n.offererSessionId=t.sessionId,n.answererSessionId=t.otherSessionId,n.seq=t.sequenceNumber+=1,n.tiebreaker=Math.floor(429496723*Math.random()+1)):(n.offererSessionId=t.incomingMessage.offererSessionId,n.answererSessionId=t.sessionId,n.seq=t.incomingMessage.seq),t.onsignalingmessage(JSON.stringify(n))},t.error=function(e){throw"Error in RoapOnJsep: "+e},t.sessionId=t.roapSessionId+=1,t.sequenceNumber=0,t.actionNeeded=!1,t.iceStarted=!1,t.moreIceComing=!0,t.iceCandidateCount=0,t.onsignalingmessage=e.callback,t.peerConnection.ontrack=function(e){t.onaddstream&&t.onaddstream(e,"ontrack")},t.peerConnection.onremovestream=function(e){t.onremovestream&&t.onremovestream(e)},t.peerConnection.oniceconnectionstatechange=function(e){"connected"===e.currentTarget.iceConnectionState&&(t.connectedTime=new Date),t.oniceconnectionstatechange&&t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)};var u=function(t){if(e.video&&e.maxVideoBW){var i=t.match(/m=video.*\r\n/);if(null==i&&(i=t.match(/m=video.*\n/)),i&&i.length>0){var n=i[0]+"b=TIAS:"+1e3*e.maxVideoBW+"\r\n";t=t.replace(i[0],n)}}if(e.audio&&e.maxAudioBW){var i=t.match(/m=audio.*\r\n/);if(null==i&&(i=t.match(/m=audio.*\n/)),i&&i.length>0){var n=i[0]+"b=TIAS:"+1e3*e.maxAudioBW+"\r\n";t=t.replace(i[0],n)}}return t};return t.onaddstream=null,t.onremovestream=null,t.state="new",t.markActionNeeded(),t};t.default=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t={audioSendBytes:"0",audioSendPackets:"0",videoSendBytes:"0",videoSendPackets:"0",videoSendPacketsLost:"0",videoSendFrameRate:"0",videoSendBandwidth:"0",videoSendResolutionWidth:"0",videoSendResolutionHeight:"0",audioCodecName:"",videoCodecName:"",timestamp:"",startTime:"",duration:"0"};return e.forEach(function(e){"VideoBwe"===e.type?t.videoSendBandwidth=e.googAvailableSendBandwidth:-1!==e.id.indexOf("send")||-1!==e.id.indexOf("outbound_rtp")||-1!==e.id.indexOf("OutboundRTP")?"audio"===e.mediaType?(t.audioSendBytes=e.bytesSent,t.audioSendPackets=e.packetsSent,t.audioCodecName=e.googCodecName):(t.videoSendBytes=e.bytesSent,t.videoSendPackets=e.packetsSent,t.videoSendPacketsLost=e.packetsLost,t.videoSendFrameRate=e.googFrameRateSent,t.videoSendResolutionWidth=e.googFrameWidthSent,t.videoSendResolutionHeight=e.googFrameHeightSent,t.videoCodecName=e.googCodecName):"time"===e.id&&(t.timestamp=e.timestamp,t.startTime=e.startTime)}),t.timestamp instanceof Date&&t.startTime instanceof Date&&(t.duration=Math.floor((t.timestamp.getTime()-t.startTime.getTime())/1e3)+""),t},o=function(e){var t={audioReceiveBytes:"0",audioReceivePackets:"0",audioReceivePacketsLost:"0",videoReceiveBytes:"0",videoReceivePackets:"0",videoReceivePacketsLost:"0",videoReceiveFrameRate:"0",videoReceiveDecodeFrameRate:"0",videoReceiveBandwidth:"0",videoReceivedResolutionWidth:"0",videoReceivedResolutionHeight:"0",timestamp:"",startTime:"",duration:"0"};return e.forEach(function(e){"VideoBwe"===e.type?t.videoReceiveBandwidth=e.googAvailableReceiveBandwidth:-1!==e.id.indexOf("recv")||-1!==e.id.indexOf("inbound_rtp")||-1!==e.id.indexOf("InboundRTP")?"audio"===e.mediaType?(t.audioReceiveBytes=e.bytesReceived,t.audioReceivePackets=e.packetsReceived,t.audioReceivePacketsLost=e.packetsLost):(t.videoReceiveBytes=e.bytesReceived,t.videoReceivePacketsLost=e.packetsLost,t.videoReceivePackets=e.packetsReceived,t.videoReceiveFrameRate=e.googFrameRateReceived,t.videoReceiveDecodeFrameRate=e.googFrameRateDecoded,t.videoReceivedResolutionWidth=e.googFrameWidthReceived,t.videoReceivedResolutionHeight=e.googFrameHeightReceived):"time"===e.id&&(t.timestamp=e.timestamp,t.startTime=e.startTime)}),t.timestamp instanceof Date&&t.startTime instanceof Date&&(t.duration=Math.floor((t.timestamp.getTime()-t.startTime.getTime())/1e3)+""),t};t.publishStatsFilter=n,t.subscribeStatsFilter=o},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.LiveTranscoding=t.TranscodingUser=t.createLiveClient=t.createRtcClient=t.createClient=void 0;var o=i(29),r=n(o),a=i(0),s=n(a),d=i(6),c=n(d),u=i(2),l=i(11),p=i(5),f=i(3),m=i(32),g=i(7),v=i(12),_=i(1),S=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(_),h=function(e){var t={};return t.key=void 0,t.highStream=null,t.lowStream=null,t.lowStreamParameter=null,t.isDualStream=!1,t.highStreamState=2,t.lowStreamState=2,t.setLowStreamParameter=function(e){t.lowStreamParameter=e},t._getVideoCameraIdByLabel=function(e,t,i){(0,g.getDevices)(function(n){var o=!0,r=!1,a=void 0;try{for(var s,d=n[Symbol.iterator]();!(o=(s=d.next()).done);o=!0){var u=s.value;if(u.label===e&&"videoinput"===u.kind)return t&&t(u.deviceId)}}catch(e){r=!0,a=e}finally{try{!o&&d.return&&d.return()}finally{if(r)throw a}}return i&&i(c.default.NOT_FIND_DEVICE_BY_LABEL)},i)},t.init=function(t,i,n){if("string"!=typeof t)throw new Error("Param appId should be string");s.default.info("Initializing AgoraRTC client"),e.appId=t,e.sessionId=(0,u.generateSessionId)(),i&&i()},t.configPublisher=function(e){t.gatewayClient.configPublisher(e)},t.enableDualStream=function(i,n){return"iOS"===(0,f.getBrowserOS)()?(p.report.streamSwitch(e.sessionId,{lts:(new Date).getTime(),isdual:!0,succ:!1}),n&&n(c.default.IOS_NOT_SUPPORT)):(0,f.isWeChatBrowser)()?(p.report.streamSwitch(e.sessionId,{lts:(new Date).getTime(),isdual:!0,succ:!1}),n&&n(c.default.WECHAT_NOT_SUPPORT)):(p.report.streamSwitch(e.sessionId,{lts:(new Date).getTime(),isdual:!0,succ:!0}),t.isDualStream=!0,void(0===t.highStreamState?t._publishLowStream(i,function(e){s.default.warning(e),n&&n(c.default.ENABLE_DUALSTREAM_FAILED)}):1===t.highStreamState?n&&n(c.default.STILL_ON_PUBLISHING):i&&i()))},t.disableDualStream=function(i,n){p.report.streamSwitch(e.sessionId,{lts:(new Date).getTime(),isdual:!1,succ:!0}),t.isDualStream=!1,0===t.highStreamState?t._unpublishLowStream(i,function(e){s.default.warning(e),n&&n(c.default.DISABLE_DUALSTREAM_FAILED)}):1===t.highStreamState?n&&n(c.default.STILL_ON_PUBLISHING):i&&i()},t._createLowStream=function(e,i){if(!t.highStream||!t.highStream.stream)return void(i&&i(c.default.HIGH_STREAM_NOT_VIDEO_TRACE));var n=Object.assign({},t.highStream.params);if(n.streamID+=1,n.audio=!1,!n.video)return void(i&&i(c.default.HIGH_STREAM_NOT_VIDEO_TRACE));var o=t.highStream.stream.getVideoTracks()[0];if(!o)return void(i&&i(c.default.HIGH_STREAM_NOT_VIDEO_TRACE));t._getVideoCameraIdByLabel(o.label,function(r){n.cameraId=r;var a=new g.Stream(n);if(a.streamId=t.highStream.getId()+1,t.lowStreamParameter){var s=Object.assign({},t.lowStreamParameter);if(!s.width||!s.height){var d=(0,m.simMap)(t.highStream.profile),c=S.SUPPORT_RESOLUTION_LIST[d[0]];s.width=c[0],s.height=c[1]}if(s.framerate=s.framerate||5,s.bitrate=s.bitrate||50,(0,f.isSafari)()){var c=S.SUPPORT_RESOLUTION_LIST[t.highStream.profile];s.width=c[0],s.height=c[1]}a.setVideoProfileCustomPlus(s)}else a.setVideoProfileCustom((0,m.simMap)(t.highStream.profile));a.init(function(){t.highStream.lowStream=a,o.enabled||a.disableVideo(),e&&e(a)},i)},i)},t._getLowStream=function(e,i){t.lowStream?e(t.lowStream):t._createLowStream(function(i){t.lowStream=i,e(t.lowStream)},i)},t._publishLowStream=function(e,i){return 2!==t.lowStreamState?i&&i(c.default.LOW_STREAM_ALREADY_PUBLISHED):t.highStream&&t.highStream.hasScreen()?i&&i(c.default.SHARING_SCREEN_NOT_SUPPORT):void t._getLowStream(function(n){t.lowStreamState=1,t.gatewayClient.publish(n,function(){t.lowStreamState=0,e&&e()},function(e){s.default.debug("publish low stream failed"),i&&i(e)})},i)},t._unpublishLowStream=function(e,i){if(0!==t.lowStreamState)return i&&i(c.default.LOW_STREAM_NOT_YET_PUBLISHED);t.lowStream&&(t.gatewayClient.unpublish(t.lowStream,function(){},function(e){s.default.debug("unpublish low stream failed"),i&&i(e)}),t.lowStream.close(),t.lowStream=null,t.lowStreamState=2,e&&e())},t.join=function(i,n,o,r,a){if(i&&"string"!=typeof i)return s.default.warning("Param channelKey should be string"),a&&a(c.default.INVALID_PARAMETER);if("string"!=typeof n)return s.default.warning("Param channel should be string"),a&&a(c.default.INVALID_PARAMETER);if(o&&("number"!=typeof o||!(0,u.is32Uint)(o)))return s.default.warning("Param uid should be number"),a&&a(c.default.INVALID_PARAMETER);t.highStream=null,t.lowStream=null,t.lowStreamParameter=null,t.isDualStream=!1,t.highStreamState=2,t.lowStreamState=2;var d={appId:e.appId,sid:e.sessionId,cname:n,uid:o};p.report.sessionInit(e.sessionId,{lts:(new Date).getTime(),cname:n,appid:e.appId,mode:e.mode,succ:!0}),(0,l.getGatewayList)(d,function(o){s.default.info("Joining channel: "+n),t.key=i||e.appId,d.cid=o.cid,d.uid=o.uid,d.gatewayAddr=o.gateway_addr,t.joinInfo=d,t.gatewayClient.join(d,t.key,function(e){s.default.info("Join channal "+n+" success"),r(e)},a)},a)},t.renewChannelKey=function(e,i,n){void 0===t.key?(s.default.error("renewChannelKey should not be called before user join"),(0,u.safeCall)(n,c.default.INVALID_OPERATION)):(t.key=e,t.gatewayClient.key=e,t.gatewayClient.rejoin(),(0,u.safeCall)(i))},t.leave=function(e,i){s.default.info("Leaving channel"),t.gatewayClient.leave(e,i)},t._publish=function(i,n,o){if(2!==t.highStreamState)return s.default.warning("Can't publish stream when stream already publish",i.getId()),o&&o(c.default.STREAM_ALREADY_PUBLISHED);s.default.info("Publishing stream, uid: ",i.getId()),t.highStream=i,t.highStreamState=1,t.highStream.streamId=t.joinInfo.uid,t.gatewayClient.publish(i,function(){i.sid=e.sessionId,t.highStreamState=0,s.default.info("Publish success, uid:",i.getId()),t.isDualStream?t._publishLowStream(function(){n&&n()},function(){n&&n()}):n&&n()},o)},t._unpublish=function(e,i,n){if(0!==t.highStreamState)return s.default.warning("Can't unpublish stream when stream not publish"),n&&n(c.default.STREAM_NOT_YET_PUBLISHED);s.default.info("Unpublish stream, uid: ",e.getId()),t.isDualStream&&t.lowStream?(t._unpublishLowStream(null,n),t.gatewayClient.unpublish(e,null,n),t.highStreamState=2,s.default.info("Unpublish stream success, uid:",e.getId())):(t.gatewayClient.unpublish(e,null,n),t.highStreamState=2,s.default.info("Unpublish stream success, uid:",e.getId())),i&&i()},t.publish=function(e,i){if(2!==t.highStreamState)return void(i&&i(c.default.STREAM_ALREADY_PUBLISHED));t._publish(e,null,i)},t.unpublish=function(e,i){if(0!==t.highStreamState)return void(i&&i(c.default.STREAM_NOT_YET_PUBLISHED));t._unpublish(e,null,i)},t.subscribe=function(e,i){s.default.info("Subscribe stream, uid: ",e.getId()),t.gatewayClient.subscribe(e,null,i)},t.unsubscribe=function(e,i){s.default.info("Unsubscribe stream, uid: ",e.getId()),t.gatewayClient.unsubscribe(e,null,i)},t.setRemoteVideoStreamType=function(e,i){t.gatewayClient.setRemoteVideoStreamType(e,i)},t.startLiveStreaming=function(e,i){t.gatewayClient.startLiveStreaming(e,i)},t.stopLiveStreaming=function(e){t.gatewayClient.stopLiveStreaming(e)},t.setLiveTranscoding=function(e){Object.assign(b,e),t.gatewayClient.setLiveTranscoding(b)},t.gatewayClient=(0,r.default)(e),t.on=t.gatewayClient.on,t.on("rejoin",function(){var e=2===t.highStreamState?2:0;t.highStream&&0===e&&(s.default.info("publish after rejoin"),t.highStreamState=2,t.lowStreamState=2,t.publish(t.highStream,function(e){e&&s.default.info(e)}))}),t.on("pubP2PLost",function(e){s.default.debug("Start reconnect local peerConnection :",t.highStream.getId()),t.gatewayClient.dispatchEvent({type:"stream-reconnect-start",id:t.highStream.getId()}),t._unpublish(t.highStream,function(){t._publish(t.highStream,function(){s.default.debug("Reconnect local peerConnection success:",t.highStream.getId()),t.gatewayClient.dispatchEvent({type:"stream-reconnect-end",id:t.highStream.getId()})},function(e){s.default.debug("Reconnect local peerConnection failed:"+e),t.gatewayClient.dispatchEvent({type:"stream-reconnect-end",id:t.highStream.getId()})})},function(e){s.default.debug("Reconnect local peerConnection failed:"+e),t.gatewayClient.dispatchEvent({type:"stream-reconnect-end",id:t.highStream.getId()})})}),t.on("subP2PLost",function(e){s.default.debug("Start reconnect remote peerConnection :",e.stream.getId()),t.gatewayClient.dispatchEvent({type:"stream-reconnect-start",id:e.stream.getId()}),t.gatewayClient.unsubscribe(e.stream,function(){t.gatewayClient.subscribe(e.stream,function(){s.default.debug("Reconnect remote peerConnection success:",e.stream.getId()),t.gatewayClient.dispatchEvent({type:"stream-reconnect-end",id:e.stream.getId()})},function(i){s.default.debug("Reconnect remote peerConnection failed:"+i),t.gatewayClient.dispatchEvent({type:"stream-reconnect-end",id:e.stream.getId()})})},function(i){s.default.debug("Reconnect remote peerConnection failed:"+i),t.gatewayClient.dispatchEvent({type:"stream-reconnect-end",id:e.stream.getId()})})}),t},E={uid:0,x:0,y:0,width:0,height:0,zOrder:0,alpha:1},b={width:640,height:360,videoBitrate:400,videoFramerate:15,lowLatency:!1,audioSampleRate:v.AUDIO_SAMPLE_RATE_48000,audioBitrate:48,audioChannels:1,videoGop:30,videoCodecProfile:v.VIDEO_CODEC_PROFILE_HIGH,userCount:0,userConfigExtraInfo:{},backgroundColor:0,transcodingUsers:[]},R=function(e){return e&&"interop"===e.mode?(s.default.info("Creating client , MODE : Interop"),h({mode:"live"})):e&&"h264_interop"===e.mode?(s.default.info("Creating client , MODE : h264_interop"),h({mode:"live",codec:"h264"})):(s.default.info("Creating client , MODE : web-only"),h({mode:"rtc"}))},I=function(){return s.default.info("Creating client , MODE : rtc"),s.default.warning("createRtcClient is deprecated."),h({mode:"rtc"})},y=function(e){var t="host";return e&&"audience"===e.role&&(t=e.role),s.default.info("Creating client , MODE : live"),s.default.warning("createLiveClient is deprecated."),h({mode:"live",role:t})};t.createClient=R,t.createRtcClient=I,t.createLiveClient=y,t.TranscodingUser=E,t.LiveTranscoding=b},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=i(7),a=i(30),s=n(a),d=i(8),c=i(4),u=i(0),l=n(u),p=i(6),f=n(p),m=i(10),g=n(m),v=i(11),_=i(1),S=i(5),h=i(2),E=i(3),b=function(e){function t(){M.remoteStreamsInChannel.clear();for(var e in M.remoteStreams)if(M.remoteStreams.hasOwnProperty(e)){var t=M.remoteStreams[e];t.stop(),t.close(),delete M.remoteStreams[e],void 0!==t.pc&&(t.pc.close(),t.pc=void 0)}}var i=!1,n=function(){return{_type:"ping"}},a=function(){return{_type:"join1",message:{appId:e.appId,key:M.key,channel:M.joinInfo.cname,uid:M.uid,version:_.VERSION,browser:navigator.userAgent,mode:e.mode,role:e.role,config:M.config}}},u=function(){return{_type:"leave"}},m=function(e){return{_type:"control",message:e}},b=function(e){return{_type:"token",message:e}},R=function(e){return{_type:"unpublish",message:e}},I=function(e){return{_type:"unsubscribe",message:e}},y=function(e,t){return{_type:"switchVideoStream",message:{id:e,type:t}}},A=function(e,t,i){return{_type:"publish",options:e,sdp:t,p2pid:i}},C=function(e){return{_type:"publish_stats",options:{stats:e},sdp:null}},T=function(e){return{_type:"publish_stats_low",options:{stats:e},sdp:null}},O=function(e,t,i){return{_type:"subscribe",options:e,sdp:t,p2pid:i}},w=function(e,t){return{_type:"subscribe_stats",options:{id:e,stats:t},sdp:null}},N=function(e,t){return{_type:"start_live_streaming",message:{url:e,transcodingEnabled:t}}},D=function(e){return{_type:"stop_live_streaming",message:{url:e}}},L=function(e){return{_type:"set_live_transcoding",message:{transcoding:e}}},M=(0,c.EventDispatcher)(e);M.socket=void 0,M.state=0,M.mode=e.mode,M.role=e.role,M.codec=e.codec,M.config={},M.timers={},M.timer_counter={},M.localStreams={},M.remoteStreams={},M.attemps=1,M.p2p_attemps=1,M.audioLevel={},M.activeSpeaker=void 0,M.p2ps=new Map,M.firstFrameTimer=new Map,M.liveStreams=new Map,M.remoteStreamsInChannel=new Set;var k=g.default;M.p2pCounter=(0,h.random)(1e5),M.generateP2PId=function(){return++M.p2pCounter},M.remoteVideoStreamTypes={REMOTE_VIDEO_STREAM_HIGH:0,REMOTE_VIDEO_STREAM_LOW:1,REMOTE_VIDEO_STREAM_MEDIUM:2},M.configPublisher=function(e){M.config=e},M.join=function(e,t,i,o){var r=(new Date).getTime(),s=e.uid;return 0!==M.state?(l.default.error("Server already in connecting/connected state"),o&&o(f.default.INVALID_OPERATION),void S.report.joinGateway(e.sid,{lts:r,succ:!1,ec:f.default.INVALID_OPERATION,addr:null})):null!==s&&void 0!==s&&parseInt(s)!==s?(l.default.error("Input uid is invalid"),o&&o(f.default.INVALID_PARAMETER),void S.report.joinGateway(e.sid,{lts:r,succ:!1,ec:f.default.INVALID_PARAMETER,addr:null})):(M.joinInfo=e,M.uid=s,M.key=t,M.state=1,void U(e,function(t){M.stunServerUrl=t.stunServerUrl,M.turnServer=t.turnServer,M.state=2,l.default.debug("Connected to gateway server"),M.pingTimer=setInterval(function(){B(n(),function(){},function(e){})},3e3),B(a(),function(t){S.report.joinGateway(e.sid,{lts:r,succ:!0,ec:null,vid:t.vid,addr:M.socket.getURL()}),i(M.uid)},function(t){l.default.error("User join failed ["+t+"]"),o&&o(t),S.report.joinGateway(e.sid,{lts:r,succ:!1,ec:t,addr:M.socket.getURL()})})},function(t){l.default.error("User join failed ["+t+"]"),o&&o(t),S.report.joinGateway(e.sid,{lts:r,succ:!1,ec:t,addr:M.socket.getURL()})}))},M.leave=function(e,i){if(2!=M.state)return void k(e);clearInterval(M.pingTimer);for(var n in M.timers)M.timers.hasOwnProperty(n)&&clearInterval(M.timers[n]);B(u(),function(t){M.socket.close(),M.socket=void 0,l.default.info("Leave channal success"),e&&e(t)},i);for(var n in M.localStreams)if(M.localStreams.hasOwnProperty(n)){var o=M.localStreams[n];delete M.localStreams[n],void 0!==o.pc&&(o.pc.close(),o.pc=void 0)}t(),M.state=0},M.publish=function(e,t,i){var n=(new Date).getTime();if(e.publishLTS=n,"object"!==(void 0===e?"undefined":o(e))||null===e)return l.default.error("Invalid local stream"),i&&i(f.default.INVALID_LOCAL_STREAM),void S.report.publish(M.joinInfo.sid,{lts:n,succ:!1,ec:f.default.INVALID_LOCAL_STREAM});if(null===e.stream&&void 0===e.url)return l.default.error("Invalid local media stream"),i&&i(f.default.INVALID_LOCAL_STREAM),void S.report.publish(M.joinInfo.sid,{lts:n,succ:!1,ec:f.default.INVALID_LOCAL_STREAM});if(2!==M.state)return l.default.error("User is not in the session"),i&&i(f.default.INVALID_OPERATION),void S.report.publish(M.joinInfo.sid,{lts:n,succ:!1,ec:f.default.INVALID_OPERATION});var r=e.getAttributes()||{};if(e.local&&void 0===M.localStreams[e.getId()]&&(e.hasAudio()||e.hasVideo()||e.hasScreen())){var a=M.generateP2PId();void 0!==e.url?x(A({state:"url",audio:e.hasAudio(),video:e.hasVideo(),attributes:e.getAttributes(),mode:M.mode},e.url),function(t,i){"success"===t?(e.getUserId=function(){return i},M.localStreams[i]=e,e.onClose=function(){M.unpublish(e)}):l.default.error("Publish local stream failed",t)}):(M.localStreams[e.getId()]=e,e.pc=(0,d.Connection)({callback:function(o){l.default.debug("SDP exchange in publish : send offer --  ",JSON.parse(o)),x(A({state:"offer",id:e.getId(),audio:e.hasAudio(),video:e.hasVideo()||e.hasScreen(),attributes:e.getAttributes(),mode:M.mode,codec:M.codec,p2pid:a},o),function(r,s){if("error"===r)return l.default.error("Publish local stream failed"),i&&i(f.default.PUBLISH_STREAM_FAILED),void S.report.publish(M.joinInfo.sid,{lts:n,succ:!1,localSDP:o,ec:f.default.PUBLISH_STREAM_FAILED});e.pc.onsignalingmessage=function(t){e.pc.onsignalingmessage=function(){},x(A({state:"ok",id:e.getId(),audio:e.hasAudio(),video:e.hasVideo(),screen:e.hasScreen(),attributes:e.getAttributes(),mode:M.mode},t)),e.getUserId=function(){return s.id},l.default.info("Local stream published with uid",s.id),e.onClose=function(){M.unpublish(e)},e.unmuteAudio=function(){B(m({action:"audio-out-on",streamId:e.getId()}),function(){},function(){})},e.unmuteVideo=function(){B(m({action:"video-out-on",streamId:e.getId()}),function(){},function(){})},e.muteAudio=function(){B(m({action:"audio-out-off",streamId:e.getId()}),function(){},function(){})},e.muteVideo=function(){B(m({action:"video-out-off",streamId:e.getId()}),function(){},function(){})},e.getId()===e.getUserId()&&(e.isAudioOn()||e.hasAudio()&&(l.default.debug("local stream audio mute"),e.muteAudio()),e.isVideoOn()||(e.hasVideo()||e.hasScreen())&&(l.default.debug("local stream video mute"),e.muteVideo()))},e.pc.oniceconnectionstatechange=function(o){"failed"===o?(void 0!=M.timers[e.getId()]&&clearInterval(M.timers[e.getId()]),l.default.error("Publisher connection is lost"),i&&i(f.default.PEERCONNECTION_FAILED),M.p2ps.delete(a),M.dispatchEvent((0,c.ClientEvent)({type:"pubP2PLost",stream:e})),S.report.publish(M.joinInfo.sid,{lts:n,succ:!1,ec:f.default.PEERCONNECTION_FAILED})):"connected"===o&&(M.p2ps.set(a,e),e.p2pId=a,t&&t(),S.report.publish(M.joinInfo.sid,{lts:n,succ:!0,ec:null}))},l.default.debug("SDP exchange in publish : receive answer --  ",JSON.parse(r)),e.pc.processSignalingMessage(r)})},audio:e.hasAudio(),video:e.hasVideo(),screen:e.hasScreen(),isSubscriber:!1,iceServers:[],stunServerUrl:M.stunServerUrl,turnServer:M.turnServer,maxAudioBW:r.maxAudioBW,minVideoBW:r.minVideoBW,maxVideoBW:r.maxVideoBW,mode:M.mode,codec:M.codec}),e.pc.addStream(e.stream),l.default.debug("PeerConnection add stream :",e.stream),M.timers[e.getId()]=setInterval(function(){e&&e.pc&&e.pc.getStats&&e.pc.getStatsRate(function(t){t.forEach(function(t){-1===t.id.indexOf("outbound_rtp")&&-1===t.id.indexOf("OutboundRTP")||"video"!==t.mediaType||(t.googFrameWidthSent=e.videoWidth+"",t.googFrameHeightSent=e.videoHeight+""),e.getUserId&&(e.getId()===e.getUserId()?B(C(t),null,null):B(T(t),null,null))})})},3e3),void 0!==e.aux_stream&&(e.pc.addStream(e.aux_stream),l.default.debug("PeerConnection add stream :",e.aux_stream)))}},M.unpublish=function(e,t,i){return"object"!==(void 0===e?"undefined":o(e))||null===e?(l.default.error("Invalid local stream"),void k(i,f.default.INVALID_LOCAL_STREAM)):2!==M.state?(l.default.error("User not in the session"),void k(i,f.default.INVALID_OPERATION)):(void 0!=M.timers[e.getId()]&&clearInterval(M.timers[e.getId()]),void(void 0!==M.socket?e.local&&void 0!==M.localStreams[e.getId()]?(delete M.localStreams[e.getId()],B(R(e.getUserId())),(e.hasAudio()||e.hasVideo()||e.hasScreen())&&void 0===e.url&&void 0!==e.pc&&(e.pc.close(),e.pc=void 0),e.onClose=void 0,e.unmuteAudio=void 0,e.muteAudio=void 0,e.unmuteVideo=void 0,e.muteVideo=void 0,M.p2ps.delete(e.p2pId),t&&t()):(l.default.error("Invalid local stream"),k(i,f.default.INVALID_LOCAL_STREAM)):(l.default.error("User not in the session"),k(i,f.default.INVALID_OPERATION))))},M.subscribe=function(e,t,i){var n=(new Date).getTime();if(e.subscribeLTS=n,"object"!==(void 0===e?"undefined":o(e))||null===e)return l.default.error("Invalid remote stream"),i&&i(f.default.INVALID_REMOTE_STREAM),void S.report.subscribe(M.joinInfo.sid,{lts:n,succ:!1,peerid:e.getId()+"",ec:f.default.INVALID_REMOTE_STREAM});if(2!==M.state)return l.default.error("User is not in the session"),i&&i(f.default.INVALID_OPERATION),void S.report.subscribe(M.joinInfo.sid,{lts:n,succ:!1,peerid:e.getId()+"",ec:f.default.INVALID_OPERATION});if(!e.local&&M.remoteStreams.hasOwnProperty(e.getId()))if(e.hasAudio()||e.hasVideo()||e.hasScreen()){var r=M.generateP2PId();e.pc=(0,d.Connection)({callback:function(t){l.default.debug("SDP exchange in subscribe : send offer --  ",JSON.parse(t)),x(O({streamId:e.getId(),audio:!0,video:!0,mode:M.mode,codec:M.codec,p2pid:r},t),function(t){if("error"===t)return l.default.error("Subscribe remote stream failed, closing stream ",e.getId()),e.close(),i&&i(f.default.SUBSCRIBE_STREAM_FAILED),void S.report.subscribe(M.joinInfo.sid,{lts:n,succ:!1,peerid:e.getId()+"",ec:f.default.SUBSCRIBE_STREAM_FAILED});l.default.debug("SDP exchange in subscribe : receive answer --  ",JSON.parse(t)),e.pc.processSignalingMessage(t)})},nop2p:!0,audio:!0,video:!0,screen:e.hasScreen(),isSubscriber:!0,iceServers:[],stunServerUrl:M.stunServerUrl,turnServer:M.turnServer}),e.pc.onaddstream=function(t,i){if("ontrack"===i&&"video"===t.track.kind||"onaddstream"===i){if(l.default.info("Remote stream subscribed with uid ",e.getId()),M.remoteStreams[e.getId()].stream="onaddstream"===i?t.stream:t.streams[0],M.remoteStreams[e.getId()].hasVideo()){if((0,E.isFireFox)()){var n=M.remoteStreams[e.getId()].stream;(0,h.vsResHack)(n,function(t,i){e.videoWidth=t,e.videoHeight=i},function(e){return l.default.warning("vsResHack failed:"+e)})}}else M.remoteStreams[e.getId()].disableVideo();var o=(0,c.StreamEvent)({type:"stream-subscribed",stream:M.remoteStreams[e.getId()]});M.dispatchEvent(o)}e.unmuteAudio=function(){B(m({action:"audio-in-on",streamId:e.getId()}),function(){},function(){})},e.muteAudio=function(){B(m({action:"audio-in-off",streamId:e.getId()}),function(){},function(){})},e.unmuteVideo=function(){B(m({action:"video-in-on",streamId:e.getId()}),function(){},function(){})},e.muteVideo=function(){B(m({action:"video-in-off",streamId:e.getId()}),function(){},function(){})}},M.timers[e.getId()]=setInterval(function(){e&&e.pc&&e.pc.getStats&&e.pc.getStatsRate(function(t){t.forEach(function(t){-1!==t.id.indexOf("inbound_rtp")&&"video"===t.mediaType&&(t.googFrameWidthReceived=e.videoWidth+"",t.googFrameHeightReceived=e.videoHeight+""),x(w(e.getId(),t),null,null)})})},3e3),M.audioLevel[e.getId()]=0,M.timers[e.getId()+"audio"]=setInterval(function(){e&&e.pc&&e.pc.getStats&&e.pc.getStats(function(t){t.forEach(function(t){if("audio"===t.mediaType){if(t.audioOutputLevel>5e3){M.audioLevel[e.getId()]<20&&(M.audioLevel[e.getId()]+=1);for(var i in M.audioLevel)parseInt(i)!==e.getId()&&M.audioLevel[i]>0&&(M.audioLevel[i]-=1)}var n=Object.keys(M.audioLevel),o=n.sort(function(e,t){return M.audioLevel[t]-M.audioLevel[e]});if(M.activeSpeaker!==o[0]){var r=(0,c.ClientEvent)({type:"active-speaker",uid:o[0]});M.dispatchEvent(r),M.activeSpeaker=o[0],l.default.debug("Update active speaker:"+M.activeSpeaker)}}})})},50),e.pc.oniceconnectionstatechange=function(o){"failed"===o?(void 0!=M.timers[e.getId()]&&(clearInterval(M.timers[e.getId()]),clearInterval(M.timers[e.getId()]+"audio")),M.p2ps.delete(r),l.default.error("Subscriber connection is lost",e.getId()),i&&i(f.default.PEERCONNECTION_FAILED),M.remoteStreams[e.getId()]&&M.dispatchEvent((0,c.ClientEvent)({type:"subP2PLost",stream:e})),S.report.subscribe(M.joinInfo.sid,{lts:n,succ:!1,peerid:e.getId()+"",ec:f.default.PEERCONNECTION_FAILED})):"connected"===o&&(M.p2ps.set(r,e),e.p2pId=r,t&&t(),S.report.subscribe(M.joinInfo.sid,{lts:n,succ:!0,peerid:e.getId()+"",ec:null}),M.firstFrameTimer.set(e.getId(),setInterval(function(){e.pc?e.pc.getStats(function(t){t.forEach(function(t){-1===t.id.indexOf("recv")&&-1===t.id.indexOf("inbound_rtp")&&-1===t.id.indexOf("InboundRTP")||"video"===t.mediaType&&(t.framesDecoded>0||t.googFramesDecoded>0)&&(clearInterval(M.firstFrameTimer.get(e.getId())),M.firstFrameTimer.delete(e.getId()),S.report.firstRemoteFrame(M.joinInfo.sid,{lts:(new Date).getTime(),peerid:e.getId()+"",succ:!0,width:+t.googFrameWidthReceived,height:+t.googFrameHeightReceived}))})}):(clearInterval(M.firstFrameTimer.get(e.getId())),M.firstFrameTimer.delete(e.getId()))},100)))}}else l.default.error("Invalid remote stream"),i&&i(f.default.INVALID_REMOTE_STREAM),S.report.subscribe(M.joinInfo.sid,{lts:n,succ:!1,peerid:e.getId()+"",ec:f.default.INVALID_REMOTE_STREAM});else l.default.error("No such remote stream"),i&&i(f.default.NO_SUCH_REMOTE_STREAM),S.report.subscribe(M.joinInfo.sid,{lts:n,succ:!1,peerid:e.getId()+"",ec:f.default.INVALID_REMOTE_STREAM})},M.unsubscribe=function(e,t,i){return"object"!==(void 0===e?"undefined":o(e))||null===e?(l.default.error("Invalid remote stream"),void k(i,f.default.INVALID_REMOTE_STREAM)):2!==M.state?(l.default.error("User is not in the session"),void k(i,f.default.INVALID_OPERATION)):(void 0!=M.timers[e.getId()]&&(clearInterval(M.timers[e.getId()]),clearInterval(M.timers[e.getId()]+"audio")),void 0!=M.audioLevel[e.getId()]&&delete M.audioLevel[e.getId()],void 0!=M.timer_counter[e.getId()]&&delete M.timer_counter[e.getId()],M.remoteStreams.hasOwnProperty(e.getId())?M.socket?e.local?(l.default.error("Invalid remote stream"),void k(i,f.default.INVALID_REMOTE_STREAM)):(e.close(),void B(I(e.getId()),function(n){if("error"===n)return l.default.error("Unsubscribe remote stream failed",e.getId()),void k(i,f.default.UNSUBSCRIBE_STREAM_FAILED);void 0!==e.pc&&(e.pc.close(),e.pc=void 0),e.onClose=void 0,e.unmuteAudio=void 0,e.muteAudio=void 0,e.unmuteVideo=void 0,e.muteVideo=void 0,M.p2ps.delete(e.p2pId),l.default.info("Unsubscribe stream success"),M.dispatchEvent((0,c.ClientEvent)({type:"stream-removed",uid:e.getId(),stream:e})),t&&t()},i)):(l.default.error("User is not in the session"),void k(i,f.default.INVALID_OPERATION)):void k(i,f.default.NO_SUCH_REMOTE_STREAM))},M.setRemoteVideoStreamType=function(e,t){if(l.default.debug("Switching remote video stream "+e.getId()+" to "+t),"object"!==(void 0===e?"undefined":o(e))||null===e)return void l.default.error("Invalid remote stream");if(2!==M.state)return void l.default.error("User is not in the session");if(!e.local){switch(t){case M.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_HIGH:case M.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_LOW:case M.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_MEDIUM:break;default:return}B(y(e.getId(),t),null,null)}},M.startLiveStreaming=function(e,t){if(M.liveStreams.set(e,t),l.default.debug("Start live streaming "+e+" transcodingEnabled "+t),2!==M.state)return void l.default.error("User is not in the session");B(N(e,t),null,null)},M.stopLiveStreaming=function(e){if(l.default.debug("Stop live streaming "+e),2!==M.state)return void l.default.error("User is not in the session");M.liveStreams.delete(e),B(D(e),null,null)},M.setLiveTranscoding=function(e){if((0,h.isLiveTranscodingValid)(e)){if(M.transcoding=e,l.default.debug("Set live transcoding ",e),2!==M.state)return void l.default.error("User is not in the session");B(L(e),null,null)}};var P=function(e){return 1e3*Math.min(30,Math.pow(2,e)-1)};M.rejoin=function(){0!==M.state&&(M.state=0),M.socket&&(clearInterval(M.pingTimer),M.socket.close(),M.socket=void 0),V()};var V=function(){M.key?(l.default.info("Re-joining to channel "+M.joinInfo.cname),M.join(M.joinInfo,M.key,function(e){l.default.info("User "+e+" is re-joined to "+M.joinInfo.cname);for(var t in M.localStreams)if(void 0!==M.localStreams[t]){var i=M.localStreams[t];delete M.localStreams[t],void 0!==i.pc&&(i.pc.close(),i.pc=void 0)}M.dispatchEvent((0,c.ClientEvent)({type:"rejoin"})),M.liveStreams&&M.liveStreams.size&&M.liveStreams.forEach(function(e,t){e&&M.setLiveTranscoding(M.transcoding),M.startLiveStreaming(t,e)})},function(e){l.default.error("Re-join to channel failed ["+e+"]"),M.dispatchEvent((0,c.StreamEvent)({type:"error",reason:e}))})):l.default.error("Connection recover failed [Invalid channel key]")},F=function(e){M.socket=(0,s.default)(e,{sid:M.joinInfo.sid})},U=function(e,n,o){void 0!==M.socket?M.socket.socket.connect():(F(e.gatewayAddr),M.socket.on("onUplinkStats",function(e){M.localStreams[M.uid]&&(M.localStreams[M.uid].uplinkStats=e)}),M.socket.on("connect",function(){M.attemps=1,B(b(e),n,o)}),M.socket.on("reconnect",function(){l.default.debug("Try to reconnect choose server and get gateway list again "),(0,v.getGatewayList)(M.joinInfo,function(e){M.socket.reconnect(e.gateway_addr)})}),M.socket.on("connect_error",function(e){for(var n in M.timers)M.timers.hasOwnProperty(n)&&clearInterval(M.timers[n]);for(var n in M.remoteStreams)if(M.remoteStreams.hasOwnProperty(n)){var o=M.remoteStreams[n],r=(0,c.ClientEvent)({type:"stream-removed",uid:o.getId(),stream:o});M.dispatchEvent(r)}if(t(),1!=i){clearInterval(M.pingTimer),M.state=0,M.socket=void 0;var r=(0,c.StreamEvent)({type:"error",reason:f.default.SOCKET_ERROR});M.dispatchEvent(r);var a=P(M.attemps);l.default.error("Connect to server error ["+JSON.stringify(e)+"], attempt to recover [#"+M.attemps+"] after "+a/1e3+" seconds");setTimeout(function(){M.attemps++,V()},a)}}),M.socket.on("disconnect",function(e){if(0!==M.state){M.state=0;for(var n in M.timers)M.timers.hasOwnProperty(n)&&clearInterval(M.timers[n]);for(var n in M.remoteStreams)if(M.remoteStreams.hasOwnProperty(n)){var o=M.remoteStreams[n],r=(0,c.ClientEvent)({type:"stream-removed",uid:o.getId(),stream:o});M.dispatchEvent(r)}if(M.p2ps.clear(),t(),1!=i){clearInterval(M.pingTimer),M.socket=void 0;var r=(0,c.StreamEvent)({type:"error",reason:f.default.SOCKET_DISCONNECTED});M.dispatchEvent(r);var a=P(M.attemps);l.default.error("Disconnect from server ["+e+"], attempt to recover [#"+M.attemps+"] after "+a/1e3+" seconds");setTimeout(function(){M.attemps++,V()},a)}}}),M.socket.on("onAddAudioStream",function(e){if(l.default.info("Newly added audio stream with uid",e.id),M.remoteStreamsInChannel.has(e.id)||M.remoteStreamsInChannel.add(e.id),void 0===M.remoteStreams[e.id]){var t=(0,r.Stream)({streamID:e.id,local:!1,audio:e.audio,video:e.video,screen:e.screen,attributes:e.attributes});M.remoteStreams[e.id]=t;var i=(0,c.StreamEvent)({type:"stream-added",stream:t});M.dispatchEvent(i)}}),M.socket.on("onAddVideoStream",function(e){if(l.default.info("Newly added remote stream with uid",e.id),M.remoteStreamsInChannel.has(e.id)||M.remoteStreamsInChannel.add(e.id),void 0===M.remoteStreams[e.id]){var t=(0,r.Stream)({streamID:e.id,local:!1,audio:e.audio,video:e.video,screen:e.screen,attributes:e.attributes});M.remoteStreams[e.id]=t;var i=(0,c.StreamEvent)({type:"stream-added",stream:t});M.dispatchEvent(i)}else if(void 0!==M.remoteStreams[e.id].stream){M.remoteStreams[e.id].video=!0,M.remoteStreams[e.id].enableVideo(),l.default.info("Stream changed: enable video "+e.id);var n=M.remoteStreams[e.id],o=n.player.elementID;n.stop(),n.play(o)}else{var t=(0,r.Stream)({streamID:e.id,local:!1,audio:!0,video:!0,screen:!1,attributes:e.attributes});M.remoteStreams[e.id]=t,l.default.info("Stream changed: modify video "+e.id)}}),M.socket.on("onRemoveStream",function(e){M.remoteStreamsInChannel.has(e.id)&&M.remoteStreamsInChannel.delete(e.id);var t=M.remoteStreams[e.id];if(!t)return void console.log("ERROR stream ",e.id," not found onRemoveStream ",e);delete M.remoteStreams[e.id];var i=(0,c.StreamEvent)({type:"stream-removed",stream:t});M.dispatchEvent(i),t.close(),void 0!==t.pc&&(t.pc.close(),t.pc=void 0)}),M.socket.on("onPublishStream",function(e){var t=M.localStreams[e.id],i=(0,c.StreamEvent)({type:"stream-published",stream:t});M.dispatchEvent(i)}),M.socket.on("mute_audio",function(e){if(M.remoteStreamsInChannel.has(e.peerid)){l.default.info("rcv peer mute audio:"+e.peerid);var t=(0,c.ClientEvent)({type:"mute-audio",uid:e.peerid});M.dispatchEvent(t)}}),M.socket.on("unmute_audio",function(e){if(M.remoteStreamsInChannel.has(e.peerid)){l.default.info("rcv peer unmute audio:"+e.peerid);var t=(0,c.ClientEvent)({type:"unmute-audio",uid:e.peerid});M.dispatchEvent(t)}}),M.socket.on("mute_video",function(e){if(M.remoteStreamsInChannel.has(e.peerid)){l.default.info("rcv peer mute video:"+e.peerid);var t=(0,c.ClientEvent)({type:"mute-video",uid:e.peerid});M.dispatchEvent(t)}}),M.socket.on("unmute_video",function(e){if(M.remoteStreamsInChannel.has(e.peerid)){l.default.info("rcv peer unmute video:"+e.peerid);var t=(0,c.ClientEvent)({type:"unmute-video",uid:e.peerid});M.dispatchEvent(t)}}),M.socket.on("user_banned",function(e){l.default.info("user banned uid:"+e.id+"error:"+e.errcode);var t=(0,c.ClientEvent)({type:"client-banned",uid:e.id,attr:e.errcode});M.dispatchEvent(t),i=!0,leave()}),M.socket.on("onP2PLost",function(e){if(l.default.debug("p2plost:",e),"publish"===e.event){var t=M.localStreams[e.uid];t&&S.report.publish(M.joinInfo.sid,{lts:t.publishLTS,succ:!1,ec:"DTLS failed"})}if("subscribe"===e.event){var i=M.remoteStreams[e.uid];i&&S.report.subscribe(M.joinInfo.sid,{lts:i.subscribeLTS,succ:!1,peerid:e.uid+"",ec:"DTLS failed"})}l.default.debug("p2plost:",e.p2pid);var n=M.p2ps.get(e.p2pid);n&&(M.p2ps.delete(e.p2pid),n.local?M.dispatchEvent((0,c.ClientEvent)({type:"pubP2PLost",stream:n})):M.remoteStreams[n.getId()]&&M.dispatchEvent((0,c.ClientEvent)({type:"subP2PLost",stream:n})))}),M.socket.on("onRepeatJoin",function(e){console.log("recv onRepeatJoin message: uid="+e.uid)}),M.socket.on("onPeerLeave",function(e){var t=(0,c.ClientEvent)({type:"peer-leave",uid:e.id});if(M.remoteStreamsInChannel.has(e.id)&&M.remoteStreamsInChannel.delete(e.id),M.remoteStreams.hasOwnProperty(e.id)&&(t.stream=M.remoteStreams[e.id]),M.dispatchEvent(t),M.remoteStreams.hasOwnProperty(e.id)){l.default.info("closing stream on peer leave",e.id);var i=M.remoteStreams[e.id];i.close(),delete M.remoteStreams[e.id],void 0!==i.pc&&(i.pc.close(),i.pc=void 0)}M.timers.hasOwnProperty(e.id)&&(clearInterval(M.timers[e.id]),delete M.timers[e.id]),void 0!=M.audioLevel[e.id]&&delete M.audioLevel[e.id],void 0!=M.timer_counter[e.id]&&delete M.timer_counter[e.id]}),M.socket.on("onUplinkStats",function(e){}),M.socket.on("liveStreamingStarted",function(e){var t=(0,c.LiveStreamingEvent)({type:"liveStreamingStarted",url:e.url});M.dispatchEvent(t)}),M.socket.on("liveStreamingFailed",function(e){var t=(0,c.LiveStreamingEvent)({type:"liveStreamingFailed",url:e.url});M.dispatchEvent(t)}),M.socket.on("liveStreamingStopped",function(e){var t=(0,c.LiveStreamingEvent)({type:"liveStreamingStopped",url:e.url});M.dispatchEvent(t)}),M.socket.on("liveTranscodingUpdated",function(e){var t=(0,c.LiveStreamingEvent)({type:"liveTranscodingUpdated",reason:e.reason});M.dispatchEvent(t)}))},B=function(e,t,i){if(void 0===M.socket)return l.default.error("No socket available"),void k(i,f.default.INVALID_OPERATION);try{M.socket.emitSimpleMessage(e,function(e,n){"success"===e?"function"==typeof t&&t(n):"function"==typeof i&&i(p.GatewayErrorCode[n]||n)})}catch(t){l.default.error("Socket emit message failed"+JSON.stringify(e)),l.default.error(t),k(i,f.default.SOCKET_ERROR)}},x=function(e,t){if(void 0===M.socket)return void l.default.error("Error in sendSimpleSdp [socket not ready]");try{M.socket.emitSimpleMessage(e,function(e,i){t&&t(e,i)})}catch(e){l.default.error("Error in sendSimpleSdp ["+e+"]")}};return M};t.default=b},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(31),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=i(4),a=function(e,t){var i={};return i.connect=function(){t.host=e,i.signal=(0,o.default)(t),i.on=i.signal.on,i.dispatchEvent=i.signal.dispatchEvent,i.signal.on("onopen",function(e){i.signal.onEvent=function(e){i.dispatchEvent((0,r.MediaEvent)({type:e.event,msg:e}))},i.dispatchEvent((0,r.MediaEvent)({type:"connect",msg:e}))}),i.signal.on("onError",function(e){var t=e.msg;onError(t.code,"error")})},i.disconnect=function(){i.signal.disconnect()},i.close=function(){i.signal.close()},i.getURL=function(){return i.signal.getURL()},i.reconnect=function(e){i.signal.creatConnection(e)},i.emitSimpleMessage=function(e,t){i.signal.sendSignalCommand(e,t)},i.connect(),i};t.default=a},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(4),r=i(10),a=n(r),s=i(0),d=n(s),c=i(5),u=function(e){var t=(0,o.EventDispatcher)(e);return t.needReconnect=!0,t.isTimeout=!1,t.isInit=!0,t.hostIndex=0,t.requestID=0,e.host instanceof Array?t.host=e.host:t.host=[e.host],t.Reconnection=function(e){t.host=e||t.host,t.hostIndex=0,t.creatConnection()},t.getURL=function(){return t.connection.url},t.creatConnection=function(){if(t.hostIndex>=t.host.length)return t.hostIndex=0,void t.dispatchEvent((0,o.MediaEvent)({type:"reconnect"}));d.default.debug("start connect:"+t.host[t.hostIndex]),t.lts=(new Date).getTime(),t.connection=new WebSocket("wss://"+t.host[t.hostIndex++]),t.connection.onopen=function(e){d.default.debug("websockect opened"),t.isTimeout=!1,t.isInit=!1,clearTimeout(t.timeoutCheck),t.dispatchEvent((0,o.MediaEvent)({type:"onopen",event:e,socket:t}))},t.connection.onmessage=function(e){var i=JSON.parse(e.data);i.hasOwnProperty("_id")?t.dispatchEvent((0,o.MediaEvent)({type:i._id,msg:i})):i.hasOwnProperty("_type")&&t.dispatchSocketEvent((0,o.MediaEvent)({type:i._type,msg:i.message}))},t.connection.onclose=function(i){t.needReconnect?t.isTimeout||t.isInit?(d.default.debug("websockect connect timeout"),c.report.joinGateway(e.sid,{lts:t.lts,succ:!1,ec:"timeout",addr:t.connection.url}),t.creatConnection()):t.dispatchEvent((0,o.MediaEvent)({type:"disconnect",event:i})):(d.default.debug("websockect closeed"),(0,a.default)(e.onFailure,i),clearTimeout(t.timeoutCheck),t.dispatchEvent((0,o.MediaEvent)({type:"close",event:i})),t.connection.onopen=void 0,t.connection.onclose=void 0,t.connection.onerror=void 0,t.connection.onmessage=void 0,t.connection=void 0)},t.connection.onerror=function(e){};setTimeout(function(){t.connection&&t.connection.readyState!=WebSocket.OPEN&&(t.isTimeout=!0,t.connection.close())},5e3)},t.creatConnection(),t.sendMessage=function(e,i){t.connection&&t.connection.readyState==WebSocket.OPEN?t.connection.send(JSON.stringify(e)):i({error:"Gateway not connected"})},t.disconnect=function(){t.needReconnect=!0,t.connection.close()},t.close=function(){t.needReconnect=!1,t.connection.close()},t.sendSignalCommand=function(e,i){e._id="_request_"+t.requestID,t.requestID+=1,"publish_stats"!==e._type&&"subscribe_stats"!==e._type&&"publish_stats_low"!==e._type&&t.on(e._id,function(n){n.msg&&i&&i(n.msg._result,n.msg.message),delete t.dispatcher.eventListeners[e._id]}),t.sendMessage(e,function(e){e.reason="NOT_CONNECTED",i&&i(e.reason,e)})},t};t.default=u},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.simMap=void 0;var n=i(3),o=function(e){var t;switch(e){case"120p":case"120p_1":t=["120p_1","120p_1","120p_1"];break;case"120p_3":t=["120p_3","120p_3","120p_3"];break;case"180p":case"180p_1":t=["90p_1","90p_1","180p_1"];break;case"180p_3":t=["120p_3","120p_3","180p_3"];break;case"180p_4":t=["120p_1","120p_1","180p_4"];break;case"240p":case"240p_1":t=["120p_1","120p_1","240p_1"];break;case"240p_3":t=["120p_3","120p_3","240p_3"];break;case"240p_4":t=["120p_4","120p_4","240p_4"];break;case"360p":case"360p_1":case"360p_4":case"360p_9":case"360p_10":case"360p_11":t=["90p_1","90p_1","360p_1"];break;case"360p_3":case"360p_6":t=["120p_3","120p_3","360p_3"];break;case"360p_7":case"360p_8":t=["120p_1","120p_1","360p_7"];break;case"480p":case"480p_1":case"480p_2":case"480p_4":case"480p_10":t=["120p_1","120p_1","480p_1"];break;case"480p_3":case"480p_6":t=["120p_3","120p_3","480p_3"];break;case"480p_8":case"480p_9":t=["120p_4","120p_4","480p_8"];break;case"720p":case"720p_1":case"720p_2":case"720p_3":t=["90p_1","90p_1","720p_1"];break;case"720p_5":case"720p_6":t=["120p_1","120p_1","720p_5"];break;case"1080p":case"1080p_1":case"1080p_2":case"1080p_3":case"1080p_5":t=["90p_1","90p_1","1080p_1"];break;case"1440p":case"1440p_1":case"1440p_2":t=["90p_1","90p_1","1440p_1"];break;case"4k":case"4k_1":case"4k_3":t=["90p_1","90p_1","4k_1"];break;default:t=["120p_1","120p_1","360p_7"]}return(0,n.isFireFox)()?[t[1],15,100]:(0,n.isSafari)()?[t[2],15,50]:[t[0],15,50]};t.simMap=o},,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),o=i(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o),a=i(2),s=i(7),d=i(12),c=i(28);t.default={TranscodingUser:c.TranscodingUser,LiveTranscoding:c.LiveTranscoding,createClient:c.createClient,createStream:s.createStream,Logger:r.default,getDevices:s.getDevices,checkSystemRequirements:a.checkSystemRequirements,VERSION:n.VERSION,AUDIO_SAMPLE_RATE_32000:d.AUDIO_SAMPLE_RATE_32000,AUDIO_SAMPLE_RATE_44100:d.AUDIO_SAMPLE_RATE_44100,AUDIO_SAMPLE_RATE_48000:d.AUDIO_SAMPLE_RATE_48000,VIDEO_CODEC_PROFILE_BASELINE:d.VIDEO_CODEC_PROFILE_BASELINE,VIDEO_CODEC_PROFILE_MAIN:d.VIDEO_CODEC_PROFILE_MAIN,VIDEO_CODEC_PROFILE_HIGH:d.VIDEO_CODEC_PROFILE_HIGH,REMOTE_VIDEO_STREAM_HIGH:d.REMOTE_VIDEO_STREAM_HIGH,REMOTE_VIDEO_STREAM_LOW:d.REMOTE_VIDEO_STREAM_LOW,REMOTE_VIDEO_STREAM_MEDIUM:d.REMOTE_VIDEO_STREAM_MEDIUM}}]).default});
//# sourceMappingURL=AgoraRTC-production.js.map
},{}],3:[function(require,module,exports){
LOGIN_STATE_NOT_LOGIN=0,LOGIN_STATE_LOGINING=1,LOGIN_STATE_LOGINED=2,LOGIN_STATE_RECONNECTING=3,SIGNALING_SDK_VERSION="1.3.0",SIGNALING_SDK_VERSION_INT=10103e5,Signal_=function(e){function n(e){var n,t,i;for(i=e.length;i;i--)n=Math.floor(Math.random()*i),t=e[i-1],e[i-1]=e[n],e[n]=t}function t(e,n){var t=new XMLHttpRequest;t.open("POST",e,!0),t.setRequestHeader("Content-type","application/json; charset=utf-8"),t.send(JSON.stringify(n))}this.getSDKVersion=function(){return SIGNALING_SDK_VERSION},this.getSDKVersion_int=function(){return SIGNALING_SDK_VERSION_INT},this.lbs_url1=["https://lbs-1-sig.agora.io","https://lbs-2-sig.agora.io"],this.lbs_url2=["https://lbs-3-sig.agora.io","https://lbs-4-sig.agora.io"],this.rp_url="http:///wsrp.sig.agora.io:8080/",this.vid=e,this.appid=e;var i=this;function o(e,n,t){var i=e.split(n,t),o=0;for(var s in i)o+=n.length+i[s].length;return i.push(e.substr(o)),i}i.server_urls=[],i.setup_debugging=function(e,n){if("ap"===e)i.server_urls.push([n,8001]),i.debugging=!0;else{if("env"!==e)return;"lbs100"===n&&(i.lbs_url1=["https://lbs100-1-sig.agora.io","https://lbs100-2-sig.agora.io"],i.lbs_url2=["https://lbs100-3-sig.agora.io","https://lbs100-4-sig.agora.io"])}};var s=function(s,a){this.onLoginSuccess="",this.onLoginFailed="",this.onLogout="",this.onInviteReceived="",this.onMessageInstantReceive="",this.account=s,this.config_msg_set=0,this.config_inst_msg_with_msgid=0,this.debugging=i.debugging,this.m_msgid=0,this.state=LOGIN_STATE_LOGINING,this.line="",this.uid=0,this.dbg=!1,this.alive_conn=2;var r=this;r.lbs_state="requesting";var l=i.server_urls.slice();n(l),r.idx=0,this.login_start_time=null,this.login_end_time=null,this.lbs_start_time=null,this.lbs_end_time=null,this.ap_start_time=null,this.ap_end_time=null,r.browser=null;try{r.browser=navigator.userAgent}catch(e){console.log("This browser does not support navigator.userAgent")}r.login_data={event:"login",now:"",time:"",duration:"",key:"",seq:"",result:"",account:"",browser:r.browser,sdk_version:i.getSDKVersion_int(),rmc:"",rmt:"",h1i1:"",h1t1:"",i2:"",i3:"",i3_0:"",i3_0_ip:"",i3_0_port:"",i3_1_ip:"",step:"",t2:"",t4:""},r.v3_msg_set=new Map,setTimeout(function(){var e=Date.now();for(var n of r.v3_msg_set.keys())if(r.v3_msg_set[n]){if(!(e-r.v3_msg_set[n]>3e5))break;r.v3_msg_set.delete(n)}},2e3),r.socket=null;var c=function(){if(r.dbg){var e=[];for(var n in arguments)e.push(arguments[n]);console.log.apply(null,["Agora sig dbg :"].concat(e))}},_=function(e){c("Updating the session state to "+e),r.state=e};r.logout=function(){r.state===LOGIN_STATE_LOGINED&&r.onLogout?r.call2("user_logout",{line:r.line},function(e,n){r.fire_logout(101),r.socket.close()}):r.state===LOGIN_STATE_LOGINING&&(_(LOGIN_STATE_NOT_LOGIN),r.fire_logout(101))},r.fire_login_failed=function(e){try{r.state===LOGIN_STATE_LOGINING&&r.onLoginFailed&&r.onLoginFailed(e)}catch(e){console.error(e)}finally{_(LOGIN_STATE_NOT_LOGIN)}},r.fire_logout=function(e){e||(e=0);try{r.state===LOGIN_STATE_LOGINED&&r.onLogout&&r.onLogout(e)}catch(e){console.error(e)}finally{_(LOGIN_STATE_NOT_LOGIN)}},r.getStatus=function(){return r.state};var g=function(n,t,i){"requesting"==r.lbs_state&&function(e,n,t){var i=new XMLHttpRequest,o=!1,s=setTimeout(function(){o=!0,i.abort(),t("timeout","")},n);i.open("GET",e),i.onreadystatechange=function(){4===i.readyState&&(o||(clearTimeout(s),200===i.status&&t("",i.responseText)))},i.send(null)}(t[i]+"/getaddr?vid="+e,5e3,function(e,o){if(e)n-1>0?g(n-1,t,(i+1)%t.length):r.fire_login_failed(201);else{if("requesting"!=r.lbs_state)return;r.lbs_state="completed",l=JSON.parse(o).web,u(),u()}})},u=function(){if(r.state===LOGIN_STATE_LOGINING)var n=new function(){var e,t="wss://"+(e=l[r.idx])[0].replace(/\./g,"-")+"-sig-web.agora.io:"+(e[1]+1)+"/";console.log(t),r.idx=(r.idx+1)%l.length;var i=new WebSocket(t);i.state="CONNECTING",setTimeout(function(){i.readyState!==i.CONNECTING||i.close()},6e3),i.onopen=function(e){if(r.state===LOGIN_STATE_NOT_LOGIN)i.close();else if(r.state===LOGIN_STATE_LOGINING&&null===r.socket)for(var t in r.socket=n,i.state="OPEN",c("on conn open"),r.go_login(),a)i.send(JSON.stringify(a[t]));else i.close()},i.onclose=function(e){"OPEN"===i.state&&r.state===LOGIN_STATE_LOGINED?(s("_close",""),c("on conn close")):r.state===LOGIN_STATE_LOGINING?2===r.alive_conn?r.alive_conn-=1:1===r.alive_conn&&r.onLoginFailed&&r.fire_login_failed(201):"CONNECTING"===i.state&&u()},i.onmessage=function(e){var n=e.data;c("Received message ",n);var t=JSON.parse(n);"close"===t[0]&&r.state===LOGIN_STATE_LOGINING?r.onLoginFailed&&r.fire_login_failed(201):s(t[0],t[1])},i.onerror=function(e){i.state="CLOSED",r.idx<l.length&&e.target.readyState===e.target.CLOSED?u():(c("on conn error"),r.state===LOGIN_STATE_LOGINED&&r.socket===n?r.fire_logout(102):r.state===LOGIN_STATE_LOGINING&&r.socket==n&&r.fire_login_failed(201))};var o={},s=function(e,n){e in o&&o[e](n)},a=[];this.on=function(e,n){o[e]=n},this.emit=function(e,n){0!==i.readyState?(c("Sending ",[e,n]),i.send(JSON.stringify([e,n]))):a.push([e,n])},this.close=function(){i.close()}};var g=0,h=function(){setTimeout(function(){r.state==LOGIN_STATE_LOGINED&&(c("send ping",++g),r.socket.emit("ping",g),h())},1e4)};r.go_login=function(){""===r.line?(r.socket.emit("login",{vid:e,account:s,uid:0,token:a,device:"websdk",ip:""}),r.login_data.account=s,r.login_data.vid=e,r.login_data.key=a,r.socket.on("login_ret",function(e){var n=e[0],o=JSON.parse(e[1]);if(r.login_data.duration=Date.now()-r.login_data.time,c("login ret",n,o),n||"ok"!==o.result){""===n&&(n=o.reason),r.login_data.now=Date.now(),r.login_data.result="failed";try{if(r.onLoginFailed){var s="kick"===n?207:"TokenErrorExpired"===n?204:n.startsWith("TokenError")?206:"wrong account"===n?209:201;r.fire_login_failed(s)}}catch(e){console.error(e)}finally{t(i.rp_url,r.login_data)}}else{r.config_msg_set=o.config_msg_set||0,r.config_inst_msg_with_msgid=o.config_inst_msg_with_msgid||0,r.uid=o.uid,r.line=o.line,_(LOGIN_STATE_LOGINED),c("send ping",++g),r.socket.emit("ping",g),h(),b();try{r.login_data.now=Date.now(),r.login_data.result="success",r.onLoginSuccess&&r.onLoginSuccess(r.uid)}catch(s){console.error(s)}finally{t(i.rp_url,r.login_data),G()}}})):r.socket.emit("line_login",{line:r.line});var n=0,l={},u={};r.call2=function(e,t,i){l[++n]=[e,t,i],c("call ",[e,n,t]),r.socket.emit("call2",[e,n,t])},r.socket.on("call2-ret",function(e){var n=e[0],t=e[1],i=e[2];if(n in l){var o=l[n][2];if(""===t)try{"ok"!=(i=JSON.parse(i)).result&&(t=i.data.result)}catch(e){t="wrong resp:"+i}o&&o(t,i)}});var f,v=function(e,n){return""===e},d=function(e){if(e.startsWith("msg-v2 ")){if(7===(n=o(e," ",6)).length)return[n[1],n[4],n[6]]}else if(e.startsWith("msg-v3 ")){var n;if(8===(n=o(e," ",7)).length)return r.v3_msg_set.get(n[1])?null:(r.v3_msg_set.set(n[1],Date.now()),[n[2],n[5],n[7]])}return null};r.socket.on("pong",function(e){c("recv pong")}),r.socket.on("close",function(e){r.fire_logout(102),r.socket.close()}),r.socket.on("_close",function(e){r.fire_logout(102)});var m=function(e){if(e){var n=e,t=n[0],i=n[1],o=n[2];if("instant"===i)try{r.onMessageInstantReceive&&r.onMessageInstantReceive(t,0,o)}catch(e){console.error(e)}if(i.startsWith("voip_")){var s,a=JSON.parse(o),l=a.channel,c=a.peer,_=a.extra;if("voip_invite"===i)s=new A(l,c,_),r.call2("voip_invite_ack",{line:r.line,channelName:l,peer:c,extra:""});else if(!(s=u[l+c]))return;if("voip_invite"===i)try{r.onInviteReceived&&r.onInviteReceived(s)}catch(e){console.error(e)}if("voip_invite_ack"===i)try{s.onInviteReceivedByPeer&&s.onInviteReceivedByPeer(_)}catch(e){console.error(e)}if("voip_invite_accept"===i)try{s.onInviteAcceptedByPeer&&s.onInviteAcceptedByPeer(_)}catch(e){console.error(e)}if("voip_invite_refuse"===i)try{s.onInviteRefusedByPeer&&s.onInviteRefusedByPeer(_)}catch(e){console.error(e)}if("voip_invite_failed"===i)try{s.onInviteFailed&&s.onInviteFailed(_)}catch(e){console.error(e)}if("voip_invite_bye"===i)try{s.onInviteEndByPeer&&s.onInviteEndByPeer(_)}catch(e){console.error(e)}if("voip_invite_msg"===i)try{s.onInviteMsg&&s.onInviteMsg(_)}catch(e){console.error(e)}}}},I=function(){return Date.now()},N=0,p=0,L=0,O=0,T=!1,S=[],y=0,G=function(){T||(T=!0,y=0,0===r.config_msg_set?r.call2("user_getmsg",{line:r.line,ver_clear:N,max:30},function(e,n){if(""===e){var t=n,i=N;for(var o in L=parseInt(t.ver_clear),N=Math.max(L,i),t.msgs){var s=t.msgs[o][0],a=t.msgs[o][1];s>=N+1&&(m(d(a)),N=s)}(30===t.msgs.length||N<p)&&G(),I()}T=!1,O=I()}):1===r.config_msg_set&&r.call2("user_getmsg2",{line:r.line,clear_msgs:S,max:30},function(e,n){if(""===e){for(var t in S=[],n.msgs){n.msgs[t][0];var i=n.msgs[t][1];m(d(i))}n.msgs.length>=30&&G(),I()}T=!1,O=I()}))},E=function(){0===r.config_msg_set?O=I():1===r.config_msg_set&&0===y&&(y=I()+500)},b=function(){setTimeout(function(){if(r.state!==LOGIN_STATE_NOT_LOGIN){if(r.state===LOGIN_STATE_LOGINED){var e=I();0===r.config_msg_set?L<N&&e-O>1e3?G():e-O>=6e4&&G():1===r.config_msg_set&&S.length>0&&e>y&&y>0&&G()}b()}},100)};r.socket.on("notify",function(e){c("recv notify ",e),"string"==typeof e&&(e=(e=o(e," ",2)).slice(1));var n=e[0];if("channel2"===n){var t=e[1],i=e[2];if(0===r.config_msg_set&&0!==f.m_channel_msgid&&f.m_channel_msgid+1>i)return void c("ignore channel msg",t,i,f.m_channel_msgid);f.m_channel_msgid=i;var s=d(e[3]);if(s){s[0];var a=s[1],l=s[2],_=JSON.parse(l);if("channel_msg"===a)try{f.onMessageChannelReceive&&f.onMessageChannelReceive(_.account,_.uid,_.msg)}catch(e){console.error(e)}if("channel_user_join"===a)try{f.onChannelUserJoined&&f.onChannelUserJoined(_.account,_.uid)}catch(e){console.error(e)}if("channel_user_leave"===a)try{f.onChannelUserLeaved&&f.onChannelUserLeaved(_.account,_.uid)}catch(e){console.error(e)}if("channel_attr_update"===a)try{f.onChannelAttrUpdated&&f.onChannelAttrUpdated(_.name,_.value,_.type)}catch(e){console.error(e)}}}if("msg"===n&&(p=e[1],G()),"recvmsg"===n){var g=JSON.parse(e[1]),u=g[0],h=g[1];u===N+1?(m(d(h)),N=u,E()):(p=u,G())}if("recvmsg_by_msgid"===n){i=o(e[1]," ",7)[1];S.push(i),m(d(e[1])),E()}}),r.messageInstantSend=function(e,n,t){var i={line:r.line,peer:e,flag:"v1:E:3600",t:"instant",content:n};if(1===r.config_inst_msg_with_msgid){var o=null;"string"==typeof n&&(o=JSON.parse(n).msgid),i.messageID=o||I()%1e6+r.m_msgid++%1e6}r.call2("user_sendmsg",i,function(e,n){t&&t(!v(e))})},r.invoke=function(e,n,t){if(e.startsWith("io.agora.signal.")){var i=e.split(".")[3];n.line=r.line,r.call2(i,n,function(e,n){t&&t(e,n)})}};var A=function(e,n,t){this.onInviteReceivedByPeer="",this.onInviteAcceptedByPeer="",this.onInviteRefusedByPeer="",this.onInviteFailed="",this.onInviteEndByPeer="",this.onInviteEndByMyself="",this.onInviteMsg="";var i=this;this.channelName=e,this.peer=n,this.extra=t,u[e+n]=i,this.channelInviteUser2=function(){t=t||"",r.call2("voip_invite",{line:r.line,channelName:e,peer:n,extra:t},function(e,n){if(v(e));else try{i.onInviteFailed(e)}catch(e){console.error(e)}})},this.channelInviteAccept=function(t){t=t||"",r.call2("voip_invite_accept",{line:r.line,channelName:e,peer:n,extra:t})},this.channelInviteRefuse=function(t){t=t||"",r.call2("voip_invite_refuse",{line:r.line,channelName:e,peer:n,extra:t})},this.channelInviteDTMF=function(t){r.call2("voip_invite_msg",{line:r.line,channelName:e,peer:n,extra:JSON.stringify({msgtype:"dtmf",msgdata:t})})},this.channelInviteEnd=function(t){t=t||"",r.call2("voip_invite_bye",{line:r.line,channelName:e,peer:n,extra:t});try{i.onInviteEndByMyself&&i.onInviteEndByMyself("")}catch(e){console.error(e)}}};r.channelInviteUser2=function(e,n,t){var i=new A(e,n,t);return i.channelInviteUser2(),i},r.channelJoin=function(e){if(r.state==LOGIN_STATE_LOGINED)return f=new function(){this.onChannelJoined="",this.onChannelJoinFailed="",this.onChannelLeaved="",this.onChannelUserList="",this.onChannelUserJoined="",this.onChannelUserLeaved="",this.onChannelUserList="",this.onChannelAttrUpdated="",this.onMessageChannelReceive="",this.name=e,this.state="joining",this.m_channel_msgid=0,this.messageChannelSend=function(n,t){var i={line:r.line,name:e,msg:n};if(1===r.config_inst_msg_with_msgid){var o=null;"string"==typeof n&&(o=JSON.parse(n).msgid),i.msgID=o||I()%1e6+r.m_msgid++%1e6}r.call2("channel_sendmsg",i,function(e,n){t&&t()})},this.channelLeave=function(n){r.call2("channel_leave",{line:r.line,name:e},function(e,t){if(f.state="leaved",n)n();else try{f.onChannelLeaved&&f.onChannelLeaved(0)}catch(e){console.error(e)}})},this.channelSetAttr=function(n,t,i){r.call2("channel_set_attr",{line:r.line,channel:e,name:n,value:t},function(e,n){i&&i()})},this.channelDelAttr=function(n,t){r.call2("channel_del_attr",{line:r.line,channel:e,name:n},function(e,n){t&&t()})},this.channelClearAttr=function(n){r.call2("channel_clear_attr",{line:r.line,channel:e},function(e,t){n&&n()})}},r.call2("channel_join",{line:r.line,name:e},function(e,n){if(""===e){f.state="joined";try{f.onChannelJoined&&f.onChannelJoined()}catch(e){console.error(e)}var t=n;try{f.onChannelUserList&&f.onChannelUserList(t.list)}catch(e){console.error(e)}try{if(f.onChannelAttrUpdated)for(var i in t.attrs)f.onChannelAttrUpdated(i,t.attrs[i],"update")}catch(e){console.error(e)}}else try{f.onChannelJoinFailed&&f.onChannelJoinFailed(e)}catch(e){console.error(e)}}),f;c("You should log in first.")}}};r.socket=null,r.debugging?(r.lbs_state="completed",r.login_data.time=Date.now(),u()):(n(i.lbs_url1),n(i.lbs_url2),g(2,i.lbs_url1,0),g(2,i.lbs_url2,0))};this.login=function(e,n){return new s(e,n)}},Signal=function(e){return new Signal_(e)};
},{}],4:[function(require,module,exports){
/**
 * 全局数据中心，每个Session均存储一个该类实例
 * 所有界面中需要的数据均存储到该对象中
 * 数据变更后通过SigSlot类通知Viewer进行重绘
 * 类似于简单的Vue功能实现
 */
let Const   	= require("../const.js");
const Eventer  	= require("./eventer")
const context 	= require("./context")
const Serialize = require("./serialize")

class DataManager extends Eventer {
	constructor() {
		super()
		this.$user_list = new Serialize
	}

	set userinfo(userinfo) {
		context.storage.store("USER_INFO", userinfo)
		this.$userInfo = userinfo
	}

	get userinfo() {
		if (!this.$userInfo) {
			this.$userInfo = context.storage.get("USER_INFO")
		}
		return this.$userInfo
	}

	set courses(courses) {
		this.$courses = courses
	}

	get courses() {
		return this.$courses
	}

	addUser(user) {
		this.$user_list.merge([user])
	}

	removeUser(id) {
		this.$user_list.remove(id)
	}

	get users() {
		return this.$user_list.data()
	}
}

module.exports = DataManager;
},{"../const.js":1,"./context":8,"./eventer":9,"./serialize":15}],5:[function(require,module,exports){
/**
 * 本地存储类
 * 用于将信息固化到本地存储
 * namespace 为命名空间，每个Session都会取account的userid为命名空间，避免多个Session数据冲突
 */
class Storage {
	constructor(namespace) {
		console.log("namespace...",namespace)
		this.$namespace = namespace;
		this.$data      = localStorage.getItem(this.$namespace);
		if (this.$data) {
			try {
				this.$data  = JSON.parse(this.$data);
			} catch(e) {
				this.$data  = {};
				localStorage.removeItem(this.$namespace);
			}
		} else {
			this.$data  = {};
		}
	}

	get(key) {
		return this.$data[key];
	}

	store(key, data) {
		console.log("store...",key,this.$data)
		this.$data[key] = data;
		localStorage.setItem(this.$namespace, JSON.stringify(this.$data));
	}
}

module.exports = Storage;
},{}],6:[function(require,module,exports){
let Const 		= require("../const.js");
const net 		= require("./network")
const DMG 		= require("./DataManager").DataManager
const context 	= require("./context")
let Calendar	= require("./calendar")
const room 		= require("./room")
const signal	= require('./signal')
/**
 * 对应mvc结构中的View，所有界面相关的处理均在本类中实现
 */
class Viewer {
	constructor() {
		this.data 		= {}
		this.$calendar 	= new Calendar(this)
		this.__bind();
		if (net.token) {
			this.content()
		} else {
			this.login()
		}
	}

	__resize() {

	}

	/**
	 * 绑定来自DataManager的数据更新事件，并进行试图渲染
	 */
	__bind() {
		$(window).on("resize", ()=>{
			this.__resize();
		});
		this.__resize();
		$("body").on("click",".login-btn",()=>{
			let mobile 		= $("input[name=mobile]").val()
			let password 	= $("input[name=password]").val()
			if (!mobile || !password) {
				alert("请输入手机号或密码！")
				return
			}
			context.loading.show("正在登录...")
			net.login({
				mobile, password
			}).then((res)=>{
				net.token 		= res.token
				net.sigtoken 	= res.signaling_token
				context.dmg.userinfo = res.user
				this.content()
				context.loading.hide()
			},()=>{
				context.loading.hide()
			}).done()
		})

		$("body").on("click", ".start-btn",(event)=>{
			let index = $(event.currentTarget).attr("data-index")
			let data = context.dmg.courses[index]
			$(".enter-layer .enter-time").text(data.start_time)
			$(".enter-layer").show()
			setTimeout(()=>{
				$(".enter-layer").addClass("show")
			},100)
			context.course = data
		})
		$("body").on("click",".mask .close-btn,.mask .cancel-btn",(event)=>{
			let target = $(event.currentTarget).parents(".mask")
			target.removeClass("show")
			setTimeout(()=>{
				target.hide()
			},300)
		})
		$("body").on("click",".enter-btn",(event)=>{
			$(".mask").removeClass("show")
			setTimeout(()=>{
				$(".mask").hide()
			},300)
			this.course()
		})
		$("body").on("click",".switch",(event)=>{
			let target = $(event.currentTarget).parents(".buttons")
			target.toggleClass("open")
		})
		$("body").on("click",".back-btn",(event)=>{
			$(".back-layer").show()
			setTimeout(()=>{
				$(".back-layer").addClass("show")
			},100)
		})
		$("body").on("click",".ok-btn",()=>{
			$(".back-layer").removeClass("show")
			setTimeout(()=>{
				$(".back-layer").hide()
			},300)
			this.leaveCourse()
		})
		$("body").on("click",".course-close",()=>{
			$(".exit-layer").show()
			setTimeout(()=>{
				$(".exit-layer").addClass("show")
			},100)
		})
		$("body").on("click",".exit-btn",()=>{
			$(".exit-layer").removeClass("show")
			setTimeout(()=>{
				$(".exit-layer").hide()
			},300)
			this.leaveCourse()
		})
		$("body").on("click",".gift,.handsup",(event)=>{
			let target = $(event.currentTarget)
			target.toggleClass("disabled")
		})
		room.on("NEW_STREAM", (stream)=>{
			let id = stream.getId()
			let dom = $(`#students_${id}`)
			if (dom.length === 0) {
				let idle = $("#students .idle"),
					cell = $(`<div id="students_${id}" class="cell"></div>`)
				if (idle.length == 0) {
					$('#students').append(cell)
				} else {
					$(idle[0]).replaceWith(cell)
				}
			}
			stream.play('students_' + stream.getId());
		})
		room.on("REMOVE_STREAM", (stream)=>{
			$('#students_' + stream.getId()).remove();
			let cells = $("#students .cell")
			if (cells.length < Const.CELL_COUNT) {
				$('#students').append(`<div class="cell idle"></div>`)
			}
		})
		room.on("LEAVE_ROOM", ()=>{
			$("#master-video").html("")
			$("#students").html("")
		})
	}

	login() {
		$(".page").hide()
		$(".login-page").show()
	}

	content() {
		$(".page").hide()
		let cells = []
		for(let i=0;i<Const.CELL_COUNT;i++) {
			cells.push(`<div class="cell idle"></div>`)
		}
		$("#students").html(cells.join(''))
		let choosed = this.data.calendar_data.choosed_txt
		net.lessons(`${choosed.year}-${choosed.month}`).then((res)=>{
			let dates = res.dates
			this.$calendar.setHighlighted(dates)
		}).done()
		this.__get_courses()
		$(".calendar-page,.course-page").show()
		console.log("call signal init...")
		signal.init()
	}

	course() {
		if (context.course) {
			$(".page").addClass("next")
			net.getRoomInfo(context.course.channel_id).then((result)=>{
				context.room = result
				room.start()
				signal.join()
				signal.send({"hello":"world"})
			})
		}
	}

	leaveCourse() {
		$(".page").removeClass("next")
		room.leave()
		signal.leave()
	}

	__get_courses() {
		let choosed = this.data.calendar_data.choosed_txt
		net.lessonsByDate(`${choosed.year}-${choosed.month}-${choosed.day}`).then((res)=>{
			context.render("courses-tmpl", {
				courses: res.rooms
			})
			context.dmg.courses = res.rooms
		})
	}

	onDateChanged(date) {
		this.__get_courses()
	}
}

module.exports = Viewer;
},{"../const.js":1,"./DataManager":4,"./calendar":7,"./context":8,"./network":13,"./room":14,"./signal":16}],7:[function(require,module,exports){
class Calendar {
  constructor(inst) {
    this.$inst = inst
    this.$now  = new Date()
    this.$week_txt = ['日', '一', '二', '三', '四', '五', '六']
    this.$data = inst.data.calendar_data || {}
    this.__init()
    this.__calculate_month()
  }

  __fn_ (n){
    n = n.toString()
  	return n[1] ? n : '0' + n
  }

  __is_sameday(prev, next) {
    return prev.year == next.year && 
           prev.month == next.month && 
           prev.day == next.day
  }

  __is_small_eq_than(source, target) {
    source = new Date(source.year,source.month-1,source.day)
    target = new Date(target.year,target.month-1,target.day)
    return source.getTime() - target.getTime() >= 0
  }

  __date_to_obj(date) {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      week: date.getDay()
    }
  }

  __is_disabled(date) {
    for (let j = 0, len = this.$data.disabled.length; j < len; j++) {
      if (this.__is_sameday(this.$data.disabled[j], date)) {
        return true
      }
    }
  }

  __is_highlighted(date) {
    for (let j = 0, len = this.$data.highlighted.length; j < len; j++) {
      if (this.__is_sameday(this.$data.highlighted[j], date)) {
        return true
      }
    }
  }

  __init() {
    this.$data.today = this.__date_to_obj(this.$now)
    if (!this.$data.disabled) {
      this.$data.disabled = []
    }
    if (!this.$data.highlighted) {
      this.$data.highlighted = []
    }
    if (!this.$data.cursor) {
      this.$data.cursor = this.$data.today
    }
    if (!this.$data.validDays) {
      this.$data.validDays = 365
    }
	this.__bind()
  }

  __bind() {
	$("body").on("click",(event)=>{
		let target 		= $(event.target)
		let bindtap 	= target.attr("bindtap")
		if (!bindtap) {
			let attrs = ['onPrevMonth','onNextMonth','onPickDate']
			for(let i=0,len=attrs.length;i<len;i++) {
				let item 	= attrs[i]
				let found 	= target.parents(`[bindtap=${item}]`)
				if (found.length > 0) {
					bindtap = item
					break
				}
			}
		}
		if (bindtap == "onPrevMonth") {
			this.prevMonth()
		} else if (bindtap == "onNextMonth") {
			this.nextMonth()
		} else if (bindtap == "onPickDate") {
			let index = target.attr("data-index")
			this.setChoosed(this.$inst.data.calendar_data.days[index])
			if (this.$inst.onDateChanged) {
				this.$inst.onDateChanged()
			}
		}
	})
	$("body").on("touchstart", (event)=>{
		let target 		= $(event.currentTarget)
		let touchstart 	= target.attr('bindtouchstart')
		if (!touchstart) {
			let found   = target.parents("[bindtouchstart=onCalendarTouch]")
			if (found.length > 0) {
				target  	= found
				touchstart 	= "onCalendarTouch"
			}
		}
		if (touchstart == "onCalendarTouch") {
			event.preventDefault()
			this.$touch_start_x = event.touches[0].pageX
			this.$touch_moved   = false
		}
	})
	$("body").on("touchmove", (event)=>{
		let target 		= $(event.currentTarget)
		let touchstart 	= target.attr('bindtouchmove')
		if (!touchstart) {
			let found   = target.parents("[bindtouchmove=onCalendarTouch]")
			if (found.length > 0) {
				target  	= found
				touchstart 	= "onCalendarTouch"
			}
		}
		if (touchstart == "onCalendarTouch") {
			event.preventDefault()
			this.$touch_moved = true
			this.$touch_last_x  = event.touches[0].pageX
		}
	})
	$("body").on("touchend", (event)=>{
		let target 		= $(event.currentTarget)
		let touchstart 	= target.attr('bindtouchend')
		if (!touchstart) {
			let found   = target.parents("[bindtouchend=onCalendarTouch]")
			if (found.length > 0) {
				target  	= found
				touchstart 	= "onCalendarTouch"
			}
		}
		if (touchstart == "onCalendarTouch") {
			event.preventDefault()
			let end_x = this.$touch_last_x
			if (this.$touch_moved) {
			let delta = end_x - this.$touch_start_x
			if (delta > 30) {
				this.prevMonth()
			} else if (delta < -30) {
				this.nextMonth()
			}
			}
		}
	})
  }

  __calculate_month() {
    if (this.$data.choosed && this.__is_disabled(this.$data.choosed)) {
      this.$data.choosed = null
      this.$data.choosed_txt = null
    }
    let cursor = this.$data.cursor
    cursor = this.__date_to_obj(new Date(cursor.year, cursor.month - 1, 1))
    let first = 1-cursor.week
    let lastDay = 28, temp = cursor.month
    while (temp == cursor.month) {
      lastDay++
      temp = new Date(cursor.year, cursor.month - 1, lastDay).getMonth() + 1
    }
    lastDay--
    let lastWeek = new Date(cursor.year, cursor.month - 1, lastDay).getDay()
    let last = lastDay + 6 - lastWeek, result = []
    for(let i=first;i<=last;i++) {
      let data = this.__date_to_obj(new Date(cursor.year,cursor.month-1,i))
      let disabled = this.__is_disabled(data)
      if (!disabled) {
        if (!this.$data.choosed) {
          if (this.__is_sameday(data, this.$data.today)) {
            data.choosed = true
            this.$data.choosed = data
          }
        } else {
          if (this.__is_sameday(data, this.$data.choosed)) {
            data.choosed = true
          }
        }
        data.highlighted = this.__is_highlighted(data)
      }
      data.disabled = disabled
      if (data.month == cursor.month) {
        result.push(data)
      } else {
        result.push({})
      }
    }
    this.$data.days = result
    let rows = [], current = []
    result.forEach((item, index)=>{
      if (index % 7 == 0 && index != 0) {
        rows.push(current)
        current = []
      }
      item.index = index
      current.push(item)
    })
    rows.push(current)
    this.$data.rows = rows
    this.render()
  }

  strToDate(str) {
    let parsed = str.split(/[-: ]/)
    parsed = parsed.concat([0,0,0,0,0,0])
    return new Date(parsed[0], parsed[1] - 1, parsed[2], parsed[3], parsed[4], parsed[5])
  }

  setChoosed(obj) {
    this.$data.choosed = obj
    this.$data.days.forEach((item, index) => {
      if (item.choosed) {
        item.choosed = false
      }
      if (this.__is_sameday(item,obj)) {
        item.choosed = true
      }
    })
    this.render()
  }

  nextMonth() {
    let cursor = this.$data.cursor
    this.$data.cursor = this.__date_to_obj(new Date(cursor.year,cursor.month,1))
    this.__calculate_month()
  }

  prevMonth() {
    let cursor = this.$data.cursor
    this.$data.cursor = this.__date_to_obj(new Date(cursor.year, cursor.month-2, 1))
    this.__calculate_month()
  }

  setDisabled(dates) {
    let result = []
    dates.forEach((item)=>{
      let date = this.__date_to_obj(this.strToDate(item))
      result.push(date)
    })
    this.$data.disabled = result
    this.__calculate_month()
  }

  setHighlighted(dates) {
    let result = []
    dates.forEach((item) => {
      let date = this.__date_to_obj(this.strToDate(item))
      result.push(date)
    })
    this.$data.highlighted = result
    this.__calculate_month()
  }

  render() {
    if (this.$data.choosed) {
      let choosed = this.$data.choosed
      this.$data.choosed_txt = {
        year: choosed.year,
        month: this.__fn_(choosed.month),
        day: this.__fn_(choosed.day),
        week: this.$week_txt[choosed.week]
      }
	}
	let target   = $("#calendar-tmpl")
	let template = $.templates("#calendar-tmpl");
	let html	 = template.render({
		calendar_data: this.$data
	});
	this.$inst.data.calendar_data = this.$data
	let dom = $("#calendar-box")
	if (dom.length > 0) {
		dom.replaceWith(html)
	} else {
		target.after(html);
	}
  }
}

module.exports = Calendar
},{}],8:[function(require,module,exports){
const Storage 	= require("./Storage")

class Context {
	get dmg() {
		return this.$dmg
	}

	set dmg(dmg) {
		this.$dmg = dmg
	}

	get loading() {
		return this.$loading
	}

	set loading(loading) {
		this.$loading = loading
	}

	get course() {
		return this.$course
	}

	set course(course) {
		this.$course = course
	}

	get room() {
		return this.$room
	}

	set room(room) {
		this.$room = room
	}

	get storage() {
		if (!this.$storage) {
			this.$storage = new Storage("DYM")
		}
		return this.$storage
	}

	set storage(storage) {
		this.$storage = storage
	}

	get video_device_id() {
		return this.$video_device_id
	}

	set video_device_id(video_device_id) {
		this.$video_device_id = video_device_id
	}

	get audio_device_id() {
		return this.$audio_device_id
	}

	set audio_device_id(audio_device_id) {
		this.$audio_device_id = audio_device_id
	}

	render(id, data) {
		let target   = $("#"+id)
		let template = $.templates("#"+id);
		let html	 = $(template.render(data));
		let dom 	 = $(`[tmplid=tmpl_${id}]`)
		html.attr("tmplid", "tmpl_"+id)
		if (dom.length > 0) {
			dom.replaceWith(html)
		} else {
			target.after(html);
		}
	}
}

module.exports = new Context
},{"./Storage":5}],9:[function(require,module,exports){
/* compiled file, donot modify directly! */
class Eventer {
  constructor() {
    this.eventSubscriptions = {};
  }

  on(eventName, callback) {
    // Retrieve a list of current subscribers for eventName (if any)
    var subscribers = this.eventSubscriptions[eventName];

    if (typeof subscribers === 'undefined') {
      // If no subscribers for this event were found,
      // initialize a new empty array
      subscribers = this.eventSubscriptions[eventName] = [];
    }

    // Add the given callback function to the end of the array with
    // eventSubscriptions for this event.
    subscribers.push(callback);
  }

  off (eventName) {
    delete this.eventSubscriptions[eventName];
  }

  trigger(eventName, data, context) {
    var subscribers = this.eventSubscriptions[eventName], i, iMax;

    if (typeof subscribers === 'undefined') {
      // No list found for this event, return early to abort execution
      return;
    }

    // Ensure data is an array or is wrapped in an array,
    // for Function.prototype.apply use
    data = (data instanceof Array) ? data : [data];

    // Set a default value for `this` in the callback
    context = context || this;

    for (i = 0, iMax = subscribers.length; i < iMax; i += 1) {
      subscribers[i].apply(context, data);
    }
  }
}

module.exports = Eventer;
},{}],10:[function(require,module,exports){
let tmpl    	= require("./jquery.tmpl.js");
let Q 			= require("q");
let Const 		= require("../const.js");
const Loading   = require("./loading")
const net 		= require("./network")
const Viewer    = require("./Viewer")
const context   = require("./context")
const DMG 		= require("./DataManager")
class App {
	constructor() {
		this.$dmg		= new DMG
		context.dmg 	= this.$dmg
		this.$viewer   	= new Viewer
		this.$loading 	= new Loading
		context.loading = this.$loading
		this.__bind()
	}

	__bind() {
	}
}

module.exports = new App
},{"../const.js":1,"./DataManager":4,"./Viewer":6,"./context":8,"./jquery.tmpl.js":11,"./loading":12,"./network":13,"q":18}],11:[function(require,module,exports){
/*! JsRender v0.9.77 (Beta): http://jsviews.com/#jsrender */
/*! **VERSION FOR WEB** (For NODE.JS see http://jsviews.com/download/jsrender-node.js) */
/*
 * Best-of-breed templating in browser or on Node.js.
 * Does not require jQuery, or HTML DOM
 * Integrates with JsViews (http://jsviews.com/#jsviews)
 *
 * Copyright 2016, Boris Moore
 * Released under the MIT License.
 */

//jshint -W018, -W041

(function(factory, global) {
	// global var is the this object, which is window when running in the usual browser environment
	var $ = global.jQuery;

	if (typeof exports === "object") { // CommonJS e.g. Browserify
		module.exports = $
			? factory(global, $)
			: function($) { // If no global jQuery, take optional jQuery passed as parameter: require('jsrender')(jQuery)
				if ($ && !$.fn) {
					throw "Provide jQuery or null";
				}
				return factory(global, $);
			};
	} else if (typeof define === "function" && define.amd) { // AMD script loader, e.g. RequireJS
		define(function() {
			return factory(global);
		});
	} else { // Browser using plain <script> tag
		factory(global, false);
	}
} (

// factory (for jsrender.js)
function(global, $) {
"use strict";

//========================== Top-level vars ==========================

// global var is the this object, which is window when running in the usual browser environment
var setGlobals = $ === false; // Only set globals if script block in browser (not AMD and not CommonJS)

$ = $ && $.fn ? $ : global.jQuery; // $ is jQuery passed in by CommonJS loader (Browserify), or global jQuery.

var versionNumber = "v0.9.77",
	jsvStoreName, rTag, rTmplString, topView, $views,

//TODO	tmplFnsCache = {},
	$isFunction, $isArray, $templates, $converters, $helpers, $tags, $sub, $subSettings, $subSettingsAdvanced, $viewsSettings, delimOpenChar0, delimOpenChar1, delimCloseChar0, delimCloseChar1, linkChar, setting, baseOnError,

	rPath = /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
	//        not                               object     helper    view  viewProperty pathTokens      leafToken

	rParams = /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,
	//          lftPrn0        lftPrn        bound            path    operator err                                                eq             path2       prn    comma   lftPrn2   apos quot      rtPrn rtPrnDot                           prn2  space
	// (left paren? followed by (path? followed by operator) or (path followed by left paren?)) or comma or apos or quot or right paren or space

	isRenderCall,
	rNewLine = /[ \t]*(\r\n|\n|\r)/g,
	rUnescapeQuotes = /\\(['"])/g,
	rEscapeQuotes = /['"\\]/g, // Escape quotes and \ character
	rBuildHash = /(?:\x08|^)(onerror:)?(?:(~?)(([\w$_\.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,
	rTestElseIf = /^if\s/,
	rFirstElem = /<(\w+)[>\s]/,
	rAttrEncode = /[\x00`><"'&=]/g, // Includes > encoding since rConvertMarkers in JsViews does not skip > characters in attribute strings
	rIsHtml = /[\x00`><\"'&=]/,
	rHasHandlers = /^on[A-Z]|^convert(Back)?$/,
	rHtmlEncode = rAttrEncode,
	viewId = 0,
	charEntities = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\x00": "&#0;",
		"'": "&#39;",
		'"': "&#34;",
		"`": "&#96;",
		"=": "&#61;"
	},
	HTML = "html",
	OBJECT = "object",
	tmplAttr = "data-jsv-tmpl",
	jsvTmpl = "jsvTmpl",
	indexStr = "For #index in nested block use #getIndex().",
	$render = {},

	jsr = global.jsrender,
	jsrToJq = jsr && $ && !$.render, // JsRender already loaded, without jQuery. but we will re-load it now to attach to jQuery

	jsvStores = {
		template: {
			compile: compileTmpl
		},
		tag: {
			compile: compileTag
		},
		viewModel: {
			compile: compileViewModel
		},
		helper: {},
		converter: {}
	};

	// views object ($.views if jQuery is loaded, jsrender.views if no jQuery, e.g. in Node.js)
	$views = {
		jsviews: versionNumber,
		sub: {
			// subscription, e.g. JsViews integration
			View: View,
			Err: JsViewsError,
			tmplFn: tmplFn,
			parse: parseParams,
			extend: $extend,
			extendCtx: extendCtx,
			syntaxErr: syntaxError,
			onStore: {},
			addSetting: addSetting,
			settings: {
				allowCode: false
			},
			advSet: noop, // Update advanced settings
			_ths: tagHandlersFromProps,
			_tg: function() {}, // Constructor for tagDef
			_cnvt: convertVal,
			_tag: renderTag,
			_er: error,
			_err: onRenderError,
			_html: htmlEncode,
			_sq: function(token) {
				if (token === "constructor") {
					syntaxError("");
				}
				return token;
			}
		},
		settings: {
			delimiters: $viewsDelimiters,
			advanced: function(value) {
				return value
					? (
							$extend($subSettingsAdvanced, value),
							$sub.advSet(),
							$viewsSettings
						)
						: $subSettingsAdvanced;
				}
		},
		map: dataMap // If jsObservable loaded first, use that definition of dataMap
	};

function getDerivedMethod(baseMethod, method) {
	return function() {
		var ret,
			tag = this,
			prevBase = tag.base;

		tag.base = baseMethod; // Within method call, calling this.base will call the base method
		ret = method.apply(tag, arguments); // Call the method
		tag.base = prevBase; // Replace this.base to be the base method of the previous call, for chained calls
		return ret;
	};
}

function getMethod(baseMethod, method) {
	// For derived methods (or handlers declared declaratively as in {{:foo onChange=~fooChanged}} replace by a derived method, to allow using this.base(...)
	// or this.baseApply(arguments) to call the base implementation. (Equivalent to this._super(...) and this._superApply(arguments) in jQuery UI)
	if ($isFunction(method)) {
		method = getDerivedMethod(
				!baseMethod
					? noop // no base method implementation, so use noop as base method
					: baseMethod._d
						? baseMethod // baseMethod is a derived method, so us it
						: getDerivedMethod(noop, baseMethod), // baseMethod is not derived so make its base method be the noop method
				method
			);
		method._d = 1; // Add flag that this is a derived method
	}
	return method;
}

function tagHandlersFromProps(tag, tagCtx) {
	for (var prop in tagCtx.props) {
		if (rHasHandlers.test(prop)) {
			tag[prop] = getMethod(tag[prop], tagCtx.props[prop]);
			// Copy over the onFoo props, convert and convertBack from tagCtx.props to tag (overrides values in tagDef).
			// Note: unsupported scenario: if handlers are dynamically added ^onFoo=expression this will work, but dynamically removing will not work.
		}
	}
}

function retVal(val) {
	return val;
}

function noop() {
	return "";
}

function dbgBreak(val) {
	// Usage examples: {{dbg:...}}, {{:~dbg(...)}}, {{dbg .../}}, {^{for ... onAfterLink=~dbg}} etc.
	try {
		console.log("JsRender dbg breakpoint: " + val);
		throw "dbg breakpoint"; // To break here, stop on caught exceptions.
	}
	catch (e) {}
	return this.base ? this.baseApply(arguments) : val;
}

function JsViewsError(message) {
	// Error exception type for JsViews/JsRender
	// Override of $.views.sub.Error is possible
	this.name = ($.link ? "JsViews" : "JsRender") + " Error";
	this.message = message || this.name;
}

function $extend(target, source) {
	for (var name in source) {
		target[name] = source[name];
	}
	return target;
}

(JsViewsError.prototype = new Error()).constructor = JsViewsError;

//========================== Top-level functions ==========================

//===================
// views.delimiters
//===================

function $viewsDelimiters(openChars, closeChars, link) {
	// Set the tag opening and closing delimiters and 'link' character. Default is "{{", "}}" and "^"
	// openChars, closeChars: opening and closing strings, each with two characters
	if (!openChars) {
		return $subSettings.delimiters;
	}

	$subSettings.delimiters = [openChars, closeChars, linkChar = link ? link.charAt(0) : linkChar];

	delimOpenChar0 = openChars.charAt(0); // Escape the characters - since they could be regex special characters
	delimOpenChar1 = openChars.charAt(1);
	delimCloseChar0 = closeChars.charAt(0);
	delimCloseChar1 = closeChars.charAt(1);
	openChars = "\\" + delimOpenChar0 + "(\\" + linkChar + ")?\\" + delimOpenChar1; // Default is "{^{"
	closeChars = "\\" + delimCloseChar0 + "\\" + delimCloseChar1;                   // Default is "}}"
	// Build regex with new delimiters
	//          [tag    (followed by / space or })  or cvtr+colon or html or code] followed by space+params then convertBack?
	rTag = "(?:(\\w+(?=[\\/\\s\\" + delimCloseChar0 + "]))|(\\w+)?(:)|(>)|(\\*))\\s*((?:[^\\"
		+ delimCloseChar0 + "]|\\" + delimCloseChar0 + "(?!\\" + delimCloseChar1 + "))*?)";

	// make rTag available to JsViews (or other components) for parsing binding expressions
	$sub.rTag = "(?:" + rTag + ")";
	//                        { ^? {   tag+params slash?  or closingTag                                                   or comment
	rTag = new RegExp("(?:" + openChars + rTag + "(\\/)?|\\" + delimOpenChar0 + "(\\" + linkChar + ")?\\" + delimOpenChar1 + "(?:(?:\\/(\\w+))\\s*|!--[\\s\\S]*?--))" + closeChars, "g");

	// Default:  bind     tagName         cvt   cln html code    params            slash   bind2         closeBlk  comment
	//      /(?:{(\^)?{(?:(\w+(?=[\/\s}]))|(\w+)?(:)|(>)|(\*))\s*((?:[^}]|}(?!}))*?)(\/)?|{(\^)?{(?:(?:\/(\w+))\s*|!--[\s\S]*?--))}}

	rTmplString = new RegExp("<.*>|([^\\\\]|^)[{}]|" + openChars + ".*" + closeChars);
	// rTmplString looks for html tags or { or } char not preceded by \\, or JsRender tags {{xxx}}. Each of these strings are considered
	// NOT to be jQuery selectors
	return $viewsSettings;
}

//=========
// View.get
//=========

function getView(inner, type) { //view.get(inner, type)
	if (!type && inner !== true) {
		// view.get(type)
		type = inner;
		inner = undefined;
	}

	var views, i, l, found,
		view = this,
		root = !type || type === "root";
		// If type is undefined, returns root view (view under top view).

	if (inner) {
		// Go through views - this one, and all nested ones, depth-first - and return first one with given type.
		// If type is undefined, i.e. view.get(true), return first child view.
		found = type && view.type === type && view;
		if (!found) {
			views = view.views;
			if (view._.useKey) {
				for (i in views) {
					if (found = type ? views[i].get(inner, type) : views[i]) {
						break;
					}
				}
			} else {
				for (i = 0, l = views.length; !found && i < l; i++) {
					found = type ? views[i].get(inner, type) : views[i];
				}
			}
		}
	} else if (root) {
		// Find root view. (view whose parent is top view)
		while (view.parent) {
			found = view;
			view = view.parent;
		}
	} else {
		while (view && !found) {
			// Go through views - this one, and all parent ones - and return first one with given type.
			found = view.type === type ? view : undefined;
			view = view.parent;
		}
	}
	return found;
}

function getNestedIndex() {
	var view = this.get("item");
	return view ? view.index : undefined;
}

getNestedIndex.depends = function() {
	return [this.get("item"), "index"];
};

function getIndex() {
	return this.index;
}

getIndex.depends = "index";

//==========
// View.hlp
//==========

function getHelper(helper) {
	// Helper method called as view.hlp(key) from compiled template, for helper functions or template parameters ~foo
	var wrapped,
		view = this,
		ctx = view.linkCtx,
		res = (view.ctx || {})[helper];

	if (res === undefined && ctx && ctx.ctx) {
		res = ctx.ctx[helper];
	}
	if (res === undefined) {
		res = $helpers[helper];
	}

	if (res) {
		if ($isFunction(res) && !res._wrp) {
			// If it is of type function, and not already wrapped, we will wrap it, so if called with no this pointer it will be called with the
			// view as 'this' context. If the helper ~foo() was in a data-link expression, the view will have a 'temporary' linkCtx property too.
			// Note that helper functions on deeper paths will have specific this pointers, from the preceding path.
			// For example, ~util.foo() will have the ~util object as 'this' pointer
			wrapped = function() {
				return res.apply((!this || this === global) ? view : this, arguments);
			};
			wrapped._wrp = view;
			$extend(wrapped, res); // Attach same expandos (if any) to the wrapped function
		}
	}
	return wrapped || res;
}

function getTemplate(tmpl) {
	return tmpl && (tmpl.fn
		? tmpl
		: this.getRsc("templates", tmpl) || $templates(tmpl)); // not yet compiled
}

//==============
// views._cnvt
//==============

function convertVal(converter, view, tagCtx, onError) {
	// self is template object or linkCtx object
	var tag, value,
		// if tagCtx is an integer, then it is the key for the compiled function to return the boundTag tagCtx
		boundTag = typeof tagCtx === "number" && view.tmpl.bnds[tagCtx-1],
		linkCtx = view.linkCtx; // For data-link="{cvt:...}"...

	if (onError !== undefined) {
		tagCtx = onError = {props: {}, args: [onError]};
	} else if (boundTag) {
		tagCtx = boundTag(view.data, view, $sub);
	}

	value = tagCtx.args[0];
	if (converter || boundTag) {
		tag = linkCtx && linkCtx.tag;
		if (!tag) {
			tag = $extend(new $sub._tg(), {
				_: {
					inline: !linkCtx,
					bnd: boundTag,
					unlinked: true
				},
				tagName: ":",
				cvt: converter,
				flow: true,
				tagCtx: tagCtx
			});
			if (linkCtx) {
				linkCtx.tag = tag;
				tag.linkCtx = linkCtx;
			}
			tagCtx.ctx = extendCtx(tagCtx.ctx, (linkCtx ? linkCtx.view : view).ctx);
		}
		tag._er = onError && value;
		tagHandlersFromProps(tag, tagCtx);

		tagCtx.view = view;

		tag.ctx = tagCtx.ctx || tag.ctx || {};
		tagCtx.ctx = undefined;

		value = tag.cvtArgs(converter !== "true" && converter)[0]; // If there is a convertBack but no convert, converter will be "true"

		// Call onRender (used by JsViews if present, to add binding annotations around rendered content)
		value = boundTag && view._.onRender
			? view._.onRender(value, view, tag)
			: value;
	}
	return value != undefined ? value : "";
}

function convertArgs(converter) {
	var tag = this,
		tagCtx = tag.tagCtx,
		view = tagCtx.view,
		args = tagCtx.args;

	converter = converter || tag.convert;
	converter = converter && ("" + converter === converter
		? (view.getRsc("converters", converter) || error("Unknown converter: '" + converter + "'"))
		: converter);

	args = !args.length && !tagCtx.index // On the opening tag with no args, bind to the current data context
		? [view.data]
		: converter
			? args.slice() // If there is a converter, use a copy of the tagCtx.args array for rendering, and replace the args[0] in
			// the copied array with the converted value. But we do not modify the value of tag.tagCtx.args[0] (the original args array)
			: args; // If no converter, get the original tagCtx.args

	if (converter) {
		if (converter.depends) {
			tag.depends = $sub.getDeps(tag.depends, tag, converter.depends, converter);
		}
		args[0] = converter.apply(tag, args);
	}
	return args;
}

//=============
// views._tag
//=============

function getResource(resourceType, itemName) {
	var res, store,
		view = this;
	while ((res === undefined) && view) {
		store = view.tmpl && view.tmpl[resourceType];
		res = store && store[itemName];
		view = view.parent;
	}
	return res || $views[resourceType][itemName];
}

function renderTag(tagName, parentView, tmpl, tagCtxs, isUpdate, onError) {
	parentView = parentView || topView;
	var tag, tag_, tagDef, template, tags, attr, parentTag, i, l, itemRet, tagCtx, tagCtxCtx, content, callInit, mapDef, thisMap, args, props, initialTmpl, tagDataMap,
		ret = "",
		linkCtx = parentView.linkCtx || 0,
		ctx = parentView.ctx,
		parentTmpl = tmpl || parentView.tmpl,
		// if tagCtx is an integer, then it is the key for the compiled function to return the boundTag tagCtxs
		boundTag = typeof tagCtxs === "number" && parentView.tmpl.bnds[tagCtxs-1];

	if (tagName._is === "tag") {
		tag = tagName;
		tagName = tag.tagName;
		tagCtxs = tag.tagCtxs;
		template = tag.template;
	} else {
		tagDef = parentView.getRsc("tags", tagName) || error("Unknown tag: {{" + tagName + "}} ");
		template = tagDef.template;
	}

	if (onError !== undefined) {
		ret += onError;
		tagCtxs = onError = [{props: {}, args: []}];
	} else if (boundTag) {
		tagCtxs = boundTag(parentView.data, parentView, $sub);
	}

	l = tagCtxs.length;
	for (i = 0; i < l; i++) {
		tagCtx = tagCtxs[i];
		if (!linkCtx || !linkCtx.tag || i && !linkCtx.tag._.inline || tag._er) {
			// Initialize tagCtx
			// For block tags, tagCtx.tmpl is an integer > 0
			if (content = parentTmpl.tmpls && tagCtx.tmpl) {
				content = tagCtx.content = parentTmpl.tmpls[content - 1];
			}
			tagCtx.index = i;
			tagCtx.tmpl = content; // Set the tmpl property to the content of the block tag
			tagCtx.render = renderContent;
			tagCtx.view = parentView;
			tagCtx.ctx = extendCtx(tagCtx.ctx, ctx); // Clone and extend parentView.ctx
		}
		if (tmpl = tagCtx.props.tmpl) {
			// If the tmpl property is overridden, set the value (when initializing, or, in case of binding: ^tmpl=..., when updating)
			tagCtx.tmpl = parentView.getTmpl(tmpl);
		}

		if (!tag) {
			// This will only be hit for initial tagCtx (not for {{else}}) - if the tag instance does not exist yet
			// Instantiate tag if it does not yet exist
			// If the tag has not already been instantiated, we will create a new instance.
			// ~tag will access the tag, even within the rendering of the template content of this tag.
			// From child/descendant tags, can access using ~tag.parent, or ~parentTags.tagName
			tag = new tagDef._ctr();
			callInit = !!tag.init;

			tag.parent = parentTag = ctx && ctx.tag;
			tag.tagCtxs = tagCtxs;
			tagDataMap = tag.dataMap;

			if (linkCtx) {
				tag._.inline = false;
				linkCtx.tag = tag;
				tag.linkCtx = linkCtx;
			}
			if (tag._.bnd = boundTag || linkCtx.fn) {
				// Bound if {^{tag...}} or data-link="{tag...}"
				tag._.arrVws = {};
			} else if (tag.dataBoundOnly) {
				error("{^{" + tagName + "}} tag must be data-bound");
			}
			//TODO better perf for childTags() - keep child tag.tags array, (and remove child, when disposed)
			// tag.tags = [];
		}
		tagCtxs = tag.tagCtxs;
		tagDataMap = tag.dataMap;

		tagCtx.tag = tag;
		if (tagDataMap && tagCtxs) {
			tagCtx.map = tagCtxs[i].map; // Copy over the compiled map instance from the previous tagCtxs to the refreshed ones
		}
		if (!tag.flow) {
			tagCtxCtx = tagCtx.ctx = tagCtx.ctx || {};

			// tags hash: tag.ctx.tags, merged with parentView.ctx.tags,
			tags = tag.parents = tagCtxCtx.parentTags = ctx && extendCtx(tagCtxCtx.parentTags, ctx.parentTags) || {};
			if (parentTag) {
				tags[parentTag.tagName] = parentTag;
				//TODO better perf for childTags: parentTag.tags.push(tag);
			}
			tags[tag.tagName] = tagCtxCtx.tag = tag;
		}
	}
	if (!(tag._er = onError)) {
		tagHandlersFromProps(tag, tagCtxs[0]);
		tag.rendering = {}; // Provide object for state during render calls to tag and elses. (Used by {{if}} and {{for}}...)
		for (i = 0; i < l; i++) {
			tagCtx = tag.tagCtx = tagCtxs[i];
			props = tagCtx.props;
			args = tag.cvtArgs();

			if (mapDef = props.dataMap || tagDataMap) {
				if (args.length || props.dataMap) {
					thisMap = tagCtx.map;
					if (!thisMap || thisMap.src !== args[0] || isUpdate) {
						if (thisMap && thisMap.src) {
							thisMap.unmap(); // only called if observable map - not when only used in JsRender, e.g. by {{props}}
						}
						thisMap = tagCtx.map = mapDef.map(args[0], props, undefined, !tag._.bnd);
					}
					args = [thisMap.tgt];
				}
			}
			tag.ctx = tagCtx.ctx;

			if (!i) {
				if (callInit) {
					initialTmpl = tag.template;
					tag.init(tagCtx, linkCtx, tag.ctx);
					callInit = undefined;
				}
				if (linkCtx) {
					// Set attr on linkCtx to ensure outputting to the correct target attribute.
					// Setting either linkCtx.attr or this.attr in the init() allows per-instance choice of target attrib.
					linkCtx.attr = tag.attr = linkCtx.attr || tag.attr;
				}
				attr = tag.attr;
				tag._.noVws = attr && attr !== HTML;
			}

			itemRet = undefined;
			if (tag.render) {
				itemRet = tag.render.apply(tag, args);
			}
			if (!args.length) {
				args = [parentView]; // no arguments - (e.g. {{else}}) get data context from view.
			}
			if (itemRet === undefined) {
				itemRet = tagCtx.render(args[0], true) || (isUpdate ? undefined : "");
			}
			// No return value from render, and no template/content tagCtx.render(...), so return undefined
			ret = ret ? ret + (itemRet || "") : itemRet; // If no rendered content, this will be undefined
		}
		tag.rendering = undefined;
	}
	tag.tagCtx = tagCtxs[0];
	tag.ctx = tag.tagCtx.ctx;

	if (tag._.noVws) {
			if (tag._.inline) {
			// inline tag with attr set to "text" will insert HTML-encoded content - as if it was element-based innerText
			ret = attr === "text"
				? $converters.html(ret)
				: "";
		}
	}
	return boundTag && parentView._.onRender
		// Call onRender (used by JsViews if present, to add binding annotations around rendered content)
		? parentView._.onRender(ret, parentView, tag)
		: ret;
}

//=================
// View constructor
//=================

function View(context, type, parentView, data, template, key, onRender, contentTmpl) {
	// Constructor for view object in view hierarchy. (Augmented by JsViews if JsViews is loaded)
	var views, parentView_, tag, self_,
		self = this,
		isArray = type === "array";

	self.content = contentTmpl;
	self.views = isArray ? [] : {};
	self.parent = parentView;
	self.type = type || "top";
	self.data = data;
	self.tmpl = template;
	// If the data is an array, this is an 'array view' with a views array for each child 'item view'
	// If the data is not an array, this is an 'item view' with a views 'hash' object for any child nested views
	// ._.useKey is non zero if is not an 'array view' (owning a data array). Use this as next key for adding to child views hash
	self_ = self._ = {
		key: 0,
		useKey: isArray ? 0 : 1,
		id: "" + viewId++,
		onRender: onRender,
		bnds: {}
	};
	self.linked = !!onRender;
	if (parentView) {
		views = parentView.views;
		parentView_ = parentView._;
		if (parentView_.useKey) {
			// Parent is not an 'array view'. Add this view to its views object
			// self._key = is the key in the parent view hash
			views[self_.key = "_" + parentView_.useKey++] = self;
			self.index = indexStr;
			self.getIndex = getNestedIndex;
		} else if (views.length === (self_.key = self.index = key)) { // Parent is an 'array view'. Add this view to its views array
			views.push(self); // Adding to end of views array. (Using push when possible - better perf than splice)
		} else {
			views.splice(key, 0, self); // Inserting in views array
		}
		// If no context was passed in, use parent context
		// If context was passed in, it should have been merged already with parent context
		self.ctx = context || parentView.ctx;
	} else {
		self.ctx = context;
	}
}

View.prototype = {
	get: getView,
	getIndex: getIndex,
	getRsc: getResource,
	getTmpl: getTemplate,
	hlp: getHelper,
	_is: "view"
};

//====================================================
// Registration
//====================================================

function compileChildResources(parentTmpl) {
	var storeName, resources, resourceName, resource, settings, compile, onStore;
	for (storeName in jsvStores) {
		settings = jsvStores[storeName];
		if ((compile = settings.compile) && (resources = parentTmpl[storeName + "s"])) {
			for (resourceName in resources) {
				// compile child resource declarations (templates, tags, tags["for"] or helpers)
				resource = resources[resourceName] = compile(resourceName, resources[resourceName], parentTmpl, 0);
				resource._is = storeName; // Only do this for compiled objects (tags, templates...)
				if (resource && (onStore = $sub.onStore[storeName])) {
					// e.g. JsViews integration
					onStore(resourceName, resource, compile);
				}
			}
		}
	}
}

//===============
// compileTag
//===============

function compileTag(name, tagDef, parentTmpl) {
	var tmpl, baseTag, prop,
		compiledDef = new $sub._tg();

	function Tag() {
		var tag = this;
		tag._ = {
			inline: true,
			unlinked: true
		};

		tag.tagName = name;
	}

	if ($isFunction(tagDef)) {
		// Simple tag declared as function. No presenter instantation.
		tagDef = {
			depends: tagDef.depends,
			render: tagDef
		};
	} else if ("" + tagDef === tagDef) {
		tagDef = {template: tagDef};
	}
	if (baseTag = tagDef.baseTag) {
		tagDef.flow = !!tagDef.flow; // Set flow property, so defaults to false even if baseTag has flow=true
		tagDef.baseTag = baseTag = "" + baseTag === baseTag
			? (parentTmpl && parentTmpl.tags[baseTag] || $tags[baseTag])
			: baseTag;

		compiledDef = $extend(compiledDef, baseTag);

		for (prop in tagDef) {
			compiledDef[prop] = getMethod(baseTag[prop], tagDef[prop]);
		}
	} else {
		compiledDef = $extend(compiledDef, tagDef);
	}

	// Tag declared as object, used as the prototype for tag instantiation (control/presenter)
	if ((tmpl = compiledDef.template) !== undefined) {
		compiledDef.template = "" + tmpl === tmpl ? ($templates[tmpl] || $templates(tmpl)) : tmpl;
	}
	if (compiledDef.init !== false) {
		// Set init: false on tagDef if you want to provide just a render method, or render and template, but no constructor or prototype.
		// so equivalent to setting tag to render function, except you can also provide a template.
		(Tag.prototype = compiledDef).constructor = compiledDef._ctr = Tag;
	}

	if (parentTmpl) {
		compiledDef._parentTmpl = parentTmpl;
	}
	return compiledDef;
}

function baseApply(args) {
	// In derived method (or handler declared declaratively as in {{:foo onChange=~fooChanged}} can call base method,
	// using this.baseApply(arguments) (Equivalent to this._superApply(arguments) in jQuery UI)
	return this.base.apply(this, args);
}

//===============
// compileTmpl
//===============

function compileTmpl(name, tmpl, parentTmpl, options) {
	// tmpl is either a template object, a selector for a template script block, the name of a compiled template, or a template object

	//==== nested functions ====
	function lookupTemplate(value) {
		// If value is of type string - treat as selector, or name of compiled template
		// Return the template object, if already compiled, or the markup string
		var currentName, tmpl;
		if (("" + value === value) || value.nodeType > 0 && (elem = value)) {
			if (!elem) {
				if (/^\.\/[^\\:*?"<>]*$/.test(value)) {
					// tmpl="./some/file.html"
					// If the template is not named, use "./some/file.html" as name.
					if (tmpl = $templates[name = name || value]) {
						value = tmpl;
					} else {
						// BROWSER-SPECIFIC CODE (not on Node.js):
						// Look for server-generated script block with id "./some/file.html"
						elem = document.getElementById(value);
					}
				} else if ($.fn && !rTmplString.test(value)) {
					try {
						elem = $(document).find(value)[0]; // if jQuery is loaded, test for selector returning elements, and get first element
					} catch (e) {}
				}// END BROWSER-SPECIFIC CODE
			} //BROWSER-SPECIFIC CODE
			if (elem) {
				// Generally this is a script element.
				// However we allow it to be any element, so you can for example take the content of a div,
				// use it as a template, and replace it by the same content rendered against data.
				// e.g. for linking the content of a div to a container, and using the initial content as template:
				// $.link("#content", model, {tmpl: "#content"});
				if (options) {
					// We will compile a new template using the markup in the script element
					value = elem.innerHTML;
				} else {
					// We will cache a single copy of the compiled template, and associate it with the name
					// (renaming from a previous name if there was one).
					currentName = elem.getAttribute(tmplAttr);
					if (currentName) {
						if (currentName !== jsvTmpl) {
							value = $templates[currentName];
							delete $templates[currentName];
						} else if ($.fn) {
							value = $.data(elem)[jsvTmpl];
						}
					} else {
						name = name || ($.fn ? jsvTmpl : value);
						value = compileTmpl(name, elem.innerHTML, parentTmpl, options);
					}
					value.tmplName = name = name || currentName;
					if (name !== jsvTmpl) {
						$templates[name] = value;
					}
					elem.setAttribute(tmplAttr, name);
					if ($.fn) {
						$.data(elem, jsvTmpl, value);
					}
				}
			} // END BROWSER-SPECIFIC CODE
			elem = undefined;
		} else if (!value.fn) {
			value = undefined;
			// If value is not a string. HTML element, or compiled template, return undefined
		}
		return value;
	}

	var elem, compiledTmpl,
		tmplOrMarkup = tmpl = tmpl || "";

	//==== Compile the template ====
	if (options === 0) {
		options = undefined;
		tmplOrMarkup = lookupTemplate(tmplOrMarkup); // Top-level compile so do a template lookup
	}

	// If options, then this was already compiled from a (script) element template declaration.
	// If not, then if tmpl is a template object, use it for options
	options = options || (tmpl.markup ? tmpl : {});
	options.tmplName = name;
	if (parentTmpl) {
		options._parentTmpl = parentTmpl;
	}
	// If tmpl is not a markup string or a selector string, then it must be a template object
	// In that case, get it from the markup property of the object
	if (!tmplOrMarkup && tmpl.markup && (tmplOrMarkup = lookupTemplate(tmpl.markup))) {
		if (tmplOrMarkup.fn) {
			// If the string references a compiled template object, need to recompile to merge any modified options
			tmplOrMarkup = tmplOrMarkup.markup;
		}
	}
	if (tmplOrMarkup !== undefined) {
		if (tmplOrMarkup.fn || tmpl.fn) {
			// tmpl is already compiled, so use it
			if (tmplOrMarkup.fn) {
				compiledTmpl = tmplOrMarkup;
			}
		} else {
			// tmplOrMarkup is a markup string, not a compiled template
			// Create template object
			tmpl = tmplObject(tmplOrMarkup, options);
			// Compile to AST and then to compiled function
			tmplFn(tmplOrMarkup.replace(rEscapeQuotes, "\\$&"), tmpl);
		}
		if (!compiledTmpl) {
			compileChildResources(options);

			compiledTmpl = $extend(function() {
				return tmpl.render.apply(tmpl, arguments);
			}, tmpl);
		}
		if (name && !parentTmpl && name !== jsvTmpl) {
			$render[name] = compiledTmpl;
		}
		return compiledTmpl;
	}
}

//==== /end of function compileTmpl ====

//=================
// compileViewModel
//=================

function getDefaultVal(defaultVal, data) {
	return $.isFunction(defaultVal)
		? defaultVal.call(data)
		: defaultVal;
}

function unmapArray(modelArr) {
		var i, arr = [],
			l = modelArr.length;
		for (i=0; i<l; i++) {
			arr.push(modelArr[i].unmap());
		}
		return arr;
}

function compileViewModel(name, type) {
	var i, constructor,
		viewModels = this,
		getters = type.getters,
		extend = type.extend,
		id = type.id,
		proto = $.extend({
			_is: name || "unnamed",
			unmap: unmap,
			merge: merge
		}, extend),
		args = "",
		body = "",
		l = getters ? getters.length : 0,
		$observable = $.observable,
		getterNames = {};

	function GetNew(args) {
		constructor.apply(this, args);
	}

	function vm() {
		return new GetNew(arguments);
	}

	function iterate(data, action) {
		var j, getterType, defaultVal, prop, ob,
			m = getters.length;
		for (j=0; j<m; j++) {
			prop = getters[j];
			getterType = undefined;
			if (prop + "" !== prop) {
				getterType = prop;
				prop = getterType.getter;
			}
			if ((ob = data[prop]) === undefined && getterType && (defaultVal = getterType.defaultVal) !== undefined) {
				ob = getDefaultVal(defaultVal, data);
			}
			action(ob, getterType && viewModels[getterType.type], prop);
		}
	}

	function map(data) {
		data = data + "" === data
			? JSON.parse(data) // Accept JSON string
			: data;            // or object/array
		var i, j,  l, m, prop,
			ob = data,
			arr = [];

		if ($.isArray(data)) {
			data = data || [];
			l = data.length;
			for (i=0; i<l; i++) {
				arr.push(this.map(data[i]));
			}
			arr._is = name;
			arr.unmap = unmap;
			arr.merge = merge;
			return arr;
		}

		if (data) {
			iterate(data, function(ob, viewModel) {
				if (viewModel) { // Iterate to build getters arg array (value, or mapped value)
					ob = viewModel.map(ob);
				}
				arr.push(ob);
			});

			ob = this.apply(this, arr); // Insantiate this View Model, passing getters args array to constructor
			for (prop in data) { // Copy over any other properties. that are not get/set properties
				if (!getterNames[prop]) {
					ob[prop] = data[prop];
				}
			}
		}
		return ob;
	}

	function merge(data) {
		data = data + "" === data
			? JSON.parse(data) // Accept JSON string
			: data;            // or object/array
		var i, j, l, m, prop, mod, found, assigned, ob, newModArr,
			model = this;

		if ($.isArray(model)) {
			assigned = {};
			newModArr = [];
			l = data.length;
			m = model.length;
			for (i=0; i<l; i++) {
				ob = data[i];
				found = false;
				for (j=0; j<m && !found; j++) {
					if (assigned[j]) {
						continue;
					}
					mod = model[j];

					if (id) {
						assigned[j] = found = id + "" === id
						? (ob[id] && (getterNames[id] ? mod[id]() : mod[id]) === ob[id])
						: id(mod, ob);
					}
				}
				if (found) {
					mod.merge(ob);
					newModArr.push(mod);
				} else {
					newModArr.push(vm.map(ob));
				}
			}
			if ($observable) {
				$observable(model).refresh(newModArr);
			} else {
				model.splice.apply(model, [0, model.length].concat(newModArr));
			}
			return;
		}
		iterate(data, function(ob, viewModel, getter) {
			if (viewModel) {
				model[getter]().merge(ob); // Update typed property
			} else {
				model[getter](ob); // Update non-typed property
			}
		});
		for (prop in data) {
			if (!getterNames[prop]) {
				model[prop] = data[prop];
			}
		}
	}

	function unmap() {
		var ob, prop, i, l, getterType, arr, value,
			model = this;

		if ($.isArray(model)) {
			return unmapArray(model);
		}
		ob = {};
		l = getters.length;
		for (i=0; i<l; i++) {
			prop = getters[i];
			getterType = undefined;
			if (prop + "" !== prop) {
				getterType = prop;
				prop = getterType.getter;
			}
			value = model[prop]();
			ob[prop] = getterType && value && viewModels[getterType.type]
				? $.isArray(value)
					? unmapArray(value)
					: value.unmap()
				: value;
		}
		for (prop in model) {
			if (prop !== "_is" && !getterNames[prop] && (prop.charAt(0) !== "_" || !getterNames[prop.slice(1)]) && !$.isFunction(model[prop])) {
				ob[prop] = model[prop];
			}
		}
		return ob;
	}

	GetNew.prototype = proto;

	for (i=0; i<l; i++) {
		(function(getter) {
			getter = getter.getter || getter;
			getterNames[getter] = i+1;
			var privField = "_" + getter;

			args += (args ? "," : "") + getter;
			body += "this." + privField + " = " + getter + ";\n";
			proto[getter] = proto[getter] || function(val) {
				if (!arguments.length) {
					return this[privField]; // If there is no argument, use as a getter
				}
				if ($observable) {
					$observable(this).setProperty(getter, val);
				} else {
					this[privField] = val;
				}
			};

			if ($observable) {
				proto[getter].set = proto[getter].set || function(val) {
					this[privField] = val; // Setter called by observable property change
				};
			}
		})(getters[i]);
	}

	constructor = new Function(args, body.slice(0, -1));
	constructor.prototype = proto;
	proto.constructor = constructor;

	vm.map = map;
	vm.getters = getters;
	vm.extend = extend;
	vm.id = id;
	return vm;
}

function tmplObject(markup, options) {
	// Template object constructor
	var htmlTag,
		wrapMap = $subSettingsAdvanced._wm || {}, // Only used in JsViews. Otherwise empty: {}
		tmpl = $extend(
			{
				tmpls: [],
				links: {}, // Compiled functions for link expressions
				bnds: [],
				_is: "template",
				render: renderContent
			},
			options
		);

	tmpl.markup = markup;
	if (!options.htmlTag) {
		// Set tmpl.tag to the top-level HTML tag used in the template, if any...
		htmlTag = rFirstElem.exec(markup);
		tmpl.htmlTag = htmlTag ? htmlTag[1].toLowerCase() : "";
	}
	htmlTag = wrapMap[tmpl.htmlTag];
	if (htmlTag && htmlTag !== wrapMap.div) {
		// When using JsViews, we trim templates which are inserted into HTML contexts where text nodes are not rendered (i.e. not 'Phrasing Content').
		// Currently not trimmed for <li> tag. (Not worth adding perf cost)
		tmpl.markup = $.trim(tmpl.markup);
	}

	return tmpl;
}

//==============
// registerStore
//==============

function registerStore(storeName, storeSettings) {

	function theStore(name, item, parentTmpl) {
		// The store is also the function used to add items to the store. e.g. $.templates, or $.views.tags

		// For store of name 'thing', Call as:
		//    $.views.things(items[, parentTmpl]),
		// or $.views.things(name, item[, parentTmpl])

		var onStore, compile, itemName, thisStore;
		if (name && typeof name === OBJECT && !name.nodeType && !name.markup && !name.getTgt && !(storeName === "viewModel" && name.getters || name.extend)) {
			// Call to $.views.things(items[, parentTmpl]),

			// Adding items to the store
			// If name is a hash, then item is parentTmpl. Iterate over hash and call store for key.
			for (itemName in name) {
				theStore(itemName, name[itemName], item);
			}
			return item || $views;
		}
		// Adding a single unnamed item to the store
		if (item === undefined) {
			item = name;
			name = undefined;
		}
		if (name && "" + name !== name) { // name must be a string
			parentTmpl = item;
			item = name;
			name = undefined;
		}
		thisStore = parentTmpl
			? storeName === "viewModel"
				? parentTmpl
				: (parentTmpl[storeNames] = parentTmpl[storeNames] || {})
			: theStore;
		compile = storeSettings.compile;
		if (item === null) {
			// If item is null, delete this entry
			if (name) {
				delete thisStore[name];
			}
		} else {
			item = compile ? compile.call(thisStore, name, item, parentTmpl, 0) : item;
			if (name) {
				thisStore[name] = item;
			}
		}
		if (compile && item) {
			item._is = storeName; // Only do this for compiled objects (tags, templates...)
		}
		if (item && (onStore = $sub.onStore[storeName])) {
			// e.g. JsViews integration
			onStore(name, item, compile);
		}
		return item;
	}

	var storeNames = storeName + "s";

	$views[storeNames] = theStore;
}

function addSetting(st) {
	$viewsSettings[st] = function(value) {
		return arguments.length
			? ($subSettings[st] = value, $viewsSettings)
			: $subSettings[st];
	};
}

//=========
// dataMap
//=========

function dataMap(mapDef) {
	function Map(source, options) {
		this.tgt = mapDef.getTgt(source, options);
	}

	if ($isFunction(mapDef)) {
		// Simple map declared as function
		mapDef = {
			getTgt: mapDef
		};
	}

	if (mapDef.baseMap) {
		mapDef = $extend($extend({}, mapDef.baseMap), mapDef);
	}

	mapDef.map = function(source, options) {
		return new Map(source, options);
	};
	return mapDef;
}

//==============
// renderContent
//==============

function renderContent(data, context, noIteration, parentView, key, onRender) {
	var i, l, tag, tmpl, tagCtx, isTopRenderCall, prevData, prevIndex,
		view = parentView,
		result = "";

	if (context === true) {
		noIteration = context; // passing boolean as second param - noIteration
		context = undefined;
	} else if (typeof context !== OBJECT) {
		context = undefined; // context must be a boolean (noIteration) or a plain object
	}

	if (tag = this.tag) {
		// This is a call from renderTag or tagCtx.render(...)
		tagCtx = this;
		view = view || tagCtx.view;
		tmpl = view.getTmpl(tag.template || tagCtx.tmpl);
		if (!arguments.length) {
			data = view;
		}
	} else {
		// This is a template.render(...) call
		tmpl = this;
	}

	if (tmpl) {
		if (!view && data && data._is === "view") {
			view = data; // When passing in a view to render or link (and not passing in a parent view) use the passed-in view as parentView
		}

		if (view) {
			if (data === view) {
				// Inherit the data from the parent view.
				// This may be the contents of an {{if}} block
				data = view.data;
			}
		}

		isTopRenderCall = !view;
		isRenderCall = isRenderCall || isTopRenderCall;
		if (!view) {
			(context = context || {}).root = data; // Provide ~root as shortcut to top-level data.
		}
		if (!isRenderCall || $subSettingsAdvanced.useViews || tmpl.useViews || view && view !== topView) {
			result = renderWithViews(tmpl, data, context, noIteration, view, key, onRender, tag);
		} else {
			if (view) { // In a block
				prevData = view.data;
				prevIndex = view.index;
				view.index = indexStr;
			} else {
				view = topView;
				view.data = data;
				view.ctx = context;
			}
			if ($isArray(data) && !noIteration) {
				// Create a view for the array, whose child views correspond to each data item. (Note: if key and parentView are passed in
				// along with parent view, treat as insert -e.g. from view.addViews - so parentView is already the view item for array)
				for (i = 0, l = data.length; i < l; i++) {
					view.index = i;
					view.data = data[i];
					result += tmpl.fn(data[i], view, $sub);
				}
			} else {
				view.data = data;
				result += tmpl.fn(data, view, $sub);
			}
			view.data = prevData;
			view.index = prevIndex;
		}
		if (isTopRenderCall) {
			isRenderCall = undefined;
		}
	}
	return result;
}

function renderWithViews(tmpl, data, context, noIteration, view, key, onRender, tag) {
	function setItemVar(item) {
		// When itemVar is specified, set modified ctx with user-named ~item
		newCtx = $extend({}, context);
		newCtx[itemVar] = item;
	}

	// Render template against data as a tree of subviews (nested rendered template instances), or as a string (top-level template).
	// If the data is the parent view, treat as noIteration, re-render with the same data context.
	var i, l, newView, childView, itemResult, swapContent, contentTmpl, outerOnRender, tmplName, itemVar, newCtx, tagCtx,
		result = "";

	if (tag) {
		// This is a call from renderTag or tagCtx.render(...)
		tmplName = tag.tagName;
		tagCtx = tag.tagCtx;
		context = context ? extendCtx(context, tag.ctx) : tag.ctx;

		if (tmpl === view.content) { // {{xxx tmpl=#content}}
			contentTmpl = tmpl !== view.ctx._wrp // We are rendering the #content
				? view.ctx._wrp // #content was the tagCtx.props.tmpl wrapper of the block content - so within this view, #content will now be the view.ctx._wrp block content
				: undefined; // #content was the view.ctx._wrp block content - so within this view, there is no longer any #content to wrap.
		} else if (tmpl !== tagCtx.content) {
			if (tmpl === tag.template) { // Rendering {{tag}} tag.template, replacing block content.
				contentTmpl = tagCtx.tmpl; // Set #content to block content (or wrapped block content if tagCtx.props.tmpl is set)
				context._wrp = tagCtx.content; // Pass wrapped block content to nested views
			} else { // Rendering tagCtx.props.tmpl wrapper
				contentTmpl = tagCtx.content || view.content; // Set #content to wrapped block content
			}
		} else {
			contentTmpl = view.content; // Nested views inherit same wrapped #content property
		}

		if (tagCtx.props.link === false) {
			// link=false setting on block tag
			// We will override inherited value of link by the explicit setting link=false taken from props
			// The child views of an unlinked view are also unlinked. So setting child back to true will not have any effect.
			context = context || {};
			context.link = false;
		}

		if (itemVar = tagCtx.props.itemVar) {
			if (itemVar.charAt(0) !== "~") {
				syntaxError("Use itemVar='~myItem'");
			}
			itemVar = itemVar.slice(1);
		}
	}

	if (view) {
		onRender = onRender || view._.onRender;
		context = extendCtx(context, view.ctx);
	}

	if (key === true) {
		swapContent = true;
		key = 0;
	}

	// If link===false, do not call onRender, so no data-linking marker nodes
	if (onRender && (context && context.link === false || tag && tag._.noVws)) {
		onRender = undefined;
	}
	outerOnRender = onRender;
	if (onRender === true) {
		// Used by view.refresh(). Don't create a new wrapper view.
		outerOnRender = undefined;
		onRender = view._.onRender;
	}
	// Set additional context on views created here, (as modified context inherited from the parent, and to be inherited by child views)
	context = tmpl.helpers
		? extendCtx(tmpl.helpers, context)
		: context;

	newCtx = context;
	if ($isArray(data) && !noIteration) {
		// Create a view for the array, whose child views correspond to each data item. (Note: if key and view are passed in
		// along with parent view, treat as insert -e.g. from view.addViews - so view is already the view item for array)
		newView = swapContent
			? view
			: (key !== undefined && view)
				|| new View(context, "array", view, data, tmpl, key, onRender);
		if (view && view._.useKey) {
			// Parent is not an 'array view'
			newView._.bnd = !tag || tag._.bnd && tag; // For array views that are data bound for collection change events, set the
			// view._.bnd property to true for top-level link() or data-link="{for}", or to the tag instance for a data-bound tag, e.g. {^{for ...}}
		}
		if (itemVar) {
			newView.it = itemVar;
		}
		itemVar = newView.it;
		for (i = 0, l = data.length; i < l; i++) {
			// Create a view for each data item.
			if (itemVar) {
				setItemVar(data[i]); // use modified ctx with user-named ~item
			}
			childView = new View(newCtx, "item", newView, data[i], tmpl, (key || 0) + i, onRender, contentTmpl);

			itemResult = tmpl.fn(data[i], childView, $sub);
			result += newView._.onRender ? newView._.onRender(itemResult, childView) : itemResult;
		}
	} else {
		// Create a view for singleton data object. The type of the view will be the tag name, e.g. "if" or "myTag" except for
		// "item", "array" and "data" views. A "data" view is from programmatic render(object) against a 'singleton'.
		if (itemVar) {
			setItemVar(data);
		}
		newView = swapContent ? view : new View(newCtx, tmplName || "data", view, data, tmpl, key, onRender, contentTmpl);
		if (tag && !tag.flow) {
			newView.tag = tag;
		}
		result += tmpl.fn(data, newView, $sub);
	}
	return outerOnRender ? outerOnRender(result, newView) : result;
}

//===========================
// Build and compile template
//===========================

// Generate a reusable function that will serve to render a template against data
// (Compile AST then build template function)

function onRenderError(e, view, fallback) {
	var message = fallback !== undefined
		? $isFunction(fallback)
			? fallback.call(view.data, e, view)
			: fallback || ""
		: "{Error: " + e.message + "}";

	if ($subSettings.onError && (fallback = $subSettings.onError.call(view.data, e, fallback && message, view)) !== undefined) {
		message = fallback; // There is a settings.debugMode(handler) onError override. Call it, and use return value (if any) to replace message
	}

	return view && !view.linkCtx ? $converters.html(message) : message;
}

function error(message) {
	throw new $sub.Err(message);
}

function syntaxError(message) {
	error("Syntax error\n" + message);
}

function tmplFn(markup, tmpl, isLinkExpr, convertBack, hasElse) {
	// Compile markup to AST (abtract syntax tree) then build the template function code from the AST nodes
	// Used for compiling templates, and also by JsViews to build functions for data link expressions

	//==== nested functions ====
	function pushprecedingContent(shift) {
		shift -= loc;
		if (shift) {
			content.push(markup.substr(loc, shift).replace(rNewLine, "\\n"));
		}
	}

	function blockTagCheck(tagName, block) {
		if (tagName) {
			tagName += '}}';
			//			'{{include}} block has {{/for}} with no open {{for}}'
			syntaxError((
				block
					? '{{' + block + '}} block has {{/' + tagName + ' without {{' + tagName
					: 'Unmatched or missing {{/' + tagName) + ', in template:\n' + markup);
		}
	}

	function parseTag(all, bind, tagName, converter, colon, html, codeTag, params, slash, bind2, closeBlock, index) {
/*

     bind     tagName         cvt   cln html code    params            slash   bind2         closeBlk  comment
/(?:{(\^)?{(?:(\w+(?=[\/\s}]))|(\w+)?(:)|(>)|(\*))\s*((?:[^}]|}(?!}))*?)(\/)?|{(\^)?{(?:(?:\/(\w+))\s*|!--[\s\S]*?--))}}/g

(?:
  {(\^)?{            bind
  (?:
    (\w+             tagName
      (?=[\/\s}])
    )
    |
    (\w+)?(:)        converter colon
    |
    (>)              html
    |
    (\*)             codeTag
  )
  \s*
  (                  params
    (?:[^}]|}(?!}))*?
  )
  (\/)?              slash
  |
  {(\^)?{            bind2
  (?:
    (?:\/(\w+))\s*   closeBlock
    |
    !--[\s\S]*?--    comment
  )
)
}}/g

*/
		if (codeTag && bind || slash && !tagName || params && params.slice(-1) === ":" || bind2) {
			syntaxError(all);
		}

		// Build abstract syntax tree (AST): [tagName, converter, params, content, hash, bindings, contentMarkup]
		if (html) {
			colon = ":";
			converter = HTML;
		}
		slash = slash || isLinkExpr && !hasElse;

		var pathBindings = (bind || isLinkExpr) && [[]],
			props = "",
			args = "",
			ctxProps = "",
			paramsArgs = "",
			paramsProps = "",
			paramsCtxProps = "",
			onError = "",
			useTrigger = "",
			// Block tag if not self-closing and not {{:}} or {{>}} (special case) and not a data-link expression
			block = !slash && !colon;

		//==== nested helper function ====
		tagName = tagName || (params = params || "#data", colon); // {{:}} is equivalent to {{:#data}}
		pushprecedingContent(index);
		loc = index + all.length; // location marker - parsed up to here
		if (codeTag) {
			if (allowCode) {
				content.push(["*", "\n" + params.replace(/^:/, "ret+= ").replace(rUnescapeQuotes, "$1") + ";\n"]);
			}
		} else if (tagName) {
			if (tagName === "else") {
				if (rTestElseIf.test(params)) {
					syntaxError('for "{{else if expr}}" use "{{else expr}}"');
				}
				pathBindings = current[7] && [[]];
				current[8] = markup.substring(current[8], index); // contentMarkup for block tag
				current = stack.pop();
				content = current[2];
				block = true;
			}
			if (params) {
				// remove newlines from the params string, to avoid compiled code errors for unterminated strings
				parseParams(params.replace(rNewLine, " "), pathBindings, tmpl)
					.replace(rBuildHash, function(all, onerror, isCtx, key, keyToken, keyValue, arg, param) {
						key = "'" + keyToken + "':";
						if (arg) {
							args += keyValue + ",";
							paramsArgs += "'" + param + "',";
						} else if (isCtx) {
							ctxProps += key + keyValue + ",";
							paramsCtxProps += key + "'" + param + "',";
						} else if (onerror) {
							onError += keyValue;
						} else {
							if (keyToken === "trigger") {
								useTrigger += keyValue;
							}
							props += key + keyValue + ",";
							paramsProps += key + "'" + param + "',";
							hasHandlers = hasHandlers || rHasHandlers.test(keyToken);
						}
						return "";
					}).slice(0, -1);
			}

			if (pathBindings && pathBindings[0]) {
				pathBindings.pop(); // Remove the bindings that was prepared for next arg. (There is always an extra one ready).
			}

			newNode = [
					tagName,
					converter || !!convertBack || hasHandlers || "",
					block && [],
					parsedParam(paramsArgs || (tagName === ":" ? "'#data'," : ""), paramsProps, paramsCtxProps), // {{:}} equivalent to {{:#data}}
					parsedParam(args || (tagName === ":" ? "data," : ""), props, ctxProps),
					onError,
					useTrigger,
					pathBindings || 0
				];
			content.push(newNode);
			if (block) {
				stack.push(current);
				current = newNode;
				current[8] = loc; // Store current location of open tag, to be able to add contentMarkup when we reach closing tag
			}
		} else if (closeBlock) {
			blockTagCheck(closeBlock !== current[0] && current[0] !== "else" && closeBlock, current[0]);
			current[8] = markup.substring(current[8], index); // contentMarkup for block tag
			current = stack.pop();
		}
		blockTagCheck(!current && closeBlock);
		content = current[2];
	}
	//==== /end of nested functions ====

	var result, newNode, hasHandlers,
		allowCode = $subSettings.allowCode || tmpl && tmpl.allowCode
			|| $viewsSettings.allowCode === true, // include direct setting of settings.allowCode true for backward compat only
		astTop = [],
		loc = 0,
		stack = [],
		content = astTop,
		current = [,,astTop];

	if (allowCode) {
		tmpl.allowCode = allowCode;
	}

//TODO	result = tmplFnsCache[markup]; // Only cache if template is not named and markup length < ...,
//and there are no bindings or subtemplates?? Consider standard optimization for data-link="a.b.c"
//		if (result) {
//			tmpl.fn = result;
//		} else {

//		result = markup;
	if (isLinkExpr) {
		if (convertBack !== undefined) {
			markup = markup.slice(0, -convertBack.length - 2) + delimCloseChar1;
		}
		markup = delimOpenChar0 + markup + delimCloseChar1;
	}

	blockTagCheck(stack[0] && stack[0][2].pop()[0]);
	// Build the AST (abstract syntax tree) under astTop
	markup.replace(rTag, parseTag);

	pushprecedingContent(markup.length);

	if (loc = astTop[astTop.length - 1]) {
		blockTagCheck("" + loc !== loc && (+loc[8] === loc[8]) && loc[0]);
	}
//			result = tmplFnsCache[markup] = buildCode(astTop, tmpl);
//		}

	if (isLinkExpr) {
		result = buildCode(astTop, markup, isLinkExpr);
		setPaths(result, [astTop[0][7]]); // With data-link expressions, pathBindings array is astTop[0][7]
	} else {
		result = buildCode(astTop, tmpl);
	}
	return result;
}

function setPaths(fn, pathsArr) {
	var key, paths,
		i = 0,
		l = pathsArr.length;
	fn.deps = [];
	for (; i < l; i++) {
		paths = pathsArr[i];
		for (key in paths) {
			if (key !== "_jsvto" && paths[key].length) {
				fn.deps = fn.deps.concat(paths[key]); // deps is the concatenation of the paths arrays for the different bindings
			}
		}
	}
	fn.paths = paths; // The array of paths arrays for the different bindings
}

function parsedParam(args, props, ctx) {
	return [args.slice(0, -1), props.slice(0, -1), ctx.slice(0, -1)];
}

function paramStructure(parts, type) {
	return '\n\t'
		+ (type
			? type + ':{'
			: '')
		+ 'args:[' + parts[0] + ']'
		+ (parts[1] || !type
			? ',\n\tprops:{' + parts[1] + '}'
			: "")
		+ (parts[2] ? ',\n\tctx:{' + parts[2] + '}' : "");
}

function parseParams(params, pathBindings, tmpl) {

	function parseTokens(all, lftPrn0, lftPrn, bound, path, operator, err, eq, path2, prn, comma, lftPrn2, apos, quot, rtPrn, rtPrnDot, prn2, space, index, full) {
	// /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,
	//   lftPrn0        lftPrn        bound            path    operator err                                                eq             path2       prn    comma   lftPrn2   apos quot      rtPrn rtPrnDot                        prn2  space
		// (left paren? followed by (path? followed by operator) or (path followed by paren?)) or comma or apos or quot or right paren or space
		bound = bindings && bound;
		if (bound && !eq) {
			path = bound + path; // e.g. some.fn(...)^some.path - so here path is "^some.path"
		}
		operator = operator || "";
		lftPrn = lftPrn || lftPrn0 || lftPrn2;
		path = path || path2;
		// Could do this - but not worth perf cost?? :-
		// if (!path.lastIndexOf("#data.", 0)) { path = path.slice(6); } // If path starts with "#data.", remove that.
		prn = prn || prn2 || "";

		var expr, exprFn, binds, theOb, newOb,
			rtSq = ")";

		if (prn === "[") {
			prn  ="[j._sq(";
			rtSq = ")]";
		}

		function parsePath(allPath, not, object, helper, view, viewProperty, pathTokens, leafToken) {
			//rPath = /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
			//          not                               object     helper    view  viewProperty pathTokens      leafToken
			var subPath = object === ".";
			if (object) {
				path = path.slice(not.length);
				if (/^\.?constructor$/.test(leafToken||path)) {
					syntaxError(allPath);
				}
				if (!subPath) {
					allPath = (helper
							? 'view.hlp("' + helper + '")'
							: view
								? "view"
								: "data")
						+ (leafToken
							? (viewProperty
								? "." + viewProperty
								: helper
									? ""
									: (view ? "" : "." + object)
								) + (pathTokens || "")
							: (leafToken = helper ? "" : view ? viewProperty || "" : object, ""));

					allPath = allPath + (leafToken ? "." + leafToken : "");

					allPath = not + (allPath.slice(0, 9) === "view.data"
						? allPath.slice(5) // convert #view.data... to data...
						: allPath);
				}
				if (bindings) {
					binds = named === "linkTo" ? (bindto = pathBindings._jsvto = pathBindings._jsvto || []) : bndCtx.bd;
					if (theOb = subPath && binds[binds.length-1]) {
						if (theOb._jsv) {
							while (theOb.sb) {
								theOb = theOb.sb;
							}
							if (theOb.bnd) {
								path = "^" + path.slice(1);
							}
							theOb.sb = path;
							theOb.bnd = theOb.bnd || path.charAt(0) === "^";
						}
					} else {
						binds.push(path);
					}
					pathStart[parenDepth] = index + (subPath ? 1 : 0);
				}
			}
			return allPath;
		}

		if (err && !aposed && !quoted) {
			syntaxError(params);
		} else {
			if (bindings && rtPrnDot && !aposed && !quoted) {
				// This is a binding to a path in which an object is returned by a helper/data function/expression, e.g. foo()^x.y or (a?b:c)^x.y
				// We create a compiled function to get the object instance (which will be called when the dependent data of the subexpression changes, to return the new object, and trigger re-binding of the subsequent path)
				if (!named || boundName || bindto) {
					expr = pathStart[parenDepth - 1];
					if (full.length - 1 > index - (expr || 0)) { // We need to compile a subexpression
						expr = full.slice(expr, index + all.length);
						if (exprFn !== true) { // If not reentrant call during compilation
							binds = bindto || bndStack[parenDepth-1].bd;
							// Insert exprOb object, to be used during binding to return the computed object
							theOb = binds[binds.length-1];
							if (theOb && theOb.prm) {
								while (theOb.sb && theOb.sb.prm) {
									theOb = theOb.sb;
								}
								newOb = theOb.sb = {path: theOb.sb, bnd: theOb.bnd};
							} else {
								binds.push(newOb = {path: binds.pop()}); // Insert exprOb object, to be used during binding to return the computed object
							}											 // (e.g. "some.object()" in "some.object().a.b" - to be used as context for binding the following tokens "a.b")
						}
						rtPrnDot = delimOpenChar1 + ":" + expr // The parameter or function subexpression
							+ " onerror=''" // set onerror='' in order to wrap generated code with a try catch - returning '' as object instance if there is an error/missing parent
							+ delimCloseChar0;
						exprFn = tmplLinks[rtPrnDot];
						if (!exprFn) {
							tmplLinks[rtPrnDot] = true; // Flag that this exprFn (for rtPrnDot) is being compiled
							tmplLinks[rtPrnDot] = exprFn = tmplFn(rtPrnDot, tmpl, true); // Compile the expression (or use cached copy already in tmpl.links)
						}
						if (exprFn !== true && newOb) {
							// If not reentrant call during compilation
							newOb._jsv = exprFn;
							newOb.prm = bndCtx.bd;
							newOb.bnd = newOb.bnd || newOb.path && newOb.path.indexOf("^") >= 0;
						}
					}
				}
			}
			return (aposed
				// within single-quoted string
				? (aposed = !apos, (aposed ? all : lftPrn2 + '"'))
				: quoted
				// within double-quoted string
					? (quoted = !quot, (quoted ? all : lftPrn2 + '"'))
					:
				(
					(lftPrn
						? (pathStart[parenDepth] = index++, bndCtx = bndStack[++parenDepth] = {bd: []}, lftPrn)
						: "")
					+ (space
						? (parenDepth
							? ""
				// New arg or prop - so insert backspace \b (\x08) as separator for named params, used subsequently by rBuildHash, and prepare new bindings array
							: (paramIndex = full.slice(paramIndex, index), named
								? (named = boundName = bindto = false, "\b")
								: "\b,") + paramIndex + (paramIndex = index + all.length, bindings && pathBindings.push(bndCtx.bd = []), "\b")
						)
						: eq
				// named param. Remove bindings for arg and create instead bindings array for prop
							? (parenDepth && syntaxError(params), bindings && pathBindings.pop(), named = path, boundName = bound, paramIndex = index + all.length, bound && (bindings = bndCtx.bd = pathBindings[named] = []), path + ':')
							: path
				// path
								? (path.split("^").join(".").replace(rPath, parsePath)
									+ (prn
				// some.fncall(
										? (bndCtx = bndStack[++parenDepth] = {bd: []}, fnCall[parenDepth] = rtSq, prn)
										: operator)
								)
								: operator
				// operator
									? operator
									: rtPrn
				// function
										? ((rtPrn = fnCall[parenDepth] || rtPrn, fnCall[parenDepth] = false, bndCtx = bndStack[--parenDepth], rtPrn)
											+ (prn // rtPrn and prn, e.g )( in (a)() or a()(), or )[ in a()[]
												? (bndCtx = bndStack[++parenDepth], fnCall[parenDepth] = rtSq, prn)
												: "")
										)
										: comma
											? (fnCall[parenDepth] || syntaxError(params), ",") // We don't allow top-level literal arrays or objects
											: lftPrn0
												? ""
												: (aposed = apos, quoted = quot, '"')
				))
			);
		}
	}

	var named, bindto, boundName,
		quoted, // boolean for string content in double quotes
		aposed, // or in single quotes
		bindings = pathBindings && pathBindings[0], // bindings array for the first arg
		bndCtx = {bd: bindings},
		bndStack = {0: bndCtx},
		paramIndex = 0, // list,
		tmplLinks = tmpl ? tmpl.links : bindings && (bindings.links = bindings.links || {}),
		// The following are used for tracking path parsing including nested paths, such as "a.b(c^d + (e))^f", and chained computed paths such as
		// "a.b().c^d().e.f().g" - which has four chained paths, "a.b()", "^c.d()", ".e.f()" and ".g"
		parenDepth = 0,
		fnCall = {}, // We are in a function call
		pathStart = {}, // tracks the start of the current path such as c^d() in the above example
		result = (params + (tmpl ? " " : "")).replace(rParams, parseTokens);

	return !parenDepth && result || syntaxError(params); // Syntax error if unbalanced parens in params expression
}

function buildCode(ast, tmpl, isLinkExpr) {
	// Build the template function code from the AST nodes, and set as property on the passed-in template object
	// Used for compiling templates, and also by JsViews to build functions for data link expressions
	var i, node, tagName, converter, tagCtx, hasTag, hasEncoder, getsVal, hasCnvt, useCnvt, tmplBindings, pathBindings, params, boundOnErrStart, boundOnErrEnd,
		tagRender, nestedTmpls, tmplName, nestedTmpl, tagAndElses, content, markup, nextIsElse, oldCode, isElse, isGetVal, tagCtxFn, onError, tagStart, trigger,
		tmplBindingKey = 0,
		useViews = $subSettingsAdvanced.useViews || tmpl.useViews || tmpl.tags || tmpl.templates || tmpl.helpers || tmpl.converters,
		code = "",
		tmplOptions = {},
		l = ast.length;

	if ("" + tmpl === tmpl) {
		tmplName = isLinkExpr ? 'data-link="' + tmpl.replace(rNewLine, " ").slice(1, -1) + '"' : tmpl;
		tmpl = 0;
	} else {
		tmplName = tmpl.tmplName || "unnamed";
		if (tmpl.allowCode) {
			tmplOptions.allowCode = true;
		}
		if (tmpl.debug) {
			tmplOptions.debug = true;
		}
		tmplBindings = tmpl.bnds;
		nestedTmpls = tmpl.tmpls;
	}
	for (i = 0; i < l; i++) {
		// AST nodes: [0: tagName, 1: converter, 2: content, 3: params, 4: code, 5: onError, 6: trigger, 7:pathBindings, 8: contentMarkup]
		node = ast[i];

		// Add newline for each callout to t() c() etc. and each markup string
		if ("" + node === node) {
			// a markup string to be inserted
			code += '\n+"' + node + '"';
		} else {
			// a compiled tag expression to be inserted
			tagName = node[0];
			if (tagName === "*") {
				// Code tag: {{* }}
				code += ";\n" + node[1] + "\nret=ret";
			} else {
				converter = node[1];
				content = !isLinkExpr && node[2];
				tagCtx = paramStructure(node[3], 'params') + '},' + paramStructure(params = node[4]);
				onError = node[5];
				trigger = node[6];
				markup = node[8] && node[8].replace(rUnescapeQuotes, "$1");
				if (isElse = tagName === "else") {
					if (pathBindings) {
						pathBindings.push(node[7]);
					}
				} else {
					tmplBindingKey = 0;
					if (tmplBindings && (pathBindings = node[7])) { // Array of paths, or false if not data-bound
						pathBindings = [pathBindings];
						tmplBindingKey = tmplBindings.push(1); // Add placeholder in tmplBindings for compiled function
					}
				}
				useViews = useViews || params[1] || params[2] || pathBindings || /view.(?!index)/.test(params[0]);
				// useViews is for perf optimization. For render() we only use views if necessary - for the more advanced scenarios.
				// We use views if there are props, contextual properties or args with #... (other than #index) - but you can force
				// using the full view infrastructure, (and pay a perf price) by opting in: Set useViews: true on the template, manually...
				if (isGetVal = tagName === ":") {
					if (converter) {
						tagName = converter === HTML ? ">" : converter + tagName;
					}
				} else {
					if (content) { // TODO optimize - if content.length === 0 or if there is a tmpl="..." specified - set content to null / don't run this compilation code - since content won't get used!!
						// Create template object for nested template
						nestedTmpl = tmplObject(markup, tmplOptions);
						nestedTmpl.tmplName = tmplName + "/" + tagName;
						// Compile to AST and then to compiled function
						nestedTmpl.useViews = nestedTmpl.useViews || useViews;
						buildCode(content, nestedTmpl);
						useViews = nestedTmpl.useViews;
						nestedTmpls.push(nestedTmpl);
					}

					if (!isElse) {
						// This is not an else tag.
						tagAndElses = tagName;
						useViews = useViews || tagName && (!$tags[tagName] || !$tags[tagName].flow);
						// Switch to a new code string for this bound tag (and its elses, if it has any) - for returning the tagCtxs array
						oldCode = code;
						code = "";
					}
					nextIsElse = ast[i + 1];
					nextIsElse = nextIsElse && nextIsElse[0] === "else";
				}
				tagStart = onError ? ";\ntry{\nret+=" : "\n+";
				boundOnErrStart = "";
				boundOnErrEnd = "";

				if (isGetVal && (pathBindings || trigger || converter && converter !== HTML)) {
					// For convertVal we need a compiled function to return the new tagCtx(s)
					tagCtxFn = new Function("data,view,j,u", " // " + tmplName + " " + tmplBindingKey + " " + tagName
										+ "\nreturn {" + tagCtx + "};");
					tagCtxFn._er = onError;
					tagCtxFn._tag = tagName;

					if (isLinkExpr) {
						return tagCtxFn;
					}

					setPaths(tagCtxFn, pathBindings);
					tagRender = 'c("' + converter + '",view,';
					useCnvt = true;
					boundOnErrStart = tagRender + tmplBindingKey + ",";
					boundOnErrEnd = ")";
				}
				code += (isGetVal
					? (isLinkExpr ? (onError ? "try{\n" : "") + "return " : tagStart) + (useCnvt // Call _cnvt if there is a converter: {{cnvt: ... }} or {^{cnvt: ... }}
						? (useCnvt = undefined, useViews = hasCnvt = true, tagRender + (pathBindings
							? ((tmplBindings[tmplBindingKey - 1] = tagCtxFn), tmplBindingKey) // Store the compiled tagCtxFn in tmpl.bnds, and pass the key to convertVal()
							: "{" + tagCtx + "}") + ")")
						: tagName === ">"
							? (hasEncoder = true, "h(" + params[0] + ")")
							: (getsVal = true, "((v=" + params[0] + ')!=null?v:"")') // Strict equality just for data-link="title{:expr}" so expr=null will remove title attribute
					)
					: (hasTag = true, "\n{view:view,tmpl:" // Add this tagCtx to the compiled code for the tagCtxs to be passed to renderTag()
						+ (content ? nestedTmpls.length : "0") + "," // For block tags, pass in the key (nestedTmpls.length) to the nested content template
						+ tagCtx + "},"));

				if (tagAndElses && !nextIsElse) {
					// This is a data-link expression or an inline tag without any elses, or the last {{else}} of an inline tag
					// We complete the code for returning the tagCtxs array
					code = "[" + code.slice(0, -1) + "]";
					tagRender = 't("' + tagAndElses + '",view,this,';
					if (isLinkExpr || pathBindings) {
						// This is a bound tag (data-link expression or inline bound tag {^{tag ...}}) so we store a compiled tagCtxs function in tmp.bnds
						code = new Function("data,view,j,u", " // " + tmplName + " " + tmplBindingKey + " " + tagAndElses + "\nreturn " + code + ";");
						code._er = onError;
						code._tag = tagAndElses;
						if (pathBindings) {
							setPaths(tmplBindings[tmplBindingKey - 1] = code, pathBindings);
						}
						if (isLinkExpr) {
							return code; // For a data-link expression we return the compiled tagCtxs function
						}
						boundOnErrStart = tagRender + tmplBindingKey + ",undefined,";
						boundOnErrEnd = ")";
					}

					// This is the last {{else}} for an inline tag.
					// For a bound tag, pass the tagCtxs fn lookup key to renderTag.
					// For an unbound tag, include the code directly for evaluating tagCtxs array
					code = oldCode + tagStart + tagRender + (tmplBindingKey || code) + ")";
					pathBindings = 0;
					tagAndElses = 0;
				}
				if (onError) {
					useViews = true;
					code += ';\n}catch(e){ret' + (isLinkExpr ? "urn " : "+=") + boundOnErrStart + 'j._err(e,view,' + onError + ')' + boundOnErrEnd + ';}' + (isLinkExpr ? "" : 'ret=ret');
				}
			}
		}
	}
	// Include only the var references that are needed in the code
	code = "// " + tmplName

		+ "\nvar v"
		+ (hasTag ? ",t=j._tag" : "")                // has tag
		+ (hasCnvt ? ",c=j._cnvt" : "")              // converter
		+ (hasEncoder ? ",h=j._html" : "")           // html converter
		+ (isLinkExpr ? ";\n" : ',ret=""\n')
		+ (tmplOptions.debug ? "debugger;" : "")
		+ code
		+ (isLinkExpr ? "\n" : ";\nreturn ret;");

	if ($subSettings.debugMode !== false) {
		code = "try {\n" + code + "\n}catch(e){\nreturn j._err(e, view);\n}";
	}

	try {
		code = new Function("data,view,j,u", code);
	} catch (e) {
		syntaxError("Compiled template code:\n\n" + code + '\n: "' + e.message + '"');
	}
	if (tmpl) {
		tmpl.fn = code;
		tmpl.useViews = !!useViews;
	}
	return code;
}

//==========
// Utilities
//==========

// Merge objects, in particular contexts which inherit from parent contexts
function extendCtx(context, parentContext) {
	// Return copy of parentContext, unless context is defined and is different, in which case return a new merged context
	// If neither context nor parentContext are defined, return undefined
	return context && context !== parentContext
		? (parentContext
			? $extend($extend({}, parentContext), context)
			: context)
		: parentContext && $extend({}, parentContext);
}

// Get character entity for HTML and Attribute encoding
function getCharEntity(ch) {
	return charEntities[ch] || (charEntities[ch] = "&#" + ch.charCodeAt(0) + ";");
}

function getTargetProps(source) {
	// this pointer is theMap - which has tagCtx.props too
	// arguments: tagCtx.args.
	var key, prop,
		props = [];

	if (typeof source === OBJECT) {
		for (key in source) {
			prop = source[key];
			if (!prop || !prop.toJSON || prop.toJSON()) {
				if (!$isFunction(prop)) {
					props.push({key: key, prop: prop});
				}
			}
		}
	}
	return props;
}

function $fnRender(data, context, noIteration) {
	var tmplElem = this.jquery && (this[0] || error('Unknown template: "' + this.selector + '"')),
		tmpl = tmplElem.getAttribute(tmplAttr);

	return renderContent.call(tmpl ? $.data(tmplElem)[jsvTmpl] : $templates(tmplElem), data, context, noIteration);
}

//========================== Register converters ==========================

function htmlEncode(text) {
	// HTML encode: Replace < > & ' and " by corresponding entities.
	return text != undefined ? rIsHtml.test(text) && ("" + text).replace(rHtmlEncode, getCharEntity) || text : "";
}

//========================== Initialize ==========================

$sub = $views.sub;
$viewsSettings = $views.settings;

if (!(jsr || $ && $.render)) {
	// JsRender not already loaded, or loaded without jQuery, and we are now moving from jsrender namespace to jQuery namepace
	for (jsvStoreName in jsvStores) {
		registerStore(jsvStoreName, jsvStores[jsvStoreName]);
	}

	$converters = $views.converters;
	$helpers = $views.helpers;
	$tags = $views.tags;

	$sub._tg.prototype = {
		baseApply: baseApply,
		cvtArgs: convertArgs
	};

	topView = $sub.topView = new View();

	//BROWSER-SPECIFIC CODE
	if ($) {

		////////////////////////////////////////////////////////////////////////////////////////////////
		// jQuery (= $) is loaded

		$.fn.render = $fnRender;

		if ($.observable) {
			$extend($sub, $.views.sub); // jquery.observable.js was loaded before jsrender.js
			$views.map = $.views.map;
		}

	} else {
		////////////////////////////////////////////////////////////////////////////////////////////////
		// jQuery is not loaded.

		$ = {};

		if (setGlobals) {
			global.jsrender = $; // We are loading jsrender.js from a script element, not AMD or CommonJS, so set global
		}

		// Error warning if jsrender.js is used as template engine on Node.js (e.g. Express or Hapi...)
		// Use jsrender-node.js instead...
		$.renderFile = $.__express = $.compile = function() { throw "Node.js: use npm jsrender, or jsrender-node.js"; };

		//END BROWSER-SPECIFIC CODE
		$.isFunction = function(ob) {
			return typeof ob === "function";
		};

		$.isArray = Array.isArray || function(obj) {
			return ({}.toString).call(obj) === "[object Array]";
		};

		$sub._jq = function(jq) { // private method to move from JsRender APIs from jsrender namespace to jQuery namespace
			if (jq !== $) {
				$extend(jq, $); // map over from jsrender namespace to jQuery namespace
				$ = jq;
				$.fn.render = $fnRender;
				delete $.jsrender;
			}
		};

		$.jsrender = versionNumber;
	}

	$subSettings = $sub.settings;
	$subSettings.allowCode = false;
	$isFunction = $.isFunction;
	$isArray = $.isArray;
	$.render = $render;
	$.views = $views;
	$.templates = $templates = $views.templates;

	for (setting in $subSettings) {
		addSetting(setting);
	}

	($viewsSettings.debugMode = function(debugMode) {
		return debugMode === undefined
			? $subSettings.debugMode
			: (
				$subSettings.debugMode = debugMode,
				$subSettings.onError = debugMode + "" === debugMode
					? new Function("", "return '" + debugMode + "';" )
					: $isFunction(debugMode)
						? debugMode
						: undefined,
				$viewsSettings);
	})(false); // jshint ignore:line

	$subSettingsAdvanced = $subSettings.advanced = {
		useViews: false,
		_jsv: false // For global access to JsViews store
	};

	//========================== Register tags ==========================

	$tags({
		"if": {
			render: function(val) {
				// This function is called once for {{if}} and once for each {{else}}.
				// We will use the tag.rendering object for carrying rendering state across the calls.
				// If not done (a previous block has not been rendered), look at expression for this block and render the block if expression is truthy
				// Otherwise return ""
				var self = this,
					tagCtx = self.tagCtx,
					ret = (self.rendering.done || !val && (arguments.length || !tagCtx.index))
						? ""
						: (self.rendering.done = true, self.selected = tagCtx.index,
							// Test is satisfied, so render content on current context. We call tagCtx.render() rather than return undefined
							// (which would also render the tmpl/content on the current context but would iterate if it is an array)
							tagCtx.render(tagCtx.view, true)); // no arg, so renders against parentView.data
				return ret;
			},
			flow: true
		},
		"for": {
			render: function(val) {
				// This function is called once for {{for}} and once for each {{else}}.
				// We will use the tag.rendering object for carrying rendering state across the calls.
				var finalElse = !arguments.length,
					value,
					self = this,
					tagCtx = self.tagCtx,
					result = "",
					done = 0;

				if (!self.rendering.done) {
					value = finalElse ? tagCtx.view.data : val; // For the final else, defaults to current data without iteration.
					if (value !== undefined) {
						result += tagCtx.render(value, finalElse); // Iterates except on final else, if data is an array. (Use {{include}} to compose templates without array iteration)
						done += $isArray(value) ? value.length : 1;
					}
					if (self.rendering.done = done) {
						self.selected = tagCtx.index;
					}
					// If nothing was rendered we will look at the next {{else}}. Otherwise, we are done.
				}
				return result;
			},
			flow: true
		},
		props: {
			baseTag: "for",
			dataMap: dataMap(getTargetProps),
			flow: true
		},
		include: {
			flow: true
		},
		"*": {
			// {{* code... }} - Ignored if template.allowCode and $.views.settings.allowCode are false. Otherwise include code in compiled template
			render: retVal,
			flow: true
		},
		":*": {
			// {{:* returnedExpression }} - Ignored if template.allowCode and $.views.settings.allowCode are false. Otherwise include code in compiled template
			render: retVal,
			flow: true
		},
		dbg: $helpers.dbg = $converters.dbg = dbgBreak // Register {{dbg/}}, {{dbg:...}} and ~dbg() to throw and catch, as breakpoints for debugging.
	});

	$converters({
		html: htmlEncode,
		attr: htmlEncode, // Includes > encoding since rConvertMarkers in JsViews does not skip > characters in attribute strings
		url: function(text) {
			// URL encoding helper.
			return text != undefined ? encodeURI("" + text) : text === null ? text : ""; // null returns null, e.g. to remove attribute. undefined returns ""
		}
	});
}
//========================== Define default delimiters ==========================
$subSettings = $sub.settings;
$viewsSettings.delimiters("{{", "}}", "^");

if (jsrToJq) { // Moving from jsrender namespace to jQuery namepace - copy over the stored items (templates, converters, helpers...)
	jsr.views.sub._jq($);
}
return $ || jsr;
}, window));

},{}],12:[function(require,module,exports){
class Loading {
	constructor() {
		this.$dom = $(`<div class="loading-mask"><div class="loading-text"></div></div>`)
		this.$dom.hide().appendTo("body")
	}

	show(message = "") {
		$(".loading-text",this.$dom).html(message)
		this.$dom.fadeIn()
	}

	hide() {
		this.$dom.fadeOut()
	}
}

module.exports = Loading
},{}],13:[function(require,module,exports){
const Q 		= require('q')
const Eventer 	= require('./eventer')
const context 	= require('./context')
class Network extends Eventer {
	constructor() {
		super()
		this.$base_url = "http://kecheng.runsnailrun.com"
		this.__restore_token()
	}

	__restore_token() {
		this.$token = ""
		let result = context.storage.get("DYW_TOKEN")
		if (result) {
			this.$token = result
		}
		result = context.storage.get("DYW_SIG_TOKEN")
		if (result) {
			this.$sigtoken = result
		}
	}

	__request(url, data, method="get") {
		return Q.Promise((resolve, reject)=>{
			$.ajax(this.$base_url + url, {
				headers: { 
					"Authorization": `Bearer ${this.$token}`,
					"Accept" : "application/json"
				},
				method : method.toUpperCase(),
				data,
				dataType: "json",
				statusCode: {
					403: ()=>{
						this.trigger("LOGIN_NEEDED")
					}
				},
				success: function(res){
					resolve(res.data)
				},
				error: function(res) {
					if (res.responseJSON) {
						alert(res.responseJSON.message)
					} else {
						alert("啊哦，网络出问题啦~")
					}
					reject()
				}
			})
		})
	}

	set token(token) {
		context.storage.store("DYW_TOKEN",token)
		this.$token = token
	}

	get token() {
		return this.$token
	}

	set sigtoken(sigtoken) {
		context.storage.store("DYW_SIG_TOKEN",sigtoken)
		this.$sigtoken = sigtoken
	}

	get sigtoken() {
		return this.$sigtoken
	}

	/**
	 * 用户登录
	 * @param {*} data 
	 */
	login(data) {
		return this.__request("/user/login", data)
	}

	/**
	 * 获取课程安排
	 * @param {*} date 
	 */
	lessons(date) {
		return this.__request("/room/lesson_date", {
			client_type: "app",
			date
		})
	}

	/**
	 * 获取当日课程
	 */
	lessonsByDate(date) {
		return this.__request("/room/lesson_list", {
			client_type: "app",
			date
		})
	}

	/**
	 * 获取房间数据
	 * @param {*} channel_id 
	 */
	getRoomInfo(channel_id) {
		return this.__request("/room/channel_key", {
			channel_id
		}, "post")
	}
}

module.exports = new Network
},{"./context":8,"./eventer":9,"q":18}],14:[function(require,module,exports){
let AgoraRTC 	= require("./AgoraRTCSDK-2.2.0")
const context 	= require("./context")
const Const 	= require("../const")
const Q 		= require("q")
const Eventer   = require('./eventer')
class Room extends Eventer {
	constructor() {
		super()
		this.__init()
		this.$streams_list 	= []
		this.$streams_hash 	= {}
	}

	__add_stream(stream) {
		let id = stream.getId()
		let index = this.$streams_hash[id]
		if (index == undefined) {
			this.$streams_list.push(stream)
			this.$streams_hash[id] = this.$streams_list.length-1
		} else {
			this.$streams_list[index] = stream
		}
	}

	__remove_stream(stream) {
		let id = stream.getId()
		let index = this.$streams_hash[id]
		this.$streams_list.splice(index,1)
		this.$streams_hash = {}
		this.$streams_list.forEach((item,index)=>{
			this.$streams_hash[item.getId()] = index
		})
	}

	__get_stream(id) {
		let index = this.$streams_hash[id]
		return this.$streams_list[index]
	}

	__init() {
		return Q.Promise((resolve, reject)=>{
			if (this.$inited) {
				resolve()
			} else {
				AgoraRTC.getDevices(function (devices) {
					let audio = null, video = null
					devices.forEach((item)=>{
						if (item.label == "Built-in Microphone" && item.kind == "audioinput") {
							audio = item.deviceId
						} else if (item.label == "FaceTime HD Camera" && item.kind == "videoinput") {
							video = item.deviceId
						}
					})
					context.video_device_id = video
					context.audio_device_id = audio
				})
				var client = AgoraRTC.createClient({mode: 'interop'});
				client.init(Const.AGORA_APPID, ()=>{
					this.$inited = true
					resolve()
				}, (error)=>{
					this.$inited = false
					console.log("error",error)
					reject()
				});
				this.$client = client
			}
		})
	}

	__start_stream() {
		this.$client.on('error', (err)=>{
			console.log("Got error msg:", err.reason);
			if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
				this.$client.renewChannelKey(channelKey, ()=>{
					console.log("Renew channel key successfully");
				}, function(err){
					console.log("Renew channel key failed: ", err);
				});
			}
		});
	
		this.$client.on('stream-added', (evt)=>{
			var stream = evt.stream;
			console.log("New stream added: " + stream.getId());
			console.log("Subscribe ", stream);
			console.log(this.$client.remoteVideoStreamTypes)
			// this.$client.setRemoteVideoStreamType(stream, 1);
			this.$client.subscribe(stream, (err)=>{
				console.log("Subscribe stream failed", err);
			});
		});
	
		this.$client.on('stream-subscribed', (evt)=>{
			var stream = evt.stream;
			console.log("Subscribe remote stream successfully: " + stream.getId());
			this.trigger("NEW_STREAM", stream)
			this.__add_stream(stream)
		});
	
		this.$client.on('stream-removed', (evt)=>{
			var stream = evt.stream;
			stream.stop();
			this.trigger("REMOVE_STREAM", stream)
			this.__remove_stream(stream)
			console.log("Remote stream is removed " + stream.getId());
		});
	
		this.$client.on('peer-leave', (evt)=>{
			var stream = evt.stream;
			if (stream) {
				stream.stop();
				this.trigger("REMOVE_STREAM", stream)
				this.__remove_stream(stream)
				console.log(evt.uid + " leaved from this channel");
			}
		});
        let stream = AgoraRTC.createStream({
			streamID	: context.dmg.userinfo.id, 
			audio 		: true, 
			cameraId	: context.video_device_id, 
			microphoneId: context.audio_device_id, 
			video		: true, screen: false
		});
		stream.setVideoProfile(Const.VIDEO_QUALITY);

        stream.on("accessAllowed", function() {
        });
        stream.on("accessDenied", function() {
			alert("无法访问您的摄像头或麦克风")
        });

        stream.init(()=>{
			stream.play('master-video');

			this.$client.publish(stream, function (err) {
				alert("无法连接您的视频流，请确定您的网络是否良好。")
			});

			this.$client.on('stream-published', function (evt) {
			});
        }, function (err) {
			alert("无法访问您的摄像头或麦克风")
		});
		this.$local_stream = stream
	}

	start() {
		this.__init().then(()=>{
			this.$client.join(context.room.channel_token, context.course.channel_id, context.dmg.userinfo.id, (uid)=>{
				this.__start_stream()
			}, (error)=>{
				console.log("join error",error)
			});
		},()=>{}).done()
	}

	leave() {
		this.$client.leave(()=>{
			this.trigger("LEAVE_ROOM", this.$client)
			console.log("client leaves channel");
		}, (err)=>{
			console.log("client leave failed ", err);
		});
		this.$client.unpublish(this.$local_stream, (err)=>{
			console.log("unpublish stream failed ", err)
		})
		this.$local_stream.stop()
		this.$local_stream.close()
		this.$streams_list.forEach((stream)=>{
			this.$client.unpublish(stream, (err)=>{
				console.log("unpublish stream failed ", err)
			})
			stream.stop()
			stream.close()
		})
	}
}

module.exports = new Room
},{"../const":1,"./AgoraRTCSDK-2.2.0":2,"./context":8,"./eventer":9,"q":18}],15:[function(require,module,exports){
/**
 * 工具函数，将数组以key指定的键转换为hash对象
 * 用于快速查找使用
 * @param {*} source 
 * @param {*} key 
 */

function Flatten(source, key="id") {
	let obj = {};
	for (var i=0,len=source.length;i<len;i++) {
		let value = source[i][key];
		if (typeof value != "undefined") {
			source[i].$index = i;
			obj[value] = source[i];
		}
	}
	return obj;
}

/**
 * 链表简单实现
 * 用于数组的快速查找，检索及索引的自动生成
 * 多用于大数据的处理及检索操作
 */
class Serialized {
	constructor(list=[], key="id") {
		this._key  = key;
		this.update(list);
	}

	findByKey(key, value) {
		return this._list.find((item)=>{
			if (item[key] == value) {
				return true;
			}
		});
	}

	data() {
		return this._list.concat();
	}

	first() {
		return this._list[0];
	}

	modify(method, ...params) {
		this._list[method](...params);
		this.update(this._list);
	}

	update(list) {
		if (list instanceof Array) {
			this._list = list;
			this._hash = Flatten(list, this._key);
		}
	}

	merge(list) {
		if (!list instanceof Array) {return;}
		list.forEach((item)=>{
			let _key  = item[this._key];
			let _item = this.get(_key);
			if (_item) {
				this._list[_item.$index] = item;
			} else {
				this._list.push(item);
			}
		});
		this._hash = Flatten(this._list, this._key);
	}

	remove(key) {
		let _item = this.get(key);
		if (_item) {
			this._list.splice(_item.$index,1)
			this._hash = Flatten(this._list, this._key);
		}
	}

	get(key) {
		return this._hash[key];
	}

	next(key) {
		let value = this.get(key);
		if (!value) return;
		let index = value.$index;
		return this._list[index+1];
	}

	prev(key) {
		let value = this.get(key);
		if (!value) return;
		let index = value.$index;
		return this._list[index-1];
	}

	index(i) {
		return this._list[i];
	}
}

module.exports = Serialized
},{}],16:[function(require,module,exports){
require('./AgoraSig-1.3.0')
const Const   = require('../const')
const context = require('./context')
const net 	  = require('./network')
const Q 	  = require('q')
const Eventer = require('./eventer')
class Signalize extends Eventer {
	constructor() {
		super()
		this.$signal 	= Signal(Const.AGORA_APPID)
		this.$inited    = false
		this.$queue 	= []
	}

	init() {
		return Q.Promise((resolve, reject)=>{
			if (this.$inited) {
				resolve();
			} else {
				// 傻逼的sdk，accout参数必须为字符串
				this.$session = this.$signal.login(context.dmg.userinfo.id+"", net.sigtoken)
				this.$session.onLoginSuccess = ()=>{
					this.$inited = true
					resolve()
					console.log("session logined...")
				}
				this.$session.onLoginFailed = (ecode)=>{
					if (ecode == Const.LOGIN_E_NET) {
						setTimeout(()=>{
							this.__init().then(resolve, reject).done()
						},2000)
					}
					console.log("session login failed...",ecode)
				}
				this.$session.onLogout = (ecode)=>{
					if (ecode == Const.LOGOUT_E_NET) {
						setTimeout(()=>{
							this.__init().then(resolve, reject).done()
						},2000)
					}
					console.log("session logout",ecode)
				}
				this.$session.onError = (ecode)=>{
					if (ecode == Const.GENERAL_E_NOT_LOGIN) {
						setTimeout(()=>{
							this.__init().then(resolve, reject).done()
						},2000)
					}
					console.log("session error",ecode)
				}
			}
		})
	}

	join() {
		this.init().then(()=>{
			let channel = this.$session.channelJoin(context.course.channel_id)
			channel.onChannelJoined = ()=>{
				// 上报自己的用户信息
				this.$channel = channel
				this.$channel.channelSetAttr("data", JSON.stringify(context.dmg.userinfo), ()=>{
					console.log("set user info success", context.dmg.userinfo)
					this.trigger("CHANNEL_JOINED", channel)
					// 发送消息队列中的消息
					this.$queue.forEach((message)=>{
						this.send(message)
					})
					this.$queue = []
				})
			}
			channel.onChannelJoinFailed = ()=>{
				console.log("channel join failed, retry after 2s")
				setTimeout(()=>{
					this.join()
				}, 2000)
			}
			channel.onChannelUserJoined = (account, uid)=>{
				// 获取用户信息
				this.$session.invoke("io.agora.signal.user_get_attr", {
					account, name: "data"
				}, (event, res)=>{
					let userinfo = JSON.parse(res.value)
					console.log("new user joined...",userinfo)
					context.dmg.addUser(userinfo)
					this.trigger("CHANNEL_NEW_USER", userinfo)
				})
			}
			channel.onChannelUserLeaved = (account) => {
				context.dmg.removeUser(account)
				this.trigger("CHANNEL_USER_LEAVE", account)
			}
			channel.onMessageChannelReceive = (account, uid, msg)=>{
				console.log("receive new message", msg)
				let message = JSON.parse(msg)
				let data    = {
					from: account,
					message
				}
				this.trigger("NEW_MESSAGE", data)
			};
		},()=>{})
	}

	leave() {
		this.$channel.channelLeave(()=>{
			this.trigger("CHANNEL_LEAVED", this.$channel)
			this.$channel = null
		})
	}

	send(message) {
		message = JSON.stringify(message)
		if (this.$channel) {
			this.$channel.messageChannelSend(message, ()=>{
				console.log("消息发送成功")
			})
		} else {
			this.$queue.push(message)
		}
	}
}

module.exports = new Signalize
},{"../const":1,"./AgoraSig-1.3.0":3,"./context":8,"./eventer":9,"./network":13,"q":18}],17:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],18:[function(require,module,exports){
(function (process){
// vim:ts=4:sts=4:sw=4:
/*!
 *
 * Copyright 2009-2017 Kris Kowal under the terms of the MIT
 * license found at https://github.com/kriskowal/q/blob/v1/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

(function (definition) {
    "use strict";

    // This file will function properly as a <script> tag, or a module
    // using CommonJS and NodeJS or RequireJS module formats.  In
    // Common/Node/RequireJS, the module exports the Q API and when
    // executed as a simple <script>, it creates a Q global instead.

    // Montage Require
    if (typeof bootstrap === "function") {
        bootstrap("promise", definition);

    // CommonJS
    } else if (typeof exports === "object" && typeof module === "object") {
        module.exports = definition();

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
        define(definition);

    // SES (Secure EcmaScript)
    } else if (typeof ses !== "undefined") {
        if (!ses.ok()) {
            return;
        } else {
            ses.makeQ = definition;
        }

    // <script>
    } else if (typeof window !== "undefined" || typeof self !== "undefined") {
        // Prefer window over self for add-on scripts. Use self for
        // non-windowed contexts.
        var global = typeof window !== "undefined" ? window : self;

        // Get the `window` object, save the previous Q global
        // and initialize Q as a global.
        var previousQ = global.Q;
        global.Q = definition();

        // Add a noConflict function so Q can be removed from the
        // global namespace.
        global.Q.noConflict = function () {
            global.Q = previousQ;
            return this;
        };

    } else {
        throw new Error("This environment was not anticipated by Q. Please file a bug.");
    }

})(function () {
"use strict";

var hasStacks = false;
try {
    throw new Error();
} catch (e) {
    hasStacks = !!e.stack;
}

// All code after this point will be filtered from stack traces reported
// by Q.
var qStartingLine = captureLine();
var qFileName;

// shims

// used for fallback in "allResolved"
var noop = function () {};

// Use the fastest possible means to execute a task in a future turn
// of the event loop.
var nextTick =(function () {
    // linked list of tasks (single, with head node)
    var head = {task: void 0, next: null};
    var tail = head;
    var flushing = false;
    var requestTick = void 0;
    var isNodeJS = false;
    // queue for late tasks, used by unhandled rejection tracking
    var laterQueue = [];

    function flush() {
        /* jshint loopfunc: true */
        var task, domain;

        while (head.next) {
            head = head.next;
            task = head.task;
            head.task = void 0;
            domain = head.domain;

            if (domain) {
                head.domain = void 0;
                domain.enter();
            }
            runSingle(task, domain);

        }
        while (laterQueue.length) {
            task = laterQueue.pop();
            runSingle(task);
        }
        flushing = false;
    }
    // runs a single function in the async queue
    function runSingle(task, domain) {
        try {
            task();

        } catch (e) {
            if (isNodeJS) {
                // In node, uncaught exceptions are considered fatal errors.
                // Re-throw them synchronously to interrupt flushing!

                // Ensure continuation if the uncaught exception is suppressed
                // listening "uncaughtException" events (as domains does).
                // Continue in next event to avoid tick recursion.
                if (domain) {
                    domain.exit();
                }
                setTimeout(flush, 0);
                if (domain) {
                    domain.enter();
                }

                throw e;

            } else {
                // In browsers, uncaught exceptions are not fatal.
                // Re-throw them asynchronously to avoid slow-downs.
                setTimeout(function () {
                    throw e;
                }, 0);
            }
        }

        if (domain) {
            domain.exit();
        }
    }

    nextTick = function (task) {
        tail = tail.next = {
            task: task,
            domain: isNodeJS && process.domain,
            next: null
        };

        if (!flushing) {
            flushing = true;
            requestTick();
        }
    };

    if (typeof process === "object" &&
        process.toString() === "[object process]" && process.nextTick) {
        // Ensure Q is in a real Node environment, with a `process.nextTick`.
        // To see through fake Node environments:
        // * Mocha test runner - exposes a `process` global without a `nextTick`
        // * Browserify - exposes a `process.nexTick` function that uses
        //   `setTimeout`. In this case `setImmediate` is preferred because
        //    it is faster. Browserify's `process.toString()` yields
        //   "[object Object]", while in a real Node environment
        //   `process.toString()` yields "[object process]".
        isNodeJS = true;

        requestTick = function () {
            process.nextTick(flush);
        };

    } else if (typeof setImmediate === "function") {
        // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
        if (typeof window !== "undefined") {
            requestTick = setImmediate.bind(window, flush);
        } else {
            requestTick = function () {
                setImmediate(flush);
            };
        }

    } else if (typeof MessageChannel !== "undefined") {
        // modern browsers
        // http://www.nonblocking.io/2011/06/windownexttick.html
        var channel = new MessageChannel();
        // At least Safari Version 6.0.5 (8536.30.1) intermittently cannot create
        // working message ports the first time a page loads.
        channel.port1.onmessage = function () {
            requestTick = requestPortTick;
            channel.port1.onmessage = flush;
            flush();
        };
        var requestPortTick = function () {
            // Opera requires us to provide a message payload, regardless of
            // whether we use it.
            channel.port2.postMessage(0);
        };
        requestTick = function () {
            setTimeout(flush, 0);
            requestPortTick();
        };

    } else {
        // old browsers
        requestTick = function () {
            setTimeout(flush, 0);
        };
    }
    // runs a task after all other tasks have been run
    // this is useful for unhandled rejection tracking that needs to happen
    // after all `then`d tasks have been run.
    nextTick.runAfter = function (task) {
        laterQueue.push(task);
        if (!flushing) {
            flushing = true;
            requestTick();
        }
    };
    return nextTick;
})();

// Attempt to make generics safe in the face of downstream
// modifications.
// There is no situation where this is necessary.
// If you need a security guarantee, these primordials need to be
// deeply frozen anyway, and if you don’t need a security guarantee,
// this is just plain paranoid.
// However, this **might** have the nice side-effect of reducing the size of
// the minified code by reducing x.call() to merely x()
// See Mark Miller’s explanation of what this does.
// http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming
var call = Function.call;
function uncurryThis(f) {
    return function () {
        return call.apply(f, arguments);
    };
}
// This is equivalent, but slower:
// uncurryThis = Function_bind.bind(Function_bind.call);
// http://jsperf.com/uncurrythis

var array_slice = uncurryThis(Array.prototype.slice);

var array_reduce = uncurryThis(
    Array.prototype.reduce || function (callback, basis) {
        var index = 0,
            length = this.length;
        // concerning the initial value, if one is not provided
        if (arguments.length === 1) {
            // seek to the first value in the array, accounting
            // for the possibility that is is a sparse array
            do {
                if (index in this) {
                    basis = this[index++];
                    break;
                }
                if (++index >= length) {
                    throw new TypeError();
                }
            } while (1);
        }
        // reduce
        for (; index < length; index++) {
            // account for the possibility that the array is sparse
            if (index in this) {
                basis = callback(basis, this[index], index);
            }
        }
        return basis;
    }
);

var array_indexOf = uncurryThis(
    Array.prototype.indexOf || function (value) {
        // not a very good shim, but good enough for our one use of it
        for (var i = 0; i < this.length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    }
);

var array_map = uncurryThis(
    Array.prototype.map || function (callback, thisp) {
        var self = this;
        var collect = [];
        array_reduce(self, function (undefined, value, index) {
            collect.push(callback.call(thisp, value, index, self));
        }, void 0);
        return collect;
    }
);

var object_create = Object.create || function (prototype) {
    function Type() { }
    Type.prototype = prototype;
    return new Type();
};

var object_defineProperty = Object.defineProperty || function (obj, prop, descriptor) {
    obj[prop] = descriptor.value;
    return obj;
};

var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);

var object_keys = Object.keys || function (object) {
    var keys = [];
    for (var key in object) {
        if (object_hasOwnProperty(object, key)) {
            keys.push(key);
        }
    }
    return keys;
};

var object_toString = uncurryThis(Object.prototype.toString);

function isObject(value) {
    return value === Object(value);
}

// generator related shims

// FIXME: Remove this function once ES6 generators are in SpiderMonkey.
function isStopIteration(exception) {
    return (
        object_toString(exception) === "[object StopIteration]" ||
        exception instanceof QReturnValue
    );
}

// FIXME: Remove this helper and Q.return once ES6 generators are in
// SpiderMonkey.
var QReturnValue;
if (typeof ReturnValue !== "undefined") {
    QReturnValue = ReturnValue;
} else {
    QReturnValue = function (value) {
        this.value = value;
    };
}

// long stack traces

var STACK_JUMP_SEPARATOR = "From previous event:";

function makeStackTraceLong(error, promise) {
    // If possible, transform the error stack trace by removing Node and Q
    // cruft, then concatenating with the stack trace of `promise`. See #57.
    if (hasStacks &&
        promise.stack &&
        typeof error === "object" &&
        error !== null &&
        error.stack
    ) {
        var stacks = [];
        for (var p = promise; !!p; p = p.source) {
            if (p.stack && (!error.__minimumStackCounter__ || error.__minimumStackCounter__ > p.stackCounter)) {
                object_defineProperty(error, "__minimumStackCounter__", {value: p.stackCounter, configurable: true});
                stacks.unshift(p.stack);
            }
        }
        stacks.unshift(error.stack);

        var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
        var stack = filterStackString(concatedStacks);
        object_defineProperty(error, "stack", {value: stack, configurable: true});
    }
}

function filterStackString(stackString) {
    var lines = stackString.split("\n");
    var desiredLines = [];
    for (var i = 0; i < lines.length; ++i) {
        var line = lines[i];

        if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
            desiredLines.push(line);
        }
    }
    return desiredLines.join("\n");
}

function isNodeFrame(stackLine) {
    return stackLine.indexOf("(module.js:") !== -1 ||
           stackLine.indexOf("(node.js:") !== -1;
}

function getFileNameAndLineNumber(stackLine) {
    // Named functions: "at functionName (filename:lineNumber:columnNumber)"
    // In IE10 function name can have spaces ("Anonymous function") O_o
    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
    if (attempt1) {
        return [attempt1[1], Number(attempt1[2])];
    }

    // Anonymous functions: "at filename:lineNumber:columnNumber"
    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
    if (attempt2) {
        return [attempt2[1], Number(attempt2[2])];
    }

    // Firefox style: "function@filename:lineNumber or @filename:lineNumber"
    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
    if (attempt3) {
        return [attempt3[1], Number(attempt3[2])];
    }
}

function isInternalFrame(stackLine) {
    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);

    if (!fileNameAndLineNumber) {
        return false;
    }

    var fileName = fileNameAndLineNumber[0];
    var lineNumber = fileNameAndLineNumber[1];

    return fileName === qFileName &&
        lineNumber >= qStartingLine &&
        lineNumber <= qEndingLine;
}

// discover own file name and line number range for filtering stack
// traces
function captureLine() {
    if (!hasStacks) {
        return;
    }

    try {
        throw new Error();
    } catch (e) {
        var lines = e.stack.split("\n");
        var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
        var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
        if (!fileNameAndLineNumber) {
            return;
        }

        qFileName = fileNameAndLineNumber[0];
        return fileNameAndLineNumber[1];
    }
}

function deprecate(callback, name, alternative) {
    return function () {
        if (typeof console !== "undefined" &&
            typeof console.warn === "function") {
            console.warn(name + " is deprecated, use " + alternative +
                         " instead.", new Error("").stack);
        }
        return callback.apply(callback, arguments);
    };
}

// end of shims
// beginning of real work

/**
 * Constructs a promise for an immediate reference, passes promises through, or
 * coerces promises from different systems.
 * @param value immediate reference or promise
 */
function Q(value) {
    // If the object is already a Promise, return it directly.  This enables
    // the resolve function to both be used to created references from objects,
    // but to tolerably coerce non-promises to promises.
    if (value instanceof Promise) {
        return value;
    }

    // assimilate thenables
    if (isPromiseAlike(value)) {
        return coerce(value);
    } else {
        return fulfill(value);
    }
}
Q.resolve = Q;

/**
 * Performs a task in a future turn of the event loop.
 * @param {Function} task
 */
Q.nextTick = nextTick;

/**
 * Controls whether or not long stack traces will be on
 */
Q.longStackSupport = false;

/**
 * The counter is used to determine the stopping point for building
 * long stack traces. In makeStackTraceLong we walk backwards through
 * the linked list of promises, only stacks which were created before
 * the rejection are concatenated.
 */
var longStackCounter = 1;

// enable long stacks if Q_DEBUG is set
if (typeof process === "object" && process && process.env && process.env.Q_DEBUG) {
    Q.longStackSupport = true;
}

/**
 * Constructs a {promise, resolve, reject} object.
 *
 * `resolve` is a callback to invoke with a more resolved value for the
 * promise. To fulfill the promise, invoke `resolve` with any value that is
 * not a thenable. To reject the promise, invoke `resolve` with a rejected
 * thenable, or invoke `reject` with the reason directly. To resolve the
 * promise to another thenable, thus putting it in the same state, invoke
 * `resolve` with that other thenable.
 */
Q.defer = defer;
function defer() {
    // if "messages" is an "Array", that indicates that the promise has not yet
    // been resolved.  If it is "undefined", it has been resolved.  Each
    // element of the messages array is itself an array of complete arguments to
    // forward to the resolved promise.  We coerce the resolution value to a
    // promise using the `resolve` function because it handles both fully
    // non-thenable values and other thenables gracefully.
    var messages = [], progressListeners = [], resolvedPromise;

    var deferred = object_create(defer.prototype);
    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, operands) {
        var args = array_slice(arguments);
        if (messages) {
            messages.push(args);
            if (op === "when" && operands[1]) { // progress operand
                progressListeners.push(operands[1]);
            }
        } else {
            Q.nextTick(function () {
                resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
            });
        }
    };

    // XXX deprecated
    promise.valueOf = function () {
        if (messages) {
            return promise;
        }
        var nearerValue = nearer(resolvedPromise);
        if (isPromise(nearerValue)) {
            resolvedPromise = nearerValue; // shorten chain
        }
        return nearerValue;
    };

    promise.inspect = function () {
        if (!resolvedPromise) {
            return { state: "pending" };
        }
        return resolvedPromise.inspect();
    };

    if (Q.longStackSupport && hasStacks) {
        try {
            throw new Error();
        } catch (e) {
            // NOTE: don't try to use `Error.captureStackTrace` or transfer the
            // accessor around; that causes memory leaks as per GH-111. Just
            // reify the stack trace as a string ASAP.
            //
            // At the same time, cut off the first line; it's always just
            // "[object Promise]\n", as per the `toString`.
            promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
            promise.stackCounter = longStackCounter++;
        }
    }

    // NOTE: we do the checks for `resolvedPromise` in each method, instead of
    // consolidating them into `become`, since otherwise we'd create new
    // promises with the lines `become(whatever(value))`. See e.g. GH-252.

    function become(newPromise) {
        resolvedPromise = newPromise;

        if (Q.longStackSupport && hasStacks) {
            // Only hold a reference to the new promise if long stacks
            // are enabled to reduce memory usage
            promise.source = newPromise;
        }

        array_reduce(messages, function (undefined, message) {
            Q.nextTick(function () {
                newPromise.promiseDispatch.apply(newPromise, message);
            });
        }, void 0);

        messages = void 0;
        progressListeners = void 0;
    }

    deferred.promise = promise;
    deferred.resolve = function (value) {
        if (resolvedPromise) {
            return;
        }

        become(Q(value));
    };

    deferred.fulfill = function (value) {
        if (resolvedPromise) {
            return;
        }

        become(fulfill(value));
    };
    deferred.reject = function (reason) {
        if (resolvedPromise) {
            return;
        }

        become(reject(reason));
    };
    deferred.notify = function (progress) {
        if (resolvedPromise) {
            return;
        }

        array_reduce(progressListeners, function (undefined, progressListener) {
            Q.nextTick(function () {
                progressListener(progress);
            });
        }, void 0);
    };

    return deferred;
}

/**
 * Creates a Node-style callback that will resolve or reject the deferred
 * promise.
 * @returns a nodeback
 */
defer.prototype.makeNodeResolver = function () {
    var self = this;
    return function (error, value) {
        if (error) {
            self.reject(error);
        } else if (arguments.length > 2) {
            self.resolve(array_slice(arguments, 1));
        } else {
            self.resolve(value);
        }
    };
};

/**
 * @param resolver {Function} a function that returns nothing and accepts
 * the resolve, reject, and notify functions for a deferred.
 * @returns a promise that may be resolved with the given resolve and reject
 * functions, or rejected by a thrown exception in resolver
 */
Q.Promise = promise; // ES6
Q.promise = promise;
function promise(resolver) {
    if (typeof resolver !== "function") {
        throw new TypeError("resolver must be a function.");
    }
    var deferred = defer();
    try {
        resolver(deferred.resolve, deferred.reject, deferred.notify);
    } catch (reason) {
        deferred.reject(reason);
    }
    return deferred.promise;
}

promise.race = race; // ES6
promise.all = all; // ES6
promise.reject = reject; // ES6
promise.resolve = Q; // ES6

// XXX experimental.  This method is a way to denote that a local value is
// serializable and should be immediately dispatched to a remote upon request,
// instead of passing a reference.
Q.passByCopy = function (object) {
    //freeze(object);
    //passByCopies.set(object, true);
    return object;
};

Promise.prototype.passByCopy = function () {
    //freeze(object);
    //passByCopies.set(object, true);
    return this;
};

/**
 * If two promises eventually fulfill to the same value, promises that value,
 * but otherwise rejects.
 * @param x {Any*}
 * @param y {Any*}
 * @returns {Any*} a promise for x and y if they are the same, but a rejection
 * otherwise.
 *
 */
Q.join = function (x, y) {
    return Q(x).join(y);
};

Promise.prototype.join = function (that) {
    return Q([this, that]).spread(function (x, y) {
        if (x === y) {
            // TODO: "===" should be Object.is or equiv
            return x;
        } else {
            throw new Error("Q can't join: not the same: " + x + " " + y);
        }
    });
};

/**
 * Returns a promise for the first of an array of promises to become settled.
 * @param answers {Array[Any*]} promises to race
 * @returns {Any*} the first promise to be settled
 */
Q.race = race;
function race(answerPs) {
    return promise(function (resolve, reject) {
        // Switch to this once we can assume at least ES5
        // answerPs.forEach(function (answerP) {
        //     Q(answerP).then(resolve, reject);
        // });
        // Use this in the meantime
        for (var i = 0, len = answerPs.length; i < len; i++) {
            Q(answerPs[i]).then(resolve, reject);
        }
    });
}

Promise.prototype.race = function () {
    return this.then(Q.race);
};

/**
 * Constructs a Promise with a promise descriptor object and optional fallback
 * function.  The descriptor contains methods like when(rejected), get(name),
 * set(name, value), post(name, args), and delete(name), which all
 * return either a value, a promise for a value, or a rejection.  The fallback
 * accepts the operation name, a resolver, and any further arguments that would
 * have been forwarded to the appropriate method above had a method been
 * provided with the proper name.  The API makes no guarantees about the nature
 * of the returned object, apart from that it is usable whereever promises are
 * bought and sold.
 */
Q.makePromise = Promise;
function Promise(descriptor, fallback, inspect) {
    if (fallback === void 0) {
        fallback = function (op) {
            return reject(new Error(
                "Promise does not support operation: " + op
            ));
        };
    }
    if (inspect === void 0) {
        inspect = function () {
            return {state: "unknown"};
        };
    }

    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, args) {
        var result;
        try {
            if (descriptor[op]) {
                result = descriptor[op].apply(promise, args);
            } else {
                result = fallback.call(promise, op, args);
            }
        } catch (exception) {
            result = reject(exception);
        }
        if (resolve) {
            resolve(result);
        }
    };

    promise.inspect = inspect;

    // XXX deprecated `valueOf` and `exception` support
    if (inspect) {
        var inspected = inspect();
        if (inspected.state === "rejected") {
            promise.exception = inspected.reason;
        }

        promise.valueOf = function () {
            var inspected = inspect();
            if (inspected.state === "pending" ||
                inspected.state === "rejected") {
                return promise;
            }
            return inspected.value;
        };
    }

    return promise;
}

Promise.prototype.toString = function () {
    return "[object Promise]";
};

Promise.prototype.then = function (fulfilled, rejected, progressed) {
    var self = this;
    var deferred = defer();
    var done = false;   // ensure the untrusted promise makes at most a
                        // single call to one of the callbacks

    function _fulfilled(value) {
        try {
            return typeof fulfilled === "function" ? fulfilled(value) : value;
        } catch (exception) {
            return reject(exception);
        }
    }

    function _rejected(exception) {
        if (typeof rejected === "function") {
            makeStackTraceLong(exception, self);
            try {
                return rejected(exception);
            } catch (newException) {
                return reject(newException);
            }
        }
        return reject(exception);
    }

    function _progressed(value) {
        return typeof progressed === "function" ? progressed(value) : value;
    }

    Q.nextTick(function () {
        self.promiseDispatch(function (value) {
            if (done) {
                return;
            }
            done = true;

            deferred.resolve(_fulfilled(value));
        }, "when", [function (exception) {
            if (done) {
                return;
            }
            done = true;

            deferred.resolve(_rejected(exception));
        }]);
    });

    // Progress propagator need to be attached in the current tick.
    self.promiseDispatch(void 0, "when", [void 0, function (value) {
        var newValue;
        var threw = false;
        try {
            newValue = _progressed(value);
        } catch (e) {
            threw = true;
            if (Q.onerror) {
                Q.onerror(e);
            } else {
                throw e;
            }
        }

        if (!threw) {
            deferred.notify(newValue);
        }
    }]);

    return deferred.promise;
};

Q.tap = function (promise, callback) {
    return Q(promise).tap(callback);
};

/**
 * Works almost like "finally", but not called for rejections.
 * Original resolution value is passed through callback unaffected.
 * Callback may return a promise that will be awaited for.
 * @param {Function} callback
 * @returns {Q.Promise}
 * @example
 * doSomething()
 *   .then(...)
 *   .tap(console.log)
 *   .then(...);
 */
Promise.prototype.tap = function (callback) {
    callback = Q(callback);

    return this.then(function (value) {
        return callback.fcall(value).thenResolve(value);
    });
};

/**
 * Registers an observer on a promise.
 *
 * Guarantees:
 *
 * 1. that fulfilled and rejected will be called only once.
 * 2. that either the fulfilled callback or the rejected callback will be
 *    called, but not both.
 * 3. that fulfilled and rejected will not be called in this turn.
 *
 * @param value      promise or immediate reference to observe
 * @param fulfilled  function to be called with the fulfilled value
 * @param rejected   function to be called with the rejection exception
 * @param progressed function to be called on any progress notifications
 * @return promise for the return value from the invoked callback
 */
Q.when = when;
function when(value, fulfilled, rejected, progressed) {
    return Q(value).then(fulfilled, rejected, progressed);
}

Promise.prototype.thenResolve = function (value) {
    return this.then(function () { return value; });
};

Q.thenResolve = function (promise, value) {
    return Q(promise).thenResolve(value);
};

Promise.prototype.thenReject = function (reason) {
    return this.then(function () { throw reason; });
};

Q.thenReject = function (promise, reason) {
    return Q(promise).thenReject(reason);
};

/**
 * If an object is not a promise, it is as "near" as possible.
 * If a promise is rejected, it is as "near" as possible too.
 * If it’s a fulfilled promise, the fulfillment value is nearer.
 * If it’s a deferred promise and the deferred has been resolved, the
 * resolution is "nearer".
 * @param object
 * @returns most resolved (nearest) form of the object
 */

// XXX should we re-do this?
Q.nearer = nearer;
function nearer(value) {
    if (isPromise(value)) {
        var inspected = value.inspect();
        if (inspected.state === "fulfilled") {
            return inspected.value;
        }
    }
    return value;
}

/**
 * @returns whether the given object is a promise.
 * Otherwise it is a fulfilled value.
 */
Q.isPromise = isPromise;
function isPromise(object) {
    return object instanceof Promise;
}

Q.isPromiseAlike = isPromiseAlike;
function isPromiseAlike(object) {
    return isObject(object) && typeof object.then === "function";
}

/**
 * @returns whether the given object is a pending promise, meaning not
 * fulfilled or rejected.
 */
Q.isPending = isPending;
function isPending(object) {
    return isPromise(object) && object.inspect().state === "pending";
}

Promise.prototype.isPending = function () {
    return this.inspect().state === "pending";
};

/**
 * @returns whether the given object is a value or fulfilled
 * promise.
 */
Q.isFulfilled = isFulfilled;
function isFulfilled(object) {
    return !isPromise(object) || object.inspect().state === "fulfilled";
}

Promise.prototype.isFulfilled = function () {
    return this.inspect().state === "fulfilled";
};

/**
 * @returns whether the given object is a rejected promise.
 */
Q.isRejected = isRejected;
function isRejected(object) {
    return isPromise(object) && object.inspect().state === "rejected";
}

Promise.prototype.isRejected = function () {
    return this.inspect().state === "rejected";
};

//// BEGIN UNHANDLED REJECTION TRACKING

// This promise library consumes exceptions thrown in handlers so they can be
// handled by a subsequent promise.  The exceptions get added to this array when
// they are created, and removed when they are handled.  Note that in ES6 or
// shimmed environments, this would naturally be a `Set`.
var unhandledReasons = [];
var unhandledRejections = [];
var reportedUnhandledRejections = [];
var trackUnhandledRejections = true;

function resetUnhandledRejections() {
    unhandledReasons.length = 0;
    unhandledRejections.length = 0;

    if (!trackUnhandledRejections) {
        trackUnhandledRejections = true;
    }
}

function trackRejection(promise, reason) {
    if (!trackUnhandledRejections) {
        return;
    }
    if (typeof process === "object" && typeof process.emit === "function") {
        Q.nextTick.runAfter(function () {
            if (array_indexOf(unhandledRejections, promise) !== -1) {
                process.emit("unhandledRejection", reason, promise);
                reportedUnhandledRejections.push(promise);
            }
        });
    }

    unhandledRejections.push(promise);
    if (reason && typeof reason.stack !== "undefined") {
        unhandledReasons.push(reason.stack);
    } else {
        unhandledReasons.push("(no stack) " + reason);
    }
}

function untrackRejection(promise) {
    if (!trackUnhandledRejections) {
        return;
    }

    var at = array_indexOf(unhandledRejections, promise);
    if (at !== -1) {
        if (typeof process === "object" && typeof process.emit === "function") {
            Q.nextTick.runAfter(function () {
                var atReport = array_indexOf(reportedUnhandledRejections, promise);
                if (atReport !== -1) {
                    process.emit("rejectionHandled", unhandledReasons[at], promise);
                    reportedUnhandledRejections.splice(atReport, 1);
                }
            });
        }
        unhandledRejections.splice(at, 1);
        unhandledReasons.splice(at, 1);
    }
}

Q.resetUnhandledRejections = resetUnhandledRejections;

Q.getUnhandledReasons = function () {
    // Make a copy so that consumers can't interfere with our internal state.
    return unhandledReasons.slice();
};

Q.stopUnhandledRejectionTracking = function () {
    resetUnhandledRejections();
    trackUnhandledRejections = false;
};

resetUnhandledRejections();

//// END UNHANDLED REJECTION TRACKING

/**
 * Constructs a rejected promise.
 * @param reason value describing the failure
 */
Q.reject = reject;
function reject(reason) {
    var rejection = Promise({
        "when": function (rejected) {
            // note that the error has been handled
            if (rejected) {
                untrackRejection(this);
            }
            return rejected ? rejected(reason) : this;
        }
    }, function fallback() {
        return this;
    }, function inspect() {
        return { state: "rejected", reason: reason };
    });

    // Note that the reason has not been handled.
    trackRejection(rejection, reason);

    return rejection;
}

/**
 * Constructs a fulfilled promise for an immediate reference.
 * @param value immediate reference
 */
Q.fulfill = fulfill;
function fulfill(value) {
    return Promise({
        "when": function () {
            return value;
        },
        "get": function (name) {
            return value[name];
        },
        "set": function (name, rhs) {
            value[name] = rhs;
        },
        "delete": function (name) {
            delete value[name];
        },
        "post": function (name, args) {
            // Mark Miller proposes that post with no name should apply a
            // promised function.
            if (name === null || name === void 0) {
                return value.apply(void 0, args);
            } else {
                return value[name].apply(value, args);
            }
        },
        "apply": function (thisp, args) {
            return value.apply(thisp, args);
        },
        "keys": function () {
            return object_keys(value);
        }
    }, void 0, function inspect() {
        return { state: "fulfilled", value: value };
    });
}

/**
 * Converts thenables to Q promises.
 * @param promise thenable promise
 * @returns a Q promise
 */
function coerce(promise) {
    var deferred = defer();
    Q.nextTick(function () {
        try {
            promise.then(deferred.resolve, deferred.reject, deferred.notify);
        } catch (exception) {
            deferred.reject(exception);
        }
    });
    return deferred.promise;
}

/**
 * Annotates an object such that it will never be
 * transferred away from this process over any promise
 * communication channel.
 * @param object
 * @returns promise a wrapping of that object that
 * additionally responds to the "isDef" message
 * without a rejection.
 */
Q.master = master;
function master(object) {
    return Promise({
        "isDef": function () {}
    }, function fallback(op, args) {
        return dispatch(object, op, args);
    }, function () {
        return Q(object).inspect();
    });
}

/**
 * Spreads the values of a promised array of arguments into the
 * fulfillment callback.
 * @param fulfilled callback that receives variadic arguments from the
 * promised array
 * @param rejected callback that receives the exception if the promise
 * is rejected.
 * @returns a promise for the return value or thrown exception of
 * either callback.
 */
Q.spread = spread;
function spread(value, fulfilled, rejected) {
    return Q(value).spread(fulfilled, rejected);
}

Promise.prototype.spread = function (fulfilled, rejected) {
    return this.all().then(function (array) {
        return fulfilled.apply(void 0, array);
    }, rejected);
};

/**
 * The async function is a decorator for generator functions, turning
 * them into asynchronous generators.  Although generators are only part
 * of the newest ECMAScript 6 drafts, this code does not cause syntax
 * errors in older engines.  This code should continue to work and will
 * in fact improve over time as the language improves.
 *
 * ES6 generators are currently part of V8 version 3.19 with the
 * --harmony-generators runtime flag enabled.  SpiderMonkey has had them
 * for longer, but under an older Python-inspired form.  This function
 * works on both kinds of generators.
 *
 * Decorates a generator function such that:
 *  - it may yield promises
 *  - execution will continue when that promise is fulfilled
 *  - the value of the yield expression will be the fulfilled value
 *  - it returns a promise for the return value (when the generator
 *    stops iterating)
 *  - the decorated function returns a promise for the return value
 *    of the generator or the first rejected promise among those
 *    yielded.
 *  - if an error is thrown in the generator, it propagates through
 *    every following yield until it is caught, or until it escapes
 *    the generator function altogether, and is translated into a
 *    rejection for the promise returned by the decorated generator.
 */
Q.async = async;
function async(makeGenerator) {
    return function () {
        // when verb is "send", arg is a value
        // when verb is "throw", arg is an exception
        function continuer(verb, arg) {
            var result;

            // Until V8 3.19 / Chromium 29 is released, SpiderMonkey is the only
            // engine that has a deployed base of browsers that support generators.
            // However, SM's generators use the Python-inspired semantics of
            // outdated ES6 drafts.  We would like to support ES6, but we'd also
            // like to make it possible to use generators in deployed browsers, so
            // we also support Python-style generators.  At some point we can remove
            // this block.

            if (typeof StopIteration === "undefined") {
                // ES6 Generators
                try {
                    result = generator[verb](arg);
                } catch (exception) {
                    return reject(exception);
                }
                if (result.done) {
                    return Q(result.value);
                } else {
                    return when(result.value, callback, errback);
                }
            } else {
                // SpiderMonkey Generators
                // FIXME: Remove this case when SM does ES6 generators.
                try {
                    result = generator[verb](arg);
                } catch (exception) {
                    if (isStopIteration(exception)) {
                        return Q(exception.value);
                    } else {
                        return reject(exception);
                    }
                }
                return when(result, callback, errback);
            }
        }
        var generator = makeGenerator.apply(this, arguments);
        var callback = continuer.bind(continuer, "next");
        var errback = continuer.bind(continuer, "throw");
        return callback();
    };
}

/**
 * The spawn function is a small wrapper around async that immediately
 * calls the generator and also ends the promise chain, so that any
 * unhandled errors are thrown instead of forwarded to the error
 * handler. This is useful because it's extremely common to run
 * generators at the top-level to work with libraries.
 */
Q.spawn = spawn;
function spawn(makeGenerator) {
    Q.done(Q.async(makeGenerator)());
}

// FIXME: Remove this interface once ES6 generators are in SpiderMonkey.
/**
 * Throws a ReturnValue exception to stop an asynchronous generator.
 *
 * This interface is a stop-gap measure to support generator return
 * values in older Firefox/SpiderMonkey.  In browsers that support ES6
 * generators like Chromium 29, just use "return" in your generator
 * functions.
 *
 * @param value the return value for the surrounding generator
 * @throws ReturnValue exception with the value.
 * @example
 * // ES6 style
 * Q.async(function* () {
 *      var foo = yield getFooPromise();
 *      var bar = yield getBarPromise();
 *      return foo + bar;
 * })
 * // Older SpiderMonkey style
 * Q.async(function () {
 *      var foo = yield getFooPromise();
 *      var bar = yield getBarPromise();
 *      Q.return(foo + bar);
 * })
 */
Q["return"] = _return;
function _return(value) {
    throw new QReturnValue(value);
}

/**
 * The promised function decorator ensures that any promise arguments
 * are settled and passed as values (`this` is also settled and passed
 * as a value).  It will also ensure that the result of a function is
 * always a promise.
 *
 * @example
 * var add = Q.promised(function (a, b) {
 *     return a + b;
 * });
 * add(Q(a), Q(B));
 *
 * @param {function} callback The function to decorate
 * @returns {function} a function that has been decorated.
 */
Q.promised = promised;
function promised(callback) {
    return function () {
        return spread([this, all(arguments)], function (self, args) {
            return callback.apply(self, args);
        });
    };
}

/**
 * sends a message to a value in a future turn
 * @param object* the recipient
 * @param op the name of the message operation, e.g., "when",
 * @param args further arguments to be forwarded to the operation
 * @returns result {Promise} a promise for the result of the operation
 */
Q.dispatch = dispatch;
function dispatch(object, op, args) {
    return Q(object).dispatch(op, args);
}

Promise.prototype.dispatch = function (op, args) {
    var self = this;
    var deferred = defer();
    Q.nextTick(function () {
        self.promiseDispatch(deferred.resolve, op, args);
    });
    return deferred.promise;
};

/**
 * Gets the value of a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to get
 * @return promise for the property value
 */
Q.get = function (object, key) {
    return Q(object).dispatch("get", [key]);
};

Promise.prototype.get = function (key) {
    return this.dispatch("get", [key]);
};

/**
 * Sets the value of a property in a future turn.
 * @param object    promise or immediate reference for object object
 * @param name      name of property to set
 * @param value     new value of property
 * @return promise for the return value
 */
Q.set = function (object, key, value) {
    return Q(object).dispatch("set", [key, value]);
};

Promise.prototype.set = function (key, value) {
    return this.dispatch("set", [key, value]);
};

/**
 * Deletes a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to delete
 * @return promise for the return value
 */
Q.del = // XXX legacy
Q["delete"] = function (object, key) {
    return Q(object).dispatch("delete", [key]);
};

Promise.prototype.del = // XXX legacy
Promise.prototype["delete"] = function (key) {
    return this.dispatch("delete", [key]);
};

/**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param value     a value to post, typically an array of
 *                  invocation arguments for promises that
 *                  are ultimately backed with `resolve` values,
 *                  as opposed to those backed with URLs
 *                  wherein the posted value can be any
 *                  JSON serializable object.
 * @return promise for the return value
 */
// bound locally because it is used by other methods
Q.mapply = // XXX As proposed by "Redsandro"
Q.post = function (object, name, args) {
    return Q(object).dispatch("post", [name, args]);
};

Promise.prototype.mapply = // XXX As proposed by "Redsandro"
Promise.prototype.post = function (name, args) {
    return this.dispatch("post", [name, args]);
};

/**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param ...args   array of invocation arguments
 * @return promise for the return value
 */
Q.send = // XXX Mark Miller's proposed parlance
Q.mcall = // XXX As proposed by "Redsandro"
Q.invoke = function (object, name /*...args*/) {
    return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
};

Promise.prototype.send = // XXX Mark Miller's proposed parlance
Promise.prototype.mcall = // XXX As proposed by "Redsandro"
Promise.prototype.invoke = function (name /*...args*/) {
    return this.dispatch("post", [name, array_slice(arguments, 1)]);
};

/**
 * Applies the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param args      array of application arguments
 */
Q.fapply = function (object, args) {
    return Q(object).dispatch("apply", [void 0, args]);
};

Promise.prototype.fapply = function (args) {
    return this.dispatch("apply", [void 0, args]);
};

/**
 * Calls the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */
Q["try"] =
Q.fcall = function (object /* ...args*/) {
    return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
};

Promise.prototype.fcall = function (/*...args*/) {
    return this.dispatch("apply", [void 0, array_slice(arguments)]);
};

/**
 * Binds the promised function, transforming return values into a fulfilled
 * promise and thrown errors into a rejected one.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */
Q.fbind = function (object /*...args*/) {
    var promise = Q(object);
    var args = array_slice(arguments, 1);
    return function fbound() {
        return promise.dispatch("apply", [
            this,
            args.concat(array_slice(arguments))
        ]);
    };
};
Promise.prototype.fbind = function (/*...args*/) {
    var promise = this;
    var args = array_slice(arguments);
    return function fbound() {
        return promise.dispatch("apply", [
            this,
            args.concat(array_slice(arguments))
        ]);
    };
};

/**
 * Requests the names of the owned properties of a promised
 * object in a future turn.
 * @param object    promise or immediate reference for target object
 * @return promise for the keys of the eventually settled object
 */
Q.keys = function (object) {
    return Q(object).dispatch("keys", []);
};

Promise.prototype.keys = function () {
    return this.dispatch("keys", []);
};

/**
 * Turns an array of promises into a promise for an array.  If any of
 * the promises gets rejected, the whole array is rejected immediately.
 * @param {Array*} an array (or promise for an array) of values (or
 * promises for values)
 * @returns a promise for an array of the corresponding values
 */
// By Mark Miller
// http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&rev=1308776521#allfulfilled
Q.all = all;
function all(promises) {
    return when(promises, function (promises) {
        var pendingCount = 0;
        var deferred = defer();
        array_reduce(promises, function (undefined, promise, index) {
            var snapshot;
            if (
                isPromise(promise) &&
                (snapshot = promise.inspect()).state === "fulfilled"
            ) {
                promises[index] = snapshot.value;
            } else {
                ++pendingCount;
                when(
                    promise,
                    function (value) {
                        promises[index] = value;
                        if (--pendingCount === 0) {
                            deferred.resolve(promises);
                        }
                    },
                    deferred.reject,
                    function (progress) {
                        deferred.notify({ index: index, value: progress });
                    }
                );
            }
        }, void 0);
        if (pendingCount === 0) {
            deferred.resolve(promises);
        }
        return deferred.promise;
    });
}

Promise.prototype.all = function () {
    return all(this);
};

/**
 * Returns the first resolved promise of an array. Prior rejected promises are
 * ignored.  Rejects only if all promises are rejected.
 * @param {Array*} an array containing values or promises for values
 * @returns a promise fulfilled with the value of the first resolved promise,
 * or a rejected promise if all promises are rejected.
 */
Q.any = any;

function any(promises) {
    if (promises.length === 0) {
        return Q.resolve();
    }

    var deferred = Q.defer();
    var pendingCount = 0;
    array_reduce(promises, function (prev, current, index) {
        var promise = promises[index];

        pendingCount++;

        when(promise, onFulfilled, onRejected, onProgress);
        function onFulfilled(result) {
            deferred.resolve(result);
        }
        function onRejected(err) {
            pendingCount--;
            if (pendingCount === 0) {
                var rejection = err || new Error("" + err);

                rejection.message = ("Q can't get fulfillment value from any promise, all " +
                    "promises were rejected. Last error message: " + rejection.message);

                deferred.reject(rejection);
            }
        }
        function onProgress(progress) {
            deferred.notify({
                index: index,
                value: progress
            });
        }
    }, undefined);

    return deferred.promise;
}

Promise.prototype.any = function () {
    return any(this);
};

/**
 * Waits for all promises to be settled, either fulfilled or
 * rejected.  This is distinct from `all` since that would stop
 * waiting at the first rejection.  The promise returned by
 * `allResolved` will never be rejected.
 * @param promises a promise for an array (or an array) of promises
 * (or values)
 * @return a promise for an array of promises
 */
Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");
function allResolved(promises) {
    return when(promises, function (promises) {
        promises = array_map(promises, Q);
        return when(all(array_map(promises, function (promise) {
            return when(promise, noop, noop);
        })), function () {
            return promises;
        });
    });
}

Promise.prototype.allResolved = function () {
    return allResolved(this);
};

/**
 * @see Promise#allSettled
 */
Q.allSettled = allSettled;
function allSettled(promises) {
    return Q(promises).allSettled();
}

/**
 * Turns an array of promises into a promise for an array of their states (as
 * returned by `inspect`) when they have all settled.
 * @param {Array[Any*]} values an array (or promise for an array) of values (or
 * promises for values)
 * @returns {Array[State]} an array of states for the respective values.
 */
Promise.prototype.allSettled = function () {
    return this.then(function (promises) {
        return all(array_map(promises, function (promise) {
            promise = Q(promise);
            function regardless() {
                return promise.inspect();
            }
            return promise.then(regardless, regardless);
        }));
    });
};

/**
 * Captures the failure of a promise, giving an oportunity to recover
 * with a callback.  If the given promise is fulfilled, the returned
 * promise is fulfilled.
 * @param {Any*} promise for something
 * @param {Function} callback to fulfill the returned promise if the
 * given promise is rejected
 * @returns a promise for the return value of the callback
 */
Q.fail = // XXX legacy
Q["catch"] = function (object, rejected) {
    return Q(object).then(void 0, rejected);
};

Promise.prototype.fail = // XXX legacy
Promise.prototype["catch"] = function (rejected) {
    return this.then(void 0, rejected);
};

/**
 * Attaches a listener that can respond to progress notifications from a
 * promise's originating deferred. This listener receives the exact arguments
 * passed to ``deferred.notify``.
 * @param {Any*} promise for something
 * @param {Function} callback to receive any progress notifications
 * @returns the given promise, unchanged
 */
Q.progress = progress;
function progress(object, progressed) {
    return Q(object).then(void 0, void 0, progressed);
}

Promise.prototype.progress = function (progressed) {
    return this.then(void 0, void 0, progressed);
};

/**
 * Provides an opportunity to observe the settling of a promise,
 * regardless of whether the promise is fulfilled or rejected.  Forwards
 * the resolution to the returned promise when the callback is done.
 * The callback can return a promise to defer completion.
 * @param {Any*} promise
 * @param {Function} callback to observe the resolution of the given
 * promise, takes no arguments.
 * @returns a promise for the resolution of the given promise when
 * ``fin`` is done.
 */
Q.fin = // XXX legacy
Q["finally"] = function (object, callback) {
    return Q(object)["finally"](callback);
};

Promise.prototype.fin = // XXX legacy
Promise.prototype["finally"] = function (callback) {
    if (!callback || typeof callback.apply !== "function") {
        throw new Error("Q can't apply finally callback");
    }
    callback = Q(callback);
    return this.then(function (value) {
        return callback.fcall().then(function () {
            return value;
        });
    }, function (reason) {
        // TODO attempt to recycle the rejection with "this".
        return callback.fcall().then(function () {
            throw reason;
        });
    });
};

/**
 * Terminates a chain of promises, forcing rejections to be
 * thrown as exceptions.
 * @param {Any*} promise at the end of a chain of promises
 * @returns nothing
 */
Q.done = function (object, fulfilled, rejected, progress) {
    return Q(object).done(fulfilled, rejected, progress);
};

Promise.prototype.done = function (fulfilled, rejected, progress) {
    var onUnhandledError = function (error) {
        // forward to a future turn so that ``when``
        // does not catch it and turn it into a rejection.
        Q.nextTick(function () {
            makeStackTraceLong(error, promise);
            if (Q.onerror) {
                Q.onerror(error);
            } else {
                throw error;
            }
        });
    };

    // Avoid unnecessary `nextTick`ing via an unnecessary `when`.
    var promise = fulfilled || rejected || progress ?
        this.then(fulfilled, rejected, progress) :
        this;

    if (typeof process === "object" && process && process.domain) {
        onUnhandledError = process.domain.bind(onUnhandledError);
    }

    promise.then(void 0, onUnhandledError);
};

/**
 * Causes a promise to be rejected if it does not get fulfilled before
 * some milliseconds time out.
 * @param {Any*} promise
 * @param {Number} milliseconds timeout
 * @param {Any*} custom error message or Error object (optional)
 * @returns a promise for the resolution of the given promise if it is
 * fulfilled before the timeout, otherwise rejected.
 */
Q.timeout = function (object, ms, error) {
    return Q(object).timeout(ms, error);
};

Promise.prototype.timeout = function (ms, error) {
    var deferred = defer();
    var timeoutId = setTimeout(function () {
        if (!error || "string" === typeof error) {
            error = new Error(error || "Timed out after " + ms + " ms");
            error.code = "ETIMEDOUT";
        }
        deferred.reject(error);
    }, ms);

    this.then(function (value) {
        clearTimeout(timeoutId);
        deferred.resolve(value);
    }, function (exception) {
        clearTimeout(timeoutId);
        deferred.reject(exception);
    }, deferred.notify);

    return deferred.promise;
};

/**
 * Returns a promise for the given value (or promised value), some
 * milliseconds after it resolved. Passes rejections immediately.
 * @param {Any*} promise
 * @param {Number} milliseconds
 * @returns a promise for the resolution of the given promise after milliseconds
 * time has elapsed since the resolution of the given promise.
 * If the given promise rejects, that is passed immediately.
 */
Q.delay = function (object, timeout) {
    if (timeout === void 0) {
        timeout = object;
        object = void 0;
    }
    return Q(object).delay(timeout);
};

Promise.prototype.delay = function (timeout) {
    return this.then(function (value) {
        var deferred = defer();
        setTimeout(function () {
            deferred.resolve(value);
        }, timeout);
        return deferred.promise;
    });
};

/**
 * Passes a continuation to a Node function, which is called with the given
 * arguments provided as an array, and returns a promise.
 *
 *      Q.nfapply(FS.readFile, [__filename])
 *      .then(function (content) {
 *      })
 *
 */
Q.nfapply = function (callback, args) {
    return Q(callback).nfapply(args);
};

Promise.prototype.nfapply = function (args) {
    var deferred = defer();
    var nodeArgs = array_slice(args);
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Passes a continuation to a Node function, which is called with the given
 * arguments provided individually, and returns a promise.
 * @example
 * Q.nfcall(FS.readFile, __filename)
 * .then(function (content) {
 * })
 *
 */
Q.nfcall = function (callback /*...args*/) {
    var args = array_slice(arguments, 1);
    return Q(callback).nfapply(args);
};

Promise.prototype.nfcall = function (/*...args*/) {
    var nodeArgs = array_slice(arguments);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Wraps a NodeJS continuation passing function and returns an equivalent
 * version that returns a promise.
 * @example
 * Q.nfbind(FS.readFile, __filename)("utf-8")
 * .then(console.log)
 * .done()
 */
Q.nfbind =
Q.denodeify = function (callback /*...args*/) {
    if (callback === undefined) {
        throw new Error("Q can't wrap an undefined function");
    }
    var baseArgs = array_slice(arguments, 1);
    return function () {
        var nodeArgs = baseArgs.concat(array_slice(arguments));
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        Q(callback).fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };
};

Promise.prototype.nfbind =
Promise.prototype.denodeify = function (/*...args*/) {
    var args = array_slice(arguments);
    args.unshift(this);
    return Q.denodeify.apply(void 0, args);
};

Q.nbind = function (callback, thisp /*...args*/) {
    var baseArgs = array_slice(arguments, 2);
    return function () {
        var nodeArgs = baseArgs.concat(array_slice(arguments));
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        function bound() {
            return callback.apply(thisp, arguments);
        }
        Q(bound).fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };
};

Promise.prototype.nbind = function (/*thisp, ...args*/) {
    var args = array_slice(arguments, 0);
    args.unshift(this);
    return Q.nbind.apply(void 0, args);
};

/**
 * Calls a method of a Node-style object that accepts a Node-style
 * callback with a given array of arguments, plus a provided callback.
 * @param object an object that has the named method
 * @param {String} name name of the method of object
 * @param {Array} args arguments to pass to the method; the callback
 * will be provided by Q and appended to these arguments.
 * @returns a promise for the value or error
 */
Q.nmapply = // XXX As proposed by "Redsandro"
Q.npost = function (object, name, args) {
    return Q(object).npost(name, args);
};

Promise.prototype.nmapply = // XXX As proposed by "Redsandro"
Promise.prototype.npost = function (name, args) {
    var nodeArgs = array_slice(args || []);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Calls a method of a Node-style object that accepts a Node-style
 * callback, forwarding the given variadic arguments, plus a provided
 * callback argument.
 * @param object an object that has the named method
 * @param {String} name name of the method of object
 * @param ...args arguments to pass to the method; the callback will
 * be provided by Q and appended to these arguments.
 * @returns a promise for the value or error
 */
Q.nsend = // XXX Based on Mark Miller's proposed "send"
Q.nmcall = // XXX Based on "Redsandro's" proposal
Q.ninvoke = function (object, name /*...args*/) {
    var nodeArgs = array_slice(arguments, 2);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

Promise.prototype.nsend = // XXX Based on Mark Miller's proposed "send"
Promise.prototype.nmcall = // XXX Based on "Redsandro's" proposal
Promise.prototype.ninvoke = function (name /*...args*/) {
    var nodeArgs = array_slice(arguments, 1);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

/**
 * If a function would like to support both Node continuation-passing-style and
 * promise-returning-style, it can end its internal promise chain with
 * `nodeify(nodeback)`, forwarding the optional nodeback argument.  If the user
 * elects to use a nodeback, the result will be sent there.  If they do not
 * pass a nodeback, they will receive the result promise.
 * @param object a result (or a promise for a result)
 * @param {Function} nodeback a Node.js-style callback
 * @returns either the promise or nothing
 */
Q.nodeify = nodeify;
function nodeify(object, nodeback) {
    return Q(object).nodeify(nodeback);
}

Promise.prototype.nodeify = function (nodeback) {
    if (nodeback) {
        this.then(function (value) {
            Q.nextTick(function () {
                nodeback(null, value);
            });
        }, function (error) {
            Q.nextTick(function () {
                nodeback(error);
            });
        });
    } else {
        return this;
    }
};

Q.noConflict = function() {
    throw new Error("Q.noConflict only works when Q is used as a global");
};

// All code before this point will be filtered from stack traces.
var qEndingLine = captureLine();

return Q;

});

}).call(this,require("b55mWE"))
},{"b55mWE":17}]},{},[10])