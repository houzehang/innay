import { SHOW_ALERT, SHOW_CONFIRM, HIDE_DIALOG } from '../constants/ActionTypes'

const dialog = (state = {}, action) => {
	switch (action.type) {
		case SHOW_ALERT:
		return {
			...state,
			alert: action.configure,
			hide : false
		}
		break
		case SHOW_CONFIRM:
		return {
			...state,
			confirm: action.configure,
			hide   : false
		}
		break
		case HIDE_DIALOG:
		return {
			...state,
			hide: true
		}
		break
		default:
		return state
	}
}

export default dialog