import React from 'react';
import { connect } from 'react-redux'
import { 
	loginSuccess, doLogin, 
	showLoading, hideLoading,
	alert
} from '../actions'
import net from "../network"
import context from "../context"
import { ipcRenderer } from 'electron';
import {TEACHER}   from './../../../env.js';

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {  
			mobile: "", 
			password: "",
			dentity: TEACHER ? 2 : 1,
			dentity_list: [{id: 2,name: '教师'},{id: 3,name: '班主任'}]
		}

		if (TEACHER) {
			this.props.showLoading("正在获取身份配置...")
			net.getLoginDentities().then((res)=>{
				if (res && res.dentities) {
					this.setState({dentity_list: res.dentities});
				}
				this.props.hideLoading()
			},()=>{
				this.props.hideLoading()
			})
		}
	}

	handleChange(name, event) {
		let value = event.target.value
		this.setState({ [name]: value })
	}

	onLogin() {
		let mobile 		= this.state.mobile
		let password 	= this.state.password
		let dentity 	= this.state.dentity

		if (!mobile || !password) {
			this.props.alert({
				content: "请输入手机号或密码！"
			})
			return
		}
		this.props.showLoading("正在登录...")
		net.login({
			mobile, password, dentity
		}).then((res)=>{
			net.token 		= res.token
			net.sigtoken 	= res.signaling_token
			context.user 	= res.user
			this.props.hideLoading()
			this.props.loginSuccess(res.user)
		},()=>{
			this.props.hideLoading()
		})
	}

	inputOnBlur(){
		ipcRenderer.send('on-hotkey');
	}
	
	inputOnFocus(){
		ipcRenderer.send('off-hotkey');
	}

	render() {
		return (
			<div className="full-h">
				<div className="page login-page">
					{/* <div className={'login-box'} > */}
					<div className={'login-box'+(this.state.dentity == 1 ? '' : ' with-dentity')} >
						<div className="title">登录</div>
						{this.state.dentity == 1 ? '' :
							<div className="input-box login-radio">
								{this.state.dentity_list.map((element,index) => {
									return <label key={`dentity-element${element.id}`}><input type="radio" name="dentity" value={element.id} checked={this.state.dentity == element.id?'checked':false} onChange={(event)=>{
										this.handleChange("dentity", event)
									}}/>&nbsp;{element.name}</label>
								})}
							</div>
						}
						<div className="input-control">
							<div className="input-box">
								<input type="number" onChange={(event)=>{
									this.handleChange("mobile", event)
								}} name="mobile" value={this.state.mobile} placeholder="请输入手机号"
								onBlur={this.inputOnBlur}
       							onFocus={this.inputOnFocus}/>
							</div>
						</div>
						<div className="input-control">
							<div className="input-box">
								<input type="password" onChange={(event)=>{
									this.handleChange("password", event)
								}}  name="password" value={this.state.password} placeholder="请输入密码"
								onBlur={this.inputOnBlur}
       							onFocus={this.inputOnFocus}/>
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