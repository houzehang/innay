import { ROOM_LIST, CALENDAR_DATA, ROOM_INFO } from '../constants/ActionTypes'

const main = (state = {}, action) => {
	switch (action.type) {
		case ROOM_LIST:
		return {
			...state,
			rooms: action.rooms
		}
		break
		case ROOM_INFO:
		return {
			...state,
			room: action.data
		}
		break
		case CALENDAR_DATA:
		return {
			...state,
			calendar: action.data
		}
		break
		default:
		return state
	}
}

export default main