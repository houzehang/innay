import { ROOM_LIST, CALENDAR_DATA, ROOM_INFO, START_COURSE, END_COURSE, ROOM_GIFT, ROOM_MORE_INFO, GIFT_LIST, USER_MUTED, NEW_STREAM, STREAM_LEAVE, CHANNEL_NEW_USER, HANDSUP_SWITCH, GIFT_SWITCH, NEW_GIFT, HANDSUP_RANK, DANCING } from '../constants/ActionTypes'

const room = (state = {}, action) => {
	let streamId, teacher, switches, students, dancing
	switch (action.type) {
		case ROOM_INFO:
		let data = action.data
		let teacher = {
			child_name: data.teacher_name,
			avatarurl: data.teacher_avatar,
			id: data.teacher_id
		}
		return {
			...state,
			info: action.data,
			switches: {
				gift: true
			},
			dancing: [],
			teacher
		}
		break
		case ROOM_GIFT:
		return {
			...state,
			gifts: action.data
		}
		break
		case ROOM_MORE_INFO:
		let info = {...state.info}
		info.channel_token = action.data.channel_token
		return {
			...state,
			info,
			students: action.data.students
		}
		break
		case GIFT_LIST:
		return {
			...state,
			giftlist: action.data
		}
		break
		case NEW_GIFT:
		let gift = action.data
		students = [...state.students]
		for(let i=0,len=students.length;i<len;i++) {
			let item = students[i]
			if (item.id == gift.uid) {
				item.gift_total = gift.total
				if (item.gifts) {
					item.gifts.forEach((item)=>{
						if (item.id == gift.gift.id) {
							if (gift.single) {
								item.total = gift.single 
							} else {
								item.total++
							}
						}
					})
				}
			}
		}
		return {
			...state,
			students
		}
		break
		case USER_MUTED:
		students = [...state.students]
		if (students) {
			for(let i=0,len=students.length;i<len;i++) {
				let item = students[i]
				if (item.id == action.id) {
					item.unmuted = !action.mute
					if (item.unmuted && !action.recovering) {
						item.speak++
					}
				}
			}
		}
		return {
			...state,
			students
		}
		break
		case NEW_STREAM:
		streamId = action.stream.getId()
		teacher  = {...state.teacher}
		if (streamId == teacher.id) {
			teacher.stream = action.stream
			teacher.stream_inited = false
			return {
				...state,
				teacher
			}
		} else {
			students = [...state.students]
			for(let i=0,len=students.length;i<len;i++) {
				let item = students[i]
				if (item.id == action.stream.getId()) {
					item.stream = action.stream
					item.stream_inited = false
				}
			}
			return {
				...state,
				students
			}
		}
		break
		case STREAM_LEAVE:
		streamId = action.stream.getId()
		teacher  = {...state.teacher}
		if (streamId == teacher.id) {
			teacher.stream = null
			teacher.stream_inited = false
			return {
				...state,
				teacher
			}
		} else {
			students = [...state.students]
			for(let i=0,len=students.length;i<len;i++) {
				let item = students[i]
				if (item.id == streamId) {
					item.stream = null
					item.stream_inited = false
				}
			}
			return {
				...state,
				students
			}
		}
		break
		case HANDSUP_SWITCH:
		switches = {...state.switches}
		switches.handsup = action.status
		return {
			...state,
			switches
		}
		break
		case GIFT_SWITCH:
		switches = {...state.switches}
		switches.gift = action.status
		return {
			...state,
			switches
		}
		break
		case HANDSUP_RANK:
		students = [...state.students]
		if (students) {
			for(let i=0,len=students.length;i<len;i++) {
				let item = students[i]
				if (item.id == action.id) {
					item.rank = action.rank
					item.handsup++
					break
				}
			}
		}
		return {
			...state,
			students
		}
		break
		case DANCING:
		students = [...state.students]
		if (students) {
			for(let i=0,len=students.length;i<len;i++) {
				let item = students[i]
				if (item.id == action.id) {
					item.dancing = action.status
				} else {
					item.dancing = false
				}
			}
		}
		return {
			...state,
			students
		}
		break
		default:
		return state
	}
}

export default room