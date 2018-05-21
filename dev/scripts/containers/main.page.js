import React from 'react';
import Main from '../components/main'
import { connect } from 'react-redux'
import { 
	onRoomList, onCalendarData, onRoomInfo,
	onLogout
} from '../actions'

const mapStateToProps = (state, ownProps) => {
	return {
		account : state.login.account,
		rooms 	: state.main.rooms,
		room 	: state.main.room,
		calendar: state.main.calendar
	}
}

const mapDispatchToProps = dispatch => ({
	onRoomList     : (rooms) => dispatch(onRoomList(rooms)),
	onRoomInfo	   : (data) => dispatch(onRoomInfo(data)),
	onCalendarData : (data) => dispatch(onCalendarData(data)),
	onLogout       : () => dispatch(onLogout())
})
  
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main)