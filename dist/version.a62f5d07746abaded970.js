module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=129)}([function(t,e){t.exports=require("react")},function(t,e,n){"use strict";n.d(e,"C",function(){return r}),n.d(e,"T",function(){return o}),n.d(e,"U",function(){return u}),n.d(e,"w",function(){return i}),n.d(e,"n",function(){return c}),n.d(e,"a",function(){return s}),n.d(e,"f",function(){return a}),n.d(e,"R",function(){return f}),n.d(e,"Q",function(){return l}),n.d(e,"D",function(){return d}),n.d(e,"W",function(){return p}),n.d(e,"P",function(){return _}),n.d(e,"S",function(){return m}),n.d(e,"I",function(){return y}),n.d(e,"ab",function(){return E}),n.d(e,"Z",function(){return O}),n.d(e,"Y",function(){return g}),n.d(e,"J",function(){return S}),n.d(e,"X",function(){return h}),n.d(e,"c",function(){return v}),n.d(e,"d",function(){return T}),n.d(e,"v",function(){return b}),n.d(e,"s",function(){return N}),n.d(e,"E",function(){return A}),n.d(e,"F",function(){return I}),n.d(e,"O",function(){return R}),n.d(e,"V",function(){return w}),n.d(e,"u",function(){return L}),n.d(e,"m",function(){return C}),n.d(e,"e",function(){return D}),n.d(e,"g",function(){return x}),n.d(e,"l",function(){return P}),n.d(e,"k",function(){return M}),n.d(e,"h",function(){return U}),n.d(e,"j",function(){return j}),n.d(e,"p",function(){return G}),n.d(e,"r",function(){return k}),n.d(e,"o",function(){return F}),n.d(e,"q",function(){return H}),n.d(e,"t",function(){return W}),n.d(e,"L",function(){return $}),n.d(e,"K",function(){return B}),n.d(e,"G",function(){return V}),n.d(e,"H",function(){return K}),n.d(e,"b",function(){return Y}),n.d(e,"i",function(){return q}),n.d(e,"B",function(){return Q}),n.d(e,"x",function(){return J}),n.d(e,"y",function(){return X}),n.d(e,"z",function(){return z}),n.d(e,"A",function(){return Z}),n.d(e,"N",function(){return tt}),n.d(e,"M",function(){return et});const r="LOGIN_SUCCESS",o="SHOW_ALERT",u="SHOW_CONFIRM",i="HIDE_DIALOG",c={STUDENT:1,MASTER:2},s="CALENDAR_DATA",a="COURSE_DATA",f="ROOM_LIST",l="ROOM_INFO",d="LOGOUT",p="START_COURSE",_="ROOM_GIFT",m="ROOM_MORE_INFO",y="NEW_GIFT",E="WARN",O="USER_MUTED",g="USER_ADD_ROOM",S="NEW_STREAM",h="STREAM_LEAVE",v="CHANNEL_NEW_USER",T="CHANNEL_USER_LEAVE",b="HANDSUP_SWITCH",N="GIFT_SWITCH",A="MAGIC_SWITCH",I="MUTEALL_SWITCH",R="RANK_SWITCH",w="SILENT_SWITCH",L="HANDSUP_RANK",C="DANCING",D="COURSE_BEGIN",x="COURSE_END",P="COURSE_TICK",M="COURSE_STARTING_TICK",U="COURSE_PAUSE",j="COURSE_RESUME",G="ENTER_TESTER",k="EXIT_TESTER",F="ENTER_MY_COURSES",H="EXIT_MY_COURSES",W="GIFT_UPDATE",$="PROGRESS_UPDATE",B="PROGRESS_RESET",V="NET_STATUS_BAD",K="NET_STATUS_GOOD",Y="CHANGE_USER_INFO",q="COURSE_RECORDING",Q="LESSON_COMMING",J="LESSONS_COMMING",X="LESSONS_DONE",z="LESSONS_TOTAL_COMMING",Z="LESSONS_TOTAL_DONE",tt="QUESTION_LIST",et="QUESTION_DETAIL"},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return s}),n.d(e,"X",function(){return a}),n.d(e,"d",function(){return f}),n.d(e,"W",function(){return l}),n.d(e,"e",function(){return d}),n.d(e,"N",function(){return p}),n.d(e,"g",function(){return _}),n.d(e,"M",function(){return m}),n.d(e,"y",function(){return y}),n.d(e,"Q",function(){return E}),n.d(e,"O",function(){return O}),n.d(e,"D",function(){return g}),n.d(e,"V",function(){return S}),n.d(e,"U",function(){return h}),n.d(e,"T",function(){return v}),n.d(e,"E",function(){return T}),n.d(e,"R",function(){return b}),n.d(e,"s",function(){return N}),n.d(e,"z",function(){return A}),n.d(e,"A",function(){return I}),n.d(e,"K",function(){return R}),n.d(e,"P",function(){return w}),n.d(e,"r",function(){return L}),n.d(e,"l",function(){return C}),n.d(e,"f",function(){return D}),n.d(e,"i",function(){return x}),n.d(e,"m",function(){return P}),n.d(e,"F",function(){return M}),n.d(e,"L",function(){return U}),n.d(e,"k",function(){return j}),n.d(e,"j",function(){return G}),n.d(e,"o",function(){return k}),n.d(e,"n",function(){return F}),n.d(e,"p",function(){return H}),n.d(e,"q",function(){return W}),n.d(e,"S",function(){return $}),n.d(e,"H",function(){return B}),n.d(e,"G",function(){return V}),n.d(e,"B",function(){return K}),n.d(e,"C",function(){return Y}),n.d(e,"h",function(){return q}),n.d(e,"t",function(){return Q}),n.d(e,"u",function(){return J}),n.d(e,"v",function(){return X}),n.d(e,"w",function(){return z}),n.d(e,"x",function(){return Z}),n.d(e,"J",function(){return tt}),n.d(e,"I",function(){return et});var r=n(1);const o=n(17),u=n(82),i=t=>({type:r.T,configure:t}),c=t=>({type:r.U,configure:t}),s=()=>({type:r.w}),a=t=>e=>{u.show(t)},f=()=>t=>{u.hide()},l=()=>t=>{let e=o.get("USER_INFO");e&&t(d(e))},d=t=>e=>{o.store("USER_INFO",t),e({type:r.C,account:t})},p=t=>({type:r.R,rooms:t}),_=t=>({type:r.a,data:t}),m=t=>({type:r.Q,data:t}),y=()=>t=>{o.clear(),t({type:r.D})},E=()=>({type:r.W}),O=t=>({type:r.S,data:t}),g=t=>({type:r.I,data:t}),S=(t,e)=>({type:r.ab,data:t,status:e}),h=(t,e=!0,n=!1)=>({type:r.Z,id:t,mute:e,recovering:n}),v=t=>({type:r.Y,id:t}),T=t=>({type:r.J,stream:t}),b=t=>({type:r.X,stream:t}),N=t=>({type:r.v,status:t}),A=t=>({type:r.E,status:t}),I=t=>({type:r.F,status:t}),R=t=>({type:r.O,status:t}),w=t=>({type:r.V,status:t}),L=(t,e)=>({type:r.u,id:t,rank:e}),C=(t,e)=>({type:r.m,id:t,status:e}),D=()=>({type:r.e}),x=t=>({type:r.i,status:t}),P=()=>({type:r.g}),M=()=>({type:r.h}),U=()=>({type:r.j}),j=()=>({type:r.l}),G=()=>({type:r.k}),k=t=>({type:r.p,page:t}),F=t=>({type:r.o,page:t}),H=t=>({type:r.q,page:t}),W=()=>({type:r.r}),$=t=>({type:r.t,data:t}),B=(t,e)=>({type:r.L,percent:e,id:t}),V=()=>({type:r.K}),K=()=>({type:r.G}),Y=()=>({type:r.H}),q=t=>(o.store("USER_INFO",t),{type:r.b,user:t}),Q=t=>({type:r.B,commingRoom:t}),J=t=>({type:r.x,commingRooms:t}),X=t=>({type:r.y,doneRooms:t}),z=t=>({type:r.z,totalComming:t}),Z=t=>({type:r.A,totalDone:t}),tt=t=>({type:r.N,status:t}),et=t=>({type:r.M,status:t})},,function(t,e){t.exports="object"==typeof window&&window&&window.Math==Math?window:"object"==typeof self&&self&&self.Math==Math?self:Function("return this")()},function(t,e){t.exports=require("react-redux")},function(t,e,n){var r=n(20),o=n(28);t.exports=n(14)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=require("electron")},function(t,e,n){"use strict";var r=n(23),o=n(62),u=n(34),i=n(47),c=n(69),s=i.set,a=i.getterFor("Array Iterator");t.exports=c(Array,"Array",function(t,e){s(this,{type:"Array Iterator",target:r(t),index:0,kind:e})},function(){var t=a(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}},"values"),u.Arguments=u.Array,o("keys"),o("values"),o("entries")},function(t,e,n){t.exports=n(83)},function(t,e,n){var r=n(15);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(24)("wks"),o=n(44),u=n(4).Symbol,i=n(63);t.exports=function(t){return r[t]||(r[t]=i&&u[t]||(i?u:o)("Symbol."+t))}},function(t,e,n){t.exports=!n(8)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=require("jquery")},function(t,e){t.exports=new class{constructor(t="MINGXI.INC"){if(this.$namespace=t,this.$data=localStorage.getItem(this.$namespace),console.log("namespace...",t,this.$data),this.$data)try{this.$data=JSON.parse(this.$data)}catch(t){this.$data={},localStorage.removeItem(this.$namespace)}else this.$data={}}get(t){return this.$data[t]}store(t,e){this.$data[t]=e,localStorage.setItem(this.$namespace,JSON.stringify(this.$data))}clear(){localStorage.removeItem(this.$namespace)}}},,function(t,e){t.exports=require("redux")},function(t,e,n){var r=n(14),o=n(42),u=n(12),i=n(43),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(u(t),e=i(e,!0),u(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},,function(t,e){t.exports={DEBUG:!0,TC_DEBUG:!0,TEST:!1,TEACHER:!0}},function(t,e,n){var r=n(61),o=n(26);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(4),o=n(27),u=r["__core-js_shared__"]||o("__core-js_shared__",{});(t.exports=function(t,e){return u[t]||(u[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.0.0",mode:n(29)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(79),o=n(10),u=n(4),i=n(6),c=n(13),s=c("iterator"),a=c("toStringTag"),f=o.values;for(var l in r){var d=u[l],p=d&&d.prototype;if(p){if(p[s]!==f)try{i(p,s,f)}catch(t){p[s]=f}if(p[a]||i(p,a,l),r[l])for(var _ in o)if(p[_]!==o[_])try{i(p,_,o[_])}catch(t){p[_]=o[_]}}}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(4),o=n(6);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=!1},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports={}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(24)("keys"),o=n(44);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){t.exports={}},function(t,e,n){var r=n(4),o=n(49).f,u=n(6),i=n(38),c=n(27),s=n(59),a=n(74);t.exports=function(t,e){var n,f,l,d,p,_=t.target,m=t.global,y=t.stat;if(n=m?r:y?r[_]||c(_,{}):(r[_]||{}).prototype)for(f in e){if(d=e[f],l=t.noTargetGet?(p=o(n,f))&&p.value:n[f],!a(m?f:_+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof d==typeof l)continue;s(d,l)}(t.sham||l&&l.sham)&&u(d,"sham",!0),i(n,f,d,t)}}},,function(t,e,n){var r=n(15),o=n(4).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,e,n){var r=n(4),o=n(6),u=n(7),i=n(27),c=n(48),s=n(47),a=s.get,f=s.enforce,l=String(c).split("toString");n(24)("inspectSource",function(t){return c.call(t)}),(t.exports=function(t,e,n,c){var s=!!c&&!!c.unsafe,a=!!c&&!!c.enumerable,d=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof e||u(n,"name")||o(n,"name",e),f(n).source=l.join("string"==typeof e?e:"")),t!==r?(s?!d&&t[e]&&(a=!0):delete t[e],a?t[e]=n:o(t,e,n)):a?t[e]=n:i(e,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&a(this).source||c.call(this)})},,function(t,e){t.exports=require("react-dom")},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){t.exports=!n(14)&&!n(8)(function(){return 7!=Object.defineProperty(n(37)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(15);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(12),o=n(64),u=n(32),i=n(58),c=n(37),s=n(33)("IE_PROTO"),a=function(){},f=function(){var t,e=c("iframe"),n=u.length;for(e.style.display="none",i.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;n--;)delete f.prototype[u[n]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[s]=t):n=f(),void 0===e?n:o(n,e)},n(31)[s]=!0},function(t,e,n){var r=n(7),o=n(23),u=n(66)(!1),i=n(31);t.exports=function(t,e){var n,c=o(t),s=0,a=[];for(n in c)!r(i,n)&&r(c,n)&&a.push(n);for(;e.length>s;)r(c,n=e[s++])&&(~u(a,n)||a.push(n));return a}},function(t,e,n){var r,o,u,i=n(68),c=n(15),s=n(6),a=n(7),f=n(33),l=n(31),d=n(4).WeakMap;if(i){var p=new d,_=p.get,m=p.has,y=p.set;r=function(t,e){return y.call(p,t,e),e},o=function(t){return _.call(p,t)||{}},u=function(t){return m.call(p,t)}}else{var E=f("state");l[E]=!0,r=function(t,e){return s(t,E,e),e},o=function(t){return a(t,E)?t[E]:{}},u=function(t){return a(t,E)}}t.exports={set:r,get:o,has:u,enforce:function(t){return u(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){t.exports=n(24)("native-function-to-string",Function.toString)},function(t,e,n){var r=n(14),o=n(70),u=n(28),i=n(23),c=n(43),s=n(7),a=n(42),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=i(t),e=c(e,!0),a)try{return f(t,e)}catch(t){}if(s(t,e))return u(!o.f.call(t,e),t[e])}},function(t,e,n){"use strict";var r,o,u,i=n(51),c=n(6),s=n(7),a=n(29),f=n(13)("iterator"),l=!1;[].keys&&("next"in(u=[].keys())?(o=i(i(u)))!==Object.prototype&&(r=o):l=!0),null==r&&(r={}),a||s(r,f)||c(r,f,function(){return this}),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:l}},function(t,e,n){var r=n(7),o=n(52),u=n(33)("IE_PROTO"),i=n(76),c=Object.prototype;t.exports=i?Object.getPrototypeOf:function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,e,n){var r=n(26);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(20).f,o=n(7),u=n(13)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,u)&&r(t,u,{configurable:!0,value:e})}},function(t,e){t.exports=require("redux-thunk")},function(t,e,n){"use strict";var r=n(19),o=n(1);function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=(t={type:"alert",configure:{content:""}},e)=>{switch(e.type){case o.T:return u({},t,{type:"alert",configure:e.configure,showing:!0});case o.U:return u({},t,{type:"confirm",configure:e.configure,showing:!0});case o.w:return u({},t,{showing:!1});default:return t}};function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=(t={},e)=>{switch(e.type){case o.C:return s({},t,{account:e.account});case o.D:return s({},t,{account:null});case o.b:return s({},t,{account:e.user});default:return t}};function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){d(t,e,n[e])})}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=(t={},e)=>{switch(e.type){case o.R:return l({},t,{rooms:e.rooms});case o.Q:return l({},t,{room:e.data});case o.a:return l({},t,{calendar:e.data});case o.W:return l({},t,{courseStarted:!0});case o.g:return l({},t,{courseStarted:!1});case o.p:return l({},t,{courseStarted:!1,enterTester:!0,fromPage:e.page});case o.o:return l({},t,{enterMyCourses:!0});case o.q:return l({},t,{enterMyCourses:!1});case o.r:return l({},t,{enterTester:!1,courseStarted:"course"==t.fromPage});case o.G:return l({},t,{netStatus:0});case o.H:return l({},t,{netStatus:1});case o.i:return l({},t,{recording:e.status});case o.B:return console.log("lesson comming 222"),l({},t,{commingRoom:e.commingRoom});case o.x:return console.log("LESSONS_COMMING action.commingRooms",e.commingRooms),l({},t,{commingRooms:e.commingRooms});case o.y:return console.log("LESSONS_DONE action.doneRooms",e.doneRooms),l({},t,{doneRooms:e.doneRooms});case o.z:return l({},t,{totalComming:e.totalComming});case o.A:return l({},t,{totalDone:e.totalDone});default:return t}};n(10),n(25);function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){m(t,e,n[e])})}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const y=n(17);var E=(t={},e)=>{let n,r,u,i;switch(e.type){case o.Q:let c=e.data,s={child_name:c.teacher_name,avatarurl:c.teacher_avatar,id:c.teacher_id},a=(Date.now(),c.start_time.split(/[-: ]/)),f=new Date(a[0],a[1]-1,a[2]||1,a[3]||0,a[4]||0,a[5]||0).getTime()-Date.now(),l=y.get("STATUS_"+c.channel_id);return(i=(i=l||{duration:e.data.duration,waiting:f,id:c.channel_id})||{}).waiting=f,_({},t,{info:e.data,switches:{gift:!0,muteall:!0},dancing:[],status:i,teacher:s});case o.P:return _({},t,{gifts:e.data});case o.S:let d=_({},t.info);return d.channel_token=e.data.channel_token,d.features=e.data.features,_({},t,{info:d,students:e.data.students});case o.I:let p=e.data;for(let e=0,n=(u=[...t.students]).length;e<n;e++){let t=u[e];t.id==p.uid&&(t.gift_total=p.total)}return _({},t,{students:u});case o.ab:let m=e.data;for(let n=0,r=(u=[...t.students]).length;n<r;n++){let t=u[n];t.id==m.uid?t.warn=e.status:t.warn=!1}return _({},t,{students:u});case o.Z:if(u=[...t.students])for(let t=0,n=u.length;t<n;t++){let n=u[t];n.id==e.id&&(n.unmuted=!e.mute,n.unmuted&&!e.recovering&&n.speak++)}return _({},t,{students:u});case o.Y:if(s=_({},t.teacher),e.id==s.id)return s.online=!0,_({},t,{teacher:s});for(let n=0,r=(u=[...t.students]).length;n<r;n++){let t=u[n];if(t.id==e.id){t.online=!0,t.online_time=(new Date).getTime();break}}return _({},t,{students:u});case o.J:if((n=e.stream.getId())==(s=_({},t.teacher)).id)return s.stream=e.stream,s.online=!0,s.stream_inited=!1,_({},t,{teacher:s});for(let n=0,r=(u=[...t.students]).length;n<r;n++){let t=u[n];t.id==e.stream.getId()&&(t.stream=e.stream,t.online=!0,t.online_time||(t.online_time=(new Date).getTime()),t.stream_inited=!1)}return _({},t,{students:u});case o.X:if((n=e.stream.getId())==(s=_({},t.teacher)).id)return s.stream=null,s.online=!1,s.stream_inited=!1,_({},t,{teacher:s});for(let e=0,r=(u=[...t.students]).length;e<r;e++){let t=u[e];t.id==n&&(t.stream=null,t.online_time=null,t.online=!1,t.dancing=!1,t.stream_inited=!1)}return _({},t,{students:u});case o.v:if((r=_({},t.switches)).handsup=e.status,t.students=t.students||[],u=[...t.students])for(let t=0,e=u.length;t<e;t++)u[t].rank=null;return _({},t,{switches:r,students:u});case o.s:return(r=_({},t.switches)).gift=e.status,_({},t,{switches:r});case o.E:return(r=_({},t.switches)).magic=e.status,_({},t,{switches:r});case o.F:if(r=_({},t.switches),u=[...t.students])for(let t=0,n=u.length;t<n;t++)u[t].unmuted=!e.status;return r.muteall=e.status,_({},t,{students:u,switches:r});case o.O:return(r=_({},t.switches)).rank=e.status,_({},t,{switches:r});case o.V:return(r=_({},t.switches)).silent=e.status,_({},t,{switches:r});case o.u:if(u=[...t.students])for(let t=0,n=u.length;t<n;t++){let n=u[t];if(n.id==e.id){n.rank=e.rank,n.handsup++;break}}return _({},t,{students:u});case o.m:if(u=[...t.students])for(let t=0,n=u.length;t<n;t++){let n=u[t];n.id==e.id?n.dancing=e.status:n.dancing=!1}return _({},t,{students:u});case o.e:return(i=_({},t.status)).started=!0,y.store("STATUS_"+i.id,i),_({},t,{status:i});case o.h:return(i=_({},t.status)).paused=!0,y.store("STATUS_"+i.id,i),_({},t,{status:i});case o.j:return(i=_({},t.status)).paused=!1,y.store("STATUS_"+i.id,i),_({},t,{status:i});case o.g:return(i=_({},t.status)).started=!1,i.paused=!1,y.store("STATUS_"+i.id,i),_({},t,{status:i});case o.l:return(i=_({},t.status)).started&&!i.paused?(i.duration--,y.store("STATUS_"+i.id,i),_({},t,{status:i})):t;case o.k:return(i=_({},t.status)).waiting-=1e3,_({},t,{status:i});case o.t:u=[...t.students];let E=e.data;if(u)for(let t=0,e=u.length;t<e;t++){let e=u[t];for(let t=0,n=E.length;t<n;t++){let n=E[t];if(n.to_id==e.id){e.gift_total=n.total;break}}}return _({},t,{students:u});case o.L:u=[...t.students];let O=e.percent,g=e.id;if(u)if(100==O){let t=null,e=1;for(let n=0,r=u.length;n<r;n++){let r=u[n];r.id==g?(r.percent=O,t=r):r.progress_rank&&e++}t&&(t.progress_rank=e)}else for(let t=0,e=u.length;t<e;t++){let e=u[t];if(e.id==g){e.percent=O;break}}return _({},t,{students:u});case o.K:if(u=[...t.students])for(let t=0,e=u.length;t<e;t++){let e=u[t];e.progress_rank=null,e.percent=null}return _({},t,{students:u});case o.N:return(r=_({},t.switches)).questionList=e.status,_({},t,{switches:r});case o.M:return(r=_({},t.switches)).questionDetail=e.status,_({},t,{switches:r});default:return t}};e.a=Object(r.combineReducers)({dialog:c,login:f,main:p,room:E})},,function(t,e,n){var r=n(30),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(4).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(7),o=n(71),u=n(49),i=n(20);t.exports=function(t,e){for(var n=o(e),c=i.f,s=u.f,a=0;a<n.length;a++){var f=n[a];r(t,f)||c(t,f,s(e,f))}}},,function(t,e,n){var r=n(8),o=n(41),u="".split;t.exports=r(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==o(t)?u.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(13)("unscopables"),o=n(45),u=n(6),i=Array.prototype;null==i[r]&&u(i,r,o(null)),t.exports=function(t){i[r][t]=!0}},function(t,e,n){t.exports=!n(8)(function(){String(Symbol())})},function(t,e,n){var r=n(14),o=n(20),u=n(12),i=n(65);t.exports=r?Object.defineProperties:function(t,e){u(t);for(var n,r=i(e),c=r.length,s=0;c>s;)o.f(t,n=r[s++],e[n]);return t}},function(t,e,n){var r=n(46),o=n(32);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(23),o=n(57),u=n(67);t.exports=function(t){return function(e,n,i){var c,s=r(e),a=o(s.length),f=u(i,a);if(t&&n!=n){for(;a>f;)if((c=s[f++])!=c)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(30),o=Math.max,u=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):u(n,e)}},function(t,e,n){var r=n(48),o=n(4).WeakMap;t.exports="function"==typeof o&&/native code/.test(r.call(o))},function(t,e,n){"use strict";var r=n(35),o=n(75),u=n(51),i=n(77),c=n(53),s=n(6),a=n(38),f=n(29),l=n(13)("iterator"),d=n(34),p=n(50),_=p.IteratorPrototype,m=p.BUGGY_SAFARI_ITERATORS,y=function(){return this};t.exports=function(t,e,n,p,E,O,g){o(n,e,p);var S,h,v,T=function(t){if(t===E&&R)return R;if(!m&&t in A)return A[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},b=e+" Iterator",N=!1,A=t.prototype,I=A[l]||A["@@iterator"]||E&&A[E],R=!m&&I||T(E),w="Array"==e&&A.entries||I;if(w&&(S=u(w.call(new t)),_!==Object.prototype&&S.next&&(f||u(S)===_||(i?i(S,_):"function"!=typeof S[l]&&s(S,l,y)),c(S,b,!0,!0),f&&(d[b]=y))),"values"==E&&I&&"values"!==I.name&&(N=!0,R=function(){return I.call(this)}),f&&!g||A[l]===R||s(A,l,R),d[e]=R,E)if(h={values:T("values"),keys:O?R:T("keys"),entries:T("entries")},g)for(v in h)!m&&!N&&v in A||a(A,v,h[v]);else r({target:e,proto:!0,forced:m||N},h);return h}},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,u=o&&!r.call({1:2},1);e.f=u?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(72),o=n(73),u=n(12),i=n(4).Reflect;t.exports=i&&i.ownKeys||function(t){var e=r.f(u(t)),n=o.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(46),o=n(32).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(8),o=/#|\.prototype\./,u=function(t,e){var n=c[i(t)];return n==a||n!=s&&("function"==typeof e?r(e):!!e)},i=u.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=u.data={},s=u.NATIVE="N",a=u.POLYFILL="P";t.exports=u},function(t,e,n){"use strict";var r=n(50).IteratorPrototype,o=n(45),u=n(28),i=n(53),c=n(34),s=function(){return this};t.exports=function(t,e,n){var a=e+" Iterator";return t.prototype=o(r,{next:u(1,n)}),i(t,a,!1,!0),c[a]=s,t}},function(t,e,n){t.exports=!n(8)(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})},function(t,e,n){var r=n(78);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,o){return r(n,o),e?t.call(n,o):n.__proto__=o,n}}():void 0)},function(t,e,n){var r=n(15),o=n(12);t.exports=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){},function(t,e,n){},function(t,e,n){const r=n(16);t.exports=new class{constructor(){this.$inited=!1}__init(){this.$dom=r('<div class="loading-mask"><div class="loading-close"></div><div class="loading-text"></div></div>'),this.$dom.hide().appendTo("body"),this.$inited=!0,r(this.$dom).on("click",".loading-close",()=>{this.hide()})}show(t=""){this.$inited||this.__init(),r(".loading-text",this.$dom).html(t),this.$dom.fadeIn()}hide(){this.$dom&&this.$dom.fadeOut()}}},function(t,e,n){const r=n(22);t.exports={AGORA_APPID:r.TEST||r.DEBUG?"c6a83fe7f78b490c96f69f3fdb71f682":"d75fe75ab0404a90b2ed7e5bab216f80",AGORA_CHANNEL_KEY:r.TEST||r.DEBUG?"dfc09172cb114b06b002c2f9aa7f0d87":"7c9b6ed9bba54dc59471cfa09e9f23ea",TEST_URL:"https://kecheng1.runsnailrun.com",ONLINE_URL:"https://www.muwenyuwen.com",TENCENT_APPID:1400098973,TENCENT_ACCOUNTTYPE:28218,VIDEO_T_QUALITY:"480P_3",VIDEO_S_QUALITY:"120P_3",ROOM_ID:111111,LARGE_MODE:480,DANCE_MODE:200,SMALL_MODE:88,WEB_IM_GROUP_TIP:{JOIN:1,QUIT:2,KICK:3,SET_ADMIN:4,CANCEL_ADMIN:5,MODIFY_GROUP_INFO:6,MODIFY_MEMBER_INFO:7},CELL_COUNT:4,LOGIN_E_NET:201,LOGOUT_E_KICKED:103,LOGOUT_E_NET:102,LOGOUT_SUCCESS:101,GENERAL_E_NOT_LOGIN:1003,JS_READY:"jsready",INIT_ROOM:"initroom",MEMBER_ADD:"member_add",MEMBER_LEAVE:"member_leave",CLEARLINES:"clearlines",NEXT_PAGE:"nextpage",SYNC:"sync",VIDEO_PLAY:"videoplay",VIDEO_STOP:"videostop",OPEN_RACE:"#openrace",CLOSE_RACE:"#closerace",OPEN_MIC:"#openmic",CLOSE_MIC:"#closemic",COURSE_PAUSE:"#coursepause",COURSE_RESUME:"#courseresume",PUT_DANCE:"#putdance",BACK_DANCE:"#backdance",SCENE_MOVE:"scenemove",START_COURSE:"*startcourse",STOP_COURSE:"*stopcourse",WARN:"warn",WARN_RELIEVE:"warn_relieve",ENABLE_MAGIC:"enablemagic",DISABLE_MAGIC:"disablemagic",MUTE_ALL:"#muteall",UNMUTE_ALL:"#unmuteall",SHOW_RANKS:"*showranks",HIDE_RANKS:"*hideranks",UPDATE:{AVAILABLE:"update available",LASTEST:"the lastest version",CHECKING:"checking for update",ERROR:"update error",DOWNLOADING:"update downloading",DOWNLOADED:"update downloaded"},COCOS:1}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);n(10),n(25);var r=n(0),o=n.n(r),u=n(40),i=n(5),c=n(55),s=n(19),a=(n(2),n(54)),f=n.n(a),l="/Users/owen/temp/kecheng-pc/dev/scripts/version.js";n(80),n(81),n(130);const{ipcRenderer:d}=n(9),p=n(11),_=n(9).remote,m=[f.a],y=Object(s.createStore)(c.a,Object(s.applyMiddleware)(...m));Object(u.render)(o.a.createElement(i.Provider,{store:y,__source:{fileName:l,lineNumber:79},__self:void 0},o.a.createElement(class extends o.a.Component{constructor(t){super(t),this.state={version:"v-.-.-",message:"",progress:null}}componentDidMount(){let t=window.location.hash.substring(1);this.setState({version:t}),d.on("message",(t,e,n)=>{let r;e==p.UPDATE.LASTEST?r="已是最新版本。":e==p.UPDATE.AVAILABLE?r="发现新版本。":e==p.UPDATE.CHECKING?r="正在检查新版本...":e==p.UPDATE.ERROR?r="更新出错！":e==p.UPDATE.DOWNLOADING?r="正在下载新版本...":e==p.UPDATE.DOWNLOADED&&(r="下载完成，请等待安装..."),this.setState({message:r,progress:n})})}render(){return o.a.createElement("div",{className:"page",__source:{fileName:l,lineNumber:58},__self:this},o.a.createElement("div",{className:"close-btn",onClick:()=>{_.getCurrentWindow().close()},__source:{fileName:l,lineNumber:59},__self:this}),o.a.createElement("div",{className:"logo",__source:{fileName:l,lineNumber:63},__self:this}),o.a.createElement("div",{className:"tips",__source:{fileName:l,lineNumber:64},__self:this},"当前版本: ",this.state.version,", ",this.state.message),this.state.progress?o.a.createElement("div",{className:"progress",__source:{fileName:l,lineNumber:66},__self:this},o.a.createElement("div",{className:"bar",__source:{fileName:l,lineNumber:67},__self:this},o.a.createElement("div",{className:"bar-i",style:{width:`${this.state.progress.percent}%`},__source:{fileName:l,lineNumber:68},__self:this})),o.a.createElement("div",{className:"txt",__source:{fileName:l,lineNumber:72},__self:this},this.state.progress.percent>>0,"%")):"")}},{__source:{fileName:l,lineNumber:80},__self:void 0})),document.getElementById("app"))},function(t,e,n){}]);