import { SHOW_ALERT, SHOW_CONFIRM, HIDE_DIALOG } from '../constants/ActionTypes'

const dialog = (state = {}, action) => {
	switch (action.type) {
		case SHOW_ALERT:
		return {
			...state,
			confirm: null,
			alert: action.configure,
			hide : false
		}
		case SHOW_CONFIRM:
		return {
			...state,
			alert  : null,
			confirm: action.configure,
			hide   : false
		}
		case HIDE_DIALOG:
		return {
			...state,
			hide: true
		}
		default:
		return state
	}
}

export default dialog