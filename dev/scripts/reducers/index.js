import { combineReducers } from 'redux'
import dialog from './dialog'
import login from './login'
import main from './main'

export default combineReducers({
	dialog, login, main
})