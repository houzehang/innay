import React from 'react';
import {
	HashRouter as Router,
	Route, Redirect,
	Link
} from 'react-router-dom'
import createHistory from "history/createBrowserHistory"
import { connect } from 'react-redux'
import Login from './login.page'
import Main from './main.page'
import Dialog from './dialog'
import { alert, confirm } from '../actions'
const history = createHistory()

class Entry extends React.Component {
	componentDidMount() {

	}
	
	render() {
		const { dialog, account } = this.props
		let DialogComponent = ()=>{
			if (!dialog.hide) {
				if (dialog.alert) {
					const configure = dialog.alert
					return <Dialog configure={configure} type="alert" open={!dialog.hide}/>
				} else if (dialog.confirm) {
					const configure = dialog.confirm
					return <Dialog configure={configure} type="confirm" open={!dialog.hide}/>
				}
			}
			return ""
		}
		return <Router>
			<div className="full-h">
				<Route exact path="/" render={
					()=>{
						if (!account) {
							return <Login/>
						} else {
							return <Main/>
						}
					}
				}></Route>
				<DialogComponent/>
			</div>
		</Router>
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		account : state.login.account,
		dialog  : state.dialog
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Entry)