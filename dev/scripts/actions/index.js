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

export const hideLoading = (message) => dispatch => {
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