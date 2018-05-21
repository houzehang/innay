import { LOGIN_SUCCESS, LOGOUT } from '../constants/ActionTypes'

const login = (state = {}, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
		return {
			...state,
			account: action.account
		}
		break
		case LOGOUT:
		return {
			...state,
			account: null
		}
		break
		default:
		return state
	}
}

export default login