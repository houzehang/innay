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

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {  
			mobile          : "", 
			password        : "",
			code            : "",
			piccode         : "",
			dentity         : 1,
			currentType     : "code",
			showSafeMaskFlag: false,
			showCountBtn    : false,
			totalNum        : 60,
			timer           : null
		}
	}

	handleChange(name, event) {
		let value = event.target.value
		this.setState({ [name]: value })
	}

	onLogin() {
		let mobile 		= this.state.mobile
		let password 	= this.state.password
	    let code        = this.state.code
		let dentity 	= this.state.dentity

		if(this.state.currentType == 'code' && (!mobile || !code)){
			// if (!mobile || !code) {
				this.props.alert({
					content: "请输入手机号或验证码！"
				})
				return
			// }
		}

		if(this.state.currentType == 'password' && (!mobile || !password)){
			// if (!mobile || !code) {
				this.props.alert({
					content: "请输入手机号或密码！"
				})
				return
			// }
		}

		// if (!mobile || !password) {
		// 	this.props.alert({
		// 		content: "请输入手机号或密码！"
		// 	})
		// 	return
		// }
		
		this.props.showLoading("正在登录...")
		if(this.state.currentType == "password"){
			console.log("密码登录哦")
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
			
		} else if(this.state.currentType == "code"){
			net.newLogin({
				mobile , 
				code   ,
				sms_type : 'pc_login'
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
		
	}

	inputOnBlur(){
		ipcRenderer.send('on-hotkey');
	}
	
	inputOnFocus(){
		ipcRenderer.send('off-hotkey');
	}

	//选择登录方式
	chooseLoginStyle(typeString){
		this.setState({
			currentType:typeString
		})
	}
	
	//打开安全弹框
	openSafeMask(){
		this.setState({
			showSafeMaskFlag: true
		})
		this.getCode()
	}

	//获取图形验证码
	getCode(){
		net.getNewCodeimg().then((res)=>{
			this.setState({
				piccode        : "",
				picCodeData    : res,
				picCodeDataImg : res.img,
				picCodeKey     : res.key
			})
		})
	}
	//关闭安全弹框
	closeSafeMask(){
		this.setState({
			showSafeMaskFlag: false
		})
	}
	//图形验证码登录
	picLogin(){
        net.getLoginCode({
			mobile  : this.state.mobile,
			key     : this.state.picCodeKey,
			captcha : this.state.piccode,
			sms_type: 'pc_login'
		}).then(res=>{
			this.closeSafeMask()
		    this.setState({
				showCountBtn: true
			})
			this.state.timer = setInterval(()=>{
				this.setState({
					totalNum : this.state.totalNum - 1
				})
				if(this.state.totalNum<=0){
					clearInterval(this.state.timer);
					this.setState({
						totalNum     : 60,
						showCountBtn : false
					})
				}
			},1000);
		})
	}

	//忘记密码
	forgetPassWord(){
		this.setState({
			currentType: "code"
		})
	}

	render() {
		return (
			<div className="full-h">
				<div className="page login-page">
					<div className='login-box' >
						<div className="title">
							<div className={this.state.currentType=="code"?"current-style":"none-color"} onClick={()=>{
								this.chooseLoginStyle("code")
							}}>验证码登录</div>
							<div className="box-mline"></div>
							<div className={this.state.currentType=="password"?"current-style":"none-color"} onClick={()=>{
								this.chooseLoginStyle("password")
							}}>密码登录</div>
						</div>
                        {/* 验证码 */}
						{
                            this.state.currentType=="code"?
							<div>
								<div className="input-control">
									<div className="input-box">
									   	<img className="icon-img" src={require('../../assets/phone-icon.png')}/>
										<input type="tel" maxLength="11" onChange={(event)=>{
											this.handleChange("mobile", event)
										}} name="mobile" value={this.state.mobile} placeholder="请输入手机号"
										onBlur={this.inputOnBlur}
										onFocus={this.inputOnFocus}/>
									</div>
								</div>
								<div className="input-control">
									<div className="input-box code-inputbox">
										<div className="input-left-box">
										    <img className="icon-img"  src={require('../../assets/pass-icon.png')}/>
											<input type="tel" maxLength="4" onChange={(event)=>{
												this.handleChange("code", event)
											}}  name="code" value={this.state.code} placeholder="请输入短信验证码"
											onBlur={this.inputOnBlur}
											onFocus={this.inputOnFocus}/>
										</div>
										<button className={this.state.mobile.length==11?'code-box open-code':'code-box'}
											disabled={this.state.mobile.length==11?false:true}
											style={{display: this.state.showCountBtn==false?'block':'none'}}
									        onClick={()=>{
												this.openSafeMask()
											}}
									    >发送验证码</button>
										<button className="code-box open-code"
										    style={{display: this.state.showCountBtn==true?'block':'none'}}
										>{this.state.totalNum}s可重发</button>
									</div>
								</div>
							</div>:
							<div>
								<div className="input-control">
									<div className="input-box">
										<img className="icon-img" src={require('../../assets/phone-icon.png')}/>
										<input type="tel" onChange={(event)=>{
											this.handleChange("mobile", event)
										}} name="mobile" value={this.state.mobile} placeholder="请输入手机号"
										onBlur={this.inputOnBlur}
										onFocus={this.inputOnFocus}/>
									</div>
								</div>
								<div className="input-control">
									<div className="input-box">
										<img className="icon-img"  src={require('../../assets/pass-icon.png')}/>
										<input type="password" onChange={(event)=>{
											this.handleChange("password", event)
										}}  name="password" value={this.state.password} placeholder="请输入密码"
										onBlur={this.inputOnBlur}
										onFocus={this.inputOnFocus}/>
									</div>
								</div>
								<div className="forget-pw" onClick={()=>{this.forgetPassWord()}}>忘记密码</div>
							</div>
						}
						<button className="login-btn" onClick={()=>{
							this.onLogin()
						}}>立即登录</button>
					</div>
				</div>

				<div className="safe-mask" style={{display:this.state.showSafeMaskFlag?'flex':'none'}}>
					<div className="safe-container">
						<div className="icon-img-box" onClick={()=>{this.closeSafeMask()}}>
							<img className="icon-img" src={require('../../assets/close-safemask.png')}/>
						</div>
						
						<div className="safe-title">安全验证</div>
						<div className="pic-codewrap">
							<input type="tel" maxLength="11" onChange={(event)=>{
								this.handleChange("piccode", event)
							}} name="piccode" value={this.state.piccode} placeholder="请输入右边图中的验证码"
							onBlur={this.inputOnBlur}
							onFocus={this.inputOnFocus}/>
							<div className="pic-codebox" onClick={()=>{this.getCode()}}>
								<img className="icon-img" src={this.state.picCodeDataImg}/>
							</div>
						</div>
						<button className="login-btn" onClick={()=>{this.picLogin()}}>确认登录</button>
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