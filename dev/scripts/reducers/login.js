import { LOGIN_SUCCESS } from '../constants/ActionTypes'

const login = (state = {}, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
		return {
			...state,
			account: action.account
		}
		break
		default:
		return state
	}
}

export default login