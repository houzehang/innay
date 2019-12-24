import { SHOW_TOAST, HIDE_DIALOG } from '../constants/ActionTypes'

const toast = (state = {
	type     : "toast",
	configure: {
		content : ""
	},
}, action) => {
	switch (action.type) {
		case SHOW_TOAST:
		return {
			...state,
			type     : "toast",
			configure: action.configure,
			showing  : true
		}
		case HIDE_DIALOG:
		return {
			...state,
			showing  : false
		}
		default:
		return state
	}
}

export default toast