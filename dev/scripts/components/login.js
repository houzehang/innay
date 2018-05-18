import React from 'react'
import PropTypes from 'prop-types'
const net = require("../network")

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
			context.dmg.userinfo = res.user
			this.content()
			this.props.hideLoading()
		},()=>{
			this.props.hideLoading()
		}).done()
	}

	render() {
		return <div className="page login-page">
			<div className="login-box">
				<div className="icon"></div>
				<div className="title"></div>
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
				}}></button>
			</div>
		</div>
	}
}

export default Login