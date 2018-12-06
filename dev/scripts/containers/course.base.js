import React from 'react';
import { connect } from 'react-redux'
import StudentHead from '../components/student-head'
import HandsUp from '../components/handsup'
import { 
	onEndCourse, onRoomMoreInfo,
	onNewStream, onStreamLeave,
	onHandsupSwitch, onNewGift,
	onHandsupRank, onUserMuted, onMuteAllSwitch, onSilentSwitch,
	onDancing,
	onBeginCourse,
	onPauseCourse,
	onResumeCourse,
	onCourseTick,
	confirm, alert,
	onEnterTester,
	onMagicSwitch,
	showLoading,hideLoading,onRankSwitch,
	onProgressUpdate,
	onUpdateGift, onProgressReset, onUserAddRoom
} from '../actions'
const net 			= require("../network")
const Room 			= require("../AgoraStream")
const Signalize		= require('../AgoraSignal')
const Session   	= require('../session')
const Const   		= require('../../const')
const {ipcRenderer} 	= $require('electron');
const context 		= require('../context')
import * as types from '../constants/ActionTypes'

class Course extends React.Component {

}

module.exports = Course