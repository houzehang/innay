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
/******/ 	return __webpack_require__(__webpack_require__.s = 118);
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
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 7 */,
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
/* 20 */,
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
/* 28 */,
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
/* 41 */,
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
/* 59 */,
/* 60 */,
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
/* 63 */,
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
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_9__);



var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

/**
 * 样式文件
 */
__webpack_require__(83);

__webpack_require__(84);

__webpack_require__(119);









const {
  ipcRenderer
} = __webpack_require__(6);

const Const = __webpack_require__(2);

const remote = __webpack_require__(6).remote;

const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_9___default.a];
const store = Object(redux__WEBPACK_IMPORTED_MODULE_7__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], Object(redux__WEBPACK_IMPORTED_MODULE_7__["applyMiddleware"])(...middleware));

var _ref =
/*#__PURE__*/
_jsx("div", {
  className: "logo"
});

class Version extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      version: "v-.-.-",
      message: "",
      progress: null
    };
  }

  componentDidMount() {
    let version = window.location.hash.substring(1);
    this.setState({
      version
    });
    ipcRenderer.on('message', (event, status, data) => {
      let message;

      if (status == Const.UPDATE.LASTEST) {
        message = "已是最新版本。";
      } else if (status == Const.UPDATE.AVAILABLE) {
        message = "发现新版本。";
      } else if (status == Const.UPDATE.CHECKING) {
        message = "正在检查新版本...";
      } else if (status == Const.UPDATE.ERROR) {
        message = "更新出错！";
      } else if (status == Const.UPDATE.DOWNLOADING) {
        message = "正在下载新版本...";
      } else if (status == Const.UPDATE.DOWNLOADED) {
        message = "下载完成，请等待安装...";
      }

      this.setState({
        message,
        progress: data
      });
    });
  }

  render() {
    return _jsx("div", {
      className: "page"
    }, void 0, _jsx("div", {
      className: "close-btn",
      onClick: () => {
        var window = remote.getCurrentWindow();
        window.close();
      }
    }), _ref, _jsx("div", {
      className: "tips"
    }, void 0, "\u5F53\u524D\u7248\u672C: ", this.state.version, ", ", this.state.message), this.state.progress ? _jsx("div", {
      className: "progress"
    }, void 0, _jsx("div", {
      className: "bar"
    }, void 0, _jsx("div", {
      className: "bar-i",
      style: {
        width: `${this.state.progress.percent}%`
      }
    })), _jsx("div", {
      className: "txt"
    }, void 0, this.state.progress.percent >> 0, "%")) : "");
  }

}

Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["render"])(_jsx(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
  store: store
}, void 0, _jsx(Version, {})), document.getElementById("app"));

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);