import { ROOM_LIST, CALENDAR_DATA, ROOM_INFO, START_COURSE, END_COURSE } from '../constants/ActionTypes'

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
		case START_COURSE:
		return {
			...state,
			courseStarted: true
		}
		break
		case END_COURSE:
		return {
			...state,
			courseStarted: false
		}
		break
		default:
		return state
	}
}

export default main