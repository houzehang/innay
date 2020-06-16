import React from 'react';
import {
	HashRouter as Router,
	Route
} from 'react-router-dom'
import { connect } from 'react-redux'
import LobbyPage from './lobby.page'
import Dialog from './dialog'
import { alert, confirm, onNetStatusBad, onNetStatusGood } from '../actions'
import context from "../context"
import electron from 'electron'
const remote = electron.remote
class Entry extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		const { dialog } = this.props
		return <Router>
			<div className="full-h" onContextMenu={(event)=>{
				return false;
			}}>
				<div className='slave' onDoubleClick={()=>{
					var window = remote.getCurrentWindow();
					window.webContents.openDevTools();
				}}></div>
				<div className='slave-l' onDoubleClick={()=>{

				}}></div>
				<Route exact path="/" render={
					()=>{
                        return <LobbyPage/>
					}
				}></Route>
				{dialog.showing ? <Dialog data={dialog}/> : ""}
			</div>
		</Router>
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		account 	: state.login.account,
		dialog  	: state.dialog
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		confirm : (data) 	=> dispatch(confirm(data)),
		onNetStatusBad: () 	=> dispatch(onNetStatusBad()),
		onNetStatusGood: () => dispatch(onNetStatusGood())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Entry)