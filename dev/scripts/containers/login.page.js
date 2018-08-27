import React from 'react';
import { connect } from 'react-redux'
import { 
	loginSuccess, doLogin, 
	showLoading, hideLoading,
	alert
} from '../actions'
const net = require("../network")
const context = require("../context")

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {  
			mobile: "", password: ""
		}
	}

	handleChange(name, event) {
		let value = event.target.value
		this.setState({ [name]: value })
	}

	onLogin() {
		let mobile 		= this.state.mobile
		let password 	= this.state.password
		if (!mobile || !password) {
			this.props.alert({
				content: "请输入手机号或密码！"
			})
			return
		}
		this.props.showLoading("正在登录...")
		net.login({
			mobile, password
		}).then((res)=>{
			net.token 		= res.token
			net.sigtoken 	= res.signaling_token
			context.user 	= res.user
			this.props.hideLoading()
			this.props.loginSuccess(res.user)
		},()=>{
			this.props.hideLoading()
		}).done()
	}

	render() {
		return (
			<div className="full-h">
				<div className="page login-page">
					<div className="login-box">
						<div className="title">登录</div>
						<div className="input-control">
							<div className="input-box">
								<input type="number" onChange={(event)=>{
									this.handleChange("mobile", event)
								}} name="mobile" value={this.state.mobile} placeholder="请输入手机号"/>
							</div>
						</div>
						<div className="input-control">
							<div className="input-box">
								<input type="password" onChange={(event)=>{
									this.handleChange("password", event)
								}}  name="password" value={this.state.password} placeholder="请输入密码"/>
							</div>
						</div>
						<button className="login-btn" onClick={()=>{
							this.onLogin()
						}}>登录</button>
					</div>
				</div>
			</div>
		)
	}
}

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