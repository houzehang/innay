import React from 'react';
import { connect } from 'react-redux'
import { 
	loginSuccess, doLogin, 
	showLoading, hideLoading,
	alert,
	onShowTost, onChangePwd
} from '../actions'
import ViewChangePwd from '../components/viewChangePwd'
import net from "../network"
import context from "../context"
import { ipcRenderer, remote } from 'electron';
import Toast from './toast'

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
			timer           : null,
			submitBtn       : false,
			submitcode      : false,
			sendCodeBtnText : "获取验证码",
			debugIp			: localStorage.getItem('debug_ip')
		}
	}

	handleChange(name, event) {
		let value = event.target.value.trim()
		this.setState({ [name]: value },()=>{
			if(this.state.mobile && this.state.code){
				this.setState({
					submitBtn : true
				})
			}else{
				this.setState({
					submitBtn : false
				})
			}
			if(this.state.mobile && this.state.password){
				this.setState({
					submitcode : true
				})
			}else{
				this.setState({
					submitcode : false
				})
			}
		})
	}

	onLogin() {
		let mobile 		= this.state.mobile
		let password 	= this.state.password
	    let code        = this.state.code
		let dentity 	= this.state.dentity

		if(this.state.currentType == 'code' && (!mobile || !code)){
			// this.props.onShowTost({
			// 	content: "请输入手机号或验证码！"
			// })
			return
		}

		if(this.state.currentType == 'password' && (!mobile || !password)){
			// this.props.onShowTost({
			// 	content: "请输入手机号或密码！"
			// })
			return
		}
		
		this.props.showLoading("正在登录...")
		if(this.state.currentType == "password"){
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
		if(!(/^1[3456789]\d{9}$/.test(this.state.mobile))){ 
			this.props.onShowTost({
				content: "手机号格式不正确！"
			}) 
			return false; 
		} else{
			this.setState({
				showSafeMaskFlag: true,

			})
			this.getCode()
		}
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
					totalNum : this.state.totalNum - 1,
					countBtn : false,
					sendCodeBtnText : "重新发送"
				})
				if(this.state.totalNum<=0){
					clearInterval(this.state.timer);
					this.setState({
						totalNum     : 60,
						showCountBtn : false,
						countBtn     : true
					})
				}
			},1000);
			this.props.onShowTost({
				content: "验证码已发送您的手机，十分钟内输入有效！"
			})
		})
	}

	//忘记密码
	forgetPassWord(){
		// this.setState({
		// 	currentType: "code"
		// })
		this.props.onChangePwd(true,true)
	}

	render() {
		const { showToastState, changePwd, fromViewUser } = this.props
		let serverSelected = 0
		let debugIp = this.state.debugIp || ""
		if (/steven/.test(debugIp)) {
			serverSelected = 1
		} else if (/mingxiyuwen/.test(debugIp)) {
			serverSelected = 2
		}
		return (
			<div className="full-h">
				{this.state.debugIp || (window.ENV_CONF||{}).DEBUG ||(window.ENV_CONF||{}).TEST ? <div className="choose-server">
					<div className={`server-btn ${serverSelected == 0 ? 'sel' : ''}`} onClick={
						()=>{
							if (serverSelected == 0) return
							let ip = "http://kecheng1.youshiyuwen.cn"
							localStorage.setItem('debug_ip',ip)
							this.setState({
								debugIp: ip
							})
							this.props.onShowTost({
								content: "已切换至 - "+ip
							})
							setTimeout(() => {
								remote.getCurrentWindow().reload()
							}, 500);
						}
					}>kecheng1</div>
					<div className={`server-btn ${serverSelected == 1 ? 'sel' : ''}`} onClick={
						()=>{
							if (serverSelected == 1) return
							let ip = "http://steven.mx0a.com"
							localStorage.setItem('debug_ip',ip)
							this.setState({
								debugIp: ip
							})
							this.props.onShowTost({
								content: "已切换至 - "+ip
							})
							setTimeout(() => {
								remote.getCurrentWindow().reload()
							}, 500);
						}
					}>steven</div>
					<div className={`server-btn ${serverSelected == 2 ? 'sel' : ''}`} onClick={
						()=>{
							if (serverSelected == 2) return
							let ip = "https://www.mingxiyuwen.com"
							localStorage.setItem('debug_ip',ip)
							this.setState({
								debugIp: ip
							})
							this.props.onShowTost({
								content: "已切换至 - "+ip
							})
							setTimeout(() => {
								remote.getCurrentWindow().reload()
							}, 500);
						}
					}>online</div>
				</div> :""}
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
											disabled={this.state.mobile.length!=11}
											style={{display: this.state.showCountBtn?'none':'block'}}
									        onClick={()=>{
												this.openSafeMask()
											}}
									    >{this.state.sendCodeBtnText}</button>
										<button className={this.state.countBtn?"code-box open-code":"code-box"}
										    style={{display: this.state.showCountBtn?'block':'none'}}
										>{this.state.totalNum}s可重发</button>
									</div>
								</div>
								<div className="submit-wrap">
									<button className={this.state.submitBtn?"login-btn":"not-btn"} onClick={()=>{
										this.onLogin()
									}}></button>
								</div>
							</div>:
							// 密码登录
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
								<div className="submit-wrap">
									<button className={this.state.submitcode?"login-btn":"not-btn"} onClick={()=>{
										this.onLogin()
									}}></button>
								</div>
							</div>
						}			
					</div>
				</div>

				<div className="safe-mask-main" style={{display:this.state.showSafeMaskFlag?'flex':'none'}}>
					<div className="safe-container">
						<div className="icon-img-box" onClick={()=>{this.closeSafeMask()}}>
							<img className="icon-img" src={require('../../assets/close-safemask.png')}/>
						</div>
						
						<div className="safe-title">安全验证</div>
						<div className="pic-codewrap">
						    <div className="input-left-box">
								<img className="icon-img"  src={require('../../assets/icon-changepwd.png')}/>
								<input type="tel" maxLength="11" onChange={(event)=>{
								this.handleChange("piccode", event)
								}} name="piccode" value={this.state.piccode} placeholder="请输入右边图中的验证码"
								onBlur={this.inputOnBlur}
								onFocus={this.inputOnFocus}/>
						    </div>
							
							<div className="pic-codebox" onClick={()=>{this.getCode()}}>
								<img className="icon-img" src={this.state.picCodeDataImg}/>
							</div>
						</div>
						<button className="login-btn" onClick={()=>{this.picLogin()}}></button>
					</div>
				</div>
				{showToastState.showing?<Toast data={showToastState} /> : ''}
				{changePwd?<ViewChangePwd onClose={()=>{
					this.props.onChangePwd(false, false)
					if (fromViewUser) {
						// this.__view_user()
					}
			    }}/> : ''}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		showToastState : state.toast,
		changePwd      : state.main.changePwd,
		fromViewUser   : state.main.fromViewUser,
	}
}
const mapDispatchToProps = dispatch => ({
	loginSuccess : (account)   => dispatch(loginSuccess(account)),
	showLoading  : (message)   => dispatch(showLoading(message)),
	hideLoading  : ()          => dispatch(hideLoading()),
	alert        : (configure) => dispatch(alert(configure)),
	onShowTost   : (configure) => dispatch(onShowTost(configure)),
    onChangePwd  : (show, fromViewUser) => dispatch(onChangePwd(show, fromViewUser)),
})
  
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)