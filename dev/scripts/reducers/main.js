import { ROOM_LIST, CALENDAR_DATA, ROOM_INFO, START_COURSE, END_COURSE, COURSE_END, ENTER_TESTER, EXIT_TESTER, ENTER_MY_COURSES,EXIT_MY_COURSES, NET_STATUS_BAD, NET_STATUS_GOOD, COURSE_RECORDING } from '../constants/ActionTypes'

const main = (state = {}, action) => {
	switch (action.type) {
		case ROOM_LIST:
		return {
			...state,
			rooms: action.rooms
		}
		case ROOM_INFO:
		return {
			...state,
			room: action.data
		}
		case CALENDAR_DATA:
		return {
			...state,
			calendar: action.data
		}
		case START_COURSE:
		return {
			...state,
			courseStarted: true
		}
		case COURSE_END:
		return {
			...state,
			courseStarted: false
		}
		case ENTER_TESTER:
		return {
			...state,
			courseStarted: false,
			enterTester: true,
			fromPage : action.page
		}
		case ENTER_MY_COURSES:
		return {
			...state,
			enterMyCourses: true,
		}
		case EXIT_MY_COURSES:
		return {
			...state,
			enterMyCourses: false,
		}
		case EXIT_TESTER:
		let page = state.fromPage
		return {
			...state,
			enterTester: false,
			courseStarted : page == "course"
		}
		case NET_STATUS_BAD:
		return {
			...state,
			netStatus: 0
		}
		case NET_STATUS_GOOD:
		return {
			...state,
			netStatus: 1
		}
		case COURSE_RECORDING:
		return {
			...state,
			recording: action.status
		}
		default:
		return state
	}
}

export default main