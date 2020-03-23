import { combineReducers } from 'redux'
import dialog from './dialog'
import login from './login'
import main from './main'
import room from './room'
import toast from './toast'

export default combineReducers({
	dialog, login, main, room, toast
})
     