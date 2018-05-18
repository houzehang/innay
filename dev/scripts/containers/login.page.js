import React from 'react';
import Login from '../components/login'
import { connect } from 'react-redux'
import { 
	loginSuccess, doLogin, 
	showLoading, hideLoading,
	alert
} from '../actions'

const mapDispatchToProps = dispatch => ({
	loginSuccess : (account) => dispatch(loginSuccess(account)),
	showLoading  : (message) => dispatch(showLoading(message)),
	hideLoading  : () => dispatch(hideLoading()),
	alert: (configure) => {
		dispatch(alert(configure))
	}
})
  
export default connect(
	null,
	mapDispatchToProps
)(Login)