const storage = require("../Storage")
const loading = require("../loading")
import * as types from '../constants/ActionTypes'

export const alert = (configure)=>({
	type: types.SHOW_ALERT,
	configure
})

export const confirm = (configure)=>({
	type: types.SHOW_CONFIRM,
	configure
})

export const hide = ()=>({
	type: types.HIDE_DIALOG
})

export const showLoading = (message) => dispatch => {
	loading.show(message)
}

export const hideLoading = () => dispatch => {
	loading.hide()
}

export const restoreUserInfo = () => dispatch => {
	let userinfo = storage.get("USER_INFO")
	if (userinfo) {
		dispatch(loginSuccess(userinfo))
	}
}

export const loginSuccess = (account) => dispatch => {
	storage.store("USER_INFO", account)
	dispatch({
		type: types.LOGIN_SUCCESS,
		account
	})
}

export const onRoomList = (rooms) => ({
	type: types.ROOM_LIST,
	rooms
})

export const onCalendarData = (data) => ({
	type: types.CALENDAR_DATA,
	data
})

export const onCourseData = (data) => ({
	type: types.COURSE_DATA,
	data
})

export const onRoomInfo = (data) => ({
	type: types.ROOM_INFO,
	data
})

export const onLogout = () => dispatch => {
	storage.clear()
	dispatch({
		type: types.LOGOUT
	})
}

export const onStartCourse = ()=>({
	type: types.START_COURSE
})

export const onRoomGifts = (data) => ({
	type: types.ROOM_GIFT,
	data
})

export const onRoomMoreInfo = (data) => ({
	type: types.ROOM_MORE_INFO,
	data
})

export const onNewGift = (data) => ({
	type: types.NEW_GIFT,
	data
})

export const onUserMuted = (id, mute=true, recovering=false) => ({
	type: types.USER_MUTED,
	id, mute, recovering
})

export const onNewStream = (stream) => ({
	type: types.NEW_STREAM,
	stream
})

export const onStreamLeave = (stream) => ({
	type: types.STREAM_LEAVE,
	stream
})

export const onNewChannelUser = (id) => ({
	type: types.CHANNEL_NEW_USER,
	id
})

export const onChannelUserLeave = (id) => ({
	type: types.CHANNEL_USER_LEAVE,
	id
})

export const onHandsupSwitch = (status) => ({
	type: types.HANDSUP_SWITCH,
	status
})

export const onMagicSwitch = (status) => ({
	type: types.MAGIC_SWITCH,
	status
})

export const onMuteAllSwitch = (status) => ({
	type: types.MUTEALL_SWITCH,
	status
})

export const onGiftSwitch = (status) => ({
	type: types.GIFT_SWITCH,
	status
})

export const onRankSwitch = (status) => ({
	type: types.RANK_SWITCH,
	status
})

export const onHandsupRank = (id, rank) => ({
	type: types.HANDSUP_RANK,
	id, rank
})

export const onDancing = (id, status) => ({
	type: types.DANCING,
	id, status
})

export const onBeginCourse = ()=>({
	type: types.COURSE_BEGIN
})

export const onEndCourse = ()=>({
	type: types.COURSE_END
})

export const onPauseCourse = ()=>({
	type: types.COURSE_PAUSE
})

export const onResumeCourse = ()=>({
	type: types.COURSE_RESUME
})

export const onCourseTick = ()=>({
	type: types.COURSE_TICK
})

export const onEnterTester = ()=>({
	type: types.ENTER_TESTER
})

export const onExitTester = ()=>({
	type: types.EXIT_TESTER
})

export const onUpdateGift = (data)=>({
	type: types.GIFT_UPDATE,
	data
})

export const onProgressUpdate = (id, percent)=>({
	type: types.PROGRESS_UPDATE,
	percent, id
})

export const onProgressReset = ()=>({
	type: types.PROGRESS_RESET
})