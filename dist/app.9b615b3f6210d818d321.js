module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 120);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return SHOW_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return SHOW_CONFIRM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return HIDE_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return DENTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CALENDAR_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return COURSE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return ROOM_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return ROOM_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return START_COURSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return ROOM_GIFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return ROOM_MORE_INFO; });
/* unused harmony export GIFT_LIST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return NEW_GIFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return WARN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return USER_MUTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return USER_ADD_ROOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return NEW_STREAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return STREAM_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANNEL_NEW_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CHANNEL_USER_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return HANDSUP_SWITCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return GIFT_SWITCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return MAGIC_SWITCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return MUTEALL_SWITCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return RANK_SWITCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return SILENT_SWITCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return HANDSUP_RANK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return DANCING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return COURSE_BEGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return COURSE_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return COURSE_TICK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return COURSE_STARTING_TICK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return COURSE_PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return COURSE_RESUME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return ENTER_TESTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return EXIT_TESTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return ENTER_MY_COURSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return EXIT_MY_COURSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return GIFT_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return PROGRESS_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return PROGRESS_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return NET_STATUS_BAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return NET_STATUS_GOOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_USER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return COURSE_RECORDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return LESSON_COMMING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LESSONS_COMMING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return LESSONS_DONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return LESSONS_TOTAL_COMMING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return LESSONS_TOTAL_DONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return QUESTION_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return QUESTION_DETAIL; });
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const SHOW_ALERT = "SHOW_ALERT";
const SHOW_CONFIRM = "SHOW_CONFIRM";
const HIDE_DIALOG = "HIDE_DIALOG";
const DENTITY = {
  STUDENT: 1,
  MASTER: 2
};
const CALENDAR_DATA = "CALENDAR_DATA";
const COURSE_DATA = "COURSE_DATA";
const ROOM_LIST = "ROOM_LIST";
const ROOM_INFO = "ROOM_INFO";
const LOGOUT = "LOGOUT";
const START_COURSE = "START_COURSE";
const ROOM_GIFT = "ROOM_GIFT";
const ROOM_MORE_INFO = "ROOM_MORE_INFO";
const GIFT_LIST = "GIFT_LIST";
const NEW_GIFT = "NEW_GIFT";
const WARN = "WARN";
const USER_MUTED = "USER_MUTED";
const USER_ADD_ROOM = "USER_ADD_ROOM";
const NEW_STREAM = "NEW_STREAM";
const STREAM_LEAVE = "STREAM_LEAVE";
const CHANNEL_NEW_USER = "CHANNEL_NEW_USER";
const CHANNEL_USER_LEAVE = "CHANNEL_USER_LEAVE";
const HANDSUP_SWITCH = "HANDSUP_SWITCH";
const GIFT_SWITCH = "GIFT_SWITCH";
const MAGIC_SWITCH = "MAGIC_SWITCH";
const MUTEALL_SWITCH = "MUTEALL_SWITCH";
const RANK_SWITCH = "RANK_SWITCH";
const SILENT_SWITCH = "SILENT_SWITCH";
const HANDSUP_RANK = "HANDSUP_RANK";
const DANCING = "DANCING";
const COURSE_BEGIN = "COURSE_BEGIN";
const COURSE_END = "COURSE_END";
const COURSE_TICK = "COURSE_TICK";
const COURSE_STARTING_TICK = "COURSE_STARTING_TICK";
const COURSE_PAUSE = "COURSE_PAUSE";
const COURSE_RESUME = "COURSE_RESUME";
const ENTER_TESTER = "ENTER_TESTER";
const EXIT_TESTER = "EXIT_TESTER";
const ENTER_MY_COURSES = "ENTER_MY_COURSES";
const EXIT_MY_COURSES = "EXIT_MY_COURSES";
const GIFT_UPDATE = "GIFT_UPDATE";
const PROGRESS_UPDATE = "PROGRESS_UPDATE";
const PROGRESS_RESET = "PROGRESS_RESET";
const NET_STATUS_BAD = "NET_STATUS_BAD";
const NET_STATUS_GOOD = "NET_STATUS_GOOD";
const CHANGE_USER_INFO = "CHANGE_USER_INFO";
const COURSE_RECORDING = "COURSE_RECORDING";
const LESSON_COMMING = "LESSON_COMMING";
const LESSONS_COMMING = "LESSONS_COMMING";
const LESSONS_DONE = "LESSONS_DONE";
const LESSONS_TOTAL_COMMING = "LESSONS_TOTAL_COMMING";
const LESSONS_TOTAL_DONE = "LESSONS_TOTAL_DONE";
const QUESTION_LIST = "QUESTION_LIST";
const QUESTION_DETAIL = "QUESTION_DETAIL";

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./dev/scripts/Storage.js
var Storage = __webpack_require__(8);

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(3);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// CONCATENATED MODULE: ./dev/scripts/loading.js


class loading_Loading {
  constructor() {
    this.$inited = false;
  }

  __init() {
    this.$dom = external_jquery_default()(`<div class="loading-mask"><div class="loading-close"></div><div class="loading-text"></div></div>`);
    this.$dom.hide().appendTo("body");
    this.$inited = true;
    external_jquery_default()(this.$dom).on("click", ".loading-close", () => {
      this.hide();
    });
  }

  show(message = "") {
    if (!this.$inited) {
      this.__init();
    }

    external_jquery_default()(".loading-text", this.$dom).html(message);
    this.$dom.fadeIn();
  }

  hide() {
    if (this.$dom) {
      this.$dom.fadeOut();
    }
  }

}

/* harmony default export */ var loading = (new loading_Loading());
// EXTERNAL MODULE: ./dev/scripts/constants/ActionTypes.js
var ActionTypes = __webpack_require__(0);

// CONCATENATED MODULE: ./dev/scripts/actions/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actions_alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return actions_confirm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return showLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hideLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return restoreUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return onRoomList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return onCalendarData; });
/* unused harmony export onCourseData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return onRoomInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return onLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return onStartCourse; });
/* unused harmony export onRoomGifts */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return onRoomMoreInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return onNewGift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return onWarn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return onUserMuted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return onUserAddRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return onNewStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return onStreamLeave; });
/* unused harmony export onNewChannelUser */
/* unused harmony export onChannelUserLeave */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return onHandsupSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return onMagicSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return onMuteAllSwitch; });
/* unused harmony export onGiftSwitch */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return onRankSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return onSilentSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return onHandsupRank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return onDancing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return onBeginCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return onCourseRecording; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return onEndCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return onPauseCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return onResumeCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return onCourseTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return onCourseStartingTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return onEnterTester; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return onEnterMyCourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return onExitMyCourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return onExitTester; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return onUpdateGift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return onProgressUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return onProgressReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return onNetStatusBad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return onNetStatusGood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return onChangeUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return onLessonComming; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return onLessonsComming; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return onLessonsDone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return onLessonsTotalComming; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return onLessonsTotalDone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return onQuestionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return onQuestionDetail; });



const actions_alert = configure => ({
  type: ActionTypes["T" /* SHOW_ALERT */],
  configure
});
const actions_confirm = configure => ({
  type: ActionTypes["U" /* SHOW_CONFIRM */],
  configure
});
const hide = () => ({
  type: ActionTypes["w" /* HIDE_DIALOG */]
});
const showLoading = message => dispatch => {
  loading.show(message);
};
const hideLoading = () => dispatch => {
  loading.hide();
};
const restoreUserInfo = () => dispatch => {
  let userinfo = Storage["default"].get("USER_INFO");

  if (userinfo) {
    dispatch(loginSuccess(userinfo));
  }
};
const loginSuccess = account => dispatch => {
  Storage["default"].store("USER_INFO", account);
  dispatch({
    type: ActionTypes["C" /* LOGIN_SUCCESS */],
    account
  });
};
const onRoomList = rooms => ({
  type: ActionTypes["R" /* ROOM_LIST */],
  rooms
});
const onCalendarData = data => ({
  type: ActionTypes["a" /* CALENDAR_DATA */],
  data
});
const onCourseData = data => ({
  type: ActionTypes["f" /* COURSE_DATA */],
  data
});
const onRoomInfo = data => ({
  type: ActionTypes["Q" /* ROOM_INFO */],
  data
});
const onLogout = () => dispatch => {
  Storage["default"].clear();
  dispatch({
    type: ActionTypes["D" /* LOGOUT */]
  });
};
const onStartCourse = () => ({
  type: ActionTypes["W" /* START_COURSE */]
});
const onRoomGifts = data => ({
  type: ActionTypes["P" /* ROOM_GIFT */],
  data
});
const onRoomMoreInfo = data => ({
  type: ActionTypes["S" /* ROOM_MORE_INFO */],
  data
});
const onNewGift = data => ({
  type: ActionTypes["I" /* NEW_GIFT */],
  data
});
const onWarn = (data, status) => ({
  type: ActionTypes["ab" /* WARN */],
  data,
  status
});
const onUserMuted = (id, mute = true, recovering = false) => ({
  type: ActionTypes["Z" /* USER_MUTED */],
  id,
  mute,
  recovering
});
const onUserAddRoom = id => ({
  type: ActionTypes["Y" /* USER_ADD_ROOM */],
  id
});
const onNewStream = stream => ({
  type: ActionTypes["J" /* NEW_STREAM */],
  stream
});
const onStreamLeave = stream => ({
  type: ActionTypes["X" /* STREAM_LEAVE */],
  stream
});
const onNewChannelUser = id => ({
  type: ActionTypes["c" /* CHANNEL_NEW_USER */],
  id
});
const onChannelUserLeave = id => ({
  type: ActionTypes["d" /* CHANNEL_USER_LEAVE */],
  id
});
const onHandsupSwitch = status => ({
  type: ActionTypes["v" /* HANDSUP_SWITCH */],
  status
});
const onMagicSwitch = status => ({
  type: ActionTypes["E" /* MAGIC_SWITCH */],
  status
});
const onMuteAllSwitch = status => ({
  type: ActionTypes["F" /* MUTEALL_SWITCH */],
  status
});
const onGiftSwitch = status => ({
  type: ActionTypes["s" /* GIFT_SWITCH */],
  status
});
const onRankSwitch = status => ({
  type: ActionTypes["O" /* RANK_SWITCH */],
  status
});
const onSilentSwitch = status => ({
  type: ActionTypes["V" /* SILENT_SWITCH */],
  status
});
const onHandsupRank = (id, rank) => ({
  type: ActionTypes["u" /* HANDSUP_RANK */],
  id,
  rank
});
const onDancing = (id, status) => ({
  type: ActionTypes["m" /* DANCING */],
  id,
  status
});
const onBeginCourse = () => ({
  type: ActionTypes["e" /* COURSE_BEGIN */]
});
const onCourseRecording = status => ({
  type: ActionTypes["i" /* COURSE_RECORDING */],
  status
});
const onEndCourse = () => ({
  type: ActionTypes["g" /* COURSE_END */]
});
const onPauseCourse = () => ({
  type: ActionTypes["h" /* COURSE_PAUSE */]
});
const onResumeCourse = () => ({
  type: ActionTypes["j" /* COURSE_RESUME */]
});
const onCourseTick = () => ({
  type: ActionTypes["l" /* COURSE_TICK */]
});
const onCourseStartingTick = () => ({
  type: ActionTypes["k" /* COURSE_STARTING_TICK */]
});
const onEnterTester = page => ({
  type: ActionTypes["p" /* ENTER_TESTER */],
  page
});
const onEnterMyCourses = page => ({
  type: ActionTypes["o" /* ENTER_MY_COURSES */],
  page
});
const onExitMyCourses = page => ({
  type: ActionTypes["q" /* EXIT_MY_COURSES */],
  page
});
const onExitTester = () => ({
  type: ActionTypes["r" /* EXIT_TESTER */]
});
const onUpdateGift = data => ({
  type: ActionTypes["t" /* GIFT_UPDATE */],
  data
});
const onProgressUpdate = (id, percent) => ({
  type: ActionTypes["L" /* PROGRESS_UPDATE */],
  percent,
  id
});
const onProgressReset = () => ({
  type: ActionTypes["K" /* PROGRESS_RESET */]
});
const onNetStatusBad = () => ({
  type: ActionTypes["G" /* NET_STATUS_BAD */]
});
const onNetStatusGood = () => ({
  type: ActionTypes["H" /* NET_STATUS_GOOD */]
});
const onChangeUserInfo = user => {
  Storage["default"].store("USER_INFO", user);
  return {
    type: ActionTypes["b" /* CHANGE_USER_INFO */],
    user
  };
};
const onLessonComming = commingRoom => {
  return {
    type: ActionTypes["B" /* LESSON_COMMING */],
    commingRoom
  };
};
const onLessonsComming = commingRooms => {
  return {
    type: ActionTypes["x" /* LESSONS_COMMING */],
    commingRooms
  };
};
const onLessonsDone = doneRooms => {
  return {
    type: ActionTypes["y" /* LESSONS_DONE */],
    doneRooms
  };
};
const onLessonsTotalComming = totalComming => {
  return {
    type: ActionTypes["z" /* LESSONS_TOTAL_COMMING */],
    totalComming
  };
};
const onLessonsTotalDone = totalDone => {
  return {
    type: ActionTypes["A" /* LESSONS_TOTAL_DONE */],
    totalDone
  };
};
const onQuestionList = status => ({
  type: ActionTypes["N" /* QUESTION_LIST */],
  status
});
const onQuestionDetail = status => ({
  type: ActionTypes["M" /* QUESTION_DETAIL */],
  status
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _config_const__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_const__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_config_const__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_3__);





class Context {
  get dmg() {
    return this.$dmg;
  }

  set dmg(dmg) {
    this.$dmg = dmg;
  }

  get user() {
    return this.$user || {};
  }

  set user(user) {
    this.$user = user;
  }

  get loading() {
    return this.$loading;
  }

  set loading(loading) {
    this.$loading = loading;
  }

  get detector() {
    return this.$detector;
  }

  set detector(detector) {
    this.$detector = detector;
  }

  get course() {
    return this.$course;
  }

  set course(course) {
    this.$course = course;
  }

  get room() {
    return this.$room;
  }

  set room(room) {
    this.$room = room;
  }

  get session() {
    return this.$session;
  }

  set session(session) {
    this.$session = session;
  }

  get storage() {
    if (!this.$storage) {
      this.$storage = _Storage__WEBPACK_IMPORTED_MODULE_2__["default"];
    }

    return this.$storage;
  }

  set storage(storage) {
    this.$storage = storage;
  }

  get video_device_id() {
    return this.$video_device_id;
  }

  set video_device_id(video_device_id) {
    this.$video_device_id = video_device_id;
  }

  get audio_device_id() {
    return this.$audio_device_id;
  }

  set audio_device_id(audio_device_id) {
    this.$audio_device_id = audio_device_id;
  }

  addDownloaded(url, file) {
    if (!this.$local_files) {
      this.$local_files = {};
    }

    this.$local_files[url] = file;
  }

  getDownloaded(url) {
    if (!this.$local_files) {
      return;
    }

    return this.$local_files[url];
  }

  send_to_main(params) {
    console.log("send_to_main", electron__WEBPACK_IMPORTED_MODULE_3__["ipcRenderer"], params);
    electron__WEBPACK_IMPORTED_MODULE_3__["ipcRenderer"].send(...params);
  }
  /**
   * 是否为低端设备
   */


  isOldDevice() {
    if (this.$is_old_device !== undefined) {
      return this.$is_old_device;
    }

    let oldDevice = localStorage.getItem("IS_OLD_DEVICE");
    this.$is_old_device = oldDevice;
    return oldDevice;
  }
  /**
   * 设置为低端设备
   */


  setOldDevice() {
    localStorage.setItem("IS_OLD_DEVICE", 1);
    this.$is_old_device = true;
  }

  set join_class_enabled(enabled) {
    this.$join_class_enabled = !!enabled;
  }

  get join_class_enabled() {
    if (this.$join_class_enabled === undefined) {
      return true;
    }

    return this.$join_class_enabled;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Context());

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);








class Network extends _eventer__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] {
  constructor() {
    super();

    if (_env__WEBPACK_IMPORTED_MODULE_3__["DEBUG"] || _env__WEBPACK_IMPORTED_MODULE_3__["TEST"]) {
      this.$base_url = _const__WEBPACK_IMPORTED_MODULE_6__["default"].TEST_URL;
    } else {
      this.$base_url = _const__WEBPACK_IMPORTED_MODULE_6__["default"].ONLINE_URL;
    }

    this.$log_queue = [];

    this.__restore_token();
  }

  __restore_token() {
    this.$token = "";
    let result = _context__WEBPACK_IMPORTED_MODULE_2__["default"].storage.get("DYW_TOKEN");

    if (result) {
      this.$token = result;
    }

    result = _context__WEBPACK_IMPORTED_MODULE_2__["default"].storage.get("DYW_SIG_TOKEN");

    if (result) {
      this.$sigtoken = result;
    }
  }

  upload_file(data) {
    return q__WEBPACK_IMPORTED_MODULE_0___default.a.Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('upload_file', data);
      jquery__WEBPACK_IMPORTED_MODULE_5___default.a.ajax(this.$base_url + "/uploadfile/index", {
        headers: {
          "Authorization": `Bearer ${this.$token}`
        },
        method: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: response => {
          if (response.data && response.data.url) {
            resolve(response.data.url);
          } else {
            reject();
          }
        },
        error: () => {
          alert("啊哦，文件上传失败~");
          reject();
        }
      });
    });
  }

  __request(url, data = {}, method = "get") {
    data.client = "pc";
    return q__WEBPACK_IMPORTED_MODULE_0___default.a.Promise((resolve, reject) => {
      let start = new Date().getTime();
      jquery__WEBPACK_IMPORTED_MODULE_5___default.a.ajax(this.$base_url + url, {
        headers: {
          "Authorization": `Bearer ${this.$token}`,
          "Accept": "application/json"
        },
        method: method.toUpperCase(),
        data,
        dataType: "json",
        statusCode: {
          403: () => {
            this.trigger("LOGIN_NEEDED");
          }
        },
        success: res => {
          resolve(res.data);
        },
        error: res => {
          if (res.responseJSON) {
            alert(res.responseJSON.message);
          }

          if (res.status == 401) {
            //登录
            this.trigger("LOGOUT_NEEDED");
            reject();
            return;
          }

          if (!res.responseJSON) {
            alert("啊哦，网络出问题啦~");
          }

          reject();
        }
      });
    });
  }

  set token(token) {
    _context__WEBPACK_IMPORTED_MODULE_2__["default"].storage.store("DYW_TOKEN", token);
    this.$token = token;
  }

  get token() {
    return this.$token;
  }

  set sigtoken(sigtoken) {
    _context__WEBPACK_IMPORTED_MODULE_2__["default"].storage.store("DYW_SIG_TOKEN", sigtoken);
    this.$sigtoken = sigtoken;
  }

  get sigtoken() {
    return this.$sigtoken;
  }
  /**
   * 获取服务器时间
   */


  servcerTime() {
    return this.__request("/api/time");
  }
  /**
   * 用户登录
   * @param {*} data 
   */


  login(data) {
    return this.__request("/user/login", data, "post");
  }
  /**
   * 获取登录身份配置
   * @param {*} data 
   */


  getLoginDentities(data) {
    return this.__request("/api/dentities", data, "post");
  }
  /**
   * 首页-下次课程信息
   */


  getLessonComming() {
    return this.__request('/room/class_lesson_first', {
      client: 'pc'
    }, 'post');
  }
  /**
   * 首页-我的课程列表-将要上的课
   */


  getLessonListComming(data = {}) {
    data.client = 'pc';
    data.type = 'prepare';
    return this.__request('/room/class_lesson_list', data, 'post');
  }
  /**
   * 首页-我的课程列表-已经完成的课
   */


  getLessonListDone(data = {}) {
    data.client = 'pc';
    data.type = 'haved';
    return this.__request('/room/class_lesson_list', data, 'post');
  }
  /**
   * 获取课程安排
   * @param {*} date 
   */


  lessons(date) {
    return this.__request("/room/lesson_date", {
      date
    });
  }
  /**
   * 获取当日课程
   */


  lessonsByDate(date) {
    return this.__request("/room/lesson_list", {
      date
    });
  }
  /**
   * 获取历史课程
   */


  lessonsByHistory() {
    return this.__request("/room/my_lesson_list", {
      client: 'pc',
      type: 'haved'
    });
  }
  /**
   * 获取房间数据
   * @param {*} channel_id 
   */


  getRoomInfo(channel_id) {
    return this.__request("/room/channel_key", {
      channel_id
    }, "post");
  }
  /**
   * 录播时获取房间数据
   * @param {*} channel_id 
   */


  getRoomInfoForRecord(channel_id) {
    return this.__request("/room/record_room_info", {
      channel_id
    }, "post");
  }
  /**
   * 获取礼物列表
   */


  getGiftsList() {
    return this.__request("/api/gifts", {});
  }
  /**
   * 发礼物
   */


  sendGift(data) {
    return this.__request("/api/give_gift", data, "post");
  }
  /**
   * 坐姿警告
   */


  warn(data) {
    return this.__request("/room/user_leave_class", data, "post");
  }
  /**
   * 图像识别
   */


  baseUpload(data) {
    return this.__request("/room/user_base_upload", data, "post");
  }
  /**
   * 关闭房间
   */


  closeRoom(channel_id) {
    return this.__request("/room/close_the_room", {
      channel_id
    }, "post");
  }
  /**
   * 获取当前时间
   */


  getServerTime() {
    return this.__request('/api/time');
  }
  /**
   * 开始上课
   */


  beginClass(channel_id, user_ids) {
    return this.__request('/room/class_begin', {
      channel_id,
      user_ids
    }, "post");
  }
  /**
   * 修改用户信息
   */


  changeUserInfo(data) {
    return this.__request('/user/edit_user_info', data, "post");
  }
  /**
   * 上课预警
   */


  earlyWarning(channel_id) {
    return this.__request('/room/room_early_warning', {
      channel_id
    }, "post");
  }
  /**
   * 获取班级联系人信息
   */


  getContactInfo() {
    return this.__request('/user/banji_contact');
  }
  /**
   * 设备检测
   */


  checkDevice() {
    return this.__request("/api/device_testing", {
      logs: [window.ENV_CONF.systeminfo]
    }, "post");
  }

  __get_system_info() {
    let usedMemory = electron__WEBPACK_IMPORTED_MODULE_4__["remote"].process.getProcessMemoryInfo(),
        memory = electron__WEBPACK_IMPORTED_MODULE_4__["remote"].process.getSystemMemoryInfo(),
        cpu = electron__WEBPACK_IMPORTED_MODULE_4__["remote"].process.getCPUUsage();

    let _memory = n => Math.round(n / 1024 * 10) / 10 + "M";

    let system = {
      um: `${_memory(usedMemory.workingSetSize)}/${_memory(usedMemory.peakWorkingSetSize)}`,
      tm: `${_memory(memory.free)}/${Math.round(memory.total / 1024 / 1024 * 10) / 10 + "G"}/${memory.swapFree || 0}/${memory.swapTotal || 0}`,
      cpu: `${Math.round(cpu.percentCPUUsage * 100) / 100}/${cpu.idleWakeupsPerSecond}`
    };
    return system;
  }

  reportSystemBaseInfo() {
    let _timer = setInterval(() => {
      if (window.ENV_CONF && window.ENV_CONF.systeminfo) {
        clearInterval(_timer);
        this.log(window.ENV_CONF.systeminfo);
      }
    }, 1000);
  }
  /**
   * 发送log数据
   * @param {*} data 
   */


  log(data = {}) {
    console.log('net log:', data);
    this.$log_queue.push(data);

    if (!this.$log_delay) {
      this.$log_delay = setInterval(() => {
        if (this.$log_queue.length > 0) {
          jquery__WEBPACK_IMPORTED_MODULE_5___default.a.post(`${this.$base_url}/api/h5_log`, {
            logs: this.$log_queue,
            user: _context__WEBPACK_IMPORTED_MODULE_2__["default"].user.id,
            system: this.__get_system_info()
          });
        }

        this.$log_queue = [];
      }, 8000);
    }
  }

  device_check() {}

}

/* harmony default export */ __webpack_exports__["default"] = (new Network());

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 本地存储类
 * 用于将信息固化到本地存储
 * namespace 为命名空间，每个Session都会取account的userid为命名空间，避免多个Session数据冲突
 */
class Storage {
  constructor(namespace = "MINGXI.INC") {
    this.$namespace = namespace;
    this.$data = localStorage.getItem(this.$namespace);
    console.log("namespace...", namespace, this.$data);

    if (this.$data) {
      try {
        this.$data = JSON.parse(this.$data);
      } catch (e) {
        this.$data = {};
        localStorage.removeItem(this.$namespace);
      }
    } else {
      this.$data = {};
    }
  }

  get(key) {
    return this.$data[key];
  }

  store(key, data) {
    this.$data[key] = data;
    localStorage.setItem(this.$namespace, JSON.stringify(this.$data));
  }

  clear() {
    localStorage.removeItem(this.$namespace);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Storage());

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = typeof window == 'object' && window && window.Math == Math ? window
  : typeof self == 'object' && self && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var DESCRIPTORS = __webpack_require__(17);
var has = __webpack_require__(12);
var isObject = __webpack_require__(18);
var defineProperty = __webpack_require__(22).f;
var copyConstructorProperties = __webpack_require__(44);
var NativeSymbol = __webpack_require__(9).Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  __webpack_require__(27)({ global: true, forced: true }, { Symbol: SymbolWrapper });
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var definePropertyModule = __webpack_require__(22);
var createPropertyDescriptor = __webpack_require__(33);

module.exports = __webpack_require__(17) ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUG", function() { return DEBUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TC_DEBUG", function() { return TC_DEBUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST", function() { return TEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEACHER", function() { return TEACHER; });
const DEBUG = true;
const TC_DEBUG = true;
const TEST = false;
const TEACHER = true;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(24);
var addToUnscopables = __webpack_require__(73);
var Iterators = __webpack_require__(37);
var InternalStateModule = __webpack_require__(49);
var defineIterator = __webpack_require__(77);
var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(15)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    } // Add the given callback function to the end of the array with
    // eventSubscriptions for this event.


    subscribers.push(callback);
  }

  off(eventName) {
    delete this.eventSubscriptions[eventName];
  }

  trigger(eventName, data, context) {
    var subscribers = this.eventSubscriptions[eventName],
        i,
        iMax;

    if (typeof subscribers === 'undefined') {
      // No list found for this event, return early to abort execution
      return;
    } // Ensure data is an array or is wrapped in an array,
    // for Function.prototype.apply use


    data = data instanceof Array ? data : [data]; // Set a default value for `this` in the callback

    context = context || this;

    for (i = 0, iMax = subscribers.length; i < iMax; i += 1) {
      subscribers[i].apply(context, data);
    }
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Eventer);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(25)('wks');
var uid = __webpack_require__(50);
var Symbol = __webpack_require__(9).Symbol;
var NATIVE_SYMBOL = __webpack_require__(74);

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(17);
var IE8_DOM_DEFINE = __webpack_require__(42);
var anObject = __webpack_require__(19);
var toPrimitive = __webpack_require__(43);
var nativeDefineProperty = Object.defineProperty;

exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(66);
var requireObjectCoercible = __webpack_require__(29);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var setGlobal = __webpack_require__(34);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.0.0',
  mode: __webpack_require__(35) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var DOMIterables = __webpack_require__(82);
var ArrayIteratorMethods = __webpack_require__(16);
var global = __webpack_require__(9);
var hide = __webpack_require__(13);
var wellKnownSymbol = __webpack_require__(21);
var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      hide(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (e) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) hide(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        hide(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (e) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var getOwnPropertyDescriptor = __webpack_require__(47).f;
var hide = __webpack_require__(13);
var redefine = __webpack_require__(39);
var setGlobal = __webpack_require__(34);
var copyConstructorProperties = __webpack_require__(44);
var isForced = __webpack_require__(72);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      hide(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(96)();
}


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var hide = __webpack_require__(13);

module.exports = function (key, value) {
  try {
    hide(global, key, value);
  } catch (e) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(25)('keys');
var uid = __webpack_require__(50);

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
var document = __webpack_require__(9).document;
// typeof document.createElement is 'object' in old IE
var exist = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return exist ? document.createElement(it) : {};
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var hide = __webpack_require__(13);
var has = __webpack_require__(12);
var setGlobal = __webpack_require__(34);
var nativeFunctionToString = __webpack_require__(48);
var InternalStateModule = __webpack_require__(49);
var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

__webpack_require__(25)('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else hide(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(17) && !__webpack_require__(15)(function () {
  return Object.defineProperty(__webpack_require__(38)('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(18);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var ownKeys = __webpack_require__(64);
var getOwnPropertyDescriptorModule = __webpack_require__(47);
var definePropertyModule = __webpack_require__(22);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var toIndexedObject = __webpack_require__(24);
var arrayIndexOf = __webpack_require__(67)(false);
var hiddenKeys = __webpack_require__(31);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(17);
var propertyIsEnumerableModule = __webpack_require__(70);
var createPropertyDescriptor = __webpack_require__(33);
var toIndexedObject = __webpack_require__(24);
var toPrimitive = __webpack_require__(43);
var has = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(42);
var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25)('native-function-to-string', Function.toString);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(71);
var isObject = __webpack_require__(18);
var hide = __webpack_require__(13);
var objectHas = __webpack_require__(12);
var sharedKey = __webpack_require__(36);
var hiddenKeys = __webpack_require__(31);
var WeakMap = __webpack_require__(9).WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    hide(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(19);
var defineProperties = __webpack_require__(75);
var enumBugKeys = __webpack_require__(32);
var html = __webpack_require__(62);
var documentCreateElement = __webpack_require__(38);
var IE_PROTO = __webpack_require__(36)('IE_PROTO');
var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

__webpack_require__(31)[IE_PROTO] = true;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(53);
var hide = __webpack_require__(13);
var has = __webpack_require__(12);
var IS_PURE = __webpack_require__(35);
var ITERATOR = __webpack_require__(21)('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(12);
var toObject = __webpack_require__(54);
var IE_PROTO = __webpack_require__(36)('IE_PROTO');
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(79);
var ObjectPrototype = Object.prototype;

module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(29);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(22).f;
var has = __webpack_require__(12);
var TO_STRING_TAG = __webpack_require__(21)('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

const ENV = __webpack_require__(14);

module.exports = {
  AGORA_APPID: ENV.TEST || ENV.DEBUG ? "c6a83fe7f78b490c96f69f3fdb71f682" : "d75fe75ab0404a90b2ed7e5bab216f80",
  AGORA_CHANNEL_KEY: ENV.TEST || ENV.DEBUG ? "dfc09172cb114b06b002c2f9aa7f0d87" : "7c9b6ed9bba54dc59471cfa09e9f23ea",
  // TEST_URL 			: "https://admintest.youshiyuwen.cn",
  TEST_URL: "https://kecheng1.runsnailrun.com",
  ONLINE_URL: "https://www.muwenyuwen.com",
  TENCENT_APPID: 1400098973,
  TENCENT_ACCOUNTTYPE: 28218,
  VIDEO_T_QUALITY: "480P_3",
  VIDEO_S_QUALITY: "120P_3",
  ROOM_ID: 111111,
  LARGE_MODE: 480,
  DANCE_MODE: 200,
  SMALL_MODE: 88,
  WEB_IM_GROUP_TIP: {
    "JOIN": 1,
    //加入群组
    "QUIT": 2,
    //退出群组
    "KICK": 3,
    //被踢出群组
    "SET_ADMIN": 4,
    //被设置为管理员
    "CANCEL_ADMIN": 5,
    //被取消管理员
    "MODIFY_GROUP_INFO": 6,
    //修改群资料
    "MODIFY_MEMBER_INFO": 7 //修改群成员信息

  },
  CELL_COUNT: 4,
  LOGIN_E_NET: 201,
  LOGOUT_E_KICKED: 103,
  LOGOUT_E_NET: 102,
  LOGOUT_SUCCESS: 101,
  GENERAL_E_NOT_LOGIN: 1003,
  JS_READY: "jsready",
  INIT_ROOM: "initroom",
  MEMBER_ADD: "member_add",
  MEMBER_LEAVE: "member_leave",
  CLEARLINES: "clearlines",
  NEXT_PAGE: "nextpage",
  SYNC: "sync",
  VIDEO_PLAY: "videoplay",
  VIDEO_STOP: "videostop",
  OPEN_RACE: "#openrace",
  CLOSE_RACE: "#closerace",
  OPEN_MIC: "#openmic",
  CLOSE_MIC: "#closemic",
  COURSE_PAUSE: "#coursepause",
  COURSE_RESUME: "#courseresume",
  PUT_DANCE: "#putdance",
  BACK_DANCE: "#backdance",
  SCENE_MOVE: "scenemove",
  START_COURSE: "*startcourse",
  STOP_COURSE: "*stopcourse",
  WARN: "warn",
  WARN_RELIEVE: "warn_relieve",
  ENABLE_MAGIC: "enablemagic",
  DISABLE_MAGIC: "disablemagic",
  MUTE_ALL: "#muteall",
  UNMUTE_ALL: "#unmuteall",
  SHOW_RANKS: "*showranks",
  HIDE_RANKS: "*hideranks",
  UPDATE: {
    AVAILABLE: "update available",
    LASTEST: "the lastest version",
    CHECKING: "checking for update",
    ERROR: "update error",
    DOWNLOADING: "update downloading",
    DOWNLOADED: "update downloaded"
  },
  COCOS: 1
};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(23);

// EXTERNAL MODULE: ./dev/scripts/constants/ActionTypes.js
var ActionTypes = __webpack_require__(0);

// CONCATENATED MODULE: ./dev/scripts/reducers/dialog.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const dialog = (state = {
  type: "alert",
  configure: {
    content: ""
  }
}, action) => {
  switch (action.type) {
    case ActionTypes["T" /* SHOW_ALERT */]:
      return _objectSpread({}, state, {
        type: "alert",
        configure: action.configure,
        showing: true
      });

    case ActionTypes["U" /* SHOW_CONFIRM */]:
      return _objectSpread({}, state, {
        type: "confirm",
        configure: action.configure,
        showing: true
      });

    case ActionTypes["w" /* HIDE_DIALOG */]:
      return _objectSpread({}, state, {
        showing: false
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_dialog = (dialog);
// CONCATENATED MODULE: ./dev/scripts/reducers/login.js
function login_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { login_defineProperty(target, key, source[key]); }); } return target; }

function login_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const login = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes["C" /* LOGIN_SUCCESS */]:
      return login_objectSpread({}, state, {
        account: action.account
      });

    case ActionTypes["D" /* LOGOUT */]:
      return login_objectSpread({}, state, {
        account: null
      });

    case ActionTypes["b" /* CHANGE_USER_INFO */]:
      return login_objectSpread({}, state, {
        account: action.user
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_login = (login);
// CONCATENATED MODULE: ./dev/scripts/reducers/main.js
function main_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { main_defineProperty(target, key, source[key]); }); } return target; }

function main_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const main = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes["R" /* ROOM_LIST */]:
      return main_objectSpread({}, state, {
        rooms: action.rooms
      });

    case ActionTypes["Q" /* ROOM_INFO */]:
      return main_objectSpread({}, state, {
        room: action.data
      });

    case ActionTypes["a" /* CALENDAR_DATA */]:
      return main_objectSpread({}, state, {
        calendar: action.data
      });

    case ActionTypes["W" /* START_COURSE */]:
      return main_objectSpread({}, state, {
        courseStarted: true
      });

    case ActionTypes["g" /* COURSE_END */]:
      return main_objectSpread({}, state, {
        courseStarted: false
      });

    case ActionTypes["p" /* ENTER_TESTER */]:
      return main_objectSpread({}, state, {
        courseStarted: false,
        enterTester: true,
        fromPage: action.page
      });

    case ActionTypes["o" /* ENTER_MY_COURSES */]:
      return main_objectSpread({}, state, {
        enterMyCourses: true
      });

    case ActionTypes["q" /* EXIT_MY_COURSES */]:
      return main_objectSpread({}, state, {
        enterMyCourses: false
      });

    case ActionTypes["r" /* EXIT_TESTER */]:
      let page = state.fromPage;
      return main_objectSpread({}, state, {
        enterTester: false,
        courseStarted: page == "course"
      });

    case ActionTypes["G" /* NET_STATUS_BAD */]:
      return main_objectSpread({}, state, {
        netStatus: 0
      });

    case ActionTypes["H" /* NET_STATUS_GOOD */]:
      return main_objectSpread({}, state, {
        netStatus: 1
      });

    case ActionTypes["i" /* COURSE_RECORDING */]:
      return main_objectSpread({}, state, {
        recording: action.status
      });

    case ActionTypes["B" /* LESSON_COMMING */]:
      console.log('lesson comming 222');
      return main_objectSpread({}, state, {
        commingRoom: action.commingRoom
      });

    case ActionTypes["x" /* LESSONS_COMMING */]:
      console.log('LESSONS_COMMING action.commingRooms', action.commingRooms);
      return main_objectSpread({}, state, {
        commingRooms: action.commingRooms
      });

    case ActionTypes["y" /* LESSONS_DONE */]:
      console.log('LESSONS_DONE action.doneRooms', action.doneRooms);
      return main_objectSpread({}, state, {
        doneRooms: action.doneRooms
      });

    case ActionTypes["z" /* LESSONS_TOTAL_COMMING */]:
      return main_objectSpread({}, state, {
        totalComming: action.totalComming
      });

    case ActionTypes["A" /* LESSONS_TOTAL_DONE */]:
      return main_objectSpread({}, state, {
        totalDone: action.totalDone
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_main = (main);
// EXTERNAL MODULE: ./node_modules/.3.0.0@core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/.3.0.0@core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(26);

// CONCATENATED MODULE: ./dev/scripts/reducers/room.js



function room_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { room_defineProperty(target, key, source[key]); }); } return target; }

function room_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const storage = __webpack_require__(8);

const room = (state = {}, action) => {
  let streamId, teacher, switches, students, dancing, status;

  switch (action.type) {
    case ActionTypes["Q" /* ROOM_INFO */]:
      let data = action.data;
      let teacher = {
        child_name: data.teacher_name,
        avatarurl: data.teacher_avatar,
        id: data.teacher_id
      };
      let curTime = Date.now();
      let parsed = data.start_time.split(/[-: ]/);
      let date = new Date(parsed[0], parsed[1] - 1, parsed[2] || 1, parsed[3] || 0, parsed[4] || 0, parsed[5] || 0);
      let waiting = date.getTime() - Date.now();
      let storedData = storage.get("STATUS_" + data.channel_id);

      if (storedData) {
        status = storedData;
      } else {
        status = {
          duration: action.data.duration,
          waiting: waiting,
          id: data.channel_id
        };
      }

      status = status || {};
      status.waiting = waiting;
      return room_objectSpread({}, state, {
        info: action.data,
        switches: {
          gift: true,
          muteall: true
        },
        dancing: [],
        status,
        teacher
      });

    case ActionTypes["P" /* ROOM_GIFT */]:
      return room_objectSpread({}, state, {
        gifts: action.data
      });

    case ActionTypes["S" /* ROOM_MORE_INFO */]:
      let info = room_objectSpread({}, state.info);

      info.channel_token = action.data.channel_token;
      info.features = action.data.features;
      return room_objectSpread({}, state, {
        info,
        students: action.data.students
      });

    case ActionTypes["I" /* NEW_GIFT */]:
      let gift = action.data;
      students = [...state.students];

      for (let i = 0, len = students.length; i < len; i++) {
        let item = students[i];

        if (item.id == gift.uid) {
          item.gift_total = gift.total;
        }
      }

      return room_objectSpread({}, state, {
        students
      });

    case ActionTypes["ab" /* WARN */]:
      let warn_info = action.data;
      students = [...state.students];

      for (let i = 0, len = students.length; i < len; i++) {
        let item = students[i];

        if (item.id == warn_info.uid) {
          item.warn = action.status;
        } else {
          item.warn = false;
        }
      }

      return room_objectSpread({}, state, {
        students
      });

    case ActionTypes["Z" /* USER_MUTED */]:
      students = [...state.students];

      if (students) {
        for (let i = 0, len = students.length; i < len; i++) {
          let item = students[i];

          if (item.id == action.id) {
            item.unmuted = !action.mute;

            if (item.unmuted && !action.recovering) {
              item.speak++;
            }
          }
        }
      }

      return room_objectSpread({}, state, {
        students
      });

    case ActionTypes["Y" /* USER_ADD_ROOM */]:
      teacher = room_objectSpread({}, state.teacher);

      if (action.id == teacher.id) {
        teacher.online = true;
        return room_objectSpread({}, state, {
          teacher
        });
      } else {
        students = [...state.students];

        for (let i = 0, len = students.length; i < len; i++) {
          let item = students[i];

          if (item.id == action.id) {
            item.online = true;
            item.online_time = new Date().getTime();
            break;
          }
        }

        return room_objectSpread({}, state, {
          students
        });
      }

    case ActionTypes["J" /* NEW_STREAM */]:
      streamId = action.stream.getId();
      teacher = room_objectSpread({}, state.teacher);

      if (streamId == teacher.id) {
        teacher.stream = action.stream;
        teacher.online = true;
        teacher.stream_inited = false;
        return room_objectSpread({}, state, {
          teacher
        });
      } else {
        students = [...state.students];

        for (let i = 0, len = students.length; i < len; i++) {
          let item = students[i];

          if (item.id == action.stream.getId()) {
            item.stream = action.stream;
            item.online = true;

            if (!item.online_time) {
              item.online_time = new Date().getTime();
            }

            item.stream_inited = false;
          }
        }

        return room_objectSpread({}, state, {
          students
        });
      }

    case ActionTypes["X" /* STREAM_LEAVE */]:
      streamId = action.stream.getId();
      teacher = room_objectSpread({}, state.teacher);

      if (streamId == teacher.id) {
        teacher.stream = null;
        teacher.online = false;
        teacher.stream_inited = false;
        return room_objectSpread({}, state, {
          teacher
        });
      } else {
        students = [...state.students];

        for (let i = 0, len = students.length; i < len; i++) {
          let item = students[i];

          if (item.id == streamId) {
            item.stream = null;
            item.online_time = null;
            item.online = false;
            item.dancing = false;
            item.stream_inited = false;
          }
        }

        return room_objectSpread({}, state, {
          students
        });
      }

    case ActionTypes["v" /* HANDSUP_SWITCH */]:
      switches = room_objectSpread({}, state.switches);
      switches.handsup = action.status;
      state.students = state.students || [];
      students = [...state.students];

      if (students) {
        for (let i = 0, len = students.length; i < len; i++) {
          let item = students[i];
          item.rank = null;
        }
      }

      return room_objectSpread({}, state, {
        switches,
        students
      });

    case ActionTypes["s" /* GIFT_SWITCH */]:
      switches = room_objectSpread({}, state.switches);
      switches.gift = action.status;
      return room_objectSpread({}, state, {
        switches
      });

    case ActionTypes["E" /* MAGIC_SWITCH */]:
      switches = room_objectSpread({}, state.switches);
      switches.magic = action.status;
      return room_objectSpread({}, state, {
        switches
      });

    case ActionTypes["F" /* MUTEALL_SWITCH */]:
      switches = room_objectSpread({}, state.switches);
      students = [...state.students];

      if (students) {
        for (let i = 0, len = students.length; i < len; i++) {
          let item = students[i];
          item.unmuted = !action.status;
        }
      }

      switches.muteall = action.status;
      return room_objectSpread({}, state, {
        students,
        switches
      });

    case ActionTypes["O" /* RANK_SWITCH */]:
      switches = room_objectSpread({}, state.switches);
      switches.rank = action.status;
      return room_objectSpread({}, state, {
        switches
      });

    case ActionTypes["V" /* SILENT_SWITCH */]:
      switches = room_objectSpread({}, state.switches);
      switches.silent = action.status;
      return room_objectSpread({}, state, {
        switches
      });

    case ActionTypes["u" /* HANDSUP_RANK */]:
      students = [...state.students];

      if (students) {
        for (let i = 0, len = students.length; i < len; i++) {
          let item = students[i];

          if (item.id == action.id) {
            item.rank = action.rank;
            item.handsup++;
            break;
          }
        }
      }

      return room_objectSpread({}, state, {
        students
      });

    case ActionTypes["m" /* DANCING */]:
      students = [...state.students];

      if (students) {
        for (let i = 0, len = students.length; i < len; i++) {
          let item = students[i];

          if (item.id == action.id) {
            item.dancing = action.status;
          } else {
            item.dancing = false;
          }
        }
      }

      return room_objectSpread({}, state, {
        students
      });

    case ActionTypes["e" /* COURSE_BEGIN */]:
      status = room_objectSpread({}, state.status);
      status.started = true;
      storage.store("STATUS_" + status.id, status);
      return room_objectSpread({}, state, {
        status
      });

    case ActionTypes["h" /* COURSE_PAUSE */]:
      status = room_objectSpread({}, state.status);
      status.paused = true;
      storage.store("STATUS_" + status.id, status);
      return room_objectSpread({}, state, {
        status
      });

    case ActionTypes["j" /* COURSE_RESUME */]:
      status = room_objectSpread({}, state.status);
      status.paused = false;
      storage.store("STATUS_" + status.id, status);
      return room_objectSpread({}, state, {
        status
      });

    case ActionTypes["g" /* COURSE_END */]:
      status = room_objectSpread({}, state.status);
      status.started = false;
      status.paused = false;
      storage.store("STATUS_" + status.id, status);
      return room_objectSpread({}, state, {
        status
      });

    case ActionTypes["l" /* COURSE_TICK */]:
      status = room_objectSpread({}, state.status);

      if (status.started && !status.paused) {
        status.duration--;
        storage.store("STATUS_" + status.id, status);
        return room_objectSpread({}, state, {
          status
        });
      } else {
        return state;
      }

    case ActionTypes["k" /* COURSE_STARTING_TICK */]:
      status = room_objectSpread({}, state.status);
      status.waiting -= 1000;
      return room_objectSpread({}, state, {
        status
      });

    case ActionTypes["t" /* GIFT_UPDATE */]:
      students = [...state.students];
      let gifts = action.data;

      if (students) {
        for (let i = 0, len = students.length; i < len; i++) {
          let item = students[i];

          for (let j = 0, jlen = gifts.length; j < jlen; j++) {
            let gift = gifts[j];

            if (gift.to_id == item.id) {
              item.gift_total = gift.total;
              break;
            }
          }
        }
      }

      return room_objectSpread({}, state, {
        students
      });

    case ActionTypes["L" /* PROGRESS_UPDATE */]:
      students = [...state.students];
      let percent = action.percent,
          sid = action.id;

      if (students) {
        if (percent == 100) {
          let found = null,
              rank = 1;

          for (let i = 0, len = students.length; i < len; i++) {
            let item = students[i];

            if (item.id == sid) {
              item.percent = percent;
              found = item;
            } else if (item.progress_rank) {
              rank++;
            }
          }

          if (found) {
            found.progress_rank = rank;
          }
        } else {
          for (let i = 0, len = students.length; i < len; i++) {
            let item = students[i];

            if (item.id == sid) {
              item.percent = percent;
              break;
            }
          }
        }
      }

      return room_objectSpread({}, state, {
        students
      });

    case ActionTypes["K" /* PROGRESS_RESET */]:
      students = [...state.students];

      if (students) {
        for (let i = 0, len = students.length; i < len; i++) {
          let item = students[i];
          item.progress_rank = null;
          item.percent = null;
        }
      }

      return room_objectSpread({}, state, {
        students
      });

    case ActionTypes["N" /* QUESTION_LIST */]:
      switches = room_objectSpread({}, state.switches);
      switches.questionList = action.status;
      return room_objectSpread({}, state, {
        switches
      });

    case ActionTypes["M" /* QUESTION_DETAIL */]:
      switches = room_objectSpread({}, state.switches);
      switches.questionDetail = action.status;
      return room_objectSpread({}, state, {
        switches
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_room = (room);
// CONCATENATED MODULE: ./dev/scripts/reducers/index.js





/* harmony default export */ var reducers = __webpack_exports__["a"] = (Object(external_redux_["combineReducers"])({
  dialog: reducers_dialog,
  login: reducers_login,
  main: reducers_main,
  room: reducers_room
}));

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("q");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("core-js");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(30);
var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(9).document;

module.exports = document && document.documentElement;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(19);
var toObject = __webpack_require__(54);
var toLength = __webpack_require__(61);
var toInteger = __webpack_require__(30);
var requireObjectCoercible = __webpack_require__(29);
var advanceStringIndex = __webpack_require__(101);
var regExpExec = __webpack_require__(103);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(105)(
  'replace',
  2,
  function (REPLACE, nativeReplace, maybeCallNative) {
    return [
      // `String.prototype.replace` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
        return replacer !== undefined
          ? replacer.call(searchValue, O, replaceValue)
          : nativeReplace.call(String(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
      function (regexp, replaceValue) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;

        var rx = anObject(regexp);
        var S = String(this);

        var functionalReplace = typeof replaceValue === 'function';
        if (!functionalReplace) replaceValue = String(replaceValue);

        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regExpExec(rx, S);
          if (result === null) break;

          results.push(result);
          if (!global) break;

          var matchStr = String(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = String(result[0]);
          var position = max(min(toInteger(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = [matched].concat(captures, position, S);
            if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
            var replacement = String(replaceValue.apply(undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + S.slice(nextSourcePosition);
      }
    ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
      if (namedCaptures !== undefined) {
        namedCaptures = toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }
      return nativeReplace.call(replacement, symbols, function (match, ch) {
        var capture;
        switch (ch.charAt(0)) {
          case '$': return '$';
          case '&': return matched;
          case '`': return str.slice(0, position);
          case "'": return str.slice(tailPos);
          case '<':
            capture = namedCaptures[ch.slice(1, -1)];
            break;
          default: // \d\d?
            var n = +ch;
            if (n === 0) return match;
            if (n > m) {
              var f = floor(n / 10);
              if (f === 0) return match;
              if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
              return match;
            }
            capture = captures[n - 1];
        }
        return capture === undefined ? '' : capture;
      });
    }
  }
);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var getOwnPropertyNamesModule = __webpack_require__(65);
var getOwnPropertySymbolsModule = __webpack_require__(69);
var anObject = __webpack_require__(19);
var Reflect = __webpack_require__(9).Reflect;

// all object keys, includes non-enumerable and symbols
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var internalObjectKeys = __webpack_require__(45);
var hiddenKeys = __webpack_require__(32).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var fails = __webpack_require__(15);
var classof = __webpack_require__(46);
var split = ''.split;

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(24);
var toLength = __webpack_require__(61);
var toAbsoluteIndex = __webpack_require__(68);

// `Array.prototype.{ indexOf, includes }` methods implementation
// false -> Array#indexOf
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
// true  -> Array#includes
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(30);
var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = nativeGetOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = nativeGetOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var nativeFunctionToString = __webpack_require__(48);
var WeakMap = __webpack_require__(9).WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(15);
var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var UNSCOPABLES = __webpack_require__(21)('unscopables');
var create = __webpack_require__(51);
var hide = __webpack_require__(13);
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  hide(ArrayPrototype, UNSCOPABLES, create(null));
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// Chrome 38 Symbol has incorrect toString conversion
module.exports = !__webpack_require__(15)(function () {
  // eslint-disable-next-line no-undef
  String(Symbol());
});


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(17);
var definePropertyModule = __webpack_require__(22);
var anObject = __webpack_require__(19);
var objectKeys = __webpack_require__(76);

module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var key;
  while (length > i) definePropertyModule.f(O, key = keys[i++], Properties[key]);
  return O;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var internalObjectKeys = __webpack_require__(45);
var enumBugKeys = __webpack_require__(32);

module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(27);
var createIteratorConstructor = __webpack_require__(78);
var getPrototypeOf = __webpack_require__(53);
var setPrototypeOf = __webpack_require__(80);
var setToStringTag = __webpack_require__(55);
var hide = __webpack_require__(13);
var redefine = __webpack_require__(39);
var IS_PURE = __webpack_require__(35);
var ITERATOR = __webpack_require__(21)('iterator');
var Iterators = __webpack_require__(37);
var IteratorsCore = __webpack_require__(52);
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          hide(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    hide(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(52).IteratorPrototype;
var create = __webpack_require__(51);
var createPropertyDescriptor = __webpack_require__(33);
var setToStringTag = __webpack_require__(55);
var Iterators = __webpack_require__(37);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(15)(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var validateSetPrototypeOfArguments = __webpack_require__(81);

module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () { // eslint-disable-line
  var correctSetter = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    correctSetter = test instanceof Array;
  } catch (e) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    validateSetPrototypeOfArguments(O, proto);
    if (correctSetter) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
var anObject = __webpack_require__(19);

module.exports = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) {
    throw TypeError("Can't set " + String(proto) + ' as a prototype');
  }
};


/***/ }),
/* 82 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(89);
var toObject = __webpack_require__(54);
var fails = __webpack_require__(15);
var nativeSort = [].sort;
var test = [1, 2, 3];

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var SLOPPY_METHOD = __webpack_require__(99)('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || SLOPPY_METHOD;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
__webpack_require__(27)({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.3.0.0@core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/.3.0.0@core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/.3.0.0@core-js/modules/web.immediate.js
var web_immediate = __webpack_require__(91);

// CONCATENATED MODULE: ./dev/agora/Renderer/index.js
const GlRenderer_1 = __webpack_require__(121);

class GlRenderer {
  constructor() {
    this.self = GlRenderer_1.apply(this);
  }

  bind(element) {
    return this.self.bind(element);
  }

  unbind() {
    return this.self.unbind();
  }

  drawFrame(imageData) {
    return this.self.drawFrame(imageData);
  }

  setContentMode(mode) {
    return this.self.setContentMode(mode);
  }

}

/* harmony default export */ var Renderer = ({
  GlRenderer
});
// EXTERNAL MODULE: external "events"
var external_events_ = __webpack_require__(41);
var external_events_default = /*#__PURE__*/__webpack_require__.n(external_events_);

// CONCATENATED MODULE: ./dev/agora/AgoraRender.js


const WebglUtils = {
  defaultShaderType: ["VERTEX_SHADER", "FRAGMENT_SHADER"],
  loadShader: function (gl, shaderSource, shaderType, opt_errorCallback) {
    var errFn = opt_errorCallback || console.error; // Create the shader object

    var shader = gl.createShader(shaderType); // Load the shader source

    gl.shaderSource(shader, shaderSource); // Compile the shader

    gl.compileShader(shader); // Check the compile status

    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

    if (!compiled) {
      // Something went wrong during compilation; get the error
      var lastError = gl.getShaderInfoLog(shader);
      errFn("*** Error compiling shader '" + shader + "':" + lastError);
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  },
  createProgram: function (gl, shaders, opt_attribs, opt_locations, opt_errorCallback) {
    var errFn = opt_errorCallback || console.error;
    var program = gl.createProgram();
    shaders.forEach(function (shader) {
      gl.attachShader(program, shader);
    });

    if (opt_attribs) {
      obj_attrib.forEach(function (attrib, ndx) {
        gl.bindAttribLocation(program, opt_locations ? opt_locations[ndx] : ndx, attrib);
      });
    }

    gl.linkProgram(program); // Check the link status

    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);

    if (!linked) {
      // something went wrong with the link
      var lastError = gl.getProgramInfoLog(program);
      errFn("Error in program linking:" + lastError);
      gl.deleteProgram(program);
      return null;
    }

    return program;
  },

  createProgramFromSources(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
    var shaders = [];

    for (var ii = 0; ii < shaderSources.length; ++ii) {
      shaders.push(WebglUtils.loadShader(gl, shaderSources[ii], gl[WebglUtils.defaultShaderType[ii]], opt_errorCallback));
    }

    return WebglUtils.createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback);
  }

};

const AgoraRender = function () {
  let gl;
  let program;
  let positionLocation;
  let texCoordLocation;
  let yTexture;
  let uTexture;
  let vTexture;
  let texCoordBuffer;
  let surfaceBuffer;
  const that = {
    view: undefined,
    mirrorView: false,
    container: undefined,
    canvas: undefined,
    renderImageCount: 0,
    initWidth: 0,
    initHeight: 0,
    initRotation: 0,
    canvasUpdated: false,
    clientWidth: 0,
    clientHeight: 0,
    // 0 - cover, 1 - fit
    contentMode: 0,
    event: new external_events_["EventEmitter"](),
    firstFrameRender: false
  };

  that.setContentMode = function (mode) {
    that.contentMode = mode;
  };

  that.bind = function (size) {
    initCanvas(that.mirrorView, size.width, size.height, that.initRotation, console.warn);
  };

  that.updateSize = function (size) {
    that.unbind();
    that.bind(size);
  };

  that.unbind = function () {
    try {
      gl.getExtension('WEBGL_lose_context').loseContext();
    } catch (err) {
      console.warn(err);
    }

    program = undefined;
    positionLocation = undefined;
    texCoordLocation = undefined;
    deleteTexture(yTexture);
    deleteTexture(uTexture);
    deleteTexture(vTexture);
    yTexture = undefined;
    uTexture = undefined;
    vTexture = undefined;
    deleteBuffer(texCoordBuffer);
    deleteBuffer(surfaceBuffer);
    texCoordBuffer = undefined;
    surfaceBuffer = undefined;
    gl = undefined;
    that.canvas = undefined;
    that.mirrorView = false;
  };

  that.renderImage = function (image) {
    // Rotation, width, height, left, top, right, bottom, yplane, uplane, vplane
    if (!gl) {
      console.log('!gl');
      return;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    const xWidth = image.width + image.left + image.right;
    const xHeight = image.height + image.top + image.bottom;
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([image.left / xWidth, image.bottom / xHeight, 1 - image.right / xWidth, image.bottom / xHeight, image.left / xWidth, 1 - image.top / xHeight, image.left / xWidth, 1 - image.top / xHeight, 1 - image.right / xWidth, image.bottom / xHeight, 1 - image.right / xWidth, 1 - image.top / xHeight]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(texCoordLocation);
    gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
    uploadYuv(xWidth, xHeight, image.yplane, image.uplane, image.vplane);
    updateCanvas(image.rotation, image.width, image.height);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    that.renderImageCount += 1;

    if (!that.firstFrameRender) {
      that.firstFrameRender = true;
      that.event.emit('ready');
    }
  };
  /**
  * draw image with params
  * @private
  * @param {*} render 
  * @param {*} header 
  * @param {*} yplanedata 
  * @param {*} uplanedata 
  * @param {*} vplanedata 
  */


  that.drawFrame = function ({
    header,
    yUint8Array,
    uUint8Array,
    vUint8Array
  }) {
    var headerLength = 20;
    var dv = new DataView(header);
    var format = dv.getUint8(0);
    var mirror = dv.getUint8(1);
    var width = dv.getUint16(2);
    var height = dv.getUint16(4);
    var left = dv.getUint16(6);
    var top = dv.getUint16(8);
    var right = dv.getUint16(10);
    var bottom = dv.getUint16(12);
    var rotation = dv.getUint16(14);
    var ts = dv.getUint32(16);
    var xWidth = width + left + right;
    var xHeight = height + top + bottom;
    var yLength = xWidth * xHeight;
    var yBegin = headerLength;
    var yEnd = yBegin + yLength;
    var uLength = yLength / 4;
    var uBegin = yEnd;
    var uEnd = uBegin + uLength;
    var vLength = yLength / 4;
    var vBegin = uEnd;
    var vEnd = vBegin + vLength;
    that.renderImage({
      mirror: mirror,
      width,
      height,
      left,
      top,
      right,
      bottom,
      rotation: rotation,
      yplane: new Uint8Array(yUint8Array),
      uplane: new Uint8Array(uUint8Array),
      vplane: new Uint8Array(vUint8Array)
    });
    var now32 = (Date.now() & 0xffffffff) >>> 0;
    var latency = now32 - ts;
  };

  function uploadYuv(width, height, yplane, uplane, vplane) {
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, yTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width, height, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, yplane);
    var e = gl.getError();

    if (e != gl.NO_ERROR) {
      console.log('upload y plane ', width, height, yplane.byteLength, ' error', e);
    }

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, uTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width / 2, height / 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, uplane);
    var e = gl.getError();

    if (e != gl.NO_ERROR) {
      console.log('upload u plane ', width, height, uplane.byteLength, '  error', e);
    }

    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, vTexture);
    '';
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width / 2, height / 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, vplane);
    var e = gl.getError();

    if (e != gl.NO_ERROR) {
      console.log('upload v plane ', width, height, vplane.byteLength, '  error', e);
    }
  }

  function deleteBuffer(buffer) {
    if (buffer && gl) {
      gl.deleteBuffer(buffer);
    }
  }

  function deleteTexture(texture) {
    if (texture && gl) {
      gl.deleteTexture(texture);
    }
  }

  const vertexShaderSource = 'attribute vec2 a_position;' + 'attribute vec2 a_texCoord;' + 'uniform vec2 u_resolution;' + 'varying vec2 v_texCoord;' + 'void main() {' + 'vec2 zeroToOne = a_position / u_resolution;' + '   vec2 zeroToTwo = zeroToOne * 2.0;' + '   vec2 clipSpace = zeroToTwo - 1.0;' + '   gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);' + 'v_texCoord = a_texCoord;' + '}';
  const yuvShaderSource = 'precision mediump float;' + 'uniform sampler2D Ytex;' + 'uniform sampler2D Utex,Vtex;' + 'varying vec2 v_texCoord;' + 'void main(void) {' + '  float nx,ny,r,g,b,y,u,v;' + '  mediump vec4 txl,ux,vx;' + '  nx=v_texCoord[0];' + '  ny=v_texCoord[1];' + '  y=texture2D(Ytex,vec2(nx,ny)).r;' + '  u=texture2D(Utex,vec2(nx,ny)).r;' + '  v=texture2D(Vtex,vec2(nx,ny)).r;' + '  y=1.1643*(y-0.0625);' + '  u=u-0.5;' + '  v=v-0.5;' + '  r=y+1.5958*v;' + '  g=y-0.39173*u-0.81290*v;' + '  b=y+2.017*u;' + '  gl_FragColor=vec4(r,g,b,1.0);' + '}';

  function initCanvas(mirror, width, height, rotation, onFailure) {
    that.mirrorView = mirror;
    that.canvasUpdated = false;
    that.canvas = document.createElement('canvas');

    if (rotation == 0 || rotation == 180) {
      that.canvas.width = width;
      that.canvas.height = height;
    } else {
      that.canvas.width = height;
      that.canvas.height = width;
    }

    that.initWidth = width;
    that.initHeight = height;
    that.initRotation = rotation;

    try {
      // Try to grab the standard context. If it fails, fallback to experimental.
      gl = that.canvas.getContext('webgl', {
        preserveDrawingBuffer: true
      }) || that.canvas.getContext('experimental-webgl');
    } catch (e) {
      console.log(e);
    }

    if (!gl) {
      gl = undefined;
      onFailure({
        error: 'Browser not support! No WebGL detected.'
      });
      return;
    } // Set clear color to black, fully opaque


    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Enable depth testing

    gl.enable(gl.DEPTH_TEST); // Near things obscure far things

    gl.depthFunc(gl.LEQUAL); // Clear the color as well as the depth buffer.

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // Setup GLSL program

    program = WebglUtils.createProgramFromSources(gl, [vertexShaderSource, yuvShaderSource]);
    gl.useProgram(program);
    initTextures();
  }

  function initTextures() {
    positionLocation = gl.getAttribLocation(program, 'a_position');
    texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');
    surfaceBuffer = gl.createBuffer();
    texCoordBuffer = gl.createBuffer(); // Create a texture.

    gl.activeTexture(gl.TEXTURE0);
    yTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, yTexture); // Set the parameters so we can render any size image.

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.activeTexture(gl.TEXTURE1);
    uTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, uTexture); // Set the parameters so we can render any size image.

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.activeTexture(gl.TEXTURE2);
    vTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, vTexture); // Set the parameters so we can render any size image.

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    const y = gl.getUniformLocation(program, 'Ytex');
    gl.uniform1i(y, 0);
    /* Bind Ytex to texture unit 0 */

    const u = gl.getUniformLocation(program, 'Utex');
    gl.uniform1i(u, 1);
    /* Bind Utex to texture unit 1 */

    const v = gl.getUniformLocation(program, 'Vtex');
    gl.uniform1i(v, 2);
    /* Bind Vtex to texture unit 2 */
  }

  function updateCanvas(rotation, destWidth, destHeight) {
    if (that.canvasUpdated) {
      return;
    }

    var width = that.initWidth,
        height = that.initHeight;
    gl.bindBuffer(gl.ARRAY_BUFFER, surfaceBuffer);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0); // Console.log('image rotation from ', that.imageRotation, ' to ', rotation);
    // 4 vertex, 1(x1,y1), 2(x2,y1), 3(x2,y2), 4(x1,y2)
    //  0: 1,2,4/4,2,3
    // 90: 2,3,1/1,3,4
    // 180: 3,4,2/2,4,1
    // 270: 4,1,3/3,1,2

    var scale = Math.max(width / destWidth, height / destHeight),
        deltaWidth = destWidth * scale - width >> 1,
        deltaHeight = destHeight * scale - height >> 1;
    const p1 = {
      x: -deltaWidth,
      y: -deltaHeight
    };
    const p2 = {
      x: width + deltaWidth,
      y: -deltaHeight
    };
    const p3 = {
      x: width + deltaWidth,
      y: height + deltaHeight
    };
    const p4 = {
      x: -deltaWidth,
      y: height + deltaHeight
    };
    let pp1, pp2, pp3, pp4;

    if (that.mirrorView) {
      pp1 = p2, pp2 = p1, pp3 = p4, pp4 = p3;
    } else {
      pp1 = p1, pp2 = p2, pp3 = p3, pp4 = p4;
    }

    switch (rotation) {
      case 0:
        break;

      case 90:
        pp1 = p2;
        pp2 = p3;
        pp3 = p4;
        pp4 = p1;
        break;

      case 180:
        pp1 = p3;
        pp2 = p4;
        pp3 = p1;
        pp4 = p2;
        break;

      case 270:
        pp1 = p4;
        pp2 = p1;
        pp3 = p2;
        pp4 = p3;
        break;

      default:
    }

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([pp1.x, pp1.y, pp2.x, pp2.y, pp4.x, pp4.y, pp4.x, pp4.y, pp2.x, pp2.y, pp3.x, pp3.y]), gl.STATIC_DRAW);
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    gl.uniform2f(resolutionLocation, width, height);
    that.canvasUpdated = true;
  }

  return that;
};

/* harmony default export */ var agora_AgoraRender = (AgoraRender);
// CONCATENATED MODULE: ./dev/agora/AgoraSdk.js








/**
 * @class AgoraRtcEngine
 */

class AgoraSdk_AgoraRtcEngine extends external_events_default.a.EventEmitter {
  constructor() {
    super();
    this.rtcEngine = new agora.NodeRtcEngine();
    this.initEventHandler();
    this.streams = new Map();
    this.renderMode = this._checkWebGL() ? 1 : 2;
  }
  /**
   * Decide whether to use webgl or software rending
   * @param {1|2} mode - 1 for old webgl rendering, 2 for software rendering
   */


  setRenderMode(mode = 1) {
    this.renderMode = mode;
  }
  /**
   * @private
   * check if WebGL will be available with appropriate features
   * @returns {boolean}
   */


  _checkWebGL() {
    const canvas = document.createElement('canvas');
    let gl;
    canvas.width = 1;
    canvas.height = 1;
    const options = {
      // Turn off things we don't need
      alpha: false,
      depth: false,
      stencil: false,
      antialias: false,
      preferLowPowerToHighPerformance: true // Still dithering on whether to use this.
      // Recommend avoiding it, as it's overly conservative
      // failIfMajorPerformanceCaveat: true

    };

    try {
      gl = canvas.getContext('webgl', options) || canvas.getContext('experimental-webgl', options);
    } catch (e) {
      return false;
    }

    if (gl) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * init event handler
   * @private
   */


  initEventHandler() {
    const self = this;

    const fire = (event, ...args) => {
      setImmediate(() => {
        this.emit(event, ...args);
      });
    };

    this.rtcEngine.onEvent('apierror', funcName => {
      console.error(`api ${funcName} failed. this is an error
              thrown by c++ addon layer. it often means sth is
              going wrong with this function call and it refused
              to do what is asked. kindly check your parameter types
              to see if it matches properly.`);
    });
    this.rtcEngine.onEvent('joinchannel', function (channel, uid, elapsed) {
      fire('joinedchannel', channel, uid, elapsed);
      fire('joinedChannel', channel, uid, elapsed);
    });
    this.rtcEngine.onEvent('rejoinchannel', function (channel, uid, elapsed) {
      fire('rejoinedchannel', channel, uid, elapsed);
      fire('rejoinedChannel', channel, uid, elapsed);
    });
    this.rtcEngine.onEvent('warning', function (warn, msg) {
      fire('warning', warn, msg);
    });
    this.rtcEngine.onEvent('error', function (err, msg) {
      fire('error', err, msg);
    });
    this.rtcEngine.onEvent('audioquality', function (uid, quality, delay, lost) {
      fire('audioquality', uid, quality, delay, lost);
      fire('audioQuality', uid, quality, delay, lost);
    });
    this.rtcEngine.onEvent('audiovolumeindication', function (uid, volume, speakerNumber, totalVolume) {
      fire('audiovolumeindication', uid, volume, speakerNumber, totalVolume);
      fire('audioVolumeIndication', uid, volume, speakerNumber, totalVolume);
    });
    this.rtcEngine.onEvent('leavechannel', function () {
      fire('leavechannel');
      fire('leaveChannel');
    });
    this.rtcEngine.onEvent('rtcstats', function (stats) {
      fire('rtcstats', stats);
      fire('rtcStats', stats);
    });
    this.rtcEngine.onEvent('localvideostats', function (stats) {
      fire('localvideostats', stats);
      fire('localVideoStats', stats);
    });
    this.rtcEngine.onEvent('remotevideostats', function (stats) {
      fire('remotevideostats', stats);
      fire('remoteVideoStats', stats);
    });
    this.rtcEngine.onEvent('audiodevicestatechanged', function (deviceId, deviceType, deviceState) {
      fire('audiodevicestatechanged', deviceId, deviceType, deviceState);
      fire('audioDeviceStateChanged', deviceId, deviceType, deviceState);
    });
    this.rtcEngine.onEvent('audiomixingfinished', function () {
      fire('audiomixingfinished');
      fire('audioMixingFinished');
    });
    this.rtcEngine.onEvent('apicallexecuted', function (api, err) {
      fire('apicallexecuted', api, err);
      fire('apiCallExecuted', api, err);
    });
    this.rtcEngine.onEvent('remoteaudiomixingbegin', function () {
      fire('remoteaudiomixingbegin');
      fire('remoteAudioMixingBegin');
    });
    this.rtcEngine.onEvent('remoteaudiomixingend', function () {
      fire('remoteaudiomixingend');
      fire('remoteAudioMixingEnd');
    });
    this.rtcEngine.onEvent('audioeffectfinished', function (soundId) {
      fire('audioeffectfinished', soundId);
      fire('audioEffectFinished', soundId);
    });
    this.rtcEngine.onEvent('videodevicestatechanged', function (deviceId, deviceType, deviceState) {
      fire('videodevicestatechanged', deviceId, deviceType, deviceState);
      fire('videoDeviceStateChanged', deviceId, deviceType, deviceState);
    });
    this.rtcEngine.onEvent('networkquality', function (uid, txquality, rxquality) {
      fire('networkquality', uid, txquality, rxquality);
      fire('networkQuality', uid, txquality, rxquality);
    });
    this.rtcEngine.onEvent('lastmilequality', function (quality) {
      fire('lastmilequality', quality);
      fire('lastMileQuality', quality);
    });
    this.rtcEngine.onEvent('firstlocalvideoframe', function (width, height, elapsed) {
      fire('firstlocalvideoframe', width, height, elapsed);
      fire('firstLocalVideoFrame', width, height, elapsed);
    });
    this.rtcEngine.onEvent('firstremotevideodecoded', function (uid, width, height, elapsed) {
      fire('addstream', uid, elapsed);
      fire('addStream', uid, elapsed);
    });
    this.rtcEngine.onEvent('videosizechanged', function (uid, width, height, rotation) {
      fire('videosizechanged', uid, width, height, rotation);
      fire('videoSizeChanged', uid, width, height, rotation);
    });
    this.rtcEngine.onEvent('firstremotevideoframe', function (uid, width, height, elapsed) {
      fire('firstremotevideoframe', uid, width, height, elapsed);
      fire('firstRemoteVideoFrame', uid, width, height, elapsed);
    });
    this.rtcEngine.onEvent('userjoined', function (uid, elapsed) {
      console.log('user : ' + uid + ' joined.');
      fire('userjoined', uid, elapsed);
      fire('userJoined', uid, elapsed);
    });
    this.rtcEngine.onEvent('useroffline', function (uid, reason) {
      if (!self.streams) {
        self.streams = new Map();
        console.log('Warning!!!!!!, streams is undefined.');
        return;
      }

      self.destroyRender(uid);
      self.rtcEngine.unsubscribe(uid);
      fire('removestream', uid, reason);
      fire('removeStream', uid, reason);
    });
    this.rtcEngine.onEvent('usermuteaudio', function (uid, muted) {
      fire('usermuteaudio', uid, muted);
      fire('userMuteAudio', uid, muted);
    });
    this.rtcEngine.onEvent('usermutevideo', function (uid, muted) {
      fire('usermutevideo', uid, muted);
      fire('userMuteVideo', uid, muted);
    });
    this.rtcEngine.onEvent('userenablevideo', function (uid, enabled) {
      fire('userenablevideo', uid, enabled);
      fire('userEnableVideo', uid, enabled);
    });
    this.rtcEngine.onEvent('userenablelocalvideo', function (uid, enabled) {
      fire('userenablelocalvideo', uid, enabled);
      fire('userEnableLocalVideo', uid, enabled);
    });
    this.rtcEngine.onEvent('cameraready', function () {
      fire('cameraready');
      fire('cameraReady');
    });
    this.rtcEngine.onEvent('videostopped', function () {
      fire('videostopped');
      fire('videoStopped');
    });
    this.rtcEngine.onEvent('connectionlost', function () {
      fire('connectionlost');
      fire('connectionLost');
    });
    this.rtcEngine.onEvent('connectioninterrupted', function () {
      fire('connectioninterrupted');
      fire('connectionInterrupted');
    });
    this.rtcEngine.onEvent('connectionbanned', function () {
      fire('connectionbanned');
      fire('connectionBanned');
    });
    this.rtcEngine.onEvent('refreshrecordingservicestatus', function (status) {
      fire('refreshrecordingservicestatus', status);
      fire('refreshRecordingServiceStatus', status);
    });
    this.rtcEngine.onEvent('streammessage', function (uid, streamId, msg, len) {
      fire('streammessage', uid, streamId, msg, len);
      fire('streamMessage', uid, streamId, msg, len);
    });
    this.rtcEngine.onEvent('streammessageerror', function (uid, streamId, code, missed, cached) {
      fire('streammessageerror', uid, streamId, code, missed, cached);
      fire('streamMessageError', uid, streamId, code, missed, cached);
    });
    this.rtcEngine.onEvent('mediaenginestartcallsuccess', function () {
      fire('mediaenginestartcallsuccess');
      fire('mediaEngineStartCallSuccess');
    });
    this.rtcEngine.onEvent('requestchannelkey', function () {
      fire('requestchannelkey');
      fire('requestChannelKey');
    });
    this.rtcEngine.onEvent('fristlocalaudioframe', function (elapsed) {
      fire('firstlocalaudioframe', elapsed);
      fire('firstLocalAudioFrame', elapsed);
    });
    this.rtcEngine.onEvent('firstremoteaudioframe', function (uid, elapsed) {
      fire('firstremoteaudioframe', uid, elapsed);
      fire('firstRemoteAudioFrame', uid, elapsed);
    });
    this.rtcEngine.onEvent('remoteVideoStateChanged', function (uid, state) {
      fire('remoteVideoStateChanged', uid, state);
    });
    this.rtcEngine.onEvent('cameraFocusAreaChanged', function (x, y, width, height) {
      fire('cameraFocusAreaChanged', x, y, width, height);
    });
    this.rtcEngine.onEvent('cameraExposureAreaChanged', function (x, y, width, height) {
      fire('cameraExposureAreaChanged', x, y, width, height);
    });
    this.rtcEngine.onEvent('tokenPrivilegeWillExpire', function (token) {
      fire('tokenPrivilegeWillExpire', token);
    });
    this.rtcEngine.onEvent('streamPublished', function (url, error) {
      fire('streamPublished', url, error);
    });
    this.rtcEngine.onEvent('streamUnpublished', function (url) {
      fire('streamUnpublished', url);
    });
    this.rtcEngine.onEvent('transcodingUpdated', function () {
      fire('transcodingUpdated');
    });
    this.rtcEngine.onEvent('streamInjectStatus', function (url, uid, status) {
      fire('streamInjectStatus', url, uid, status);
    });
    this.rtcEngine.onEvent('localPublishFallbackToAudioOnly', function (isFallbackOrRecover) {
      fire('localPublishFallbackToAudioOnly', isFallbackOrRecover);
    });
    this.rtcEngine.onEvent('remoteSubscribeFallbackToAudioOnly', function (uid, isFallbackOrRecover) {
      fire('remoteSubscribeFallbackToAudioOnly', uid, isFallbackOrRecover);
    });
    this.rtcEngine.onEvent('microphoneEnabled', function (enabled) {
      fire('microphoneEnabled', enabled);
    });
    this.rtcEngine.onEvent('connectionStateChanged', function (state, reason) {
      fire('connectionStateChanged', state, reason);
    });
    this.rtcEngine.onEvent('activespeaker', function (uid) {
      fire('activespeaker', uid);
      fire('activeSpeaker', uid);
    });
    this.rtcEngine.onEvent('clientrolechanged', function (oldRole, newRole) {
      fire('clientrolechanged', oldRole, newRole);
      fire('clientRoleChanged', oldRole, newRole);
    });
    this.rtcEngine.onEvent('audiodevicevolumechanged', function (deviceType, volume, muted) {
      fire('audiodevicevolumechanged', deviceType, volume, muted);
      fire('audioDeviceVolumeChanged', deviceType, volume, muted);
    });
    this.rtcEngine.onEvent('videosourcejoinsuccess', function (uid) {
      fire('videosourcejoinedsuccess', uid);
      fire('videoSourceJoinedSuccess', uid);
    });
    this.rtcEngine.onEvent('videosourcerequestnewtoken', function () {
      fire('videosourcerequestnewtoken');
      fire('videoSourceRequestNewToken');
    });
    this.rtcEngine.onEvent('videosourceleavechannel', function () {
      fire('videosourceleavechannel');
      fire('videoSourceLeaveChannel');
    });
    this.rtcEngine.registerDeliverFrame(function (infos) {
      self.onRegisterDeliverFrame(infos);
    });
  }
  /**
   * @private
   * @param {number} type 0-local 1-remote 2-device_test 3-video_source
   * @param {number} uid uid get from native engine, differ from electron engine's uid
   */


  _getRenderer(type, uid) {
    if (type < 2) {
      if (uid === 0) {
        return this.streams.get('local');
      } else {
        return this.streams.get(String(uid));
      }
    } else if (type === 2) {
      // return this.streams.devtest;
      console.warn('Type 2 not support in production mode.');
      return false;
    } else if (type === 3) {
      return this.streams.get('videosource');
    } else {
      console.warn('Invalid type for getRenderer, only accept 0~3.');
      return false;
    }
  }

  getRender(uid) {
    if (uid === 0) {
      return this.streams.get('local');
    } else {
      return this.streams.get(String(uid));
    }
  }
  /**
   * check if data is valid
   * @private
   * @param {*} header
   * @param {*} ydata
   * @param {*} udata
   * @param {*} vdata
   */


  _checkData(header, ydata, udata, vdata) {
    if (header.byteLength != 20) {
      console.error('invalid image header ' + header.byteLength);
      return false;
    }

    if (ydata.byteLength === 20) {
      console.error('invalid image yplane ' + ydata.byteLength);
      return false;
    }

    if (udata.byteLength === 20) {
      console.error('invalid image uplanedata ' + udata.byteLength);
      return false;
    }

    if (ydata.byteLength != udata.byteLength * 4 || udata.byteLength != vdata.byteLength) {
      console.error('invalid image header ' + ydata.byteLength + ' ' + udata.byteLength + ' ' + vdata.byteLength);
      return false;
    }

    return true;
  }
  /**
   * register renderer for target info
   * @private
   * @param {number} infos
   */


  onRegisterDeliverFrame(infos) {
    const len = infos.length;

    for (let i = 0; i < len; i++) {
      const info = infos[i];
      const {
        type,
        uid,
        header,
        ydata,
        udata,
        vdata
      } = info;

      if (!header || !ydata || !udata || !vdata) {
        console.log('Invalid data param ： ' + header + ' ' + ydata + ' ' + udata + ' ' + vdata);
        continue;
      }

      const renderer = this._getRenderer(type, uid);

      if (!renderer) {
        console.warn("Can't find renderer for uid : " + uid);
        continue;
      }

      if (this._checkData(header, ydata, udata, vdata)) {
        renderer.drawFrame({
          header,
          yUint8Array: ydata,
          uUint8Array: udata,
          vUint8Array: vdata
        });
      }
    }
  }
  /**
   * init renderer
   * @param {string|number} key key for the map that store the renderers, e.g, uid or `videosource` or `local`
   * @param {*} view dom elements to render video
   */


  initRender(key, view) {
    if (this.streams.has(String(key))) {
      this.destroyRender(key);
    }

    let renderer;

    if (view.cocos) {
      renderer = new agora_AgoraRender();
    } else {
      renderer = new Renderer.GlRenderer();
    }

    renderer.bind(view);
    this.streams.set(String(key), renderer);
  }
  /**
   * destroy renderer
   * @param {string|number} key key for the map that store the renders, e.g, uid or `videosource` or `local`
   * @param {function} onFailure err callback for destroyRenderer
   */


  destroyRender(key, onFailure) {
    const renderer = this.streams.get(String(key));

    try {
      renderer.unbind();
      this.streams["delete"](String(key));
    } catch (err) {
      onFailure && onFailure(err);
    }
  } // ===========================================================================
  // BASIC METHODS
  // ===========================================================================

  /**
   * @description initialize agora real-time-communicating engine with appid
   * @param {string} appid agora appid
   * @returns {number} 0 for success, <0 for failure
   */


  initialize(appid) {
    return this.rtcEngine.initialize(appid);
  }
  /**
   * @description return current version and build of sdk
   * @returns {string} version
   */


  getVersion() {
    return this.rtcEngine.getVersion();
  }
  /**
   * @description Get error description of the given errorCode
   * @param {number} errorCode error code
   * @returns {string} error description
   */


  getErrorDescription(errorCode) {
    return this.rtcEngine.getErrorDescription(errorCode);
  }
  /**
   *
   * @description Join channel with token, channel, channel_info and uid
   * @requires channel
   * @param {string} token token
   * @param {string} channel channel
   * @param {string} info channel info
   * @param {number} uid uid
   * @returns {number} 0 for success, <0 for failure
   */


  joinChannel(token, channel, info, uid) {
    return this.rtcEngine.joinChannel(token, channel, info, uid);
  }
  /**
   * @description Leave channel
   * @returns {number} 0 for success, <0 for failure
   */


  leaveChannel() {
    return this.rtcEngine.leaveChannel();
  }
  /**
   * @description This method sets high-quality audio preferences. Call this method and set all the three
   * modes before joining a channel. Do NOT call this method again after joining a channel.
   * @param {boolean} fullband enable/disable fullband codec
   * @param {boolean} stereo enable/disable stereo codec
   * @param {boolean} fullBitrate enable/disable high bitrate mode
   * @returns {number} 0 for success, <0 for failure
   */


  setHighQualityAudioParameters(fullband, stereo, fullBitrate) {
    return this.rtcEngine.setHighQualityAudioParameters(fullband, stereo, fullBitrate);
  }
  /**
   * @description subscribe remote uid and initialize corresponding renderer
   * @param {number} uid remote uid
   * @param {Element} view dom where to initialize renderer
   * @returns {number} 0 for success, <0 for failure
   */


  subscribe(uid, view) {
    this.initRender(uid, view);
    return this.rtcEngine.subscribe(uid);
  }
  /**
   * @description setup local video and corresponding renderer
   * @param {Element} view dom element where we will initialize our view
   * @returns {number} 0 for success, <0 for failure
   */


  setupLocalVideo(view) {
    this.initRender('local', view);
    return this.rtcEngine.setupLocalVideo();
  }
  /**
   *
   * @description force set renderer dimension of video, this ONLY affects size of data sent to js layer, native video size is determined by setVideoProfile
   * @param {*} rendertype type of renderer, 0 - local, 1 - remote, 2 - device test, 3 - video source
   * @param {*} uid target uid
   * @param {*} width target width
   * @param {*} height target height
   */


  setVideoRenderDimension(rendertype, uid, width, height) {
    this.rtcEngine.setVideoRenderDimension(rendertype, uid, width, height);
  }
  /**
   * @description force set renderer fps globally. This is mainly used to improve the performance for js rendering
   * once set, data will be forced to be sent with this fps. This can reduce cpu frequency of js rendering.
   * This applies to ALL views except ones added to High FPS stream.
   * @param {number} fps frame/s
   */


  setVideoRenderFPS(fps) {
    this.rtcEngine.setFPS(fps);
  }
  /**
   * @description force set renderer fps for high stream. High stream here MEANS uid streams which has been
   * added to high ones by calling addVideoRenderToHighFPS, note this has nothing to do with dual stream
   * high stream. This is often used when we want to set low fps for most of views, but high fps for one
   * or two special views, e.g. screenshare
   * @param {number} fps frame/s
   */


  setVideoRenderHighFPS(fps) {
    this.rtcEngine.setHighFPS(fps);
  }
  /**
   * @description add stream to high fps stream by uid. fps of streams added to high fps stream will be
   * controlled by setVideoRenderHighFPS
   * @param {number} uid stream uid
   */


  addVideoRenderToHighFPS(uid) {
    this.rtcEngine.addToHighVideo(uid);
  }
  /**
   * @description remove stream from high fps stream by uid. fps of streams removed from high fps stream
   * will be controlled by setVideoRenderFPS
   * @param {number} uid stream uid
   */


  remoteVideoRenderFromHighFPS(uid) {
    this.rtcEngine.removeFromHighVideo(uid);
  }
  /**
   * @description setup view content mode
   * @param {number} uid stream uid to operate
   * @param {0|1} mode view content mode, 0 - fill, 1 - fit
   * @returns {number} 0 - success, -1 - fail
   */


  setupViewContentMode(uid, mode) {
    if (this.streams.has(String(uid))) {
      const renderer = this.streams.get(String(uid));
      renderer.setContentMode(mode);
      return 0;
    } else {
      return -1;
    }
  }
  /**
   * @description This method updates the Token.
   * The key expires after a certain period of time once the Token schema is enabled when:
   * The onError callback reports the ERR_TOKEN_EXPIRED(109) error, or
   * The onRequestToken callback reports the ERR_TOKEN_EXPIRED(109) error, or
   * The user receives the onTokenPrivilegeWillExpire callback.
   * The application should retrieve a new key and then call this method to renew it. Failure to do so will result in the SDK disconnecting from the server.
   * @param {string} newtoken new token to update
   * @returns {number} 0 for success, <0 for failure
   */


  renewToken(newtoken) {
    return this.rtcEngine.renewToken(newtoken);
  }
  /**
   * @description Set channel profile(before join channel) since sdk will do optimization according to scenario.
   * @description 0 (default) for communication, 1 for live broadcasting, 2 for in-game
   * @param {number} profile profile enum
   * @returns {number} 0 for success, <0 for failure
   */


  setChannelProfile(profile) {
    return this.rtcEngine.setChannelProfile(profile);
  }
  /**
   *
   * @description In live broadcasting mode, set client role, 1 for anchor, 2 for audience
   * @param {ClientRoleType} role client role
   * @param {string} permissionKey permission key
   * @returns {number} 0 for success, <0 for failure
   */


  setClientRole(role, permissionKey) {
    return this.rtcEngine.setClientRole(role, permissionKey);
  }
  /**
   * @description This method launches an audio call test to determine whether the audio devices
   * (for example, headset and speaker) and the network connection are working properly.
   * In the test, the user first speaks, and the recording is played back in 10 seconds.
   * If the user can hear the recording in 10 seconds, it indicates that the audio devices
   * and network connection work properly.
   * @returns {number} 0 for success, <0 for failure
   */


  startEchoTest() {
    return this.rtcEngine.startEchoTest();
  }
  /**
   * @description This method stops an audio call test.
   * @returns {number} 0 for success, <0 for failure
   */


  stopEchoTest() {
    return this.rtcEngine.stopEchoTest();
  }
  /**
   * @description This method tests the quality of the user’s network connection
   * and is disabled by default. Before users join a channel, they can call this
   * method to check the network quality. Calling this method consumes extra network
   * traffic, which may affect the communication quality. Call disableLastmileTest
   * to disable it immediately once users have received the onLastmileQuality
   * callback before they join the channel.
   * @returns {number} 0 for success, <0 for failure
   */


  enableLastmileTest() {
    return this.rtcEngine.enableLastmileTest();
  }
  /**
   * @description This method disables the network connection quality test.
   * @returns {number} 0 for success, <0 for failure
   */


  disableLastmileTest() {
    return this.rtcEngine.disableLastmileTest();
  }
  /**
   * @description Use before join channel to enable video communication, or you will only join with audio-enabled
   * @returns {number} 0 for success, <0 for failure
   */


  enableVideo() {
    return this.rtcEngine.enableVideo();
  }
  /**
   * @description Use to disable video and use pure audio communication
   * @returns {number} 0 for success, <0 for failure
   */


  disableVideo() {
    return this.rtcEngine.disableVideo();
  }
  /**
   * @description This method starts the local video preview. Before starting the preview,
   * always call setupLocalVideo to set up the preview window and configure the attributes,
   * and also call the enableVideo method to enable video. If startPreview is called to start
   * the local video preview before calling joinChannel to join a channel, the local preview
   * will still be in the started state after leaveChannel is called to leave the channel.
   * stopPreview can be called to close the local preview.
   * @returns {number} 0 for success, <0 for failure
   */


  startPreview() {
    return this.rtcEngine.startPreview();
  }
  /**
   * @description This method stops the local video preview and closes the video.
   * @returns {number} 0 for success, <0 for failure
   */


  stopPreview() {
    return this.rtcEngine.stopPreview();
  }
  /**
   *
   * @param {VIDEO_PROFILE_TYPE} profile - enumeration values represent video profile
   * @param {boolean} [swapWidthAndHeight = false] - Whether to swap width and height
   * @returns {number} 0 for success, <0 for failure
   */


  setVideoProfile(profile, swapWidthAndHeight = false) {
    return this.rtcEngine.setVideoProfile(profile, swapWidthAndHeight);
  }
  /**
   * @param {Object} config - encoder config of video
   * @param {number} config.width - width of video
   * @param {number} config.height - height of video
   * @param {number} config.fps - valid values, 1, 7, 10, 15, 24, 30, 60
   * @param {number} config.bitrate - 0 - standard(recommended), 1 - compatible
   * @param {number} config.minbitrate - by default -1, changing this value is NOT recommended
   * @param {number} config.orientation - 0 - auto adapt to capture source, 1 - Landscape(Horizontal), 2 - Portrait(Vertical)
   * @returns {number} 0 for success, <0 for failure
   */


  setVideoEncoderConfiguration(config) {
    const {
      width = 640,
      height = 480,
      fps = 15,
      bitrate = 0,
      orientation = 0,
      minbitrate = -1
    } = config;
    return this.rtcEngine.setVideoEncoderConfiguration(width, height, fps, bitrate, minbitrate, orientation);
  }
  /**
   * @description This method enables the audio mode, which is enabled by default.
   * @returns {number} 0 for success, <0 for failure
   */


  enableAudio() {
    return this.rtcEngine.enableAudio();
  }
  /**
   * @description This method disables the audio mode.
   * @returns {number} 0 for success, <0 for failure
   */


  disableAudio() {
    return this.rtcEngine.disableAudio();
  }
  /**
   * @description Set audio profile (before join channel) depending on your scenario
   * @param {number} profile 0: default, 1: speech standard, 2: music standard. 3: music standard stereo, 4: music high quality, 5: music high quality stereo
   * @param {number} scenario 0: default, 1: chatroom entertainment, 2: education, 3: game streaming, 4: showroom, 5: game chating
   * @returns {number} 0 for success, <0 for failure
   */


  setAudioProfile(profile, scenario) {
    return this.rtcEngine.setAudioProfile(profile, scenario);
  }
  /**
   * @description This method allows users to set video preferences.
   * @param {boolean} preferFrameRateOverImageQuality enable/disable framerate over image quality
   * @returns {number} 0 for success, <0 for failure
   */


  setVideoQualityParameters(preferFrameRateOverImageQuality) {
    return this.rtcEngine.setVideoQualityParameters(preferFrameRateOverImageQuality);
  }
  /**
   * @description Use setEncryptionSecret to specify an encryption password to enable built-in
   * encryption before joining a channel. All users in a channel must set the same encryption password.
   * The encryption password is automatically cleared once a user has left the channel.
   * If the encryption password is not specified or set to empty, the encryption function will be disabled.
   * @param {string} secret Encryption Password
   * @returns {number} 0 for success, <0 for failure
   */


  setEncryptionSecret(secret) {
    return this.rtcEngine.setEncryptionSecret(secret);
  }
  /**
   * @description This method mutes/unmutes local audio. It enables/disables
   * sending local audio streams to the network.
   * @param {boolean} mute mute/unmute audio
   * @returns {number} 0 for success, <0 for failure
   */


  muteLocalAudioStream(mute) {
    return this.rtcEngine.muteLocalAudioStream(mute);
  }
  /**
   * @description This method mutes/unmutes all remote users’ audio streams.
   * @param {boolean} mute mute/unmute audio
   * @returns {number} 0 for success, <0 for failure
   */


  muteAllRemoteAudioStreams(mute) {
    return this.rtcEngine.muteAllRemoteAudioStreams(mute);
  }
  /**
   * @description Stops receiving all remote users' audio streams by default.
   * @param {boolean} mute mute/unmute audio
   * @returns {number} 0 for success, <0 for failure
   */


  setDefaultMuteAllRemoteAudioStreams(mute) {
    return this.rtcEngine.setDefaultMuteAllRemoteAudioStreams(mute);
  }
  /**
   * @description This method mutes/unmutes a specified user’s audio stream.
   * @param {number} uid user to mute/unmute
   * @param {boolean} mute mute/unmute audio
   * @returns {number} 0 for success, <0 for failure
   */


  muteRemoteAudioStream(uid, mute) {
    return this.rtcEngine.muteRemoteAudioStream(uid, mute);
  }
  /**
   * @description This method mutes/unmutes video stream
   * @param {boolean} mute mute/unmute video
   * @returns {number} 0 for success, <0 for failure
   */


  muteLocalVideoStream(mute) {
    return this.rtcEngine.muteLocalVideoStream(mute);
  }
  /**
   * @description This method disables the local video, which is only applicable to
   * the scenario when the user only wants to watch the remote video without sending
   * any video stream to the other user. This method does not require a local camera.
   * @param {boolean} enable enable/disable video
   * @returns {number} 0 for success, <0 for failure
   */


  enableLocalVideo(enable) {
    return this.rtcEngine.enableLocalVideo(enable);
  }
  /**
   * @description This method mutes/unmutes all remote users’ video streams.
   * @param {boolean} mute mute/unmute video
   * @returns {number} 0 for success, <0 for failure
   */


  muteAllRemoteVideoStreams(mute) {
    return this.rtcEngine.muteAllRemoteVideoStreams(mute);
  }
  /**
   * @description Stops receiving all remote users’ video streams.
   * @param {boolean} mute mute/unmute audio
   * @returns {number} 0 for success, <0 for failure
   */


  setDefaultMuteAllRemoteVideoStreams(mute) {
    return this.rtcEngine.setDefaultMuteAllRemoteVideoStreams(mute);
  }
  /**
   * @description This method enables the SDK to regularly report to the application
   * on which user is talking and the volume of the speaker. Once the method is enabled,
   * the SDK returns the volume indications at the set time internal in the Audio Volume
   * Indication Callback (onAudioVolumeIndication) callback, regardless of whether anyone
   * is speaking in the channel
   * @param {number} interval < 0 for disable, recommend to set > 200ms, < 10ms will not receive any callbacks
   * @param {number} smooth Smoothing factor. The default value is 3
   * @returns {number} 0 for success, <0 for failure
   */


  enableAudioVolumeIndication(interval, smooth) {
    return this.rtcEngine.enableAudioVolumeIndication(interval, smooth);
  }
  /**
   * @description This method mutes/unmutes a specified user’s video stream.
   * @param {number} uid user to mute/unmute
   * @param {boolean} mute mute/unmute video
   * @returns {number} 0 for success, <0 for failure
   */


  muteRemoteVideoStream(uid, mute) {
    return this.rtcEngine.muteRemoteVideoStream(uid, mute);
  }
  /**
   * @description This method sets the in ear monitoring volume.
   * @param {number} volume Volume of the in-ear monitor, ranging from 0 to 100. The default value is 100.
   * @returns {number} 0 for success, <0 for failure
   */


  setInEarMonitoringVolume(volume) {
    return this.rtcEngine.setInEarMonitoringVolume(volume);
  }
  /**
   * @description disable audio function in channel, which will be recovered when leave channel.
   * @returns {number} 0 for success, <0 for failure
   */


  pauseAudio() {
    return this.rtcEngine.pauseAudio();
  }
  /**
   * @description resume audio function in channel.
   * @returns {number} 0 for success, <0 for failure
   */


  resumeAudio() {
    return this.rtcEngine.resumeAudio();
  }
  /**
   * @description set filepath of log
   * @param {string} filepath filepath of log
   * @returns {number} 0 for success, <0 for failure
   */


  setLogFile(filepath) {
    return this.rtcEngine.setLogFile(filepath);
  }
  /**
   * @description set filepath of videosource log (Called After videosource initialized)
   * @param {string} filepath filepath of log
   * @returns {number} 0 for success, <0 for failure
   */


  videoSourceSetLogFile(filepath) {
    return this.rtcEngine.videoSourceSetLogFile(filepath);
  }
  /**
   * @description set log level
   * @param {number} filter filter level
   * LOG_FILTER_OFF = 0: Output no log.
   * LOG_FILTER_DEBUG = 0x80f: Output all the API logs.
   * LOG_FILTER_INFO = 0x0f: Output logs of the CRITICAL, ERROR, WARNING and INFO level.
   * LOG_FILTER_WARNING = 0x0e: Output logs of the CRITICAL, ERROR and WARNING level.
   * LOG_FILTER_ERROR = 0x0c: Output logs of the CRITICAL and ERROR level.
   * LOG_FILTER_CRITICAL = 0x08: Output logs of the CRITICAL level.
   * @returns {number} 0 for success, <0 for failure
   */


  setLogFilter(filter) {
    return this.rtcEngine.setLogFilter(filter);
  }
  /**
   * @description This method sets the stream mode (only applicable to live broadcast) to
   * single- (default) or dual-stream mode.
   * @param {boolean} enable enable/disable dual stream
   * @returns {number} 0 for success, <0 for failure
   */


  enableDualStreamMode(enable) {
    return this.rtcEngine.enableDualStreamMode(enable);
  }
  /**
   * @description This method specifies the video-stream type of the remote user to be
   * received by the local user when the remote user sends dual streams.
   * If dual-stream mode is enabled by calling enableDualStreamMode, you will receive the
   * high-video stream by default. This method allows the application to adjust the
   * corresponding video-stream type according to the size of the video windows to save the bandwidth
   * and calculation resources.
   * If dual-stream mode is not enabled, you will receive the high-video stream by default.
   * The result after calling this method will be returned in onApiCallExecuted. The Agora SDK receives
   * the high-video stream by default to save the bandwidth. If needed, users can switch to the low-video
   * stream using this method.
   * @param {number} uid User ID
   * @param {StreamType} streamType 0 - high, 1 - low
   * @returns {number} 0 for success, <0 for failure
   */


  setRemoteVideoStreamType(uid, streamType) {
    return this.rtcEngine.setRemoteVideoStreamType(uid, streamType);
  }
  /**
   * @description This method sets the default remote video stream type to high or low.
   * @param {StreamType} streamType 0 - high, 1 - low
   * @returns {number} 0 for success, <0 for failure
   */


  setRemoteDefaultVideoStreamType(streamType) {
    return this.rtcEngine.setRemoteDefaultVideoStreamType(streamType);
  }
  /**
   * @description This method enables interoperability with the Agora Web SDK.
   * @param {boolean} enable enable/disable interop
   * @returns {number} 0 for success, <0 for failure
   */


  enableWebSdkInteroperability(enable) {
    return this.rtcEngine.enableWebSdkInteroperability(enable);
  }
  /**
   * @description This method sets the local video mirror mode. Use this method before startPreview,
   * or it does not take effect until you re-enable startPreview.
   * @param {number} mirrortype mirror type
   * 0: The default mirror mode, that is, the mode set by the SDK
   * 1: Enable the mirror mode
   * 2: Disable the mirror mode
   * @returns {number} 0 for success, <0 for failure
   */


  setLocalVideoMirrorMode(mirrortype) {
    return this.rtcEngine.setLocalVideoMirrorMode(mirrortype);
  }
  /**
   * @description Changes the voice pitch of the local speaker.
   * @param {number} pitch - The value ranges between 0.5 and 2.0.
   * The lower the value, the lower the voice pitch.
   * The default value is 1.0 (no change to the local voice pitch).
   * @returns {number} 0 for success, <0 for failure
   */


  setLocalVoicePitch(pitch) {
    return this.rtcEngine.setLocalVoicePitch(pitch);
  }
  /**
   * @description Sets the local voice equalization effect.
   * @param {number} bandFrequency - Sets the band frequency.
   * The value ranges between 0 and 9, representing the respective 10-band center frequencies of the voice effects
   * including 31, 62, 125, 500, 1k, 2k, 4k, 8k, and 16k Hz.
   * @param {number} bandGain - Sets the gain of each band in dB. The value ranges between -15 and 15.
   * @returns {number} 0 for success, <0 for failure
   */


  setLocalVoiceEqualization(bandFrequency, bandGain) {
    return this.rtcEngine.setLocalVoiceEqualization(bandFrequency, bandGain);
  }
  /**
   * @description Sets the local voice reverberation.
   * @param {number} reverbKey - Audio reverberation type.
   * AUDIO_REVERB_DRY_LEVEL = 0, // (dB, [-20,10]), the level of the dry signal
   * AUDIO_REVERB_WET_LEVEL = 1, // (dB, [-20,10]), the level of the early reflection signal (wet signal)
   * AUDIO_REVERB_ROOM_SIZE = 2, // ([0,100]), the room size of the reflection
   * AUDIO_REVERB_WET_DELAY = 3, // (ms, [0,200]), the length of the initial delay of the wet signal in ms
   * AUDIO_REVERB_STRENGTH = 4, // ([0,100]), the strength of the reverberation
   * @param {number} value - value Sets the value of the reverberation key.
   * @returns {number} 0 for success, <0 for failure
   */


  setLocalVoiceReverb(reverbKey, value) {
    return this.rtcEngine.setLocalVoiceReverb(reverbKey, value);
  }
  /**
   * @description Sets the fallback option for the locally published video stream based on the network conditions.
   * The default setting for option is #STREAM_FALLBACK_OPTION_DISABLED, where there is no fallback for the locally published video stream when the uplink network conditions are poor.
   * If *option* is set to #STREAM_FALLBACK_OPTION_AUDIO_ONLY, the SDK will:
   * - Disable the upstream video but enable audio only when the network conditions worsen and cannot support both video and audio.
   * - Re-enable the video when the network conditions improve.
   * When the locally published stream falls back to audio only or when the audio stream switches back to the video,
   * the \ref agora::rtc::IRtcEngineEventHandler::onLocalPublishFallbackToAudioOnly "onLocalPublishFallbackToAudioOnly" callback is triggered.
   * @note Agora does not recommend using this method for CDN live streaming, because the remote CDN live user will have a noticeable lag when the locally publish stream falls back to audio-only.
   * @param {number} option - Sets the fallback option for the locally published video stream.
   * STREAM_FALLBACK_OPTION_DISABLED = 0
   * STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW = 1
   * STREAM_FALLBACK_OPTION_AUDIO_ONLY = 2
   * @returns {number} 0 for success, <0 for failure
   */


  setLocalPublishFallbackOption(option) {
    return this.rtcEngine.setLocalPublishFallbackOption(option);
  }
  /**
   * @description Sets the fallback option for the remotely subscribed stream based on the network conditions.
   * The default setting for @p option is #STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW, where the remotely subscribed stream falls back to
   * the low-stream video (low resolution and low bitrate) under poor downlink network conditions.
   * If *option* is set to #STREAM_FALLBACK_OPTION_AUDIO_ONLY, the SDK automatically switches the video from a high-stream to a low-stream,
   * or disable the video when the downlink network conditions cannot support both audio and video to guarantee the quality of the audio.
   * The SDK monitors the network quality and restores the video stream when the network conditions improve.
   * Once the locally published stream falls back to audio only or the audio stream switches back to the video stream,
   * the \ref agora::rtc::IRtcEngineEventHandler::onRemoteSubscribeFallbackToAudioOnly "onRemoteSubscribeFallbackToAudioOnly" callback is triggered.
   * @param {number} option - Sets the fallback option for the remotely subscribed stream.
   * STREAM_FALLBACK_OPTION_DISABLED = 0
   * STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW = 1
   * STREAM_FALLBACK_OPTION_AUDIO_ONLY = 2
   * @returns {number} 0 for success, <0 for failure
   */


  setRemoteSubscribeFallbackOption(option) {
    return this.rtcEngine.setRemoteSubscribeFallbackOption(option);
  } // ===========================================================================
  // DEVICE MANAGEMENT
  // ===========================================================================

  /**
   * @description This method sets the external audio source.
   * @param {boolean} enabled Enable the function of the external audio source: true/false.
   * @param {number} samplerate Sampling rate of the external audio source.
   * @param {number} channels Number of the external audio source channels (two channels maximum).
   * @returns {number} 0 for success, <0 for failure
   */


  setExternalAudioSource(enabled, samplerate, channels) {
    return this.rtcEngine.setExternalAudioSource(enabled, samplerate, channels);
  }
  /**
   * @description return list of video devices
   * @returns {Array} array of device object
   */


  getVideoDevices() {
    return this.rtcEngine.getVideoDevices();
  }
  /**
   * @description set video device to use via device id
   * @param {string} deviceId device id
   * @returns {number} 0 for success, <0 for failure
   */


  setVideoDevice(deviceId) {
    return this.rtcEngine.setVideoDevice(deviceId);
  }
  /**
   * @description get current using video device
   * @return {Object} video device object
   */


  getCurrentVideoDevice() {
    return this.rtcEngine.getCurrentVideoDevice();
  }
  /**
   * @description This method tests whether the video-capture device works properly.
   * Before calling this method, ensure that you have already called enableVideo,
   * and the HWND window handle of the incoming parameter is valid.
   * @returns {number} 0 for success, <0 for failure
   */


  startVideoDeviceTest() {
    return this.rtcEngine.startVideoDeviceTest();
  }
  /**
   * @description stop video device test
   * @returns {number} 0 for success, <0 for failure
   */


  stopVideoDeviceTest() {
    return this.rtcEngine.stopVideoDeviceTest();
  }
  /**
   * @description return list of audio playback devices
   * @returns {Array} array of device object
   */


  getAudioPlaybackDevices() {
    return this.rtcEngine.getAudioPlaybackDevices();
  }
  /**
   * @description set audio playback device to use via device id
   * @param {string} deviceId device id
   * @returns {number} 0 for success, <0 for failure
   */


  setAudioPlaybackDevice(deviceId) {
    return this.rtcEngine.setAudioPlaybackDevice(deviceId);
  }
  /**
   * @description Retrieves the audio playback device information associated with the device ID and device name
   * @param {string} deviceId device id
   * @param {string} deviceName device name
   * @returns {number} 0 for success, <0 for failure
   */


  getPlaybackDeviceInfo(deviceId, deviceName) {
    return this.rtcEngine.getPlaybackDeviceInfo(deviceId, deviceName);
  }
  /**
   * @description get current using audio playback device
   * @return {Object} audio playback device object
   */


  getCurrentAudioPlaybackDevice() {
    return this.rtcEngine.getCurrentAudioPlaybackDevice();
  }
  /**
   * @description set device playback volume
   * @param {number} volume 0 - 255
   * @returns {number} 0 for success, <0 for failure
   */


  setAudioPlaybackVolume(volume) {
    return this.rtcEngine.setAudioPlaybackVolume(volume);
  }
  /**
   * @description get device playback volume
   * @returns {number} volume
   */


  getAudioPlaybackVolume() {
    return this.rtcEngine.getAudioPlaybackVolume();
  }
  /**
   * @description get audio recording devices
   * @returns {Array} array of recording devices
   */


  getAudioRecordingDevices() {
    return this.rtcEngine.getAudioRecordingDevices();
  }
  /**
   * @description set audio recording device
   * @param {string} deviceId device id
   * @returns {number} 0 for success, <0 for failure
   */


  setAudioRecordingDevice(deviceId) {
    return this.rtcEngine.setAudioRecordingDevice(deviceId);
  }
  /**
   * @description Retrieves the audio recording device information associated with the device ID and device name.
   * @param {string} deviceId device id
   * @param {string} deviceName device name
   * @returns {number} 0 for success, <0 for failure
   */


  getRecordingDeviceInfo(deviceId, deviceName) {
    return this.rtcEngine.getRecordingDeviceInfo(deviceId, deviceName);
  }
  /**
   * @description get current selected audio recording device
   * @returns {Object} audio recording device object
   */


  getCurrentAudioRecordingDevice() {
    return this.rtcEngine.getCurrentAudioRecordingDevice();
  }
  /**
   * @description get audio recording volume
   * @return {number} volume
   */


  getAudioRecordingVolume() {
    return this.rtcEngine.getAudioRecordingVolume();
  }
  /**
   * @description set audio recording device volume
   * @param {number} volume 0 - 255
   * @returns {number} 0 for success, <0 for failure
   */


  setAudioRecordingVolume(volume) {
    return this.rtcEngine.setAudioRecordingVolume(volume);
  }
  /**
   * @description This method checks whether the playback device works properly. The SDK plays an audio file
   * specified by the user. If the user can hear the sound, then the playback device works properly.
   * @param {string} filepath filepath of sound file to play test
   * @returns {number} 0 for success, <0 for failure
   */


  startAudioPlaybackDeviceTest(filepath) {
    return this.rtcEngine.startAudioPlaybackDeviceTest(filepath);
  }
  /**
   * @description stop playback device test
   * @returns {number} 0 for success, <0 for failure
   */


  stopAudioPlaybackDeviceTest() {
    return this.rtcEngine.stopAudioPlaybackDeviceTest();
  }
  /**
   * @description This method enables loopback recording. Once enabled, the SDK collects all local sounds.
   * @param {boolean} [enable = false] whether to enable loop back recording
   * @param {string|null} [deviceName = null] target audio device
   * @returns {number} 0 for success, <0 for failure
   */


  enableLoopbackRecording(enable = false, deviceName = null) {
    return this.rtcEngine.enableLoopbackRecording(enable, deviceName);
  }
  /**
   * @description This method checks whether the microphone works properly. Once the test starts, the SDK uses
   * the onAudioVolumeIndication callback to notify the application about the volume information.
   * @param {number} indicateInterval in second
   * @returns {number} 0 for success, <0 for failure
   */


  startAudioRecordingDeviceTest(indicateInterval) {
    return this.rtcEngine.startAudioRecordingDeviceTest(indicateInterval);
  }
  /**
   * @description stop audio recording device test
   * @returns {number} 0 for success, <0 for failure
   */


  stopAudioRecordingDeviceTest() {
    return this.rtcEngine.stopAudioRecordingDeviceTest();
  }
  /**
   * @description check whether selected audio playback device is muted
   * @returns {boolean} muted/unmuted
   */


  getAudioPlaybackDeviceMute() {
    return this.rtcEngine.getAudioPlaybackDeviceMute();
  }
  /**
   * @description set current audio playback device mute/unmute
   * @param {boolean} mute mute/unmute
   * @returns {number} 0 for success, <0 for failure
   */


  setAudioPlaybackDeviceMute(mute) {
    return this.rtcEngine.setAudioPlaybackDeviceMute(mute);
  }
  /**
   * @description check whether selected audio recording device is muted
   * @returns {boolean} muted/unmuted
   */


  getAudioRecordingDeviceMute() {
    return this.rtcEngine.getAudioRecordingDeviceMute();
  }
  /**
   * @description set current audio recording device mute/unmute
   * @param {boolean} mute mute/unmute
   * @returns {number} 0 for success, <0 for failure
   */


  setAudioRecordingDeviceMute(mute) {
    return this.rtcEngine.setAudioRecordingDeviceMute(mute);
  } // ===========================================================================
  // VIDEO SOURCE
  // NOTE. video source is mainly used to do screenshare, the api basically
  // aligns with normal sdk apis, e.g. videoSourceInitialize vs initialize.
  // it is used to do screenshare with a separate process, in that case
  // it allows user to do screensharing and camera stream pushing at the
  // same time - which is not allowed in single sdk process.
  // if you only need to display camera and screensharing one at a time
  // use sdk original screenshare, if you want both, use video source.
  // ===========================================================================

  /**
   * @description initialize agora real-time-communicating videosource with appid
   * @param {string} appId agora appid
   * @returns {number} 0 for success, <0 for failure
   */


  videoSourceInitialize(appId) {
    return this.rtcEngine.videoSourceInitialize(appId);
  }
  /**
   * @description setup renderer for video source
   * @param {Element} view dom element where video source should be displayed
   */


  setupLocalVideoSource(view) {
    this.initRender('videosource', view);
  }
  /**
   * @description Set it to true to enable videosource web interoperability (After videosource initialized)
   * @param {boolean} enabled enalbe/disable web interoperability
   * @returns {number} 0 for success, <0 for failure
   */


  videoSourceEnableWebSdkInteroperability(enabled) {
    return this.rtcEngine.videoSourceEnableWebSdkInteroperability(enabled);
  }
  /**
   *
   * @description let video source join channel with token, channel, channel_info and uid
   * @param {string} token token
   * @param {string} cname channel
   * @param {string} info channel info
   * @param {number} uid uid
   * @returns {number} 0 for success, <0 for failure
   */


  videoSourceJoin(token, cname, info, uid) {
    return this.rtcEngine.videoSourceJoin(token, cname, info, uid);
  }
  /**
   * @description let video source Leave channel
   * @returns {number} 0 for success, <0 for failure
   */


  videoSourceLeave() {
    return this.rtcEngine.videoSourceLeave();
  }
  /**
   * @description This method updates the Token for video source
   * @param {string} token new token to update
   * @returns {number} 0 for success, <0 for failure
   */


  videoSourceRenewToken(token) {
    return this.rtcEngine.videoSourceRenewToken(token);
  }
  /**
   * @description Set channel profile (after ScreenCapture2) for video source
   * @description 0 (default) for communication, 1 for live broadcasting, 2 for in-game
   * @param {number} profile profile
   * @returns {number} 0 for success, <0 for failure
   */


  videoSourceSetChannelProfile(profile) {
    return this.rtcEngine.videoSourceSetChannelProfile(profile);
  }
  /**
   * @description set video profile for video source (must be called after startScreenCapture2)
   * @param {VIDEO_PROFILE_TYPE} profile - enumeration values represent video profile
   * @param {boolean} [swapWidthAndHeight = false] - Whether to swap width and height
   * @returns {number} 0 for success, <0 for failure
   */


  videoSourceSetVideoProfile(profile, swapWidthAndHeight = false) {
    return this.rtcEngine.videoSourceSetVideoProfile(profile, swapWidthAndHeight);
  }
  /**
   * @description get list of all system window ids and relevant infos, the window id can be used for screen share
   * @returns {Array} list of window infos
   */


  getScreenWindowsInfo() {
    return this.rtcEngine.getScreenWindowsInfo();
  }
  /**
   * @description start video source screen capture
   * @param {number} wndid windows id to capture
   * @param {number} captureFreq fps of video source screencapture, 1 - 15
   * @param {*} rect null/if specified, e.g, {left: 0, right: 100, top: 0, bottom: 100} (relative distance from the left-top corner of the screen)
   * @param {number} bitrate bitrate of video source screencapture
   * @returns {number} 0 for success, <0 for failure
   */


  startScreenCapture2(windowId, captureFreq, rect, bitrate) {
    return this.rtcEngine.startScreenCapture2(windowId, captureFreq, rect, bitrate);
  }
  /**
   * @description stop video source screen capture
   * @returns {number} 0 for success, <0 for failure
   */


  stopScreenCapture2() {
    return this.rtcEngine.stopScreenCapture2();
  }
  /**
   * @description start video source preview
   * @returns {number} 0 for success, <0 for failure
   */


  startScreenCapturePreview() {
    return this.rtcEngine.videoSourceStartPreview();
  }
  /**
   * @description stop video source preview
   * @returns {number} 0 for success, <0 for failure
   */


  stopScreenCapturePreview() {
    return this.rtcEngine.videoSourceStopPreview();
  }
  /**
   * @description enable dual stream mode for video source
   * @param {boolean} enable whether dual stream mode is enabled
   * @return {number} 0 for success, <0 for failure
   */


  videoSourceEnableDualStreamMode(enable) {
    return this.rtcEngine.videoSourceEnableDualStreamMode(enable);
  }
  /**
   * @description setParameters for video source
   * @param {string} parameter parameter to set
   * @returns {number} 0 for success, <0 for failure
   */


  videoSourceSetParameters(parameter) {
    return this.rtcEngine.videoSourceSetParameter(parameter);
  }
  /**
   * @description This method updates the screen capture region for video source
   * @param {*} rect {left: 0, right: 100, top: 0, bottom: 100} (relative distance from the left-top corner of the screen)
   * @returns {number} 0 for success, <0 for failure
   */


  videoSourceUpdateScreenCaptureRegion(rect) {
    return this.rtcEngine.videoSourceUpdateScreenCaptureRegion(rect);
  }
  /**
   * @description release video source object
   * @returns {number} 0 for success, <0 for failure
   */


  videoSourceRelease() {
    return this.rtcEngine.videoSourceRelease();
  } // ===========================================================================
  // SCREEN SHARE
  // When this api is called, your camera stream will be replaced with
  // screenshare view. i.e. you can only see camera video or screenshare
  // one at a time via this section's api
  // ===========================================================================

  /**
   * @description start screen capture
   * @param {number} windowId windows id to capture
   * @param {number} captureFreq fps of screencapture, 1 - 15
   * @param {*} rect null/if specified, e.g, {left: 0, right: 100, top: 0, bottom: 100} (relative distance from the left-top corner of the screen)
   * @param {number} bitrate bitrate of screencapture
   * @returns {number} 0 for success, <0 for failure
   */


  startScreenCapture(windowId, captureFreq, rect, bitrate) {
    return this.rtcEngine.startScreenCapture(windowId, captureFreq, rect, bitrate);
  }
  /**
   * @description stop screen capture
   * @returns {number} 0 for success, <0 for failure
   */


  stopScreenCapture() {
    return this.rtcEngine.stopScreenCapture();
  }
  /**
   * @description This method updates the screen capture region.
   * @param {*} rect {left: 0, right: 100, top: 0, bottom: 100} (relative distance from the left-top corner of the screen)
   * @returns {number} 0 for success, <0 for failure
   */


  updateScreenCaptureRegion(rect) {
    return this.rtcEngine.updateScreenCaptureRegion(rect);
  } // ===========================================================================
  // AUDIO MIXING
  // ===========================================================================

  /**
   * @description This method mixes the specified local audio file with the audio stream
   * from the microphone; or, it replaces the microphone’s audio stream with the specified
   * local audio file. You can choose whether the other user can hear the local audio playback
   * and specify the number of loop playbacks. This API also supports online music playback.
   * @param {string} filepath Name and path of the local audio file to be mixed.
   *            Supported audio formats: mp3, aac, m4a, 3gp, and wav.
   * @param {boolean} loopback true - local loopback, false - remote loopback
   * @param {boolean} replace whether audio file replace microphone audio
   * @param {number} cycle number of loop playbacks, -1 for infinite
   * @returns {number} 0 for success, <0 for failure
   */


  startAudioMixing(filepath, loopback, replace, cycle) {
    return this.rtcEngine.startAudioMixing(filepath, loopback, replace, cycle);
  }
  /**
   * @description This method stops audio mixing. Call this API when you are in a channel.
   * @returns {number} 0 for success, <0 for failure
   */


  stopAudioMixing() {
    return this.rtcEngine.stopAudioMixing();
  }
  /**
   * @description This method pauses audio mixing. Call this API when you are in a channel.
   * @returns {number} 0 for success, <0 for failure
   */


  pauseAudioMixing() {
    return this.rtcEngine.pauseAudioMixing();
  }
  /**
   * @description This method resumes audio mixing from pausing. Call this API when you are in a channel.
   * @returns {number} 0 for success, <0 for failure
   */


  resumeAudioMixing() {
    return this.rtcEngine.resumeAudioMixing();
  }
  /**
   * @description This method adjusts the volume during audio mixing. Call this API when you are in a channel.
   * @param {number} volume Volume ranging from 0 to 100. By default, 100 is the original volume.
   * @returns {number} 0 for success, <0 for failure
   */


  adjustAudioMixingVolume(volume) {
    return this.rtcEngine.adjustAudioMixingVolume(volume);
  }
  /**
   * @description Adjusts the audio mixing volume for local playback.
   * @param {number} volume Volume ranging from 0 to 100. By default, 100 is the original volume.
   * @returns {number} 0 for success, <0 for failure
   */


  adjustAudioMixingPlayoutVolume(volume) {
    return this.rtcEngine.adjustAudioMixingPlayoutVolume(volume);
  }
  /**
   * @description Adjusts the audio mixing volume for publishing (for remote users).
   * @param {number} volume Volume ranging from 0 to 100. By default, 100 is the original volume.
   * @returns {number} 0 for success, <0 for failure
   */


  adjustAudioMixingPublishVolume(volume) {
    return this.rtcEngine.adjustAudioMixingPublishVolume(volume);
  }
  /**
   * @description This method gets the duration (ms) of the audio mixing. Call this API when you are in
   * a channel. A return value of 0 means that this method call has failed.
   * @returns {number} duration of audio mixing
   */


  getAudioMixingDuration() {
    return this.rtcEngine.getAudioMixingDuration();
  }
  /**
   * @description This method gets the playback position (ms) of the audio. Call this API
   * when you are in a channel.
   * @returns {number} current playback position
   */


  getAudioMixingCurrentPosition() {
    return this.rtcEngine.getAudioMixingCurrentPosition();
  }
  /**
   * @description This method drags the playback progress bar of the audio mixing file to where
   * you want to play instead of playing it from the beginning.
   * @param {number} position Integer. The position of the audio mixing file in ms
   * @returns {number} 0 for success, <0 for failure
   */


  setAudioMixingPosition(position) {
    return this.rtcEngine.setAudioMixingPosition(position);
  } // ===========================================================================
  // CDN STREAMING
  // ===========================================================================

  /**
   * @description Adds a stream RTMP URL address, to which the host publishes the stream. (CDN live only.)
   * Invoke onStreamPublished when successful
   * @note
   * - Ensure that the user joins the channel before calling this method.
   * - This method adds only one stream RTMP URL address each time it is called.
   * - The RTMP URL address must not contain special characters, such as Chinese language characters.
   * @param {string} url Pointer to the RTMP URL address, to which the host publishes the stream
   * @param {bool} transcodingEnabled Sets whether transcoding is enabled/disabled
   * @returns {number} 0 for success, <0 for failure
   */


  addPublishStreamUrl(url, transcodingEnabled) {
    return this.rtcEngine.addPublishStreamUrl(url, transcodingEnabled);
  }
  /**
   * @description Removes a stream RTMP URL address. (CDN live only.)
   * @note
   * - This method removes only one RTMP URL address each time it is called.
   * - The RTMP URL address must not contain special characters, such as Chinese language characters.
   * @param {string} url Pointer to the RTMP URL address to be removed.
   * @returns {number} 0 for success, <0 for failure
   */


  removePublishStreamUrl(url) {
    return this.rtcEngine.removePublishStreamUrl(url);
  }
  /**
   * @description Sets the video layout and audio settings for CDN live. (CDN live only.)
   * @param {TranscodingConfig} transcoding transcoding Sets the CDN live audio/video transcoding settings. See LiveTranscoding.
   * @returns {number} 0 for success, <0 for failure
   */


  setLiveTranscoding(transcoding) {
    return this.rtcEngine.setLiveTranscoding(transcoding);
  } // ===========================================================================
  // STREAM INJECTION
  // ===========================================================================

  /**
   * @description Adds a voice or video stream HTTP/HTTPS URL address to a live broadcast.
   * - The \ref IRtcEngineEventHandler::onStreamInjectedStatus "onStreamInjectedStatus" callback returns
   * the inject stream status.
   * - The added stream HTTP/HTTPS URL address can be found in the channel with a @p uid of 666, and the
   * \ref IRtcEngineEventHandler::onUserJoined "onUserJoined" and \ref IRtcEngineEventHandler::onFirstRemoteVideoFrame "onFirstRemoteVideoFrame"
   * callbacks are triggered.
   * @param {string} url Pointer to the HTTP/HTTPS URL address to be added to the ongoing live broadcast. Valid protocols are RTMP, HLS, and FLV.
   * - Supported FLV audio codec type: AAC.
   * - Supported FLV video codec type: H264 (AVC).
   * @param {InjectStreamConfig} config Pointer to the InjectStreamConfig object that contains the configuration of the added voice or video stream
   * @returns {number} 0 for success, <0 for failure
   */


  addInjectStreamUrl(url, config) {
    return this.rtcEngine.addInjectStreamUrl(url, config);
  }
  /**
   * @description Removes the voice or video stream HTTP/HTTPS URL address from a live broadcast.
   * @note If this method is called successfully, the \ref IRtcEngineEventHandler::onUserOffline "onUserOffline" callback is triggered
   * and a stream uid of 666 is returned.
   * @param {string} url Pointer to the HTTP/HTTPS URL address of the added stream to be removed.
   * @returns {number} 0 for success, <0 for failure
   */


  removeInjectStreamUrl(url) {
    return this.rtcEngine.removeInjectStreamUrl(url);
  } // ===========================================================================
  // RAW DATA
  // ===========================================================================

  /**
   * @description This method sets the format of the callback data in onRecordAudioFrame.
   * @param {number} sampleRate It specifies the sampling rate in the callback data returned by onRecordAudioFrame,
   * which can set be as 8000, 16000, 32000, 44100 or 48000.
   * @param {number} channel 1 - mono, 2 - dual
   * @param {number} mode 0 - read only mode, 1 - write-only mode, 2 - read and white mode
   * @param {number} samplesPerCall It specifies the sampling points in the called data returned in onRecordAudioFrame,
   * for example, it is usually set as 1024 for stream pushing.
   * @returns {number} 0 for success, <0 for failure
   */


  setRecordingAudioFrameParameters(sampleRate, channel, mode, samplesPerCall) {
    return this.rtcEngine.setRecordingAudioFrameParameters(sampleRate, channel, mode, samplesPerCall);
  }
  /**
   * This method sets the format of the callback data in onPlaybackAudioFrame.
   * @param {number} sampleRate Specifies the sampling rate in the callback data returned by onPlaybackAudioFrame,
   * which can set be as 8000, 16000, 32000, 44100, or 48000.
   * @param {number} channel 1 - mono, 2 - dual
   * @param {number} mode 0 - read only mode, 1 - write-only mode, 2 - read and white mode
   * @param {number} samplesPerCall It specifies the sampling points in the called data returned in onRecordAudioFrame,
   * for example, it is usually set as 1024 for stream pushing.
   * @returns {number} 0 for success, <0 for failure
   */


  setPlaybackAudioFrameParameters(sampleRate, channel, mode, samplesPerCall) {
    return this.rtcEngine.setPlaybackAudioFrameParameters(sampleRate, channel, mode, samplesPerCall);
  }
  /**
   * This method sets the format of the callback data in onMixedAudioFrame.
   * @param {number} sampleRate Specifies the sampling rate in the callback data returned by onMixedAudioFrame,
   * which can set be as 8000, 16000, 32000, 44100, or 48000.
   * @param {number} samplesPerCall Specifies the sampling points in the called data returned in onMixedAudioFrame,
   * for example, it is usually set as 1024 for stream pushing.
   * @returns {number} 0 for success, <0 for failure
   */


  setMixedAudioFrameParameters(sampleRate, samplesPerCall) {
    return this.rtcEngine.setMixedAudioFrameParameters(sampleRate, samplesPerCall);
  } // ===========================================================================
  // DATA CHANNEL
  // ===========================================================================

  /**
   * @description This method creates a data stream. Each user can only have up to five data channels at the same time.
   * @param {boolean} reliable true - The recipients will receive data from the sender within 5 seconds. If the recipient does not receive the sent data within 5 seconds, the data channel will report an error to the application.
   * false - The recipients may not receive any data, while it will not report any error upon data missing.
   * @param {boolean} ordered true - The recipients will receive data in the order of the sender.
   * false - The recipients will not receive data in the order of the sender.
   * @returns {number} <0 for failure, > 0 for stream id of data
   */


  createDataStream(reliable, ordered) {
    return this.rtcEngine.createDataStream(reliable, ordered);
  }
  /**
   * @description This method sends data stream messages to all users in a channel.
   * Up to 30 packets can be sent per second in a channel with each packet having a maximum size of 1 kB.
   * The API controls the data channel transfer rate. Each client can send up to 6 kB of data per second.
   * Each user can have up to five data channels simultaneously.
   * @param {number} streamId Stream ID from createDataStream
   * @param {string} msg Data to be sent
   * @returns {number} 0 for success, <0 for failure
   */


  sendStreamMessage(streamId, msg) {
    return this.rtcEngine.sendStreamMessage(streamId, msg);
  } // ===========================================================================
  // MANAGE AUDIO EFFECT
  // ===========================================================================

  /**
   * @description get effects volume
   * @returns {number} volume
   */


  getEffectsVolume() {
    return this.rtcEngine.getEffectsVolume();
  }
  /**
   * @description set effects volume
   * @param {number} volume - [0.0, 100.0]
   * @returns {number} 0 for success, <0 for failure
   */


  setEffectsVolume(volume) {
    return this.rtcEngine.setEffectsVolume(volume);
  }
  /**
   * @description set effect volume of a sound id
   * @param {number} soundId soundId
   * @param {number} volume - [0.0, 100.0]
   * @returns {number} 0 for success, <0 for failure
   */


  setVolumeOfEffect(soundId, volume) {
    return this.rtcEngine.setVolumeOfEffect(soundId, volume);
  }
  /**
   * @description play effect
   * @param {number} soundId soundId
   * @param {string} filePath filepath
   * @param {number} loopcount - 0: once, 1: twice, -1: infinite
   * @param {number} pitch - [0.5, 2]
   * @param {number} pan - [-1, 1]
   * @param {number} gain - [0, 100]
   * @param {boolean} publish publish
   * @returns {number} 0 for success, <0 for failure
   */


  playEffect(soundId, filePath, loopcount, pitch, pan, gain, publish) {
    return this.rtcEngine.playEffect(soundId, filePath, loopcount, pitch, pan, gain, publish);
  }
  /**
   * @description stop effect via given sound id
   * @param {number} soundId soundId
   * @returns {number} 0 for success, <0 for failure
   */


  stopEffect(soundId) {
    return this.rtcEngine.stopEffect(soundId);
  }
  /**
   * @description preload effect
   * @param {number} soundId soundId
   * @param {string} filePath filepath
   * @returns {number} 0 for success, <0 for failure
   */


  preloadEffect(soundId, filePath) {
    return this.rtcEngine.preloadEffect(soundId, filePath);
  }
  /**
   * This method releases a specific preloaded audio effect from the memory.
   * @param {number} soundId soundId
   * @returns {number} 0 for success, <0 for failure
   */


  unloadEffect(soundId) {
    return this.rtcEngine.unloadEffect(soundId);
  }
  /**
   * @description This method pauses a specific audio effect.
   * @param {number} soundId soundId
   * @returns {number} 0 for success, <0 for failure
   */


  pauseEffect(soundId) {
    return this.rtcEngine.pauseEffect(soundId);
  }
  /**
   * @description This method pauses all the audio effects.
   * @returns {number} 0 for success, <0 for failure
   */


  pauseAllEffects() {
    return this.rtcEngine.pauseAllEffects();
  }
  /**
   * @description This method resumes playing a specific audio effect.
   * @param {number} soundId sound id
   * @returns {number} 0 for success, <0 for failure
   */


  resumeEffect(soundId) {
    return this.rtcEngine.resumeEffect(soundId);
  }
  /**
   * @description This method resumes playing all the audio effects.
   * @returns {number} 0 for success, <0 for failure
   */


  resumeAllEffects() {
    return this.rtcEngine.resumeAllEffects();
  } // ===========================================================================
  // EXTRA
  // ===========================================================================

  /**
   * @description When a user joins a channel on a client using joinChannelByToken,
   * a CallId is generated to identify the call from the client. Some methods such
   * as rate and complain need to be called after the call ends in order to submit
   * feedback to the SDK. These methods require assigned values of the CallId parameters.
   * To use these feedback methods, call the getCallId method to retrieve the CallId during the call,
   * and then pass the value as an argument in the feedback methods after the call ends.
   * @returns {string} Current call ID.
   */


  getCallId() {
    return this.rtcEngine.getCallId();
  }
  /**
   * @description This method lets the user rate the call. It is usually called after the call ends.
   * @param {string} callId Call ID retrieved from the getCallId method.
   * @param {number} rating Rating for the call between 1 (lowest score) to 10 (highest score).
   * @param {string} desc A given description for the call with a length less than 800 bytes.
   * @returns {number} 0 for success, <0 for failure
   */


  rate(callId, rating, desc) {
    return this.rtcEngine.rate(callId, rating, desc);
  }
  /**
   * @description This method allows the user to complain about the call quality. It is usually
   * called after the call ends.
   * @param {string} callId Call ID retrieved from the getCallId method.
   * @param {string} desc A given description of the call with a length less than 800 bytes.
   * @returns {number} 0 for success, <0 for failure
   */


  complain(callId, desc) {
    return this.rtcEngine.complain(callId, desc);
  } // ===========================================================================
  // replacement for setParameters call
  // ===========================================================================


  setBool(key, value) {
    return this.rtcEngine.setBool(key, value);
  }

  setInt(key, value) {
    return this.rtcEngine.setInt(key, value);
  }

  setUInt(key, value) {
    return this.rtcEngine.setUInt(key, value);
  }

  setNumber(key, value) {
    return this.rtcEngine.setNumber(key, value);
  }

  setString(key, value) {
    return this.rtcEngine.setString(key, value);
  }

  setObject(key, value) {
    return this.rtcEngine.setObject(key, value);
  }

  getBool(key) {
    return this.rtcEngine.getBool(key);
  }

  getInt(key) {
    return this.rtcEngine.getInt(key);
  }

  getUInt(key) {
    return this.rtcEngine.getUInt(key);
  }

  getNumber(key) {
    return this.rtcEngine.getNumber(key);
  }

  getString(key) {
    return this.rtcEngine.getString(key);
  }

  getObject(key) {
    return this.rtcEngine.getObject(key);
  }

  getArray(key) {
    return this.rtcEngine.getArray(key);
  }

  setParameters(param) {
    return this.rtcEngine.setParameters(param);
  }

  convertPath(path) {
    return this.rtcEngine.convertPath(path);
  }

  setProfile(profile, merge) {
    return this.rtcEngine.setProfile(profile, merge);
  }

}

/* harmony default export */ var AgoraSdk = __webpack_exports__["default"] = (AgoraSdk_AgoraRtcEngine);

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ee8db2c582e8ca3fdb7442be9537ca69.png";

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(104);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var task = __webpack_require__(106);
var FORCED = !global.setImmediate || !global.clearImmediate;

__webpack_require__(27)({ global: true, bind: true, enumerable: true, forced: FORCED }, {
  setImmediate: task.set,
  clearImmediate: task.clear
});


/***/ }),
/* 92 */
/***/ (function(module, exports) {

const hotkeys = {
  KEY_C: {
    code: 'C',
    windowFocusNeeded: true
  },
  KEY_M: {
    code: 'M',
    windowFocusNeeded: true
  },
  KEY_G: {
    code: 'G',
    windowFocusNeeded: true
  },
  KEY_LEFT: {
    code: 'Left',
    windowFocusNeeded: true
  },
  KEY_RIGHT: {
    code: 'Right',
    windowFocusNeeded: true
  },
  KEY_ENTER: {
    code: 'Return',
    windowFocusNeeded: true
  },
  KEY_ESC: {
    code: 'Escape',
    windowFocusNeeded: true
  }
};

for (const _keyName in hotkeys) {
  hotkeys[_keyName].toString = () => hotkeys[_keyName].code;
}

module.exports = hotkeys;

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("react-rangeslider");

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(97);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(15);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call
    method.call(null, argument || function () { throw Error(); }, 1);
  });
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var codePointAt = __webpack_require__(102);

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? codePointAt(S, index, true).length : 1);
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(30);
var requireObjectCoercible = __webpack_require__(29);
// CONVERT_TO_STRING: true  -> String#at
// CONVERT_TO_STRING: false -> String#codePointAt
module.exports = function (that, pos, CONVERT_TO_STRING) {
  var S = String(requireObjectCoercible(that));
  var position = toInteger(pos);
  var size = S.length;
  var first, second;
  if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
  first = S.charCodeAt(position);
  return first < 0xd800 || first > 0xdbff || position + 1 === size
    || (second = S.charCodeAt(position + 1)) < 0xdc00 || second > 0xdfff
      ? CONVERT_TO_STRING ? S.charAt(position) : first
      : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xd800 << 10) + (second - 0xdc00) + 0x10000;
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(46);
var regexpExec = __webpack_require__(90);

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(19);

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(13);
var redefine = __webpack_require__(39);
var fails = __webpack_require__(15);
var wellKnownSymbol = __webpack_require__(21);
var regexpExec = __webpack_require__(90);

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };

    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
    if (sham) hide(RegExp.prototype[SYMBOL], 'sham', true);
  }
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var classof = __webpack_require__(46);
var bind = __webpack_require__(107);
var html = __webpack_require__(62);
var createElement = __webpack_require__(38);
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var listener = function (event) {
  run.call(event.data);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(bind(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(bind(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(bind(run, id, 1), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(89);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_immediate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91);
/* harmony import */ var core_js_modules_web_immediate__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_immediate__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_url_to_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(110);
/* harmony import */ var core_js_modules_web_url_to_json__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json__WEBPACK_IMPORTED_MODULE_6__);







!function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && __webpack_require__(111) ? define([], t) : "object" == typeof exports ? exports.Signal = t() : e.Signal = t();
}(window, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var i = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
        return e[t];
      }.bind(null, i));
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 47);
  }([function (e, t) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (n = window);
    }

    e.exports = n;
  }, function (e, t) {
    var n,
        r,
        i = e.exports = {};

    function a() {
      throw new Error("setTimeout has not been defined");
    }

    function o() {
      throw new Error("clearTimeout has not been defined");
    }

    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);

      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }

    !function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : a;
      } catch (e) {
        n = a;
      }

      try {
        r = "function" == typeof clearTimeout ? clearTimeout : o;
      } catch (e) {
        r = o;
      }
    }();
    var l,
        u = [],
        f = !1,
        h = -1;

    function c() {
      f && l && (f = !1, l.length ? u = l.concat(u) : h = -1, u.length && d());
    }

    function d() {
      if (!f) {
        var e = s(c);
        f = !0;

        for (var t = u.length; t;) {
          for (l = u, u = []; ++h < t;) l && l[h].run();

          h = -1, t = u.length;
        }

        l = null, f = !1, function (e) {
          if (r === clearTimeout) return clearTimeout(e);
          if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);

          try {
            r(e);
          } catch (t) {
            try {
              return r.call(null, e);
            } catch (t) {
              return r.call(this, e);
            }
          }
        }(e);
      }
    }

    function _(e, t) {
      this.fun = e, this.array = t;
    }

    function p() {}

    i.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      u.push(new _(e, t)), 1 !== u.length || f || s(d);
    }, _.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function (e) {
      return [];
    }, i.binding = function (e) {
      throw new Error("process.binding is not supported");
    }, i.cwd = function () {
      return "/";
    }, i.chdir = function (e) {
      throw new Error("process.chdir is not supported");
    }, i.umask = function () {
      return 0;
    };
  }, function (e, t) {
    "function" == typeof Object.create ? e.exports = function (e, t) {
      e.super_ = t, e.prototype = Object.create(t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      });
    } : e.exports = function (e, t) {
      e.super_ = t;

      var n = function () {};

      n.prototype = t.prototype, e.prototype = new n(), e.prototype.constructor = e;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(6),
        i = Object.keys || function (e) {
      var t = [];

      for (var n in e) t.push(n);

      return t;
    };

    e.exports = h;
    var a = n(5);
    a.inherits = n(2);
    var o = n(13),
        s = n(11);
    a.inherits(h, o);

    for (var l = i(s.prototype), u = 0; u < l.length; u++) {
      var f = l[u];
      h.prototype[f] || (h.prototype[f] = s.prototype[f]);
    }

    function h(e) {
      if (!(this instanceof h)) return new h(e);
      o.call(this, e), s.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", c);
    }

    function c() {
      this.allowHalfOpen || this._writableState.ended || r.nextTick(d, this);
    }

    function d(e) {
      e.end();
    }

    Object.defineProperty(h.prototype, "writableHighWaterMark", {
      enumerable: !1,
      get: function () {
        return this._writableState.highWaterMark;
      }
    }), Object.defineProperty(h.prototype, "destroyed", {
      get: function () {
        return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function (e) {
        void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e);
      }
    }), h.prototype._destroy = function (e, t) {
      this.push(null), this.end(), r.nextTick(t, e);
    };
  }, function (e, t, n) {
    "use strict";

    (function (e) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
       * @license  MIT
       */
      var r = n(23),
          i = n(24),
          a = n(12);

      function o() {
        return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }

      function s(e, t) {
        if (o() < t) throw new RangeError("Invalid typed array length");
        return l.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = l.prototype : (null === e && (e = new l(t)), e.length = t), e;
      }

      function l(e, t, n) {
        if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l)) return new l(e, t, n);

        if ("number" == typeof e) {
          if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
          return h(this, e);
        }

        return u(this, e, t, n);
      }

      function u(e, t, n, r) {
        if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, n, r) {
          if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
          if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
          t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
          l.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = l.prototype : e = c(e, t);
          return e;
        }(e, t, n, r) : "string" == typeof t ? function (e, t, n) {
          "string" == typeof n && "" !== n || (n = "utf8");
          if (!l.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');

          var r = 0 | _(t, n),
              i = (e = s(e, r)).write(t, n);

          i !== r && (e = e.slice(0, i));
          return e;
        }(e, t, n) : function (e, t) {
          if (l.isBuffer(t)) {
            var n = 0 | d(t.length);
            return 0 === (e = s(e, n)).length ? e : (t.copy(e, 0, 0, n), e);
          }

          if (t) {
            if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || function (e) {
              return e != e;
            }(t.length) ? s(e, 0) : c(e, t);
            if ("Buffer" === t.type && a(t.data)) return c(e, t.data);
          }

          throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
        }(e, t);
      }

      function f(e) {
        if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
        if (e < 0) throw new RangeError('"size" argument must not be negative');
      }

      function h(e, t) {
        if (f(t), e = s(e, t < 0 ? 0 : 0 | d(t)), !l.TYPED_ARRAY_SUPPORT) for (var n = 0; n < t; ++n) e[n] = 0;
        return e;
      }

      function c(e, t) {
        var n = t.length < 0 ? 0 : 0 | d(t.length);
        e = s(e, n);

        for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];

        return e;
      }

      function d(e) {
        if (e >= o()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
        return 0 | e;
      }

      function _(e, t) {
        if (l.isBuffer(e)) return e.length;
        if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
        "string" != typeof e && (e = "" + e);
        var n = e.length;
        if (0 === n) return 0;

        for (var r = !1;;) switch (t) {
          case "ascii":
          case "latin1":
          case "binary":
            return n;

          case "utf8":
          case "utf-8":
          case void 0:
            return F(e).length;

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return 2 * n;

          case "hex":
            return n >>> 1;

          case "base64":
            return Z(e).length;

          default:
            if (r) return F(e).length;
            t = ("" + t).toLowerCase(), r = !0;
        }
      }

      function p(e, t, n) {
        var r = e[t];
        e[t] = e[n], e[n] = r;
      }

      function g(e, t, n, r, i) {
        if (0 === e.length) return -1;

        if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
          if (i) return -1;
          n = e.length - 1;
        } else if (n < 0) {
          if (!i) return -1;
          n = 0;
        }

        if ("string" == typeof t && (t = l.from(t, r)), l.isBuffer(t)) return 0 === t.length ? -1 : m(e, t, n, r, i);
        if ("number" == typeof t) return t &= 255, l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : m(e, [t], n, r, i);
        throw new TypeError("val must be string, number or Buffer");
      }

      function m(e, t, n, r, i) {
        var a,
            o = 1,
            s = e.length,
            l = t.length;

        if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
          if (e.length < 2 || t.length < 2) return -1;
          o = 2, s /= 2, l /= 2, n /= 2;
        }

        function u(e, t) {
          return 1 === o ? e[t] : e.readUInt16BE(t * o);
        }

        if (i) {
          var f = -1;

          for (a = n; a < s; a++) if (u(e, a) === u(t, -1 === f ? 0 : a - f)) {
            if (-1 === f && (f = a), a - f + 1 === l) return f * o;
          } else -1 !== f && (a -= a - f), f = -1;
        } else for (n + l > s && (n = s - l), a = n; a >= 0; a--) {
          for (var h = !0, c = 0; c < l; c++) if (u(e, a + c) !== u(t, c)) {
            h = !1;
            break;
          }

          if (h) return a;
        }

        return -1;
      }

      function v(e, t, n, r) {
        n = Number(n) || 0;
        var i = e.length - n;
        r ? (r = Number(r)) > i && (r = i) : r = i;
        var a = t.length;
        if (a % 2 != 0) throw new TypeError("Invalid hex string");
        r > a / 2 && (r = a / 2);

        for (var o = 0; o < r; ++o) {
          var s = parseInt(t.substr(2 * o, 2), 16);
          if (isNaN(s)) return o;
          e[n + o] = s;
        }

        return o;
      }

      function b(e, t, n, r) {
        return j(F(t, e.length - n), e, n, r);
      }

      function y(e, t, n, r) {
        return j(function (e) {
          for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));

          return t;
        }(t), e, n, r);
      }

      function w(e, t, n, r) {
        return y(e, t, n, r);
      }

      function E(e, t, n, r) {
        return j(Z(t), e, n, r);
      }

      function k(e, t, n, r) {
        return j(function (e, t) {
          for (var n, r, i, a = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);

          return a;
        }(t, e.length - n), e, n, r);
      }

      function S(e, t, n) {
        return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n));
      }

      function x(e, t, n) {
        n = Math.min(e.length, n);

        for (var r = [], i = t; i < n;) {
          var a,
              o,
              s,
              l,
              u = e[i],
              f = null,
              h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
          if (i + h <= n) switch (h) {
            case 1:
              u < 128 && (f = u);
              break;

            case 2:
              128 == (192 & (a = e[i + 1])) && (l = (31 & u) << 6 | 63 & a) > 127 && (f = l);
              break;

            case 3:
              a = e[i + 1], o = e[i + 2], 128 == (192 & a) && 128 == (192 & o) && (l = (15 & u) << 12 | (63 & a) << 6 | 63 & o) > 2047 && (l < 55296 || l > 57343) && (f = l);
              break;

            case 4:
              a = e[i + 1], o = e[i + 2], s = e[i + 3], 128 == (192 & a) && 128 == (192 & o) && 128 == (192 & s) && (l = (15 & u) << 18 | (63 & a) << 12 | (63 & o) << 6 | 63 & s) > 65535 && l < 1114112 && (f = l);
          }
          null === f ? (f = 65533, h = 1) : f > 65535 && (f -= 65536, r.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), r.push(f), i += h;
        }

        return function (e) {
          var t = e.length;
          if (t <= T) return String.fromCharCode.apply(String, e);
          var n = "",
              r = 0;

          for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += T));

          return n;
        }(r);
      }

      t.Buffer = l, t.SlowBuffer = function (e) {
        +e != e && (e = 0);
        return l.alloc(+e);
      }, t.INSPECT_MAX_BYTES = 50, l.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
        try {
          var e = new Uint8Array(1);
          return e.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function () {
              return 42;
            }
          }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength;
        } catch (e) {
          return !1;
        }
      }(), t.kMaxLength = o(), l.poolSize = 8192, l._augment = function (e) {
        return e.__proto__ = l.prototype, e;
      }, l.from = function (e, t, n) {
        return u(null, e, t, n);
      }, l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
        value: null,
        configurable: !0
      })), l.alloc = function (e, t, n) {
        return function (e, t, n, r) {
          return f(t), t <= 0 ? s(e, t) : void 0 !== n ? "string" == typeof r ? s(e, t).fill(n, r) : s(e, t).fill(n) : s(e, t);
        }(null, e, t, n);
      }, l.allocUnsafe = function (e) {
        return h(null, e);
      }, l.allocUnsafeSlow = function (e) {
        return h(null, e);
      }, l.isBuffer = function (e) {
        return !(null == e || !e._isBuffer);
      }, l.compare = function (e, t) {
        if (!l.isBuffer(e) || !l.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
        if (e === t) return 0;

        for (var n = e.length, r = t.length, i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
          n = e[i], r = t[i];
          break;
        }

        return n < r ? -1 : r < n ? 1 : 0;
      }, l.isEncoding = function (e) {
        switch (String(e).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return !0;

          default:
            return !1;
        }
      }, l.concat = function (e, t) {
        if (!a(e)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === e.length) return l.alloc(0);
        var n;
        if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
        var r = l.allocUnsafe(t),
            i = 0;

        for (n = 0; n < e.length; ++n) {
          var o = e[n];
          if (!l.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
          o.copy(r, i), i += o.length;
        }

        return r;
      }, l.byteLength = _, l.prototype._isBuffer = !0, l.prototype.swap16 = function () {
        var e = this.length;
        if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");

        for (var t = 0; t < e; t += 2) p(this, t, t + 1);

        return this;
      }, l.prototype.swap32 = function () {
        var e = this.length;
        if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");

        for (var t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2);

        return this;
      }, l.prototype.swap64 = function () {
        var e = this.length;
        if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");

        for (var t = 0; t < e; t += 8) p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);

        return this;
      }, l.prototype.toString = function () {
        var e = 0 | this.length;
        return 0 === e ? "" : 0 === arguments.length ? x(this, 0, e) : function (e, t, n) {
          var r = !1;
          if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
          if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
          if ((n >>>= 0) <= (t >>>= 0)) return "";

          for (e || (e = "utf8");;) switch (e) {
            case "hex":
              return L(this, t, n);

            case "utf8":
            case "utf-8":
              return x(this, t, n);

            case "ascii":
              return A(this, t, n);

            case "latin1":
            case "binary":
              return R(this, t, n);

            case "base64":
              return S(this, t, n);

            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return I(this, t, n);

            default:
              if (r) throw new TypeError("Unknown encoding: " + e);
              e = (e + "").toLowerCase(), r = !0;
          }
        }.apply(this, arguments);
      }, l.prototype.equals = function (e) {
        if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
        return this === e || 0 === l.compare(this, e);
      }, l.prototype.inspect = function () {
        var e = "",
            n = t.INSPECT_MAX_BYTES;
        return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">";
      }, l.prototype.compare = function (e, t, n, r, i) {
        if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
        if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
        if (r >= i && t >= n) return 0;
        if (r >= i) return -1;
        if (t >= n) return 1;
        if (t >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === e) return 0;

        for (var a = i - r, o = n - t, s = Math.min(a, o), u = this.slice(r, i), f = e.slice(t, n), h = 0; h < s; ++h) if (u[h] !== f[h]) {
          a = u[h], o = f[h];
          break;
        }

        return a < o ? -1 : o < a ? 1 : 0;
      }, l.prototype.includes = function (e, t, n) {
        return -1 !== this.indexOf(e, t, n);
      }, l.prototype.indexOf = function (e, t, n) {
        return g(this, e, t, n, !0);
      }, l.prototype.lastIndexOf = function (e, t, n) {
        return g(this, e, t, n, !1);
      }, l.prototype.write = function (e, t, n, r) {
        if (void 0 === t) r = "utf8", n = this.length, t = 0;else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;else {
          if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
        }
        var i = this.length - t;
        if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        r || (r = "utf8");

        for (var a = !1;;) switch (r) {
          case "hex":
            return v(this, e, t, n);

          case "utf8":
          case "utf-8":
            return b(this, e, t, n);

          case "ascii":
            return y(this, e, t, n);

          case "latin1":
          case "binary":
            return w(this, e, t, n);

          case "base64":
            return E(this, e, t, n);

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return k(this, e, t, n);

          default:
            if (a) throw new TypeError("Unknown encoding: " + r);
            r = ("" + r).toLowerCase(), a = !0;
        }
      }, l.prototype.toJSON = function () {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      var T = 4096;

      function A(e, t, n) {
        var r = "";
        n = Math.min(e.length, n);

        for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);

        return r;
      }

      function R(e, t, n) {
        var r = "";
        n = Math.min(e.length, n);

        for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);

        return r;
      }

      function L(e, t, n) {
        var r = e.length;
        (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);

        for (var i = "", a = t; a < n; ++a) i += P(e[a]);

        return i;
      }

      function I(e, t, n) {
        for (var r = e.slice(t, n), i = "", a = 0; a < r.length; a += 2) i += String.fromCharCode(r[a] + 256 * r[a + 1]);

        return i;
      }

      function N(e, t, n) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
      }

      function O(e, t, n, r, i, a) {
        if (!l.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < a) throw new RangeError('"value" argument is out of bounds');
        if (n + r > e.length) throw new RangeError("Index out of range");
      }

      function B(e, t, n, r) {
        t < 0 && (t = 65535 + t + 1);

        for (var i = 0, a = Math.min(e.length - n, 2); i < a; ++i) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i);
      }

      function M(e, t, n, r) {
        t < 0 && (t = 4294967295 + t + 1);

        for (var i = 0, a = Math.min(e.length - n, 4); i < a; ++i) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255;
      }

      function U(e, t, n, r, i, a) {
        if (n + r > e.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("Index out of range");
      }

      function D(e, t, n, r, a) {
        return a || U(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4;
      }

      function C(e, t, n, r, a) {
        return a || U(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8;
      }

      l.prototype.slice = function (e, t) {
        var n,
            r = this.length;
        if (e = ~~e, t = void 0 === t ? r : ~~t, e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), l.TYPED_ARRAY_SUPPORT) (n = this.subarray(e, t)).__proto__ = l.prototype;else {
          var i = t - e;
          n = new l(i, void 0);

          for (var a = 0; a < i; ++a) n[a] = this[a + e];
        }
        return n;
      }, l.prototype.readUIntLE = function (e, t, n) {
        e |= 0, t |= 0, n || N(e, t, this.length);

        for (var r = this[e], i = 1, a = 0; ++a < t && (i *= 256);) r += this[e + a] * i;

        return r;
      }, l.prototype.readUIntBE = function (e, t, n) {
        e |= 0, t |= 0, n || N(e, t, this.length);

        for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;

        return r;
      }, l.prototype.readUInt8 = function (e, t) {
        return t || N(e, 1, this.length), this[e];
      }, l.prototype.readUInt16LE = function (e, t) {
        return t || N(e, 2, this.length), this[e] | this[e + 1] << 8;
      }, l.prototype.readUInt16BE = function (e, t) {
        return t || N(e, 2, this.length), this[e] << 8 | this[e + 1];
      }, l.prototype.readUInt32LE = function (e, t) {
        return t || N(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
      }, l.prototype.readUInt32BE = function (e, t) {
        return t || N(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
      }, l.prototype.readIntLE = function (e, t, n) {
        e |= 0, t |= 0, n || N(e, t, this.length);

        for (var r = this[e], i = 1, a = 0; ++a < t && (i *= 256);) r += this[e + a] * i;

        return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
      }, l.prototype.readIntBE = function (e, t, n) {
        e |= 0, t |= 0, n || N(e, t, this.length);

        for (var r = t, i = 1, a = this[e + --r]; r > 0 && (i *= 256);) a += this[e + --r] * i;

        return a >= (i *= 128) && (a -= Math.pow(2, 8 * t)), a;
      }, l.prototype.readInt8 = function (e, t) {
        return t || N(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
      }, l.prototype.readInt16LE = function (e, t) {
        t || N(e, 2, this.length);
        var n = this[e] | this[e + 1] << 8;
        return 32768 & n ? 4294901760 | n : n;
      }, l.prototype.readInt16BE = function (e, t) {
        t || N(e, 2, this.length);
        var n = this[e + 1] | this[e] << 8;
        return 32768 & n ? 4294901760 | n : n;
      }, l.prototype.readInt32LE = function (e, t) {
        return t || N(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
      }, l.prototype.readInt32BE = function (e, t) {
        return t || N(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
      }, l.prototype.readFloatLE = function (e, t) {
        return t || N(e, 4, this.length), i.read(this, e, !0, 23, 4);
      }, l.prototype.readFloatBE = function (e, t) {
        return t || N(e, 4, this.length), i.read(this, e, !1, 23, 4);
      }, l.prototype.readDoubleLE = function (e, t) {
        return t || N(e, 8, this.length), i.read(this, e, !0, 52, 8);
      }, l.prototype.readDoubleBE = function (e, t) {
        return t || N(e, 8, this.length), i.read(this, e, !1, 52, 8);
      }, l.prototype.writeUIntLE = function (e, t, n, r) {
        (e = +e, t |= 0, n |= 0, r) || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
        var i = 1,
            a = 0;

        for (this[t] = 255 & e; ++a < n && (i *= 256);) this[t + a] = e / i & 255;

        return t + n;
      }, l.prototype.writeUIntBE = function (e, t, n, r) {
        (e = +e, t |= 0, n |= 0, r) || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
        var i = n - 1,
            a = 1;

        for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;

        return t + n;
      }, l.prototype.writeUInt8 = function (e, t, n) {
        return e = +e, t |= 0, n || O(this, e, t, 1, 255, 0), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1;
      }, l.prototype.writeUInt16LE = function (e, t, n) {
        return e = +e, t |= 0, n || O(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : B(this, e, t, !0), t + 2;
      }, l.prototype.writeUInt16BE = function (e, t, n) {
        return e = +e, t |= 0, n || O(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : B(this, e, t, !1), t + 2;
      }, l.prototype.writeUInt32LE = function (e, t, n) {
        return e = +e, t |= 0, n || O(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : M(this, e, t, !0), t + 4;
      }, l.prototype.writeUInt32BE = function (e, t, n) {
        return e = +e, t |= 0, n || O(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : M(this, e, t, !1), t + 4;
      }, l.prototype.writeIntLE = function (e, t, n, r) {
        if (e = +e, t |= 0, !r) {
          var i = Math.pow(2, 8 * n - 1);
          O(this, e, t, n, i - 1, -i);
        }

        var a = 0,
            o = 1,
            s = 0;

        for (this[t] = 255 & e; ++a < n && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255;

        return t + n;
      }, l.prototype.writeIntBE = function (e, t, n, r) {
        if (e = +e, t |= 0, !r) {
          var i = Math.pow(2, 8 * n - 1);
          O(this, e, t, n, i - 1, -i);
        }

        var a = n - 1,
            o = 1,
            s = 0;

        for (this[t + a] = 255 & e; --a >= 0 && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255;

        return t + n;
      }, l.prototype.writeInt8 = function (e, t, n) {
        return e = +e, t |= 0, n || O(this, e, t, 1, 127, -128), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
      }, l.prototype.writeInt16LE = function (e, t, n) {
        return e = +e, t |= 0, n || O(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : B(this, e, t, !0), t + 2;
      }, l.prototype.writeInt16BE = function (e, t, n) {
        return e = +e, t |= 0, n || O(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : B(this, e, t, !1), t + 2;
      }, l.prototype.writeInt32LE = function (e, t, n) {
        return e = +e, t |= 0, n || O(this, e, t, 4, 2147483647, -2147483648), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : M(this, e, t, !0), t + 4;
      }, l.prototype.writeInt32BE = function (e, t, n) {
        return e = +e, t |= 0, n || O(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : M(this, e, t, !1), t + 4;
      }, l.prototype.writeFloatLE = function (e, t, n) {
        return D(this, e, t, !0, n);
      }, l.prototype.writeFloatBE = function (e, t, n) {
        return D(this, e, t, !1, n);
      }, l.prototype.writeDoubleLE = function (e, t, n) {
        return C(this, e, t, !0, n);
      }, l.prototype.writeDoubleBE = function (e, t, n) {
        return C(this, e, t, !1, n);
      }, l.prototype.copy = function (e, t, n, r) {
        if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
        if (0 === e.length || 0 === this.length) return 0;
        if (t < 0) throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
        if (r < 0) throw new RangeError("sourceEnd out of bounds");
        r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
        var i,
            a = r - n;
        if (this === e && n < t && t < r) for (i = a - 1; i >= 0; --i) e[i + t] = this[i + n];else if (a < 1e3 || !l.TYPED_ARRAY_SUPPORT) for (i = 0; i < a; ++i) e[i + t] = this[i + n];else Uint8Array.prototype.set.call(e, this.subarray(n, n + a), t);
        return a;
      }, l.prototype.fill = function (e, t, n, r) {
        if ("string" == typeof e) {
          if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
            var i = e.charCodeAt(0);
            i < 256 && (e = i);
          }

          if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
          if ("string" == typeof r && !l.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
        } else "number" == typeof e && (e &= 255);

        if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
        if (n <= t) return this;
        var a;
        if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e) for (a = t; a < n; ++a) this[a] = e;else {
          var o = l.isBuffer(e) ? e : F(new l(e, r).toString()),
              s = o.length;

          for (a = 0; a < n - t; ++a) this[a + t] = o[a % s];
        }
        return this;
      };
      var z = /[^+\/0-9A-Za-z-_]/g;

      function P(e) {
        return e < 16 ? "0" + e.toString(16) : e.toString(16);
      }

      function F(e, t) {
        var n;
        t = t || 1 / 0;

        for (var r = e.length, i = null, a = [], o = 0; o < r; ++o) {
          if ((n = e.charCodeAt(o)) > 55295 && n < 57344) {
            if (!i) {
              if (n > 56319) {
                (t -= 3) > -1 && a.push(239, 191, 189);
                continue;
              }

              if (o + 1 === r) {
                (t -= 3) > -1 && a.push(239, 191, 189);
                continue;
              }

              i = n;
              continue;
            }

            if (n < 56320) {
              (t -= 3) > -1 && a.push(239, 191, 189), i = n;
              continue;
            }

            n = 65536 + (i - 55296 << 10 | n - 56320);
          } else i && (t -= 3) > -1 && a.push(239, 191, 189);

          if (i = null, n < 128) {
            if ((t -= 1) < 0) break;
            a.push(n);
          } else if (n < 2048) {
            if ((t -= 2) < 0) break;
            a.push(n >> 6 | 192, 63 & n | 128);
          } else if (n < 65536) {
            if ((t -= 3) < 0) break;
            a.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
          }
        }

        return a;
      }

      function Z(e) {
        return r.toByteArray(function (e) {
          if ((e = function (e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
          }(e).replace(z, "")).length < 2) return "";

          for (; e.length % 4 != 0;) e += "=";

          return e;
        }(e));
      }

      function j(e, t, n, r) {
        for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];

        return i;
      }
    }).call(this, n(0));
  }, function (e, t, n) {
    (function (e) {
      function n(e) {
        return Object.prototype.toString.call(e);
      }

      t.isArray = function (e) {
        return Array.isArray ? Array.isArray(e) : "[object Array]" === n(e);
      }, t.isBoolean = function (e) {
        return "boolean" == typeof e;
      }, t.isNull = function (e) {
        return null === e;
      }, t.isNullOrUndefined = function (e) {
        return null == e;
      }, t.isNumber = function (e) {
        return "number" == typeof e;
      }, t.isString = function (e) {
        return "string" == typeof e;
      }, t.isSymbol = function (e) {
        return "symbol" == typeof e;
      }, t.isUndefined = function (e) {
        return void 0 === e;
      }, t.isRegExp = function (e) {
        return "[object RegExp]" === n(e);
      }, t.isObject = function (e) {
        return "object" == typeof e && null !== e;
      }, t.isDate = function (e) {
        return "[object Date]" === n(e);
      }, t.isError = function (e) {
        return "[object Error]" === n(e) || e instanceof Error;
      }, t.isFunction = function (e) {
        return "function" == typeof e;
      }, t.isPrimitive = function (e) {
        return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e;
      }, t.isBuffer = e.isBuffer;
    }).call(this, n(4).Buffer);
  }, function (e, t, n) {
    "use strict";

    (function (t) {
      !t.version || 0 === t.version.indexOf("v0.") || 0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8.") ? e.exports = {
        nextTick: function (e, n, r, i) {
          if ("function" != typeof e) throw new TypeError('"callback" argument must be a function');
          var a,
              o,
              s = arguments.length;

          switch (s) {
            case 0:
            case 1:
              return t.nextTick(e);

            case 2:
              return t.nextTick(function () {
                e.call(null, n);
              });

            case 3:
              return t.nextTick(function () {
                e.call(null, n, r);
              });

            case 4:
              return t.nextTick(function () {
                e.call(null, n, r, i);
              });

            default:
              for (a = new Array(s - 1), o = 0; o < a.length;) a[o++] = arguments[o];

              return t.nextTick(function () {
                e.apply(null, a);
              });
          }
        }
      } : e.exports = t;
    }).call(this, n(1));
  }, function (e, t, n) {
    var r = n(4),
        i = r.Buffer;

    function a(e, t) {
      for (var n in e) t[n] = e[n];
    }

    function o(e, t, n) {
      return i(e, t, n);
    }

    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = r : (a(r, t), t.Buffer = o), a(i, o), o.from = function (e, t, n) {
      if ("number" == typeof e) throw new TypeError("Argument must not be a number");
      return i(e, t, n);
    }, o.alloc = function (e, t, n) {
      if ("number" != typeof e) throw new TypeError("Argument must be a number");
      var r = i(e);
      return void 0 !== t ? "string" == typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0), r;
    }, o.allocUnsafe = function (e) {
      if ("number" != typeof e) throw new TypeError("Argument must be a number");
      return i(e);
    }, o.allocUnsafeSlow = function (e) {
      if ("number" != typeof e) throw new TypeError("Argument must be a number");
      return r.SlowBuffer(e);
    };
  }, function (e, t, n) {
    "use strict";

    var r = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;

    function i(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }

    t.assign = function (e) {
      for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
        var n = t.shift();

        if (n) {
          if ("object" != typeof n) throw new TypeError(n + "must be non-object");

          for (var r in n) i(n, r) && (e[r] = n[r]);
        }
      }

      return e;
    }, t.shrinkBuf = function (e, t) {
      return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e);
    };
    var a = {
      arraySet: function (e, t, n, r, i) {
        if (t.subarray && e.subarray) e.set(t.subarray(n, n + r), i);else for (var a = 0; a < r; a++) e[i + a] = t[n + a];
      },
      flattenChunks: function (e) {
        var t, n, r, i, a, o;

        for (r = 0, t = 0, n = e.length; t < n; t++) r += e[t].length;

        for (o = new Uint8Array(r), i = 0, t = 0, n = e.length; t < n; t++) a = e[t], o.set(a, i), i += a.length;

        return o;
      }
    },
        o = {
      arraySet: function (e, t, n, r, i) {
        for (var a = 0; a < r; a++) e[i + a] = t[n + a];
      },
      flattenChunks: function (e) {
        return [].concat.apply([], e);
      }
    };
    t.setTyped = function (e) {
      e ? (t.Buf8 = Uint8Array, t.Buf16 = Uint16Array, t.Buf32 = Int32Array, t.assign(t, a)) : (t.Buf8 = Array, t.Buf16 = Array, t.Buf32 = Array, t.assign(t, o));
    }, t.setTyped(r);
  }, function (e, t) {
    function n() {
      this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
    }

    function r(e) {
      return "function" == typeof e;
    }

    function i(e) {
      return "object" == typeof e && null !== e;
    }

    function a(e) {
      return void 0 === e;
    }

    e.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function (e) {
      if (!function (e) {
        return "number" == typeof e;
      }(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
      return this._maxListeners = e, this;
    }, n.prototype.emit = function (e) {
      var t, n, o, s, l, u;

      if (this._events || (this._events = {}), "error" === e && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
        if ((t = arguments[1]) instanceof Error) throw t;
        var f = new Error('Uncaught, unspecified "error" event. (' + t + ")");
        throw f.context = t, f;
      }

      if (a(n = this._events[e])) return !1;
      if (r(n)) switch (arguments.length) {
        case 1:
          n.call(this);
          break;

        case 2:
          n.call(this, arguments[1]);
          break;

        case 3:
          n.call(this, arguments[1], arguments[2]);
          break;

        default:
          s = Array.prototype.slice.call(arguments, 1), n.apply(this, s);
      } else if (i(n)) for (s = Array.prototype.slice.call(arguments, 1), o = (u = n.slice()).length, l = 0; l < o; l++) u[l].apply(this, s);
      return !0;
    }, n.prototype.addListener = function (e, t) {
      var o;
      if (!r(t)) throw TypeError("listener must be a function");
      return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, r(t.listener) ? t.listener : t), this._events[e] ? i(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, i(this._events[e]) && !this._events[e].warned && (o = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && o > 0 && this._events[e].length > o && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this;
    }, n.prototype.on = n.prototype.addListener, n.prototype.once = function (e, t) {
      if (!r(t)) throw TypeError("listener must be a function");
      var n = !1;

      function i() {
        this.removeListener(e, i), n || (n = !0, t.apply(this, arguments));
      }

      return i.listener = t, this.on(e, i), this;
    }, n.prototype.removeListener = function (e, t) {
      var n, a, o, s;
      if (!r(t)) throw TypeError("listener must be a function");
      if (!this._events || !this._events[e]) return this;
      if (o = (n = this._events[e]).length, a = -1, n === t || r(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);else if (i(n)) {
        for (s = o; s-- > 0;) if (n[s] === t || n[s].listener && n[s].listener === t) {
          a = s;
          break;
        }

        if (a < 0) return this;
        1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(a, 1), this._events.removeListener && this.emit("removeListener", e, t);
      }
      return this;
    }, n.prototype.removeAllListeners = function (e) {
      var t, n;
      if (!this._events) return this;
      if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;

      if (0 === arguments.length) {
        for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);

        return this.removeAllListeners("removeListener"), this._events = {}, this;
      }

      if (r(n = this._events[e])) this.removeListener(e, n);else if (n) for (; n.length;) this.removeListener(e, n[n.length - 1]);
      return delete this._events[e], this;
    }, n.prototype.listeners = function (e) {
      return this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : [];
    }, n.prototype.listenerCount = function (e) {
      if (this._events) {
        var t = this._events[e];
        if (r(t)) return 1;
        if (t) return t.length;
      }

      return 0;
    }, n.listenerCount = function (e, t) {
      return e.listenerCount(t);
    };
  }, function (e, t, n) {
    (t = e.exports = n(13)).Stream = t, t.Readable = t, t.Writable = n(11), t.Duplex = n(3), t.Transform = n(17), t.PassThrough = n(32);
  }, function (e, t, n) {
    "use strict";

    (function (t, r, i) {
      var a = n(6);

      function o(e) {
        var t = this;
        this.next = null, this.entry = null, this.finish = function () {
          !function (e, t, n) {
            var r = e.entry;
            e.entry = null;

            for (; r;) {
              var i = r.callback;
              t.pendingcb--, i(n), r = r.next;
            }

            t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e;
          }(t, e);
        };
      }

      e.exports = v;
      var s,
          l = !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1 ? r : a.nextTick;
      v.WritableState = m;
      var u = n(5);
      u.inherits = n(2);

      var f = {
        deprecate: n(31)
      },
          h = n(14),
          c = n(7).Buffer,
          d = i.Uint8Array || function () {};

      var _,
          p = n(15);

      function g() {}

      function m(e, t) {
        s = s || n(3), e = e || {};
        var r = t instanceof s;
        this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.writableObjectMode);
        var i = e.highWaterMark,
            u = e.writableHighWaterMark,
            f = this.objectMode ? 16 : 16384;
        this.highWaterMark = i || 0 === i ? i : r && (u || 0 === u) ? u : f, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
        var h = !1 === e.decodeStrings;
        this.decodeStrings = !h, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (e) {
          !function (e, t) {
            var n = e._writableState,
                r = n.sync,
                i = n.writecb;
            if (function (e) {
              e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0;
            }(n), t) !function (e, t, n, r, i) {
              --t.pendingcb, n ? (a.nextTick(i, r), a.nextTick(S, e, t), e._writableState.errorEmitted = !0, e.emit("error", r)) : (i(r), e._writableState.errorEmitted = !0, e.emit("error", r), S(e, t));
            }(e, n, r, t, i);else {
              var o = E(n);
              o || n.corked || n.bufferProcessing || !n.bufferedRequest || w(e, n), r ? l(y, e, n, o, i) : y(e, n, o, i);
            }
          }(t, e);
        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new o(this);
      }

      function v(e) {
        if (s = s || n(3), !(_.call(v, this) || this instanceof s)) return new v(e);
        this._writableState = new m(e, this), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e["final"] && (this._final = e["final"])), h.call(this);
      }

      function b(e, t, n, r, i, a, o) {
        t.writelen = r, t.writecb = o, t.writing = !0, t.sync = !0, n ? e._writev(i, t.onwrite) : e._write(i, a, t.onwrite), t.sync = !1;
      }

      function y(e, t, n, r) {
        n || function (e, t) {
          0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"));
        }(e, t), t.pendingcb--, r(), S(e, t);
      }

      function w(e, t) {
        t.bufferProcessing = !0;
        var n = t.bufferedRequest;

        if (e._writev && n && n.next) {
          var r = t.bufferedRequestCount,
              i = new Array(r),
              a = t.corkedRequestsFree;
          a.entry = n;

          for (var s = 0, l = !0; n;) i[s] = n, n.isBuf || (l = !1), n = n.next, s += 1;

          i.allBuffers = l, b(e, t, !0, t.length, i, "", a.finish), t.pendingcb++, t.lastBufferedRequest = null, a.next ? (t.corkedRequestsFree = a.next, a.next = null) : t.corkedRequestsFree = new o(t), t.bufferedRequestCount = 0;
        } else {
          for (; n;) {
            var u = n.chunk,
                f = n.encoding,
                h = n.callback;
            if (b(e, t, !1, t.objectMode ? 1 : u.length, u, f, h), n = n.next, t.bufferedRequestCount--, t.writing) break;
          }

          null === n && (t.lastBufferedRequest = null);
        }

        t.bufferedRequest = n, t.bufferProcessing = !1;
      }

      function E(e) {
        return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing;
      }

      function k(e, t) {
        e._final(function (n) {
          t.pendingcb--, n && e.emit("error", n), t.prefinished = !0, e.emit("prefinish"), S(e, t);
        });
      }

      function S(e, t) {
        var n = E(t);
        return n && (!function (e, t) {
          t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++, t.finalCalled = !0, a.nextTick(k, e, t)) : (t.prefinished = !0, e.emit("prefinish")));
        }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"))), n;
      }

      u.inherits(v, h), m.prototype.getBuffer = function () {
        for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;

        return t;
      }, function () {
        try {
          Object.defineProperty(m.prototype, "buffer", {
            get: f.deprecate(function () {
              return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
          });
        } catch (e) {}
      }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (_ = Function.prototype[Symbol.hasInstance], Object.defineProperty(v, Symbol.hasInstance, {
        value: function (e) {
          return !!_.call(this, e) || this === v && e && e._writableState instanceof m;
        }
      })) : _ = function (e) {
        return e instanceof this;
      }, v.prototype.pipe = function () {
        this.emit("error", new Error("Cannot pipe, not readable"));
      }, v.prototype.write = function (e, t, n) {
        var r = this._writableState,
            i = !1,
            o = !r.objectMode && function (e) {
          return c.isBuffer(e) || e instanceof d;
        }(e);

        return o && !c.isBuffer(e) && (e = function (e) {
          return c.from(e);
        }(e)), "function" == typeof t && (n = t, t = null), o ? t = "buffer" : t || (t = r.defaultEncoding), "function" != typeof n && (n = g), r.ended ? function (e, t) {
          var n = new Error("write after end");
          e.emit("error", n), a.nextTick(t, n);
        }(this, n) : (o || function (e, t, n, r) {
          var i = !0,
              o = !1;
          return null === n ? o = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || t.objectMode || (o = new TypeError("Invalid non-string/buffer chunk")), o && (e.emit("error", o), a.nextTick(r, o), i = !1), i;
        }(this, r, e, n)) && (r.pendingcb++, i = function (e, t, n, r, i, a) {
          if (!n) {
            var o = function (e, t, n) {
              e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = c.from(t, n));
              return t;
            }(t, r, i);

            r !== o && (n = !0, i = "buffer", r = o);
          }

          var s = t.objectMode ? 1 : r.length;
          t.length += s;
          var l = t.length < t.highWaterMark;
          l || (t.needDrain = !0);

          if (t.writing || t.corked) {
            var u = t.lastBufferedRequest;
            t.lastBufferedRequest = {
              chunk: r,
              encoding: i,
              isBuf: n,
              callback: a,
              next: null
            }, u ? u.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1;
          } else b(e, t, !1, s, r, i, a);

          return l;
        }(this, r, o, e, t, n)), i;
      }, v.prototype.cork = function () {
        this._writableState.corked++;
      }, v.prototype.uncork = function () {
        var e = this._writableState;
        e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || w(this, e));
      }, v.prototype.setDefaultEncoding = function (e) {
        if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e);
        return this._writableState.defaultEncoding = e, this;
      }, Object.defineProperty(v.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        }
      }), v.prototype._write = function (e, t, n) {
        n(new Error("_write() is not implemented"));
      }, v.prototype._writev = null, v.prototype.end = function (e, t, n) {
        var r = this._writableState;
        "function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, t = null), null !== e && void 0 !== e && this.write(e, t), r.corked && (r.corked = 1, this.uncork()), r.ending || r.finished || function (e, t, n) {
          t.ending = !0, S(e, t), n && (t.finished ? a.nextTick(n) : e.once("finish", n));
          t.ended = !0, e.writable = !1;
        }(this, r, n);
      }, Object.defineProperty(v.prototype, "destroyed", {
        get: function () {
          return void 0 !== this._writableState && this._writableState.destroyed;
        },
        set: function (e) {
          this._writableState && (this._writableState.destroyed = e);
        }
      }), v.prototype.destroy = p.destroy, v.prototype._undestroy = p.undestroy, v.prototype._destroy = function (e, t) {
        this.end(), t(e);
      };
    }).call(this, n(1), n(29).setImmediate, n(0));
  }, function (e, t) {
    var n = {}.toString;

    e.exports = Array.isArray || function (e) {
      return "[object Array]" == n.call(e);
    };
  }, function (e, t, n) {
    "use strict";

    (function (t, r) {
      var i = n(6);
      e.exports = b;
      var a,
          o = n(12);
      b.ReadableState = v;
      n(9).EventEmitter;

      var s = function (e, t) {
        return e.listeners(t).length;
      },
          l = n(14),
          u = n(7).Buffer,
          f = t.Uint8Array || function () {};

      var h = n(5);
      h.inherits = n(2);
      var c = n(26),
          d = void 0;
      d = c && c.debuglog ? c.debuglog("stream") : function () {};

      var _,
          p = n(27),
          g = n(15);

      h.inherits(b, l);
      var m = ["error", "close", "destroy", "pause", "resume"];

      function v(e, t) {
        a = a || n(3), e = e || {};
        var r = t instanceof a;
        this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.readableObjectMode);
        var i = e.highWaterMark,
            o = e.readableHighWaterMark,
            s = this.objectMode ? 16 : 16384;
        this.highWaterMark = i || 0 === i ? i : r && (o || 0 === o) ? o : s, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new p(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (_ || (_ = n(16).StringDecoder), this.decoder = new _(e.encoding), this.encoding = e.encoding);
      }

      function b(e) {
        if (a = a || n(3), !(this instanceof b)) return new b(e);
        this._readableState = new v(e, this), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), l.call(this);
      }

      function y(e, t, n, r, i) {
        var a,
            o = e._readableState;
        null === t ? (o.reading = !1, function (e, t) {
          if (t.ended) return;

          if (t.decoder) {
            var n = t.decoder.end();
            n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length);
          }

          t.ended = !0, S(e);
        }(e, o)) : (i || (a = function (e, t) {
          var n;
          (function (e) {
            return u.isBuffer(e) || e instanceof f;
          })(t) || "string" == typeof t || void 0 === t || e.objectMode || (n = new TypeError("Invalid non-string/buffer chunk"));
          return n;
        }(o, t)), a ? e.emit("error", a) : o.objectMode || t && t.length > 0 ? ("string" == typeof t || o.objectMode || Object.getPrototypeOf(t) === u.prototype || (t = function (e) {
          return u.from(e);
        }(t)), r ? o.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : w(e, o, t, !0) : o.ended ? e.emit("error", new Error("stream.push() after EOF")) : (o.reading = !1, o.decoder && !n ? (t = o.decoder.write(t), o.objectMode || 0 !== t.length ? w(e, o, t, !1) : T(e, o)) : w(e, o, t, !1))) : r || (o.reading = !1));
        return function (e) {
          return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length);
        }(o);
      }

      function w(e, t, n, r) {
        t.flowing && 0 === t.length && !t.sync ? (e.emit("data", n), e.read(0)) : (t.length += t.objectMode ? 1 : n.length, r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && S(e)), T(e, t);
      }

      Object.defineProperty(b.prototype, "destroyed", {
        get: function () {
          return void 0 !== this._readableState && this._readableState.destroyed;
        },
        set: function (e) {
          this._readableState && (this._readableState.destroyed = e);
        }
      }), b.prototype.destroy = g.destroy, b.prototype._undestroy = g.undestroy, b.prototype._destroy = function (e, t) {
        this.push(null), t(e);
      }, b.prototype.push = function (e, t) {
        var n,
            r = this._readableState;
        return r.objectMode ? n = !0 : "string" == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && (e = u.from(e, t), t = ""), n = !0), y(this, e, t, !1, n);
      }, b.prototype.unshift = function (e) {
        return y(this, e, null, !0, !1);
      }, b.prototype.isPaused = function () {
        return !1 === this._readableState.flowing;
      }, b.prototype.setEncoding = function (e) {
        return _ || (_ = n(16).StringDecoder), this._readableState.decoder = new _(e), this._readableState.encoding = e, this;
      };
      var E = 8388608;

      function k(e, t) {
        return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function (e) {
          return e >= E ? e = E : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e;
        }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0));
      }

      function S(e) {
        var t = e._readableState;
        t.needReadable = !1, t.emittedReadable || (d("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? i.nextTick(x, e) : x(e));
      }

      function x(e) {
        d("emit readable"), e.emit("readable"), I(e);
      }

      function T(e, t) {
        t.readingMore || (t.readingMore = !0, i.nextTick(A, e, t));
      }

      function A(e, t) {
        for (var n = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (d("maybeReadMore read 0"), e.read(0), n !== t.length);) n = t.length;

        t.readingMore = !1;
      }

      function R(e) {
        d("readable nexttick read 0"), e.read(0);
      }

      function L(e, t) {
        t.reading || (d("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), I(e), t.flowing && !t.reading && e.read(0);
      }

      function I(e) {
        var t = e._readableState;

        for (d("flow", t.flowing); t.flowing && null !== e.read(););
      }

      function N(e, t) {
        return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : n = function (e, t, n) {
          var r;
          e < t.head.data.length ? (r = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : r = e === t.head.data.length ? t.shift() : n ? function (e, t) {
            var n = t.head,
                r = 1,
                i = n.data;
            e -= i.length;

            for (; n = n.next;) {
              var a = n.data,
                  o = e > a.length ? a.length : e;

              if (o === a.length ? i += a : i += a.slice(0, e), 0 === (e -= o)) {
                o === a.length ? (++r, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = a.slice(o));
                break;
              }

              ++r;
            }

            return t.length -= r, i;
          }(e, t) : function (e, t) {
            var n = u.allocUnsafe(e),
                r = t.head,
                i = 1;
            r.data.copy(n), e -= r.data.length;

            for (; r = r.next;) {
              var a = r.data,
                  o = e > a.length ? a.length : e;

              if (a.copy(n, n.length - e, 0, o), 0 === (e -= o)) {
                o === a.length ? (++i, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r, r.data = a.slice(o));
                break;
              }

              ++i;
            }

            return t.length -= i, n;
          }(e, t);
          return r;
        }(e, t.buffer, t.decoder), n);
        var n;
      }

      function O(e) {
        var t = e._readableState;
        if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
        t.endEmitted || (t.ended = !0, i.nextTick(B, t, e));
      }

      function B(e, t) {
        e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"));
      }

      function M(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;

        return -1;
      }

      b.prototype.read = function (e) {
        d("read", e), e = parseInt(e, 10);
        var t = this._readableState,
            n = e;
        if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return d("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? O(this) : S(this), null;
        if (0 === (e = k(e, t)) && t.ended) return 0 === t.length && O(this), null;
        var r,
            i = t.needReadable;
        return d("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && d("length less than watermark", i = !0), t.ended || t.reading ? d("reading or ended", i = !1) : i && (d("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = k(n, t))), null === (r = e > 0 ? N(e, t) : null) ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), n !== e && t.ended && O(this)), null !== r && this.emit("data", r), r;
      }, b.prototype._read = function (e) {
        this.emit("error", new Error("_read() is not implemented"));
      }, b.prototype.pipe = function (e, t) {
        var n = this,
            a = this._readableState;

        switch (a.pipesCount) {
          case 0:
            a.pipes = e;
            break;

          case 1:
            a.pipes = [a.pipes, e];
            break;

          default:
            a.pipes.push(e);
        }

        a.pipesCount += 1, d("pipe count=%d opts=%j", a.pipesCount, t);
        var l = (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? f : b;

        function u(t, r) {
          d("onunpipe"), t === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0, d("cleanup"), e.removeListener("close", m), e.removeListener("finish", v), e.removeListener("drain", h), e.removeListener("error", g), e.removeListener("unpipe", u), n.removeListener("end", f), n.removeListener("end", b), n.removeListener("data", p), c = !0, !a.awaitDrain || e._writableState && !e._writableState.needDrain || h());
        }

        function f() {
          d("onend"), e.end();
        }

        a.endEmitted ? i.nextTick(l) : n.once("end", l), e.on("unpipe", u);

        var h = function (e) {
          return function () {
            var t = e._readableState;
            d("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && s(e, "data") && (t.flowing = !0, I(e));
          };
        }(n);

        e.on("drain", h);
        var c = !1;

        var _ = !1;

        function p(t) {
          d("ondata"), _ = !1, !1 !== e.write(t) || _ || ((1 === a.pipesCount && a.pipes === e || a.pipesCount > 1 && -1 !== M(a.pipes, e)) && !c && (d("false write response, pause", n._readableState.awaitDrain), n._readableState.awaitDrain++, _ = !0), n.pause());
        }

        function g(t) {
          d("onerror", t), b(), e.removeListener("error", g), 0 === s(e, "error") && e.emit("error", t);
        }

        function m() {
          e.removeListener("finish", v), b();
        }

        function v() {
          d("onfinish"), e.removeListener("close", m), b();
        }

        function b() {
          d("unpipe"), n.unpipe(e);
        }

        return n.on("data", p), function (e, t, n) {
          if ("function" == typeof e.prependListener) return e.prependListener(t, n);
          e._events && e._events[t] ? o(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n);
        }(e, "error", g), e.once("close", m), e.once("finish", v), e.emit("pipe", n), a.flowing || (d("pipe resume"), n.resume()), e;
      }, b.prototype.unpipe = function (e) {
        var t = this._readableState,
            n = {
          hasUnpiped: !1
        };
        if (0 === t.pipesCount) return this;
        if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, n), this);

        if (!e) {
          var r = t.pipes,
              i = t.pipesCount;
          t.pipes = null, t.pipesCount = 0, t.flowing = !1;

          for (var a = 0; a < i; a++) r[a].emit("unpipe", this, n);

          return this;
        }

        var o = M(t.pipes, e);
        return -1 === o ? this : (t.pipes.splice(o, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, n), this);
      }, b.prototype.on = function (e, t) {
        var n = l.prototype.on.call(this, e, t);
        if ("data" === e) !1 !== this._readableState.flowing && this.resume();else if ("readable" === e) {
          var r = this._readableState;
          r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.emittedReadable = !1, r.reading ? r.length && S(this) : i.nextTick(R, this));
        }
        return n;
      }, b.prototype.addListener = b.prototype.on, b.prototype.resume = function () {
        var e = this._readableState;
        return e.flowing || (d("resume"), e.flowing = !0, function (e, t) {
          t.resumeScheduled || (t.resumeScheduled = !0, i.nextTick(L, e, t));
        }(this, e)), this;
      }, b.prototype.pause = function () {
        return d("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (d("pause"), this._readableState.flowing = !1, this.emit("pause")), this;
      }, b.prototype.wrap = function (e) {
        var t = this,
            n = this._readableState,
            r = !1;

        for (var i in e.on("end", function () {
          if (d("wrapped end"), n.decoder && !n.ended) {
            var e = n.decoder.end();
            e && e.length && t.push(e);
          }

          t.push(null);
        }), e.on("data", function (i) {
          (d("wrapped data"), n.decoder && (i = n.decoder.write(i)), !n.objectMode || null !== i && void 0 !== i) && (n.objectMode || i && i.length) && (t.push(i) || (r = !0, e.pause()));
        }), e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function (t) {
          return function () {
            return e[t].apply(e, arguments);
          };
        }(i));

        for (var a = 0; a < m.length; a++) e.on(m[a], this.emit.bind(this, m[a]));

        return this._read = function (t) {
          d("wrapped _read", t), r && (r = !1, e.resume());
        }, this;
      }, Object.defineProperty(b.prototype, "readableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._readableState.highWaterMark;
        }
      }), b._fromList = N;
    }).call(this, n(0), n(1));
  }, function (e, t, n) {
    e.exports = n(9).EventEmitter;
  }, function (e, t, n) {
    "use strict";

    var r = n(6);

    function i(e, t) {
      e.emit("error", t);
    }

    e.exports = {
      destroy: function (e, t) {
        var n = this,
            a = this._readableState && this._readableState.destroyed,
            o = this._writableState && this._writableState.destroyed;
        return a || o ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || r.nextTick(i, this, e), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function (e) {
          !t && e ? (r.nextTick(i, n, e), n._writableState && (n._writableState.errorEmitted = !0)) : t && t(e);
        }), this);
      },
      undestroy: function () {
        this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
      }
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(7).Buffer,
        i = r.isEncoding || function (e) {
      switch ((e = "" + e) && e.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return !0;

        default:
          return !1;
      }
    };

    function a(e) {
      var t;

      switch (this.encoding = function (e) {
        var t = function (e) {
          if (!e) return "utf8";

          for (var t;;) switch (e) {
            case "utf8":
            case "utf-8":
              return "utf8";

            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return "utf16le";

            case "latin1":
            case "binary":
              return "latin1";

            case "base64":
            case "ascii":
            case "hex":
              return e;

            default:
              if (t) return;
              e = ("" + e).toLowerCase(), t = !0;
          }
        }(e);

        if ("string" != typeof t && (r.isEncoding === i || !i(e))) throw new Error("Unknown encoding: " + e);
        return t || e;
      }(e), this.encoding) {
        case "utf16le":
          this.text = l, this.end = u, t = 4;
          break;

        case "utf8":
          this.fillLast = s, t = 4;
          break;

        case "base64":
          this.text = f, this.end = h, t = 3;
          break;

        default:
          return this.write = c, void (this.end = d);
      }

      this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(t);
    }

    function o(e) {
      return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2;
    }

    function s(e) {
      var t = this.lastTotal - this.lastNeed,
          n = function (e, t, n) {
        if (128 != (192 & t[0])) return e.lastNeed = 0, "�";

        if (e.lastNeed > 1 && t.length > 1) {
          if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
          if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�";
        }
      }(this, e);

      return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void (this.lastNeed -= e.length));
    }

    function l(e, t) {
      if ((e.length - t) % 2 == 0) {
        var n = e.toString("utf16le", t);

        if (n) {
          var r = n.charCodeAt(n.length - 1);
          if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], n.slice(0, -1);
        }

        return n;
      }

      return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1);
    }

    function u(e) {
      var t = e && e.length ? this.write(e) : "";

      if (this.lastNeed) {
        var n = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString("utf16le", 0, n);
      }

      return t;
    }

    function f(e, t) {
      var n = (e.length - t) % 3;
      return 0 === n ? e.toString("base64", t) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - n));
    }

    function h(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t;
    }

    function c(e) {
      return e.toString(this.encoding);
    }

    function d(e) {
      return e && e.length ? this.write(e) : "";
    }

    t.StringDecoder = a, a.prototype.write = function (e) {
      if (0 === e.length) return "";
      var t, n;

      if (this.lastNeed) {
        if (void 0 === (t = this.fillLast(e))) return "";
        n = this.lastNeed, this.lastNeed = 0;
      } else n = 0;

      return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || "";
    }, a.prototype.end = function (e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed ? t + "�" : t;
    }, a.prototype.text = function (e, t) {
      var n = function (e, t, n) {
        var r = t.length - 1;
        if (r < n) return 0;
        var i = o(t[r]);
        if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i;
        if (--r < n || -2 === i) return 0;
        if ((i = o(t[r])) >= 0) return i > 0 && (e.lastNeed = i - 2), i;
        if (--r < n || -2 === i) return 0;
        if ((i = o(t[r])) >= 0) return i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i;
        return 0;
      }(this, e, t);

      if (!this.lastNeed) return e.toString("utf8", t);
      this.lastTotal = n;
      var r = e.length - (n - this.lastNeed);
      return e.copy(this.lastChar, 0, r), e.toString("utf8", t, r);
    }, a.prototype.fillLast = function (e) {
      if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
    };
  }, function (e, t, n) {
    "use strict";

    e.exports = a;
    var r = n(3),
        i = n(5);

    function a(e) {
      if (!(this instanceof a)) return new a(e);
      r.call(this, e), this._transformState = {
        afterTransform: function (e, t) {
          var n = this._transformState;
          n.transforming = !1;
          var r = n.writecb;
          if (!r) return this.emit("error", new Error("write callback called multiple times"));
          n.writechunk = null, n.writecb = null, null != t && this.push(t), r(e);
          var i = this._readableState;
          i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
        }.bind(this),
        needTransform: !1,
        transforming: !1,
        writecb: null,
        writechunk: null,
        writeencoding: null
      }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", o);
    }

    function o() {
      var e = this;
      "function" == typeof this._flush ? this._flush(function (t, n) {
        s(e, t, n);
      }) : s(this, null, null);
    }

    function s(e, t, n) {
      if (t) return e.emit("error", t);
      if (null != n && e.push(n), e._writableState.length) throw new Error("Calling transform done when ws.length != 0");
      if (e._transformState.transforming) throw new Error("Calling transform done when still transforming");
      return e.push(null);
    }

    i.inherits = n(2), i.inherits(a, r), a.prototype.push = function (e, t) {
      return this._transformState.needTransform = !1, r.prototype.push.call(this, e, t);
    }, a.prototype._transform = function (e, t, n) {
      throw new Error("_transform() is not implemented");
    }, a.prototype._write = function (e, t, n) {
      var r = this._transformState;

      if (r.writecb = n, r.writechunk = e, r.writeencoding = t, !r.transforming) {
        var i = this._readableState;
        (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
      }
    }, a.prototype._read = function (e) {
      var t = this._transformState;
      null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0;
    }, a.prototype._destroy = function (e, t) {
      var n = this;

      r.prototype._destroy.call(this, e, function (e) {
        t(e), n.emit("close");
      });
    };
  }, function (e, t, n) {
    "use strict";

    (function (t) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
       * @license  MIT
       */
      function r(e, t) {
        if (e === t) return 0;

        for (var n = e.length, r = t.length, i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
          n = e[i], r = t[i];
          break;
        }

        return n < r ? -1 : r < n ? 1 : 0;
      }

      function i(e) {
        return t.Buffer && "function" == typeof t.Buffer.isBuffer ? t.Buffer.isBuffer(e) : !(null == e || !e._isBuffer);
      }

      var a = n(19),
          o = Object.prototype.hasOwnProperty,
          s = Array.prototype.slice,
          l = "foo" === function () {}.name;

      function u(e) {
        return Object.prototype.toString.call(e);
      }

      function f(e) {
        return !i(e) && "function" == typeof t.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : !!e && (e instanceof DataView || !!(e.buffer && e.buffer instanceof ArrayBuffer)));
      }

      var h = e.exports = m,
          c = /\s*function\s+([^\(\s]*)\s*/;

      function d(e) {
        if (a.isFunction(e)) {
          if (l) return e.name;
          var t = e.toString().match(c);
          return t && t[1];
        }
      }

      function _(e, t) {
        return "string" == typeof e ? e.length < t ? e : e.slice(0, t) : e;
      }

      function p(e) {
        if (l || !a.isFunction(e)) return a.inspect(e);
        var t = d(e);
        return "[Function" + (t ? ": " + t : "") + "]";
      }

      function g(e, t, n, r, i) {
        throw new h.AssertionError({
          message: n,
          actual: e,
          expected: t,
          operator: r,
          stackStartFunction: i
        });
      }

      function m(e, t) {
        e || g(e, !0, t, "==", h.ok);
      }

      function v(e, t, n, o) {
        if (e === t) return !0;
        if (i(e) && i(t)) return 0 === r(e, t);
        if (a.isDate(e) && a.isDate(t)) return e.getTime() === t.getTime();
        if (a.isRegExp(e) && a.isRegExp(t)) return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase;

        if (null !== e && "object" == typeof e || null !== t && "object" == typeof t) {
          if (f(e) && f(t) && u(e) === u(t) && !(e instanceof Float32Array || e instanceof Float64Array)) return 0 === r(new Uint8Array(e.buffer), new Uint8Array(t.buffer));
          if (i(e) !== i(t)) return !1;
          var l = (o = o || {
            actual: [],
            expected: []
          }).actual.indexOf(e);
          return -1 !== l && l === o.expected.indexOf(t) || (o.actual.push(e), o.expected.push(t), function (e, t, n, r) {
            if (null === e || void 0 === e || null === t || void 0 === t) return !1;
            if (a.isPrimitive(e) || a.isPrimitive(t)) return e === t;
            if (n && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1;
            var i = b(e),
                o = b(t);
            if (i && !o || !i && o) return !1;
            if (i) return e = s.call(e), t = s.call(t), v(e, t, n);
            var l,
                u,
                f = E(e),
                h = E(t);
            if (f.length !== h.length) return !1;

            for (f.sort(), h.sort(), u = f.length - 1; u >= 0; u--) if (f[u] !== h[u]) return !1;

            for (u = f.length - 1; u >= 0; u--) if (l = f[u], !v(e[l], t[l], n, r)) return !1;

            return !0;
          }(e, t, n, o));
        }

        return n ? e === t : e == t;
      }

      function b(e) {
        return "[object Arguments]" == Object.prototype.toString.call(e);
      }

      function y(e, t) {
        if (!e || !t) return !1;
        if ("[object RegExp]" == Object.prototype.toString.call(t)) return t.test(e);

        try {
          if (e instanceof t) return !0;
        } catch (e) {}

        return !Error.isPrototypeOf(t) && !0 === t.call({}, e);
      }

      function w(e, t, n, r) {
        var i;
        if ("function" != typeof t) throw new TypeError('"block" argument must be a function');
        "string" == typeof n && (r = n, n = null), i = function (e) {
          var t;

          try {
            e();
          } catch (e) {
            t = e;
          }

          return t;
        }(t), r = (n && n.name ? " (" + n.name + ")." : ".") + (r ? " " + r : "."), e && !i && g(i, n, "Missing expected exception" + r);
        var o = "string" == typeof r,
            s = !e && a.isError(i),
            l = !e && i && !n;
        if ((s && o && y(i, n) || l) && g(i, n, "Got unwanted exception" + r), e && i && n && !y(i, n) || !e && i) throw i;
      }

      h.AssertionError = function (e) {
        this.name = "AssertionError", this.actual = e.actual, this.expected = e.expected, this.operator = e.operator, e.message ? (this.message = e.message, this.generatedMessage = !1) : (this.message = function (e) {
          return _(p(e.actual), 128) + " " + e.operator + " " + _(p(e.expected), 128);
        }(this), this.generatedMessage = !0);
        var t = e.stackStartFunction || g;
        if (Error.captureStackTrace) Error.captureStackTrace(this, t);else {
          var n = new Error();

          if (n.stack) {
            var r = n.stack,
                i = d(t),
                a = r.indexOf("\n" + i);

            if (a >= 0) {
              var o = r.indexOf("\n", a + 1);
              r = r.substring(o + 1);
            }

            this.stack = r;
          }
        }
      }, a.inherits(h.AssertionError, Error), h.fail = g, h.ok = m, h.equal = function (e, t, n) {
        e != t && g(e, t, n, "==", h.equal);
      }, h.notEqual = function (e, t, n) {
        e == t && g(e, t, n, "!=", h.notEqual);
      }, h.deepEqual = function (e, t, n) {
        v(e, t, !1) || g(e, t, n, "deepEqual", h.deepEqual);
      }, h.deepStrictEqual = function (e, t, n) {
        v(e, t, !0) || g(e, t, n, "deepStrictEqual", h.deepStrictEqual);
      }, h.notDeepEqual = function (e, t, n) {
        v(e, t, !1) && g(e, t, n, "notDeepEqual", h.notDeepEqual);
      }, h.notDeepStrictEqual = function e(t, n, r) {
        v(t, n, !0) && g(t, n, r, "notDeepStrictEqual", e);
      }, h.strictEqual = function (e, t, n) {
        e !== t && g(e, t, n, "===", h.strictEqual);
      }, h.notStrictEqual = function (e, t, n) {
        e === t && g(e, t, n, "!==", h.notStrictEqual);
      }, h["throws"] = function (e, t, n) {
        w(!0, e, t, n);
      }, h.doesNotThrow = function (e, t, n) {
        w(!1, e, t, n);
      }, h.ifError = function (e) {
        if (e) throw e;
      };

      var E = Object.keys || function (e) {
        var t = [];

        for (var n in e) o.call(e, n) && t.push(n);

        return t;
      };
    }).call(this, n(0));
  }, function (e, t, n) {
    (function (e, r) {
      var i = /%[sdj%]/g;
      t.format = function (e) {
        if (!m(e)) {
          for (var t = [], n = 0; n < arguments.length; n++) t.push(s(arguments[n]));

          return t.join(" ");
        }

        n = 1;

        for (var r = arguments, a = r.length, o = String(e).replace(i, function (e) {
          if ("%%" === e) return "%";
          if (n >= a) return e;

          switch (e) {
            case "%s":
              return String(r[n++]);

            case "%d":
              return Number(r[n++]);

            case "%j":
              try {
                return JSON.stringify(r[n++]);
              } catch (e) {
                return "[Circular]";
              }

            default:
              return e;
          }
        }), l = r[n]; n < a; l = r[++n]) p(l) || !y(l) ? o += " " + l : o += " " + s(l);

        return o;
      }, t.deprecate = function (n, i) {
        if (v(e.process)) return function () {
          return t.deprecate(n, i).apply(this, arguments);
        };
        if (!0 === r.noDeprecation) return n;
        var a = !1;
        return function () {
          if (!a) {
            if (r.throwDeprecation) throw new Error(i);
            r.traceDeprecation ? console.trace(i) : console.error(i), a = !0;
          }

          return n.apply(this, arguments);
        };
      };
      var a,
          o = {};

      function s(e, n) {
        var r = {
          seen: [],
          stylize: u
        };
        return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), _(n) ? r.showHidden = n : n && t._extend(r, n), v(r.showHidden) && (r.showHidden = !1), v(r.depth) && (r.depth = 2), v(r.colors) && (r.colors = !1), v(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = l), f(r, e, r.depth);
      }

      function l(e, t) {
        var n = s.styles[t];
        return n ? "[" + s.colors[n][0] + "m" + e + "[" + s.colors[n][1] + "m" : e;
      }

      function u(e, t) {
        return e;
      }

      function f(e, n, r) {
        if (e.customInspect && n && k(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
          var i = n.inspect(r, e);
          return m(i) || (i = f(e, i, r)), i;
        }

        var a = function (e, t) {
          if (v(t)) return e.stylize("undefined", "undefined");

          if (m(t)) {
            var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
            return e.stylize(n, "string");
          }

          if (g(t)) return e.stylize("" + t, "number");
          if (_(t)) return e.stylize("" + t, "boolean");
          if (p(t)) return e.stylize("null", "null");
        }(e, n);

        if (a) return a;

        var o = Object.keys(n),
            s = function (e) {
          var t = {};
          return e.forEach(function (e, n) {
            t[e] = !0;
          }), t;
        }(o);

        if (e.showHidden && (o = Object.getOwnPropertyNames(n)), E(n) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0)) return h(n);

        if (0 === o.length) {
          if (k(n)) {
            var l = n.name ? ": " + n.name : "";
            return e.stylize("[Function" + l + "]", "special");
          }

          if (b(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
          if (w(n)) return e.stylize(Date.prototype.toString.call(n), "date");
          if (E(n)) return h(n);
        }

        var u,
            y = "",
            S = !1,
            x = ["{", "}"];
        (d(n) && (S = !0, x = ["[", "]"]), k(n)) && (y = " [Function" + (n.name ? ": " + n.name : "") + "]");
        return b(n) && (y = " " + RegExp.prototype.toString.call(n)), w(n) && (y = " " + Date.prototype.toUTCString.call(n)), E(n) && (y = " " + h(n)), 0 !== o.length || S && 0 != n.length ? r < 0 ? b(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n), u = S ? function (e, t, n, r, i) {
          for (var a = [], o = 0, s = t.length; o < s; ++o) A(t, String(o)) ? a.push(c(e, t, n, r, String(o), !0)) : a.push("");

          return i.forEach(function (i) {
            i.match(/^\d+$/) || a.push(c(e, t, n, r, i, !0));
          }), a;
        }(e, n, r, s, o) : o.map(function (t) {
          return c(e, n, r, s, t, S);
        }), e.seen.pop(), function (e, t, n) {
          if (e.reduce(function (e, t) {
            return 0, t.indexOf("\n") >= 0 && 0, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
          }, 0) > 60) return n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1];
          return n[0] + t + " " + e.join(", ") + " " + n[1];
        }(u, y, x)) : x[0] + y + x[1];
      }

      function h(e) {
        return "[" + Error.prototype.toString.call(e) + "]";
      }

      function c(e, t, n, r, i, a) {
        var o, s, l;

        if ((l = Object.getOwnPropertyDescriptor(t, i) || {
          value: t[i]
        }).get ? s = l.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : l.set && (s = e.stylize("[Setter]", "special")), A(r, i) || (o = "[" + i + "]"), s || (e.seen.indexOf(l.value) < 0 ? (s = p(n) ? f(e, l.value, null) : f(e, l.value, n - 1)).indexOf("\n") > -1 && (s = a ? s.split("\n").map(function (e) {
          return "  " + e;
        }).join("\n").substr(2) : "\n" + s.split("\n").map(function (e) {
          return "   " + e;
        }).join("\n")) : s = e.stylize("[Circular]", "special")), v(o)) {
          if (a && i.match(/^\d+$/)) return s;
          (o = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.substr(1, o.length - 2), o = e.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), o = e.stylize(o, "string"));
        }

        return o + ": " + s;
      }

      function d(e) {
        return Array.isArray(e);
      }

      function _(e) {
        return "boolean" == typeof e;
      }

      function p(e) {
        return null === e;
      }

      function g(e) {
        return "number" == typeof e;
      }

      function m(e) {
        return "string" == typeof e;
      }

      function v(e) {
        return void 0 === e;
      }

      function b(e) {
        return y(e) && "[object RegExp]" === S(e);
      }

      function y(e) {
        return "object" == typeof e && null !== e;
      }

      function w(e) {
        return y(e) && "[object Date]" === S(e);
      }

      function E(e) {
        return y(e) && ("[object Error]" === S(e) || e instanceof Error);
      }

      function k(e) {
        return "function" == typeof e;
      }

      function S(e) {
        return Object.prototype.toString.call(e);
      }

      function x(e) {
        return e < 10 ? "0" + e.toString(10) : e.toString(10);
      }

      t.debuglog = function (e) {
        if (v(a) && (a = r.env.NODE_DEBUG || ""), e = e.toUpperCase(), !o[e]) if (new RegExp("\\b" + e + "\\b", "i").test(a)) {
          var n = r.pid;

          o[e] = function () {
            var r = t.format.apply(t, arguments);
            console.error("%s %d: %s", e, n, r);
          };
        } else o[e] = function () {};
        return o[e];
      }, t.inspect = s, s.colors = {
        bold: [1, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        white: [37, 39],
        grey: [90, 39],
        black: [30, 39],
        blue: [34, 39],
        cyan: [36, 39],
        green: [32, 39],
        magenta: [35, 39],
        red: [31, 39],
        yellow: [33, 39]
      }, s.styles = {
        special: "cyan",
        number: "yellow",
        "boolean": "yellow",
        undefined: "grey",
        "null": "bold",
        string: "green",
        date: "magenta",
        regexp: "red"
      }, t.isArray = d, t.isBoolean = _, t.isNull = p, t.isNullOrUndefined = function (e) {
        return null == e;
      }, t.isNumber = g, t.isString = m, t.isSymbol = function (e) {
        return "symbol" == typeof e;
      }, t.isUndefined = v, t.isRegExp = b, t.isObject = y, t.isDate = w, t.isError = E, t.isFunction = k, t.isPrimitive = function (e) {
        return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e;
      }, t.isBuffer = n(38);
      var T = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      function A(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }

      t.log = function () {
        console.log("%s - %s", function () {
          var e = new Date(),
              t = [x(e.getHours()), x(e.getMinutes()), x(e.getSeconds())].join(":");
          return [e.getDate(), T[e.getMonth()], t].join(" ");
        }(), t.format.apply(t, arguments));
      }, t.inherits = n(2), t._extend = function (e, t) {
        if (!t || !y(t)) return e;

        for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];

        return e;
      };
    }).call(this, n(0), n(1));
  }, function (e, t, n) {
    "use strict";

    e.exports = function (e, t, n, r) {
      for (var i = 65535 & e | 0, a = e >>> 16 & 65535 | 0, o = 0; 0 !== n;) {
        n -= o = n > 2e3 ? 2e3 : n;

        do {
          a = a + (i = i + t[r++] | 0) | 0;
        } while (--o);

        i %= 65521, a %= 65521;
      }

      return i | a << 16 | 0;
    };
  }, function (e, t, n) {
    "use strict";

    var r = function () {
      for (var e, t = [], n = 0; n < 256; n++) {
        e = n;

        for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;

        t[n] = e;
      }

      return t;
    }();

    e.exports = function (e, t, n, i) {
      var a = r,
          o = i + n;
      e ^= -1;

      for (var s = i; s < o; s++) e = e >>> 8 ^ a[255 & (e ^ t[s])];

      return -1 ^ e;
    };
  }, function (e, t, n) {
    "use strict";

    (function (e) {
      var r = n(4).Buffer,
          i = n(25).Transform,
          a = n(37),
          o = n(19),
          s = n(18).ok,
          l = n(4).kMaxLength,
          u = "Cannot create final Buffer. It would be larger than 0x" + l.toString(16) + " bytes";
      a.Z_MIN_WINDOWBITS = 8, a.Z_MAX_WINDOWBITS = 15, a.Z_DEFAULT_WINDOWBITS = 15, a.Z_MIN_CHUNK = 64, a.Z_MAX_CHUNK = 1 / 0, a.Z_DEFAULT_CHUNK = 16384, a.Z_MIN_MEMLEVEL = 1, a.Z_MAX_MEMLEVEL = 9, a.Z_DEFAULT_MEMLEVEL = 8, a.Z_MIN_LEVEL = -1, a.Z_MAX_LEVEL = 9, a.Z_DEFAULT_LEVEL = a.Z_DEFAULT_COMPRESSION;

      for (var f = Object.keys(a), h = 0; h < f.length; h++) {
        var c = f[h];
        c.match(/^Z/) && Object.defineProperty(t, c, {
          enumerable: !0,
          value: a[c],
          writable: !1
        });
      }

      for (var d = {
        Z_OK: a.Z_OK,
        Z_STREAM_END: a.Z_STREAM_END,
        Z_NEED_DICT: a.Z_NEED_DICT,
        Z_ERRNO: a.Z_ERRNO,
        Z_STREAM_ERROR: a.Z_STREAM_ERROR,
        Z_DATA_ERROR: a.Z_DATA_ERROR,
        Z_MEM_ERROR: a.Z_MEM_ERROR,
        Z_BUF_ERROR: a.Z_BUF_ERROR,
        Z_VERSION_ERROR: a.Z_VERSION_ERROR
      }, _ = Object.keys(d), p = 0; p < _.length; p++) {
        var g = _[p];
        d[d[g]] = g;
      }

      function m(e, t, n) {
        var i = [],
            a = 0;

        function o() {
          for (var t; null !== (t = e.read());) i.push(t), a += t.length;

          e.once("readable", o);
        }

        function s() {
          var t,
              o = null;
          a >= l ? o = new RangeError(u) : t = r.concat(i, a), i = [], e.close(), n(o, t);
        }

        e.on("error", function (t) {
          e.removeListener("end", s), e.removeListener("readable", o), n(t);
        }), e.on("end", s), e.end(t), o();
      }

      function v(e, t) {
        if ("string" == typeof t && (t = r.from(t)), !r.isBuffer(t)) throw new TypeError("Not a string or buffer");
        var n = e._finishFlushFlag;
        return e._processChunk(t, n);
      }

      function b(e) {
        if (!(this instanceof b)) return new b(e);
        A.call(this, e, a.DEFLATE);
      }

      function y(e) {
        if (!(this instanceof y)) return new y(e);
        A.call(this, e, a.INFLATE);
      }

      function w(e) {
        if (!(this instanceof w)) return new w(e);
        A.call(this, e, a.GZIP);
      }

      function E(e) {
        if (!(this instanceof E)) return new E(e);
        A.call(this, e, a.GUNZIP);
      }

      function k(e) {
        if (!(this instanceof k)) return new k(e);
        A.call(this, e, a.DEFLATERAW);
      }

      function S(e) {
        if (!(this instanceof S)) return new S(e);
        A.call(this, e, a.INFLATERAW);
      }

      function x(e) {
        if (!(this instanceof x)) return new x(e);
        A.call(this, e, a.UNZIP);
      }

      function T(e) {
        return e === a.Z_NO_FLUSH || e === a.Z_PARTIAL_FLUSH || e === a.Z_SYNC_FLUSH || e === a.Z_FULL_FLUSH || e === a.Z_FINISH || e === a.Z_BLOCK;
      }

      function A(e, n) {
        var o = this;
        if (this._opts = e = e || {}, this._chunkSize = e.chunkSize || t.Z_DEFAULT_CHUNK, i.call(this, e), e.flush && !T(e.flush)) throw new Error("Invalid flush flag: " + e.flush);
        if (e.finishFlush && !T(e.finishFlush)) throw new Error("Invalid flush flag: " + e.finishFlush);
        if (this._flushFlag = e.flush || a.Z_NO_FLUSH, this._finishFlushFlag = void 0 !== e.finishFlush ? e.finishFlush : a.Z_FINISH, e.chunkSize && (e.chunkSize < t.Z_MIN_CHUNK || e.chunkSize > t.Z_MAX_CHUNK)) throw new Error("Invalid chunk size: " + e.chunkSize);
        if (e.windowBits && (e.windowBits < t.Z_MIN_WINDOWBITS || e.windowBits > t.Z_MAX_WINDOWBITS)) throw new Error("Invalid windowBits: " + e.windowBits);
        if (e.level && (e.level < t.Z_MIN_LEVEL || e.level > t.Z_MAX_LEVEL)) throw new Error("Invalid compression level: " + e.level);
        if (e.memLevel && (e.memLevel < t.Z_MIN_MEMLEVEL || e.memLevel > t.Z_MAX_MEMLEVEL)) throw new Error("Invalid memLevel: " + e.memLevel);
        if (e.strategy && e.strategy != t.Z_FILTERED && e.strategy != t.Z_HUFFMAN_ONLY && e.strategy != t.Z_RLE && e.strategy != t.Z_FIXED && e.strategy != t.Z_DEFAULT_STRATEGY) throw new Error("Invalid strategy: " + e.strategy);
        if (e.dictionary && !r.isBuffer(e.dictionary)) throw new Error("Invalid dictionary: it should be a Buffer instance");
        this._handle = new a.Zlib(n);
        var s = this;
        this._hadError = !1, this._handle.onerror = function (e, n) {
          R(s), s._hadError = !0;
          var r = new Error(e);
          r.errno = n, r.code = t.codes[n], s.emit("error", r);
        };
        var l = t.Z_DEFAULT_COMPRESSION;
        "number" == typeof e.level && (l = e.level);
        var u = t.Z_DEFAULT_STRATEGY;
        "number" == typeof e.strategy && (u = e.strategy), this._handle.init(e.windowBits || t.Z_DEFAULT_WINDOWBITS, l, e.memLevel || t.Z_DEFAULT_MEMLEVEL, u, e.dictionary), this._buffer = r.allocUnsafe(this._chunkSize), this._offset = 0, this._level = l, this._strategy = u, this.once("end", this.close), Object.defineProperty(this, "_closed", {
          get: function () {
            return !o._handle;
          },
          configurable: !0,
          enumerable: !0
        });
      }

      function R(t, n) {
        n && e.nextTick(n), t._handle && (t._handle.close(), t._handle = null);
      }

      function L(e) {
        e.emit("close");
      }

      Object.defineProperty(t, "codes", {
        enumerable: !0,
        value: Object.freeze(d),
        writable: !1
      }), t.Deflate = b, t.Inflate = y, t.Gzip = w, t.Gunzip = E, t.DeflateRaw = k, t.InflateRaw = S, t.Unzip = x, t.createDeflate = function (e) {
        return new b(e);
      }, t.createInflate = function (e) {
        return new y(e);
      }, t.createDeflateRaw = function (e) {
        return new k(e);
      }, t.createInflateRaw = function (e) {
        return new S(e);
      }, t.createGzip = function (e) {
        return new w(e);
      }, t.createGunzip = function (e) {
        return new E(e);
      }, t.createUnzip = function (e) {
        return new x(e);
      }, t.deflate = function (e, t, n) {
        return "function" == typeof t && (n = t, t = {}), m(new b(t), e, n);
      }, t.deflateSync = function (e, t) {
        return v(new b(t), e);
      }, t.gzip = function (e, t, n) {
        return "function" == typeof t && (n = t, t = {}), m(new w(t), e, n);
      }, t.gzipSync = function (e, t) {
        return v(new w(t), e);
      }, t.deflateRaw = function (e, t, n) {
        return "function" == typeof t && (n = t, t = {}), m(new k(t), e, n);
      }, t.deflateRawSync = function (e, t) {
        return v(new k(t), e);
      }, t.unzip = function (e, t, n) {
        return "function" == typeof t && (n = t, t = {}), m(new x(t), e, n);
      }, t.unzipSync = function (e, t) {
        return v(new x(t), e);
      }, t.inflate = function (e, t, n) {
        return "function" == typeof t && (n = t, t = {}), m(new y(t), e, n);
      }, t.inflateSync = function (e, t) {
        return v(new y(t), e);
      }, t.gunzip = function (e, t, n) {
        return "function" == typeof t && (n = t, t = {}), m(new E(t), e, n);
      }, t.gunzipSync = function (e, t) {
        return v(new E(t), e);
      }, t.inflateRaw = function (e, t, n) {
        return "function" == typeof t && (n = t, t = {}), m(new S(t), e, n);
      }, t.inflateRawSync = function (e, t) {
        return v(new S(t), e);
      }, o.inherits(A, i), A.prototype.params = function (n, r, i) {
        if (n < t.Z_MIN_LEVEL || n > t.Z_MAX_LEVEL) throw new RangeError("Invalid compression level: " + n);
        if (r != t.Z_FILTERED && r != t.Z_HUFFMAN_ONLY && r != t.Z_RLE && r != t.Z_FIXED && r != t.Z_DEFAULT_STRATEGY) throw new TypeError("Invalid strategy: " + r);

        if (this._level !== n || this._strategy !== r) {
          var o = this;
          this.flush(a.Z_SYNC_FLUSH, function () {
            s(o._handle, "zlib binding closed"), o._handle.params(n, r), o._hadError || (o._level = n, o._strategy = r, i && i());
          });
        } else e.nextTick(i);
      }, A.prototype.reset = function () {
        return s(this._handle, "zlib binding closed"), this._handle.reset();
      }, A.prototype._flush = function (e) {
        this._transform(r.alloc(0), "", e);
      }, A.prototype.flush = function (t, n) {
        var i = this,
            o = this._writableState;
        ("function" == typeof t || void 0 === t && !n) && (n = t, t = a.Z_FULL_FLUSH), o.ended ? n && e.nextTick(n) : o.ending ? n && this.once("end", n) : o.needDrain ? n && this.once("drain", function () {
          return i.flush(t, n);
        }) : (this._flushFlag = t, this.write(r.alloc(0), "", n));
      }, A.prototype.close = function (t) {
        R(this, t), e.nextTick(L, this);
      }, A.prototype._transform = function (e, t, n) {
        var i,
            o = this._writableState,
            s = (o.ending || o.ended) && (!e || o.length === e.length);
        return null === e || r.isBuffer(e) ? this._handle ? (s ? i = this._finishFlushFlag : (i = this._flushFlag, e.length >= o.length && (this._flushFlag = this._opts.flush || a.Z_NO_FLUSH)), void this._processChunk(e, i, n)) : n(new Error("zlib binding closed")) : n(new Error("invalid input"));
      }, A.prototype._processChunk = function (e, t, n) {
        var i = e && e.length,
            a = this._chunkSize - this._offset,
            o = 0,
            f = this,
            h = "function" == typeof n;

        if (!h) {
          var c,
              d = [],
              _ = 0;
          this.on("error", function (e) {
            c = e;
          }), s(this._handle, "zlib binding closed");

          do {
            var p = this._handle.writeSync(t, e, o, i, this._buffer, this._offset, a);
          } while (!this._hadError && v(p[0], p[1]));

          if (this._hadError) throw c;
          if (_ >= l) throw R(this), new RangeError(u);
          var g = r.concat(d, _);
          return R(this), g;
        }

        s(this._handle, "zlib binding closed");

        var m = this._handle.write(t, e, o, i, this._buffer, this._offset, a);

        function v(l, u) {
          if (this && (this.buffer = null, this.callback = null), !f._hadError) {
            var c = a - u;

            if (s(c >= 0, "have should not go down"), c > 0) {
              var p = f._buffer.slice(f._offset, f._offset + c);

              f._offset += c, h ? f.push(p) : (d.push(p), _ += p.length);
            }

            if ((0 === u || f._offset >= f._chunkSize) && (a = f._chunkSize, f._offset = 0, f._buffer = r.allocUnsafe(f._chunkSize)), 0 === u) {
              if (o += i - l, i = l, !h) return !0;

              var g = f._handle.write(t, e, o, i, f._buffer, f._offset, f._chunkSize);

              return g.callback = v, void (g.buffer = e);
            }

            if (!h) return !1;
            n();
          }
        }

        m.buffer = e, m.callback = v;
      }, o.inherits(b, A), o.inherits(y, A), o.inherits(w, A), o.inherits(E, A), o.inherits(k, A), o.inherits(S, A), o.inherits(x, A);
    }).call(this, n(1));
  }, function (e, t, n) {
    "use strict";

    t.byteLength = function (e) {
      var t = u(e),
          n = t[0],
          r = t[1];
      return 3 * (n + r) / 4 - r;
    }, t.toByteArray = function (e) {
      for (var t, n = u(e), r = n[0], o = n[1], s = new a(function (e, t, n) {
        return 3 * (t + n) / 4 - n;
      }(0, r, o)), l = 0, f = o > 0 ? r - 4 : r, h = 0; h < f; h += 4) t = i[e.charCodeAt(h)] << 18 | i[e.charCodeAt(h + 1)] << 12 | i[e.charCodeAt(h + 2)] << 6 | i[e.charCodeAt(h + 3)], s[l++] = t >> 16 & 255, s[l++] = t >> 8 & 255, s[l++] = 255 & t;

      2 === o && (t = i[e.charCodeAt(h)] << 2 | i[e.charCodeAt(h + 1)] >> 4, s[l++] = 255 & t);
      1 === o && (t = i[e.charCodeAt(h)] << 10 | i[e.charCodeAt(h + 1)] << 4 | i[e.charCodeAt(h + 2)] >> 2, s[l++] = t >> 8 & 255, s[l++] = 255 & t);
      return s;
    }, t.fromByteArray = function (e) {
      for (var t, n = e.length, i = n % 3, a = [], o = 0, s = n - i; o < s; o += 16383) a.push(h(e, o, o + 16383 > s ? s : o + 16383));

      1 === i ? (t = e[n - 1], a.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], a.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
      return a.join("");
    };

    for (var r = [], i = [], a = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, l = o.length; s < l; ++s) r[s] = o[s], i[o.charCodeAt(s)] = s;

    function u(e) {
      var t = e.length;
      if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var n = e.indexOf("=");
      return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4];
    }

    function f(e) {
      return r[e >> 18 & 63] + r[e >> 12 & 63] + r[e >> 6 & 63] + r[63 & e];
    }

    function h(e, t, n) {
      for (var r, i = [], a = t; a < n; a += 3) r = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), i.push(f(r));

      return i.join("");
    }

    i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63;
  }, function (e, t) {
    t.read = function (e, t, n, r, i) {
      var a,
          o,
          s = 8 * i - r - 1,
          l = (1 << s) - 1,
          u = l >> 1,
          f = -7,
          h = n ? i - 1 : 0,
          c = n ? -1 : 1,
          d = e[t + h];

      for (h += c, a = d & (1 << -f) - 1, d >>= -f, f += s; f > 0; a = 256 * a + e[t + h], h += c, f -= 8);

      for (o = a & (1 << -f) - 1, a >>= -f, f += r; f > 0; o = 256 * o + e[t + h], h += c, f -= 8);

      if (0 === a) a = 1 - u;else {
        if (a === l) return o ? NaN : 1 / 0 * (d ? -1 : 1);
        o += Math.pow(2, r), a -= u;
      }
      return (d ? -1 : 1) * o * Math.pow(2, a - r);
    }, t.write = function (e, t, n, r, i, a) {
      var o,
          s,
          l,
          u = 8 * a - i - 1,
          f = (1 << u) - 1,
          h = f >> 1,
          c = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          d = r ? 0 : a - 1,
          _ = r ? 1 : -1,
          p = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;

      for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, o = f) : (o = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), (t += o + h >= 1 ? c / l : c * Math.pow(2, 1 - h)) * l >= 2 && (o++, l /= 2), o + h >= f ? (s = 0, o = f) : o + h >= 1 ? (s = (t * l - 1) * Math.pow(2, i), o += h) : (s = t * Math.pow(2, h - 1) * Math.pow(2, i), o = 0)); i >= 8; e[n + d] = 255 & s, d += _, s /= 256, i -= 8);

      for (o = o << i | s, u += i; u > 0; e[n + d] = 255 & o, d += _, o /= 256, u -= 8);

      e[n + d - _] |= 128 * p;
    };
  }, function (e, t, n) {
    e.exports = i;
    var r = n(9).EventEmitter;

    function i() {
      r.call(this);
    }

    n(2)(i, r), i.Readable = n(10), i.Writable = n(33), i.Duplex = n(34), i.Transform = n(35), i.PassThrough = n(36), i.Stream = i, i.prototype.pipe = function (e, t) {
      var n = this;

      function i(t) {
        e.writable && !1 === e.write(t) && n.pause && n.pause();
      }

      function a() {
        n.readable && n.resume && n.resume();
      }

      n.on("data", i), e.on("drain", a), e._isStdio || t && !1 === t.end || (n.on("end", s), n.on("close", l));
      var o = !1;

      function s() {
        o || (o = !0, e.end());
      }

      function l() {
        o || (o = !0, "function" == typeof e.destroy && e.destroy());
      }

      function u(e) {
        if (f(), 0 === r.listenerCount(this, "error")) throw e;
      }

      function f() {
        n.removeListener("data", i), e.removeListener("drain", a), n.removeListener("end", s), n.removeListener("close", l), n.removeListener("error", u), e.removeListener("error", u), n.removeListener("end", f), n.removeListener("close", f), e.removeListener("close", f);
      }

      return n.on("error", u), e.on("error", u), n.on("end", f), n.on("close", f), e.on("close", f), e.emit("pipe", n), e;
    };
  }, function (e, t) {}, function (e, t, n) {
    "use strict";

    var r = n(7).Buffer,
        i = n(28);

    function a(e, t, n) {
      e.copy(t, n);
    }

    e.exports = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.head = null, this.tail = null, this.length = 0;
      }

      return e.prototype.push = function (e) {
        var t = {
          data: e,
          next: null
        };
        this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length;
      }, e.prototype.unshift = function (e) {
        var t = {
          data: e,
          next: this.head
        };
        0 === this.length && (this.tail = t), this.head = t, ++this.length;
      }, e.prototype.shift = function () {
        if (0 !== this.length) {
          var e = this.head.data;
          return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e;
        }
      }, e.prototype.clear = function () {
        this.head = this.tail = null, this.length = 0;
      }, e.prototype.join = function (e) {
        if (0 === this.length) return "";

        for (var t = this.head, n = "" + t.data; t = t.next;) n += e + t.data;

        return n;
      }, e.prototype.concat = function (e) {
        if (0 === this.length) return r.alloc(0);
        if (1 === this.length) return this.head.data;

        for (var t = r.allocUnsafe(e >>> 0), n = this.head, i = 0; n;) a(n.data, t, i), i += n.data.length, n = n.next;

        return t;
      }, e;
    }(), i && i.inspect && i.inspect.custom && (e.exports.prototype[i.inspect.custom] = function () {
      var e = i.inspect({
        length: this.length
      });
      return this.constructor.name + " " + e;
    });
  }, function (e, t) {}, function (e, t, n) {
    (function (e) {
      var r = void 0 !== e && e || "undefined" != typeof self && self || window,
          i = Function.prototype.apply;

      function a(e, t) {
        this._id = e, this._clearFn = t;
      }

      t.setTimeout = function () {
        return new a(i.call(setTimeout, r, arguments), clearTimeout);
      }, t.setInterval = function () {
        return new a(i.call(setInterval, r, arguments), clearInterval);
      }, t.clearTimeout = t.clearInterval = function (e) {
        e && e.close();
      }, a.prototype.unref = a.prototype.ref = function () {}, a.prototype.close = function () {
        this._clearFn.call(r, this._id);
      }, t.enroll = function (e, t) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
      }, t.unenroll = function (e) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
      }, t._unrefActive = t.active = function (e) {
        clearTimeout(e._idleTimeoutId);
        var t = e._idleTimeout;
        t >= 0 && (e._idleTimeoutId = setTimeout(function () {
          e._onTimeout && e._onTimeout();
        }, t));
      }, n(30), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate;
    }).call(this, n(0));
  }, function (e, t, n) {
    (function (e, t) {
      !function (e, n) {
        "use strict";

        if (!e.setImmediate) {
          var r,
              i = 1,
              a = {},
              o = !1,
              s = e.document,
              l = Object.getPrototypeOf && Object.getPrototypeOf(e);
          l = l && l.setTimeout ? l : e, "[object process]" === {}.toString.call(e.process) ? r = function (e) {
            t.nextTick(function () {
              f(e);
            });
          } : function () {
            if (e.postMessage && !e.importScripts) {
              var t = !0,
                  n = e.onmessage;
              return e.onmessage = function () {
                t = !1;
              }, e.postMessage("", "*"), e.onmessage = n, t;
            }
          }() ? function () {
            var t = "setImmediate$" + Math.random() + "$",
                n = function (n) {
              n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && f(+n.data.slice(t.length));
            };

            e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), r = function (n) {
              e.postMessage(t + n, "*");
            };
          }() : e.MessageChannel ? function () {
            var e = new MessageChannel();
            e.port1.onmessage = function (e) {
              f(e.data);
            }, r = function (t) {
              e.port2.postMessage(t);
            };
          }() : s && "onreadystatechange" in s.createElement("script") ? function () {
            var e = s.documentElement;

            r = function (t) {
              var n = s.createElement("script");
              n.onreadystatechange = function () {
                f(t), n.onreadystatechange = null, e.removeChild(n), n = null;
              }, e.appendChild(n);
            };
          }() : r = function (e) {
            setTimeout(f, 0, e);
          }, l.setImmediate = function (e) {
            "function" != typeof e && (e = new Function("" + e));

            for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];

            var o = {
              callback: e,
              args: t
            };
            return a[i] = o, r(i), i++;
          }, l.clearImmediate = u;
        }

        function u(e) {
          delete a[e];
        }

        function f(e) {
          if (o) setTimeout(f, 0, e);else {
            var t = a[e];

            if (t) {
              o = !0;

              try {
                !function (e) {
                  var t = e.callback,
                      r = e.args;

                  switch (r.length) {
                    case 0:
                      t();
                      break;

                    case 1:
                      t(r[0]);
                      break;

                    case 2:
                      t(r[0], r[1]);
                      break;

                    case 3:
                      t(r[0], r[1], r[2]);
                      break;

                    default:
                      t.apply(n, r);
                  }
                }(t);
              } finally {
                u(e), o = !1;
              }
            }
          }
        }
      }("undefined" == typeof self ? void 0 === e ? this : e : self);
    }).call(this, n(0), n(1));
  }, function (e, t, n) {
    (function (t) {
      function n(e) {
        try {
          if (!t.localStorage) return !1;
        } catch (e) {
          return !1;
        }

        var n = t.localStorage[e];
        return null != n && "true" === String(n).toLowerCase();
      }

      e.exports = function (e, t) {
        if (n("noDeprecation")) return e;
        var r = !1;
        return function () {
          if (!r) {
            if (n("throwDeprecation")) throw new Error(t);
            n("traceDeprecation") ? console.trace(t) : console.warn(t), r = !0;
          }

          return e.apply(this, arguments);
        };
      };
    }).call(this, n(0));
  }, function (e, t, n) {
    "use strict";

    e.exports = a;
    var r = n(17),
        i = n(5);

    function a(e) {
      if (!(this instanceof a)) return new a(e);
      r.call(this, e);
    }

    i.inherits = n(2), i.inherits(a, r), a.prototype._transform = function (e, t, n) {
      n(null, e);
    };
  }, function (e, t, n) {
    e.exports = n(11);
  }, function (e, t, n) {
    e.exports = n(3);
  }, function (e, t, n) {
    e.exports = n(10).Transform;
  }, function (e, t, n) {
    e.exports = n(10).PassThrough;
  }, function (e, t, n) {
    "use strict";

    (function (e, r) {
      var i = n(18),
          a = n(39),
          o = n(40),
          s = n(43),
          l = n(46);

      for (var u in l) t[u] = l[u];

      t.NONE = 0, t.DEFLATE = 1, t.INFLATE = 2, t.GZIP = 3, t.GUNZIP = 4, t.DEFLATERAW = 5, t.INFLATERAW = 6, t.UNZIP = 7;

      function f(e) {
        if ("number" != typeof e || e < t.DEFLATE || e > t.UNZIP) throw new TypeError("Bad argument");
        this.dictionary = null, this.err = 0, this.flush = 0, this.init_done = !1, this.level = 0, this.memLevel = 0, this.mode = e, this.strategy = 0, this.windowBits = 0, this.write_in_progress = !1, this.pending_close = !1, this.gzip_id_bytes_read = 0;
      }

      f.prototype.close = function () {
        this.write_in_progress ? this.pending_close = !0 : (this.pending_close = !1, i(this.init_done, "close before init"), i(this.mode <= t.UNZIP), this.mode === t.DEFLATE || this.mode === t.GZIP || this.mode === t.DEFLATERAW ? o.deflateEnd(this.strm) : this.mode !== t.INFLATE && this.mode !== t.GUNZIP && this.mode !== t.INFLATERAW && this.mode !== t.UNZIP || s.inflateEnd(this.strm), this.mode = t.NONE, this.dictionary = null);
      }, f.prototype.write = function (e, t, n, r, i, a, o) {
        return this._write(!0, e, t, n, r, i, a, o);
      }, f.prototype.writeSync = function (e, t, n, r, i, a, o) {
        return this._write(!1, e, t, n, r, i, a, o);
      }, f.prototype._write = function (n, a, o, s, l, u, f, h) {
        if (i.equal(arguments.length, 8), i(this.init_done, "write before init"), i(this.mode !== t.NONE, "already finalized"), i.equal(!1, this.write_in_progress, "write already in progress"), i.equal(!1, this.pending_close, "close is pending"), this.write_in_progress = !0, i.equal(!1, void 0 === a, "must provide flush value"), this.write_in_progress = !0, a !== t.Z_NO_FLUSH && a !== t.Z_PARTIAL_FLUSH && a !== t.Z_SYNC_FLUSH && a !== t.Z_FULL_FLUSH && a !== t.Z_FINISH && a !== t.Z_BLOCK) throw new Error("Invalid flush value");
        if (null == o && (o = e.alloc(0), l = 0, s = 0), this.strm.avail_in = l, this.strm.input = o, this.strm.next_in = s, this.strm.avail_out = h, this.strm.output = u, this.strm.next_out = f, this.flush = a, !n) return this._process(), this._checkError() ? this._afterSync() : void 0;
        var c = this;
        return r.nextTick(function () {
          c._process(), c._after();
        }), this;
      }, f.prototype._afterSync = function () {
        var e = this.strm.avail_out,
            t = this.strm.avail_in;
        return this.write_in_progress = !1, [t, e];
      }, f.prototype._process = function () {
        var e = null;

        switch (this.mode) {
          case t.DEFLATE:
          case t.GZIP:
          case t.DEFLATERAW:
            this.err = o.deflate(this.strm, this.flush);
            break;

          case t.UNZIP:
            switch (this.strm.avail_in > 0 && (e = this.strm.next_in), this.gzip_id_bytes_read) {
              case 0:
                if (null === e) break;

                if (31 !== this.strm.input[e]) {
                  this.mode = t.INFLATE;
                  break;
                }

                if (this.gzip_id_bytes_read = 1, e++, 1 === this.strm.avail_in) break;

              case 1:
                if (null === e) break;
                139 === this.strm.input[e] ? (this.gzip_id_bytes_read = 2, this.mode = t.GUNZIP) : this.mode = t.INFLATE;
                break;

              default:
                throw new Error("invalid number of gzip magic number bytes read");
            }

          case t.INFLATE:
          case t.GUNZIP:
          case t.INFLATERAW:
            for (this.err = s.inflate(this.strm, this.flush), this.err === t.Z_NEED_DICT && this.dictionary && (this.err = s.inflateSetDictionary(this.strm, this.dictionary), this.err === t.Z_OK ? this.err = s.inflate(this.strm, this.flush) : this.err === t.Z_DATA_ERROR && (this.err = t.Z_NEED_DICT)); this.strm.avail_in > 0 && this.mode === t.GUNZIP && this.err === t.Z_STREAM_END && 0 !== this.strm.next_in[0];) this.reset(), this.err = s.inflate(this.strm, this.flush);

            break;

          default:
            throw new Error("Unknown mode " + this.mode);
        }
      }, f.prototype._checkError = function () {
        switch (this.err) {
          case t.Z_OK:
          case t.Z_BUF_ERROR:
            if (0 !== this.strm.avail_out && this.flush === t.Z_FINISH) return this._error("unexpected end of file"), !1;
            break;

          case t.Z_STREAM_END:
            break;

          case t.Z_NEED_DICT:
            return null == this.dictionary ? this._error("Missing dictionary") : this._error("Bad dictionary"), !1;

          default:
            return this._error("Zlib error"), !1;
        }

        return !0;
      }, f.prototype._after = function () {
        if (this._checkError()) {
          var e = this.strm.avail_out,
              t = this.strm.avail_in;
          this.write_in_progress = !1, this.callback(t, e), this.pending_close && this.close();
        }
      }, f.prototype._error = function (e) {
        this.strm.msg && (e = this.strm.msg), this.onerror(e, this.err), this.write_in_progress = !1, this.pending_close && this.close();
      }, f.prototype.init = function (e, n, r, a, o) {
        i(4 === arguments.length || 5 === arguments.length, "init(windowBits, level, memLevel, strategy, [dictionary])"), i(e >= 8 && e <= 15, "invalid windowBits"), i(n >= -1 && n <= 9, "invalid compression level"), i(r >= 1 && r <= 9, "invalid memlevel"), i(a === t.Z_FILTERED || a === t.Z_HUFFMAN_ONLY || a === t.Z_RLE || a === t.Z_FIXED || a === t.Z_DEFAULT_STRATEGY, "invalid strategy"), this._init(n, e, r, a, o), this._setDictionary();
      }, f.prototype.params = function () {
        throw new Error("deflateParams Not supported");
      }, f.prototype.reset = function () {
        this._reset(), this._setDictionary();
      }, f.prototype._init = function (e, n, r, i, l) {
        switch (this.level = e, this.windowBits = n, this.memLevel = r, this.strategy = i, this.flush = t.Z_NO_FLUSH, this.err = t.Z_OK, this.mode !== t.GZIP && this.mode !== t.GUNZIP || (this.windowBits += 16), this.mode === t.UNZIP && (this.windowBits += 32), this.mode !== t.DEFLATERAW && this.mode !== t.INFLATERAW || (this.windowBits = -1 * this.windowBits), this.strm = new a(), this.mode) {
          case t.DEFLATE:
          case t.GZIP:
          case t.DEFLATERAW:
            this.err = o.deflateInit2(this.strm, this.level, t.Z_DEFLATED, this.windowBits, this.memLevel, this.strategy);
            break;

          case t.INFLATE:
          case t.GUNZIP:
          case t.INFLATERAW:
          case t.UNZIP:
            this.err = s.inflateInit2(this.strm, this.windowBits);
            break;

          default:
            throw new Error("Unknown mode " + this.mode);
        }

        this.err !== t.Z_OK && this._error("Init error"), this.dictionary = l, this.write_in_progress = !1, this.init_done = !0;
      }, f.prototype._setDictionary = function () {
        if (null != this.dictionary) {
          switch (this.err = t.Z_OK, this.mode) {
            case t.DEFLATE:
            case t.DEFLATERAW:
              this.err = o.deflateSetDictionary(this.strm, this.dictionary);
          }

          this.err !== t.Z_OK && this._error("Failed to set dictionary");
        }
      }, f.prototype._reset = function () {
        switch (this.err = t.Z_OK, this.mode) {
          case t.DEFLATE:
          case t.DEFLATERAW:
          case t.GZIP:
            this.err = o.deflateReset(this.strm);
            break;

          case t.INFLATE:
          case t.INFLATERAW:
          case t.GUNZIP:
            this.err = s.inflateReset(this.strm);
        }

        this.err !== t.Z_OK && this._error("Failed to reset stream");
      }, t.Zlib = f;
    }).call(this, n(4).Buffer, n(1));
  }, function (e, t) {
    e.exports = function (e) {
      return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8;
    };
  }, function (e, t, n) {
    "use strict";

    e.exports = function () {
      this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
    };
  }, function (e, t, n) {
    "use strict";

    var r,
        i = n(8),
        a = n(41),
        o = n(20),
        s = n(21),
        l = n(42),
        u = 0,
        f = 1,
        h = 3,
        c = 4,
        d = 5,
        _ = 0,
        p = 1,
        g = -2,
        m = -3,
        v = -5,
        b = -1,
        y = 1,
        w = 2,
        E = 3,
        k = 4,
        S = 0,
        x = 2,
        T = 8,
        A = 9,
        R = 15,
        L = 8,
        I = 286,
        N = 30,
        O = 19,
        B = 2 * I + 1,
        M = 15,
        U = 3,
        D = 258,
        C = D + U + 1,
        z = 32,
        P = 42,
        F = 69,
        Z = 73,
        j = 91,
        W = 103,
        q = 113,
        Y = 666,
        H = 1,
        G = 2,
        J = 3,
        K = 4,
        V = 3;

    function X(e, t) {
      return e.msg = l[t], t;
    }

    function $(e) {
      return (e << 1) - (e > 4 ? 9 : 0);
    }

    function Q(e) {
      for (var t = e.length; --t >= 0;) e[t] = 0;
    }

    function ee(e) {
      var t = e.state,
          n = t.pending;
      n > e.avail_out && (n = e.avail_out), 0 !== n && (i.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out), e.next_out += n, t.pending_out += n, e.total_out += n, e.avail_out -= n, t.pending -= n, 0 === t.pending && (t.pending_out = 0));
    }

    function te(e, t) {
      a._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, ee(e.strm);
    }

    function ne(e, t) {
      e.pending_buf[e.pending++] = t;
    }

    function re(e, t) {
      e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t;
    }

    function ie(e, t, n, r) {
      var a = e.avail_in;
      return a > r && (a = r), 0 === a ? 0 : (e.avail_in -= a, i.arraySet(t, e.input, e.next_in, a, n), 1 === e.state.wrap ? e.adler = o(e.adler, t, a, n) : 2 === e.state.wrap && (e.adler = s(e.adler, t, a, n)), e.next_in += a, e.total_in += a, a);
    }

    function ae(e, t) {
      var n,
          r,
          i = e.max_chain_length,
          a = e.strstart,
          o = e.prev_length,
          s = e.nice_match,
          l = e.strstart > e.w_size - C ? e.strstart - (e.w_size - C) : 0,
          u = e.window,
          f = e.w_mask,
          h = e.prev,
          c = e.strstart + D,
          d = u[a + o - 1],
          _ = u[a + o];
      e.prev_length >= e.good_match && (i >>= 2), s > e.lookahead && (s = e.lookahead);

      do {
        if (u[(n = t) + o] === _ && u[n + o - 1] === d && u[n] === u[a] && u[++n] === u[a + 1]) {
          a += 2, n++;

          do {} while (u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && u[++a] === u[++n] && a < c);

          if (r = D - (c - a), a = c - D, r > o) {
            if (e.match_start = t, o = r, r >= s) break;
            d = u[a + o - 1], _ = u[a + o];
          }
        }
      } while ((t = h[t & f]) > l && 0 != --i);

      return o <= e.lookahead ? o : e.lookahead;
    }

    function oe(e) {
      var t,
          n,
          r,
          a,
          o,
          s = e.w_size;

      do {
        if (a = e.window_size - e.lookahead - e.strstart, e.strstart >= s + (s - C)) {
          i.arraySet(e.window, e.window, s, s, 0), e.match_start -= s, e.strstart -= s, e.block_start -= s, t = n = e.hash_size;

          do {
            r = e.head[--t], e.head[t] = r >= s ? r - s : 0;
          } while (--n);

          t = n = s;

          do {
            r = e.prev[--t], e.prev[t] = r >= s ? r - s : 0;
          } while (--n);

          a += s;
        }

        if (0 === e.strm.avail_in) break;
        if (n = ie(e.strm, e.window, e.strstart + e.lookahead, a), e.lookahead += n, e.lookahead + e.insert >= U) for (o = e.strstart - e.insert, e.ins_h = e.window[o], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[o + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[o + U - 1]) & e.hash_mask, e.prev[o & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = o, o++, e.insert--, !(e.lookahead + e.insert < U)););
      } while (e.lookahead < C && 0 !== e.strm.avail_in);
    }

    function se(e, t) {
      for (var n, r;;) {
        if (e.lookahead < C) {
          if (oe(e), e.lookahead < C && t === u) return H;
          if (0 === e.lookahead) break;
        }

        if (n = 0, e.lookahead >= U && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + U - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== n && e.strstart - n <= e.w_size - C && (e.match_length = ae(e, n)), e.match_length >= U) {
          if (r = a._tr_tally(e, e.strstart - e.match_start, e.match_length - U), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= U) {
            e.match_length--;

            do {
              e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + U - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart;
            } while (0 != --e.match_length);

            e.strstart++;
          } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
        } else r = a._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
        if (r && (te(e, !1), 0 === e.strm.avail_out)) return H;
      }

      return e.insert = e.strstart < U - 1 ? e.strstart : U - 1, t === c ? (te(e, !0), 0 === e.strm.avail_out ? J : K) : e.last_lit && (te(e, !1), 0 === e.strm.avail_out) ? H : G;
    }

    function le(e, t) {
      for (var n, r, i;;) {
        if (e.lookahead < C) {
          if (oe(e), e.lookahead < C && t === u) return H;
          if (0 === e.lookahead) break;
        }

        if (n = 0, e.lookahead >= U && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + U - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = U - 1, 0 !== n && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - C && (e.match_length = ae(e, n), e.match_length <= 5 && (e.strategy === y || e.match_length === U && e.strstart - e.match_start > 4096) && (e.match_length = U - 1)), e.prev_length >= U && e.match_length <= e.prev_length) {
          i = e.strstart + e.lookahead - U, r = a._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - U), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;

          do {
            ++e.strstart <= i && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + U - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart);
          } while (0 != --e.prev_length);

          if (e.match_available = 0, e.match_length = U - 1, e.strstart++, r && (te(e, !1), 0 === e.strm.avail_out)) return H;
        } else if (e.match_available) {
          if ((r = a._tr_tally(e, 0, e.window[e.strstart - 1])) && te(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return H;
        } else e.match_available = 1, e.strstart++, e.lookahead--;
      }

      return e.match_available && (r = a._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < U - 1 ? e.strstart : U - 1, t === c ? (te(e, !0), 0 === e.strm.avail_out ? J : K) : e.last_lit && (te(e, !1), 0 === e.strm.avail_out) ? H : G;
    }

    function ue(e, t, n, r, i) {
      this.good_length = e, this.max_lazy = t, this.nice_length = n, this.max_chain = r, this.func = i;
    }

    function fe(e) {
      var t;
      return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = x, (t = e.state).pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? P : q, e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = u, a._tr_init(t), _) : X(e, g);
    }

    function he(e) {
      var t = fe(e);
      return t === _ && function (e) {
        e.window_size = 2 * e.w_size, Q(e.head), e.max_lazy_match = r[e.level].max_lazy, e.good_match = r[e.level].good_length, e.nice_match = r[e.level].nice_length, e.max_chain_length = r[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = U - 1, e.match_available = 0, e.ins_h = 0;
      }(e.state), t;
    }

    function ce(e, t, n, r, a, o) {
      if (!e) return g;
      var s = 1;
      if (t === b && (t = 6), r < 0 ? (s = 0, r = -r) : r > 15 && (s = 2, r -= 16), a < 1 || a > A || n !== T || r < 8 || r > 15 || t < 0 || t > 9 || o < 0 || o > k) return X(e, g);
      8 === r && (r = 9);
      var l = new function () {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = T, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new i.Buf16(2 * B), this.dyn_dtree = new i.Buf16(2 * (2 * N + 1)), this.bl_tree = new i.Buf16(2 * (2 * O + 1)), Q(this.dyn_ltree), Q(this.dyn_dtree), Q(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new i.Buf16(M + 1), this.heap = new i.Buf16(2 * I + 1), Q(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new i.Buf16(2 * I + 1), Q(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }();
      return e.state = l, l.strm = e, l.wrap = s, l.gzhead = null, l.w_bits = r, l.w_size = 1 << l.w_bits, l.w_mask = l.w_size - 1, l.hash_bits = a + 7, l.hash_size = 1 << l.hash_bits, l.hash_mask = l.hash_size - 1, l.hash_shift = ~~((l.hash_bits + U - 1) / U), l.window = new i.Buf8(2 * l.w_size), l.head = new i.Buf16(l.hash_size), l.prev = new i.Buf16(l.w_size), l.lit_bufsize = 1 << a + 6, l.pending_buf_size = 4 * l.lit_bufsize, l.pending_buf = new i.Buf8(l.pending_buf_size), l.d_buf = 1 * l.lit_bufsize, l.l_buf = 3 * l.lit_bufsize, l.level = t, l.strategy = o, l.method = n, he(e);
    }

    r = [new ue(0, 0, 0, 0, function (e, t) {
      var n = 65535;

      for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5);;) {
        if (e.lookahead <= 1) {
          if (oe(e), 0 === e.lookahead && t === u) return H;
          if (0 === e.lookahead) break;
        }

        e.strstart += e.lookahead, e.lookahead = 0;
        var r = e.block_start + n;
        if ((0 === e.strstart || e.strstart >= r) && (e.lookahead = e.strstart - r, e.strstart = r, te(e, !1), 0 === e.strm.avail_out)) return H;
        if (e.strstart - e.block_start >= e.w_size - C && (te(e, !1), 0 === e.strm.avail_out)) return H;
      }

      return e.insert = 0, t === c ? (te(e, !0), 0 === e.strm.avail_out ? J : K) : (e.strstart > e.block_start && (te(e, !1), e.strm.avail_out), H);
    }), new ue(4, 4, 8, 4, se), new ue(4, 5, 16, 8, se), new ue(4, 6, 32, 32, se), new ue(4, 4, 16, 16, le), new ue(8, 16, 32, 32, le), new ue(8, 16, 128, 128, le), new ue(8, 32, 128, 256, le), new ue(32, 128, 258, 1024, le), new ue(32, 258, 258, 4096, le)], t.deflateInit = function (e, t) {
      return ce(e, t, T, R, L, S);
    }, t.deflateInit2 = ce, t.deflateReset = he, t.deflateResetKeep = fe, t.deflateSetHeader = function (e, t) {
      return e && e.state ? 2 !== e.state.wrap ? g : (e.state.gzhead = t, _) : g;
    }, t.deflate = function (e, t) {
      var n, i, o, l;
      if (!e || !e.state || t > d || t < 0) return e ? X(e, g) : g;
      if (i = e.state, !e.output || !e.input && 0 !== e.avail_in || i.status === Y && t !== c) return X(e, 0 === e.avail_out ? v : g);
      if (i.strm = e, n = i.last_flush, i.last_flush = t, i.status === P) if (2 === i.wrap) e.adler = 0, ne(i, 31), ne(i, 139), ne(i, 8), i.gzhead ? (ne(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)), ne(i, 255 & i.gzhead.time), ne(i, i.gzhead.time >> 8 & 255), ne(i, i.gzhead.time >> 16 & 255), ne(i, i.gzhead.time >> 24 & 255), ne(i, 9 === i.level ? 2 : i.strategy >= w || i.level < 2 ? 4 : 0), ne(i, 255 & i.gzhead.os), i.gzhead.extra && i.gzhead.extra.length && (ne(i, 255 & i.gzhead.extra.length), ne(i, i.gzhead.extra.length >> 8 & 255)), i.gzhead.hcrc && (e.adler = s(e.adler, i.pending_buf, i.pending, 0)), i.gzindex = 0, i.status = F) : (ne(i, 0), ne(i, 0), ne(i, 0), ne(i, 0), ne(i, 0), ne(i, 9 === i.level ? 2 : i.strategy >= w || i.level < 2 ? 4 : 0), ne(i, V), i.status = q);else {
        var m = T + (i.w_bits - 8 << 4) << 8;
        m |= (i.strategy >= w || i.level < 2 ? 0 : i.level < 6 ? 1 : 6 === i.level ? 2 : 3) << 6, 0 !== i.strstart && (m |= z), m += 31 - m % 31, i.status = q, re(i, m), 0 !== i.strstart && (re(i, e.adler >>> 16), re(i, 65535 & e.adler)), e.adler = 1;
      }
      if (i.status === F) if (i.gzhead.extra) {
        for (o = i.pending; i.gzindex < (65535 & i.gzhead.extra.length) && (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), ee(e), o = i.pending, i.pending !== i.pending_buf_size));) ne(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;

        i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), i.gzindex === i.gzhead.extra.length && (i.gzindex = 0, i.status = Z);
      } else i.status = Z;
      if (i.status === Z) if (i.gzhead.name) {
        o = i.pending;

        do {
          if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), ee(e), o = i.pending, i.pending === i.pending_buf_size)) {
            l = 1;
            break;
          }

          l = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0, ne(i, l);
        } while (0 !== l);

        i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), 0 === l && (i.gzindex = 0, i.status = j);
      } else i.status = j;
      if (i.status === j) if (i.gzhead.comment) {
        o = i.pending;

        do {
          if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), ee(e), o = i.pending, i.pending === i.pending_buf_size)) {
            l = 1;
            break;
          }

          l = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0, ne(i, l);
        } while (0 !== l);

        i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), 0 === l && (i.status = W);
      } else i.status = W;

      if (i.status === W && (i.gzhead.hcrc ? (i.pending + 2 > i.pending_buf_size && ee(e), i.pending + 2 <= i.pending_buf_size && (ne(i, 255 & e.adler), ne(i, e.adler >> 8 & 255), e.adler = 0, i.status = q)) : i.status = q), 0 !== i.pending) {
        if (ee(e), 0 === e.avail_out) return i.last_flush = -1, _;
      } else if (0 === e.avail_in && $(t) <= $(n) && t !== c) return X(e, v);

      if (i.status === Y && 0 !== e.avail_in) return X(e, v);

      if (0 !== e.avail_in || 0 !== i.lookahead || t !== u && i.status !== Y) {
        var b = i.strategy === w ? function (e, t) {
          for (var n;;) {
            if (0 === e.lookahead && (oe(e), 0 === e.lookahead)) {
              if (t === u) return H;
              break;
            }

            if (e.match_length = 0, n = a._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, n && (te(e, !1), 0 === e.strm.avail_out)) return H;
          }

          return e.insert = 0, t === c ? (te(e, !0), 0 === e.strm.avail_out ? J : K) : e.last_lit && (te(e, !1), 0 === e.strm.avail_out) ? H : G;
        }(i, t) : i.strategy === E ? function (e, t) {
          for (var n, r, i, o, s = e.window;;) {
            if (e.lookahead <= D) {
              if (oe(e), e.lookahead <= D && t === u) return H;
              if (0 === e.lookahead) break;
            }

            if (e.match_length = 0, e.lookahead >= U && e.strstart > 0 && (r = s[i = e.strstart - 1]) === s[++i] && r === s[++i] && r === s[++i]) {
              o = e.strstart + D;

              do {} while (r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && i < o);

              e.match_length = D - (o - i), e.match_length > e.lookahead && (e.match_length = e.lookahead);
            }

            if (e.match_length >= U ? (n = a._tr_tally(e, 1, e.match_length - U), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (n = a._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), n && (te(e, !1), 0 === e.strm.avail_out)) return H;
          }

          return e.insert = 0, t === c ? (te(e, !0), 0 === e.strm.avail_out ? J : K) : e.last_lit && (te(e, !1), 0 === e.strm.avail_out) ? H : G;
        }(i, t) : r[i.level].func(i, t);
        if (b !== J && b !== K || (i.status = Y), b === H || b === J) return 0 === e.avail_out && (i.last_flush = -1), _;
        if (b === G && (t === f ? a._tr_align(i) : t !== d && (a._tr_stored_block(i, 0, 0, !1), t === h && (Q(i.head), 0 === i.lookahead && (i.strstart = 0, i.block_start = 0, i.insert = 0))), ee(e), 0 === e.avail_out)) return i.last_flush = -1, _;
      }

      return t !== c ? _ : i.wrap <= 0 ? p : (2 === i.wrap ? (ne(i, 255 & e.adler), ne(i, e.adler >> 8 & 255), ne(i, e.adler >> 16 & 255), ne(i, e.adler >> 24 & 255), ne(i, 255 & e.total_in), ne(i, e.total_in >> 8 & 255), ne(i, e.total_in >> 16 & 255), ne(i, e.total_in >> 24 & 255)) : (re(i, e.adler >>> 16), re(i, 65535 & e.adler)), ee(e), i.wrap > 0 && (i.wrap = -i.wrap), 0 !== i.pending ? _ : p);
    }, t.deflateEnd = function (e) {
      var t;
      return e && e.state ? (t = e.state.status) !== P && t !== F && t !== Z && t !== j && t !== W && t !== q && t !== Y ? X(e, g) : (e.state = null, t === q ? X(e, m) : _) : g;
    }, t.deflateSetDictionary = function (e, t) {
      var n,
          r,
          a,
          s,
          l,
          u,
          f,
          h,
          c = t.length;
      if (!e || !e.state) return g;
      if (2 === (s = (n = e.state).wrap) || 1 === s && n.status !== P || n.lookahead) return g;

      for (1 === s && (e.adler = o(e.adler, t, c, 0)), n.wrap = 0, c >= n.w_size && (0 === s && (Q(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0), h = new i.Buf8(n.w_size), i.arraySet(h, t, c - n.w_size, n.w_size, 0), t = h, c = n.w_size), l = e.avail_in, u = e.next_in, f = e.input, e.avail_in = c, e.next_in = 0, e.input = t, oe(n); n.lookahead >= U;) {
        r = n.strstart, a = n.lookahead - (U - 1);

        do {
          n.ins_h = (n.ins_h << n.hash_shift ^ n.window[r + U - 1]) & n.hash_mask, n.prev[r & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = r, r++;
        } while (--a);

        n.strstart = r, n.lookahead = U - 1, oe(n);
      }

      return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = U - 1, n.match_available = 0, e.next_in = u, e.input = f, e.avail_in = l, n.wrap = s, _;
    }, t.deflateInfo = "pako deflate (from Nodeca project)";
  }, function (e, t, n) {
    "use strict";

    var r = n(8),
        i = 4,
        a = 0,
        o = 1,
        s = 2;

    function l(e) {
      for (var t = e.length; --t >= 0;) e[t] = 0;
    }

    var u = 0,
        f = 1,
        h = 2,
        c = 29,
        d = 256,
        _ = d + 1 + c,
        p = 30,
        g = 19,
        m = 2 * _ + 1,
        v = 15,
        b = 16,
        y = 7,
        w = 256,
        E = 16,
        k = 17,
        S = 18,
        x = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
        T = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        A = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        R = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        L = new Array(2 * (_ + 2));

    l(L);
    var I = new Array(2 * p);
    l(I);
    var N = new Array(512);
    l(N);
    var O = new Array(256);
    l(O);
    var B = new Array(c);
    l(B);
    var M,
        U,
        D,
        C = new Array(p);

    function z(e, t, n, r, i) {
      this.static_tree = e, this.extra_bits = t, this.extra_base = n, this.elems = r, this.max_length = i, this.has_stree = e && e.length;
    }

    function P(e, t) {
      this.dyn_tree = e, this.max_code = 0, this.stat_desc = t;
    }

    function F(e) {
      return e < 256 ? N[e] : N[256 + (e >>> 7)];
    }

    function Z(e, t) {
      e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255;
    }

    function j(e, t, n) {
      e.bi_valid > b - n ? (e.bi_buf |= t << e.bi_valid & 65535, Z(e, e.bi_buf), e.bi_buf = t >> b - e.bi_valid, e.bi_valid += n - b) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n);
    }

    function W(e, t, n) {
      j(e, n[2 * t], n[2 * t + 1]);
    }

    function q(e, t) {
      var n = 0;

      do {
        n |= 1 & e, e >>>= 1, n <<= 1;
      } while (--t > 0);

      return n >>> 1;
    }

    function Y(e, t, n) {
      var r,
          i,
          a = new Array(v + 1),
          o = 0;

      for (r = 1; r <= v; r++) a[r] = o = o + n[r - 1] << 1;

      for (i = 0; i <= t; i++) {
        var s = e[2 * i + 1];
        0 !== s && (e[2 * i] = q(a[s]++, s));
      }
    }

    function H(e) {
      var t;

      for (t = 0; t < _; t++) e.dyn_ltree[2 * t] = 0;

      for (t = 0; t < p; t++) e.dyn_dtree[2 * t] = 0;

      for (t = 0; t < g; t++) e.bl_tree[2 * t] = 0;

      e.dyn_ltree[2 * w] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0;
    }

    function G(e) {
      e.bi_valid > 8 ? Z(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
    }

    function J(e, t, n, r) {
      var i = 2 * t,
          a = 2 * n;
      return e[i] < e[a] || e[i] === e[a] && r[t] <= r[n];
    }

    function K(e, t, n) {
      for (var r = e.heap[n], i = n << 1; i <= e.heap_len && (i < e.heap_len && J(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !J(t, r, e.heap[i], e.depth));) e.heap[n] = e.heap[i], n = i, i <<= 1;

      e.heap[n] = r;
    }

    function V(e, t, n) {
      var r,
          i,
          a,
          o,
          s = 0;
      if (0 !== e.last_lit) do {
        r = e.pending_buf[e.d_buf + 2 * s] << 8 | e.pending_buf[e.d_buf + 2 * s + 1], i = e.pending_buf[e.l_buf + s], s++, 0 === r ? W(e, i, t) : (W(e, (a = O[i]) + d + 1, t), 0 !== (o = x[a]) && j(e, i -= B[a], o), W(e, a = F(--r), n), 0 !== (o = T[a]) && j(e, r -= C[a], o));
      } while (s < e.last_lit);
      W(e, w, t);
    }

    function X(e, t) {
      var n,
          r,
          i,
          a = t.dyn_tree,
          o = t.stat_desc.static_tree,
          s = t.stat_desc.has_stree,
          l = t.stat_desc.elems,
          u = -1;

      for (e.heap_len = 0, e.heap_max = m, n = 0; n < l; n++) 0 !== a[2 * n] ? (e.heap[++e.heap_len] = u = n, e.depth[n] = 0) : a[2 * n + 1] = 0;

      for (; e.heap_len < 2;) a[2 * (i = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1, e.depth[i] = 0, e.opt_len--, s && (e.static_len -= o[2 * i + 1]);

      for (t.max_code = u, n = e.heap_len >> 1; n >= 1; n--) K(e, a, n);

      i = l;

      do {
        n = e.heap[1], e.heap[1] = e.heap[e.heap_len--], K(e, a, 1), r = e.heap[1], e.heap[--e.heap_max] = n, e.heap[--e.heap_max] = r, a[2 * i] = a[2 * n] + a[2 * r], e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1, a[2 * n + 1] = a[2 * r + 1] = i, e.heap[1] = i++, K(e, a, 1);
      } while (e.heap_len >= 2);

      e.heap[--e.heap_max] = e.heap[1], function (e, t) {
        var n,
            r,
            i,
            a,
            o,
            s,
            l = t.dyn_tree,
            u = t.max_code,
            f = t.stat_desc.static_tree,
            h = t.stat_desc.has_stree,
            c = t.stat_desc.extra_bits,
            d = t.stat_desc.extra_base,
            _ = t.stat_desc.max_length,
            p = 0;

        for (a = 0; a <= v; a++) e.bl_count[a] = 0;

        for (l[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < m; n++) (a = l[2 * l[2 * (r = e.heap[n]) + 1] + 1] + 1) > _ && (a = _, p++), l[2 * r + 1] = a, r > u || (e.bl_count[a]++, o = 0, r >= d && (o = c[r - d]), s = l[2 * r], e.opt_len += s * (a + o), h && (e.static_len += s * (f[2 * r + 1] + o)));

        if (0 !== p) {
          do {
            for (a = _ - 1; 0 === e.bl_count[a];) a--;

            e.bl_count[a]--, e.bl_count[a + 1] += 2, e.bl_count[_]--, p -= 2;
          } while (p > 0);

          for (a = _; 0 !== a; a--) for (r = e.bl_count[a]; 0 !== r;) (i = e.heap[--n]) > u || (l[2 * i + 1] !== a && (e.opt_len += (a - l[2 * i + 1]) * l[2 * i], l[2 * i + 1] = a), r--);
        }
      }(e, t), Y(a, u, e.bl_count);
    }

    function $(e, t, n) {
      var r,
          i,
          a = -1,
          o = t[1],
          s = 0,
          l = 7,
          u = 4;

      for (0 === o && (l = 138, u = 3), t[2 * (n + 1) + 1] = 65535, r = 0; r <= n; r++) i = o, o = t[2 * (r + 1) + 1], ++s < l && i === o || (s < u ? e.bl_tree[2 * i] += s : 0 !== i ? (i !== a && e.bl_tree[2 * i]++, e.bl_tree[2 * E]++) : s <= 10 ? e.bl_tree[2 * k]++ : e.bl_tree[2 * S]++, s = 0, a = i, 0 === o ? (l = 138, u = 3) : i === o ? (l = 6, u = 3) : (l = 7, u = 4));
    }

    function Q(e, t, n) {
      var r,
          i,
          a = -1,
          o = t[1],
          s = 0,
          l = 7,
          u = 4;

      for (0 === o && (l = 138, u = 3), r = 0; r <= n; r++) if (i = o, o = t[2 * (r + 1) + 1], !(++s < l && i === o)) {
        if (s < u) do {
          W(e, i, e.bl_tree);
        } while (0 != --s);else 0 !== i ? (i !== a && (W(e, i, e.bl_tree), s--), W(e, E, e.bl_tree), j(e, s - 3, 2)) : s <= 10 ? (W(e, k, e.bl_tree), j(e, s - 3, 3)) : (W(e, S, e.bl_tree), j(e, s - 11, 7));
        s = 0, a = i, 0 === o ? (l = 138, u = 3) : i === o ? (l = 6, u = 3) : (l = 7, u = 4);
      }
    }

    l(C);
    var ee = !1;

    function te(e, t, n, i) {
      j(e, (u << 1) + (i ? 1 : 0), 3), function (e, t, n, i) {
        G(e), i && (Z(e, n), Z(e, ~n)), r.arraySet(e.pending_buf, e.window, t, n, e.pending), e.pending += n;
      }(e, t, n, !0);
    }

    t._tr_init = function (e) {
      ee || (function () {
        var e,
            t,
            n,
            r,
            i,
            a = new Array(v + 1);

        for (n = 0, r = 0; r < c - 1; r++) for (B[r] = n, e = 0; e < 1 << x[r]; e++) O[n++] = r;

        for (O[n - 1] = r, i = 0, r = 0; r < 16; r++) for (C[r] = i, e = 0; e < 1 << T[r]; e++) N[i++] = r;

        for (i >>= 7; r < p; r++) for (C[r] = i << 7, e = 0; e < 1 << T[r] - 7; e++) N[256 + i++] = r;

        for (t = 0; t <= v; t++) a[t] = 0;

        for (e = 0; e <= 143;) L[2 * e + 1] = 8, e++, a[8]++;

        for (; e <= 255;) L[2 * e + 1] = 9, e++, a[9]++;

        for (; e <= 279;) L[2 * e + 1] = 7, e++, a[7]++;

        for (; e <= 287;) L[2 * e + 1] = 8, e++, a[8]++;

        for (Y(L, _ + 1, a), e = 0; e < p; e++) I[2 * e + 1] = 5, I[2 * e] = q(e, 5);

        M = new z(L, x, d + 1, _, v), U = new z(I, T, 0, p, v), D = new z(new Array(0), A, 0, g, y);
      }(), ee = !0), e.l_desc = new P(e.dyn_ltree, M), e.d_desc = new P(e.dyn_dtree, U), e.bl_desc = new P(e.bl_tree, D), e.bi_buf = 0, e.bi_valid = 0, H(e);
    }, t._tr_stored_block = te, t._tr_flush_block = function (e, t, n, r) {
      var l,
          u,
          c = 0;
      e.level > 0 ? (e.strm.data_type === s && (e.strm.data_type = function (e) {
        var t,
            n = 4093624447;

        for (t = 0; t <= 31; t++, n >>>= 1) if (1 & n && 0 !== e.dyn_ltree[2 * t]) return a;

        if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return o;

        for (t = 32; t < d; t++) if (0 !== e.dyn_ltree[2 * t]) return o;

        return a;
      }(e)), X(e, e.l_desc), X(e, e.d_desc), c = function (e) {
        var t;

        for ($(e, e.dyn_ltree, e.l_desc.max_code), $(e, e.dyn_dtree, e.d_desc.max_code), X(e, e.bl_desc), t = g - 1; t >= 3 && 0 === e.bl_tree[2 * R[t] + 1]; t--);

        return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
      }(e), l = e.opt_len + 3 + 7 >>> 3, (u = e.static_len + 3 + 7 >>> 3) <= l && (l = u)) : l = u = n + 5, n + 4 <= l && -1 !== t ? te(e, t, n, r) : e.strategy === i || u === l ? (j(e, (f << 1) + (r ? 1 : 0), 3), V(e, L, I)) : (j(e, (h << 1) + (r ? 1 : 0), 3), function (e, t, n, r) {
        var i;

        for (j(e, t - 257, 5), j(e, n - 1, 5), j(e, r - 4, 4), i = 0; i < r; i++) j(e, e.bl_tree[2 * R[i] + 1], 3);

        Q(e, e.dyn_ltree, t - 1), Q(e, e.dyn_dtree, n - 1);
      }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, c + 1), V(e, e.dyn_ltree, e.dyn_dtree)), H(e), r && G(e);
    }, t._tr_tally = function (e, t, n) {
      return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & n, e.last_lit++, 0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[2 * (O[n] + d + 1)]++, e.dyn_dtree[2 * F(t)]++), e.last_lit === e.lit_bufsize - 1;
    }, t._tr_align = function (e) {
      j(e, f << 1, 3), W(e, w, L), function (e) {
        16 === e.bi_valid ? (Z(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8);
      }(e);
    };
  }, function (e, t, n) {
    "use strict";

    e.exports = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version"
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(8),
        i = n(20),
        a = n(21),
        o = n(44),
        s = n(45),
        l = 0,
        u = 1,
        f = 2,
        h = 4,
        c = 5,
        d = 6,
        _ = 0,
        p = 1,
        g = 2,
        m = -2,
        v = -3,
        b = -4,
        y = -5,
        w = 8,
        E = 1,
        k = 2,
        S = 3,
        x = 4,
        T = 5,
        A = 6,
        R = 7,
        L = 8,
        I = 9,
        N = 10,
        O = 11,
        B = 12,
        M = 13,
        U = 14,
        D = 15,
        C = 16,
        z = 17,
        P = 18,
        F = 19,
        Z = 20,
        j = 21,
        W = 22,
        q = 23,
        Y = 24,
        H = 25,
        G = 26,
        J = 27,
        K = 28,
        V = 29,
        X = 30,
        $ = 31,
        Q = 32,
        ee = 852,
        te = 592,
        ne = 15;

    function re(e) {
      return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
    }

    function ie(e) {
      var t;
      return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = E, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new r.Buf32(ee), t.distcode = t.distdyn = new r.Buf32(te), t.sane = 1, t.back = -1, _) : m;
    }

    function ae(e) {
      var t;
      return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, ie(e)) : m;
    }

    function oe(e, t) {
      var n, r;
      return e && e.state ? (r = e.state, t < 0 ? (n = 0, t = -t) : (n = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? m : (null !== r.window && r.wbits !== t && (r.window = null), r.wrap = n, r.wbits = t, ae(e))) : m;
    }

    function se(e, t) {
      var n, i;
      return e ? (i = new function () {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }(), e.state = i, i.window = null, (n = oe(e, t)) !== _ && (e.state = null), n) : m;
    }

    var le,
        ue,
        fe = !0;

    function he(e) {
      if (fe) {
        var t;

        for (le = new r.Buf32(512), ue = new r.Buf32(32), t = 0; t < 144;) e.lens[t++] = 8;

        for (; t < 256;) e.lens[t++] = 9;

        for (; t < 280;) e.lens[t++] = 7;

        for (; t < 288;) e.lens[t++] = 8;

        for (s(u, e.lens, 0, 288, le, 0, e.work, {
          bits: 9
        }), t = 0; t < 32;) e.lens[t++] = 5;

        s(f, e.lens, 0, 32, ue, 0, e.work, {
          bits: 5
        }), fe = !1;
      }

      e.lencode = le, e.lenbits = 9, e.distcode = ue, e.distbits = 5;
    }

    function ce(e, t, n, i) {
      var a,
          o = e.state;
      return null === o.window && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new r.Buf8(o.wsize)), i >= o.wsize ? (r.arraySet(o.window, t, n - o.wsize, o.wsize, 0), o.wnext = 0, o.whave = o.wsize) : ((a = o.wsize - o.wnext) > i && (a = i), r.arraySet(o.window, t, n - i, a, o.wnext), (i -= a) ? (r.arraySet(o.window, t, n - i, i, 0), o.wnext = i, o.whave = o.wsize) : (o.wnext += a, o.wnext === o.wsize && (o.wnext = 0), o.whave < o.wsize && (o.whave += a))), 0;
    }

    t.inflateReset = ae, t.inflateReset2 = oe, t.inflateResetKeep = ie, t.inflateInit = function (e) {
      return se(e, ne);
    }, t.inflateInit2 = se, t.inflate = function (e, t) {
      var n,
          ee,
          te,
          ne,
          ie,
          ae,
          oe,
          se,
          le,
          ue,
          fe,
          de,
          _e,
          pe,
          ge,
          me,
          ve,
          be,
          ye,
          we,
          Ee,
          ke,
          Se,
          xe,
          Te = 0,
          Ae = new r.Buf8(4),
          Re = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];

      if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return m;
      (n = e.state).mode === B && (n.mode = M), ie = e.next_out, te = e.output, oe = e.avail_out, ne = e.next_in, ee = e.input, ae = e.avail_in, se = n.hold, le = n.bits, ue = ae, fe = oe, ke = _;

      e: for (;;) switch (n.mode) {
        case E:
          if (0 === n.wrap) {
            n.mode = M;
            break;
          }

          for (; le < 16;) {
            if (0 === ae) break e;
            ae--, se += ee[ne++] << le, le += 8;
          }

          if (2 & n.wrap && 35615 === se) {
            n.check = 0, Ae[0] = 255 & se, Ae[1] = se >>> 8 & 255, n.check = a(n.check, Ae, 2, 0), se = 0, le = 0, n.mode = k;
            break;
          }

          if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & se) << 8) + (se >> 8)) % 31) {
            e.msg = "incorrect header check", n.mode = X;
            break;
          }

          if ((15 & se) !== w) {
            e.msg = "unknown compression method", n.mode = X;
            break;
          }

          if (le -= 4, Ee = 8 + (15 & (se >>>= 4)), 0 === n.wbits) n.wbits = Ee;else if (Ee > n.wbits) {
            e.msg = "invalid window size", n.mode = X;
            break;
          }
          n.dmax = 1 << Ee, e.adler = n.check = 1, n.mode = 512 & se ? N : B, se = 0, le = 0;
          break;

        case k:
          for (; le < 16;) {
            if (0 === ae) break e;
            ae--, se += ee[ne++] << le, le += 8;
          }

          if (n.flags = se, (255 & n.flags) !== w) {
            e.msg = "unknown compression method", n.mode = X;
            break;
          }

          if (57344 & n.flags) {
            e.msg = "unknown header flags set", n.mode = X;
            break;
          }

          n.head && (n.head.text = se >> 8 & 1), 512 & n.flags && (Ae[0] = 255 & se, Ae[1] = se >>> 8 & 255, n.check = a(n.check, Ae, 2, 0)), se = 0, le = 0, n.mode = S;

        case S:
          for (; le < 32;) {
            if (0 === ae) break e;
            ae--, se += ee[ne++] << le, le += 8;
          }

          n.head && (n.head.time = se), 512 & n.flags && (Ae[0] = 255 & se, Ae[1] = se >>> 8 & 255, Ae[2] = se >>> 16 & 255, Ae[3] = se >>> 24 & 255, n.check = a(n.check, Ae, 4, 0)), se = 0, le = 0, n.mode = x;

        case x:
          for (; le < 16;) {
            if (0 === ae) break e;
            ae--, se += ee[ne++] << le, le += 8;
          }

          n.head && (n.head.xflags = 255 & se, n.head.os = se >> 8), 512 & n.flags && (Ae[0] = 255 & se, Ae[1] = se >>> 8 & 255, n.check = a(n.check, Ae, 2, 0)), se = 0, le = 0, n.mode = T;

        case T:
          if (1024 & n.flags) {
            for (; le < 16;) {
              if (0 === ae) break e;
              ae--, se += ee[ne++] << le, le += 8;
            }

            n.length = se, n.head && (n.head.extra_len = se), 512 & n.flags && (Ae[0] = 255 & se, Ae[1] = se >>> 8 & 255, n.check = a(n.check, Ae, 2, 0)), se = 0, le = 0;
          } else n.head && (n.head.extra = null);

          n.mode = A;

        case A:
          if (1024 & n.flags && ((de = n.length) > ae && (de = ae), de && (n.head && (Ee = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Array(n.head.extra_len)), r.arraySet(n.head.extra, ee, ne, de, Ee)), 512 & n.flags && (n.check = a(n.check, ee, de, ne)), ae -= de, ne += de, n.length -= de), n.length)) break e;
          n.length = 0, n.mode = R;

        case R:
          if (2048 & n.flags) {
            if (0 === ae) break e;
            de = 0;

            do {
              Ee = ee[ne + de++], n.head && Ee && n.length < 65536 && (n.head.name += String.fromCharCode(Ee));
            } while (Ee && de < ae);

            if (512 & n.flags && (n.check = a(n.check, ee, de, ne)), ae -= de, ne += de, Ee) break e;
          } else n.head && (n.head.name = null);

          n.length = 0, n.mode = L;

        case L:
          if (4096 & n.flags) {
            if (0 === ae) break e;
            de = 0;

            do {
              Ee = ee[ne + de++], n.head && Ee && n.length < 65536 && (n.head.comment += String.fromCharCode(Ee));
            } while (Ee && de < ae);

            if (512 & n.flags && (n.check = a(n.check, ee, de, ne)), ae -= de, ne += de, Ee) break e;
          } else n.head && (n.head.comment = null);

          n.mode = I;

        case I:
          if (512 & n.flags) {
            for (; le < 16;) {
              if (0 === ae) break e;
              ae--, se += ee[ne++] << le, le += 8;
            }

            if (se !== (65535 & n.check)) {
              e.msg = "header crc mismatch", n.mode = X;
              break;
            }

            se = 0, le = 0;
          }

          n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), e.adler = n.check = 0, n.mode = B;
          break;

        case N:
          for (; le < 32;) {
            if (0 === ae) break e;
            ae--, se += ee[ne++] << le, le += 8;
          }

          e.adler = n.check = re(se), se = 0, le = 0, n.mode = O;

        case O:
          if (0 === n.havedict) return e.next_out = ie, e.avail_out = oe, e.next_in = ne, e.avail_in = ae, n.hold = se, n.bits = le, g;
          e.adler = n.check = 1, n.mode = B;

        case B:
          if (t === c || t === d) break e;

        case M:
          if (n.last) {
            se >>>= 7 & le, le -= 7 & le, n.mode = J;
            break;
          }

          for (; le < 3;) {
            if (0 === ae) break e;
            ae--, se += ee[ne++] << le, le += 8;
          }

          switch (n.last = 1 & se, le -= 1, 3 & (se >>>= 1)) {
            case 0:
              n.mode = U;
              break;

            case 1:
              if (he(n), n.mode = Z, t === d) {
                se >>>= 2, le -= 2;
                break e;
              }

              break;

            case 2:
              n.mode = z;
              break;

            case 3:
              e.msg = "invalid block type", n.mode = X;
          }

          se >>>= 2, le -= 2;
          break;

        case U:
          for (se >>>= 7 & le, le -= 7 & le; le < 32;) {
            if (0 === ae) break e;
            ae--, se += ee[ne++] << le, le += 8;
          }

          if ((65535 & se) != (se >>> 16 ^ 65535)) {
            e.msg = "invalid stored block lengths", n.mode = X;
            break;
          }

          if (n.length = 65535 & se, se = 0, le = 0, n.mode = D, t === d) break e;

        case D:
          n.mode = C;

        case C:
          if (de = n.length) {
            if (de > ae && (de = ae), de > oe && (de = oe), 0 === de) break e;
            r.arraySet(te, ee, ne, de, ie), ae -= de, ne += de, oe -= de, ie += de, n.length -= de;
            break;
          }

          n.mode = B;
          break;

        case z:
          for (; le < 14;) {
            if (0 === ae) break e;
            ae--, se += ee[ne++] << le, le += 8;
          }

          if (n.nlen = 257 + (31 & se), se >>>= 5, le -= 5, n.ndist = 1 + (31 & se), se >>>= 5, le -= 5, n.ncode = 4 + (15 & se), se >>>= 4, le -= 4, n.nlen > 286 || n.ndist > 30) {
            e.msg = "too many length or distance symbols", n.mode = X;
            break;
          }

          n.have = 0, n.mode = P;

        case P:
          for (; n.have < n.ncode;) {
            for (; le < 3;) {
              if (0 === ae) break e;
              ae--, se += ee[ne++] << le, le += 8;
            }

            n.lens[Re[n.have++]] = 7 & se, se >>>= 3, le -= 3;
          }

          for (; n.have < 19;) n.lens[Re[n.have++]] = 0;

          if (n.lencode = n.lendyn, n.lenbits = 7, Se = {
            bits: n.lenbits
          }, ke = s(l, n.lens, 0, 19, n.lencode, 0, n.work, Se), n.lenbits = Se.bits, ke) {
            e.msg = "invalid code lengths set", n.mode = X;
            break;
          }

          n.have = 0, n.mode = F;

        case F:
          for (; n.have < n.nlen + n.ndist;) {
            for (; me = (Te = n.lencode[se & (1 << n.lenbits) - 1]) >>> 16 & 255, ve = 65535 & Te, !((ge = Te >>> 24) <= le);) {
              if (0 === ae) break e;
              ae--, se += ee[ne++] << le, le += 8;
            }

            if (ve < 16) se >>>= ge, le -= ge, n.lens[n.have++] = ve;else {
              if (16 === ve) {
                for (xe = ge + 2; le < xe;) {
                  if (0 === ae) break e;
                  ae--, se += ee[ne++] << le, le += 8;
                }

                if (se >>>= ge, le -= ge, 0 === n.have) {
                  e.msg = "invalid bit length repeat", n.mode = X;
                  break;
                }

                Ee = n.lens[n.have - 1], de = 3 + (3 & se), se >>>= 2, le -= 2;
              } else if (17 === ve) {
                for (xe = ge + 3; le < xe;) {
                  if (0 === ae) break e;
                  ae--, se += ee[ne++] << le, le += 8;
                }

                le -= ge, Ee = 0, de = 3 + (7 & (se >>>= ge)), se >>>= 3, le -= 3;
              } else {
                for (xe = ge + 7; le < xe;) {
                  if (0 === ae) break e;
                  ae--, se += ee[ne++] << le, le += 8;
                }

                le -= ge, Ee = 0, de = 11 + (127 & (se >>>= ge)), se >>>= 7, le -= 7;
              }

              if (n.have + de > n.nlen + n.ndist) {
                e.msg = "invalid bit length repeat", n.mode = X;
                break;
              }

              for (; de--;) n.lens[n.have++] = Ee;
            }
          }

          if (n.mode === X) break;

          if (0 === n.lens[256]) {
            e.msg = "invalid code -- missing end-of-block", n.mode = X;
            break;
          }

          if (n.lenbits = 9, Se = {
            bits: n.lenbits
          }, ke = s(u, n.lens, 0, n.nlen, n.lencode, 0, n.work, Se), n.lenbits = Se.bits, ke) {
            e.msg = "invalid literal/lengths set", n.mode = X;
            break;
          }

          if (n.distbits = 6, n.distcode = n.distdyn, Se = {
            bits: n.distbits
          }, ke = s(f, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, Se), n.distbits = Se.bits, ke) {
            e.msg = "invalid distances set", n.mode = X;
            break;
          }

          if (n.mode = Z, t === d) break e;

        case Z:
          n.mode = j;

        case j:
          if (ae >= 6 && oe >= 258) {
            e.next_out = ie, e.avail_out = oe, e.next_in = ne, e.avail_in = ae, n.hold = se, n.bits = le, o(e, fe), ie = e.next_out, te = e.output, oe = e.avail_out, ne = e.next_in, ee = e.input, ae = e.avail_in, se = n.hold, le = n.bits, n.mode === B && (n.back = -1);
            break;
          }

          for (n.back = 0; me = (Te = n.lencode[se & (1 << n.lenbits) - 1]) >>> 16 & 255, ve = 65535 & Te, !((ge = Te >>> 24) <= le);) {
            if (0 === ae) break e;
            ae--, se += ee[ne++] << le, le += 8;
          }

          if (me && 0 == (240 & me)) {
            for (be = ge, ye = me, we = ve; me = (Te = n.lencode[we + ((se & (1 << be + ye) - 1) >> be)]) >>> 16 & 255, ve = 65535 & Te, !(be + (ge = Te >>> 24) <= le);) {
              if (0 === ae) break e;
              ae--, se += ee[ne++] << le, le += 8;
            }

            se >>>= be, le -= be, n.back += be;
          }

          if (se >>>= ge, le -= ge, n.back += ge, n.length = ve, 0 === me) {
            n.mode = G;
            break;
          }

          if (32 & me) {
            n.back = -1, n.mode = B;
            break;
          }

          if (64 & me) {
            e.msg = "invalid literal/length code", n.mode = X;
            break;
          }

          n.extra = 15 & me, n.mode = W;

        case W:
          if (n.extra) {
            for (xe = n.extra; le < xe;) {
              if (0 === ae) break e;
              ae--, se += ee[ne++] << le, le += 8;
            }

            n.length += se & (1 << n.extra) - 1, se >>>= n.extra, le -= n.extra, n.back += n.extra;
          }

          n.was = n.length, n.mode = q;

        case q:
          for (; me = (Te = n.distcode[se & (1 << n.distbits) - 1]) >>> 16 & 255, ve = 65535 & Te, !((ge = Te >>> 24) <= le);) {
            if (0 === ae) break e;
            ae--, se += ee[ne++] << le, le += 8;
          }

          if (0 == (240 & me)) {
            for (be = ge, ye = me, we = ve; me = (Te = n.distcode[we + ((se & (1 << be + ye) - 1) >> be)]) >>> 16 & 255, ve = 65535 & Te, !(be + (ge = Te >>> 24) <= le);) {
              if (0 === ae) break e;
              ae--, se += ee[ne++] << le, le += 8;
            }

            se >>>= be, le -= be, n.back += be;
          }

          if (se >>>= ge, le -= ge, n.back += ge, 64 & me) {
            e.msg = "invalid distance code", n.mode = X;
            break;
          }

          n.offset = ve, n.extra = 15 & me, n.mode = Y;

        case Y:
          if (n.extra) {
            for (xe = n.extra; le < xe;) {
              if (0 === ae) break e;
              ae--, se += ee[ne++] << le, le += 8;
            }

            n.offset += se & (1 << n.extra) - 1, se >>>= n.extra, le -= n.extra, n.back += n.extra;
          }

          if (n.offset > n.dmax) {
            e.msg = "invalid distance too far back", n.mode = X;
            break;
          }

          n.mode = H;

        case H:
          if (0 === oe) break e;

          if (de = fe - oe, n.offset > de) {
            if ((de = n.offset - de) > n.whave && n.sane) {
              e.msg = "invalid distance too far back", n.mode = X;
              break;
            }

            de > n.wnext ? (de -= n.wnext, _e = n.wsize - de) : _e = n.wnext - de, de > n.length && (de = n.length), pe = n.window;
          } else pe = te, _e = ie - n.offset, de = n.length;

          de > oe && (de = oe), oe -= de, n.length -= de;

          do {
            te[ie++] = pe[_e++];
          } while (--de);

          0 === n.length && (n.mode = j);
          break;

        case G:
          if (0 === oe) break e;
          te[ie++] = n.length, oe--, n.mode = j;
          break;

        case J:
          if (n.wrap) {
            for (; le < 32;) {
              if (0 === ae) break e;
              ae--, se |= ee[ne++] << le, le += 8;
            }

            if (fe -= oe, e.total_out += fe, n.total += fe, fe && (e.adler = n.check = n.flags ? a(n.check, te, fe, ie - fe) : i(n.check, te, fe, ie - fe)), fe = oe, (n.flags ? se : re(se)) !== n.check) {
              e.msg = "incorrect data check", n.mode = X;
              break;
            }

            se = 0, le = 0;
          }

          n.mode = K;

        case K:
          if (n.wrap && n.flags) {
            for (; le < 32;) {
              if (0 === ae) break e;
              ae--, se += ee[ne++] << le, le += 8;
            }

            if (se !== (4294967295 & n.total)) {
              e.msg = "incorrect length check", n.mode = X;
              break;
            }

            se = 0, le = 0;
          }

          n.mode = V;

        case V:
          ke = p;
          break e;

        case X:
          ke = v;
          break e;

        case $:
          return b;

        case Q:
        default:
          return m;
      }

      return e.next_out = ie, e.avail_out = oe, e.next_in = ne, e.avail_in = ae, n.hold = se, n.bits = le, (n.wsize || fe !== e.avail_out && n.mode < X && (n.mode < J || t !== h)) && ce(e, e.output, e.next_out, fe - e.avail_out) ? (n.mode = $, b) : (ue -= e.avail_in, fe -= e.avail_out, e.total_in += ue, e.total_out += fe, n.total += fe, n.wrap && fe && (e.adler = n.check = n.flags ? a(n.check, te, fe, e.next_out - fe) : i(n.check, te, fe, e.next_out - fe)), e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === B ? 128 : 0) + (n.mode === Z || n.mode === D ? 256 : 0), (0 === ue && 0 === fe || t === h) && ke === _ && (ke = y), ke);
    }, t.inflateEnd = function (e) {
      if (!e || !e.state) return m;
      var t = e.state;
      return t.window && (t.window = null), e.state = null, _;
    }, t.inflateGetHeader = function (e, t) {
      var n;
      return e && e.state ? 0 == (2 & (n = e.state).wrap) ? m : (n.head = t, t.done = !1, _) : m;
    }, t.inflateSetDictionary = function (e, t) {
      var n,
          r = t.length;
      return e && e.state ? 0 !== (n = e.state).wrap && n.mode !== O ? m : n.mode === O && i(1, t, r, 0) !== n.check ? v : ce(e, t, r, r) ? (n.mode = $, b) : (n.havedict = 1, _) : m;
    }, t.inflateInfo = "pako inflate (from Nodeca project)";
  }, function (e, t, n) {
    "use strict";

    e.exports = function (e, t) {
      var n, r, i, a, o, s, l, u, f, h, c, d, _, p, g, m, v, b, y, w, E, k, S, x, T;

      n = e.state, r = e.next_in, x = e.input, i = r + (e.avail_in - 5), a = e.next_out, T = e.output, o = a - (t - e.avail_out), s = a + (e.avail_out - 257), l = n.dmax, u = n.wsize, f = n.whave, h = n.wnext, c = n.window, d = n.hold, _ = n.bits, p = n.lencode, g = n.distcode, m = (1 << n.lenbits) - 1, v = (1 << n.distbits) - 1;

      e: do {
        _ < 15 && (d += x[r++] << _, _ += 8, d += x[r++] << _, _ += 8), b = p[d & m];

        t: for (;;) {
          if (d >>>= y = b >>> 24, _ -= y, 0 === (y = b >>> 16 & 255)) T[a++] = 65535 & b;else {
            if (!(16 & y)) {
              if (0 == (64 & y)) {
                b = p[(65535 & b) + (d & (1 << y) - 1)];
                continue t;
              }

              if (32 & y) {
                n.mode = 12;
                break e;
              }

              e.msg = "invalid literal/length code", n.mode = 30;
              break e;
            }

            w = 65535 & b, (y &= 15) && (_ < y && (d += x[r++] << _, _ += 8), w += d & (1 << y) - 1, d >>>= y, _ -= y), _ < 15 && (d += x[r++] << _, _ += 8, d += x[r++] << _, _ += 8), b = g[d & v];

            n: for (;;) {
              if (d >>>= y = b >>> 24, _ -= y, !(16 & (y = b >>> 16 & 255))) {
                if (0 == (64 & y)) {
                  b = g[(65535 & b) + (d & (1 << y) - 1)];
                  continue n;
                }

                e.msg = "invalid distance code", n.mode = 30;
                break e;
              }

              if (E = 65535 & b, _ < (y &= 15) && (d += x[r++] << _, (_ += 8) < y && (d += x[r++] << _, _ += 8)), (E += d & (1 << y) - 1) > l) {
                e.msg = "invalid distance too far back", n.mode = 30;
                break e;
              }

              if (d >>>= y, _ -= y, E > (y = a - o)) {
                if ((y = E - y) > f && n.sane) {
                  e.msg = "invalid distance too far back", n.mode = 30;
                  break e;
                }

                if (k = 0, S = c, 0 === h) {
                  if (k += u - y, y < w) {
                    w -= y;

                    do {
                      T[a++] = c[k++];
                    } while (--y);

                    k = a - E, S = T;
                  }
                } else if (h < y) {
                  if (k += u + h - y, (y -= h) < w) {
                    w -= y;

                    do {
                      T[a++] = c[k++];
                    } while (--y);

                    if (k = 0, h < w) {
                      w -= y = h;

                      do {
                        T[a++] = c[k++];
                      } while (--y);

                      k = a - E, S = T;
                    }
                  }
                } else if (k += h - y, y < w) {
                  w -= y;

                  do {
                    T[a++] = c[k++];
                  } while (--y);

                  k = a - E, S = T;
                }

                for (; w > 2;) T[a++] = S[k++], T[a++] = S[k++], T[a++] = S[k++], w -= 3;

                w && (T[a++] = S[k++], w > 1 && (T[a++] = S[k++]));
              } else {
                k = a - E;

                do {
                  T[a++] = T[k++], T[a++] = T[k++], T[a++] = T[k++], w -= 3;
                } while (w > 2);

                w && (T[a++] = T[k++], w > 1 && (T[a++] = T[k++]));
              }

              break;
            }
          }
          break;
        }
      } while (r < i && a < s);

      r -= w = _ >> 3, d &= (1 << (_ -= w << 3)) - 1, e.next_in = r, e.next_out = a, e.avail_in = r < i ? i - r + 5 : 5 - (r - i), e.avail_out = a < s ? s - a + 257 : 257 - (a - s), n.hold = d, n.bits = _;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(8),
        i = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
        a = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
        o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
        s = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];

    e.exports = function (e, t, n, l, u, f, h, c) {
      var d,
          _,
          p,
          g,
          m,
          v,
          b,
          y,
          w,
          E = c.bits,
          k = 0,
          S = 0,
          x = 0,
          T = 0,
          A = 0,
          R = 0,
          L = 0,
          I = 0,
          N = 0,
          O = 0,
          B = null,
          M = 0,
          U = new r.Buf16(16),
          D = new r.Buf16(16),
          C = null,
          z = 0;

      for (k = 0; k <= 15; k++) U[k] = 0;

      for (S = 0; S < l; S++) U[t[n + S]]++;

      for (A = E, T = 15; T >= 1 && 0 === U[T]; T--);

      if (A > T && (A = T), 0 === T) return u[f++] = 20971520, u[f++] = 20971520, c.bits = 1, 0;

      for (x = 1; x < T && 0 === U[x]; x++);

      for (A < x && (A = x), I = 1, k = 1; k <= 15; k++) if (I <<= 1, (I -= U[k]) < 0) return -1;

      if (I > 0 && (0 === e || 1 !== T)) return -1;

      for (D[1] = 0, k = 1; k < 15; k++) D[k + 1] = D[k] + U[k];

      for (S = 0; S < l; S++) 0 !== t[n + S] && (h[D[t[n + S]]++] = S);

      if (0 === e ? (B = C = h, v = 19) : 1 === e ? (B = i, M -= 257, C = a, z -= 257, v = 256) : (B = o, C = s, v = -1), O = 0, S = 0, k = x, m = f, R = A, L = 0, p = -1, g = (N = 1 << A) - 1, 1 === e && N > 852 || 2 === e && N > 592) return 1;

      for (;;) {
        b = k - L, h[S] < v ? (y = 0, w = h[S]) : h[S] > v ? (y = C[z + h[S]], w = B[M + h[S]]) : (y = 96, w = 0), d = 1 << k - L, x = _ = 1 << R;

        do {
          u[m + (O >> L) + (_ -= d)] = b << 24 | y << 16 | w | 0;
        } while (0 !== _);

        for (d = 1 << k - 1; O & d;) d >>= 1;

        if (0 !== d ? (O &= d - 1, O += d) : O = 0, S++, 0 == --U[k]) {
          if (k === T) break;
          k = t[n + h[S]];
        }

        if (k > A && (O & g) !== p) {
          for (0 === L && (L = A), m += x, I = 1 << (R = k - L); R + L < T && !((I -= U[R + L]) <= 0);) R++, I <<= 1;

          if (N += 1 << R, 1 === e && N > 852 || 2 === e && N > 592) return 1;
          u[p = O & g] = A << 24 | R << 16 | m - f | 0;
        }
      }

      return 0 !== O && (u[m + O] = k - L << 24 | 64 << 16 | 0), c.bits = A, 0;
    };
  }, function (e, t, n) {
    "use strict";

    e.exports = {
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_BUF_ERROR: -5,
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      Z_BINARY: 0,
      Z_TEXT: 1,
      Z_UNKNOWN: 2,
      Z_DEFLATED: 8
    };
  }, function (e, t, n) {
    "use strict";

    n.r(t);

    var r = n(22),
        i = function (e) {
      var t = "browser";

      function n(e) {
        var t, n, r;

        for (r = e.length; r; r--) t = Math.floor(Math.random() * r), n = e[r - 1], e[r - 1] = e[t], e[t] = n;
      }

      function i(e, n) {
        if ("wechat" !== t) {
          var r = new XMLHttpRequest();
          r.open("POST", e, !0), r.setRequestHeader("Content-type", "application/json; charset=utf-8"), r.send(JSON.stringify(n));
        }
      }

      function a(e) {
        return e._isBuffer = !0, function (e) {
          var t = String.fromCharCode.apply(null, e);
          return decodeURIComponent(escape(t));
        }(Object(r.inflateSync)(e));
      }

      !function () {
        if ("undefined" != typeof navigator) try {
          "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i) && (console.log("Current env is wechat."), t = "wechat");
        } catch (e) {
          console.error(e);
        } else "undefined" != typeof wx && void 0 !== wx.connectSocket && (t = "wechat");
      }(), this.getSDKVersion = function () {
        return "1.4.0";
      }, this.getSDKVersion_int = function () {
        return 10104e5;
      }, this.lbs_url1 = ["https://lbs-1-sig.agora.io", "https://lbs-2-sig.agora.io"], this.lbs_url2 = ["https://lbs-3-sig.agora.io", "https://lbs-4-sig.agora.io"], this.lbs_wx = ["https://lbs-wx.agora.io"], this.rp_url = "https:///wsrp-sig.agora.io/", this.vid = e, this.appid = e;
      var o = this;

      function s(e, t, n) {
        var r = e.split(t, n),
            i = 0;

        for (var a in r) i += t.length + r[a].length;

        return r.push(e.substr(i)), r;
      }

      o.server_urls = [], o.setup_debugging = function (e, t) {
        if ("ap" === e) o.server_urls.push([t, 8001]), o.debugging = !0;else if ("ap_url" === e) o.server_urls.push(t), o.debugging = !0;else {
          if ("env" !== e) return;
          "lbs100" === t && (o.lbs_url1 = ["https://lbs100-1-sig.agora.io", "https://lbs100-2-sig.agora.io"], o.lbs_url2 = ["https://lbs100-3-sig.agora.io", "https://lbs100-4-sig.agora.io"]);
        }
      }, o.setUpDebugging = o.setup_debugging;

      var l = function (r, l, u, f) {
        this.onLoginSuccess = "", this.onLoginFailed = "", this.onLogout = "", this.onInviteReceived = "", this.onMessageInstantReceive = "";

        try {
          "string" != typeof r && (r = JSON.stringify(r));
        } catch (e) {
          return console.error("Invalid account type, should be a string."), void console.error(e);
        }

        this.m_retry_max_time = f || 3e5, this.m_retry_max_count = u || 10, this.m_retry_count = 0, this.m_retry_time_start = Date.now(), this.m_retry_delay = 200, this.m_retry_delay_min = 200, this.m_retry_delay_max = 2e3, this.account = r, this.config_msg_set = 0, this.config_inst_msg_with_msgid = 0, this.debugging = o.debugging, this.m_msgid = 0, this.state = 1, this.line = "", this.uid = 0, this.dbg = !1, this.alive_conn = 2;
        var h = this;
        h.lbs_state = "requesting", h.lbs_state1 = "requesting", h.lbs_state2 = "requesting";
        var c = o.server_urls.slice();
        n(c), h.idx = 0, this.login_start_time = null, this.login_end_time = null, this.lbs_start_time = null, this.lbs_end_time = null, this.ap_start_time = null, this.ap_end_time = null, h.browser = "unknown";

        try {
          h.browser = navigator.userAgent;
        } catch (e) {
          o.isLogging && (o.loggingLevel < 2 && console.warn(e), console.log("This browser does not support navigator.userAgent"));
        }

        h.login_data = {
          event: "login",
          now: "",
          time: "",
          duration: "",
          key: "",
          seq: "",
          result: "",
          account: "",
          browser: h.browser,
          sdk_version: o.getSDKVersion_int(),
          rmc: "",
          rmt: "",
          h1i1: "",
          h1t1: "",
          i2: "",
          i3: "",
          i3_0: "",
          i3_0_ip: "",
          i3_0_port: "",
          i3_1_ip: "",
          step: "",
          t2: "",
          t4: ""
        }, h.v3_msg_set = new Map(), setTimeout(function () {
          var e = Date.now();

          for (var t of h.v3_msg_set.keys()) if (h.v3_msg_set[t]) {
            if (!(e - h.v3_msg_set[t] > 3e5)) break;
            h.v3_msg_set["delete"](t);
          }
        }, 2e3), h.socket = null;

        var d = function () {
          if (o.isLogging && 0 === o.loggingLevel) {
            var e = [];

            for (var t in arguments) e.push(arguments[t]);

            console.log.apply(null, ["Agora sig dbg :"].concat(e));
          }
        },
            _ = function (e) {
          d("Updating the session state to " + e), h.state = e;
        },
            p = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
            g = function (e) {
          return p.test(e[0]) ? "wss://" + (e[0].replace(/\./g, "-") + "-sig-web.agora.io") + ":" + (e[1] + 1) + "/" : e;
        };

        h.logout = function () {
          2 === h.state && h.onLogout ? h.call2("user_logout", {
            line: h.line
          }, function (e, t) {
            h.fire_logout(101), h.socket.close();
          }) : 1 === h.state && (_(0), h.fire_logout(101));
        }, h.fire_login_failed = function (e) {
          try {
            1 === h.state && h.onLoginFailed && h.onLoginFailed(e);
          } catch (e) {
            console.error(e);
          } finally {
            _(0);
          }
        }, h.fire_logout = function (e) {
          e || (e = 0);

          try {
            2 !== h.state && 3 !== h.state || h.onLogout && h.onLogout(e);
          } catch (e) {
            console.error(e);
          } finally {
            _(0);
          }
        }, h.getStatus = function () {
          return h.state;
        };

        var m = function (n, r, i) {
          if ("requesting" == h.lbs_state) {
            var a = r[i];
            "wechat" === t ? function (e, t, n) {
              var r,
                  i = !1;
              const a = wx.request({
                url: e,
                method: "GET",
                header: {
                  "content-type": "application/json"
                },
                success: function (e) {
                  i || (clearTimeout(r), n("", e.data));
                },
                fail: function () {
                  n("request failure");
                }
              });
              r = setTimeout(function () {
                i = !0, a.abort(), n("timeout", "");
              }, t);
            }(a + "/getaddr?vid=" + e, 5e3, function (e, t) {
              if ("request failure" !== e) {
                if (!t.wx_web || t.wx_web && 0 === t.wx_web.length) h.fire_login_failed(100);else if (e) n - 1 > 0 ? m(n - 1, r, (i + 1) % r.length) : h.fire_login_failed(201);else {
                  if ("requesting" != h.lbs_state) return;
                  h.lbs_state = "completed", c.push("wss://" + t.wx_web[0]), b();
                }
              } else h.fire_login_failed(201);
            }) : function (e, t, n) {
              var r = new XMLHttpRequest(),
                  i = !1,
                  a = setTimeout(function () {
                i = !0, r.abort(), n("timeout", "");
              }, t);
              r.open("GET", e), r.onerror = function (e) {
                n("GET request error", e);
              }, r.onreadystatechange = function () {
                4 === r.readyState && (i || (clearTimeout(a), 200 === r.status && n("", r.responseText)));
              }, r.send(null);
            }(a + "/getaddr?vid=" + e, 5e3, function (e, t) {
              if (e) n - 1 > 0 ? m(n - 1, r, (i + 1) % r.length) : (o.lbs_url1 === r ? h.lbs_state1 = "completed" : o.lbs_url2 === r && (h.lbs_state2 = "completed"), "completed" === h.lbs_state1 && "completed" === h.lbs_state2 && h.fire_login_failed(201));else {
                if ("requesting" != h.lbs_state) return;
                h.lbs_state = "completed", c = JSON.parse(t).web, b(), b();
              }
            });
          }
        },
            v = function () {
          if (d("reconnecting...."), Date.now() - h.m_retry_time_start < h.m_retry_max_time && h.m_retry_count < h.m_retry_max_count) h.m_retry_count++, setTimeout(function () {
            h.m_retry_delay = Math.min(h.m_retry_delay_max, 2 * h.m_retry_delay), b();
          }, h.m_retry_delay);else if (1 === h.state) h.fire_login_failed(201);else {
            if (3 !== h.state) return;
            h.fire_logout(102);
          }
        },
            b = function () {
          if ("wechat" === t) {
            if (1 === h.state || 3 === h.state) var n = new function () {
              var e = g(c[h.idx]);
              h.idx = (h.idx + 1) % c.length;
              var t = new wx.connectSocket({
                url: e
              });
              t.state = "CONNECTING", setTimeout(function () {
                if ("CONNECTING" === t.state) try {
                  return void t.close();
                } catch (e) {
                  console.error(e);
                } finally {
                  h.fire_login_failed(201);
                }
              }, 6e3), t.onOpen(function (e) {
                if (0 === h.state) t.close();else if (1 === h.state && null === h.socket || 3 === h.state) for (var r in h.socket = n, t.state = "OPEN", d("on conn open"), h.go_login(), o) t.send({
                  datd: JSON.stringify(o[r])
                });else t.close();
              }), t.onClose(function (e) {
                "OPEN" === t.state && 2 === h.state ? (d("on conn close"), _(3), h.line && (h.line = ""), h.m_retry_count = 0, h.m_retry_delay = h.m_retry_delay_min, h.m_retry_time_start = Date.now(), v()) : 1 === h.state ? h.fire_login_failed(201) : "CONNECTING" === t.state && b();
              }), t.onMessage(function (e) {
                var t;
                if (e.data instanceof ArrayBuffer) try {
                  t = a(new Uint8Array(e.data));
                } catch (e) {
                  console.error(e);
                } else t = e.data;
                d("Received message ", t);
                var n = JSON.parse(t),
                    r = n[0];
                if ("close" === r && 1 === h.state) h.fire_login_failed(201);else if ("multi" == r) for (var o = 0; o < n[1].length; o++) {
                  var s = n[1][o];
                  i(s[0], s[1]);
                } else i(n[0], n[1]);
              }), t.onError(function (e) {
                d("on conn error"), t.state = "CLOSED", 2 === h.state && h.socket === n ? h.fire_logout(102) : 1 === h.state ? h.fire_login_failed(201) : 3 === h.state && (h.line && (h.line = ""), console.log("On error, going to reconnect"), 0 === h.m_retry_count && (h.m_retry_delay = h.m_retry_delay_min), h.m_retry_time_start = Date.now(), v());
              });

              var r = {},
                  i = function (e, t) {
                e in r && r[e](t);
              },
                  o = [];

              this.on = function (e, t) {
                r[e] = t;
              }, this.emit = function (e, n) {
                "OPEN" === t.state ? (d("Sending ", [e, n]), t.send({
                  data: JSON.stringify([e, n])
                })) : o.push([e, n]);
              }, this.close = function () {
                t.close();
              };
            }();
          } else if (1 === h.state || 3 === h.state) n = new function () {
            var e = g(c[h.idx]);
            console.log(e), h.idx = (h.idx + 1) % c.length;

            try {
              var t = new WebSocket(e);
              t.binaryType = "arraybuffer", t.state = "CONNECTING", setTimeout(function () {
                t.readyState !== t.CONNECTING || t.close();
              }, 6e3), t.onopen = function (e) {
                if (0 === h.state) t.close();else if (1 === h.state && null === h.socket || 3 === h.state) for (var r in h.socket = n, t.state = "OPEN", d("on conn open"), h.go_login(), o) t.send(JSON.stringify(o[r]));else t.close();
              }, t.onclose = function (e) {
                "OPEN" === t.state && 2 === h.state ? (d("on conn close"), _(3), h.line && (h.line = ""), h.m_retry_count = 0, h.m_retry_delay = h.m_retry_delay_min, h.m_retry_time_start = Date.now(), v()) : 1 === h.state ? 2 === h.alive_conn ? h.alive_conn -= 1 : 1 === h.alive_conn && h.onLoginFailed && h.fire_login_failed(201) : "CONNECTING" === t.state && b();
              }, t.onmessage = function (e) {
                var t;
                if (e.data instanceof ArrayBuffer) try {
                  t = a(new Uint8Array(e.data));
                } catch (e) {
                  console.error(e);
                } else t = e.data;
                d("Received message ", t);
                var n = JSON.parse(t),
                    r = n[0];
                if ("close" === r && 1 === h.state) h.onLoginFailed && h.fire_login_failed(201);else if ("multi" == r) for (var o = 0; o < n[1].length; o++) {
                  var s = n[1][o];
                  i(s[0], s[1]);
                } else i(n[0], n[1]);
              }, t.onerror = function (e) {
                t.state = "CLOSED", d("on conn error"), navigator.userAgent.match(/(iPad|iPhone|iPod|Edge)/g) && (2 === h.state && _(3), h.line && (h.line = "")), 2 === h.state && h.socket === n ? h.fire_logout(102) : 1 === h.state ? h.fire_login_failed(201) : 3 === h.state && (console.log("On error, going to reconnect"), 0 === h.m_retry_count && (h.m_retry_delay = h.m_retry_delay_min), h.m_retry_time_start = Date.now(), v());
              };

              var r = {},
                  i = function (e, t) {
                e in r && r[e](t);
              },
                  o = [];

              this.on = function (e, t) {
                r[e] = t;
              }, this.emit = function (e, n) {
                0 !== t.readyState ? (d("Sending ", [e, n]), t.send(JSON.stringify([e, n]))) : o.push([e, n]);
              }, this.close = function () {
                t.close();
              };
            } catch (e) {
              3 === h.state && (console.log("caught an error"), h.m_retry_count += 1, v());
            }
          }();

          var u = 0,
              f = function () {
            setTimeout(function () {
              2 == h.state && (d("send ping", ++u), h.socket.emit("ping", u), f());
            }, 1e4);
          };

          h.go_login = function () {
            "" === h.line ? (h.socket.emit("login", {
              vid: e,
              account: r,
              uid: 0,
              token: l,
              device: "websdk",
              ip: ""
            }), h.login_data.account = r, h.login_data.vid = e, h.login_data.key = l, h.socket.on("login_ret", function (e) {
              var n = e[0],
                  r = JSON.parse(e[1]);

              if (h.login_data.duration = Date.now() - h.login_data.time, d("login ret", n, r), n || "ok" !== r.result) {
                "" === n && (n = r.reason), h.login_data.now = Date.now(), h.login_data.result = "failed";

                try {
                  if (h.onLoginFailed) {
                    var a = "kick" === n ? 207 : "TokenErrorExpired" === n ? 204 : n.startsWith("TokenError") ? 206 : n.startsWith("wrong account") ? 209 : 201;
                    h.fire_login_failed(a);
                  }
                } catch (e) {
                  console.error(e);
                } finally {
                  i(o.rp_url, h.login_data);
                }
              } else {
                h.config_msg_set = r.config_msg_set || 0, h.config_inst_msg_with_msgid = r.config_inst_msg_with_msgid || 0, h.uid = r.uid, h.line = r.line, _(2), "wechat" !== t && h.socket.emit("set_flag", {
                  binary: 1
                }), d("send ping", ++u), h.socket.emit("ping", u), f(), L();

                try {
                  h.login_data.now = Date.now(), h.login_data.result = "success", h.onLoginSuccess && h.onLoginSuccess(h.uid);
                } catch (a) {
                  console.error(a);
                } finally {
                  i(o.rp_url, h.login_data), A();
                }
              }
            })) : h.socket.emit("line_login", {
              line: h.line
            });
            var n = 0,
                a = {},
                c = {};
            h.call2 = function (e, t, r) {
              a[++n] = [e, t, r], d("call ", [e, n, t]), h.socket.emit("call2", [e, n, t]);
            }, h.socket.on("call2-ret", function (e) {
              var t = e[0],
                  n = e[1],
                  r = e[2];

              if (t in a) {
                var i = a[t][2];
                if ("" === n) try {
                  "ok" != (r = JSON.parse(r)).result && (n = r.data.result);
                } catch (e) {
                  n = "wrong resp:" + r;
                }
                i && i(n, r);
              }
            });

            var p,
                g = function (e, t) {
              return "" === e;
            },
                m = function (e) {
              if (e.startsWith("msg-v2 ")) {
                if (7 === (t = s(e, " ", 6)).length) return [t[1], t[4], t[6]];
              } else if (e.startsWith("msg-v3 ")) {
                var t;
                if (8 === (t = s(e, " ", 7)).length) return h.v3_msg_set.get(t[1]) ? null : (h.v3_msg_set.set(t[1], Date.now()), [t[2], t[5], t[7]]);
              }

              return null;
            };

            h.socket.on("pong", function (e) {
              d("recv pong");
            }), h.socket.on("close", function (e) {
              h.fire_logout(102), h.socket.close();
            }), h.socket.on("_close", function (e) {
              h.fire_logout(102);
            }), h.socket.on("kick", function (e) {
              h.fire_logout(103);
            });

            var v = function (e) {
              if (e) {
                var t = e,
                    n = t[0],
                    r = t[1],
                    i = t[2];
                if ("instant" === r) try {
                  h.onMessageInstantReceive && h.onMessageInstantReceive(n, 0, i);
                } catch (e) {
                  console.error(e);
                }

                if (r.startsWith("voip_")) {
                  var a,
                      o = JSON.parse(i),
                      s = o.channel,
                      l = o.peer,
                      u = o.extra;
                  if ("voip_invite" === r) a = new I(s, l, u), h.call2("voip_invite_ack", {
                    line: h.line,
                    channelName: s,
                    peer: l,
                    extra: ""
                  });else if (!(a = c[s + l])) return;
                  if ("voip_invite" === r) try {
                    h.onInviteReceived && h.onInviteReceived(a);
                  } catch (e) {
                    console.error(e);
                  }
                  if ("voip_invite_ack" === r) try {
                    a.onInviteReceivedByPeer && a.onInviteReceivedByPeer(u);
                  } catch (e) {
                    console.error(e);
                  }
                  if ("voip_invite_accept" === r) try {
                    a.onInviteAcceptedByPeer && a.onInviteAcceptedByPeer(u);
                  } catch (e) {
                    console.error(e);
                  }
                  if ("voip_invite_refuse" === r) try {
                    a.onInviteRefusedByPeer && a.onInviteRefusedByPeer(u);
                  } catch (e) {
                    console.error(e);
                  }
                  if ("voip_invite_failed" === r) try {
                    a.onInviteFailed && a.onInviteFailed(u);
                  } catch (e) {
                    console.error(e);
                  }
                  if ("voip_invite_bye" === r) try {
                    a.onInviteEndByPeer && a.onInviteEndByPeer(u);
                  } catch (e) {
                    console.error(e);
                  }
                  if ("voip_invite_msg" === r) try {
                    a.onInviteMsg && a.onInviteMsg(u);
                  } catch (e) {
                    console.error(e);
                  }
                }
              }
            },
                b = function () {
              return Date.now();
            },
                y = 0,
                w = 0,
                E = 0,
                k = 0,
                S = !1,
                x = [],
                T = 0,
                A = function () {
              S || (S = !0, T = 0, 0 === h.config_msg_set ? h.call2("user_getmsg", {
                line: h.line,
                ver_clear: y,
                max: 30
              }, function (e, t) {
                if ("" === e) {
                  var n = t,
                      r = y;

                  for (var i in E = parseInt(n.ver_clear), y = Math.max(E, r), n.msgs) {
                    var a = n.msgs[i][0],
                        o = n.msgs[i][1];
                    a >= y + 1 && (v(m(o)), y = a);
                  }

                  (30 === n.msgs.length || y < w) && A(), b();
                }

                S = !1, k = b();
              }) : 1 === h.config_msg_set && h.call2("user_getmsg2", {
                line: h.line,
                clear_msgs: x,
                max: 30
              }, function (e, t) {
                if ("" === e) {
                  for (var n in x = [], t.msgs) {
                    t.msgs[n][0];
                    var r = t.msgs[n][1];
                    v(m(r));
                  }

                  t.msgs.length >= 30 && A(), b();
                }

                S = !1, k = b();
              }));
            },
                R = function () {
              0 === h.config_msg_set ? k = b() : 1 === h.config_msg_set && 0 === T && (T = b() + 500);
            },
                L = function () {
              setTimeout(function () {
                if (0 !== h.state) {
                  if (2 === h.state) {
                    var e = b();
                    0 === h.config_msg_set ? E < y && e - k > 1e3 ? A() : e - k >= 6e4 && A() : 1 === h.config_msg_set && x.length > 0 && e > T && T > 0 && A();
                  }

                  L();
                }
              }, 100);
            };

            h.socket.on("notify", function (e) {
              d("recv notify ", e), "string" == typeof e && (e = (e = s(e, " ", 2)).slice(1));
              var t = e[0];

              if ("channel2" === t) {
                var n = e[1],
                    r = e[2];
                if (0 === h.config_msg_set && 0 !== p.m_channel_msgid && p.m_channel_msgid + 1 > r) return void d("ignore channel msg", n, r, p.m_channel_msgid);
                p.m_channel_msgid = r;
                var i = m(e[3]);

                if (i) {
                  i[0];
                  var a = i[1],
                      o = i[2],
                      l = JSON.parse(o);
                  if ("channel_msg" === a) try {
                    p.onMessageChannelReceive && p.onMessageChannelReceive(l.account, l.uid, l.msg);
                  } catch (e) {
                    console.error(e);
                  }
                  if ("channel_user_join" === a) try {
                    p.onChannelUserJoined && p.onChannelUserJoined(l.account, l.uid);
                  } catch (e) {
                    console.error(e);
                  }
                  if ("channel_user_leave" === a) try {
                    p.onChannelUserLeaved && p.onChannelUserLeaved(l.account, l.uid);
                  } catch (e) {
                    console.error(e);
                  }
                  if ("channel_attr_update" === a) try {
                    p.onChannelAttrUpdated && p.onChannelAttrUpdated(l.name, l.value, l.type);
                  } catch (e) {
                    console.error(e);
                  }
                }
              }

              if ("msg" === t && (w = e[1], A()), "recvmsg" === t) {
                var u = JSON.parse(e[1]),
                    f = u[0],
                    c = u[1];
                f === y + 1 ? (v(m(c)), y = f, R()) : (w = f, A());
              }

              if ("recvmsg_by_msgid" === t) {
                r = s(e[1], " ", 7)[1];
                x.push(r), v(m(e[1])), R();
              }
            }), h.messageInstantSend = function (e, t, n) {
              var r = {
                line: h.line,
                peer: e,
                flag: "v1:E:3600",
                t: "instant",
                content: t
              };

              if (1 === h.config_inst_msg_with_msgid) {
                var i = null;
                "string" == typeof t && (i = JSON.parse(t).msgid), r.messageID = i || b() % 1e6 + h.m_msgid++ % 1e6;
              }

              h.call2("user_sendmsg", r, function (e, t) {
                n && n(!g(e));
              });
            }, h.invoke = function (e, t, n) {
              if (e.startsWith("io.agora.signal.")) {
                var r = e.split(".")[3];
                t.line = h.line, h.call2(r, t, function (e, t) {
                  n && n(e, t);
                });
              }
            };

            var I = function (e, t, n) {
              this.onInviteReceivedByPeer = "", this.onInviteAcceptedByPeer = "", this.onInviteRefusedByPeer = "", this.onInviteFailed = "", this.onInviteEndByPeer = "", this.onInviteEndByMyself = "", this.onInviteMsg = "";
              var r = this;
              this.channelName = e, this.peer = t, this.extra = n, c[e + t] = r, this.channelInviteUser2 = function () {
                n = n || "", h.call2("voip_invite", {
                  line: h.line,
                  channelName: e,
                  peer: t,
                  extra: n
                }, function (e, t) {
                  if (g(e)) ;else try {
                    r.onInviteFailed(e);
                  } catch (e) {
                    console.error(e);
                  }
                });
              }, this.channelInviteAccept = function (n) {
                n = n || "", h.call2("voip_invite_accept", {
                  line: h.line,
                  channelName: e,
                  peer: t,
                  extra: n
                });
              }, this.channelInviteRefuse = function (n) {
                n = n || "", h.call2("voip_invite_refuse", {
                  line: h.line,
                  channelName: e,
                  peer: t,
                  extra: n
                });
              }, this.channelInviteDTMF = function (n) {
                h.call2("voip_invite_msg", {
                  line: h.line,
                  channelName: e,
                  peer: t,
                  extra: JSON.stringify({
                    msgtype: "dtmf",
                    msgdata: n
                  })
                });
              }, this.channelInviteEnd = function (n) {
                n = n || "", h.call2("voip_invite_bye", {
                  line: h.line,
                  channelName: e,
                  peer: t,
                  extra: n
                });

                try {
                  r.onInviteEndByMyself && r.onInviteEndByMyself("");
                } catch (e) {
                  console.error(e);
                }
              };
            };

            h.channelInviteUser2 = function (e, t, n) {
              var r = new I(e, t, n);
              return r.channelInviteUser2(), r;
            }, h.channelJoin = function (e) {
              try {
                "string" != typeof e && (e = JSON.stringify(e));
              } catch (e) {
                return console.error("Invalid channel name type, should be a string."), void console.error(e);
              }

              if (2 == h.state) return p = new function () {
                this.onChannelJoined = "", this.onChannelJoinFailed = "", this.onChannelLeaved = "", this.onChannelUserList = "", this.onChannelUserJoined = "", this.onChannelUserLeaved = "", this.onChannelUserList = "", this.onChannelAttrUpdated = "", this.onMessageChannelReceive = "", this.name = e, this.state = "joining", this.m_channel_msgid = 0, this.messageChannelSend = function (t, n) {
                  var r = {
                    line: h.line,
                    name: e,
                    msg: t
                  };

                  if (1 === h.config_inst_msg_with_msgid) {
                    var i = null;
                    "string" == typeof t && (i = JSON.parse(t).msgid), r.msgID = i || b() % 1e6 + h.m_msgid++ % 1e6;
                  }

                  h.call2("channel_sendmsg", r, function (e, t) {
                    n && n();
                  });
                }, this.channelLeave = function (t) {
                  h.call2("channel_leave", {
                    line: h.line,
                    name: e
                  }, function (e, n) {
                    if (p.state = "leaved", t) t();else try {
                      p.onChannelLeaved && p.onChannelLeaved(0);
                    } catch (e) {
                      console.error(e);
                    }
                  });
                }, this.channelSetAttr = function (t, n, r) {
                  h.call2("channel_set_attr", {
                    line: h.line,
                    channel: e,
                    name: t,
                    value: n
                  }, function (e, t) {
                    r && r();
                  });
                }, this.channelDelAttr = function (t, n) {
                  h.call2("channel_del_attr", {
                    line: h.line,
                    channel: e,
                    name: t
                  }, function (e, t) {
                    n && n();
                  });
                }, this.channelClearAttr = function (t) {
                  h.call2("channel_clear_attr", {
                    line: h.line,
                    channel: e
                  }, function (e, n) {
                    t && t();
                  });
                };
              }(), h.call2("channel_join", {
                line: h.line,
                name: e
              }, function (e, t) {
                if ("" === e) {
                  p.state = "joined";

                  try {
                    p.onChannelJoined && p.onChannelJoined();
                  } catch (e) {
                    console.error(e);
                  }

                  var n = t;

                  try {
                    p.onChannelUserList && p.onChannelUserList(n.list);
                  } catch (e) {
                    console.error(e);
                  }

                  try {
                    if (p.onChannelAttrUpdated) for (var r in n.attrs) p.onChannelAttrUpdated(r, n.attrs[r], "update");
                  } catch (e) {
                    console.error(e);
                  }
                } else try {
                  p.onChannelJoinFailed && p.onChannelJoinFailed(e);
                } catch (e) {
                  console.error(e);
                }
              }), p;
              d("You should log in first.");
            };
          };
        };

        h.socket = null, h.debugging ? (h.lbs_state = "completed", h.login_data.time = Date.now(), b()) : "wechat" === t ? m(2, o.lbs_wx, 0) : (n(o.lbs_url1), n(o.lbs_url2), m(2, o.lbs_url1, 0), m(2, o.lbs_url2, 0));
      };

      this.login = function (e, t, n, r) {
        return new l(e, t, n, r);
      };

      var u = {
        DEBUG: 0,
        WARNING: 1,
        INFO: 2
      };

      this.setDoLog = function (e = !1, t = "DEBUG") {
        t && "DEBUG" !== t && "WARNING" !== t && "INFO" !== t ? console.log("Only accept DEBUG / WARNING / INFO as logging level values. The default level is INFO") : (o.isLogging = e, o.loggingLevel = u[t]);
      };
    };

    function a(e) {
      return new i(e);
    }

    n.d(t, "default", function () {
      return a;
    });
  }])["default"];
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(109)(module)))

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
__webpack_require__(27)({ target: 'URL', proto: true, enumerable: true }, {
  toJSON: function toJSON() {
    return URL.prototype.toString.call(this);
  }
});


/***/ }),
/* 111 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 118 */,
/* 119 */,
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.3.0.0@core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/.3.0.0@core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/.3.0.0@core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(26);

// EXTERNAL MODULE: ./dev/less/anim.less
var anim = __webpack_require__(83);

// EXTERNAL MODULE: ./dev/less/common.less
var common = __webpack_require__(84);

// EXTERNAL MODULE: ./dev/less/main.less
var main = __webpack_require__(95);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(5);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(40);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(10);

// EXTERNAL MODULE: ./dev/scripts/reducers/index.js + 4 modules
var reducers = __webpack_require__(58);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(23);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(87);

// EXTERNAL MODULE: ./dev/scripts/actions/index.js + 1 modules
var actions = __webpack_require__(1);

// EXTERNAL MODULE: ./dev/scripts/network.js
var network = __webpack_require__(7);

// EXTERNAL MODULE: ./dev/scripts/context.js
var context = __webpack_require__(4);

// EXTERNAL MODULE: external "electron"
var external_electron_ = __webpack_require__(6);

// EXTERNAL MODULE: ./env.js
var env = __webpack_require__(14);

// CONCATENATED MODULE: ./dev/scripts/containers/login.page.js

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }









var _ref =
/*#__PURE__*/
_jsx("div", {
  className: "title"
}, void 0, "\u767B\u5F55");

class login_page_Login extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      password: "",
      dentity: env["TEACHER"] ? 2 : 1,
      dentity_list: [{
        id: 2,
        name: '教师'
      }, {
        id: 3,
        name: '班主任'
      }]
    };

    if (env["TEACHER"]) {
      this.props.showLoading("正在获取身份配置...");
      network["default"].getLoginDentities().then(res => {
        if (res && res.dentities) {
          this.setState({
            dentity_list: res.dentities
          });
        }

        this.props.hideLoading();
      }, () => {
        this.props.hideLoading();
      }).done();
    }
  }

  handleChange(name, event) {
    let value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  onLogin() {
    let mobile = this.state.mobile;
    let password = this.state.password;
    let dentity = this.state.dentity;

    if (!mobile || !password) {
      this.props.alert({
        content: "请输入手机号或密码！"
      });
      return;
    }

    this.props.showLoading("正在登录...");
    network["default"].login({
      mobile,
      password,
      dentity
    }).then(res => {
      network["default"].token = res.token;
      network["default"].sigtoken = res.signaling_token;
      context["default"].user = res.user;
      this.props.hideLoading();
      this.props.loginSuccess(res.user);
    }, () => {
      this.props.hideLoading();
    }).done();
  }

  inputOnBlur() {
    external_electron_["ipcRenderer"].send('on-hotkey');
  }

  inputOnFocus() {
    external_electron_["ipcRenderer"].send('off-hotkey');
  }

  render() {
    return _jsx("div", {
      className: "full-h"
    }, void 0, _jsx("div", {
      className: "page login-page"
    }, void 0, _jsx("div", {
      className: 'login-box' + (this.state.dentity == 1 ? '' : ' with-dentity')
    }, void 0, _ref, this.state.dentity == 1 ? '' : _jsx("div", {
      className: "input-box login-radio"
    }, void 0, this.state.dentity_list.map((element, index) => {
      return _jsx("label", {}, `dentity-element${element.id}`, _jsx("input", {
        type: "radio",
        name: "dentity",
        value: element.id,
        checked: this.state.dentity == element.id ? 'checked' : false,
        onChange: event => {
          this.handleChange("dentity", event);
        }
      }), "\xA0", element.name);
    })), _jsx("div", {
      className: "input-control"
    }, void 0, _jsx("div", {
      className: "input-box"
    }, void 0, _jsx("input", {
      type: "number",
      onChange: event => {
        this.handleChange("mobile", event);
      },
      name: "mobile",
      value: this.state.mobile,
      placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
      onBlur: this.inputOnBlur,
      onFocus: this.inputOnFocus
    }))), _jsx("div", {
      className: "input-control"
    }, void 0, _jsx("div", {
      className: "input-box"
    }, void 0, _jsx("input", {
      type: "password",
      onChange: event => {
        this.handleChange("password", event);
      },
      name: "password",
      value: this.state.password,
      placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
      onBlur: this.inputOnBlur,
      onFocus: this.inputOnFocus
    }))), _jsx("button", {
      className: "login-btn",
      onClick: () => {
        this.onLogin();
      }
    }, void 0, "\u767B\u5F55"))));
  }

}

const mapDispatchToProps = dispatch => ({
  loginSuccess: account => dispatch(Object(actions["e" /* loginSuccess */])(account)),
  showLoading: message => dispatch(Object(actions["X" /* showLoading */])(message)),
  hideLoading: () => dispatch(Object(actions["d" /* hideLoading */])()),
  alert: configure => {
    dispatch(Object(actions["a" /* alert */])(configure));
  }
});

/* harmony default export */ var login_page = (Object(external_react_redux_["connect"])(null, mapDispatchToProps)(login_page_Login));
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(28);

// CONCATENATED MODULE: ./dev/scripts/components/calendar.js

var calendar_REACT_ELEMENT_TYPE;

function calendar_jsx(type, props, key, children) { if (!calendar_REACT_ELEMENT_TYPE) { calendar_REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: calendar_REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }




var calendar_ref =
/*#__PURE__*/
calendar_jsx("div", {
  className: "calendar-head cal-bd"
}, void 0, calendar_jsx("span", {
  className: "highlight"
}, void 0, "\u65E5"), calendar_jsx("span", {}, void 0, "\u4E00"), calendar_jsx("span", {}, void 0, "\u4E8C"), calendar_jsx("span", {}, void 0, "\u4E09"), calendar_jsx("span", {}, void 0, "\u56DB"), calendar_jsx("span", {}, void 0, "\u4E94"), calendar_jsx("span", {
  className: "highlight"
}, void 0, "\u516D"));

class calendar_Calendar extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.$now = new Date();
    this.$week_txt = ['日', '一', '二', '三', '四', '五', '六'];
    this.$data = {};
    this.state = {};
  }

  componentDidMount() {
    this.__init();

    this.__calculate_month();

    this.__on_pick_date();
  }

  __fn_(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
  }

  __is_sameday(prev, next) {
    return prev.year == next.year && prev.month == next.month && prev.day == next.day;
  }

  __is_small_eq_than(source, target) {
    source = new Date(source.year, source.month - 1, source.day);
    target = new Date(target.year, target.month - 1, target.day);
    return source.getTime() - target.getTime() >= 0;
  }

  __date_to_obj(date) {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      week: date.getDay()
    };
  }

  __is_disabled(date) {
    for (let j = 0, len = this.$data.disabled.length; j < len; j++) {
      if (this.__is_sameday(this.$data.disabled[j], date)) {
        return true;
      }
    }
  }

  __is_highlighted(date) {
    for (let j = 0, len = this.$data.highlighted.length; j < len; j++) {
      if (this.__is_sameday(this.$data.highlighted[j], date)) {
        return true;
      }
    }
  }

  __init() {
    let data = {};
    data.today = this.__date_to_obj(this.$now);
    data.disabled = [];
    data.highlighted = [];
    data.cursor = data.today;
    data.validDays = 365;
    this.$data = data;
    this.props.onChangeMonth(data.cursor);
  }

  __calculate_month() {
    if (this.$data.choosed && this.__is_disabled(this.$data.choosed)) {
      this.$data.choosed = null;
      this.$data.choosed_txt = null;
    }

    let cursor = this.$data.cursor;
    cursor = this.__date_to_obj(new Date(cursor.year, cursor.month - 1, 1));
    let first = 1 - cursor.week;
    let lastDay = 28,
        temp = cursor.month;

    while (temp == cursor.month) {
      lastDay++;
      temp = new Date(cursor.year, cursor.month - 1, lastDay).getMonth() + 1;
    }

    lastDay--;
    let lastWeek = new Date(cursor.year, cursor.month - 1, lastDay).getDay();
    let last = lastDay + 6 - lastWeek,
        result = [];

    for (let i = first; i <= last; i++) {
      let data = this.__date_to_obj(new Date(cursor.year, cursor.month - 1, i));

      let disabled = this.__is_disabled(data);

      if (!disabled) {
        if (!this.$data.choosed) {
          if (this.__is_sameday(data, this.$data.today)) {
            data.choosed = true;
            this.$data.choosed = data;
          }
        } else {
          if (this.__is_sameday(data, this.$data.choosed)) {
            data.choosed = true;
          }
        }

        data.highlighted = this.__is_highlighted(data);
      }

      data.disabled = disabled;

      if (data.month == cursor.month) {
        result.push(data);
      } else {
        result.push({});
      }
    }

    this.$data.days = result;
    let rows = [],
        current = [];
    result.forEach((item, index) => {
      if (index % 7 == 0 && index != 0) {
        rows.push(current);
        current = [];
      }

      item.index = index;
      current.push(item);
    });
    rows.push(current);
    this.$data.rows = rows;
    this.setState(this.$data);
  }

  __on_pick_date() {
    let choosed = this.$data.choosed;

    if (choosed) {
      let choosed_txt = {
        year: choosed.year,
        month: this.__fn_(choosed.month),
        day: this.__fn_(choosed.day),
        week: this.$week_txt[choosed.week]
      };
      this.props.onPickDate({
        choosed,
        choosed_txt
      });
    }
  }

  strToDate(str) {
    let parsed = str.split(/[-: ]/);
    parsed = parsed.concat([0, 0, 0, 0, 0, 0]);
    return new Date(parsed[0], parsed[1] - 1, parsed[2], parsed[3], parsed[4], parsed[5]);
  }

  setChoosed(obj) {
    this.$data.choosed = obj;
    this.$data.days.forEach((item, index) => {
      if (item.choosed) {
        item.choosed = false;
      }

      if (this.__is_sameday(item, obj)) {
        item.choosed = true;
      }
    });
    this.setState(this.$data);
  }

  onNextMonth() {
    let cursor = this.$data.cursor;
    cursor = this.__date_to_obj(new Date(cursor.year, cursor.month, 1));
    this.$data.cursor = cursor;

    this.__calculate_month();

    this.props.onChangeMonth(cursor);
  }

  onPrevMonth() {
    let cursor = this.state.cursor;
    cursor = this.__date_to_obj(new Date(cursor.year, cursor.month - 2, 1));
    this.$data.cursor = cursor;

    this.__calculate_month();

    this.props.onChangeMonth(cursor);
  }

  setDisabled(dates) {
    let result = [];
    dates.forEach(item => {
      let date = this.__date_to_obj(this.strToDate(item));

      result.push(date);
    });
    this.$data.disabled = result;

    this.__calculate_month();
  }

  setHighlighted(dates) {
    let result = [];
    dates.forEach(item => {
      let date = this.__date_to_obj(this.strToDate(item));

      result.push(date);
    });
    this.$data.highlighted = result;

    this.__calculate_month();
  }

  onPickDate(index) {
    this.setChoosed(this.state.days[index]);

    this.__on_pick_date();
  }

  render() {
    return this.state.cursor ? calendar_jsx("div", {
      id: "calendar-box",
      className: "calendar-box"
    }, void 0, calendar_jsx("div", {
      className: "calendar-control cal-bd"
    }, void 0, calendar_jsx("div", {
      className: "control-l",
      onClick: this.onPrevMonth.bind(this)
    }, void 0, calendar_jsx("img", {
      src: __webpack_require__(88)
    })), calendar_jsx("div", {
      className: "control-c"
    }, void 0, this.state.cursor.month, "\u6708 ", this.state.cursor.year, "\u5E74"), calendar_jsx("div", {
      className: "control-r",
      onClick: this.onNextMonth.bind(this)
    }, void 0, calendar_jsx("img", {
      src: __webpack_require__(88)
    }))), calendar_ref, this.state.rows.map((row, rowIndex) => calendar_jsx("div", {
      className: "calendar-row cal-bd"
    }, rowIndex, row.map((item, index) => item.disabled ? calendar_jsx("div", {
      className: "calendar-col disabled"
    }, index, item.day) : item.choosed ? calendar_jsx("div", {
      className: "calendar-col selected"
    }, index, item.day) : item.highlighted ? calendar_jsx("div", {
      className: "calendar-col highlighted",
      onClick: () => {
        let _index = rowIndex * row.length + index;

        this.onPickDate(_index);
      }
    }, index, item.day) : !item.day ? calendar_jsx("div", {
      className: "calendar-col"
    }, index) : calendar_jsx("div", {
      className: "calendar-col",
      onClick: () => {
        let _index = rowIndex * row.length + index;

        this.onPickDate(_index);
      }
    }, index, item.day))))) : "";
  }

}

/* harmony default export */ var components_calendar = (calendar_Calendar);
// EXTERNAL MODULE: ./dev/less/download.less
var download = __webpack_require__(98);

// EXTERNAL MODULE: ./dev/const.js
var dev_const = __webpack_require__(2);

// CONCATENATED MODULE: ./dev/scripts/components/download.js

var download_REACT_ELEMENT_TYPE;

function download_jsx(type, props, key, children) { if (!download_REACT_ELEMENT_TYPE) { download_REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: download_REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }









class download_Download extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.$loading_files = [];
    this.$all_file_loaded = true;
    this.$session_complete = false;
    this.$webview = external_react_default.a.createRef();
  }

  __add_loaded_file(url) {
    let index = this.$loading_files.indexOf(url);

    if (index != -1) {
      this.$loading_files.splice(index, 1);
    }

    if (this.$loading_files.length == 0) {
      this.$all_file_loaded = true;

      this.__on_complete();
    }
  }

  __on_complete() {
    if (this.$all_file_loaded && this.$session_complete) {
      this.props.complete();
    }
  }

  componentDidMount() {
    context["default"].detector.uncheck();

    this.$downloaded_handler = (event, url, file) => {
      context["default"].addDownloaded(url, file);

      this.__add_loaded_file(url);
    };

    external_electron_["ipcRenderer"].on("DOWNLOADED", this.$downloaded_handler);

    this.$download_error_handler = (event, url) => {
      this.__add_loaded_file(url);
    };

    external_electron_["ipcRenderer"].on("DOWNLOADERROR", this.$download_error_handler);
    this.$webview.current.addEventListener("dom-ready", () => {
      if (TC_DEBUG) {
        this.$webview.current.openDevTools();
      }

      this.$webview.current.send("userinfo", this.props.user);
    });
    this.$webview.current.addEventListener('ipc-message', event => {
      if (event.channel == "completed") {
        this.$session_complete = true;

        this.__on_complete();
      } else if (event.channel == "loadsound") {
        this.$all_file_loaded = false;
        this.$loading_files.push(event.args[0]);
        external_electron_["ipcRenderer"].send("DOWNLOAD", event.args[0]);
      }
    });
    console.log("download mount");
  }

  componentWillUnmount() {
    context["default"].detector.check();
    this.$webview.current.loadURL("_blank");
    external_electron_["ipcRenderer"].removeListener("DOWNLOADED", this.$downloaded_handler);
    external_electron_["ipcRenderer"].removeListener("DOWNLOADERROR", this.$download_error_handler);
    console.log("download unmount");
  }

  render() {
    let prefix;

    if (env["DEBUG"]) {
      prefix = "http://localhost:3000";
    } else if (env["TEST"]) {
      prefix = dev_const["default"].TEST_URL;
    } else {
      prefix = dev_const["default"].ONLINE_URL;
    }

    return download_jsx("div", {}, void 0, external_react_default.a.createElement("webview", {
      ref: this.$webview,
      className: "download-webview",
      nodeintegration: "true",
      src: `${prefix}/app/downloader.html?lesson=${this.props.name}&t=${new Date().getTime()}`,
      partition: "persist:kecheng"
    }));
  }

}

/* harmony default export */ var components_download = (download_Download);
// EXTERNAL MODULE: ./node_modules/.3.0.0@core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(85);

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(3);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// CONCATENATED MODULE: ./dev/scripts/components/student-head.js

var student_head_REACT_ELEMENT_TYPE;

function student_head_jsx(type, props, key, children) { if (!student_head_REACT_ELEMENT_TYPE) { student_head_REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: student_head_REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }





var student_head_ref =
/*#__PURE__*/
student_head_jsx("div", {
  className: "btn-icon"
}, void 0, student_head_jsx("div", {
  className: "icon"
}));

var _ref2 =
/*#__PURE__*/
student_head_jsx("span", {
  className: "btn-name"
}, void 0, "\u8BB2\u53F0");

var _ref3 =
/*#__PURE__*/
student_head_jsx("div", {
  className: "btn-icon"
}, void 0, student_head_jsx("div", {
  className: "icon"
}));

var _ref4 =
/*#__PURE__*/
student_head_jsx("span", {
  className: "btn-name"
}, void 0, "\u793C\u7269");

var _ref5 =
/*#__PURE__*/
student_head_jsx("div", {
  className: "btn-icon"
}, void 0, student_head_jsx("div", {
  className: "icon"
}));

var _ref6 =
/*#__PURE__*/
student_head_jsx("span", {
  className: "btn-name"
}, void 0, "\u9759\u97F3");

var _ref7 =
/*#__PURE__*/
student_head_jsx("div", {
  className: "btn-icon"
}, void 0, student_head_jsx("div", {
  className: "icon"
}));

var _ref8 =
/*#__PURE__*/
student_head_jsx("span", {
  className: "btn-name"
}, void 0, "\u8C03\u6574\u5750\u59FF");

var _ref9 =
/*#__PURE__*/
student_head_jsx("div", {
  className: "student nothing"
});

class student_head_StudentHead extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
    let hasUser = this.props.user;
    let child_name;
    let features = this.props.features;
    let student_frature = this.props.user.frature;
    let featureColor, hightLight;
    features && features.map(feature => {
      if (feature && feature.en_name == student_frature) {
        featureColor = feature.color;
        hightLight = this.props.mainFeature == feature.en_name;
      }
    }); //1.性格标签背景颜色

    let ft_bg_color = this.props.isTeacher && featureColor && !this.props.user.percent ? {
      background: featureColor
    } : {}; //2.性格边框颜色

    let ft_frame_bg_color = this.props.isTeacher && featureColor && hightLight ? {
      border: `0.01rem solid #fff`,
      boxShadow: `0rem 0rem 0.2rem ${featureColor}`
    } : {};

    if (this.props.user) {
      child_name = this.props.user.child_name;
    }

    if (!child_name && this.props.user && this.props.user.stream) {
      child_name = this.props.user.stream.$data.child_name;
    }

    setTimeout(() => {
      if (!(this.props.user && this.props.user.online)) {
        external_jquery_default()(`#student_${this.props.user.id}`).empty();
      }
    }, 0);
    return hasUser ? student_head_jsx("div", {
      className: (this.state.hover ? "student hover" : "student ") + (this.props.user.online ? "" : " nothing"),
      onMouseOver: () => {
        if (this.props.isTeacher) {
          this.setState({
            hover: true
          });
        }
      },
      onMouseOut: event => {
        if (this.props.isTeacher) {
          this.setState({
            hover: false
          });
        }
      }
    }, this.props.user.id + "", this.props.isTeacher || !this.props.withFrame ? "" : student_head_jsx("div", {
      className: `avatar-frame ${this.props.user.warn ? "bink" : ""}`
    }), this.props.isTeacher ? student_head_jsx("div", {
      className: "high-light-frame",
      style: ft_frame_bg_color
    }) : "", student_head_jsx("div", {
      className: "avatar-head",
      id: "student_" + this.props.user.id,
      style: this.props.user.online ? {
        backgroundImage: `url(${this.props.user.avatarurl})`
      } : null
    }), student_head_jsx("div", {
      className: "avatar-info",
      style: ft_bg_color
    }, void 0, this.props.user.progress_rank ? student_head_jsx("div", {
      className: "avatar-rank"
    }, void 0, this.props.user.progress_rank) : "", this.props.user.percent ? student_head_jsx("div", {
      className: this.props.user.percent == 100 ? "avatar-bar full" : "avatar-bar",
      style: {
        "width": this.props.user.percent + "%"
      }
    }) : "", student_head_jsx("div", {
      className: "avatar-name"
    }, void 0, child_name), student_head_jsx("div", {
      className: "avatar-stars"
    }, void 0, this.props.user.gift_total || 0)), this.props.isTeacher && this.props.user && this.props.user.online ? student_head_jsx("div", {
      className: "summary"
    }, void 0, student_head_jsx("div", {
      className: "summary-inner"
    }, void 0, student_head_jsx("div", {
      className: this.props.isTeacher ? "btns" : "btns student"
    }, void 0, this.props.isTeacher ? student_head_jsx("button", {
      className: this.props.user.dancing ? "view-btn on" : "view-btn",
      onClick: () => {
        if (this.props.user.stream) {
          this.props.onClickView(this.props.user);
        }
      }
    }, void 0, student_head_ref, _ref2) : "", this.props.isTeacher ? student_head_jsx("button", {
      className: "gift-btn",
      onClick: () => {
        if (this.props.user.online) {
          this.props.onClickGift(this.props.user);
        }
      }
    }, void 0, _ref3, _ref4) : "", this.props.isTeacher ? student_head_jsx("button", {
      className: this.props.user.unmuted ? "speak-btn on" : "speak-btn",
      onClick: () => {
        this.props.onClickSpeak(this.props.user);
      }
    }, void 0, _ref5, _ref6) : "", this.props.isTeacher ? student_head_jsx("button", {
      className: "warn-btn",
      onClick: () => {
        this.props.onClickWarn(this.props.user);
      }
    }, void 0, _ref7, _ref8) : ""))) : "") : _ref9;
  }

}

/* harmony default export */ var student_head = (student_head_StudentHead);
// EXTERNAL MODULE: ./dev/less/handsup.less
var handsup = __webpack_require__(100);

// EXTERNAL MODULE: ./config/hotkey.js
var hotkey = __webpack_require__(92);
var hotkey_default = /*#__PURE__*/__webpack_require__.n(hotkey);

// CONCATENATED MODULE: ./dev/hotkey.js

/* harmony default export */ var dev_hotkey = (hotkey_default.a);
// CONCATENATED MODULE: ./dev/scripts/components/handsup.js

var handsup_REACT_ELEMENT_TYPE;

function handsup_jsx(type, props, key, children) { if (!handsup_REACT_ELEMENT_TYPE) { handsup_REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: handsup_REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }







var handsup_ref =
/*#__PURE__*/
handsup_jsx("div", {
  className: "handsup-title"
}, void 0, "\u4E3E\u624B\u987A\u5E8F");

class handsup_Handsup extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    external_electron_["ipcRenderer"].on('hotkey', (event, hotkeyName) => {
      if (this.onHotKey && typeof this.onHotKey === 'function') {
        this.onHotKey(hotkeyName);
      }
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        show: true
      });
    }, 100);
  }

  render() {
    return handsup_jsx("div", {
      className: this.state.show ? "handsup-layer show" : "handsup-layer"
    }, void 0, handsup_ref, handsup_jsx("div", {
      className: "handsup-users"
    }, void 0, this.props.users.map(user => handsup_jsx("div", {
      className: "handsup-user"
    }, user.id, handsup_jsx("div", {
      className: "avatar",
      style: {
        backgroundImage: `url(${user.child_avatar})`
      }
    }), handsup_jsx("div", {
      className: "nickname"
    }, void 0, user.child_name), user.rank ? handsup_jsx("div", {
      className: "rank"
    }, void 0, user.rank) : ""))), handsup_jsx("div", {
      className: "handsup-close",
      onClick: () => {
        this.props.onClickClose();
      }
    }, void 0, "\u5173\u95ED\u4E3E\u624B"));
  }

  onHotKey(hotkeyName) {
    switch (dev_hotkey[hotkeyName]) {
      case dev_hotkey.KEY_ENTER:
      case dev_hotkey.KEY_ESC:
        this.props.onClickClose();
        break;

      default:
        break;
    }
  }

  componentWillUnmount() {
    this.onHotKey = null;
  }

}

/* harmony default export */ var components_handsup = (handsup_Handsup);
// EXTERNAL MODULE: ./node_modules/.3.0.0@core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(63);

// EXTERNAL MODULE: ./dev/scripts/eventer.js
var eventer = __webpack_require__(20);

// CONCATENATED MODULE: ./dev/scripts/session.js








class session_Session extends eventer["a" /* default */] {
  constructor(inst) {
    super();
    this.$inst = inst;
    this.$uuid = 0;
    this.$_parts = [];
    this.$jsready = false;
    this.$queue = [];
  }

  uuid() {
    return ++this.$uuid;
  }

  init(dom) {
    window.CANVAS_HOLDER = dom;
    this.$dom = external_jquery_default()(dom);

    this.__bind();

    this.__createWebview();
  }
  /**
   * 创建webview
   */


  __createWebview() {
    let prefix;

    if (env["DEBUG"]) {
      prefix = "http://localhost:3000";
    } else if (env["TEST"]) {
      prefix = dev_const["default"].TEST_URL;
    } else {
      prefix = dev_const["default"].ONLINE_URL;
    }

    external_jquery_default.a.get(`${prefix}/app?from=app&t=` + new Date().getTime(), response => {
      if (this.$inst.isMaster()) {
        window.CANVAS_LOCATION = `${prefix}/app?from=app`;
      } else {
        window.CANVAS_LOCATION = `${prefix}/app?from=native`;
      }

      window.CANVAS_SIZE = [this.$dom.width(), this.$dom.height()];
      window.$ = external_jquery_default.a; // response.replace(/<link\s+href="([^"]+)"/g, (m,result)=>{
      // 	if (/^\//.test(result)) {
      // 		result = prefix + result
      // 	}
      // 	$(`<link href="${result}" rel="stylesheet"/>`).appendTo("head")
      // 	return
      // })
      // $(`<script cocos="true" src="${prefix}/cocos.js"></script>`).appendTo("head")

      let scripts = [];
      response.replace(/<script.+?src="([^"]+)"/g, (m, result) => {
        if (/(flexible)|(zepto)|(vconsole)|(cocos2d-js)/.test(result)) return;

        if (/^\//.test(result)) {
          result = prefix + result;
        }

        scripts.push(result);
        return;
      });

      let _next = () => {
        let url = scripts.shift();

        if (url) {
          var script = document.createElement('script');
          script.async = true;
          script.src = url;
          script.onload = _next;
          document.getElementsByTagName('head')[0].appendChild(script);
        }
      };

      _next();
    }); // let webview   = $(`<webview class="webview" nodeintegration='true' src="${prefix}/app?from=app&t=${new Date().getTime()}" partition="persist:kecheng"></webview>`);
    // this.$webview = webview[0];
  }

  reload() {}

  __bind() {
    window.ON_SESSION_MESSAGE = message => {
      console.log("receive session message", message);
      this.receive_message(message);
    };
  }
  /**
   * 向注入线程发送消息
   * @param {*} data 
   */


  send_message(type, data = {}, extra = {}) {
    if (this.$jsready) {
      let message = {
        message: data,
        from: this.$inst.props.account.id,
        to: "app",
        type
      };

      for (let key in extra) {
        message[key] = extra[key];
      }

      if (window.BridgeH5Do) {
        window.BridgeH5Do(message);
      }
    } else {
      this.$queue.push([type, data, extra]);
    }
  }

  receive_message(message) {
    if (message.type == "jsready") {
      this.$jsready = true;
      console.log("jsready..", this.$queue);
      this.$queue.forEach(message => {
        this.send_message(...message);
      });
      this.$queue = [];
    }

    this.trigger("NEW_MESSAGE", message);
  }

  destroy() {
    this.$_parts = [];
    this.$jsready = false;
    this.$queue = [];
    this.$dom.empty();
  }

}

/* harmony default export */ var session = (session_Session);
// EXTERNAL MODULE: ./dev/scripts/Storage.js
var Storage = __webpack_require__(8);

// EXTERNAL MODULE: ./dev/agora/AgoraSdk.js + 2 modules
var AgoraSdk = __webpack_require__(86);

// CONCATENATED MODULE: ./dev/scripts/AgoraStream.js






class AgoraStream_Room extends eventer["a" /* default */] {
  constructor(inst) {
    super();
    this.inst = inst;
    this.$streams_list = [];
    this.$streams_hash = {};
  }

  init() {
    this.$client = new AgoraSdk["default"]();
    this.$client.initialize(dev_const["default"].AGORA_APPID);
    this.$client.setChannelProfile(1);
    this.$client.setClientRole(1);
    this.$client.setAudioProfile(0, 1);
    this.$client.setParameters('{"che.audio.live_for_comm":true}');
    this.$client.setParameters('{"che.audio.enable.agc":false}');
    this.$client.setParameters('{"che.video.moreFecSchemeEnable":true}');
    this.$client.setParameters('{"che.video.lowBitRateStreamParameter":{"width":120,"height":120,"frameRate":15,"bitRate":100}}');
    this.$client.enableDualStreamMode(true);
    this.$client.setLocalVideoMirrorMode(2);

    if (!this.inst.isSubMaster(this.inst.props.account.id)) {
      this.$client.enableVideo();
      this.$client.enableLocalVideo(true); // let isMaster = this.inst.props.room.teacher_id == 
      //    this.inst.props.account.id

      this.$client.setVideoProfile(45);
      let id = this.inst.props.account.id;

      if (this.inst.isMaster()) {
        this.$client.setVideoRenderDimension(0, id, dev_const["default"].LARGE_MODE, dev_const["default"].LARGE_MODE);
      } else {
        this.$client.setVideoRenderDimension(0, id, dev_const["default"].SMALL_MODE, dev_const["default"].SMALL_MODE);
      }

      this.$client.setLocalPublishFallbackOption(1);
      this.$client.setRemoteSubscribeFallbackOption(1);
    } else {
      this.$client.muteLocalAudioStream(true);
      this.$client.enableLocalVideo(false);
    }

    this.__resume_devices();

    console.log("Agora Version", this.$client.getVersion());
  }

  __is_device_in(devices, id) {
    if (!id) return false;
    let found;

    for (let i = 0, len = devices.length; i < len; i++) {
      let item = devices[i];

      if (item.deviceid == id) {
        found = true;
        break;
      }
    }

    return found;
  }

  __resume_devices() {
    let videoDevice = Storage["default"].get("VIDEO_DEVICE"),
        audioDevice = Storage["default"].get("AUDIO_DEVICE"),
        playbackDevice = Storage["default"].get("PLAYBACK_DEVICE");
    let video_devices = this.$client.getVideoDevices();
    let audio_devices = this.$client.getAudioRecordingDevices();
    let playback_devices = this.$client.getAudioPlaybackDevices();

    if (!this.__is_device_in(video_devices, videoDevice)) {
      videoDevice = null;
    }

    if (!this.__is_device_in(audio_devices, audioDevice)) {
      audioDevice = null;
    }

    if (!this.__is_device_in(playback_devices, playbackDevice)) {
      playbackDevice = null;
    }

    console.log("videoDevice, audioDevice, playbackDevice", videoDevice, audioDevice, playbackDevice);

    if (videoDevice) {
      this.$client.setVideoDevice(videoDevice);
    }

    if (audioDevice) {
      this.$client.setAudioRecordingDevice(audioDevice);
    }

    if (playbackDevice) {
      this.$client.setAudioPlaybackDevice(playbackDevice);
    }
  }

  get rtc() {
    return this.$client;
  }

  __isMuted(id) {
    // 如果是老师，则不能静音老师
    // 如果是学生而且不是自己，则先判断此人是否处于上台状态，如果是上台状态则开启监听声音，
    // 如果不是上台状态则判断历史静音状态来处理
    if (this.inst.props.room.teacher_id == id) {
      return false;
    }

    if (!this.inst.props.students) {
      return true;
    }

    for (let i = 0, len = this.inst.props.students.length; i < len; i++) {
      let item = this.inst.props.students[i];

      if (item.id == id) {
        if (item.dancing) {
          return false;
        }

        return !item.unmuted;
      }
    }

    return true;
  }

  __stream_audio(id) {
    let muted = this.__isMuted(id); // 如果是自己，则不处理


    if (id != this.inst.props.account.id) {
      let result = this.$client.muteRemoteAudioStream(id, muted);
      console.log("set remote audio", id, muted, result);
    }
  }

  refreshMute() {
    // 如果是老师，则不处理
    if (!this.inst.isMaster()) {
      console.log("refresh muted", this.inst.props.students);
      this.inst.props.students.forEach(student => {
        this.__stream_audio(student.id);
      });
    }
  }

  cameraTo(id, dom, largeMode) {
    if (id == this.inst.props.account.id) {
      this.$client.setupLocalVideo(dom);

      if (largeMode) {
        this.$client.setVideoRenderDimension(0, id, dev_const["default"].DANCE_MODE, dev_const["default"].DANCE_MODE);
      } else {
        this.$client.setVideoRenderDimension(0, id, dev_const["default"].SMALL_MODE, dev_const["default"].SMALL_MODE);
      }
    } else {
      this.$client.subscribe(id, dom);
      let setStreamResult;

      if (largeMode) {
        setStreamResult = this.$client.setRemoteVideoStreamType(id, 0);
        this.$client.setVideoRenderDimension(1, id, dev_const["default"].DANCE_MODE, dev_const["default"].DANCE_MODE);
      } else {
        setStreamResult = this.$client.setRemoteVideoStreamType(id, 1);
        this.$client.setVideoRenderDimension(1, id, dev_const["default"].SMALL_MODE, dev_const["default"].SMALL_MODE);
      }

      console.log("setStreamResult", setStreamResult);
    }
  }
  /**
   * 老师设置静音
   * @param {bool} status 
   */


  keepSilent(status) {
    // 只有老师可以静音
    if (this.inst.isMaster()) {
      this.$client.muteAllRemoteAudioStreams(status);
      console.log("keep silent", status);
    }
  }
  /**
   * 取消接收远端音视频流
   * @param {*} id 
   */


  unsubscribe(id) {
    this.$client.rtcEngine.unsubscribe(id);
  }

  __stream(id) {
    return {
      getId: () => id,
      play: dom => {
        if (dom) {
          dom = external_jquery_default()(`#${dom}`)[0];

          if (dom) {
            external_jquery_default()(dom).empty();

            if (id == this.inst.props.account.id) {
              this.$client.setupLocalVideo(document.getElementById("master-head"));
            } else {
              this.$client.subscribe(id, dom);
            }
          }
        } else {
          let isMaster = this.inst.props.room.teacher_id == id;
          let width = isMaster ? dev_const["default"].LARGE_MODE : dev_const["default"].SMALL_MODE,
              height = isMaster ? dev_const["default"].LARGE_MODE : dev_const["default"].SMALL_MODE;

          if (id == this.inst.props.account.id) {
            this.$client.setupLocalVideo({
              width,
              height,
              cocos: true
            });
          } else {
            this.$client.subscribe(id, {
              width,
              height,
              cocos: true
            });
          }
        }
      },
      stop: () => {
        this.unsubscribe(id);
        external_jquery_default()(`#student_${id}`).empty();
      }
    };
  }

  __start_stream() {
    this.$client.on('error', err => {
      console.log("Got error msg:", err.reason);

      if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
        this.$client.renewToken(this.inst.props.channel_token, () => {
          console.log("Renew channel key successfully");
        }, function (err) {
          console.log("Renew channel key failed: ", err);
        });
      }
    });
    this.$client.on('addstream', id => {
      console.log("add stream", id);
      let isMaster = this.inst.props.room.teacher_id == id;

      if (isMaster) {
        this.$client.setRemoteVideoStreamType(id, 0);
        this.$client.setVideoRenderDimension(1, id, dev_const["default"].LARGE_MODE, dev_const["default"].LARGE_MODE);
      } else {
        this.$client.setRemoteVideoStreamType(id, 1);
        this.$client.setVideoRenderDimension(1, id, dev_const["default"].SMALL_MODE, dev_const["default"].SMALL_MODE);
      }

      this.trigger("NEW_STREAM", this.__stream(id));
    });
    this.$client.on('removestream', id => {
      console.log("remove stream", id);
      this.trigger("REMOVE_STREAM", this.__stream(id));
    });
    this.$client.on('userjoined', id => {
      // var stream = this.$client.streams.get(id);
      console.log("userjoined", id);
      this.trigger("ADD_ROOM", id);
    });
    this.$client.on('leavechannel', () => {
      this.$client.removeAllListeners();
      this.trigger("LEAVE_ROOM", this.$client);
    });
    this.trigger("NEW_STREAM", this.__stream(this.inst.props.account.id));

    this.__stream_audio(this.inst.props.account.id);
  }

  start() {
    this.$started = true;
    this.$client.joinChannel(this.inst.props.room.channel_token, this.inst.props.room.channel_id, '', this.inst.props.account.id);
    this.$client.on('joinedchannel', () => {
      this.__start_stream();
    });
  }

  leave() {
    if (!this.$started) {
      this.trigger("LEAVE_ROOM");
      return;
    }

    try {
      this.$client.videoSourceLeave();
      this.$client.videoSourceRelease();
      this.$client.leaveChannel();
    } catch (err) {
      this.trigger("LEAVE_ROOM", this.$client);
      console.log("client leave failed ", err);
    }
  }

}

/* harmony default export */ var AgoraStream = (AgoraStream_Room);
// EXTERNAL MODULE: external "q"
var external_q_ = __webpack_require__(59);
var external_q_default = /*#__PURE__*/__webpack_require__.n(external_q_);

// CONCATENATED MODULE: ./dev/scripts/AgoraSignal.js




const Signal = __webpack_require__(108);

class AgoraSignal_Signalize extends eventer["a" /* default */] {
  constructor(inst) {
    super();
    this.$inst = inst;
    this.$inited = false;
    this.$is_reconn = false;
    this.$queue = [];
    this.$heart_t = null;
    this.$recon_timer = null;
    this.$connect_timer = null;
    this.$user_in_room = {};
  }

  __destroy_all() {
    if (this.$session) {
      this.$session.onLoginFailed = this.$session.onLogout = this.$session.onError = null;
      this.$session.logout && this.$session.logout();
    }

    if (this.$channel) {
      this.$channel.onChannelJoined = this.$channel.onChannelJoinFailed = this.$channel.onChannelUserJoined = this.$channel.onChannelUserLeaved = this.$channel.onChannelUserList = this.$channel.onMessageChannelReceive = this.$channel.onMessageInstantReceive = null;
    }

    this.__clear_recon_timer();

    clearTimeout(this.$connect_timer);
    clearTimeout(this.$heart_t);
    this.$channel = null;
  }

  __reconnect() {
    this.__destroy_all(); // 重连


    this.trigger("RECONNECT_SIGNAL");
    this.$connect_timer = setTimeout(() => {
      this.$sending_lock = false;
      this.$inited = false;
      this.$is_reconn = true;
      this.join();
    }, 1000);
  }

  __on_connect() {
    clearTimeout(this.$connect_timer);
    this.trigger("CONNECT_SIGNAL");
    this.$connect_timer = setTimeout(() => {
      this.__reconnect();
    }, 10000);
  }

  __connect_error(isKick) {
    clearTimeout(this.$connect_timer);

    if (isKick) {
      this.trigger("CONNECT_KICKED");
    } else {
      this.trigger("CONNECT_SIGNAL_ERROR");
    }

    console.log("retry to join");
    this.$connect_timer = setTimeout(() => {
      this.__reconnect();
    }, 2000);
  }

  __connect_success() {
    clearTimeout(this.$connect_timer);
    this.trigger("CONNECTED_SIGNAL");

    this.__heart_beat();
  }

  __heart_beat() {
    clearTimeout(this.$heart_t);
    this.$heart_t = setTimeout(() => {
      this.send({
        to: this.$inst.props.account.id,
        sig: new Date().getTime()
      }, true);
    }, 10000);
  }

  init() {
    return external_q_default.a.Promise((resolve, reject) => {
      if (this.$inited) {
        resolve();
      } else {
        this.__on_connect();

        console.log("Const.AGORA_APPID", dev_const["default"].AGORA_APPID);
        this.$signal = Signal(dev_const["default"].AGORA_APPID); // accout参数必须为字符串
        // this.$session = this.$signal.login(this.$inst.props.account.id+"", net.sigtoken)

        this.$session = this.$signal.login(this.$inst.props.account.id + "", "_no_need_token");

        this.$session.onLoginSuccess = () => {
          this.$inited = true;
          resolve();
          console.log("session logined...");
        };

        this.$session.onLoginFailed = ecode => {
          console.log("session login failed...", ecode);

          this.__connect_error();
        };

        this.$session.onLogout = ecode => {
          if (ecode != dev_const["default"].LOGOUT_SUCCESS && ecode != 0) {
            if (ecode == dev_const["default"].LOGOUT_E_KICKED) {
              this.__connect_error("kick");
            } else {
              this.__connect_error();
            }

            console.log("session logout", ecode);
          }
        };

        this.$session.onError = ecode => {
          console.log("session error", ecode);

          this.__connect_error();
        };
      }
    });
  }

  join() {
    this.init().then(() => {
      let channel = this.$session.channelJoin(this.$inst.props.room.channel_id);

      channel.onChannelJoined = () => {
        // 上报自己的用户信息
        this.$channel = channel;
        this.trigger("CHANNEL_JOINED", channel); // 发送消息队列中的消息

        this.$queue.forEach(message => {
          this.send(message);
        });
        this.$queue = [];

        this.__connect_success();

        if (this.$is_reconn) {
          this.trigger("RECONNECTED_SIGNAL");
        }
      };

      channel.onChannelJoinFailed = () => {
        console.log("channel join failed, retry after 2s");

        this.__connect_error();
      };

      let new_user_joined = (users, ignore_missing) => {
        // 获取用户信息
        let userinfos = [],
            missed_users = [];
        users.forEach(account => {
          let userinfo;

          if (account == this.$inst.props.teacher.id) {
            userinfo = this.$inst.props.teacher;
          } else {
            for (let i = 0, len = this.$inst.props.students.length; i < len; i++) {
              let item = this.$inst.props.students[i];

              if (item.id == account) {
                userinfo = {
                  child_name: item.child_name,
                  id: item.id,
                  avatarurl: item.child_avatar
                };
                break;
              }
            }
          }

          if (userinfo) {
            userinfos.push(userinfo);
          } else {
            missed_users.push(account);
          }
        });

        if (!ignore_missing && missed_users.length > 0) {
          console.log("new user joind, missed users...", missed_users);
          this.trigger("CHANNEL_NEW_USER_LATE", {
            users: missed_users,
            retry: over => {
              if (over) return;
              console.log('retry new user join...', missed_users);
              new_user_joined(missed_users, true);
            }
          });
        }

        if (userinfos.length > 0) {
          console.log("call new user joined", userinfos);
          this.trigger("CHANNEL_NEW_USER", {
            userinfos
          });
        }
      };

      channel.onChannelUserJoined = (account, uid) => {
        console.log("onChannelUserJoined", account);
        this.$user_in_room[account] = true;
        new_user_joined([account]);
      };

      channel.onChannelUserList = accounts => {
        console.log("On channel user list", accounts);
        let users = [];
        accounts.forEach(account => {
          this.$user_in_room[account[0]] = true;
          users.push(account[0]);
        });

        if (users.length > 0) {
          new_user_joined(users, true);
        }
      };

      channel.onChannelLeaved = () => {
        console.log("channel leaved...");
      };

      channel.onChannelUserLeaved = account => {
        console.log("channel user leaved...");
        this.$user_in_room[account] = false;
        this.trigger("CHANNEL_USER_LEAVE", account);
      };

      channel.onMessageChannelReceive = (account, uid, msg) => {
        let message = JSON.parse(msg);
        console.log("receive new message", message);
        this.trigger("NEW_MESSAGE", message);

        this.__clear_recon_timer();

        this.__heart_beat();
      };

      this.$session.onMessageInstantReceive = (account, uid, msg) => {
        this.__clear_recon_timer();

        this.__heart_beat();

        let message = JSON.parse(msg);

        if (message.sig) {
          console.log("receive heart beat message", msg);
          return;
        }

        console.log("receive new peer message", msg);
        this.trigger("NEW_MESSAGE", message);
      };
    }, () => {}).done();
  }

  leave() {
    clearTimeout(this.$heart_t);
    clearTimeout(this.$connect_timer);

    this.__clear_recon_timer();

    if (this.$channel) {
      this.$channel.channelLeave();
    }

    this.__destroy_all();
  }

  __clear_recon_timer() {
    clearTimeout(this.$recon_timer);
    this.trigger("HIDE_LOADING");
  }

  send(message, heatbeat) {
    if (this.$channel) {
      if (this.$sending_lock && heatbeat) {
        // 有消息没发送成功，停止发送心跳连接
        return;
      }

      this.__clear_recon_timer();

      this.$recon_timer = setTimeout(() => {
        this.trigger("NETWORK_BAD");
        this.$recon_timer = setTimeout(() => {
          this.$queue.push(message);

          this.__reconnect();
        }, 8000);
      }, 2000);
      this.$sending_lock = true;

      if (message.to == "all") {
        let content = JSON.stringify(message);
        this.$channel.messageChannelSend(content, () => {
          console.log("全局消息发送成功");

          this.__clear_recon_timer();

          this.$sending_lock = false;
        });
      } else {
        let to = message.to + "";
        let content = JSON.stringify(message);
        console.log("发送局部消息", to, content);

        if (this.$user_in_room[to]) {
          this.$session.messageInstantSend(to, content, () => {
            console.log("独立消息发送成功，发送给", message.to);

            this.__clear_recon_timer();

            this.$sending_lock = false;
          });
        } else {
          console.log("发送对象不在房间，拒绝发送！", to);

          this.__clear_recon_timer();

          this.$sending_lock = false;
        }
      }
    } else {
      this.$queue.push(message);
    }
  }

}

/* harmony default export */ var AgoraSignal = (AgoraSignal_Signalize);
// CONCATENATED MODULE: ./dev/scripts/containers/course.base.page.js












class course_base_page_Course extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.$uuid = 0;
    this.$stat_arr = [];
    this.$session = new session(this);
    this.$entered = false;
    this.$room = new AgoraStream(this);
    this.$signal = new AgoraSignal(this);

    this.$downloaded_handler = (event, url, file) => {
      context["default"].addDownloaded(url, file);
    };

    external_electron_["ipcRenderer"].on("DOWNLOADED", this.$downloaded_handler);

    if (context["default"] && context["default"].detector) {
      context["default"].detector.waring_threshold = 2;
    }
  }

  get uuid() {
    return ++this.$uuid;
  }

  isMaster(id) {
    console.log('course.base.page isMaster called', this.props.room);

    if (!id) {
      id = this.props.account.id;
    }

    for (let i = 0, len = this.props.room.teachers.length; i < len; i++) {
      let item = this.props.room.teachers[i];

      if (item.id == id) {
        return true;
      }
    }
  }

  isChairMaster(id) {
    if (!id) {
      id = this.props.account.id;
    }

    return this.props.room.teacher_id == id;
  }

  isSubMaster(id) {
    if (!id) {
      id = this.props.account.id;
    }

    return this.isMaster(id) && !this.isChairMaster(id);
  }

  getUser(id) {
    if (id == this.props.teacher.id) {
      return this.props.teacher;
    }

    for (let i = 0, len = this.props.students.length; i < len; i++) {
      let item = this.props.students[i];

      if (item.id == id) {
        return item;
      }
    }
  }

  __load_sound(url) {
    if (!context["default"].getDownloaded(url)) {
      console.log("call load file...", url);
      external_electron_["ipcRenderer"].send("DOWNLOAD", url);
    }
  }

  playMusic(url, needevent) {
    this.stopMusic();
    let soundUrl = url,
        localFile = context["default"].getDownloaded(url);

    if (localFile) {
      soundUrl = localFile;
    }

    let result = this.$room.rtc.startAudioMixing(soundUrl, true, false, 1);
    network["default"].log({
      name: "play music",
      soundUrl,
      needevent,
      result
    });

    if (needevent) {
      this.$playing = url;
      this.$session.send_message("soundupdate", {
        url: this.$playing,
        time: 0
      });
    } else {
      this.$playing = false;
    }
  }

  stopMusic(noevent) {
    let result = this.$room.rtc.stopAudioMixing();
    console.log("stop audio mix", result);

    if (this.$playing) {
      if (!noevent) {
        this.$session.send_message("soundended", {
          url: this.$playing
        });
      }

      this.$playing = null;
    }
  }

  componentWillUnmount() {
    this.$signal.leave();
    this.$room.leave();
    this.$session.destroy();
    clearInterval(this.$tick_timer);
    clearInterval(this.$music_timer);
    clearTimeout(this.$back_timer);
    clearTimeout(this.$put_timer);
    external_jquery_default()(`#dancing-head`).empty();
    external_jquery_default()('.avatar-head').empty();
    clearTimeout(this.$reload_timer);
    external_jquery_default()(window).off("resize");
    this.props.hideLoading();
    context["default"].detector.check();
    this.onHotKey = null;
    external_electron_["ipcRenderer"].removeListener("DOWNLOADED", this.$downloaded_handler);
  }

  componentDidMount() {
    context["default"].detector.uncheck();
    this.$room.rtc.on("networkquality", (uid, tx, rx) => {
      console.log("网络状态：", uid, tx, rx);

      if (uid == 0) {
        let status = Math.max(tx, rx);

        if (status == 1 || status == 2) {
          status = 1;
        } else if (status == 3) {
          status = 2;
        } else if (status == 4) {
          status = 3;
        } else if (status == 5) {
          status = 4;
        } else {
          status = 0;
        }

        this.$stat_arr.push(status);

        if (this.$stat_arr.length >= 3) {
          let sum = 0;
          this.$stat_arr.forEach(status => {
            sum += status;
          });
          status = sum / this.$stat_arr.length >> 0;
          context["default"].detector.setStatus(status);
          this.$stat_arr = [];
        } else {
          context["default"].detector.setStatusOnce(status);
        }
      }
    });
    let $waiting_timer = null;
    this.$signal.on("RECONNECT_SIGNAL", () => {
      this.props.showLoading("网络不稳定哦，正在重连中~");
    });
    this.$signal.on("CONNECT_SIGNAL", () => {
      this.props.showLoading("正在连线其他人，稍等一下~");
      $waiting_timer = setTimeout(() => {
        this.props.showLoading("当前网络环境不太好哦，耐心等一等吧~");
      }, 6000);
    });
    this.$signal.on("HIDE_LOADING", () => {
      this.props.hideLoading();
      clearTimeout($waiting_timer);
    });
    this.$signal.on("NETWORK_BAD", () => {
      this.props.showLoading("网络状态不佳，稍等一下~");
    });
    this.$signal.on("CONNECTED_SIGNAL", () => {
      this.props.hideLoading();
      clearTimeout($waiting_timer);
      this.$session.send_message("signal_connected");
    });
    this.$signal.on("RECONNECTED_SIGNAL", () => {
      // 重新连接上，拉取最新消息
      this.$session.send_message("signal_reconnected");
    });
    this.$signal.on("CONNECT_SIGNAL_ERROR", () => {
      this.props.showLoading("当前网络环境不太好哦，耐心等一等吧~");
      clearTimeout($waiting_timer);
    });
    this.$signal.on("CONNECT_KICKED", () => {
      this.props.showLoading("有人登录了你的帐号哦~");
      clearTimeout($waiting_timer);
    });
    this.$signal.on("CHANNEL_NEW_USER", response => {
      this.$session.send_message(dev_const["default"].MEMBER_ADD, {}, {
        userinfos: response.userinfos
      });
      console.log("channel new user...", response.userinfos);
    }); // this.$signal.on("CHANNEL_NEW_USER_LATE", (response) => {
    // 	let users = response.users;
    // 	users = users.filter((userId)=>{
    // 		return !this.isMaster(userId);
    // 	});
    // 	if (users.length > 0) {
    // 		this.__query_roominfo_more(response.retry);
    // 	}
    // })

    this.$signal.on("CHANNEL_USER_LEAVE", id => {
      this.$session.send_message(dev_const["default"].MEMBER_LEAVE, {}, {
        userinfos: [id]
      });
    });
    this.$signal.on("NEW_MESSAGE", message => {
      console.log("receive new from app", message);

      this.__on_signal_message(message);
    });
    this.$session.on("NEW_MESSAGE", message => {
      this.__on_session_message(message);
    });

    this.__query_roominfo_more();

    this.$session.init("#course-content");
    network["default"].getServerTime().then(res => {
      this.setState({
        time: res.time * 1000
      });
      this.setState({
        time_diff: res.time * 1000 - Date.now()
      });
    });
    this.$room.rtc.on("audiomixingfinished", () => {
      console.log("on audiomixingfinished", this.$playing);

      if (this.$playing) {
        this.$session.send_message("soundended", {
          url: this.$playing
        });
        this.$playing = null;
      }
    });

    this.__tick();
  }

  __get_server_time() {
    return Date.now() + (this.state.time_diff || 0);
  }

  __query_roominfo_more(callback) {
    console.log('start querying more roominfo...');
    this.$roominfo_callbacks = this.$roominfo_callbacks || [];

    if (callback) {
      this.$roominfo_callbacks.push(callback);
    }

    if (this.$roominfo_networking) {
      return;
    }

    this.$roominfo_networking = true;
    network["default"].getRoomInfo(this.props.room.channel_id).then(result => {
      this.$roominfo_networking = false;
      this.$entered = true;
      this.props.onRoomMoreInfo(result);
      this.$room.start();
      this.$signal.join();

      this.__send_init_room();

      this.$roominfo_callbacks.forEach(_callback => {
        _callback(true);
      });
      this.$roominfo_callbacks = null;
    }, () => {
      console.log("call error leave course");
      this.leaveCourse();
    }).done();
  }

  __get_feature(uid) {
    console.log('__get_feature,uid:', uid);

    if (!uid) {
      uid = this.props.account.id;
    }

    let result;
    this.props.students.map(student => {
      if (student && student.id == uid) {
        result = student.frature;
      }
    });
    return result;
  }

  __get_feature_hash() {
    let result = {};
    this.props.students.map(student => {
      if (student && student.id) {
        result[student.id] = student.frature;
      }
    });
    return result;
  }

  __send_init_room() {
    // 发送init-room
    let masters = [];
    this.props.room.teachers.forEach(teacher => {
      masters.push(teacher.id);
    });
    let userinfos = [this.props.teacher];
    userinfos = userinfos.concat(this.props.students);
    this.$session.send_message(dev_const["default"].INIT_ROOM, {
      channel_id: this.props.room.channel_id,
      token: network["default"].token
    }, {
      master_ids: masters,
      userinfos: userinfos,
      feature_data: this.__get_feature_hash(),
      classroom_info: {
        teacher_name: this.props.room.teacher_name,
        teacher_id: this.props.room.teacher_id,
        teacher_avatar: this.props.room.teacher_avatar,
        channel_token: this.props.room.channel_token,
        agora_appid: dev_const["default"].AGORA_APPID,
        userid: this.props.account.id
      }
    });
  }

  __tick(extra) {
    this.$tick_timer = setInterval(() => {
      this.props.onCourseTick();
      extra && typeof extra === 'function' && extra();
    }, 1000);
    this.$music_timer = setInterval(() => {
      if (this.$playing) {
        // 检测播放音乐
        let time = this.$room.rtc.getAudioMixingCurrentPosition();
        this.$session.send_message("soundupdate", {
          url: this.$playing,
          time
        });
      }
    }, 100);
  }

  __on_session_message(message, force) {
    if (message.to == "app" || force) {
      let data = message.message,
          result;

      switch (message.type) {
        case dev_const["default"].JS_READY:
          break;

        case dev_const["default"].OPEN_MIC:
          this.props.onUserMuted(data.uid, false, message.to == "app");
          this.$room.refreshMute();
          break;

        case dev_const["default"].CLOSE_MIC:
          this.props.onUserMuted(data.uid, true);
          this.$room.refreshMute();
          break;

        case dev_const["default"].ENABLE_MAGIC:
          this.props.onMagicSwitch(true);
          break;

        case dev_const["default"].DISABLE_MAGIC:
          this.props.onMagicSwitch(false);
          break;

        case dev_const["default"].MUTE_ALL:
          this.props.onMuteAllSwitch(true);
          this.$room.refreshMute();
          break;

        case dev_const["default"].UNMUTE_ALL:
          this.props.onMuteAllSwitch(false);
          this.$room.refreshMute();
          break;

        case dev_const["default"].SHOW_RANKS:
          this.props.onRankSwitch(true);
          break;

        case dev_const["default"].HIDE_RANKS:
          this.props.onRankSwitch(false);
          break;

        case dev_const["default"].PUT_DANCE:
          this.props.onDancing(data.id, true);
          this.$room.refreshMute();
          break;

        case dev_const["default"].BACK_DANCE:
          this.props.onDancing(data.id, false);
          this.$room.refreshMute();
          break;

        case dev_const["default"].START_COURSE:
          this.setState({
            control: false
          });
          this.props.onBeginCourse();
          break;

        case "playsound":
          let url = data.url,
              needevent = data.needevent;
          this.playMusic(url, needevent);
          break;

        case "stopsound":
          let noevent = data.noevent;
          this.stopMusic(noevent);
          break;

        case "showdraft":
          this.showDraft(data.content);
          break;

        case "showfeature":
          this.showFeature(data.feature);

        case "loadsound":
          this.__load_sound(data.url);

          break;

        case "course-process":
          this.setState({
            process: data
          });
          break;

        default:
          if (message.type.indexOf("*") == -1) {
            this.__on_signal_message(message);
          }

          break;
      }
    } else {
      this.$signal.send(message);
    }
  } // 是否处于弱网络状态


  __in_weak_net() {
    return this.props.netStatus == 0 && !this.isMaster();
  }

  showDraft(draft) {
    if (this.isMaster()) {
      this.setState({
        draft
      });
    }
  }

  showFeature(feature) {
    if (this.isMaster()) {
      this.setState({
        feature
      });
    }
  }

  hideDraft() {
    this.setState({
      draft: null
    });
  }

  __on_signal_message(message) {
    let data = message.message;

    switch (message.type) {
      case "closeroom":
        this.leaveCourse();
        break;

      case dev_const["default"].OPEN_MIC:
      case dev_const["default"].CLOSE_MIC:
      case dev_const["default"].PUT_DANCE:
      case dev_const["default"].BACK_DANCE:
        this.$session.send_message(null, null, message);
        break;

      case dev_const["default"].OPEN_RACE:
        this.props.onHandsupSwitch(true);
        this.$session.send_message(null, null, message);
        break;

      case dev_const["default"].CLOSE_RACE:
        this.props.onHandsupSwitch(false);
        this.$session.send_message(null, null, message);
        break;

      case "racerank":
        this.props.onHandsupRank(data.uid, data.rank);
        break;

      case dev_const["default"].NEXT_PAGE:
        this.$playing = false;
        this.hideDraft();
        this.props.onProgressReset();
        this.$session.send_message(null, null, message);
        break;

      case dev_const["default"].DISABLE_MAGIC:
        this.props.onProgressReset();
        this.$session.send_message(null, null, message);
        break;

      case "gift":
        this.props.onNewGift(data);
        this.$session.send_message(null, null, message);
        break;

      case "progress":
        //接收到来自学生的进度提示通知界面调整
        if (this.props.switches.magic) {
          this.props.onProgressUpdate(message.from, data.percent);
        }

        break;

      case dev_const["default"].WARN:
        this.props.onWarn(data, true);
        this.$session.send_message(null, null, message);
        break;

      case dev_const["default"].WARN_RELIEVE:
        this.props.onWarn(data, false);
        this.$session.send_message(null, null, message);
        break;

      default:
        this.$session.send_message(null, null, message);
    }
  }

  leaveCourse() {}

  preLeaveCourse(leaveOnly) {}

  __put_to_dancing(id) {
    if (this.$last_dancing) {
      if (this.$last_dancing == id) {
        return;
      }

      this.__back_from_dancing(this.$last_dancing);
    }

    console.log("do put message", id);
    external_jquery_default()(`#student_${id}`).empty();
    external_jquery_default()("#dancing-head").empty();
    this.$room.cameraTo(id, external_jquery_default()("#dancing-head")[0], true);
    this.$last_dancing = id;
  }

  __back_from_dancing(id) {
    if (!this.$last_dancing || this.$last_dancing != id) {
      return;
    }

    external_jquery_default()(`#dancing-head`).empty();
    external_jquery_default()(`#student_${id}`).empty(); // 当处于弱网络且不是自己时，直接取消流

    if (this.__in_weak_net() && id != this.props.account.id) {
      let student = this.getUser(id);

      if (student) {
        student.stream_inited = false;
      }

      this.$room.unsubscribe(id);
    } else {
      this.$room.cameraTo(id, external_jquery_default()(`#student_${id}`)[0]);
    }

    this.$last_dancing = null;
  }

  onHelpClick() {
    this.props.confirm({
      title: "设备检测",
      content: "即将进行设备检测，是否暂时退出教室？",
      sure: () => {
        this.props.showLoading("正在退出房间...");
        this.$waiting_to_tester = true;
        this.leaveCourse();
      }
    });
  }

}

/* harmony default export */ var course_base_page = (course_base_page_Course);
// CONCATENATED MODULE: ./dev/scripts/containers/course.teacher.page.js


var course_teacher_page_REACT_ELEMENT_TYPE;

function course_teacher_page_jsx(type, props, key, children) { if (!course_teacher_page_REACT_ELEMENT_TYPE) { course_teacher_page_REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: course_teacher_page_REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }





const net = __webpack_require__(7);











var course_teacher_page_ref =
/*#__PURE__*/
course_teacher_page_jsx("div", {
  className: "logo-frame"
});

var course_teacher_page_ref2 =
/*#__PURE__*/
course_teacher_page_jsx("div", {
  className: "avatar-head-frame"
});

var course_teacher_page_ref3 =
/*#__PURE__*/
course_teacher_page_jsx("div", {
  className: "warning-icon"
});

var course_teacher_page_ref4 =
/*#__PURE__*/
course_teacher_page_jsx("div", {
  className: "dancing-student",
  id: "dancing-head"
}, "dancing-student");

var course_teacher_page_ref5 =
/*#__PURE__*/
course_teacher_page_jsx("div", {
  className: "spliter"
});

var course_teacher_page_ref6 =
/*#__PURE__*/
course_teacher_page_jsx("div", {
  className: "course-content kc-canvas-area",
  id: "course-content"
});

var course_teacher_page_ref7 =
/*#__PURE__*/
course_teacher_page_jsx("span", {}, void 0, "C");

var course_teacher_page_ref8 =
/*#__PURE__*/
course_teacher_page_jsx("span", {}, void 0, "\u25C0");

var course_teacher_page_ref9 =
/*#__PURE__*/
course_teacher_page_jsx("span", {}, void 0, "M");

var _ref10 =
/*#__PURE__*/
course_teacher_page_jsx("span", {}, void 0, "\u25B6");

var _ref11 =
/*#__PURE__*/
course_teacher_page_jsx("span", {}, void 0, "G");

class course_teacher_page_Course extends course_base_page {
  constructor(props) {
    super(props);
    this.state = {
      no_confirm_mask: false,
      time: new Date().getTime() / 1000,
      time_diff: 0,
      control: this.props.room.state == 0,
      process: {
        current: 0,
        total: 0
      },
      warning: 0,
      warning_message: "",
      warning_shown: false
    };
    this.$warning_timer_timeout_hash = {};
    this.$warning_timer_interval_hash = {};
    this.$warning_id_hash = {};
    external_electron_["ipcRenderer"].on('hotkey', (event, hotkeyName) => {
      if (this.onHotKey && typeof this.onHotKey === 'function') {
        this.onHotKey(hotkeyName);
      }
    });
  }

  componentDidMount() {
    //已经上课
    if (this.props.room.state == 1) {
      this.props.onBeginCourse();
      this.setState({
        control: false
      });
    }

    this.$reload_timer = null;
    external_jquery_default()(window).on("resize", () => {
      clearTimeout(this.$reload_timer);
      this.$reload_timer = setTimeout(() => {
        this.$session.reload(); // 发送init room message

        this.__send_init_room();
      }, 1000);
    });
    this.$room.init();
    this.$room.on("NEW_STREAM", stream => {
      // 判断是不是主班老师
      let id = stream.getId();
      let isSubMaster = this.isSubMaster(id);

      if (isSubMaster) {
        return;
      }

      this.props.onNewStream(stream);
    });
    this.$room.on("REMOVE_STREAM", stream => {
      this.props.onStreamLeave(stream); // 老师监听到有人退出如果还在上台，则发送他下台指令

      if (this.isChairMaster()) {
        let id = stream.getId();

        if (id) {
          if (this.$last_dancing == id) {
            this.$session.send_message(dev_const["default"].BACK_DANCE, {
              id
            });
          }
        }
      }
    });
    this.$room.on("ADD_ROOM", id => {
      // 新用户加入
      this.props.onUserAddRoom(id);
      this.$room.refreshMute();
    });
    super.componentDidMount();
  }

  __tick() {
    super.__tick(() => {
      // 根据上课时间设置警告
      let minute = Math.abs(this.props.status.duration) / 60 >> 0;

      if (this.props.status.duration <= -5 * 60) {
        this.setState({
          warning: 3,
          warning_message: `已经拖堂${minute}分钟啦，请尽快结束！`,
          warning_shown: false
        });
      } else if (this.props.status.duration <= 0) {
        this.setState({
          warning: 2,
          warning_message: "课程已到结束时间，请注意！",
          warning_shown: false
        });
      } else if (this.props.status.duration <= 5 * 60) {
        this.setState({
          warning: 2,
          warning_message: `距离课程结束还有${minute}分钟，请注意！`,
          warning_shown: false
        });
      } else if (this.props.status.duration <= 15 * 60) {
        if (this.state.warning != 1) {
          this.setState({
            warning: 1,
            warning_message: `距离课程结束还有${minute}分钟，请注意！`,
            warning_shown: false
          });
          setTimeout(() => {
            this.setState({
              warning_shown: true
            });
          }, 20000);
        }
      }

      if (this.props.status.waiting - this.state.time_diff >= -1000 && this.props.status.waiting - this.state.time_diff <= 1000 * 60 * 30 && !this.props.status.started) {
        this.props.onCourseStartingTick();
      }
    });
  }

  leaveCourse() {
    if (this.$waiting_to_tester) {
      this.props.onEnterTester("course");
    } else {
      this.props.onEndCourse();
    }
  }

  preLeaveCourse(leaveOnly) {
    function __endCourse() {
      this.props.showLoading("正在退出房间..."); // 发送关闭房间请求

      net.closeRoom(this.props.room.channel_id).then(res => {
        if (res.status) {
          this.$session.send_message(dev_const["default"].STOP_COURSE);
          this.$signal.send({
            type: "closeroom",
            from: this.props.account.id,
            to: "all"
          });
        }
      });
    }

    function __leaveCourse() {
      this.props.showLoading("正在退出房间...");
      this.leaveCourse();
    }

    if (leaveOnly) {
      if (this.props.status.started && this.isChairMaster() && (!this.props.status.duration || this.props.status.duration <= 0)) {
        this.props.confirm({
          content: "请确认是否要结束课程",
          sure_txt: "结束课程",
          cancel_txt: "确认离开",
          sure: () => {
            __endCourse.bind(this)();
          },
          cancel: () => {
            __leaveCourse.bind(this)();
          }
        });
      } else {
        this.props.confirm({
          content: "确定要临时退出房间吗？",
          sure: () => {
            __leaveCourse.bind(this)();
          }
        });
      }
    } else {
      this.props.confirm({
        content: "确定要结束本次课程吗？",
        sure: () => {
          __endCourse.bind(this)();
        }
      });
    }
  }

  __on_clipshare() {
    this.props.confirm({
      content: "确认截取所有学生屏幕吗？",
      sure: () => {
        this.$session.send_message("clipshare");
      }
    });
  }
  /**
   * 给所有人发送礼物
   */


  __send_gift_to_all() {
    this.props.confirm({
      title: "礼物奖励",
      content: "确认送给所有学生奖励吗？",
      sure: () => {
        this.__send_gift();
      }
    });
  }

  __send_gift(user) {
    let ids = [];

    if (!user) {
      this.props.students.forEach(student => {
        if (student.online) {
          ids.push(student.id);
        }
      });

      if (ids.length == 0) {
        return;
      }
    }

    net.sendGift({
      channel_id: this.props.room.channel_id,
      to_id: user ? user.id : ids.join(",")
    }).then(res => {
      // 送礼物结果
      // 更新本地礼物数量
      this.props.onUpdateGift(res);
      res.forEach(item => {
        this.$signal.send({
          type: "gift",
          from: this.props.account.id,
          to: "all",
          message: {
            uid: item.to_id,
            total: item.total
          }
        });
      });
    });
  }
  /**
   * 坐姿警告
   */


  __warn(user) {
    if (!user) return;
    let user_id = user.id;
    net.warn({
      channel_id: this.props.room.channel_id,
      user_id: user_id,
      lesson_page: this.state.process.current || 1
    }).then(res => {
      if (!(res && res.leave_id)) return;
      this.$warning_id_hash[user_id] = res.leave_id;
      this.$signal.send({
        type: dev_const["default"].WARN,
        from: this.props.account.id,
        to: "all",
        message: {
          uid: user_id - 0,
          leave_id: res.leave_id,
          time: this.__get_server_time()
        }
      });

      let checkover = reason => {
        console.log('checkover reason:', reason);

        if (this.$warning_timer_timeout_hash[user_id]) {
          clearTimeout(this.$warning_timer_timeout_hash[user_id]);
          delete this.$warning_timer_timeout_hash[user_id];
        }

        console.log('this.$warning_timer_interval_hash[user_id]', this.$warning_timer_interval_hash[user_id]);

        if (this.$warning_timer_interval_hash[user_id]) {
          clearInterval(this.$warning_timer_interval_hash[user_id]);
          delete this.$warning_timer_interval_hash[user_id];
        }

        console.log('relieve warning!', user_id);
        this.$signal.send({
          type: dev_const["default"].WARN_RELIEVE,
          from: this.props.account.id,
          to: "all",
          message: {
            uid: user.id - 0
          }
        });
      };

      this.$warning_timer_timeout_hash[user_id] = setTimeout(() => {
        checkover('too long time!');
      }, 60000);
      this.$warning_timer_interval_hash[user_id] = setInterval(() => {
        console.log('baseUpload starting...'); //截图上传

        let canvas_dom = external_jquery_default()(`#student_${user_id} div canvas`);

        if (canvas_dom && canvas_dom[0]) {
          let canvas = canvas_dom[0];
          let base64 = canvas.toDataURL('image/jpeg');
          net.baseUpload({
            upload_file: base64,
            leave_id: this.$warning_id_hash[user_id],
            user_id: user_id,
            channel_id: this.props.room.channel_id,
            token: net.token
          }).then(res => {
            if (!res) return;

            if (res.status && this.$warning_timer_interval_hash[user_id]) {
              checkover('success!!');
            }
          });
        } else {
          if (this.$warning_timer_interval_hash[user_id]) {
            checkover('no dream!');
          }
        }
      }, 5000);
    });
  }

  __on_start_course() {
    this.props.confirm({
      content: "真的真的要上课吗？？",
      sure: () => {
        this.setState({
          control: false
        });
        this.$session.send_message(dev_const["default"].START_COURSE);
        let user_ids = '';
        this.props.students.map(student => {
          if (student && student.online) {
            if (user_ids == '') {
              user_ids += student.id;
            } else {
              user_ids += ',' + student.id;
            }
          }
        });
        net.beginClass(this.props.room.channel_id, user_ids);
        this.props.onBeginCourse();
      }
    });
  }

  __counter_time_to_str() {
    let duration = Math.max(0, this.props.status.duration);
    let hour = duration / 60 / 60 >> 0;
    duration -= hour * 60 * 60;
    let minutes = duration / 60 >> 0;
    duration -= minutes * 60;
    let seconds = duration;

    let format = num => num > 9 ? num : "0" + num;

    return [course_teacher_page_jsx("div", {
      className: "couter-g"
    }, "0", format(hour), ":"), course_teacher_page_jsx("div", {
      className: "couter-g"
    }, "1", format(minutes), ":"), course_teacher_page_jsx("div", {
      className: "couter-g last"
    }, "2", format(seconds))];
  }

  __counter_starting_time_to_str() {
    let waiting = this.props.status.waiting;
    let left = waiting - this.state.time_diff;
    let days, hours, minutes, seconds;

    if (left < 1000 * 60 * 30 && left > 0) {
      days = left / 1000 / 60 / 60 / 24 >> 0;
      left -= days * 1000 * 60 * 60 * 24;
      hours = left / 1000 / 60 / 60 >> 0;
      minutes = (left - hours * 60 * 60 * 1000) / 1000 / 60 >> 0;
      seconds = left % (1000 * 60) / 1000 >> 0;
      seconds = days > 0 ? `` : `${seconds}秒`;
      days = days > 0 ? `${days}天` : ``;
      return `距离开始上课还有${days}${hours}小时${minutes}分钟${seconds}`;
    } else if (left <= 0) {
      return `上课时间已经过啦，快点开始上课吧！`;
    }
  }

  onHotKey(hotkeyName) {
    switch (dev_hotkey[hotkeyName]) {
      case dev_hotkey.KEY_C:
        this.__on_clipshare();

        break;

      case dev_hotkey.KEY_M:
        if (this.props.switches.magic) {
          this.$session.send_message(dev_const["default"].DISABLE_MAGIC);
        } else {
          this.$session.send_message(dev_const["default"].ENABLE_MAGIC);
        }

        break;

      case dev_hotkey.KEY_LEFT:
        this.props.onMagicSwitch(false);
        this.$session.send_message("appprevpage");
        break;

      case dev_hotkey.KEY_RIGHT:
        this.props.onMagicSwitch(false);
        this.$session.send_message("appnextpage");
        break;

      case dev_hotkey.KEY_G:
        this.__send_gift_to_all();

        break;

      default:
        break;
    }
  }

  __get_feature_name(feature_en_name) {
    let features = this.props.room.features || [];
    let result;
    features.map(_feature => {
      if (_feature && _feature.en_name == feature_en_name) {
        result = _feature.name;
      }
    });
    return result;
  }

  __get_feature_color(feature_en_name) {
    let features = this.props.room.features || [];
    let result;
    features.map(_feature => {
      if (_feature && _feature.en_name == feature_en_name) {
        result = _feature.color;
      }
    });
    return `${result}`;
  }

  render() {
    let dancing;
    setTimeout(() => {
      let teacher = this.props.teacher;

      if (teacher.stream && !teacher.stream_inited) {
        teacher.stream_inited = true;
        teacher.stream.play('master-head');
      }

      if (this.props.students) {
        this.props.students.forEach(student => {
          if (student.stream && !student.stream_inited) {
            console.log("play stream", student.id); // 开启了弱网络优化时

            if (this.__in_weak_net()) {
              if (student.id == this.props.account.id) {
                student.stream.play('student_' + student.id);
                student.stream_inited = true;
              }
            } else {
              if (student.id != this.$last_dancing) {
                student.stream.play('student_' + student.id);
              }

              student.stream_inited = true;
            }
          }

          if (student.stream_inited) {
            // 开启了弱网络优化时，只保留自己的流和正在上台人的流
            if (this.__in_weak_net()) {
              if (student.id != this.props.account.id && this.$last_dancing != student.id) {
                student.stream.stop();
                student.stream_inited = false;
              }
            }
          }

          if (!student.stream && student.id == this.$last_dancing) {
            this.$room.rtc.rtcengine.unsubscribe(this.$last_dancing);
            this.$last_dancing = null;
          }
        });
      }

      if (dancing) {
        this.__put_to_dancing(dancing.id);
      } else {
        if (this.$last_dancing) {
          this.__back_from_dancing(this.$last_dancing);
        }

        this.$last_dancing = null;
      }
    }, 0);
    let students = (this.props.students || []).concat(); // 排序按照进入场景的时间来排序

    students.sort((prev, next) => {
      next = next.online_time || new Date().getTime() + 1000000;
      prev = prev.online_time || new Date().getTime() + 1000000;
      return next < prev ? 1 : -1;
    });

    for (let i = 0, len = students.length; i < len; i++) {
      let item = students[i];

      if (item.dancing && item.stream) {
        dancing = item;
        break;
      }
    }

    let studentHeads = students.map((student, seatIndex) => {
      return course_teacher_page_jsx(student_head, {
        isTeacher: true,
        user: student,
        features: this.props.room.features,
        mainFeature: this.state.feature,
        seatIndex: seatIndex,
        onClickSpeak: user => {
          if (!user.unmuted) {
            this.$session.send_message(dev_const["default"].OPEN_MIC, {
              uid: user.id - 0
            });
          } else {
            this.$session.send_message(dev_const["default"].CLOSE_MIC, {
              uid: user.id - 0
            });
          }
        },
        onClickGift: user => {
          // 只有老师可以送礼物
          if (this.isMaster()) {
            this.__send_gift(user);
          }
        },
        onClickView: user => {
          if (user.dancing) {
            this.$session.send_message(dev_const["default"].BACK_DANCE, {
              id: user.id
            });
          } else {
            this.$session.send_message(dev_const["default"].PUT_DANCE, {
              id: user.id
            });
          }
        },
        onClickWarn: user => {
          if (this.isMaster()) {
            this.__warn(user);
          }
        }
      }, student.id);
    });
    let handsupStudents = [];
    students.forEach(student => {
      if (student.online) {
        handsupStudents.push(student);
      }
    });
    let feature_tag_style = {
      background: this.__get_feature_color(this.state.feature)
    };

    let TeacherView = course_teacher_page_jsx("div", {
      className: "teacher-area"
    }, void 0, course_teacher_page_jsx("div", {
      className: "avatars"
    }, void 0, course_teacher_page_jsx("div", {
      className: this.state.draft ? "avatar draft" : "avatar nothing"
    }, void 0, course_teacher_page_jsx("div", {
      className: this.state.draft ? "draft-text" : "draft-text none",
      dangerouslySetInnerHTML: {
        __html: this.state.draft
      }
    }), this.state.feature ? course_teacher_page_jsx("span", {
      className: "feature-tag",
      style: feature_tag_style
    }, void 0, this.__get_feature_name(this.state.feature)) : ""), course_teacher_page_jsx("div", {
      className: "avatar"
    }, void 0, course_teacher_page_jsx("div", {
      className: "avatar-head",
      id: "master-head",
      style: {
        "backgroundImage": this.props.teacher.stream ? "" : `url(${this.props.teacher.avatarurl})`
      }
    }), course_teacher_page_jsx("div", {
      className: "avatar-info"
    }, void 0, "\u8001\u5E08\uFF1A", this.props.teacher.child_name, course_teacher_page_jsx("span", {
      onClick: () => {
        net.earlyWarning(this.props.room.channel_id);
      }
    })), course_teacher_page_ref, course_teacher_page_ref2, course_teacher_page_jsx("div", {
      className: this.state.warning && !this.state.warning_shown ? "warning-box show level-" + this.state.warning : "warning-box level-1"
    }, void 0, course_teacher_page_ref3, this.state.warning_message))));

    dancing && [].splice.call(studentHeads, 2, 0, course_teacher_page_jsx("div", {
      className: "dancing-container",
      style: {
        "marginRight": studentHeads.length < 2 ? 0.9 * (2 - studentHeads.length) + "rem" : 0
      }
    }, "dancing", course_teacher_page_ref4, course_teacher_page_jsx("div", {
      className: "avatar-info-student"
    }, void 0, "\u5B66\u751F\uFF1A", dancing.child_name), course_teacher_page_jsx("div", {
      className: "back-dance-btn",
      onClick: () => {
        if (this.$last_dancing) {
          this.$session.send_message(dev_const["default"].BACK_DANCE, {
            id: this.$last_dancing
          });
        }
      }
    })));

    let StudentView = course_teacher_page_jsx("div", {
      className: "student-area"
    }, void 0, studentHeads); //上课时间


    let tipStrStarting = this.__counter_starting_time_to_str();

    return course_teacher_page_jsx("div", {
      className: "page course-page teacher"
    }, void 0, course_teacher_page_jsx("div", {
      className: "inner"
    }, void 0, course_teacher_page_jsx("div", {
      className: "controls-wrapper"
    }, void 0, course_teacher_page_jsx("div", {
      className: this.state.control ? "controls open" : "controls close",
      onClick: () => {
        if (!this.state.control) {
          this.setState({
            control: true
          });
        }
      }
    }, void 0, course_teacher_page_jsx("button", {
      className: "page-back",
      onClick: () => {
        this.preLeaveCourse(true);
      }
    }), course_teacher_page_ref5, !this.props.status.started ? course_teacher_page_jsx("button", {
      className: "course-start",
      onClick: () => {
        this.__on_start_course();
      }
    }) : [course_teacher_page_jsx("button", {
      className: this.props.status.paused ? "course-pause paused" : "course-pause",
      onClick: () => {
        if (this.props.status.paused) {
          this.props.onResumeCourse();
          console.log("send message coursepause");
          this.$session.send_message(dev_const["default"].COURSE_RESUME);
        } else {
          this.props.onPauseCourse();
          this.$session.send_message(dev_const["default"].COURSE_PAUSE);
        }
      }
    }, "control-1"), course_teacher_page_jsx("button", {
      className: "course-end",
      onClick: () => {
        this.preLeaveCourse();
      }
    }, "control-2")], course_teacher_page_jsx("button", {
      className: "help-btn",
      onClick: () => {
        this.onHelpClick();
      }
    }), course_teacher_page_jsx("button", {
      className: "gohome-btn",
      onClick: () => {
        this.$session.send_message("appfirstpage");
      }
    }), course_teacher_page_jsx("div", {
      className: "switch-btn",
      onClick: () => {
        if (this.state.control) {
          this.setState({
            control: false
          });
        }
      }
    }))), course_teacher_page_jsx("div", {
      className: "content"
    }, void 0, StudentView, this.props.switches.handsup ? course_teacher_page_jsx(components_handsup, {
      users: handsupStudents,
      onClickClose: () => {
        this.$session.send_message(dev_const["default"].CLOSE_RACE);
      }
    }) : "", !!tipStrStarting && !this.props.status.started && !this.state.no_confirm_mask && this.isChairMaster() ? course_teacher_page_jsx("div", {
      className: "course-confirm-mask"
    }, void 0, course_teacher_page_jsx("div", {
      className: "course-confirm-dialog"
    }, void 0, course_teacher_page_jsx("div", {
      className: "course-start-time-tip"
    }, void 0, tipStrStarting), course_teacher_page_jsx("div", {
      className: "course-not-begin-btn c-btn",
      onClick: () => {
        this.setState({
          no_confirm_mask: true
        });
      }
    }, void 0, "\u6211\u662F\u78E8\u8BFE\uFF0C\u4E0D\u4E0A\u8BFE"), course_teacher_page_jsx("div", {
      className: "course-begin-btn c-btn",
      onClick: () => {
        this.__on_start_course();
      }
    }, void 0, "\u6211\u8981\u5F00\u59CB\u4E0A\u8BFE\uFF01\uFF01"))) : "", course_teacher_page_jsx("div", {
      className: "course-content-area"
    }, void 0, course_teacher_page_ref6, course_teacher_page_jsx("div", {
      className: "operations"
    }, void 0, course_teacher_page_jsx("button", {
      className: "course-clear",
      onClick: () => {
        this.$session.send_message("appclearall");
      }
    }), course_teacher_page_jsx("button", {
      className: this.props.switches.rank ? "course-rank" : "course-rank off",
      onClick: () => {
        if (this.props.switches.rank) {
          this.$session.send_message(dev_const["default"].HIDE_RANKS);
        } else {
          this.$session.send_message(dev_const["default"].SHOW_RANKS);
        }
      }
    }), course_teacher_page_jsx("button", {
      className: "course-clip",
      onClick: () => {
        this.__on_clipshare();
      }
    }, void 0, course_teacher_page_ref7), course_teacher_page_jsx("button", {
      className: "course-prevpage",
      onClick: () => {
        this.props.onMagicSwitch(false);
        this.$session.send_message("appprevpage");
      }
    }, void 0, course_teacher_page_ref8), course_teacher_page_jsx("button", {
      className: this.props.switches.magic ? "course-magic" : "course-magic off",
      onClick: () => {
        if (this.props.switches.magic) {
          this.$session.send_message(dev_const["default"].DISABLE_MAGIC);
        } else {
          this.$session.send_message(dev_const["default"].ENABLE_MAGIC);
        }
      }
    }, void 0, course_teacher_page_ref9), course_teacher_page_jsx("button", {
      className: "course-nextpage",
      onClick: () => {
        this.props.onMagicSwitch(false);
        this.$session.send_message("appnextpage");
      }
    }, void 0, _ref10), course_teacher_page_jsx("button", {
      className: "course-gift",
      onClick: () => {
        this.__send_gift_to_all();
      }
    }, void 0, _ref11), course_teacher_page_jsx("button", {
      className: this.props.switches.handsup ? "course-handsup" : "course-handsup off",
      onClick: () => {
        if (this.props.switches.handsup) {
          this.$session.send_message(dev_const["default"].CLOSE_RACE);
        } else {
          this.$session.send_message(dev_const["default"].OPEN_RACE);
        }
      }
    }), course_teacher_page_jsx("button", {
      className: this.props.switches.muteall ? "course-muteall off" : "course-muteall",
      onClick: () => {
        if (this.props.switches.muteall) {
          this.$session.send_message(dev_const["default"].UNMUTE_ALL);
        } else {
          this.$session.send_message(dev_const["default"].MUTE_ALL);
        }
      }
    }), course_teacher_page_jsx("button", {
      className: this.props.switches.silent ? "course-silent off" : "course-silent",
      onClick: () => {
        if (this.props.switches.silent) {
          this.$room.keepSilent(false);
          this.props.onSilentSwitch(false);
        } else {
          this.$room.keepSilent(true);
          this.props.onSilentSwitch(true);
        }
      }
    })))), course_teacher_page_jsx("div", {
      className: "entities-area"
    }, void 0, TeacherView, course_teacher_page_jsx("div", {
      className: "counter"
    }, void 0, "\u5012\u8BA1\u65F6\uFF1A", this.__counter_time_to_str(), course_teacher_page_jsx("div", {
      className: "process"
    }, void 0, "\u8BFE\u7A0B\u8FDB\u5EA6\uFF1A", this.state.process.current, "/", this.state.process.total)))));
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    account: state.login.account,
    room: state.room.info,
    students: state.room.students,
    start_time: state.room.start_time,
    teacher: state.room.teacher,
    started: state.main.courseStarted,
    switches: state.room.switches,
    status: state.room.status,
    netStatus: state.main.netStatus
  };
};

const course_teacher_page_mapDispatchToProps = dispatch => ({
  onRoomMoreInfo: data => dispatch(Object(actions["O" /* onRoomMoreInfo */])(data)),
  onNewStream: data => dispatch(Object(actions["E" /* onNewStream */])(data)),
  onStreamLeave: data => dispatch(Object(actions["R" /* onStreamLeave */])(data)),
  onHandsupSwitch: status => dispatch(Object(actions["s" /* onHandsupSwitch */])(status)),
  onMagicSwitch: status => dispatch(Object(actions["z" /* onMagicSwitch */])(status)),
  onRankSwitch: status => dispatch(Object(actions["K" /* onRankSwitch */])(status)),
  onMuteAllSwitch: status => dispatch(Object(actions["A" /* onMuteAllSwitch */])(status)),
  onSilentSwitch: status => dispatch(Object(actions["P" /* onSilentSwitch */])(status)),
  onNewGift: data => dispatch(Object(actions["D" /* onNewGift */])(data)),
  onWarn: (data, status) => dispatch(Object(actions["V" /* onWarn */])(data, status)),
  onHandsupRank: (id, rank) => dispatch(Object(actions["r" /* onHandsupRank */])(id, rank)),
  onUserMuted: (id, status, recovering) => dispatch(Object(actions["U" /* onUserMuted */])(id, status, recovering)),
  onDancing: (id, status) => dispatch(Object(actions["l" /* onDancing */])(id, status)),
  onEndCourse: () => dispatch(Object(actions["m" /* onEndCourse */])()),
  onBeginCourse: () => dispatch(Object(actions["f" /* onBeginCourse */])()),
  onPauseCourse: () => dispatch(Object(actions["F" /* onPauseCourse */])()),
  onResumeCourse: () => dispatch(Object(actions["L" /* onResumeCourse */])()),
  onCourseTick: () => dispatch(Object(actions["k" /* onCourseTick */])()),
  onCourseStartingTick: () => dispatch(Object(actions["j" /* onCourseStartingTick */])()),
  confirm: data => dispatch(Object(actions["b" /* confirm */])(data)),
  alert: data => dispatch(Object(actions["a" /* alert */])(data)),
  onEnterTester: page => dispatch(Object(actions["o" /* onEnterTester */])(page)),
  showLoading: message => dispatch(Object(actions["X" /* showLoading */])(message)),
  hideLoading: () => dispatch(Object(actions["d" /* hideLoading */])()),
  onUpdateGift: data => dispatch(Object(actions["S" /* onUpdateGift */])(data)),
  onProgressUpdate: (id, percent) => dispatch(Object(actions["H" /* onProgressUpdate */])(id, percent)),
  onProgressReset: () => dispatch(Object(actions["G" /* onProgressReset */])()),
  onUserAddRoom: id => dispatch(Object(actions["T" /* onUserAddRoom */])(id))
});

/* harmony default export */ var course_teacher_page = (Object(external_react_redux_["connect"])(mapStateToProps, course_teacher_page_mapDispatchToProps)(course_teacher_page_Course));
// CONCATENATED MODULE: ./dev/scripts/RecordVideo.js




class RecordVideo_RecordVideo extends eventer["a" /* default */] {
  constructor(id, data, speed = 1) {
    super();
    this.$id = id;
    this.$waiting = false;
    this.$playing = false;
    this.$seek_to = null;
    this.$speed = speed;
    this.$seeking = false;
    this.$canplay = false;

    if (data) {
      this.$data = data;
    }
  }

  seekTo(time) {
    this.$seek_to = time;

    if (this.$video && !this.$seeking) {
      // 当前进度超前
      this.$video[0].currentTime = time;
      this.$seeking = true;
    }
  }

  jumpTo(time) {
    if (this.$video) {
      this.$video[0].currentTime = time;
    }
  }

  set speed(speed) {
    this.$speed = speed;

    if (this.$video) {
      this.$video[0].playbackRate = this.$speed;
    }
  }

  set data(data) {
    this.$data = data[this.$id]; // 设置data之后，判断队列中是否有等待播放列表

    if (this.$waiting) {
      this.__render();
    }
  }

  get data() {
    return this.$data;
  }

  get currentTime() {
    if (this.$video) {
      return this.$video[0].currentTime;
    } else {
      return 0;
    }
  }

  get playing() {
    return this.$playing;
  }

  getId() {
    return this.$id;
  }

  play(dom) {
    if (this.$playing) return;

    if (dom) {
      this.$holder = "#" + dom;
    }

    if (!this.$data) {
      this.$waiting = true;
      this.trigger("nores");
    } else {
      this.__render();
    }
  }

  pause() {
    console.log("call video pause..", this.$playing);
    this.$playing = false;
    this.$video && this.$video[0].pause();
  }

  __timeupdate() {
    let time = this.currentTime;

    if (this.$seek_to) {
      if (time >= this.$seek_to) {
        this.$seek_to = null;
        this.$seeking = false;
      }
    }

    this.trigger("timeupdate");
  }

  __durationupdate(duration) {
    this.trigger("durationupdate", {
      duration
    });
  }

  __render() {
    if (!this.$dom) {
      this.$dom = external_jquery_default()(`<div id="record_${this.$id}"></div>`); // 预加载视频资源

      let video = external_jquery_default()("<video/>");
      video.attr("src", this.$data.hf_url).attr("id", `video_${this.$id}`);
      video.on("canplay", () => {
        this.trigger("canplay");
        video.off();
        video.on("timeupdate", () => {
          this.__timeupdate();
        });
        video.on("play", () => {
          this.$playing = true;
        });
        video.on("pause", () => {
          this.$playing = false;
        });
        this.$dom.append(video);
        external_jquery_default()(this.$holder).append(this.$dom);
        this.$video = video;
        this.$canplay = true;
      });
      video.on("durationchange", () => {
        this.__durationupdate(video[0].duration);
      });
      video.on("error", () => {
        console.log("on load video error", video);
        this.trigger("error");
      });
      video[0].playbackRate = this.$speed;
      video[0].play();
    } else {
      if (this.$canplay) {
        this.$video[0].play();
      }
    }

    this.$waiting = false;
  }

  destroy() {
    if (this.$video) {
      this.$video[0].pause();
      this.$video.remove();
      this.$video = null;
    }

    if (this.$dom) {
      this.$dom.remove();
      this.$dom = null;
    }
  }

}

class RecordVideo_RecordVideoManager extends eventer["a" /* default */] {
  constructor() {
    super();
    this.$busy = false;
    this.$queue = [];
    this.$list = {};
    this.$data = {};
    this.$speed = 1;
    this.$jump_queue_hash = {};
  }

  __timeupdate(id, time) {
    // 如果是主列表，则判断列表中的视频是否需要同步
    this.trigger("timeupdate", {
      id,
      time,
      data: this.$data[id]
    });
  }

  __durationupdate(id, time) {
    // 如果是主列表，则判断列表中的视频是否需要同步
    this.trigger("durationupdate", {
      id,
      time,
      data: this.$data[id]
    });
  }

  __is_master(id) {
    return this.$master == id;
  }

  playVideo(id) {
    let video = this.$list[id];

    if (video) {
      video.play();
    }
  }

  pauseVideo(id) {
    let video = this.$list[id];

    if (video) {
      video.pause();
    }
  }

  seekTo(id, time) {
    let video = this.$list[id];

    if (video) {
      video.seekTo(time);
    }
  }

  jumpTo(id, time) {
    let video = this.$list[id];
    if (!video) return;

    let __jumpTo = () => {
      if (time < 0) {
        console.log("call pause...", id, time);
        video.pause();
      } else {
        console.log("call play...", id, time);
        video.jumpTo(time);
        video.play();
      }
    };

    if (video.$canplay) {
      __jumpTo();
    } else {
      this.$jump_queue_hash[id] = this.$jump_queue_hash[id] || [];
      this.$jump_queue_hash[id].push(__jumpTo);
    }
  }

  set speed(speed) {
    if (this.$speed == speed) {
      return;
    }

    this.$speed = speed;

    for (let key in this.$list) {
      let video = this.$list[key];
      video.speed = this.$speed;
    }
  }

  set data(data) {
    this.$master = data.room.master_teacher;
    data.users.forEach((user, index) => {
      let base = 'https://muwen.mw009.com';
      let urls = [base, 'http://muwen1.mw009.com', 'http://muwen2.mw009.com', 'http://muwen3.mw009.com', 'http://muwen4.mw009.com', 'http://muwen5.mw009.com', 'http://muwen6.mw009.com'];

      if (user.hf_url) {
        user.hf_url = user.hf_url.replace(base, urls[index % urls.length]);
        this.$data[user.id] = user;
      }
    });

    for (let key in this.$list) {
      let video = this.$list[key];

      if (!video.data && data[key]) {
        video.data = data[key];
      }
    }
  }

  play(stream, dom) {
    if (stream) {
      this.$queue.push([stream, dom]);
    }

    if (this.$busy) {
      return;
    }

    let param = this.$queue.shift();

    if (param) {
      this.$busy = true;
      let stream = param[0];

      let goon = () => {
        stream.off('canplay');
        stream.off('error');
        stream.off('nores');
        this.$busy = false;
        this.play();
      };

      stream.on('canplay', () => {
        let _jump_to_func = (this.$jump_queue_hash[stream.$id] || []).shift();

        _jump_to_func && typeof _jump_to_func === 'function' && _jump_to_func();
        goon();
      });
      stream.on('error', () => {
        goon();
        this.$queue.push(param);
      });
      stream.on('nores', () => {
        goon();
      });
      stream.play(param[1]);
    }
  }

  create(id) {
    if (this.$list[id]) {
      return this.$list[id];
    } else {
      if (this.$data[id]) {
        let video = new RecordVideo_RecordVideo(id, this.$data[id], this.$speed);
        this.$list[id] = video;
        video.on("timeupdate", () => {
          this.__timeupdate(id, video.currentTime);
        });
        video.on("durationupdate", data => {
          this.__durationupdate(id, data.duration);
        });
        return video;
      }
    }
  }

  destroy() {
    for (let key in this.$list) {
      this.$list[key].destroy();
    }
  }

}

/* harmony default export */ var scripts_RecordVideo = (RecordVideo_RecordVideoManager);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(93);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);

// CONCATENATED MODULE: ./dev/scripts/containers/course.record.js


var course_record_REACT_ELEMENT_TYPE;

function course_record_jsx(type, props, key, children) { if (!course_record_REACT_ELEMENT_TYPE) { course_record_REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: course_record_REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }














var course_record_ref =
/*#__PURE__*/
course_record_jsx("div", {
  className: "ph-text"
}, void 0, "\u672A\u6307\u5B9A\u5C0F\u670B\u53CB\u53D1\u8A00");

var course_record_ref2 =
/*#__PURE__*/
course_record_jsx("div", {
  className: "avatar-head",
  id: "dancing-head"
});

var course_record_ref3 =
/*#__PURE__*/
course_record_jsx("div", {
  className: "course-content kc-canvas-area",
  id: "course-content"
});

class course_record_Course extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.$uuid = 0;
    this.$stat_arr = [];
    this.$session = new session(this);
    this.$audio = external_react_default.a.createRef();
    this.state = {
      time: new Date().getTime() / 1000,
      control: !this.props.status.started,
      process: {
        current: 0,
        total: 0
      }
    };
    this.$record_video = new scripts_RecordVideo();
    this.$audios_files = {};
    external_electron_["ipcRenderer"].on("DOWNLOADED", (event, url, file) => {
      network["default"].log({
        name: "DOWNLOADED",
        url,
        file
      });
      this.$audios_files[url] = file;
    });
  }

  get uuid() {
    return ++this.$uuid;
  }

  isMaster(id) {
    if (!id) {
      id = this.props.account.id;
    }

    for (let i = 0, len = this.props.room.teachers.length; i < len; i++) {
      let item = this.props.room.teachers[i];

      if (item.id == id) {
        return true;
      }
    }
  }

  isChairMaster(id) {
    if (!id) {
      id = this.props.account.id;
    }

    return this.props.room.teacher_id == id;
  }

  isSubMaster(id) {
    if (!id) {
      id = this.props.account.id;
    }

    return this.isMaster(id) && !this.isChairMaster(id);
  }

  getUser(id) {
    if (id == this.props.teacher.id) {
      return this.props.teacher;
    }

    for (let i = 0, len = this.props.students.length; i < len; i++) {
      let item = this.props.students[i];

      if (item.id == id) {
        return item;
      }
    }
  }

  __load_sound(url) {
    console.log("call load file...", url);
    external_electron_["ipcRenderer"].send("DOWNLOAD", url);
  }

  playMusic(url, needevent) {
    this.stopMusic();
    let soundUrl = url;

    if (this.$audios_files[url]) {
      soundUrl = this.$audios_files[url];
      const blob = external_fs_default.a.readFileSync(soundUrl);
      const base64 = Buffer.from(blob).toString('base64');
      const uri = 'data:audio/mp3;base64,' + base64;
      soundUrl = uri;
    }

    this.$audio.src = soundUrl;
    this.$audio.play();

    if (needevent) {
      this.$playing = url;
      this.$session.send_message("soundupdate", {
        url: this.$playing,
        time: 0
      });
    } else {
      this.$playing = false;
    }
  }

  stopMusic(noevent) {
    let result = this.$audio.pause();
    console.log("stop audio mix", result);

    if (this.$playing) {
      if (!noevent) {
        this.$session.send_message("soundended", {
          url: this.$playing
        });
      }

      this.$playing = null;
    }
  }

  componentWillUnmount() {
    this.$session.destroy();
    clearInterval(this.$tick_timer);
    clearInterval(this.$music_timer);
    external_jquery_default()(`#dancing-head`).empty();
    external_jquery_default()('.avatar-head').empty();
    clearTimeout(this.$reload_timer);
    external_jquery_default()(window).off("resize");
    this.props.hideLoading();
    context["default"].detector.check();
  }

  componentDidMount() {
    context["default"].detector.uncheck();
    this.$reload_timer = null;
    external_jquery_default()(window).on("resize", () => {
      clearTimeout(this.$reload_timer);
      this.$reload_timer = setTimeout(() => {
        this.$session.reload(); // 发送init room message

        this.__send_init_room();
      }, 1000);
    });
    this.$session.on("NEW_MESSAGE", message => {
      this.__on_session_message(message);
    });
    network["default"].getRoomInfoForRecord(this.props.room.channel_id).then(result => {
      this.props.onRoomMoreInfo(result);

      this.__send_init_room();
    });
    this.$session.init("#course-content");
    network["default"].getServerTime().then(res => {
      this.setState({
        time: res.time * 1000
      });
    });
    this.$audio.addEventListener("ended", () => {
      console.log("on audiomixingfinished", this.$playing);

      if (this.$playing) {
        this.$session.send_message("soundended", {
          url: this.$playing
        });
        this.$playing = null;
      }
    });

    this.__tick();
  }

  __send_init_room() {
    // 发送init-room
    let masters = [];
    this.props.room.teachers.forEach(teacher => {
      masters.push(teacher.id);
    });
    let userinfos = [this.props.teacher];
    userinfos = userinfos.concat(this.props.students);
    this.$session.send_message(dev_const["default"].INIT_ROOM, {
      channel_id: this.props.room.channel_id,
      token: network["default"].token
    }, {
      recording: true,
      master_ids: masters,
      userinfos: userinfos
    });
  }

  __build_stream(id) {
    return this.$record_video.create(id);
  }

  __tick() {
    this.$tick_timer = setInterval(() => {
      this.props.onCourseTick();
    }, 1000);
    this.$music_timer = setInterval(() => {
      if (this.$playing) {
        // 检测播放音乐
        let time = Math.floor(this.$audio.currentTime * 1000);
        this.$session.send_message("soundupdate", {
          url: this.$playing,
          time
        });
      }
    }, 100);
  }

  __set_record_data(data) {
    this.$record_video.data = data;
    data.users.forEach(user => {
      if (this.isMaster(user.id)) {
        let stream = this.$record_video.create(user.id);

        if (stream) {
          this.props.onNewStream(stream);
        }
      }
    });
    this.$record_video.on("timeupdate", event => {
      let master = false,
          time = event.time * 1000 >> 0;

      if (event.id == data.room.master_teacher) {
        master = true;
      }

      this.$session.send_message("recordtimeupdate", {
        id: event.id,
        time,
        master
      });
    });
    this.$record_video.on("durationupdate", event => {
      console.log("duration update", event);

      if (event.id == data.room.master_teacher) {
        this.$session.send_message("recorddurationupdate", {
          id: event.id,
          time: event.time
        });
      }
    });
  }

  __on_session_message(message) {
    if (message.to == "app") {
      let data = message.message,
          result;

      switch (message.type) {
        case dev_const["default"].JS_READY:
          break;

        case "starttest":
          break;

        case dev_const["default"].OPEN_MIC:
          break;

        case dev_const["default"].CLOSE_MIC:
          break;

        case dev_const["default"].ENABLE_MAGIC:
          this.props.onMagicSwitch(true);
          break;

        case dev_const["default"].DISABLE_MAGIC:
          this.props.onMagicSwitch(false);
          break;

        case dev_const["default"].MUTE_ALL:
          break;

        case dev_const["default"].UNMUTE_ALL:
          break;

        case dev_const["default"].SHOW_RANKS:
          this.props.onRankSwitch(true);
          break;

        case dev_const["default"].HIDE_RANKS:
          this.props.onRankSwitch(false);
          break;

        case dev_const["default"].PUT_DANCE:
          this.props.onDancing(data.id, true);
          break;

        case dev_const["default"].BACK_DANCE:
          this.props.onDancing(data.id, false);
          break;

        case "record_ready":
          console.log("record_ready", data);

          this.__set_record_data(data);

          break;

        case "playsound":
          let url = data.url,
              needevent = data.needevent;
          this.playMusic(url, needevent);
          break;

        case "stopsound":
          let noevent = data.noevent;
          this.stopMusic(noevent);
          break;

        case "showdraft":
          break;

        case "loadsound":
          this.__load_sound(data.url);

          break;

        case "course-process":
          break;

        case "record-play":
          this.$record_video.playVideo(data.id);
          break;

        case "record-pause":
          this.$record_video.pauseVideo(data.id);
          break;

        case "record-seek":
          data.forEach(video => {
            this.$record_video.seekTo(video.id, video.time);
          });
          break;

        case "record-jump":
          data.forEach(video => {
            this.$record_video.jumpTo(video.id, video.time);
          });
          break;

        case "record-speed":
          this.$record_video.speed = data.speed;
          break;

        case "record-backdance":
          this.__back_from_dancing(this.$last_dancing);

          break;

        default:
          if (message.type.indexOf("*") == -1) {
            this.__on_signal_message(message);
          }

          break;
      }
    } else {
      this.__on_signal_message(message);
    }
  } // 是否处于弱网络状态


  __in_weak_net() {
    return this.props.netStatus == 0 && !this.isMaster();
  }

  __on_signal_message(message) {
    let data = message.message;

    switch (message.type) {
      case "closeroom":
        this.leaveCourse();
        break;

      case dev_const["default"].MEMBER_ADD:
        data.forEach(item => {
          let stream = this.__build_stream(item.id);

          if (stream) {
            this.props.onNewStream(stream);
          }
        });
        break;

      case dev_const["default"].MEMBER_LEAVE:
        break;

      case dev_const["default"].OPEN_MIC:
      case dev_const["default"].CLOSE_MIC:
      case dev_const["default"].PUT_DANCE:
      case dev_const["default"].BACK_DANCE:
        break;

      case dev_const["default"].OPEN_RACE:
        break;

      case dev_const["default"].CLOSE_RACE:
        break;

      case "racerank":
        break;

      case dev_const["default"].NEXT_PAGE:
        this.$playing = false;
        this.props.onProgressReset();
        this.$session.send_message(null, null, message);
        break;

      case dev_const["default"].DISABLE_MAGIC:
        this.props.onProgressReset();
        this.$session.send_message(null, null, message);
        break;

      case "gift":
        this.props.onNewGift(data);
        this.$session.send_message(null, null, message);
        break;

      case "progress":
        //接收到来自学生的进度提示通知界面调整
        if (this.props.switches.magic) {
          this.props.onProgressUpdate(message.from, data.percent);
        }

        break;

      default:
        this.$session.send_message(null, null, message);
    }
  }

  leaveCourse() {
    this.$record_video.destroy();
    this.$session.destroy();
    this.props.onCourseRecording(false);
  }

  preLeaveCourse() {
    this.leaveCourse();
  }

  __put_to_dancing(id) {
    if (this.$last_dancing) {
      if (this.$last_dancing == id) {
        return;
      }

      this.__back_from_dancing(this.$last_dancing);
    }

    console.log("do put message", id);
    external_jquery_default()(`#record_${id}`).css({
      position: "fixed",
      left: external_jquery_default()("#dancing-head").offset().left,
      top: external_jquery_default()("#dancing-head").offset().top,
      width: external_jquery_default()("#dancing-head").width(),
      height: external_jquery_default()("#dancing-head").height(),
      "background-color": "#000",
      overflow: "hidden"
    });
    this.$last_dancing = id;
  }

  __back_from_dancing(id) {
    if (!this.$last_dancing || this.$last_dancing != id) {
      return;
    }

    this.props.onDancing(id, false);
    external_jquery_default()(`#dancing-head`).empty();
    external_jquery_default()(`#record_${id}`).css({
      position: "static",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      "background-color": "transparent"
    });
    this.$last_dancing = null;
  }

  __counter_time_to_str() {
    let duration = Math.max(0, this.props.status.duration);
    let hour = duration / 60 / 60 >> 0;
    duration -= hour * 60 * 60;
    let minutes = duration / 60 >> 0;
    duration -= minutes * 60;
    let seconds = duration;

    let format = num => num > 9 ? num : "0" + num;

    return [course_record_jsx("div", {
      className: "couter-g"
    }, "0", format(hour), ":"), course_record_jsx("div", {
      className: "couter-g"
    }, "1", format(minutes), ":"), course_record_jsx("div", {
      className: "couter-g last"
    }, "2", format(seconds))];
  }

  render() {
    let dancing;
    setTimeout(() => {
      let teacher = this.props.teacher;

      if (teacher.stream && !teacher.stream_inited) {
        teacher.stream_inited = true;
        this.$record_video.play(teacher.stream, 'master-head');
      }

      if (this.props.students) {
        this.props.students.forEach(student => {
          if (student.stream && !student.stream_inited) {
            console.log("play stream", student.id); // 开启了弱网络优化时

            if (this.__in_weak_net()) {
              if (student.id == this.props.account.id) {
                this.$record_video.play(student.stream, 'student_' + student.id);
                student.stream_inited = true;
              }
            } else {
              if (student.id != this.$last_dancing) {
                this.$record_video.play(student.stream, 'student_' + student.id);
              }

              student.stream_inited = true;
            }
          }

          if (student.stream_inited) {
            // 开启了弱网络优化时，只保留自己的流和正在上台人的流
            if (this.__in_weak_net()) {
              if (student.id != this.props.account.id && this.$last_dancing != student.id) {
                student.stream.stop();
                student.stream_inited = false;
              }
            }
          }

          if (!student.stream && student.id == this.$last_dancing) {
            this.$last_dancing = null;
          }
        });
      }

      if (dancing) {
        this.__put_to_dancing(dancing.id);
      } else {
        if (this.$last_dancing) {
          this.__back_from_dancing(this.$last_dancing);
        }

        this.$last_dancing = null;
      }
    }, 0);
    let students = (this.props.students || []).concat(); // 排序按照进入场景的时间来排序

    students.sort((prev, next) => {
      next = next.online_time || new Date().getTime() + 1000000;
      prev = prev.online_time || new Date().getTime() + 1000000;
      return next < prev ? 1 : -1;
    }); // students.sort((prev,next)=>{
    // 	return (next.gift_total||0) > (prev.gift_total||0) ? 1 : -1
    // })

    for (let i = 0, len = students.length; i < len; i++) {
      let item = students[i];

      if (item.dancing && item.stream) {
        dancing = item;
        break;
      }
    }

    let studentHeads = students.map(student => course_record_jsx(student_head, {
      isTeacher: false,
      user: student.online ? student : {},
      onClickSpeak: user => {
        if (!user.unmuted) {
          this.$session.send_message(dev_const["default"].OPEN_MIC, {
            uid: user.id - 0
          });
        } else {
          this.$session.send_message(dev_const["default"].CLOSE_MIC, {
            uid: user.id - 0
          });
        }
      },
      onClickGift: user => {
        // 只有老师可以送礼物
        if (this.isMaster()) {
          this.__send_gift(user);
        }
      },
      onClickView: user => {
        if (user.dancing) {
          this.$session.send_message(dev_const["default"].BACK_DANCE, {
            id: user.id
          });
        } else {
          this.$session.send_message(dev_const["default"].PUT_DANCE, {
            id: user.id
          });
        }
      }
    }, student.id));
    let handsupStudents = [];
    students.forEach(student => {
      if (student.online) {
        handsupStudents.push(student);
      }
    });

    let TeacherView = course_record_jsx("div", {
      className: "teacher-area role-student"
    }, void 0, course_record_jsx("div", {
      className: "avatars"
    }, void 0, course_record_jsx("div", {
      className: "avatar"
    }, void 0, course_record_jsx("div", {
      className: "avatar-head",
      id: "master-head",
      style: {
        "backgroundImage": this.props.teacher.stream ? "" : `url(${this.props.teacher.avatarurl})`
      }
    }), course_record_jsx("div", {
      className: "avatar-info"
    }, void 0, "\u8001\u5E08\uFF1A", this.props.teacher.child_name)), course_record_jsx("div", {
      className: dancing ? "avatar" : this.state.draft ? "avatar draft" : "avatar nothing"
    }, void 0, course_record_ref, course_record_ref2, course_record_jsx("div", {
      className: "avatar-info"
    }, void 0, "\u5B66\u751F\uFF1A", dancing ? dancing.child_name : ""), course_record_jsx("div", {
      className: this.state.draft ? "draft-text" : "draft-text none",
      dangerouslySetInnerHTML: {
        __html: this.state.draft
      }
    }))));

    let StudentView = course_record_jsx("div", {
      className: "student-area"
    }, void 0, studentHeads);

    return course_record_jsx("div", {
      className: "page course-page student"
    }, void 0, course_record_jsx("button", {
      className: "record-back",
      onClick: () => {
        this.leaveCourse();
      }
    }), course_record_jsx("div", {
      className: "inner"
    }, void 0, course_record_jsx("div", {
      className: "content"
    }, void 0, external_react_default.a.createElement("audio", {
      src: "",
      ref: ref => {
        this.$audio = ref;
      }
    }), course_record_ref3), course_record_jsx("div", {
      className: "entities-area"
    }, void 0, TeacherView, StudentView)));
  }

}

const course_record_mapStateToProps = (state, ownProps) => {
  return {
    account: state.login.account,
    room: state.room.info,
    students: state.room.students,
    teacher: state.room.teacher,
    started: state.main.courseStarted,
    switches: state.room.switches,
    status: state.room.status,
    netStatus: state.main.netStatus
  };
};

const course_record_mapDispatchToProps = dispatch => ({
  onRoomMoreInfo: data => dispatch(Object(actions["O" /* onRoomMoreInfo */])(data)),
  onNewStream: data => dispatch(Object(actions["E" /* onNewStream */])(data)),
  onStreamLeave: data => dispatch(Object(actions["R" /* onStreamLeave */])(data)),
  onHandsupSwitch: status => dispatch(Object(actions["s" /* onHandsupSwitch */])(status)),
  onMagicSwitch: status => dispatch(Object(actions["z" /* onMagicSwitch */])(status)),
  onRankSwitch: status => dispatch(Object(actions["K" /* onRankSwitch */])(status)),
  onMuteAllSwitch: status => dispatch(Object(actions["A" /* onMuteAllSwitch */])(status)),
  onSilentSwitch: status => dispatch(Object(actions["P" /* onSilentSwitch */])(status)),
  onNewGift: data => dispatch(Object(actions["D" /* onNewGift */])(data)),
  onHandsupRank: (id, rank) => dispatch(Object(actions["r" /* onHandsupRank */])(id, rank)),
  onUserMuted: (id, status, recovering) => dispatch(Object(actions["U" /* onUserMuted */])(id, status, recovering)),
  onDancing: (id, status) => dispatch(Object(actions["l" /* onDancing */])(id, status)),
  onEndCourse: () => dispatch(Object(actions["m" /* onEndCourse */])()),
  onBeginCourse: () => dispatch(Object(actions["f" /* onBeginCourse */])()),
  onPauseCourse: () => dispatch(Object(actions["F" /* onPauseCourse */])()),
  onResumeCourse: () => dispatch(Object(actions["L" /* onResumeCourse */])()),
  onCourseTick: () => dispatch(Object(actions["k" /* onCourseTick */])()),
  confirm: data => dispatch(Object(actions["b" /* confirm */])(data)),
  alert: data => dispatch(Object(actions["a" /* alert */])(data)),
  onEnterTester: page => dispatch(Object(actions["o" /* onEnterTester */])(page)),
  showLoading: message => dispatch(Object(actions["X" /* showLoading */])(message)),
  hideLoading: () => dispatch(Object(actions["d" /* hideLoading */])()),
  onUpdateGift: data => dispatch(Object(actions["S" /* onUpdateGift */])(data)),
  onProgressUpdate: (id, percent) => dispatch(Object(actions["H" /* onProgressUpdate */])(id, percent)),
  onProgressReset: () => dispatch(Object(actions["G" /* onProgressReset */])()),
  onUserAddRoom: id => dispatch(Object(actions["T" /* onUserAddRoom */])(id)),
  onCourseRecording: status => dispatch(Object(actions["i" /* onCourseRecording */])(status))
});

/* harmony default export */ var course_record = (Object(external_react_redux_["connect"])(course_record_mapStateToProps, course_record_mapDispatchToProps)(course_record_Course));
// EXTERNAL MODULE: ./dev/less/devices.less
var devices = __webpack_require__(112);

// EXTERNAL MODULE: external "react-rangeslider"
var external_react_rangeslider_ = __webpack_require__(94);
var external_react_rangeslider_default = /*#__PURE__*/__webpack_require__.n(external_react_rangeslider_);

// EXTERNAL MODULE: ./node_modules/react-rangeslider/lib/index.css
var lib = __webpack_require__(113);

// CONCATENATED MODULE: ./dev/scripts/containers/devices.js


var devices_REACT_ELEMENT_TYPE;

function devices_jsx(type, props, key, children) { if (!devices_REACT_ELEMENT_TYPE) { devices_REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: devices_REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }








const path = __webpack_require__(114);

const Const = __webpack_require__(2);

const DEBUG = __webpack_require__(14).DEBUG;

const devices_Storage = __webpack_require__(8);

const AgoraRtcEngine = __webpack_require__(86);

const $ = __webpack_require__(3);

const devices_net = __webpack_require__(7);

const devices_context = __webpack_require__(4);

const remote = __webpack_require__(6).remote;



var devices_ref =
/*#__PURE__*/
devices_jsx("div", {
  className: "step-title"
}, void 0, "\u786E\u8BA4\u6444\u50CF\u5934\u80FD\u591F\u6B63\u5E38\u663E\u793A\uFF0C\u5982\u6709\u95EE\u9898\u5207\u6362\u8BBE\u5907\u8BD5\u8BD5");

var devices_ref2 =
/*#__PURE__*/
devices_jsx("option", {
  disabled: true,
  selected: true
}, "nothing", "\u65E0\u53EF\u7528\u6444\u50CF\u5934\u8BBE\u5907");

var devices_ref3 =
/*#__PURE__*/
devices_jsx("div", {
  className: "video-area",
  id: "video-area"
});

var devices_ref4 =
/*#__PURE__*/
devices_jsx("div", {
  className: "step-title"
}, void 0, "\u8BF4\u51E0\u53E5\u8BDD\u786E\u8BA4\u97F3\u91CF\u6709\u53D8\u5316\uFF0C\u5982\u6709\u95EE\u9898\u5207\u6362\u8BBE\u5907\u8BD5\u8BD5");

var devices_ref5 =
/*#__PURE__*/
devices_jsx("option", {
  disabled: true,
  selected: true
}, "nothing", "\u65E0\u53EF\u7528\u9EA6\u514B\u98CE\u8BBE\u5907");

var devices_ref6 =
/*#__PURE__*/
devices_jsx("div", {
  className: "mic-icon"
});

var devices_ref7 =
/*#__PURE__*/
devices_jsx("div", {
  className: "step-title"
}, void 0, "\u8C03\u6574\u97F3\u91CF\u786E\u8BA4\u80FD\u542C\u5230\u97F3\u4E50\uFF0C\u5982\u6709\u95EE\u9898\u5207\u6362\u8BBE\u5907\u8BD5\u8BD5");

var devices_ref8 =
/*#__PURE__*/
devices_jsx("option", {
  disabled: true,
  selected: true
}, "nothing", "\u65E0\u53EF\u7528\u626C\u58F0\u5668\u8BBE\u5907");

var devices_ref9 =
/*#__PURE__*/
devices_jsx("div", {
  className: "music-icon"
});

var devices_ref10 =
/*#__PURE__*/
devices_jsx("div", {
  className: "steps"
}, void 0, devices_jsx("div", {
  className: "line l0"
}), devices_jsx("div", {
  className: "line l1"
}), devices_jsx("div", {
  className: "line l2"
}), devices_jsx("div", {
  className: "step step-0"
}, void 0, devices_jsx("div", {
  className: "step-name"
}, void 0, devices_jsx("i", {
  className: "icon"
}), "\u4E3B\u673A\u68C0\u6D4B"), devices_jsx("div", {
  className: "step-num"
}, void 0, "1")), devices_jsx("div", {
  className: "step step-1"
}, void 0, devices_jsx("div", {
  className: "step-name"
}, void 0, devices_jsx("i", {
  className: "icon"
}), "\u6444\u50CF\u5934\u68C0\u6D4B"), devices_jsx("div", {
  className: "step-num"
}, void 0, "2")), devices_jsx("div", {
  className: "step step-2"
}, void 0, devices_jsx("div", {
  className: "step-name"
}, void 0, devices_jsx("i", {
  className: "icon"
}), "\u9EA6\u514B\u98CE\u68C0\u6D4B"), devices_jsx("div", {
  className: "step-num"
}, void 0, "3")), devices_jsx("div", {
  className: "step step-3"
}, void 0, devices_jsx("div", {
  className: "step-name"
}, void 0, devices_jsx("i", {
  className: "icon"
}), "\u626C\u58F0\u5668\u68C0\u6D4B"), devices_jsx("div", {
  className: "step-num"
}, void 0, "4")));

class devices_Devices extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.$client = new AgoraRtcEngine();
    this.$client.initialize(Const.AGORA_APPID);
    this.$client.setChannelProfile(1);
    this.$client.setClientRole(1);
    this.$client.setAudioProfile(0, 1);
    this.$client.setParameters('{"che.audio.live_for_comm":true}');
    this.$client.setParameters('{"che.audio.enable.agc":false}');
    this.$client.setParameters('{"che.video.moreFecSchemeEnable":true}');
    this.$client.setParameters('{"che.video.lowBitRateStreamParameter":{"width":192,"height":108,"frameRate":15,"bitRate":100}}');
    this.$client.enableDualStreamMode(true);
    this.$client.enableVideo();
    this.$client.enableLocalVideo(true);
    this.$client.setVideoProfile(45);
    this.$client.enableLastmileTest();
    let video_devices = this.$client.getVideoDevices();
    let audio_devices = this.$client.getAudioRecordingDevices();
    let speaker_devices = this.$client.getAudioPlaybackDevices();
    let currentVideoDevice = devices_Storage.get("VIDEO_DEVICE"),
        currentAudioDevice = devices_Storage.get("AUDIO_DEVICE"),
        currentSpeakerDevice = devices_Storage.get("PLAYBACK_DEVICE");

    if (!currentVideoDevice) {
      currentVideoDevice = this.$client.getCurrentVideoDevice();
    }

    if (!currentAudioDevice) {
      currentAudioDevice = this.$client.getCurrentAudioRecordingDevice();
    }

    if (!currentSpeakerDevice) {
      currentSpeakerDevice = this.$client.getCurrentAudioPlaybackDevice();
    }

    if (currentVideoDevice) {
      this.$client.setVideoDevice(currentVideoDevice);
    }

    if (currentAudioDevice) {
      this.$client.setAudioRecordingDevice(currentAudioDevice);
    }

    if (currentSpeakerDevice) {
      this.$client.setAudioPlaybackDevice(currentSpeakerDevice);
    }

    let currentVideoName, currentSpeakerName, currentAudioName;

    for (let i = 0, len = video_devices.length; i < len; i++) {
      let item = video_devices[i];

      if (item.deviceid == currentVideoDevice) {
        currentVideoName = item.devicename;
      }
    }

    for (let i = 0, len = audio_devices.length; i < len; i++) {
      let item = audio_devices[i];

      if (item.deviceid == currentAudioDevice) {
        currentAudioName = item.devicename;
      }
    }

    for (let i = 0, len = speaker_devices.length; i < len; i++) {
      let item = speaker_devices[i];

      if (item.deviceid == currentSpeakerDevice) {
        currentSpeakerName = item.devicename;
      }
    }

    this.$quality_msg = ["未知", "极好", "好", "一般", "差", "极差", "不可用"];
    this.state = {
      currentVideoDevice,
      currentVideoName,
      currentSpeakerDevice,
      currentSpeakerName,
      currentAudioDevice,
      currentAudioName,
      video_devices,
      audio_devices,
      speaker_devices,
      volume: this.$client.getAudioPlaybackVolume(),
      step: 0,
      netquality: 0,
      net_history: [0],
      check_over: 0
    };
    this.$client.on("lastmilequality", quality => {
      console.log("quality", quality);
      let qualities = this.state.net_history;
      qualities = qualities.splice(qualities.length - 50, qualities.length);
      qualities.push(quality);
      this.setState({
        netquality: quality,
        net_history: qualities
      });

      if (quality == 1 || quality == 2) {
        quality = 1;
      } else if (quality == 3) {
        quality = 2;
      } else if (quality == 4) {
        quality = 3;
      } else if (quality == 5) {
        quality = 4;
      } else {
        quality = 0;
      }

      devices_net.log({
        name: "NET:STATUS",
        status: quality
      });
    });
  }

  componentDidMount() {
    console.log("frompage", this.props.fromPage);
  }

  componentWillUnmount() {
    try {
      this.$client.videoSourceLeave();
      this.$client.videoSourceRelease();
      this.$client.stopPreview();
      this.$client.stopAudioRecordingDeviceTest();
      this.$client.removeAllListeners('audiovolumeindication');
      this.$client.stopAudioPlaybackDeviceTest();
      this.$client.disableLastmileTest();
    } catch (err) {
      console.log("client leave failed ", err);
    }
  }

  onStartMicTest() {
    this.$client.startAudioRecordingDeviceTest(100);
    this.$client.on('audiovolumeindication', (uid, volume, speaker, totalVolume) => {
      if (this.state.step == 2) {
        this.setState({
          inputVolume: parseInt(totalVolume / 255 * 13, 10)
        });
      }
    });
  }

  onChangeVolume(value) {
    this.setState({
      volume: value
    });
    this.$client.setAudioPlaybackVolume(value);
  }

  onStartPreview() {
    if (this.$previewing) return;
    this.$client.setupLocalVideo($("#video-area")[0]);
    this.$client.startPreview();
    this.$previewing = true;
  }

  onStopPreviewAndStepTo(step) {
    this.$previewing = false;
    this.$client.stopPreview();
    $("#video-area").empty();
    setTimeout(() => {
      this.setState({
        step
      });
    });
  }

  step0() {
    let systemInfo = (window.ENV_CONF || {}).systeminfo || {
      os: {},
      cpu: {},
      system: {}
    };

    try {
      let memory = remote.process.getSystemMemoryInfo() || {
        total: 0
      };
      let os = '操作系统：' + (systemInfo.os.distro || '').replace(/[^a-zA-Z_0-9 ]/g, '') + ' ' + (systemInfo.os.kernal || '');
      let cpuBrand = 'CPU型号：' + (systemInfo.cpu.brand || '');
      let cpuCores = 'CPU核数：' + (systemInfo.cpu.physicalCores || '') + '核' + (systemInfo.cpu.cores || '') + '线程';
      let cpuSpeed = 'CPU主频：' + (systemInfo.cpu.speed || '') + 'Hz' + (systemInfo.cpu.speed == systemInfo.cpu.speedmax ? '' : ' - ' + (systemInfo.cpu.speedmax || '') + 'Hz');
      let memoray = '系统内存：' + Math.round((memory.total || 0) / 1024 / 1024 * 10) / 10 + "G";
      let deviceType = '设备型号：' + (systemInfo.system.manufacturer || '') + (systemInfo.system.model || '');
      return devices_jsx("div", {
        className: "step-content"
      }, void 0, devices_jsx("div", {
        className: "os-detail-area"
      }, void 0, devices_jsx("div", {
        className: "os-cell"
      }, void 0, devices_jsx("div", {
        className: "cell-tag"
      }, void 0, os), devices_jsx("div", {
        className: "cell-tag"
      }, void 0, cpuBrand), devices_jsx("div", {
        className: "cell-tag"
      }, void 0, cpuCores), devices_jsx("div", {
        className: "cell-tag"
      }, void 0, cpuSpeed), devices_jsx("div", {
        className: "cell-tag"
      }, void 0, memoray), devices_jsx("div", {
        className: "cell-tag"
      }, void 0, deviceType))), devices_jsx("div", {
        className: "step-btns"
      }, void 0, devices_jsx("button", {
        onClick: () => {
          if (!devices_context.join_class_enabled) {
            this.props.alert({
              content: "亲爱的宝妈您好，因我们课件的动画和交互较多，经检测您目前的设备可能不支持我们的正常上课，为了避免影响您的上课体验，请联系您的顾问老师帮您解决，感谢您的支持！",
              sure: () => {}
            });
            return;
          }

          this.setState({
            step: 1
          });
        },
        className: "step-btn"
      }, void 0, "\u4E0B\u4E00\u6B65")));
    } catch (error) {
      console.log('error:device->step0,', error.message || error);
    }

    return '';
  }

  step1() {
    setTimeout(() => {
      this.onStartPreview();
    }, 0);
    return devices_jsx("div", {
      className: "step-content"
    }, void 0, devices_ref, devices_jsx("div", {
      className: "selector"
    }, void 0, "\u8BBE\u5907\uFF1A", devices_jsx("div", {
      className: "select-box"
    }, void 0, this.state.currentVideoName), devices_jsx("select", {
      className: "select",
      value: this.state.currentVideoDevice,
      onChange: event => {
        var index = event.nativeEvent.target.selectedIndex;
        var name = event.nativeEvent.target[index].text;
        this.setState({
          currentVideoDevice: event.target.value,
          currentVideoName: name
        });
        devices_Storage.store("VIDEO_DEVICE", event.target.value);
        this.$client.setVideoDevice(event.target.value);
      }
    }, void 0, this.state.video_devices.length > 0 ? this.state.video_devices.map(device => devices_jsx("option", {
      value: device.deviceid
    }, device.deviceid, device.devicename)) : devices_ref2)), devices_ref3, devices_jsx("div", {
      className: "step-btns"
    }, void 0, devices_jsx("button", {
      onClick: () => {
        this.onStartMicTest();
        this.onStopPreviewAndStepTo(2);
      },
      className: "step-btn"
    }, void 0, "\u4E0B\u4E00\u6B65"), devices_jsx("button", {
      onClick: () => {
        this.onStopPreviewAndStepTo(0);
        this.setState({
          step: 0
        });
      },
      className: "prev-step-btn"
    }, void 0, "\u4E0A\u4E00\u6B65")));
  }

  step2() {
    let Steps = [];

    for (let i = 0; i < 12; i++) {
      if (i >= this.state.inputVolume) {
        Steps.push(devices_jsx("div", {
          className: "mic-step"
        }, i));
      } else {
        Steps.push(devices_jsx("div", {
          className: "mic-step on"
        }, i));
      }
    }

    return devices_jsx("div", {
      className: "step-content"
    }, void 0, devices_ref4, devices_jsx("div", {
      className: "selector"
    }, void 0, "\u8BBE\u5907\uFF1A", devices_jsx("div", {
      className: "select-box"
    }, void 0, this.state.currentAudioName), devices_jsx("select", {
      className: "select",
      value: this.state.currentAudioDevice,
      onChange: event => {
        var index = event.nativeEvent.target.selectedIndex;
        var name = event.nativeEvent.target[index].text;
        this.setState({
          currentAudioDevice: event.target.value,
          currentAudioName: name
        });
        devices_Storage.store("AUDIO_DEVICE", event.target.value);
        this.$client.setAudioRecordingDevice(event.target.value);
      }
    }, void 0, this.state.audio_devices.length > 0 ? this.state.audio_devices.map(device => devices_jsx("option", {
      value: device.deviceid
    }, device.deviceid, device.devicename)) : devices_ref5)), devices_jsx("div", {
      className: "mic-area"
    }, void 0, devices_ref6, Steps), devices_jsx("div", {
      className: "step-btns"
    }, void 0, devices_jsx("button", {
      onClick: () => {
        this.$client.stopAudioRecordingDeviceTest();
        this.setState({
          step: 3
        });
        this.setState({
          check_over: true
        });
      },
      className: "step-btn"
    }, void 0, "\u4E0B\u4E00\u6B65"), devices_jsx("button", {
      onClick: () => {
        this.$client.stopAudioRecordingDeviceTest();
        this.setState({
          step: 1
        });
      },
      className: "prev-step-btn"
    }, void 0, "\u4E0A\u4E00\u6B65")));
  }

  step3() {
    if (!this.$playing) {
      this.$playing = true;
      setTimeout(() => {
        let filepath;

        if (DEBUG) {
          filepath = path.join(window.ENV_CONF.__dirname, 'libs', 'AgoraSDK', 'music.mp3');
        } else {
          filepath = path.join(window.ENV_CONF.__dirname, '..', 'app.asar.unpacked', 'dist', 'libs', 'AgoraSDK', 'music.mp3');
        }

        console.log("filepath", filepath);
        this.$client.startAudioPlaybackDeviceTest(filepath);
      }, 0);
    }

    return devices_jsx("div", {
      className: "step-content"
    }, void 0, devices_ref7, devices_jsx("div", {
      className: "selector"
    }, void 0, "\u8BBE\u5907\uFF1A", devices_jsx("div", {
      className: "select-box"
    }, void 0, this.state.currentSpeakerName), devices_jsx("select", {
      className: "select",
      value: this.state.currentSpeakerDevice,
      onChange: event => {
        var index = event.nativeEvent.target.selectedIndex;
        var name = event.nativeEvent.target[index].text;
        this.setState({
          currentSpeakerDevice: event.target.value,
          currentSpeakerName: name
        });
        devices_Storage.store("PLAYBACK_DEVICE", event.target.value);
        this.$client.setAudioPlaybackDevice(event.target.value);
      }
    }, void 0, this.state.speaker_devices.length > 0 ? this.state.speaker_devices.map(device => devices_jsx("option", {
      value: device.deviceid
    }, device.deviceid, device.devicename)) : devices_ref8)), devices_jsx("div", {
      className: "music-area"
    }, void 0, devices_ref9, devices_jsx("div", {
      className: "progress-bar"
    }, void 0, devices_jsx(external_react_rangeslider_default.a, {
      min: 0,
      max: 255,
      value: this.state.volume,
      onChange: value => {
        this.onChangeVolume(value);
      }
    }))), devices_jsx("div", {
      className: "step-btns"
    }, void 0, devices_jsx("button", {
      className: "step-btn",
      onClick: () => {
        this.__exit();
      }
    }, void 0, "\u5B8C\u6210"), devices_jsx("button", {
      onClick: () => {
        this.$playing = false;
        this.$client.stopAudioPlaybackDeviceTest();
        this.onStartMicTest();
        this.setState({
          step: 2
        });
      },
      className: "prev-step-btn"
    }, void 0, "\u4E0A\u4E00\u6B65")));
  }

  __exit() {
    this.props.onExitTester();

    if (this.state.check_over) {
      localStorage.setItem('DEVICE_CHECKED_ALREADY', 1);
    }
  }

  render() {
    return devices_jsx("div", {
      className: "sound-outer"
    }, void 0, devices_jsx("button", {
      className: "page-back",
      onClick: () => {
        this.__exit();
      }
    }), devices_jsx("div", {
      className: "sound-tester s-" + this.state.step
    }, void 0, devices_jsx("div", {
      className: "network"
    }, void 0, "\u5B9E\u65F6\u7F51\u7EDC\u72B6\u6001: ", this.$quality_msg[this.state.netquality]), devices_jsx("div", {
      className: "network-bar"
    }, void 0, this.state.net_history.map((quality, index) => {
      return devices_jsx("div", {
        className: "quality q-" + quality
      }, index);
    })), devices_ref10, this[`step${this.state.step}`]()));
  }

}

const devices_mapStateToProps = (state, ownProps) => {
  return {
    account: state.login.account,
    room: state.room.info,
    fromPage: state.main.fromPage
  };
};

const devices_mapDispatchToProps = dispatch => ({
  onExitTester: () => dispatch(Object(actions["q" /* onExitTester */])()),
  alert: data => dispatch(Object(actions["a" /* alert */])(data))
});

/* harmony default export */ var containers_devices = (Object(external_react_redux_["connect"])(devices_mapStateToProps, devices_mapDispatchToProps)(devices_Devices));
// EXTERNAL MODULE: ./dev/less/sidebar.less
var less_sidebar = __webpack_require__(115);

// EXTERNAL MODULE: ./dev/scripts/constants/ActionTypes.js
var ActionTypes = __webpack_require__(0);

// CONCATENATED MODULE: ./dev/scripts/components/sidebar.js

var sidebar_REACT_ELEMENT_TYPE;

function sidebar_jsx(type, props, key, children) { if (!sidebar_REACT_ELEMENT_TYPE) { sidebar_REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: sidebar_REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }






var sidebar_ref =
/*#__PURE__*/
sidebar_jsx("div", {
  className: "mycourses-btn"
});

var sidebar_ref2 =
/*#__PURE__*/
sidebar_jsx("div", {
  className: "txt"
}, void 0, "\u6211\u7684\u8BFE\u7A0B");

var sidebar_ref3 =
/*#__PURE__*/
sidebar_jsx("div", {
  className: "device-btn"
});

var sidebar_ref4 =
/*#__PURE__*/
sidebar_jsx("div", {
  className: "txt"
}, void 0, "\u8BBE\u5907\u68C0\u6D4B");

var sidebar_ref5 =
/*#__PURE__*/
sidebar_jsx("div", {
  className: "help-btn"
});

var sidebar_ref6 =
/*#__PURE__*/
sidebar_jsx("div", {
  className: "txt"
}, void 0, "\u95EE\u9898\u5E2E\u52A9");

class sidebar_SideBar extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    let isStudent;

    if (this.props.user.dentity == ActionTypes["n" /* DENTITY */].STUDENT) {
      isStudent = true;
    }

    return sidebar_jsx("div", {
      className: isStudent ? "sidebar" : "sidebar teacher"
    }, void 0, sidebar_jsx("div", {
      className: "avatar-area center",
      onClick: () => {
        this.props.onViewUser();
      }
    }, void 0, sidebar_jsx("div", {
      className: "avatar",
      style: {
        "backgroundImage": `url(${isStudent ? this.props.user.child_avatar : this.props.user.avatarurl})`
      }
    }), sidebar_jsx("div", {
      className: "nickname"
    }, void 0, isStudent ? this.props.user.child_name : this.props.user.nickname)), isStudent ? sidebar_jsx("div", {
      className: "mycourses-area center",
      onClick: () => {
        this.props.onEnterMyCourses();
      }
    }, void 0, sidebar_ref, sidebar_ref2) : "", sidebar_jsx("div", {
      className: "device-area center",
      onClick: () => {
        this.props.onDeviceTest();
      }
    }, void 0, sidebar_ref3, sidebar_ref4), isStudent ? sidebar_jsx("div", {
      className: "help-area center",
      onClick: () => {
        this.props.onViewHelper();
      }
    }, void 0, sidebar_ref5, sidebar_ref6) : "");
  }

}

/* harmony default export */ var components_sidebar = (sidebar_SideBar);
// EXTERNAL MODULE: ./dev/less/viewuser.less
var viewuser = __webpack_require__(116);

// CONCATENATED MODULE: ./dev/scripts/components/viewuser.js

var viewuser_REACT_ELEMENT_TYPE;

function viewuser_jsx(type, props, key, children) { if (!viewuser_REACT_ELEMENT_TYPE) { viewuser_REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: viewuser_REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class viewuser_ViewUser extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    let isStudent;

    if (this.props.user.dentity == ActionTypes["n" /* DENTITY */].STUDENT) {
      isStudent = true;
    }

    this.$origin_username = isStudent ? this.props.user.child_name : this.props.user.nickname;
    this.state = {
      editmode: false,
      username: this.$origin_username,
      avatarurl: isStudent ? this.props.user.child_avatar : this.props.user.avatarurl,
      version: "-"
    };
  }

  componentDidMount() {
    this.setState({
      version: window.ENV_CONF.version
    });
  }

  componentWillUnmount() {}

  __on_change_confirm() {
    if (!this.state.username) {
      this.setState({
        username: this.$origin_username,
        editmode: false
      });
      return;
    }

    if (this.state.username != this.$origin_username) {
      if (confirm("是否确定修改昵称？")) {
        network["default"].changeUserInfo({
          child_name: this.state.username
        }).then(response => {
          if (response.status) {
            this.__change_user();
          }
        });
      } else {
        this.setState({
          username: this.$origin_username
        });
      }
    }

    this.setState({
      editmode: false
    });
  }

  __change_user() {
    let user = _objectSpread({}, this.props.user, {
      child_avatar: this.state.avatarurl,
      child_name: this.state.username
    });

    this.props.user.child_name = this.state.username;
    this.props.user.child_avatar = this.state.avatarurl;
    this.$origin_username = this.state.username;
    this.props.onChangeUser(user);
  }

  __on_change_avatar(file) {
    if (!file) return;
    network["default"].upload_file(file).then(url => {
      network["default"].changeUserInfo({
        child_avatar: url
      }).then(response => {
        if (response.status) {
          this.setState({
            avatarurl: url
          });

          this.__change_user();
        }
      });
    }).done();
  }

  render() {
    let isStudent;

    if (this.props.user.dentity == ActionTypes["n" /* DENTITY */].STUDENT) {
      isStudent = true;
    }

    return viewuser_jsx("div", {
      className: isStudent ? "view-user" : "view-user teacher"
    }, void 0, viewuser_jsx("div", {
      className: "avatar",
      style: {
        "backgroundImage": `url(${this.state.avatarurl})`
      }
    }, void 0, isStudent ? viewuser_jsx("input", {
      type: "file",
      accept: "image/x-png,image/jpeg",
      onChange: event => {
        this.__on_change_avatar(event.target.files[0]);
      }
    }) : ""), viewuser_jsx("div", {
      className: "nickname"
    }, void 0, this.state.editmode ? viewuser_jsx("input", {
      type: "text",
      onChange: event => {
        this.setState({
          username: event.target.value
        });
      },
      value: this.state.username,
      autoFocus: true,
      onBlur: () => {
        this.__on_change_confirm();
      }
    }) : [viewuser_jsx("div", {
      className: "text"
    }, "0", this.state.username), isStudent ? viewuser_jsx("div", {
      className: "edit-btn",
      onClick: () => {
        this.setState({
          editmode: true
        });
      }
    }, "1") : ""]), viewuser_jsx("div", {
      className: "logout-btn",
      onClick: () => {
        this.props.onLogout();
      }
    }, void 0, "\u9000\u51FA\u767B\u5F55"), viewuser_jsx("div", {
      className: "version"
    }, void 0, "\u5F53\u524D\u7248\u672C\uFF1A", this.state.version));
  }

}

/* harmony default export */ var components_viewuser = (viewuser_ViewUser);
// EXTERNAL MODULE: ./dev/less/helper.less
var helper = __webpack_require__(117);

// CONCATENATED MODULE: ./dev/scripts/components/helper.js

var helper_REACT_ELEMENT_TYPE;

function helper_jsx(type, props, key, children) { if (!helper_REACT_ELEMENT_TYPE) { helper_REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: helper_REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }







var helper_ref =
/*#__PURE__*/
helper_jsx("div", {
  className: "tips"
}, void 0, "\u9047\u5230\u95EE\u9898\u8BF7\u626B\u7801\u7EC3\u4E60\u52A9\u6559\u8001\u5E08");

class helper_Helper extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {}
    };
  }

  componentDidMount() {
    network["default"].getContactInfo().then(data => {
      this.setState({
        info: data.contact
      });
    });
  }

  componentWillUnmount() {}

  render() {
    return helper_jsx("div", {
      className: "helper-block"
    }, void 0, helper_jsx("div", {
      className: "code"
    }, void 0, helper_jsx("img", {
      src: this.state.info.contact_qrcode
    })), helper_jsx("div", {
      className: "name"
    }, void 0, this.state.info.nickname), helper_ref);
  }

}

/* harmony default export */ var components_helper = (helper_Helper);
// CONCATENATED MODULE: ./dev/scripts/containers/main.teacher.page.js

var main_teacher_page_REACT_ELEMENT_TYPE;

function main_teacher_page_jsx(type, props, key, children) { if (!main_teacher_page_REACT_ELEMENT_TYPE) { main_teacher_page_REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: main_teacher_page_REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

















var main_teacher_page_ref =
/*#__PURE__*/
main_teacher_page_jsx("div", {
  className: "title"
}, void 0, main_teacher_page_jsx("div", {
  className: "label"
}, void 0, "\u4ECA\u65E5\u8BFE\u7A0B"));

var main_teacher_page_ref2 =
/*#__PURE__*/
main_teacher_page_jsx("div", {
  className: "nothing"
}, void 0, "\u4ECA\u65E5\u6CA1\u6709\u8BFE\u54E6~");

var main_teacher_page_ref3 =
/*#__PURE__*/
main_teacher_page_jsx("br", {});

var main_teacher_page_ref4 =
/*#__PURE__*/
main_teacher_page_jsx(components_helper, {});

var main_teacher_page_ref5 =
/*#__PURE__*/
main_teacher_page_jsx(course_teacher_page, {});

var main_teacher_page_ref6 =
/*#__PURE__*/
main_teacher_page_jsx(course_record, {});

var main_teacher_page_ref7 =
/*#__PURE__*/
main_teacher_page_jsx(containers_devices, {});

class main_teacher_page_Main extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.$detect_delay = 5000;
    this.$cache_valid_time = 60 * 60 * 1000;
    this.$calendarRef = external_react_default.a.createRef();
    this.state = {};
    this.recordsRoom = {};
    network["default"].on("LOGOUT_NEEDED", () => {
      this.onLogout();
    });
  }

  strToDate(str) {
    let parsed = str.split(/[-: ]/);
    return new Date(parsed[0], parsed[1] - 1, parsed[2] || 1, parsed[3] || 0, parsed[4] || 0, parsed[5] || 0);
  }

  componentDidMount() {
    context["default"].user = this.props.account;
    network["default"].reportSystemBaseInfo();
  }

  __on_pick_date(data) {
    this.props.onCalendarData(data);
    let choosed = data.choosed_txt;
    network["default"].lessonsByDate(`${choosed.year}-${choosed.month}-${choosed.day}`).then(res => {
      this.props.onRoomList(res.rooms);
    });
  }

  __on_change_month(data) {
    let month = data.month > 9 ? data.month : "0" + data.month;
    network["default"].lessons(`${data.year}-${month}`).then(res => {
      let dates = res.dates;
      this.$calendarRef.current.setHighlighted(dates);
    }).done();
  }

  __master_page() {
    let calendar = external_react_default.a.createElement(components_calendar, {
      onPickDate: data => {
        this.__on_pick_date(data);
      },
      onChangeMonth: data => {
        this.__on_change_month(data);
      },
      higlighted: this.state.higlighted,
      ref: this.$calendarRef
    });
    return main_teacher_page_jsx("div", {
      className: "page calendar-page"
    }, void 0, main_teacher_page_jsx("div", {
      className: "calendar-inner"
    }, void 0, calendar, this.props.rooms ? main_teacher_page_jsx("div", {
      className: "courses"
    }, void 0, main_teacher_page_ref, this.props.rooms.length == 0 ? main_teacher_page_ref2 : this.props.rooms.map((room, index) => main_teacher_page_jsx("div", {
      className: "row"
    }, index, main_teacher_page_jsx("div", {
      className: "cover"
    }, void 0, main_teacher_page_jsx("img", {
      src: room.avatar,
      alt: ""
    })), main_teacher_page_jsx("div", {
      className: "info"
    }, void 0, main_teacher_page_jsx("div", {
      className: "name"
    }, void 0, room.name), main_teacher_page_jsx("div", {
      className: "index"
    }, void 0, room.lesson_name), main_teacher_page_jsx("div", {
      className: "date"
    }, void 0, "\u4E0A\u8BFE\u65F6\u95F4\uFF1A", room.start_time)), main_teacher_page_jsx("button", {
      className: "start-btn",
      disabled: room.state == 2,
      onClick: () => {
        this.onStartRoom(room);
      }
    }), room.button_hf ? main_teacher_page_jsx("button", {
      className: "record-btn",
      onClick: () => {
        this.onRecordRoom(room);
      }
    }) : main_teacher_page_jsx("button", {
      className: "download-btn",
      onClick: () => {
        this.onDownload(room);
      }
    })))) : ""));
  }

  onStartRoom(data) {
    if (window.cc == undefined) {// require("../../../libs/cocos2d-js-v1.1-min.js")
    }

    this.onDownload(data, true);
  }

  __onStartRoom(data, isRecord) {
    this.props.onRoomInfo(data);

    if (isRecord) {
      this.props.hide();
      setTimeout(() => {
        this.onEnterRoom(true);
      }, 500);
    } else {
      this.props.confirm({
        content: main_teacher_page_jsx("div", {}, void 0, "\u4E0A\u8BFE\u65F6\u95F4\uFF1A", data.start_time, main_teacher_page_ref3, "\u51C6\u5907\u597D\u5F00\u59CB\u4E0A\u8BFE\u4E86\u5417\uFF1F"),
        sure: () => {
          this.onEnterRoom();
        }
      });
    }
  }

  onRecordRoom(data) {
    // 判断最近1小时内是否下载过课程包，如果下载过则不提示下载
    let lastest_download = Storage["default"].get(`download_${data.en_name}`);

    if (lastest_download) {
      let delay = new Date().getTime() - lastest_download;

      if (delay <= this.$cache_valid_time) {
        this.__onStartRoom(data, true);

        return;
      }
    }

    if (context["default"].detector.offline) {
      this.props.confirm({
        content: "您的网络已经断开，建议您检查网络后再开始上课。",
        sure_txt: "去检查网络",
        cancel_txt: "坚持上课",
        cancel: () => {
          this.__onStartRoom(data, true);
        }
      });
    } else {
      this.onDownload(data, true, true);
    }
  }

  onDownload(data, canenter, isRecord) {
    console.log("download", data);
    this.props.alert({
      title: "下载课程包",
      content: main_teacher_page_jsx(components_download, {
        name: data.en_name,
        complete: () => {
          // 存储最后一次下载时间
          Storage["default"].store(`download_${data.en_name}`, new Date().getTime());

          if (canenter) {
            this.__onStartRoom(data, isRecord);
          } else {
            this.props.alert({
              content: "下载完成。"
            });
          }
        },
        user: this.props.account
      }),
      nobutton: true,
      noanim: true
    });
  }

  onEnterRoom(isRecord) {
    if (isRecord) {
      this.props.onCourseRecording(true);
    } else {
      this.props.onStartCourse();
    }
  }

  onConfirmToLogout() {
    this.props.confirm({
      content: "确认退出当前登录的帐号吗？",
      sure: () => {
        this.onLogout();
      }
    });
  }

  onLogout() {
    this.props.onLogout();
  }

  __view_user() {
    this.props.confirm({
      title: "个人信息",
      nobutton: true,
      content: main_teacher_page_jsx(components_viewuser, {
        user: this.props.account,
        onLogout: () => {
          this.onConfirmToLogout();
        },
        onChangeUser: user => {
          this.props.onChangeUserInfo(user);
        }
      })
    });
  }

  __on_helper() {
    this.props.confirm({
      title: "问题帮助",
      nobutton: true,
      content: main_teacher_page_ref4
    });
  }

  render() {
    let {
      account
    } = this.props;
    let content,
        sidebar = "";

    if (this.props.started) {
      //如果是回放加载回放组件
      content = main_teacher_page_ref5;
    } else if (this.props.recording) {
      content = main_teacher_page_ref6;
    } else if (this.props.testing) {
      content = main_teacher_page_ref7;
    } else {
      content = this.__master_page();
      sidebar = main_teacher_page_jsx(components_sidebar, {
        user: this.props.account,
        onDeviceTest: () => {
          this.props.onEnterTester("main");
        },
        onViewUser: () => {
          this.__view_user();
        },
        onViewHelper: () => {
          this.__on_helper();
        }
      });
    }

    return main_teacher_page_jsx("div", {
      className: "full-h"
    }, void 0, sidebar, content);
  }

}

const main_teacher_page_mapStateToProps = (state, ownProps) => {
  return {
    account: state.login.account,
    rooms: state.main.rooms,
    room: state.room.info,
    gifts: state.room.gifts,
    calendar: state.main.calendar,
    started: state.main.courseStarted,
    recording: state.main.recording,
    testing: state.main.enterTester
  };
};

const main_teacher_page_mapDispatchToProps = dispatch => ({
  onRoomList: rooms => dispatch(Object(actions["N" /* onRoomList */])(rooms)),
  onRoomInfo: data => dispatch(Object(actions["M" /* onRoomInfo */])(data)),
  onCalendarData: data => dispatch(Object(actions["g" /* onCalendarData */])(data)),
  onLogout: () => dispatch(Object(actions["y" /* onLogout */])()),
  onStartCourse: () => dispatch(Object(actions["Q" /* onStartCourse */])()),
  confirm: data => dispatch(Object(actions["b" /* confirm */])(data)),
  alert: data => dispatch(Object(actions["a" /* alert */])(data)),
  hide: () => dispatch(Object(actions["c" /* hide */])()),
  onEnterTester: fromPage => dispatch(Object(actions["o" /* onEnterTester */])(fromPage)),
  onChangeUserInfo: user => dispatch(Object(actions["h" /* onChangeUserInfo */])(user)),
  onCourseRecording: status => dispatch(Object(actions["i" /* onCourseRecording */])(status))
});

/* harmony default export */ var main_teacher_page = (Object(external_react_redux_["connect"])(main_teacher_page_mapStateToProps, main_teacher_page_mapDispatchToProps)(main_teacher_page_Main));
// CONCATENATED MODULE: ./dev/scripts/containers/course.student.page.js

var course_student_page_REACT_ELEMENT_TYPE;

function course_student_page_jsx(type, props, key, children) { if (!course_student_page_REACT_ELEMENT_TYPE) { course_student_page_REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: course_student_page_REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }









const getCurrentWindow = external_electron_["remote"].getCurrentWindow;

var course_student_page_ref =
/*#__PURE__*/
course_student_page_jsx("div", {
  className: "content"
}, void 0, course_student_page_jsx("div", {
  className: "course-content kc-canvas-area cocos",
  id: "course-content"
}));

class course_student_page_Course extends course_base_page {
  constructor(props) {
    super(props);
    this.$view_mode = 1;
    this.$in_warning = false;
    this.$warning_id = null;
    this.state = {
      control: !this.props.status.started,
      process: {
        current: 0,
        total: 0
      }
    };
  }

  __init_device_doctor() {
    let video_devices = this.$room.rtc.getVideoDevices();
    let audio_devices = this.$room.rtc.getAudioRecordingDevices();
    let speaker_devices = this.$room.rtc.getAudioPlaybackDevices();
    let currentVideoDevice = this.$room.rtc.getCurrentVideoDevice(),
        currentAudioDevice = this.$room.rtc.getCurrentAudioRecordingDevice(),
        currentSpeakerDevice = this.$room.rtc.getCurrentAudioPlaybackDevice(),
        currentVideoName,
        currentAudioName,
        currentSpeakerName;

    for (let i = 0, len = video_devices.length; i < len; i++) {
      let item = video_devices[i];

      if (item.deviceid == currentVideoDevice) {
        currentVideoName = item.devicename;
      }
    }

    for (let i = 0, len = audio_devices.length; i < len; i++) {
      let item = audio_devices[i];

      if (item.deviceid == currentAudioDevice) {
        currentAudioName = item.devicename;
      }
    }

    for (let i = 0, len = speaker_devices.length; i < len; i++) {
      let item = speaker_devices[i];

      if (item.deviceid == currentSpeakerDevice) {
        currentSpeakerName = item.devicename;
      }
    }

    this.setState({
      currentVideoDevice,
      currentAudioDevice,
      currentSpeakerDevice,
      currentVideoName,
      currentAudioName,
      currentSpeakerName,
      video_devices,
      audio_devices,
      speaker_devices
    });
  }

  componentDidMount() {
    this.$room.init();
    this.$room.on("NEW_STREAM", stream => {
      // 判断是不是主班老师
      let id = stream.getId();
      let isSubMaster = this.isSubMaster(id);

      if (isSubMaster) {
        return;
      }

      let self = id == this.props.account.id; // 如果是低端设备则不显示流信息

      if (self || this.isChairMaster(id) || !context["default"].isOldDevice()) {
        stream.play();
      }

      this.$session.send_message("NEW_STREAM", {
        id,
        render: () => {
          let render = this.$room.rtc.getRender(self ? 0 : id);

          if (render) {
            return render.canvas;
          }
        }
      });
    });
    this.$room.on("REMOVE_STREAM", stream => {
      let id = stream.getId();
      this.$session.send_message("REMOVE_STREAM", {
        id
      }); // 老师监听到有人退出如果还在上台，则发送他下台指令

      if (this.isChairMaster()) {
        if (id) {
          if (this.$last_dancing == id) {
            this.$session.send_message(dev_const["default"].BACK_DANCE, {
              id
            });
          }
        }
      }
    });
    this.$room.on("ADD_ROOM", id => {
      // 新用户加入
      this.$session.send_message("ADD_ROOM", {
        id
      });
      this.$room.refreshMute();
    });
    this.$room.on("LEAVE_ROOM", () => {
      if (this.$entered) {
        localStorage.setItem("ENTERED", 1);
        getCurrentWindow().reload();
      } else {
        this.$session.destroy();
        this.props.onEndCourse();

        if (this.props.onLeaveRoom) {
          this.props.onLeaveRoom();
        }
      }
    });

    if (this.$timer_warning) {
      clearTimeout(this.$timer_warning);
    }

    this.__init_device_doctor();

    super.componentDidMount();
  }

  __dancing_handler(data) {
    if (!data.message || !data.message.id) return;
    let id = data.message.id;
    let isSelf = id == this.props.account.id;
    let render = this.$room.rtc.getRender(isSelf ? 0 : id);

    switch (data.type) {
      case dev_const["default"].PUT_DANCE:
        if (this.$dancing_id) {
          if (context["default"].isOldDevice()) {
            // 老设备需要关闭流
            this.$room.unsubscribe(this.$dancing_id);
            this.$room.rtc.destroyRender(this.$dancing_id);
          }
        }

        this.$dancing_id = id;

        if (context["default"].isOldDevice()) {
          if (!isSelf) {
            // 老设备需要开启流
            this.$room.rtc.subscribe(id, {
              width: dev_const["default"].LARGE_MODE,
              height: dev_const["default"].LARGE_MODE,
              cocos: true
            });
            this.$room.rtc.setRemoteVideoStreamType(id, 0);
            this.$room.rtc.setVideoRenderDimension(1, id, dev_const["default"].LARGE_MODE, dev_const["default"].LARGE_MODE);
            return;
          }
        }

        if (!isSelf) {
          this.$room.rtc.setRemoteVideoStreamType(id, 0);
        }

        this.$room.rtc.setVideoRenderDimension(isSelf ? 0 : 1, id, dev_const["default"].LARGE_MODE, dev_const["default"].LARGE_MODE);

        if (render) {
          render.updateSize({
            width: dev_const["default"].LARGE_MODE,
            height: dev_const["default"].LARGE_MODE
          });
        }

        break;

      case dev_const["default"].BACK_DANCE:
        this.$dancing_id = null;

        if (context["default"].isOldDevice()) {
          if (!isSelf) {
            // 老设备需要关闭流
            this.$room.unsubscribe(id);
            this.$room.rtc.destroyRender(id);
            return;
          }
        }

        if (!isSelf) {
          this.$room.rtc.setRemoteVideoStreamType(id, 1);
        }

        this.$room.rtc.setVideoRenderDimension(isSelf ? 0 : 1, id, dev_const["default"].SMALL_MODE, dev_const["default"].SMALL_MODE);

        if (render) {
          render.updateSize({
            width: dev_const["default"].SMALL_MODE,
            height: dev_const["default"].SMALL_MODE
          });
        }

        break;
    }
  }

  __on_session_message(message, force) {
    if (message.to == "app" || force) {
      switch (message.type) {
        case dev_const["default"].PUT_DANCE:
        case dev_const["default"].BACK_DANCE:
          this.__dancing_handler(message);

          break;
      }
    }

    super.__on_session_message(message, force);
  }

  __on_signal_message(data) {
    this.__dancing_handler(data);

    super.__on_signal_message(data);
  }

  leaveCourse() {
    this.$room.leave();
    this.$signal.leave();
  }

  preLeaveCourse() {
    this.props.confirm({
      content: "确定要临时退出房间吗？",
      sure: () => {
        this.props.showLoading("正在退出房间...");
        this.leaveCourse();
      }
    });
  }

  __select_question(id) {
    this.props.onQuestionDetail(id);
    this.props.onQuestionList(false);
  }

  __select_device(value, name) {
    let curIndex = 0,
        device;

    if (this.props.switches.questionDetail == 1) {
      if (!value && !name) {
        this.state.video_devices.map((device, index) => {
          if (device && device.deviceid == this.state.currentVideoDevice) {
            curIndex = index;
          }
        });

        if (++curIndex >= this.state.video_devices.length) {
          curIndex = 0;
        }

        device = this.state.video_devices[curIndex];
        value = device.deviceid;
        name = device.devicename;
      }

      this.setState({
        currentVideoDevice: value,
        currentVideoName: name
      });
      Storage["default"].store("VIDEO_DEVICE", value);
      this.$room.rtc.setVideoDevice(value);
    } else if (this.props.switches.questionDetail == 2) {
      if (!value && !name) {
        this.state.audio_devices.map((device, index) => {
          if (device && device.deviceid == this.state.currentAudioDevice) {
            curIndex = index;
          }
        });

        if (++curIndex >= this.state.audio_devices.length) {
          curIndex = 0;
        }

        device = this.state.audio_devices[curIndex];
        value = device.deviceid;
        name = device.devicename;
      }

      this.setState({
        currentAudioDevice: value,
        currentAudioName: name
      });
      Storage["default"].store("AUDIO_DEVICE", value);
      this.$room.rtc.setAudioRecordingDevice(value);
    } else if (this.props.switches.questionDetail == 3) {
      if (!value && !name) {
        this.state.speaker_devices.map((device, index) => {
          if (device && device.deviceid == this.state.currentSpeakerDevice) {
            curIndex = index;
          }
        });

        if (++curIndex >= this.state.speaker_devices.length) {
          curIndex = 0;
        }

        device = this.state.speaker_devices[curIndex];
        value = device.deviceid;
        name = device.devicename;
      }

      this.setState({
        currentSpeakerDevice: value,
        currentSpeakerName: name
      });
      Storage["default"].store("PLAYBACK_DEVICE", value);
      this.$room.rtc.setAudioPlaybackDevice(value);
    }

    this.$room.__resume_devices();
  }

  render() {
    let displayDeviceName, curDevice, devices, emptyText, tipsText;

    if (this.props.switches.questionDetail == 1) {
      displayDeviceName = this.state.currentVideoName;
      curDevice = this.state.currentVideoDevice;
      devices = this.state.video_devices;
      emptyText = '无可用摄像头设备';
      tipsText = '点击下拉框切换一个设备，看看老师能不能看到你。';
    } else if (this.props.switches.questionDetail == 2) {
      displayDeviceName = this.state.currentAudioName;
      curDevice = this.state.currentAudioDevice;
      devices = this.state.audio_devices;
      emptyText = '无可用麦克风设备';
      tipsText = '点击下拉框切换一个设备，问问老师能不能听到你。';
    } else if (this.props.switches.questionDetail == 3) {
      displayDeviceName = this.state.currentSpeakerName;
      curDevice = this.state.currentSpeakerDevice;
      devices = this.state.speaker_devices;
      emptyText = '无可用扬声器设备';
      tipsText = '点击下拉框切换一个设备，听听看能不能听到老师说话。';
    }

    return course_student_page_jsx("div", {
      className: "page course-page student"
    }, void 0, course_student_page_jsx("div", {
      className: "inner"
    }, void 0, this.props.switches.questionDetail ? course_student_page_jsx("div", {
      className: "question-detail"
    }, void 0, course_student_page_jsx("div", {
      className: "container"
    }, void 0, course_student_page_jsx("div", {
      className: "tips"
    }, void 0, tipsText), course_student_page_jsx("div", {
      className: "selector"
    }, void 0, "\u8BBE\u5907\uFF1A", course_student_page_jsx("div", {
      className: "select-box"
    }, void 0, displayDeviceName), course_student_page_jsx("select", {
      className: "select",
      value: curDevice,
      onChange: event => {
        var index = event.nativeEvent.target.selectedIndex;
        var name = event.nativeEvent.target[index].text;

        this.__select_device(event.target.value, name);
      }
    }, void 0, devices.length > 0 ? devices.map(device => course_student_page_jsx("option", {
      value: device.deviceid
    }, device.deviceid, device.devicename)) : course_student_page_jsx("option", {
      disabled: true,
      selected: true
    }, "nothing", emptyText))), course_student_page_jsx("div", {
      className: "btn-switch",
      onClick: () => {
        this.__select_question(0);
      }
    }), course_student_page_jsx("button", {
      className: "close-btn",
      onClick: () => {
        this.__select_question(0);
      }
    }))) : "", course_student_page_jsx("div", {
      className: "course-page-back",
      onClick: () => {
        this.preLeaveCourse();
      }
    }), course_student_page_ref, course_student_page_jsx("div", {
      className: "counter icon"
    }, void 0, course_student_page_jsx("button", {
      className: "help-btn warn-btn",
      onClick: () => {
        // this.onHelpClick()
        this.props.onQuestionList(!this.props.switches.questionList);
      }
    })), this.props.switches.questionList ? course_student_page_jsx("div", {
      className: "question-list"
    }, void 0, course_student_page_jsx("button", {
      className: "question-cell cell-1",
      onClick: () => {
        this.__select_question(1);
      }
    }, void 0, "\u8001\u5E08\u770B\u4E0D\u5230\u6211\uFF1F"), course_student_page_jsx("button", {
      className: "question-cell cell-2",
      onClick: () => {
        this.__select_question(2);
      }
    }, void 0, "\u8001\u5E08\u542C\u4E0D\u5230\u6211\u7684\u58F0\u97F3\uFF1F"), course_student_page_jsx("button", {
      className: "question-cell cell-3",
      onClick: () => {
        this.__select_question(3);
      }
    }, void 0, "\u542C\u4E0D\u5230\u8001\u5E08\u7684\u58F0\u97F3\uFF1F")) : ""));
  }

}

const course_student_page_mapStateToProps = (state, ownProps) => {
  return {
    account: state.login.account,
    room: state.room.info,
    students: state.room.students,
    teacher: state.room.teacher,
    started: state.main.courseStarted,
    switches: state.room.switches,
    status: state.room.status,
    netStatus: state.main.netStatus
  };
};

const course_student_page_mapDispatchToProps = dispatch => ({
  onRoomMoreInfo: data => dispatch(Object(actions["O" /* onRoomMoreInfo */])(data)),
  onNewStream: data => dispatch(Object(actions["E" /* onNewStream */])(data)),
  onStreamLeave: data => dispatch(Object(actions["R" /* onStreamLeave */])(data)),
  onHandsupSwitch: status => dispatch(Object(actions["s" /* onHandsupSwitch */])(status)),
  onMagicSwitch: status => dispatch(Object(actions["z" /* onMagicSwitch */])(status)),
  onRankSwitch: status => dispatch(Object(actions["K" /* onRankSwitch */])(status)),
  onMuteAllSwitch: status => dispatch(Object(actions["A" /* onMuteAllSwitch */])(status)),
  onSilentSwitch: status => dispatch(Object(actions["P" /* onSilentSwitch */])(status)),
  onNewGift: data => dispatch(Object(actions["D" /* onNewGift */])(data)),
  onWarn: (data, status) => dispatch(Object(actions["V" /* onWarn */])(data, status)),
  onHandsupRank: (id, rank) => dispatch(Object(actions["r" /* onHandsupRank */])(id, rank)),
  onUserMuted: (id, status, recovering) => dispatch(Object(actions["U" /* onUserMuted */])(id, status, recovering)),
  onDancing: (id, status) => dispatch(Object(actions["l" /* onDancing */])(id, status)),
  onEndCourse: () => dispatch(Object(actions["m" /* onEndCourse */])()),
  onBeginCourse: () => dispatch(Object(actions["f" /* onBeginCourse */])()),
  onPauseCourse: () => dispatch(Object(actions["F" /* onPauseCourse */])()),
  onResumeCourse: () => dispatch(Object(actions["L" /* onResumeCourse */])()),
  onCourseTick: () => dispatch(Object(actions["k" /* onCourseTick */])()),
  confirm: data => dispatch(Object(actions["b" /* confirm */])(data)),
  alert: data => dispatch(Object(actions["a" /* alert */])(data)),
  onEnterTester: page => dispatch(Object(actions["o" /* onEnterTester */])(page)),
  showLoading: message => dispatch(Object(actions["X" /* showLoading */])(message)),
  hideLoading: () => dispatch(Object(actions["d" /* hideLoading */])()),
  onUpdateGift: data => dispatch(Object(actions["S" /* onUpdateGift */])(data)),
  onProgressUpdate: (id, percent) => dispatch(Object(actions["H" /* onProgressUpdate */])(id, percent)),
  onProgressReset: () => dispatch(Object(actions["G" /* onProgressReset */])()),
  onUserAddRoom: id => dispatch(Object(actions["T" /* onUserAddRoom */])(id)),
  onQuestionList: status => dispatch(Object(actions["J" /* onQuestionList */])(status)),
  onQuestionDetail: status => dispatch(Object(actions["I" /* onQuestionDetail */])(status))
});

/* harmony default export */ var course_student_page = (Object(external_react_redux_["connect"])(course_student_page_mapStateToProps, course_student_page_mapDispatchToProps)(course_student_page_Course));
// EXTERNAL MODULE: external "core-js"
var external_core_js_ = __webpack_require__(60);

// CONCATENATED MODULE: ./dev/scripts/containers/main.student.page.js

var main_student_page_REACT_ELEMENT_TYPE;

function main_student_page_jsx(type, props, key, children) { if (!main_student_page_REACT_ELEMENT_TYPE) { main_student_page_REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: main_student_page_REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }



















var main_student_page_ref =
/*#__PURE__*/
main_student_page_jsx("div", {
  className: "student-icon"
});

var main_student_page_ref2 =
/*#__PURE__*/
main_student_page_jsx("div", {
  className: "leave-flag"
});

var main_student_page_ref3 =
/*#__PURE__*/
main_student_page_jsx("div", {
  className: "time"
}, "0", "\u8001\u5E08\u5F00\u59CB\u8BB2\u8BFE\u5566\uFF0C\u8D76\u5FEB\u8FDB\u5165\u6559\u5BA4\u54E6\uFF01");

var main_student_page_ref4 =
/*#__PURE__*/
main_student_page_jsx("div", {
  className: "time"
}, "0", "\u63A5\u4E0B\u6765\u6CA1\u6709\u8BFE\u7A0B\u5566\uFF5E");

var main_student_page_ref5 =
/*#__PURE__*/
main_student_page_jsx("div", {
  className: "no-lesson"
}, "1", "\u53BB\u201C\u660E\u516E\u5927\u8BED\u6587\u201D\u5C0F\u7A0B\u5E8F", main_student_page_jsx("br", {}), "\u548C\u5176\u4ED6\u5C0F\u670B\u53CB\u4E00\u8D77\u5B8C\u6210\u4F5C\u4E1A\u5427~");

var main_student_page_ref6 =
/*#__PURE__*/
main_student_page_jsx("span", {}, void 0, "\u8981\u4E0A\u8BFE\u7A0B");

var main_student_page_ref7 =
/*#__PURE__*/
main_student_page_jsx("span", {}, void 0, "\u5DF2\u4E0A\u8BFE\u7A0B");

var main_student_page_ref8 =
/*#__PURE__*/
main_student_page_jsx("span", {
  className: "label"
}, void 0, "\u8BFE\u65F6\u6D88\u8017\u60C5\u51B5\uFF1A");

var main_student_page_ref9 =
/*#__PURE__*/
main_student_page_jsx("div", {
  className: "date-icon"
});

var main_student_page_ref10 =
/*#__PURE__*/
main_student_page_jsx("div", {
  className: "leave-flag"
});

var main_student_page_ref11 =
/*#__PURE__*/
main_student_page_jsx("div", {
  className: "empty"
}, void 0, main_student_page_jsx("div", {
  className: "icon"
}), main_student_page_jsx("span", {}, void 0, "\u63A5\u4E0B\u6765\u6CA1\u6709\u8BFE\u7A0B\u4E86~"));

var _ref12 =
/*#__PURE__*/
main_student_page_jsx("div", {
  className: "star-icon"
});

var _ref13 =
/*#__PURE__*/
main_student_page_jsx("div", {
  className: "empty"
}, void 0, main_student_page_jsx("div", {
  className: "icon"
}), main_student_page_jsx("span", {}, void 0, "\u5DF2\u4E0A\u7684\u8BFE\u7A0B\u4F1A\u5728\u8FD9\u91CC\u663E\u793A\u54E6~"));

var _ref14 =
/*#__PURE__*/
main_student_page_jsx("br", {});

var _ref15 =
/*#__PURE__*/
main_student_page_jsx(components_helper, {});

var _ref16 =
/*#__PURE__*/
main_student_page_jsx(course_record, {});

var _ref17 =
/*#__PURE__*/
main_student_page_jsx(containers_devices, {});

class main_student_page_Main extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.$detect_delay = 5000;
    this.$cache_valid_time = 60 * 60 * 1000;
    this.state = {
      comming_page_selected: true
    };
    this.$page_comming = 1;
    this.$page_done = 1;
    this.$no_morelessons_comming = false;
    this.$no_morelessons_done = false;
    network["default"].on("LOGOUT_NEEDED", () => {
      this.onLogout();
    });

    this.__check_device();
  }

  __check_device() {
    let oldUser = localStorage.getItem('OLD_USER') == 1,
        checked = localStorage.getItem('DEVICE_CHECKED_ALREADY') == 1;
    if (oldUser) return;

    if (!checked) {
      this.props.showLoading("首次进入，需要为您做些优化");
    }

    this.$timer_device_check = setInterval(() => {
      //轮询等待systeminfo
      if (window.ENV_CONF && window.ENV_CONF.systeminfo) {
        clearInterval(this.$timer_device_check);
        this.$timer_device_check = null;
        network["default"].checkDevice().then(res => {
          this.props.hideLoading();
          res.old_device && context["default"].setOldDevice();
          context["default"].join_class_enabled = res.old_user || !!res.to_class;
          localStorage.setItem('OLD_USER', res.old_user & 1);
          if (res.old_user || checked) return;
          this.props.alert({
            content: "欢迎进入明兮学堂，为了您更好的体验，请先来检测下设备吧",
            sure: () => {
              this.props.onEnterTester("main");
            },
            sure_txt: "设备检测",
            close_hidden: true
          });
        });
      }
    }, 200);
  }

  strToDate(str) {
    let parsed = str.split(/[-: ]/);
    return new Date(parsed[0], parsed[1] - 1, parsed[2] || 1, parsed[3] || 0, parsed[4] || 0, parsed[5] || 0);
  }

  __get_lesson_comming() {
    network["default"].getLessonComming().then(res => {
      // 计算剩余时间
      let room = res.room;

      if (room) {
        let date = this.strToDate(room.start_time);
        let left = date.getTime() - new Date().getTime();
        room.left = left;

        if (left > 0) {
          let days = left / 1000 / 60 / 60 / 24 >> 0;
          left -= days * 1000 * 60 * 60 * 24;
          let hours = left / 1000 / 60 / 60 >> 0;
          let minutes = (left - hours * 60 * 60 * 1000) / 1000 / 60 >> 0;
          room.days = days;
          room.hours = hours;
          room.minutes = minutes;
        }
      }

      this.props.onLessonComming(room);
    });
  }

  componentDidMount() {
    this.__get_lesson_comming();

    context["default"].user = this.props.account;
    network["default"].reportSystemBaseInfo();
  }

  componentWillUnmount() {
    if (this.$timer_device_check) {
      clearInterval(this.$timer_device_check);
      this.$timer_device_check = null;
    }
  }

  __student_page() {
    let room = this.props.commingRoom;

    if (room) {
      room.can_enter = true;
      room.can_download = true;
    }

    return main_student_page_jsx("div", {
      className: "page student-page"
    }, void 0, main_student_page_jsx("div", {
      className: "inner"
    }, void 0, main_student_page_jsx("div", {
      className: "student-box"
    }, void 0, main_student_page_jsx("div", {
      className: "main-page"
    }, void 0, main_student_page_ref, room ? [main_student_page_jsx("div", {
      className: "lesson-box"
    }, "1", main_student_page_jsx("div", {
      className: "cover"
    }, void 0, main_student_page_jsx("img", {
      src: room.avatar,
      alt: ""
    })), main_student_page_jsx("div", {
      className: "info"
    }, void 0, main_student_page_jsx("div", {
      className: "name"
    }, void 0, main_student_page_jsx("span", {}, void 0, room.name)), main_student_page_jsx("div", {
      className: "desc"
    }, void 0, "\u8BFE\u65F6\u7B80\u4ECB\uFF1A", room.content || '暂无'), main_student_page_jsx("div", {
      className: "tag"
    }, void 0, main_student_page_jsx("div", {
      className: "tag-kind"
    }, void 0, room.label), main_student_page_jsx("span", {
      className: "tag-effect"
    }, void 0, "学习力提升：" + room.ability)), main_student_page_jsx("div", {
      className: "date"
    }, void 0, main_student_page_jsx("span", {}, void 0, room.class_date, " ", room.class_time))), main_student_page_jsx("div", {
      className: "btns-panel"
    }, void 0, room.can_enter && room.class_state == 'normal' ? main_student_page_jsx("button", {
      className: "start-btn",
      onClick: () => {
        this.onStartRoom(room);
      }
    }) : "", room.class_state == 'normal' ? main_student_page_jsx("button", {
      className: "download-btn",
      onClick: () => {
        this.onDownload(room);
      }
    }) : "", room.class_state == 'normal' ? "" : main_student_page_ref2)), room.left > 0 ? main_student_page_jsx("div", {
      className: "time"
    }, "0", "\u4E0A\u8BFE\u5012\u8BA1\u65F6\uFF1A", room.days > 0 ? main_student_page_jsx("label", {}, void 0, main_student_page_jsx("span", {}, void 0, room.days), "\u5929") : "", room.hours > 0 ? main_student_page_jsx("label", {}, void 0, main_student_page_jsx("span", {}, void 0, room.hours), "\u5C0F\u65F6") : "", room.minutes > 0 ? main_student_page_jsx("label", {}, void 0, main_student_page_jsx("span", {}, void 0, room.minutes), "\u5206\u949F") : "") : main_student_page_ref3] : [main_student_page_ref4, main_student_page_ref5]))));
  }

  __my_courses() {
    console.log('this.props.commingRooms = ', this.props.commingRooms);
    console.log('this.props.doneRooms = ', this.props.doneRooms);
    let _commingRooms = [];
    let _doneRooms = [];
    Object(external_core_js_["setTimeout"])(() => {
      document.getElementById('courses-comming-area') && document.getElementById('courses-comming-area').addEventListener('scroll', this.onScrollHandle.bind(this));
      document.getElementById('courses-done-area') && document.getElementById('courses-done-area').addEventListener('scroll', this.onScrollHandle.bind(this));
    }, 10);
    return main_student_page_jsx("div", {
      className: "page student-page"
    }, void 0, main_student_page_jsx("div", {
      className: "inner"
    }, void 0, main_student_page_jsx("div", {
      className: "student-box"
    }, void 0, main_student_page_jsx("div", {
      className: "my-courses"
    }, void 0, main_student_page_jsx("div", {
      className: "nav-area"
    }, void 0, main_student_page_jsx("div", {
      className: "btn-exit",
      onClick: () => {
        this.props.onExitMyCourses();
        this.$no_morelessons_comming = false;
        this.$no_morelessons_done = false;

        this.__get_lesson_comming();
      }
    }), main_student_page_jsx("div", {
      className: this.state.comming_page_selected ? "switch-bar" : "switch-bar first-selected"
    }, void 0, main_student_page_jsx("div", {
      className: "switch-bar-left",
      onClick: () => {
        this.setState({
          comming_page_selected: true
        });
        Object(external_core_js_["setTimeout"])(() => {
          this.__query_courses();
        }, 0);
      }
    }, void 0, main_student_page_ref6), main_student_page_jsx("div", {
      className: "switch-bar-right",
      onClick: () => {
        console.log('switch-bar-right clicked1');
        this.setState({
          comming_page_selected: false
        });
        console.log('switch-bar-right clicked2');
        Object(external_core_js_["setTimeout"])(() => {
          this.__query_courses();
        }, 0);
      }
    }, void 0, main_student_page_ref7)), this.props.totalDone && this.props.totalDone.length > 0 ? main_student_page_jsx("div", {
      className: "course-according"
    }, void 0, main_student_page_ref8, main_student_page_jsx("span", {
      className: "value"
    }, void 0, this.state.comming_page_selected ? this.props.totalComming : this.props.totalDone)) : ""), (this.props.commingRooms || []).forEach((room, index) => {
      if (index == 0) {
        room.can_download = true;
        room.can_enter = true;
      }

      _commingRooms.push(main_student_page_jsx("div", {
        className: "lesson-box-panel"
      }, "comming_room_" + index, main_student_page_jsx("div", {
        className: "date-tip"
      }, void 0, main_student_page_ref9, main_student_page_jsx("span", {}, void 0, room.class_date, " ", room.week_day)), main_student_page_jsx("div", {
        className: "lesson-box"
      }, void 0, main_student_page_jsx("div", {
        className: "cover"
      }, void 0, main_student_page_jsx("img", {
        src: room.avatar,
        alt: ""
      })), main_student_page_jsx("div", {
        className: "info"
      }, void 0, main_student_page_jsx("div", {
        className: "name"
      }, void 0, main_student_page_jsx("span", {}, void 0, room.name)), main_student_page_jsx("div", {
        className: "desc"
      }, void 0, "\u8BFE\u65F6\u7B80\u4ECB\uFF1A", room.content), main_student_page_jsx("div", {
        className: "tag"
      }, void 0, main_student_page_jsx("div", {
        className: "tag-kind"
      }, void 0, room.label), main_student_page_jsx("span", {
        className: "tag-effect"
      }, void 0, "学习力提升：" + (room.ability || ""))), main_student_page_jsx("div", {
        className: "date"
      }, void 0, main_student_page_jsx("span", {}, void 0, room.between_time))), main_student_page_jsx("div", {
        className: "btns-panel"
      }, void 0, room.can_enter && room.class_state == 'normal' ? main_student_page_jsx("button", {
        className: "start-btn",
        onClick: () => {
          this.onStartRoom(room);
        }
      }) : "", room.can_enter && room.can_download && room.class_state == 'normal' ? main_student_page_jsx("button", {
        className: "download-btn",
        onClick: () => {
          this.onDownload(room);
        }
      }) : "", !room.can_enter ? main_student_page_jsx("button", {
        className: "waiting-btn",
        onClick: () => {}
      }) : "", room.class_state == 'normal' ? "" : main_student_page_ref10))));
    }), this.state.comming_page_selected ? main_student_page_jsx("div", {
      className: _commingRooms.length > 0 ? "courses-comming-area" : "courses-comming-area empty-area",
      id: "courses-comming-area"
    }, void 0, _commingRooms.length > 0 ? _commingRooms : main_student_page_ref11) : main_student_page_jsx("div", {
      className: "courses-done-area",
      id: "courses-done-area"
    }, void 0, (this.props.doneRooms || []).forEach((room, index) => {
      _doneRooms.push(main_student_page_jsx("div", {
        className: "lesson-done-box-panel"
      }, "done_room_" + index, main_student_page_jsx("div", {
        className: "box-panel-top"
      }, void 0, main_student_page_jsx("span", {
        className: "lesson-name"
      }, void 0, room.name), main_student_page_jsx("span", {
        className: "lesson-level"
      }, void 0, "\uFF08", room.lesson_name, "\uFF09")), main_student_page_jsx("div", {
        className: "box-panel-center"
      }, void 0, main_student_page_jsx("span", {
        className: "lesson-time"
      }, void 0, room.class_date, " ", room.class_time)), main_student_page_jsx("div", {
        className: "box-panel-bottom"
      }, void 0, main_student_page_jsx("span", {
        className: room.class_state == 'normal' ? 'lesson-state' : "lesson-state abnormal"
      }, void 0, room.class_state == 'normal' ? '正常结束' : room.class_state == 'leave' ? "请假" : "未到课"), _ref12, main_student_page_jsx("span", {
        className: "star-count"
      }, void 0, room.star))));
    }), main_student_page_jsx("div", {
      className: _doneRooms.length > 0 ? "container" : "container empty-container"
    }, void 0, _doneRooms.length > 0 ? _doneRooms : _ref13))))));
  }

  onStartRoom(data) {
    if (!context["default"].join_class_enabled) {
      this.props.alert({
        content: "亲爱的宝妈您好，因我们课件的动画和交互较多，经检测您目前的设备可能不支持我们的正常上课，为了避免影响您的上课体验，请联系您的顾问老师帮您解决，感谢您的支持！",
        sure: () => {}
      });
      return;
    }

    if (window.cc == undefined) {// require("./libs/cocos2d-js-v1.1-min.js")
    }

    this.onDownload(data, true);
  }

  __onStartRoom(data, isRecord) {
    this.props.onRoomInfo(data);

    if (isRecord) {
      this.props.hide();
      Object(external_core_js_["setTimeout"])(() => {
        this.onEnterRoom(true);
      }, 500);
    } else {
      this.props.confirm({
        content: main_student_page_jsx("div", {}, void 0, "\u4E0A\u8BFE\u65F6\u95F4\uFF1A", data.start_time, _ref14, "\u51C6\u5907\u597D\u5F00\u59CB\u4E0A\u8BFE\u4E86\u5417\uFF1F"),
        sure: () => {
          this.onEnterRoom();
        }
      });
    }
  }

  onRecordRoom(data) {
    // 判断最近1小时内是否下载过课程包，如果下载过则不提示下载
    let lastest_download = Storage["default"].get(`download_${data.en_name}`);

    if (lastest_download) {
      let delay = new Date().getTime() - lastest_download;

      if (delay <= this.$cache_valid_time) {
        this.__onStartRoom(data, true);

        return;
      }
    }

    if (context["default"].detector.offline) {
      this.props.confirm({
        content: "您的网络已经断开，建议您检查网络后再开始上课。",
        sure_txt: "去检查网络",
        cancel_txt: "坚持上课",
        cancel: () => {
          this.__onStartRoom(data, true);
        }
      });
    } else {
      this.onDownload(data, true, true);
    }
  }

  onDownload(data, canenter, isRecord) {
    this.props.alert({
      title: "下载课程包",
      content: main_student_page_jsx(components_download, {
        name: data.en_name,
        complete: () => {
          // 存储最后一次下载时间
          Storage["default"].store(`download_${data.en_name}`, new Date().getTime());

          if (canenter) {
            this.__onStartRoom(data, isRecord);
          } else {
            this.props.alert({
              content: "下载完成。"
            });
          }
        },
        user: this.props.account
      }),
      nobutton: true,
      noanim: true
    });
  }

  onEnterRoom(isRecord) {
    if (isRecord) {
      this.props.onCourseRecording(true);
    } else {
      this.props.onStartCourse();
    }
  }

  onConfirmToLogout() {
    this.props.confirm({
      content: "确认退出当前登录的帐号吗？",
      sure: () => {
        this.onLogout();
      }
    });
  }

  onLogout() {
    this.props.onLogout();
    this.props.onLessonsComming([]);
    this.props.onLessonsDone([]);
  }

  __view_user() {
    this.props.confirm({
      title: "个人信息",
      nobutton: true,
      content: main_student_page_jsx(components_viewuser, {
        user: this.props.account,
        onLogout: () => {
          this.onConfirmToLogout();
        },
        onChangeUser: user => {
          this.props.onChangeUserInfo(user);
        }
      })
    });
  }

  __on_helper() {
    this.props.confirm({
      title: "问题帮助",
      nobutton: true,
      content: _ref15
    });
  }

  __query_courses(more) {
    if (this.state.comming_page_selected) {
      if (this.$no_morelessons_comming || this.$querying_comming_lessons) return;

      if (more || this.$page_comming == 1) {
        this.$querying_comming_lessons = true;
        network["default"].getLessonListComming({
          page: this.$page_comming
        }).then(res => {
          this.$querying_comming_lessons = false;

          if (res && res.list && res.list.data && res.list.data.length > 0) {
            this.$page_comming = Number(res.list.current_page) + 1;
            let latest = (this.props.commingRooms || []).concat(res.list.data || []);
            this.props.onLessonsComming(latest);
            res.total && res.total.length > 0 && this.props.onLessonsTotalComming(res.total);
          } else {
            this.$no_morelessons_comming = true;
          }
        });
      }
    } else {
      if (this.$no_morelessons_done || this.$querying_done_lessons) return;

      if (more || this.$page_done == 1) {
        this.$querying_done_lessons = true;
        return network["default"].getLessonListDone({
          page: this.$page_done
        }).then(res => {
          this.$querying_done_lessons = false;

          if (res && res.list && res.list.data && res.list.data.length > 0) {
            this.$page_done = Number(res.list.current_page) + 1;
            let latest = (this.props.doneRooms || []).concat(res.list.data || []);
            this.props.onLessonsDone(latest);
            res.total && res.total.length > 0 && this.props.onLessonsTotalDone(res.total);
          } else {
            this.$no_morelessons_done = true;
          }
        });
      }
    }
  }

  render() {
    let {
      account
    } = this.props;
    let content,
        sidebar = "";

    if (this.props.started) {
      //如果是回放加载回放组件
      content = main_student_page_jsx(course_student_page, {
        onLeaveRoom: () => {
          this.__get_lesson_comming();
        }
      });
    } else if (this.props.recording) {
      content = _ref16;
    } else if (this.props.testing) {
      content = _ref17;
    } else if (this.props.mycourses) {
      content = this.__my_courses();
    } else {
      content = this.__student_page();
      sidebar = main_student_page_jsx(components_sidebar, {
        user: this.props.account,
        onDeviceTest: () => {
          this.props.onEnterTester("main");
        },
        onViewUser: () => {
          this.__view_user();
        },
        onViewHelper: () => {
          this.__on_helper();
        },
        onEnterMyCourses: () => {
          this.props.onEnterMyCourses();

          this.__query_courses();
        }
      });
    }

    return main_student_page_jsx("div", {
      className: "full-h"
    }, void 0, sidebar, content);
  }

  onScrollHandle(event) {
    const clientHeight = event.target.clientHeight;
    const scrollHeight = event.target.scrollHeight;
    const scrollTop = event.target.scrollTop;
    const isBottom = clientHeight + scrollTop === scrollHeight;

    if (isBottom) {
      this.__query_courses(true);
    }
  }

}

const main_student_page_mapStateToProps = (state, ownProps) => {
  return {
    account: state.login.account,
    rooms: state.main.rooms,
    room: state.room.info,
    gifts: state.room.gifts,
    calendar: state.main.calendar,
    started: state.main.courseStarted,
    recording: state.main.recording,
    testing: state.main.enterTester,
    mycourses: state.main.enterMyCourses,
    commingRoom: state.main.commingRoom,
    commingRooms: state.main.commingRooms,
    doneRooms: state.main.doneRooms,
    totalComming: state.main.totalComming,
    totalDone: state.main.totalDone
  };
};

const main_student_page_mapDispatchToProps = dispatch => ({
  onRoomList: rooms => dispatch(Object(actions["N" /* onRoomList */])(rooms)),
  onRoomInfo: data => dispatch(Object(actions["M" /* onRoomInfo */])(data)),
  onCalendarData: data => dispatch(Object(actions["g" /* onCalendarData */])(data)),
  onLogout: () => dispatch(Object(actions["y" /* onLogout */])()),
  onStartCourse: () => dispatch(Object(actions["Q" /* onStartCourse */])()),
  confirm: data => dispatch(Object(actions["b" /* confirm */])(data)),
  alert: data => dispatch(Object(actions["a" /* alert */])(data)),
  hide: () => dispatch(Object(actions["c" /* hide */])()),
  onEnterTester: fromPage => dispatch(Object(actions["o" /* onEnterTester */])(fromPage)),
  onEnterMyCourses: () => dispatch(Object(actions["n" /* onEnterMyCourses */])()),
  onExitMyCourses: () => dispatch(Object(actions["p" /* onExitMyCourses */])()),
  onChangeUserInfo: user => dispatch(Object(actions["h" /* onChangeUserInfo */])(user)),
  onCourseRecording: status => dispatch(Object(actions["i" /* onCourseRecording */])(status)),
  onLessonComming: room => dispatch(Object(actions["t" /* onLessonComming */])(room)),
  onLessonsComming: rooms => dispatch(Object(actions["u" /* onLessonsComming */])(rooms)),
  onLessonsDone: rooms => dispatch(Object(actions["v" /* onLessonsDone */])(rooms)),
  onLessonsTotalComming: rooms => dispatch(Object(actions["w" /* onLessonsTotalComming */])(rooms)),
  onLessonsTotalDone: rooms => dispatch(Object(actions["x" /* onLessonsTotalDone */])(rooms)),
  showLoading: message => dispatch(Object(actions["X" /* showLoading */])(message)),
  hideLoading: () => dispatch(Object(actions["d" /* hideLoading */])())
});

/* harmony default export */ var main_student_page = (Object(external_react_redux_["connect"])(main_student_page_mapStateToProps, main_student_page_mapDispatchToProps)(main_student_page_Main));
// CONCATENATED MODULE: ./dev/scripts/containers/dialog.js

var dialog_REACT_ELEMENT_TYPE;

function dialog_jsx(type, props, key, children) { if (!dialog_REACT_ELEMENT_TYPE) { dialog_REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: dialog_REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }








class dialog_Dialog extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    external_electron_["ipcRenderer"].on('hotkey', (event, hotkeyName) => {
      if (this.onHotKey && typeof this.onHotKey === 'function') {
        this.onHotKey(hotkeyName);
      }
    });
  }

  hide() {
    this.props.dispatchHide();

    if (this.props.data.configure.cancel) {
      this.props.data.configure.cancel();
    }
  }

  sure() {
    this.hide();

    if (this.props.data.configure.sure) {
      this.props.data.configure.sure();
    }
  }

  render() {
    let buttons = [];
    console.log("this.props.data", this.props.data);
    const {
      type,
      configure
    } = this.props.data;

    if (type == "confirm") {
      buttons.push(dialog_jsx("button", {
        className: "cancel-btn",
        onClick: this.hide.bind(this)
      }, "cancel-btn", configure.cancel_txt || "取消"));
    }

    buttons.push(dialog_jsx("button", {
      className: "ok-btn",
      onClick: this.sure.bind(this)
    }, "ok-btn", configure.sure_txt || "确定"));
    return dialog_jsx("div", {
      className: "mask dialog-layer show"
    }, void 0, dialog_jsx("div", {
      className: "dialog " + (configure.classname || ""),
      style: configure.styles
    }, void 0, dialog_jsx("div", {
      className: "title"
    }, void 0, configure.title || "提示", this.props.data.configure.close_hidden ? '' : dialog_jsx("div", {
      className: "close-btn",
      onClick: this.hide.bind(this)
    })), dialog_jsx("div", {
      className: configure.nobutton ? "content nobtn" : "content"
    }, void 0, dialog_jsx("div", {
      className: "texts"
    }, void 0, configure.content), configure.nobutton ? "" : dialog_jsx("div", {
      className: "btns"
    }, void 0, buttons))));
  }

  onHotKey(hotkeyName) {
    if (!this.props.showing) return;

    switch (dev_hotkey[hotkeyName]) {
      case dev_hotkey.KEY_ENTER:
        this.sure();
        break;

      case dev_hotkey.KEY_ESC:
        this.hide();
        break;

      default:
        break;
    }
  }

  componentWillUnmount() {
    this.onHotKey = null;
  }

}

const dialog_mapStateToProps = (state, ownProps) => {
  return {
    showing: state.dialog.showing
  };
};

const dialog_mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchHide: () => {
      dispatch(Object(actions["c" /* hide */])());
    }
  };
};

/* harmony default export */ var containers_dialog = (Object(external_react_redux_["connect"])(dialog_mapStateToProps, dialog_mapDispatchToProps)(dialog_Dialog));
// CONCATENATED MODULE: ./dev/scripts/netdetector.js



class netdetector_NetDetector extends eventer["a" /* default */] {
  constructor() {
    super(); // 0-4 个状态
    // 0 为网络断开，1-4 数字越高网络越差

    this.$status = 1;
    this.$warn_times = 0;
    this.$max_warn_times = 3;
    this.$check_delay = 30000;
    this.$in_bad_status = false;
    this.$check_timer = null;
    this.$check_closed = true;
    this.$waring_threshold = 2;
  }

  get waring_threshold() {
    return this.$waring_threshold;
  }

  set waring_threshold(threshold) {
    this.$waring_threshold = threshold;
  }

  get good() {
    return this.$status == 1;
  }

  get offline() {
    return this.$status == 0;
  }

  get warning() {
    return this.$status == 0 || this.$status > this.$waring_threshold;
  }

  check() {// console.log("call check")
    // this.$check_closed = false
    // let base = "https://muwen.mw009.com/netdetector.jpg"
    // clearTimeout(this.$check_timer)
    // this.$check_timer = setTimeout(()=>{
    // 	this.onAjaxTime(this.$check_delay)
    // 	this.check()
    // },this.$check_delay)
    // let start = new Date().getTime()
    // $.get(`${base}?t=${new Date().getTime()}`,()=>{
    // 	let delay = new Date().getTime() - start
    // 	this.onAjaxTime(delay)
    // 	clearTimeout(this.$check_timer)
    // 	this.$check_timer = setTimeout(()=>{
    // 		this.check()
    // 	},this.$check_delay)
    // }).fail(()=>{
    // 	this.onAjaxTime(-1)
    // 	clearTimeout(this.$check_timer)
    // 	this.$check_timer = setTimeout(()=>{
    // 		this.check()
    // 	},this.$check_delay)
    // })
  }

  uncheck() {
    console.log("call uncheck");
    clearTimeout(this.$check_timer);
    this.$check_closed = true;
  }

  setStatus(status) {
    this.__setStatus(status);
  }

  setStatusOnce(status) {
    this.$status = status;
    this.trigger("NET:STATUS", this.$status);
  }

  onAjaxTime(delay) {
    if (this.$check_closed) return;
    delay -= 0;
    if (!delay) return;
    let status;

    if (delay == -1) {
      status = 0;
    } else if (delay <= 300) {
      status = 1;
    } else if (delay <= 500) {
      status = 2;
    } else if (delay <= 1200) {
      status = 3;
    } else {
      status = 4;
    }

    console.log("set status", status);

    this.__setStatus(status);
  }

  get inBadStatus() {
    return this.$in_bad_status;
  }

  __setStatus(value) {
    this.$status = value;
    this.trigger("NET:STATUS", this.$status);
    network["default"].log({
      name: "NET:STATUS",
      status: this.$status
    });

    if (this.warning) {
      this.$warn_times++;
    } else {
      this.$warn_times--;
    }

    if (this.$warn_times >= this.$max_warn_times) {
      this.$warn_times = this.$max_warn_times;

      if (!this.$in_bad_status) {
        this.trigger("NET_STATUS_BAD");
        this.$in_bad_status = true;
      }
    } else if (this.$warn_times <= 0) {
      this.$warn_times = 0;

      if (this.$in_bad_status) {
        this.trigger("NET_STATUS_GOOD");
        this.$in_bad_status = false;
      }
    }
  }

  unload() {}

}

/* harmony default export */ var netdetector = (netdetector_NetDetector);
// CONCATENATED MODULE: ./dev/scripts/containers/entry.page.js

var entry_page_REACT_ELEMENT_TYPE;

function entry_page_jsx(type, props, key, children) { if (!entry_page_REACT_ELEMENT_TYPE) { entry_page_REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: entry_page_REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }













var entry_page_ref =
/*#__PURE__*/
entry_page_jsx(login_page, {});

var entry_page_ref2 =
/*#__PURE__*/
entry_page_jsx(main_student_page, {});

var entry_page_ref3 =
/*#__PURE__*/
entry_page_jsx(main_teacher_page, {});

class entry_page_Entry extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.__start_detector();
  }

  componentWillUnmount() {
    this.$detector.unload();
  }

  __start_detector() {
    let detector = new netdetector();
    context["default"].detector = detector;
    context["default"].detector.waring_threshold = 3;
  }

  render() {
    const {
      dialog,
      account
    } = this.props;
    return entry_page_jsx(external_react_router_dom_["HashRouter"], {}, void 0, entry_page_jsx("div", {
      className: "full-h"
    }, void 0, entry_page_jsx(external_react_router_dom_["Route"], {
      exact: true,
      path: "/",
      render: () => {
        if (!account) {
          return entry_page_ref;
        } else {
          return this.props.account.dentity == ActionTypes["n" /* DENTITY */].STUDENT ? entry_page_ref2 : entry_page_ref3;
        }
      }
    }), dialog.showing ? entry_page_jsx(containers_dialog, {
      data: dialog
    }) : ""));
  }

}

const entry_page_mapStateToProps = (state, ownProps) => {
  return {
    account: state.login.account,
    dialog: state.dialog
  };
};

const entry_page_mapDispatchToProps = (dispatch, ownProps) => {
  return {
    confirm: data => dispatch(Object(actions["b" /* confirm */])(data)),
    onNetStatusBad: () => dispatch(Object(actions["B" /* onNetStatusBad */])()),
    onNetStatusGood: () => dispatch(Object(actions["C" /* onNetStatusGood */])())
  };
};

/* harmony default export */ var entry_page = (Object(external_react_redux_["connect"])(entry_page_mapStateToProps, entry_page_mapDispatchToProps)(entry_page_Entry));
// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(57);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./dev/scripts/app.js



var app_REACT_ELEMENT_TYPE;

function app_jsx(type, props, key, children) { if (!app_REACT_ELEMENT_TYPE) { app_REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: app_REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

/**
 * 样式文件
 */












external_electron_["ipcRenderer"].on('configure', (event, data) => {
  console.log("configure", data);

  if (!window.ENV_CONF) {
    window.ENV_CONF = {};
  }

  for (let key in data) {
    window.ENV_CONF[key] = data[key];
  }
});
const middleware = [external_redux_thunk_default.a];
const store = Object(external_redux_["createStore"])(reducers["a" /* default */], Object(external_redux_["applyMiddleware"])(...middleware));
store.dispatch(Object(actions["W" /* restoreUserInfo */])());
Object(external_react_dom_["render"])(app_jsx(external_react_redux_["Provider"], {
  store: store
}, void 0, app_jsx(entry_page, {})), document.getElementById("app"));

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.3.0.0@core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(16);

// CONCATENATED MODULE: ./dev/agora/Renderer/GlRenderer/webgl-utils.js
/*
 * Copyright 2012, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */




var WebGlUtils = function () {
  var topWindow = this;
  /** @module webgl-utils */

  /**
   * Wrapped logging function.
   * @param {string} msg The message to log.
   */

  function error(msg) {
    if (topWindow.console) {
      if (topWindow.console.error) {
        topWindow.console.error(msg);
      } else if (topWindow.console.log) {
        topWindow.console.log(msg);
      }
    }
  }
  /**
   * Check if the page is embedded.
   * @param {Window?) w window to check
   * @return {boolean} True of we are in an iframe
   */


  function isInIFrame(w) {
    w = w || topWindow;
    return w !== w.top;
  }
  /**
   * Creates the HTLM for a failure message
   * @param {string} canvasContainerId id of container of th
   *        canvas.
   * @return {string} The html.
   */


  function makeFailHTML(msg) {
    return '' + '<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>' + '<td align="center">' + '<div style="display: table-cell; vertical-align: middle;">' + '<div style="">' + msg + '</div>' + '</div>' + '</td></tr></table>';
  }
  /**
   * Mesasge for getting a webgl browser
   * @type {string}
   */


  var GET_A_WEBGL_BROWSER = '' + 'This page requires a browser that supports WebGL.<br/>' + '<a href="http://get.webgl.org">Click here to upgrade your browser.</a>';
  /**
   * Mesasge for need better hardware
   * @type {string}
   */

  var OTHER_PROBLEM = '' + "It doesn't appear your computer can support WebGL.<br/>" + '<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>';
  /**
   * Creates a webgl context.
   * @param {HTMLCanvasElement} canvas The canvas tag to get
   *     context from. If one is not passed in one will be
   *     created.
   * @return {WebGLRenderingContext} The created context.
   */

  function create3DContext(canvas, opt_attribs) {
    var names = ["webgl", "experimental-webgl"];
    var context = null;

    for (var ii = 0; ii < names.length; ++ii) {
      try {
        context = canvas.getContext(names[ii], opt_attribs);
      } catch (e) {} // eslint-disable-line


      if (context) {
        break;
      }
    }

    return context;
  }
  /**
   * Creates a webgl context. If creation fails it will
   * change the contents of the container of the <canvas>
   * tag to an error message with the correct links for WebGL.
   * @param {HTMLCanvasElement} canvas. The canvas element to
   *     create a context from.
   * @param {WebGLContextCreationAttirbutes} opt_attribs Any
   *     creation attributes you want to pass in.
   * @return {WebGLRenderingContext} The created context.
   * @memberOf module:webgl-utils
   */


  function setupWebGL(canvas, opt_attribs) {
    function showLink(str) {
      var container = canvas.parentNode;

      if (container) {
        container.innerHTML = makeFailHTML(str);
      }
    }

    if (!topWindow.WebGLRenderingContext) {
      showLink(GET_A_WEBGL_BROWSER);
      return null;
    }

    var context = create3DContext(canvas, opt_attribs);

    if (!context) {
      showLink(OTHER_PROBLEM);
    }

    return context;
  }

  function updateCSSIfInIFrame() {
    if (isInIFrame()) {
      document.body.className = "iframe";
    }
  }
  /**
   * @typedef {Object} GetWebGLContextOptions
   * @property {boolean} [dontResize] by default `getWebGLContext` will resize the canvas to match the size it's displayed.
   * @property {boolean} [noTitle] by default inserts a copy of the `<title>` content into the page
   * @memberOf module:webgl-utils
   */

  /**
   * Gets a WebGL context.
   * makes its backing store the size it is displayed.
   * @param {HTMLCanvasElement} canvas a canvas element.
   * @param {WebGLContextCreationAttirbutes} [opt_attribs] optional webgl context creation attributes
   * @param {module:webgl-utils.GetWebGLContextOptions} [opt_options] options
   * @memberOf module:webgl-utils
   */


  function getWebGLContext(canvas, opt_attribs, opt_options) {
    var options = opt_options || {};

    if (isInIFrame()) {
      updateCSSIfInIFrame(); // make the canvas backing store the size it's displayed.

      if (!options.dontResize && options.resize !== false) {
        var width = canvas.clientWidth;
        var height = canvas.clientHeight;
        canvas.width = width;
        canvas.height = height;
      }
    } else if (!options.noTitle && options.title !== false) {
      var title = document.title;
      var h1 = document.createElement("h1");
      h1.innerText = title;
      document.body.insertBefore(h1, document.body.children[0]);
    }

    var gl = setupWebGL(canvas, opt_attribs);
    return gl;
  }
  /**
   * Error Callback
   * @callback ErrorCallback
   * @param {string} msg error message.
   * @memberOf module:webgl-utils
   */

  /**
   * Loads a shader.
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
   * @param {string} shaderSource The shader source.
   * @param {number} shaderType The type of shader.
   * @param {module:webgl-utils.ErrorCallback} opt_errorCallback callback for errors.
   * @return {WebGLShader} The created shader.
   */


  function loadShader(gl, shaderSource, shaderType, opt_errorCallback) {
    var errFn = opt_errorCallback || error; // Create the shader object

    var shader = gl.createShader(shaderType); // Load the shader source

    gl.shaderSource(shader, shaderSource); // Compile the shader

    gl.compileShader(shader); // Check the compile status

    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

    if (!compiled) {
      // Something went wrong during compilation; get the error
      var lastError = gl.getShaderInfoLog(shader);
      errFn("*** Error compiling shader '" + shader + "':" + lastError);
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  }
  /**
   * Creates a program, attaches shaders, binds attrib locations, links the
   * program and calls useProgram.
   * @param {WebGLShader[]} shaders The shaders to attach
   * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
   * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
   * @param {module:webgl-utils.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
   *        on error. If you want something else pass an callback. It's passed an error message.
   * @memberOf module:webgl-utils
   */


  function createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback) {
    var errFn = opt_errorCallback || error;
    var program = gl.createProgram();
    shaders.forEach(function (shader) {
      gl.attachShader(program, shader);
    });

    if (opt_attribs) {
      obj_attrib.forEach(function (attrib, ndx) {
        gl.bindAttribLocation(program, opt_locations ? opt_locations[ndx] : ndx, attrib);
      });
    }

    gl.linkProgram(program); // Check the link status

    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);

    if (!linked) {
      // something went wrong with the link
      var lastError = gl.getProgramInfoLog(program);
      errFn("Error in program linking:" + lastError);
      gl.deleteProgram(program);
      return null;
    }

    return program;
  }
  /**
   * Loads a shader from a script tag.
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
   * @param {string} scriptId The id of the script tag.
   * @param {number} opt_shaderType The type of shader. If not passed in it will
   *     be derived from the type of the script tag.
   * @param {module:webgl-utils.ErrorCallback} opt_errorCallback callback for errors.
   * @return {WebGLShader} The created shader.
   */


  function createShaderFromScript(gl, scriptId, opt_shaderType, opt_errorCallback) {
    var shaderSource = "";
    var shaderType;
    var shaderScript = document.getElementById(scriptId);

    if (!shaderScript) {
      throw "*** Error: unknown script element" + scriptId;
    }

    shaderSource = shaderScript.text;

    if (!opt_shaderType) {
      if (shaderScript.type === "x-shader/x-vertex") {
        shaderType = gl.VERTEX_SHADER;
      } else if (shaderScript.type === "x-shader/x-fragment") {
        shaderType = gl.FRAGMENT_SHADER;
      } else if (shaderType !== gl.VERTEX_SHADER && shaderType !== gl.FRAGMENT_SHADER) {
        throw "*** Error: unknown shader type";
      }
    }

    return loadShader(gl, shaderSource, opt_shaderType ? opt_shaderType : shaderType, opt_errorCallback);
  }

  var defaultShaderType = ["VERTEX_SHADER", "FRAGMENT_SHADER"];
  /**
   * Creates a program from 2 script tags.
   *
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
   *        to use.
   * @param {string[]} shaderScriptIds Array of ids of the script
   *        tags for the shaders. The first is assumed to be the
   *        vertex shader, the second the fragment shader.
   * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
   * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
   * @param {module:webgl-utils.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
   *        on error. If you want something else pass an callback. It's passed an error message.
   * @return {WebGLProgram} The created program.
   * @memberOf module:webgl-utils
   */

  function createProgramFromScripts(gl, shaderScriptIds, opt_attribs, opt_locations, opt_errorCallback) {
    var shaders = [];

    for (var ii = 0; ii < shaderScriptIds.length; ++ii) {
      shaders.push(createShaderFromScript(gl, shaderScriptIds[ii], gl[defaultShaderType[ii]], opt_errorCallback));
    }

    return createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback);
  }
  /**
   * Creates a program from 2 sources.
   *
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
   *        to use.
   * @param {string[]} shaderSourcess Array of sources for the
   *        shaders. The first is assumed to be the vertex shader,
   *        the second the fragment shader.
   * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
   * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
   * @param {module:webgl-utils.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
   *        on error. If you want something else pass an callback. It's passed an error message.
   * @return {WebGLProgram} The created program.
   * @memberOf module:webgl-utils
   */


  function createProgramFromSources(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
    var shaders = [];

    for (var ii = 0; ii < shaderSources.length; ++ii) {
      shaders.push(loadShader(gl, shaderSources[ii], gl[defaultShaderType[ii]], opt_errorCallback));
    }

    return createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback);
  }
  /**
   * Returns the corresponding bind point for a given sampler type
   */


  function getBindPointForSamplerType(gl, type) {
    if (type === gl.SAMPLER_2D) return gl.TEXTURE_2D; // eslint-disable-line

    if (type === gl.SAMPLER_CUBE) return gl.TEXTURE_CUBE_MAP; // eslint-disable-line
  }
  /**
   * @typedef {Object.<string, function>} Setters
   */

  /**
   * Creates setter functions for all uniforms of a shader
   * program.
   *
   * @see {@link module:webgl-utils.setUniforms}
   *
   * @param {WebGLProgram} program the program to create setters for.
   * @returns {Object.<string, function>} an object with a setter by name for each uniform
   * @memberOf module:webgl-utils
   */


  function createUniformSetters(gl, program) {
    var textureUnit = 0;
    /**
     * Creates a setter for a uniform of the given program with it's
     * location embedded in the setter.
     * @param {WebGLProgram} program
     * @param {WebGLUniformInfo} uniformInfo
     * @returns {function} the created setter.
     */

    function createUniformSetter(program, uniformInfo) {
      var location = gl.getUniformLocation(program, uniformInfo.name);
      var type = uniformInfo.type; // Check if this uniform is an array

      var isArray = uniformInfo.size > 1 && uniformInfo.name.substr(-3) === "[0]";

      if (type === gl.FLOAT && isArray) {
        return function (v) {
          gl.uniform1fv(location, v);
        };
      }

      if (type === gl.FLOAT) {
        return function (v) {
          gl.uniform1f(location, v);
        };
      }

      if (type === gl.FLOAT_VEC2) {
        return function (v) {
          gl.uniform2fv(location, v);
        };
      }

      if (type === gl.FLOAT_VEC3) {
        return function (v) {
          gl.uniform3fv(location, v);
        };
      }

      if (type === gl.FLOAT_VEC4) {
        return function (v) {
          gl.uniform4fv(location, v);
        };
      }

      if (type === gl.INT && isArray) {
        return function (v) {
          gl.uniform1iv(location, v);
        };
      }

      if (type === gl.INT) {
        return function (v) {
          gl.uniform1i(location, v);
        };
      }

      if (type === gl.INT_VEC2) {
        return function (v) {
          gl.uniform2iv(location, v);
        };
      }

      if (type === gl.INT_VEC3) {
        return function (v) {
          gl.uniform3iv(location, v);
        };
      }

      if (type === gl.INT_VEC4) {
        return function (v) {
          gl.uniform4iv(location, v);
        };
      }

      if (type === gl.BOOL) {
        return function (v) {
          gl.uniform1iv(location, v);
        };
      }

      if (type === gl.BOOL_VEC2) {
        return function (v) {
          gl.uniform2iv(location, v);
        };
      }

      if (type === gl.BOOL_VEC3) {
        return function (v) {
          gl.uniform3iv(location, v);
        };
      }

      if (type === gl.BOOL_VEC4) {
        return function (v) {
          gl.uniform4iv(location, v);
        };
      }

      if (type === gl.FLOAT_MAT2) {
        return function (v) {
          gl.uniformMatrix2fv(location, false, v);
        };
      }

      if (type === gl.FLOAT_MAT3) {
        return function (v) {
          gl.uniformMatrix3fv(location, false, v);
        };
      }

      if (type === gl.FLOAT_MAT4) {
        return function (v) {
          gl.uniformMatrix4fv(location, false, v);
        };
      }

      if ((type === gl.SAMPLER_2D || type === gl.SAMPLER_CUBE) && isArray) {
        var units = [];

        for (var ii = 0; ii < info.size; ++ii) {
          units.push(textureUnit++);
        }

        return function (bindPoint, units) {
          return function (textures) {
            gl.uniform1iv(location, units);
            textures.forEach(function (texture, index) {
              gl.activeTexture(gl.TEXTURE0 + units[index]);
              gl.bindTexture(bindPoint, texture);
            });
          };
        }(getBindPointForSamplerType(gl, type), units);
      }

      if (type === gl.SAMPLER_2D || type === gl.SAMPLER_CUBE) {
        return function (bindPoint, unit) {
          return function (texture) {
            gl.uniform1i(location, unit);
            gl.activeTexture(gl.TEXTURE0 + unit);
            gl.bindTexture(bindPoint, texture);
          };
        }(getBindPointForSamplerType(gl, type), textureUnit++);
      }

      throw "unknown type: 0x" + type.toString(16); // we should never get here.
    }

    var uniformSetters = {};
    var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

    for (var ii = 0; ii < numUniforms; ++ii) {
      var uniformInfo = gl.getActiveUniform(program, ii);

      if (!uniformInfo) {
        break;
      }

      var name = uniformInfo.name; // remove the array suffix.

      if (name.substr(-3) === "[0]") {
        name = name.substr(0, name.length - 3);
      }

      var setter = createUniformSetter(program, uniformInfo);
      uniformSetters[name] = setter;
    }

    return uniformSetters;
  }
  /**
   * Set uniforms and binds related textures.
   *
   * example:
   *
   *     var programInfo = createProgramInfo(
   *         gl, ["some-vs", "some-fs");
   *
   *     var tex1 = gl.createTexture();
   *     var tex2 = gl.createTexture();
   *
   *     ... assume we setup the textures with data ...
   *
   *     var uniforms = {
   *       u_someSampler: tex1,
   *       u_someOtherSampler: tex2,
   *       u_someColor: [1,0,0,1],
   *       u_somePosition: [0,1,1],
   *       u_someMatrix: [
   *         1,0,0,0,
   *         0,1,0,0,
   *         0,0,1,0,
   *         0,0,0,0,
   *       ],
   *     };
   *
   *     gl.useProgram(program);
   *
   * This will automatically bind the textures AND set the
   * uniforms.
   *
   *     setUniforms(programInfo.uniformSetters, uniforms);
   *
   * For the example above it is equivalent to
   *
   *     var texUnit = 0;
   *     gl.activeTexture(gl.TEXTURE0 + texUnit);
   *     gl.bindTexture(gl.TEXTURE_2D, tex1);
   *     gl.uniform1i(u_someSamplerLocation, texUnit++);
   *     gl.activeTexture(gl.TEXTURE0 + texUnit);
   *     gl.bindTexture(gl.TEXTURE_2D, tex2);
   *     gl.uniform1i(u_someSamplerLocation, texUnit++);
   *     gl.uniform4fv(u_someColorLocation, [1, 0, 0, 1]);
   *     gl.uniform3fv(u_somePositionLocation, [0, 1, 1]);
   *     gl.uniformMatrix4fv(u_someMatrix, false, [
   *         1,0,0,0,
   *         0,1,0,0,
   *         0,0,1,0,
   *         0,0,0,0,
   *       ]);
   *
   * Note it is perfectly reasonable to call `setUniforms` multiple times. For example
   *
   *     var uniforms = {
   *       u_someSampler: tex1,
   *       u_someOtherSampler: tex2,
   *     };
   *
   *     var moreUniforms {
   *       u_someColor: [1,0,0,1],
   *       u_somePosition: [0,1,1],
   *       u_someMatrix: [
   *         1,0,0,0,
   *         0,1,0,0,
   *         0,0,1,0,
   *         0,0,0,0,
   *       ],
   *     };
   *
   *     setUniforms(programInfo.uniformSetters, uniforms);
   *     setUniforms(programInfo.uniformSetters, moreUniforms);
   *
   * @param {Object.<string, function>} setters the setters returned from
   *        `createUniformSetters`.
   * @param {Object.<string, value>} an object with values for the
   *        uniforms.
   * @memberOf module:webgl-utils
   */


  function setUniforms(setters, values) {
    Object.keys(values).forEach(function (name) {
      var setter = setters[name];

      if (setter) {
        setter(values[name]);
      }
    });
  }
  /**
   * Creates setter functions for all attributes of a shader
   * program. You can pass this to {@link module:webgl-utils.setBuffersAndAttributes} to set all your buffers and attributes.
   *
   * @see {@link module:webgl-utils.setAttributes} for example
   * @param {WebGLProgram} program the program to create setters for.
   * @return {Object.<string, function>} an object with a setter for each attribute by name.
   * @memberOf module:webgl-utils
   */


  function createAttributeSetters(gl, program) {
    var attribSetters = {};

    function createAttribSetter(index) {
      return function (b) {
        gl.bindBuffer(gl.ARRAY_BUFFER, b.buffer);
        gl.enableVertexAttribArray(index);
        gl.vertexAttribPointer(index, b.numComponents || b.size, b.type || gl.FLOAT, b.normalize || false, b.stride || 0, b.offset || 0);
      };
    }

    var numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);

    for (var ii = 0; ii < numAttribs; ++ii) {
      var attribInfo = gl.getActiveAttrib(program, ii);

      if (!attribInfo) {
        break;
      }

      var index = gl.getAttribLocation(program, attribInfo.name);
      attribSetters[attribInfo.name] = createAttribSetter(index);
    }

    return attribSetters;
  }
  /**
   * Sets attributes and binds buffers (deprecated... use {@link module:webgl-utils.setBuffersAndAttributes})
   *
   * Example:
   *
   *     var program = createProgramFromScripts(
   *         gl, ["some-vs", "some-fs");
   *
   *     var attribSetters = createAttributeSetters(program);
   *
   *     var positionBuffer = gl.createBuffer();
   *     var texcoordBuffer = gl.createBuffer();
   *
   *     var attribs = {
   *       a_position: {buffer: positionBuffer, numComponents: 3},
   *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
   *     };
   *
   *     gl.useProgram(program);
   *
   * This will automatically bind the buffers AND set the
   * attributes.
   *
   *     setAttributes(attribSetters, attribs);
   *
   * Properties of attribs. For each attrib you can add
   * properties:
   *
   * *   type: the type of data in the buffer. Default = gl.FLOAT
   * *   normalize: whether or not to normalize the data. Default = false
   * *   stride: the stride. Default = 0
   * *   offset: offset into the buffer. Default = 0
   *
   * For example if you had 3 value float positions, 2 value
   * float texcoord and 4 value uint8 colors you'd setup your
   * attribs like this
   *
   *     var attribs = {
   *       a_position: {buffer: positionBuffer, numComponents: 3},
   *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
   *       a_color: {
   *         buffer: colorBuffer,
   *         numComponents: 4,
   *         type: gl.UNSIGNED_BYTE,
   *         normalize: true,
   *       },
   *     };
   *
   * @param {Object.<string, function>} setters Attribute setters as returned from createAttributeSetters
   * @param {Object.<string, module:webgl-utils.AttribInfo>} buffers AttribInfos mapped by attribute name.
   * @memberOf module:webgl-utils
   * @deprecated use {@link module:webgl-utils.setBuffersAndAttributes}
   */


  function setAttributes(setters, buffers) {
    Object.keys(buffers).forEach(function (name) {
      var setter = setters[name];

      if (setter) {
        setter(buffers[name]);
      }
    });
  }
  /**
   * @typedef {Object} ProgramInfo
   * @property {WebGLProgram} program A shader program
   * @property {Object<string, function>} uniformSetters: object of setters as returned from createUniformSetters,
   * @property {Object<string, function>} attribSetters: object of setters as returned from createAttribSetters,
   * @memberOf module:webgl-utils
   */

  /**
   * Creates a ProgramInfo from 2 sources.
   *
   * A ProgramInfo contains
   *
   *     programInfo = {
   *        program: WebGLProgram,
   *        uniformSetters: object of setters as returned from createUniformSetters,
   *        attribSetters: object of setters as returned from createAttribSetters,
   *     }
   *
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
   *        to use.
   * @param {string[]} shaderSourcess Array of sources for the
   *        shaders or ids. The first is assumed to be the vertex shader,
   *        the second the fragment shader.
   * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
   * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
   * @param {module:webgl-utils.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
   *        on error. If you want something else pass an callback. It's passed an error message.
   * @return {module:webgl-utils.ProgramInfo} The created program.
   * @memberOf module:webgl-utils
   */


  function createProgramInfo(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
    shaderSources = shaderSources.map(function (source) {
      var script = document.getElementById(source);
      return script ? script.text : source;
    });
    var program = createProgramFromSources(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback);

    if (!program) {
      return null;
    }

    var uniformSetters = createUniformSetters(gl, program);
    var attribSetters = createAttributeSetters(gl, program);
    return {
      program: program,
      uniformSetters: uniformSetters,
      attribSetters: attribSetters
    };
  }
  /**
   * Sets attributes and buffers including the `ELEMENT_ARRAY_BUFFER` if appropriate
   *
   * Example:
   *
   *     var programInfo = createProgramInfo(
   *         gl, ["some-vs", "some-fs");
   *
   *     var arrays = {
   *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
   *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
   *     };
   *
   *     var bufferInfo = createBufferInfoFromArrays(gl, arrays);
   *
   *     gl.useProgram(programInfo.program);
   *
   * This will automatically bind the buffers AND set the
   * attributes.
   *
   *     setBuffersAndAttributes(programInfo.attribSetters, bufferInfo);
   *
   * For the example above it is equivilent to
   *
   *     gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
   *     gl.enableVertexAttribArray(a_positionLocation);
   *     gl.vertexAttribPointer(a_positionLocation, 3, gl.FLOAT, false, 0, 0);
   *     gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
   *     gl.enableVertexAttribArray(a_texcoordLocation);
   *     gl.vertexAttribPointer(a_texcoordLocation, 4, gl.FLOAT, false, 0, 0);
   *
   * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
   * @param {Object.<string, function>} setters Attribute setters as returned from `createAttributeSetters`
   * @param {module:webgl-utils.BufferInfo} buffers a BufferInfo as returned from `createBufferInfoFromArrays`.
   * @memberOf module:webgl-utils
   */


  function setBuffersAndAttributes(gl, setters, buffers) {
    setAttributes(setters, buffers.attribs);

    if (buffers.indices) {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
    }
  } // Add your prefix here.


  var browserPrefixes = ["", "MOZ_", "OP_", "WEBKIT_"];
  /**
   * Given an extension name like WEBGL_compressed_texture_s3tc
   * returns the supported version extension, like
   * WEBKIT_WEBGL_compressed_teture_s3tc
   * @param {string} name Name of extension to look for
   * @return {WebGLExtension} The extension or undefined if not
   *     found.
   * @memberOf module:webgl-utils
   */

  function getExtensionWithKnownPrefixes(gl, name) {
    for (var ii = 0; ii < browserPrefixes.length; ++ii) {
      var prefixedName = browserPrefixes[ii] + name;
      var ext = gl.getExtension(prefixedName);

      if (ext) {
        return ext;
      }
    }
  }
  /**
   * Resize a canvas to match the size its displayed.
   * @param {HTMLCanvasElement} canvas The canvas to resize.
   * @param {boolean} true if the canvas was resized.
   * @memberOf module:webgl-utils
   */


  function resizeCanvasToDisplaySize(canvas, multiplier) {
    multiplier = multiplier || 1;
    var width = canvas.clientWidth * multiplier;
    var height = canvas.clientHeight * multiplier;

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      return true;
    }

    return false;
  }
  /**
   * Get's the iframe in the parent document
   * that is displaying the specified window .
   * @param {Window} window window to check.
   * @return {HTMLIFrameElement?) the iframe element if window is in an iframe
   */


  function getIFrameForWindow(window) {
    if (!isInIFrame(window)) {
      return;
    }

    var iframes = window.parent.document.getElementsByTagName("iframe");

    for (var ii = 0; ii < iframes.length; ++ii) {
      var iframe = iframes[ii];

      if (iframe.contentDocument === window.document) {
        return iframe; // eslint-disable-line
      }
    }
  }
  /**
   * Returns true if window is on screen. The main window is
   * always on screen windows in iframes might not be.
   * @param {Window} window the window to check.
   * @return {boolean} true if window is on screen.
   */


  function isFrameVisible(window) {
    try {
      var iframe = getIFrameForWindow(window);

      if (!iframe) {
        return true;
      }

      var bounds = iframe.getBoundingClientRect();
      var isVisible = bounds.top < window.parent.innerHeight && bounds.bottom >= 0 && bounds.left < window.parent.innerWidth && bounds.right >= 0;
      return isVisible && isFrameVisible(window.parent);
    } catch (e) {
      return true; // We got a security error?
    }
  }
  /**
   * Returns true if element is on screen.
   * @param {HTMLElement} element the element to check.
   * @return {boolean} true if element is on screen.
   */


  function isOnScreen(element) {
    var isVisible = true;

    if (element) {
      var bounds = element.getBoundingClientRect();
      isVisible = bounds.top < topWindow.innerHeight && bounds.bottom >= 0;
    }

    return isVisible && isFrameVisible(topWindow);
  } // Add `push` to a typed array. It just keeps a 'cursor'
  // and allows use to `push` values into the array so we
  // don't have to manually compute offsets


  function augmentTypedArray(typedArray, numComponents) {
    var cursor = 0;

    typedArray.push = function () {
      for (var ii = 0; ii < arguments.length; ++ii) {
        var value = arguments[ii];

        if (value instanceof Array || value.buffer && value.buffer instanceof ArrayBuffer) {
          for (var jj = 0; jj < value.length; ++jj) {
            typedArray[cursor++] = value[jj];
          }
        } else {
          typedArray[cursor++] = value;
        }
      }
    };

    typedArray.reset = function (opt_index) {
      cursor = opt_index || 0;
    };

    typedArray.numComponents = numComponents;
    Object.defineProperty(typedArray, 'numElements', {
      get: function () {
        return this.length / this.numComponents | 0;
      }
    });
    return typedArray;
  }
  /**
   * creates a typed array with a `push` function attached
   * so that you can easily *push* values.
   *
   * `push` can take multiple arguments. If an argument is an array each element
   * of the array will be added to the typed array.
   *
   * Example:
   *
   *     var array = createAugmentedTypedArray(3, 2);  // creates a Float32Array with 6 values
   *     array.push(1, 2, 3);
   *     array.push([4, 5, 6]);
   *     // array now contains [1, 2, 3, 4, 5, 6]
   *
   * Also has `numComponents` and `numElements` properties.
   *
   * @param {number} numComponents number of components
   * @param {number} numElements number of elements. The total size of the array will be `numComponents * numElements`.
   * @param {constructor} opt_type A constructor for the type. Default = `Float32Array`.
   * @return {ArrayBuffer} A typed array.
   * @memberOf module:webgl-utils
   */


  function createAugmentedTypedArray(numComponents, numElements, opt_type) {
    var Type = opt_type || Float32Array;
    return augmentTypedArray(new Type(numComponents * numElements), numComponents);
  }

  function createBufferFromTypedArray(gl, array, type, drawType) {
    type = type || gl.ARRAY_BUFFER;
    var buffer = gl.createBuffer();
    gl.bindBuffer(type, buffer);
    gl.bufferData(type, array, drawType || gl.STATIC_DRAW);
    return buffer;
  }

  function allButIndices(name) {
    return name !== "indices";
  }

  function createMapping(obj) {
    var mapping = {};
    Object.keys(obj).filter(allButIndices).forEach(function (key) {
      mapping["a_" + key] = key;
    });
    return mapping;
  }

  function getGLTypeForTypedArray(gl, typedArray) {
    if (typedArray instanceof Int8Array) {
      return gl.BYTE;
    } // eslint-disable-line


    if (typedArray instanceof Uint8Array) {
      return gl.UNSIGNED_BYTE;
    } // eslint-disable-line


    if (typedArray instanceof Int16Array) {
      return gl.SHORT;
    } // eslint-disable-line


    if (typedArray instanceof Uint16Array) {
      return gl.UNSIGNED_SHORT;
    } // eslint-disable-line


    if (typedArray instanceof Int32Array) {
      return gl.INT;
    } // eslint-disable-line


    if (typedArray instanceof Uint32Array) {
      return gl.UNSIGNED_INT;
    } // eslint-disable-line


    if (typedArray instanceof Float32Array) {
      return gl.FLOAT;
    } // eslint-disable-line


    throw "unsupported typed array type";
  } // This is really just a guess. Though I can't really imagine using
  // anything else? Maybe for some compression?


  function getNormalizationForTypedArray(typedArray) {
    if (typedArray instanceof Int8Array) {
      return true;
    } // eslint-disable-line


    if (typedArray instanceof Uint8Array) {
      return true;
    } // eslint-disable-line


    return false;
  }

  function isArrayBuffer(a) {
    return a.buffer && a.buffer instanceof ArrayBuffer;
  }

  function guessNumComponentsFromName(name, length) {
    var numComponents;

    if (name.indexOf("coord") >= 0) {
      numComponents = 2;
    } else if (name.indexOf("color") >= 0) {
      numComponents = 4;
    } else {
      numComponents = 3; // position, normals, indices ...
    }

    if (length % numComponents > 0) {
      throw "can not guess numComponents. You should specify it.";
    }

    return numComponents;
  }

  function makeTypedArray(array, name) {
    if (isArrayBuffer(array)) {
      return array;
    }

    if (Array.isArray(array)) {
      array = {
        data: array
      };
    }

    if (!array.numComponents) {
      array.numComponents = guessNumComponentsFromName(name, array.length);
    }

    var type = array.type;

    if (!type) {
      if (name === "indices") {
        type = Uint16Array;
      }
    }

    var typedArray = createAugmentedTypedArray(array.numComponents, array.data.length / array.numComponents | 0, type);
    typedArray.push(array.data);
    return typedArray;
  }
  /**
   * @typedef {Object} AttribInfo
   * @property {number} [numComponents] the number of components for this attribute.
   * @property {number} [size] the number of components for this attribute.
   * @property {number} [type] the type of the attribute (eg. `gl.FLOAT`, `gl.UNSIGNED_BYTE`, etc...) Default = `gl.FLOAT`
   * @property {boolean} [normalized] whether or not to normalize the data. Default = false
   * @property {number} [offset] offset into buffer in bytes. Default = 0
   * @property {number} [stride] the stride in bytes per element. Default = 0
   * @property {WebGLBuffer} buffer the buffer that contains the data for this attribute
   * @memberOf module:webgl-utils
   */

  /**
   * Creates a set of attribute data and WebGLBuffers from set of arrays
   *
   * Given
   *
   *      var arrays = {
   *        position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
   *        texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
   *        normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
   *        color:    { numComponents: 4, data: [255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255], type: Uint8Array, },
   *        indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
   *      };
   *
   * returns something like
   *
   *      var attribs = {
   *        a_position: { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
   *        a_texcoord: { numComponents: 2, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
   *        a_normal:   { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
   *        a_color:    { numComponents: 4, type: gl.UNSIGNED_BYTE, normalize: true,  buffer: WebGLBuffer, },
   *      };
   *
   * @param {WebGLRenderingContext} gl The webgl rendering context.
   * @param {Object.<string, array|typedarray>} arrays The arrays
   * @param {Object.<string, string>} [opt_mapping] mapping from attribute name to array name.
   *     if not specified defaults to "a_name" -> "name".
   * @return {Object.<string, module:webgl-utils.AttribInfo>} the attribs
   * @memberOf module:webgl-utils
   */


  function createAttribsFromArrays(gl, arrays, opt_mapping) {
    var mapping = opt_mapping || createMapping(arrays);
    var attribs = {};
    Object.keys(mapping).forEach(function (attribName) {
      var bufferName = mapping[attribName];
      var array = makeTypedArray(arrays[bufferName], bufferName);
      attribs[attribName] = {
        buffer: createBufferFromTypedArray(gl, array),
        numComponents: array.numComponents || guessNumComponentsFromName(bufferName),
        type: getGLTypeForTypedArray(gl, array),
        normalize: getNormalizationForTypedArray(array)
      };
    });
    return attribs;
  }
  /**
   * tries to get the number of elements from a set of arrays.
   */


  function getNumElementsFromNonIndexedArrays(arrays) {
    var key = Object.keys(arrays)[0];
    var array = arrays[key];

    if (isArrayBuffer(array)) {
      return array.numElements;
    } else {
      return array.data.length / array.numComponents;
    }
  }
  /**
   * @typedef {Object} BufferInfo
   * @property {number} numElements The number of elements to pass to `gl.drawArrays` or `gl.drawElements`.
   * @property {WebGLBuffer} [indices] The indices `ELEMENT_ARRAY_BUFFER` if any indices exist.
   * @property {Object.<string, module:webgl-utils.AttribInfo>} attribs The attribs approriate to call `setAttributes`
   * @memberOf module:webgl-utils
   */

  /**
   * Creates a BufferInfo from an object of arrays.
   *
   * This can be passed to {@link module:webgl-utils.setBuffersAndAttributes} and to
   * {@link module:webgl-utils:drawBufferInfo}.
   *
   * Given an object like
   *
   *     var arrays = {
   *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
   *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
   *       normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
   *       indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
   *     };
   *
   *  Creates an BufferInfo like this
   *
   *     bufferInfo = {
   *       numElements: 4,        // or whatever the number of elements is
   *       indices: WebGLBuffer,  // this property will not exist if there are no indices
   *       attribs: {
   *         a_position: { buffer: WebGLBuffer, numComponents: 3, },
   *         a_normal:   { buffer: WebGLBuffer, numComponents: 3, },
   *         a_texcoord: { buffer: WebGLBuffer, numComponents: 2, },
   *       },
   *     };
   *
   *  The properties of arrays can be JavaScript arrays in which case the number of components
   *  will be guessed.
   *
   *     var arrays = {
   *        position: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0],
   *        texcoord: [0, 0, 0, 1, 1, 0, 1, 1],
   *        normal:   [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
   *        indices:  [0, 1, 2, 1, 2, 3],
   *     };
   *
   *  They can also by TypedArrays
   *
   *     var arrays = {
   *        position: new Float32Array([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]),
   *        texcoord: new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
   *        normal:   new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
   *        indices:  new Uint16Array([0, 1, 2, 1, 2, 3]),
   *     };
   *
   *  Or augmentedTypedArrays
   *
   *     var positions = createAugmentedTypedArray(3, 4);
   *     var texcoords = createAugmentedTypedArray(2, 4);
   *     var normals   = createAugmentedTypedArray(3, 4);
   *     var indices   = createAugmentedTypedArray(3, 2, Uint16Array);
   *
   *     positions.push([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]);
   *     texcoords.push([0, 0, 0, 1, 1, 0, 1, 1]);
   *     normals.push([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
   *     indices.push([0, 1, 2, 1, 2, 3]);
   *
   *     var arrays = {
   *        position: positions,
   *        texcoord: texcoords,
   *        normal:   normals,
   *        indices:  indices,
   *     };
   *
   * For the last example it is equivalent to
   *
   *     var bufferInfo = {
   *       attribs: {
   *         a_position: { numComponents: 3, buffer: gl.createBuffer(), },
   *         a_texcoods: { numComponents: 2, buffer: gl.createBuffer(), },
   *         a_normals: { numComponents: 3, buffer: gl.createBuffer(), },
   *       },
   *       indices: gl.createBuffer(),
   *       numElements: 6,
   *     };
   *
   *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_position.buffer);
   *     gl.bufferData(gl.ARRAY_BUFFER, arrays.position, gl.STATIC_DRAW);
   *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_texcoord.buffer);
   *     gl.bufferData(gl.ARRAY_BUFFER, arrays.texcoord, gl.STATIC_DRAW);
   *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_normal.buffer);
   *     gl.bufferData(gl.ARRAY_BUFFER, arrays.normal, gl.STATIC_DRAW);
   *     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferInfo.indices);
   *     gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, arrays.indices, gl.STATIC_DRAW);
   *
   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
   * @param {Object.<string, array|object|typedarray>} arrays Your data
   * @param {Object.<string, string>} [opt_mapping] an optional mapping of attribute to array name.
   *    If not passed in it's assumed the array names will be mapped to an attibute
   *    of the same name with "a_" prefixed to it. An other words.
   *
   *        var arrays = {
   *           position: ...,
   *           texcoord: ...,
   *           normal:   ...,
   *           indices:  ...,
   *        };
   *
   *        bufferInfo = createBufferInfoFromArrays(gl, arrays);
   *
   *    Is the same as
   *
   *        var arrays = {
   *           position: ...,
   *           texcoord: ...,
   *           normal:   ...,
   *           indices:  ...,
   *        };
   *
   *        var mapping = {
   *          a_position: "position",
   *          a_texcoord: "texcoord",
   *          a_normal:   "normal",
   *        };
   *
   *        bufferInfo = createBufferInfoFromArrays(gl, arrays, mapping);
   *
   * @return {module:webgl-utils.BufferInfo} A BufferInfo
   * @memberOf module:webgl-utils
   */


  function createBufferInfoFromArrays(gl, arrays, opt_mapping) {
    var bufferInfo = {
      attribs: createAttribsFromArrays(gl, arrays, opt_mapping)
    };
    var indices = arrays.indices;

    if (indices) {
      indices = makeTypedArray(indices, "indices");
      bufferInfo.indices = createBufferFromTypedArray(gl, indices, gl.ELEMENT_ARRAY_BUFFER);
      bufferInfo.numElements = indices.length;
    } else {
      bufferInfo.numElements = getNumElementsFromNonIndexedArrays(arrays);
    }

    return bufferInfo;
  }
  /**
   * Creates buffers from typed arrays
   *
   * Given something like this
   *
   *     var arrays = {
   *        positions: [1, 2, 3],
   *        normals: [0, 0, 1],
   *     }
   *
   * returns something like
   *
   *     buffers = {
   *       positions: WebGLBuffer,
   *       normals: WebGLBuffer,
   *     }
   *
   * If the buffer is named 'indices' it will be made an ELEMENT_ARRAY_BUFFER.
   *
   * @param {WebGLRenderingContext) gl A WebGLRenderingContext.
   * @param {Object<string, array|typedarray>} arrays
   * @return {Object<string, WebGLBuffer>} returns an object with one WebGLBuffer per array
   * @memberOf module:webgl-utils
   */


  function createBuffersFromArrays(gl, arrays) {
    var buffers = {};
    Object.keys(arrays).forEach(function (key) {
      var type = key === "indices" ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;
      var array = makeTypedArray(arrays[key], name);
      buffers[key] = createBufferFromTypedArray(gl, array, type);
    }); // hrm

    if (arrays.indices) {
      buffers.numElements = arrays.indices.length;
    } else if (arrays.position) {
      buffers.numElements = arrays.position.length / 3;
    }

    return buffers;
  }
  /**
   * Calls `gl.drawElements` or `gl.drawArrays`, whichever is appropriate
   *
   * normally you'd call `gl.drawElements` or `gl.drawArrays` yourself
   * but calling this means if you switch from indexed data to non-indexed
   * data you don't have to remember to update your draw call.
   *
   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
   * @param {enum} type eg (gl.TRIANGLES, gl.LINES, gl.POINTS, gl.TRIANGLE_STRIP, ...)
   * @param {module:webgl-utils.BufferInfo} bufferInfo as returned from createBufferInfoFromArrays
   * @param {number} [count] An optional count. Defaults to bufferInfo.numElements
   * @param {number} [offset] An optional offset. Defaults to 0.
   * @memberOf module:webgl-utils
   */


  function drawBufferInfo(gl, type, bufferInfo, count, offset) {
    var indices = bufferInfo.indices;
    var numElements = count === undefined ? bufferInfo.numElements : count;
    offset = offset === undefined ? offset : 0;

    if (indices) {
      gl.drawElements(type, numElements, gl.UNSIGNED_SHORT, offset);
    } else {
      gl.drawArrays(type, offset, numElements);
    }
  }
  /**
   * @typedef {Object} DrawObject
   * @property {module:webgl-utils.ProgramInfo} programInfo A ProgramInfo as returned from createProgramInfo
   * @property {module:webgl-utils.BufferInfo} bufferInfo A BufferInfo as returned from createBufferInfoFromArrays
   * @property {Object<string, ?>} uniforms The values for the uniforms
   * @memberOf module:webgl-utils
   */

  /**
   * Draws a list of objects
   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
   * @param {DrawObject[]} objectsToDraw an array of objects to draw.
   * @memberOf module:webgl-utils
   */


  function drawObjectList(gl, objectsToDraw) {
    var lastUsedProgramInfo = null;
    var lastUsedBufferInfo = null;
    objectsToDraw.forEach(function (object) {
      var programInfo = object.programInfo;
      var bufferInfo = object.bufferInfo;
      var bindBuffers = false;

      if (programInfo !== lastUsedProgramInfo) {
        lastUsedProgramInfo = programInfo;
        gl.useProgram(programInfo.program);
        bindBuffers = true;
      } // Setup all the needed attributes.


      if (bindBuffers || bufferInfo !== lastUsedBufferInfo) {
        lastUsedBufferInfo = bufferInfo;
        setBuffersAndAttributes(gl, programInfo.attribSetters, bufferInfo);
      } // Set the uniforms.


      setUniforms(programInfo.uniformSetters, object.uniforms); // Draw

      drawBufferInfo(gl, gl.TRIANGLES, bufferInfo);
    });
  }

  return {
    createAugmentedTypedArray: createAugmentedTypedArray,
    createAttribsFromArrays: createAttribsFromArrays,
    createBuffersFromArrays: createBuffersFromArrays,
    createBufferInfoFromArrays: createBufferInfoFromArrays,
    createAttributeSetters: createAttributeSetters,
    createProgram: createProgram,
    createProgramFromScripts: createProgramFromScripts,
    createProgramFromSources: createProgramFromSources,
    createProgramInfo: createProgramInfo,
    createUniformSetters: createUniformSetters,
    drawBufferInfo: drawBufferInfo,
    drawObjectList: drawObjectList,
    getWebGLContext: getWebGLContext,
    updateCSSIfInIFrame: updateCSSIfInIFrame,
    getExtensionWithKnownPrefixes: getExtensionWithKnownPrefixes,
    resizeCanvasToDisplaySize: resizeCanvasToDisplaySize,
    setAttributes: setAttributes,
    setBuffersAndAttributes: setBuffersAndAttributes,
    setUniforms: setUniforms,
    setupWebGL: setupWebGL
  };
}();

/* harmony default export */ var webgl_utils = (WebGlUtils);
// EXTERNAL MODULE: external "events"
var external_events_ = __webpack_require__(41);

// CONCATENATED MODULE: ./dev/agora/Renderer/GlRenderer/index.js



const createProgramFromSources = webgl_utils.createProgramFromSources;

const AgoraRender = function () {
  let gl;
  let program;
  let positionLocation;
  let texCoordLocation;
  let yTexture;
  let uTexture;
  let vTexture;
  let texCoordBuffer;
  let surfaceBuffer;
  const that = {
    view: undefined,
    mirrorView: false,
    container: undefined,
    canvas: undefined,
    renderImageCount: 0,
    initWidth: 0,
    initHeight: 0,
    initRotation: 0,
    canvasUpdated: false,
    clientWidth: 0,
    clientHeight: 0,
    // 0 - cover, 1 - fit
    contentMode: 0,
    event: new external_events_["EventEmitter"](),
    firstFrameRender: false
  };

  that.setContentMode = function (mode) {
    that.contentMode = mode;
  };

  that.bind = function (view) {
    initCanvas(view, that.mirrorView, view.clientWidth, view.clientHeight, that.initRotation, console.warn);
  };

  that.unbind = function () {
    try {
      gl.getExtension('WEBGL_lose_context').loseContext();
    } catch (err) {
      console.warn(err);
    }

    program = undefined;
    positionLocation = undefined;
    texCoordLocation = undefined;
    deleteTexture(yTexture);
    deleteTexture(uTexture);
    deleteTexture(vTexture);
    yTexture = undefined;
    uTexture = undefined;
    vTexture = undefined;
    deleteBuffer(texCoordBuffer);
    deleteBuffer(surfaceBuffer);
    texCoordBuffer = undefined;
    surfaceBuffer = undefined;
    gl = undefined;

    try {
      that.container && that.container.removeChild(that.canvas);
      that.view && that.view.removeChild(that.container);
    } catch (e) {
      console.warn(e);
    }

    that.canvas = undefined;
    that.container = undefined;
    that.view = undefined;
    that.mirrorView = false;
  };

  that.renderImage = function (image) {
    // Rotation, width, height, left, top, right, bottom, yplane, uplane, vplane
    if (!gl) {
      console.log('!gl');
      return;
    }

    if (image.width != that.initWidth || image.height != that.initHeight || image.rotation != that.initRotation || image.mirror != that.mirrorView) {
      const view = that.view;
      that.unbind(); // Console.log('init canvas ' + image.width + "*" + image.height + " rotation " + image.rotation);

      initCanvas(view, image.mirror, image.width, image.height, image.rotation, e => {
        console.error(`init canvas ${image.width}*${image.height} rotation ${image.rotation} failed. ${e}`);
      });
    } // Console.log(image.width, "*", image.height, "planes "
    //    , " y ", image.yplane[0], image.yplane[image.yplane.length - 1]
    //    , " u ", image.uplane[0], image.uplane[image.uplane.length - 1]
    //    , " v ", image.vplane[0], image.vplane[image.vplane.length - 1]
    // );


    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    const xWidth = image.width + image.left + image.right;
    const xHeight = image.height + image.top + image.bottom;
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([image.left / xWidth, image.bottom / xHeight, 1 - image.right / xWidth, image.bottom / xHeight, image.left / xWidth, 1 - image.top / xHeight, image.left / xWidth, 1 - image.top / xHeight, 1 - image.right / xWidth, image.bottom / xHeight, 1 - image.right / xWidth, 1 - image.top / xHeight]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(texCoordLocation);
    gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
    uploadYuv(xWidth, xHeight, image.yplane, image.uplane, image.vplane);
    updateCanvas(image.rotation, image.width, image.height);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    that.renderImageCount += 1;

    if (!that.firstFrameRender) {
      that.firstFrameRender = true;
      that.event.emit('ready');
    }
  };
  /**
  * draw image with params
  * @private
  * @param {*} render
  * @param {*} header
  * @param {*} yplanedata
  * @param {*} uplanedata
  * @param {*} vplanedata
  */


  that.drawFrame = function ({
    header,
    yUint8Array,
    uUint8Array,
    vUint8Array
  }) {
    var headerLength = 20;
    var dv = new DataView(header);
    var format = dv.getUint8(0);
    var mirror = dv.getUint8(1);
    var width = dv.getUint16(2);
    var height = dv.getUint16(4);
    var left = dv.getUint16(6);
    var top = dv.getUint16(8);
    var right = dv.getUint16(10);
    var bottom = dv.getUint16(12);
    var rotation = dv.getUint16(14);
    var ts = dv.getUint32(16);
    var xWidth = width + left + right;
    var xHeight = height + top + bottom;
    var yLength = xWidth * xHeight;
    var yBegin = headerLength;
    var yEnd = yBegin + yLength;
    var uLength = yLength / 4;
    var uBegin = yEnd;
    var uEnd = uBegin + uLength;
    var vLength = yLength / 4;
    var vBegin = uEnd;
    var vEnd = vBegin + vLength;
    that.renderImage({
      mirror: mirror,
      width,
      height,
      left,
      top,
      right,
      bottom,
      rotation: rotation,
      yplane: new Uint8Array(yUint8Array),
      uplane: new Uint8Array(uUint8Array),
      vplane: new Uint8Array(vUint8Array)
    });
    var now32 = (Date.now() & 0xffffffff) >>> 0;
    var latency = now32 - ts;
  };

  function uploadYuv(width, height, yplane, uplane, vplane) {
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, yTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width, height, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, yplane);
    var e = gl.getError();

    if (e != gl.NO_ERROR) {
      console.log('upload y plane ', width, height, yplane.byteLength, ' error', e);
    }

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, uTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width / 2, height / 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, uplane);
    var e = gl.getError();

    if (e != gl.NO_ERROR) {
      console.log('upload u plane ', width, height, uplane.byteLength, '  error', e);
    }

    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, vTexture);
    '';
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width / 2, height / 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, vplane);
    var e = gl.getError();

    if (e != gl.NO_ERROR) {
      console.log('upload v plane ', width, height, vplane.byteLength, '  error', e);
    }
  }

  function deleteBuffer(buffer) {
    if (buffer && gl) {
      gl.deleteBuffer(buffer);
    }
  }

  function deleteTexture(texture) {
    if (texture && gl) {
      gl.deleteTexture(texture);
    }
  }

  const vertexShaderSource = 'attribute vec2 a_position;' + 'attribute vec2 a_texCoord;' + 'uniform vec2 u_resolution;' + 'varying vec2 v_texCoord;' + 'void main() {' + 'vec2 zeroToOne = a_position / u_resolution;' + '   vec2 zeroToTwo = zeroToOne * 2.0;' + '   vec2 clipSpace = zeroToTwo - 1.0;' + '   gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);' + 'v_texCoord = a_texCoord;' + '}';
  const yuvShaderSource = 'precision mediump float;' + 'uniform sampler2D Ytex;' + 'uniform sampler2D Utex,Vtex;' + 'varying vec2 v_texCoord;' + 'void main(void) {' + '  float nx,ny,r,g,b,y,u,v;' + '  mediump vec4 txl,ux,vx;' + '  nx=v_texCoord[0];' + '  ny=v_texCoord[1];' + '  y=texture2D(Ytex,vec2(nx,ny)).r;' + '  u=texture2D(Utex,vec2(nx,ny)).r;' + '  v=texture2D(Vtex,vec2(nx,ny)).r;' + '  y=1.1643*(y-0.0625);' + '  u=u-0.5;' + '  v=v-0.5;' + '  r=y+1.5958*v;' + '  g=y-0.39173*u-0.81290*v;' + '  b=y+2.017*u;' + '  gl_FragColor=vec4(r,g,b,1.0);' + '}';

  function initCanvas(view, mirror, width, height, rotation, onFailure) {
    that.clientWidth = view.clientWidth;
    that.clientHeight = view.clientHeight;
    that.view = view;
    that.mirrorView = mirror;
    that.canvasUpdated = false;
    that.container = document.createElement('div');
    that.container.style.width = '100%';
    that.container.style.height = '100%';
    that.container.style.display = 'flex';
    that.container.style.justifyContent = 'center';
    that.container.style.alignItems = 'center';
    that.view.appendChild(that.container);
    that.canvas = document.createElement('canvas');

    if (rotation == 0 || rotation == 180) {
      that.canvas.width = width;
      that.canvas.height = height;
    } else {
      that.canvas.width = height;
      that.canvas.height = width;
    }

    that.initWidth = width;
    that.initHeight = height;
    that.initRotation = rotation;

    if (that.mirrorView) {
      that.canvas.style.transform = 'rotateY(180deg)';
    }

    that.container.appendChild(that.canvas);

    try {
      // Try to grab the standard context. If it fails, fallback to experimental.
      gl = that.canvas.getContext('webgl', {
        preserveDrawingBuffer: true
      }) || that.canvas.getContext('experimental-webgl');
    } catch (e) {
      console.log(e);
    }

    if (!gl) {
      gl = undefined;
      onFailure({
        error: 'Browser not support! No WebGL detected.'
      });
      return;
    } // Set clear color to black, fully opaque


    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Enable depth testing

    gl.enable(gl.DEPTH_TEST); // Near things obscure far things

    gl.depthFunc(gl.LEQUAL); // Clear the color as well as the depth buffer.

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // Setup GLSL program

    program = createProgramFromSources(gl, [vertexShaderSource, yuvShaderSource]);
    gl.useProgram(program);
    initTextures();
  }

  function initTextures() {
    positionLocation = gl.getAttribLocation(program, 'a_position');
    texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');
    surfaceBuffer = gl.createBuffer();
    texCoordBuffer = gl.createBuffer(); // Create a texture.

    gl.activeTexture(gl.TEXTURE0);
    yTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, yTexture); // Set the parameters so we can render any size image.

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.activeTexture(gl.TEXTURE1);
    uTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, uTexture); // Set the parameters so we can render any size image.

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.activeTexture(gl.TEXTURE2);
    vTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, vTexture); // Set the parameters so we can render any size image.

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    const y = gl.getUniformLocation(program, 'Ytex');
    gl.uniform1i(y, 0);
    /* Bind Ytex to texture unit 0 */

    const u = gl.getUniformLocation(program, 'Utex');
    gl.uniform1i(u, 1);
    /* Bind Utex to texture unit 1 */

    const v = gl.getUniformLocation(program, 'Vtex');
    gl.uniform1i(v, 2);
    /* Bind Vtex to texture unit 2 */
  }

  function updateCanvas(rotation, width, height) {
    if (that.canvasUpdated) {
      return;
    }

    that.clientWidth = that.view.clientWidth;
    that.clientHeight = that.view.clientHeight;

    try {
      if (that.contentMode === 0) {
        // Cover
        if (rotation === 0 || rotation === 180) {
          if (that.clientWidth / that.clientHeight > width / height) {
            that.canvas.style.zoom = that.clientWidth / width;
          } else {
            that.canvas.style.zoom = that.clientHeight / height;
          }
        } else {
          // 90, 270
          if (that.clientHeight / that.clientWidth > width / height) {
            that.canvas.style.zoom = that.clientHeight / height;
          } else {
            that.canvas.style.zoom = that.clientWidth / width;
          }
        }
      } else if (rotation === 0 || rotation === 180) {
        if (that.clientWidth / that.clientHeight > width / height) {
          that.canvas.style.zoom = that.clientHeight / height;
        } else {
          that.canvas.style.zoom = that.clientWidth / width;
        }
      } else {
        // 90, 270
        if (that.clientHeight / that.clientWidth > width / height) {
          that.canvas.style.zoom = that.clientWidth / width;
        } else {
          that.canvas.style.zoom = that.clientHeight / height;
        }
      }
    } catch (e) {
      console.log(`updateCanvas 00001 gone ${that.canvas}`);
      console.log(that);
      console.error(e);
      return;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, surfaceBuffer);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0); // Console.log('image rotation from ', that.imageRotation, ' to ', rotation);
    // 4 vertex, 1(x1,y1), 2(x2,y1), 3(x2,y2), 4(x1,y2)
    //  0: 1,2,4/4,2,3
    // 90: 2,3,1/1,3,4
    // 180: 3,4,2/2,4,1
    // 270: 4,1,3/3,1,2

    const p1 = {
      x: 0,
      y: 0
    };
    const p2 = {
      x: width,
      y: 0
    };
    const p3 = {
      x: width,
      y: height
    };
    const p4 = {
      x: 0,
      y: height
    };
    let pp1 = p1,
        pp2 = p2,
        pp3 = p3,
        pp4 = p4;

    switch (rotation) {
      case 0:
        break;

      case 90:
        pp1 = p2;
        pp2 = p3;
        pp3 = p4;
        pp4 = p1;
        break;

      case 180:
        pp1 = p3;
        pp2 = p4;
        pp3 = p1;
        pp4 = p2;
        break;

      case 270:
        pp1 = p4;
        pp2 = p1;
        pp3 = p2;
        pp4 = p3;
        break;

      default:
    }

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([pp1.x, pp1.y, pp2.x, pp2.y, pp4.x, pp4.y, pp4.x, pp4.y, pp2.x, pp2.y, pp3.x, pp3.y]), gl.STATIC_DRAW);
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    gl.uniform2f(resolutionLocation, width, height); // That.canvasUpdated = true;
  }

  return that;
};

AgoraRender.prototype.constructor = function () {
  return new AgoraRender();
};

/* harmony default export */ var GlRenderer = __webpack_exports__["default"] = (AgoraRender);

/***/ })
/******/ ]);