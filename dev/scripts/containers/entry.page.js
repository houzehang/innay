import React from 'react';
import {
	HashRouter as Router,
	Route, Redirect,
	Link
} from 'react-router-dom'
import createHistory from "history/createBrowserHistory"
import { connect } from 'react-redux'
import Login from './login.page'
import Dialog from './dialog'
import { alert, confirm } from '../actions'
const history = createHistory()

class Entry extends React.Component {
	render() {
		const { account, dialog } = this.props
		if (!account) {
			history.push("#/pages/login")
		} else {
			history.push("#")
		}
		let DialogComp = ()=>{
			if (!dialog.hide) {
				if (dialog.alert) {
					const configure = dialog.alert
					return <Dialog content={configure.content} type="alert" open={!dialog.hide} sure={()=>{
						if (configure.sure) {
							configure.sure()
						}
					}} cancel={()=>{
						if (configure.sure) {
							configure.sure()
						}
					}}/>
				} else if (dialog.confirm) {
					const configure = dialog.confirm
					return <Dialog content={configure.content} type="confirm" open={!dialog.hide} sure={()=>{
						if (configure.sure) {
							configure.sure()
						}
					}} cancel={()=>{
						if (configure.cancel) {
							configure.cancel()
						}
					}}/>
				}
			}
			return ""
		}
		return <Router>
			<div className="full-h">
				<Route path="/pages/login" component={Login}></Route>
				<Route exact path="/" render={
					()=> <div>
						<div>home</div><Link to='/pages/login'>login</Link>
					</div>
				}></Route>
				<DialogComp/>
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