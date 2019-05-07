module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=74)}([function(t,e){t.exports="object"==typeof window&&window&&window.Math==Math?window:"object"==typeof self&&self&&self.Math==Math?self:Function("return this")()},function(t,e){t.exports=require("electron")},function(t,e,n){var r=n(12)("wks"),o=n(26),i=n(0).Symbol,c=n(59);t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){t.exports="undefined"==typeof process||!process||!!process.type&&"renderer"===process.type},function(t,e,n){t.exports=!n(8)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(11),o=n(19);t.exports=n(7)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(7),o=n(21),i=n(5),c=n(20),s=Object.defineProperty;e.f=r?s:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(0),o=n(17),i=r["__core-js_shared__"]||o("__core-js_shared__",{});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.0.1",mode:n(18)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e){t.exports={DEBUG:!1,TC_DEBUG:!1,TEST:!0,TEACHER:!1}},function(t,e,n){var r=n(7),o=n(43),i=n(19),c=n(16),s=n(20),u=n(4),a=n(21),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=c(t),e=s(e,!0),a)try{return f(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(44),o=n(45);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(0),o=n(10);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e){t.exports=!1},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){t.exports=!n(7)&&!n(8)(function(){return 7!=Object.defineProperty(n(22)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(3),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(0),o=n(10),i=n(4),c=n(17),s=n(24),u=n(25),a=u.get,f=u.enforce,l=String(s).split("toString");n(12)("inspectSource",function(t){return s.call(t)}),(t.exports=function(t,e,n,s){var u=!!s&&!!s.unsafe,a=!!s&&!!s.enumerable,p=!!s&&!!s.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),f(n).source=l.join("string"==typeof e?e:"")),t!==r?(u?!p&&t[e]&&(a=!0):delete t[e],a?t[e]=n:o(t,e,n)):a?t[e]=n:c(e,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&a(this).source||s.call(this)})},function(t,e,n){t.exports=n(12)("native-function-to-string",Function.toString)},function(t,e,n){var r,o,i,c=n(46),s=n(3),u=n(10),a=n(4),f=n(47),l=n(27),p=n(0).WeakMap;if(c){var d=new p,h=d.get,v=d.has,_=d.set;r=function(t,e){return _.call(d,t,e),e},o=function(t){return h.call(d,t)||{}},i=function(t){return v.call(d,t)}}else{var E=f("state");l[E]=!0,r=function(t,e){return u(t,E,e),e},o=function(t){return a(t,E)?t[E]:{}},i=function(t){return a(t,E)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!s(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports={}},function(t,e,n){var r=n(29),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(8),o=/#|\.prototype\./,i=function(t,e){var n=s[c(t)];return n==a||n!=u&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},s=i.data={},u=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,e){t.exports={}},function(t,e,n){var r=n(13);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r,o,i,c=n(0),s=n(9),u=n(32),a=n(65),f=n(22),l=c.setImmediate,p=c.clearImmediate,d=c.process,h=c.MessageChannel,v=c.Dispatch,_=0,E={},m=function(){var t=+this;if(E.hasOwnProperty(t)){var e=E[t];delete E[t],e()}},g=function(t){m.call(t.data)};l&&p||(l=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return E[++_]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(_),_},p=function(t){delete E[t]},"process"==s(d)?r=function(t){d.nextTick(u(m,t,1))}:v&&v.now?r=function(t){v.now(u(m,t,1))}:h?(i=(o=new h).port2,o.port1.onmessage=g,r=u(i.postMessage,i,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts?(r=function(t){c.postMessage(t+"","*")},c.addEventListener("message",g,!1)):r="onreadystatechange"in f("script")?function(t){a.appendChild(f("script")).onreadystatechange=function(){a.removeChild(this),m.call(t)}}:function(t){setTimeout(u(m,t,1),0)}),t.exports={set:l,clear:p}},function(t,e,n){var r=n(0).navigator;t.exports=r&&r.userAgent||""},function(t,e,n){"use strict";var r=n(13),o=function(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},function(t,e,n){t.exports=n(0)},function(t,e,n){const r=n(14);t.exports={AGORA_APPID:r.TEST||r.DEBUG?"c6a83fe7f78b490c96f69f3fdb71f682":"d75fe75ab0404a90b2ed7e5bab216f80",AGORA_CHANNEL_KEY:r.TEST||r.DEBUG?"dfc09172cb114b06b002c2f9aa7f0d87":"7c9b6ed9bba54dc59471cfa09e9f23ea",TEST_URL:"https://admintest.youshiyuwen.cn",ONLINE_URL:"https://www.muwenyuwen.com",TENCENT_APPID:1400098973,TENCENT_ACCOUNTTYPE:28218,VIDEO_T_QUALITY:"480P_3",VIDEO_S_QUALITY:"120P_3",MAIN_WINDOW_SIZE:{width:1300,height:790},ROOM_ID:111111,LARGE_MODE:480,DANCE_MODE:200,SMALL_MODE:88,WEB_IM_GROUP_TIP:{JOIN:1,QUIT:2,KICK:3,SET_ADMIN:4,CANCEL_ADMIN:5,MODIFY_GROUP_INFO:6,MODIFY_MEMBER_INFO:7},CELL_COUNT:4,LOGIN_E_NET:201,LOGOUT_E_KICKED:103,LOGOUT_E_NET:102,LOGOUT_SUCCESS:101,GENERAL_E_NOT_LOGIN:1003,JS_READY:"jsready",INIT_ROOM:"initroom",MEMBER_ADD:"member_add",MEMBER_LEAVE:"member_leave",CLEARLINES:"clearlines",NEXT_PAGE:"nextpage",SYNC:"sync",VIDEO_PLAY:"videoplay",VIDEO_STOP:"videostop",OPEN_RACE:"#openrace",CLOSE_RACE:"#closerace",OPEN_MIC:"#openmic",CLOSE_MIC:"#closemic",COURSE_PAUSE:"#coursepause",COURSE_RESUME:"#courseresume",PUT_DANCE:"#putdance",BACK_DANCE:"#backdance",SCENE_MOVE:"scenemove",START_COURSE:"*startcourse",STOP_COURSE:"*stopcourse",WARN:"warn",WARN_RELIEVE:"warn_relieve",ENABLE_MAGIC:"enablemagic",DISABLE_MAGIC:"disablemagic",MUTE_ALL:"#muteall",UNMUTE_ALL:"#unmuteall",SHOW_RANKS:"*showranks",HIDE_RANKS:"*hideranks",UPDATE:{AVAILABLE:"update available",LASTEST:"the lastest version",CHECKING:"checking for update",ERROR:"update error",DOWNLOADING:"update downloading",DOWNLOADED:"update downloaded",DOWNLOADING_UI:"downloading ui",DOWNLOADED_UI:"downloaded ui"},COCOS:1}},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";var r,o,i,c="Promise",s=n(18),u=n(0),a=n(42),f=n(3),l=n(13),p=n(56),d=n(9),h=n(57),v=n(63),_=n(64),E=n(33).set,m=n(66),g=n(67),y=n(68),O=n(35),b=n(69),A=n(34),x=n(2)("species"),T=n(25),D=n(30),S=T.get,w=T.set,N=T.getterFor(c),P=u.Promise,I=u.TypeError,L=u.document,U=u.process,M=u.fetch,C=U&&U.versions,j=C&&C.v8||"",R=O.f,$=R,G="process"==d(U),W=!!(L&&L.createEvent&&u.dispatchEvent),k=D(c,function(){var t=P.resolve(1),e=function(){},n=(t.constructor={})[x]=function(t){t(e,e)};return!((G||"function"==typeof PromiseRejectionEvent)&&(!s||t.finally)&&t.then(e)instanceof n&&0!==j.indexOf("6.6")&&-1===A.indexOf("Chrome/66"))}),B=k||!v(function(t){P.all(t).catch(function(){})}),K=function(t){var e;return!(!f(t)||"function"!=typeof(e=t.then))&&e},F=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;m(function(){for(var o=e.value,i=1==e.state,c=0,s=function(n){var r,c,s,u=i?n.ok:n.fail,a=n.resolve,f=n.reject,l=n.domain;try{u?(i||(2===e.rejection&&q(t,e),e.rejection=1),!0===u?r=o:(l&&l.enter(),r=u(o),l&&(l.exit(),s=!0)),r===n.promise?f(I("Promise-chain cycle")):(c=K(r))?c.call(r,a,f):a(r)):f(o)}catch(t){l&&!s&&l.exit(),f(t)}};r.length>c;)s(r[c++]);e.reactions=[],e.notified=!1,n&&!e.rejection&&Y(t,e)})}},V=function(t,e,n){var r,o;W?((r=L.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},(o=u["on"+t])?o(r):"unhandledrejection"===t&&y("Unhandled promise rejection",n)},Y=function(t,e){E.call(u,function(){var n,r=e.value;if(H(e)&&(n=b(function(){G?U.emit("unhandledRejection",r,t):V("unhandledrejection",t,r)}),e.rejection=G||H(e)?2:1,n.error))throw n.value})},H=function(t){return 1!==t.rejection&&!t.parent},q=function(t,e){E.call(u,function(){G?U.emit("rejectionHandled",t):V("rejectionhandled",t,e.value)})},z=function(t,e,n,r){return function(o){t(e,n,o,r)}},Q=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,F(t,e,!0))},J=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw I("Promise can't be resolved itself");var o=K(n);o?m(function(){var r={done:!1};try{o.call(n,z(J,t,r,e),z(Q,t,r,e))}catch(n){Q(t,r,n,e)}}):(e.value=n,e.state=1,F(t,e,!1))}catch(n){Q(t,{done:!1},n,e)}}};k&&(P=function(t){p(this,P,c),l(t),r.call(this);var e=S(this);try{t(z(J,this,e),z(Q,this,e))}catch(t){Q(this,e,t)}},(r=function(t){w(this,{type:c,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=n(70)(P.prototype,{then:function(t,e){var n=N(this),r=R(_(this,P));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=G?U.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&F(this,n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=S(t);this.promise=t,this.resolve=z(J,t,e),this.reject=z(Q,t,e)},O.f=R=function(t){return t===P||t===i?new o(t):$(t)},s||"function"!=typeof M||a({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return g(P,M.apply(u,arguments))}})),a({global:!0,wrap:!0,forced:k},{Promise:P}),n(71)(P,c,!1,!0),n(72)(c),i=n(36).Promise,a({target:c,stat:!0,forced:k},{reject:function(t){var e=R(this);return e.reject.call(void 0,t),e.promise}}),a({target:c,stat:!0,forced:s||k},{resolve:function(t){return g(s&&this===i?P:this,t)}}),a({target:c,stat:!0,forced:B},{all:function(t){var e=this,n=R(e),r=n.resolve,o=n.reject,i=b(function(){var n=[],i=0,c=1;h(t,function(t){var s=i++,u=!1;n.push(void 0),c++,e.resolve(t).then(function(t){u||(u=!0,n[s]=t,--c||r(n))},o)}),--c||r(n)});return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=R(e),r=n.reject,o=b(function(){h(t,function(t){e.resolve(t).then(n.resolve,r)})});return o.error&&r(o.value),n.promise}})},function(t,e,n){var r=n(0),o=n(15).f,i=n(10),c=n(23),s=n(17),u=n(48),a=n(30);t.exports=function(t,e){var n,f,l,p,d,h=t.target,v=t.global,_=t.stat;if(n=v?r:_?r[h]||s(h,{}):(r[h]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(d=o(n,f))&&d.value:n[f],!a(v?f:h+(_?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,f,p,t)}}},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(8),o=n(9),i="".split;t.exports=r(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(24),o=n(0).WeakMap;t.exports="function"==typeof o&&/native code/.test(r.call(o))},function(t,e,n){var r=n(12)("keys"),o=n(26);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(4),o=n(49),i=n(15),c=n(11);t.exports=function(t,e){for(var n=o(e),s=c.f,u=i.f,a=0;a<n.length;a++){var f=n[a];r(t,f)||s(t,f,u(e,f))}}},function(t,e,n){var r=n(50),o=n(55),i=n(5),c=n(0).Reflect;t.exports=c&&c.ownKeys||function(t){var e=r.f(i(t)),n=o.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(51),o=n(54).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(4),o=n(16),i=n(52)(!1),c=n(27);t.exports=function(t,e){var n,s=o(t),u=0,a=[];for(n in s)!r(c,n)&&r(s,n)&&a.push(n);for(;e.length>u;)r(s,n=e[u++])&&(~i(a,n)||a.push(n));return a}},function(t,e,n){var r=n(16),o=n(28),i=n(53);t.exports=function(t){return function(e,n,c){var s,u=r(e),a=o(u.length),f=i(c,a);if(t&&n!=n){for(;a>f;)if((s=u[f++])!=s)return!0}else for(;a>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(29),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var r=n(5),o=n(58),i=n(28),c=n(32),s=n(60),u=n(62),a={};(t.exports=function(t,e,n,f,l){var p,d,h,v,_,E=c(e,n,f?2:1);if(l)p=t;else{if("function"!=typeof(d=s(t)))throw TypeError("Target is not iterable");if(o(d)){for(h=0,v=i(t.length);v>h;h++)if((f?E(r(_=t[h])[0],_[1]):E(t[h]))===a)return a;return}p=d.call(t)}for(;!(_=p.next()).done;)if(u(p,E,_.value,f)===a)return a}).BREAK=a},function(t,e,n){var r=n(31),o=n(2)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){t.exports=!n(8)(function(){return!String(Symbol())})},function(t,e,n){var r=n(61),o=n(2)("iterator"),i=n(31);t.exports=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(9),o=n(2)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){var r=n(5);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(2)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,e,n){var r=n(5),o=n(13),i=n(2)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){var r,o,i,c,s,u,a,f=n(0),l=n(15).f,p=n(9),d=n(33).set,h=n(34),v=f.MutationObserver||f.WebKitMutationObserver,_=f.process,E=f.Promise,m="process"==p(_),g=l(f,"queueMicrotask"),y=g&&g.value;y||(r=function(){var t,e;for(m&&(t=_.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},m?c=function(){_.nextTick(r)}:v&&!/(iPhone|iPod|iPad).*AppleWebKit/i.test(h)?(s=!0,u=document.createTextNode(""),new v(r).observe(u,{characterData:!0}),c=function(){u.data=s=!s}):E&&E.resolve?(a=E.resolve(void 0),c=function(){a.then(r)}):c=function(){d.call(f,r)}),t.exports=y||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,c()),i=e}},function(t,e,n){var r=n(5),o=n(3),i=n(35);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var r=n(0);t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,e,n){var r=n(23);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e,n){var r=n(11).f,o=n(4),i=n(2)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){"use strict";var r=n(73),o=n(11),i=n(7),c=n(2)("species");t.exports=function(t){var e=r(t),n=o.f;i&&e&&!e[c]&&n(e,c,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=n(36),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){"use strict";n.r(e);n(38),n(39),n(40);var r=n(1),o=n.n(r),i=n(37),c=n.n(i).a,s=(n(41),n(6)),u=n.n(s);const a="MESSAGE_RPC_BRIDGE";var f=new class{constructor(){this.$uuid=0,this.$handlers={},this.$sender_pool={},this.$delegate={},u.a?(this.$sender=o.a.ipcRenderer,this.$receiver=o.a.ipcRenderer):this.$receiver=o.a.ipcMain,this.__bind()}__bind(){this.$receiver.on(a,(t,e)=>{if(!u.a){let n=t.sender.getOwnerBrowserWindow();n&&"id"in e&&(this.$sender_pool[e.id]=n)}this.__received(e)})}__send(t){let e=this.$sender;!e&&"id"in t&&(e=this.$sender_pool[t.id]),e?e.send(a,t):console.error("no sender for message",t)}__received(t){if("error"in t||"result"in t){const e=t.id,n=this.$handlers[e];if(n){try{n(t.error,t.result)}catch(t){console.error("call message handler error",t)}delete this.$handlers[e],delete this.$sender_pool[e]}else console.error("no callback handler for message",e)}else if("method"in t){let e=this.$delegate[t.method],n=t.id;if(!e)return void this.__send({id:n,error:"no method"});let r=this.$sender||this.$sender_pool[n];Promise.resolve(e(t.args,r)).then((e=null)=>{t.id&&this.__send({id:n,result:e})}).catch(t=>{throw this.__send({id:n,error:t.message}),t})}}set delegate(t){for(let e in t)this.$delegate[e]=t[e]}removeDelegate(t){delete this.$delegate[t]}call({method:t,args:e,sender:n}){if(u.a||n)return new Promise((r,o)=>{let i=(u.a?"R":"M")+ ++this.$uuid;this.$handlers[i]=((t,e)=>{t?o(t):r(e)}),u.a||(this.$sender_pool[i]=n),this.__send({id:i,method:t,args:e})});console.error("call from main process must set sender")}},l=n(14);const p=r.remote.require("electron-updater").autoUpdater,d=r.remote.require("electron-log"),h=t=>document.getElementById(t);new class{constructor(){this.__bind(),this.state={version:r.remote.app.getVersion(),message:"",progress:null},l.DEBUG?this.$base_url="http://localhost:8080":l.TEST?this.$base_url="https://bundlesyuntest.mx0a.com":this.$base_url="https://bundlesyun.mx0a.com",this.__setState(),this.__start_updater()}__setStatus(t,e){let n;n=t==c.UPDATE.LASTEST?"已是最新版本。":t==c.UPDATE.AVAILABLE?"发现新版本。":t==c.UPDATE.CHECKING?"正在检查新版本...":t==c.UPDATE.ERROR?`更新出错，错误信息:${e}`:t==c.UPDATE.DOWNLOADING?"正在下载新版本...":t==c.UPDATE.DOWNLOADED?"下载完成，请等待安装...":t==c.UPDATE.DOWNLOADING_UI?"正在下载基础包...":t==c.UPDATE.DOWNLOADED_UI?"下载完成，请等待解压...":"正在检查版本更新...",this.__setState({message:n,progress:e})}__bind(){h("closeBtn").onclick=function(){r.remote.getCurrentWindow().close()}}__do_update_bundle(t){f.call({method:"startDownloadTask",args:{pack:"classroom-ui",url:`${this.$base_url}/${t.url}`,md5:t.md5,version:t.version,autoUnzip:!0,checksum:!0}}).then(t=>{let e=t.identity;f.delegate={[`${e}/progress`]:({total:t,transferred:e,percent:n})=>{this.__setStatus(c.UPDATE.DOWNLOADING,{percent:100*n>>0})},[`${e}/error`]:t=>{this.__setStatus(c.UPDATE.ERROR,t.message)},[`${e}/success`]:t=>{this.__setStatus(c.UPDATE.DOWNLOADED_UI),this.__on_complete()}}}).catch(t=>{console.log("error happened",t),d.error(t)})}__update_bundle(){f.call({method:"isUpdateAvailable",args:{url:`${this.$base_url}/app.json`,pack:"classroom-ui"}}).then(t=>{t.available?(this.__setStatus(c.UPDATE.DOWNLOADING_UI),this.__do_update_bundle(t.server)):(this.__setStatus(c.UPDATE.LASTEST),this.__on_complete())})}__start_updater(){p.logger=d,p.logger.transports.file.level="info",p.on("checking-for-update",()=>{this.__setStatus(c.UPDATE.CHECKING)}),p.on("update-available",()=>{this.__setStatus(c.UPDATE.AVAILABLE)}),p.on("update-not-available",()=>{this.__update_bundle()}),p.on("error",t=>{d.error("update error",t),setTimeout(()=>{this.__update_bundle()},2e3)}),p.on("download-progress",t=>{this.__setStatus(c.UPDATE.DOWNLOADING,t)}),p.on("update-downloaded",()=>{this.__setStatus(c.UPDATE.DOWNLOADED),setTimeout(()=>{p.quitAndInstall()},2e3)}),p.checkForUpdates()}__setState(t={}){for(let e in t)this.state[e]=t[e];this.__render()}__on_complete(){r.ipcRenderer.send("render.complete"),f.call({method:"openMainWindow",args:"classroom-ui"}).catch(t=>{console.error(t)})}__render(){this.state.progress?(h("progress").style.display="flex",h("percent").innerText=`${this.state.progress.percent>>0}%`,h("bar").style.width=`${this.state.progress.percent}%`):h("progress").style.display="none",h("tips").innerText=`当前版本: ${this.state.version}, ${this.state.message}`}}}]);