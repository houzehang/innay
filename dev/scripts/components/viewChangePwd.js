import React from 'react';
import { connect } from 'react-redux'
import "../../less/changepw.less"
import PropTypes from 'prop-types'
import { 
	loginSuccess, doLogin, 
	showLoading, hideLoading,
	alert,
	onShowTost, onChangePwd
} from '../actions'
import net from "../network"
import context from "../context"
import { ipcRenderer } from 'electron';
import Toast from '../containers/toast'

class ViewChangePwd extends React.Component {
	constructor(props) {
		super(props)
		this.state = {  
			mobile          : "", 
			password        : "",
			code            : "",
			dentity         : 1,
			showCountBtn    : false,
			totalNum        : 60,
			timer           : null,
			submitBtn       : false,
			sendCodeBtnText : "获取验证码"
		}
	}

	handleChange(name, event) {
		let value = event.target.value
		this.setState({ [name]: value },()=>{
			if(this.state.mobile && this.state.password && this.state.code){
				this.setState({
					submitBtn : true
				})
			}else{
				this.setState({
					submitBtn : false
				})
			}
		})
	}

	onExit(){
		this.props.onClose(!!this.props.fromViewUser)
		let nowTime = new Date().getTime()
		localStorage.setItem("FIRSTTIME",nowTime)
	}

	onSubmit() {
		let mobile 		= this.state.mobile
		let password 	= this.state.password
	    let code        = this.state.code

		if(!mobile || !code || !password){
            return
		}

		this.props.showLoading("正在提交...")
		
        net.forgetPassword({
			mobile, password, code ,
			sms_type : "pc_password"
        }).then((res)=>{
            net.token 		= res.token
            net.sigtoken 	= res.signaling_token
            context.user 	= res.user
            this.props.hideLoading()
			this.props.onShowTost({
				content : "密码修改成功！"
			})
			setTimeout(()=>{
				this.props.loginSuccess(res.user)
				this.props.onChangePwd(false,false)
			},3000)
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
				showSafeMaskFlag: true
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
			sms_type: 'pc_password'
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

	render() {
		const { showToastState } = this.props
		return (
			<div className="channgepwd-container">
				<div className="page changepwd-page">
					<div className='changepwd-box' >
					    <div className="icon-img-box" onClick={()=>{this.onExit()}}>
							<img className="icon-img" src={require('../../assets/close-safemask.png')}/>
						</div>
						<div className="title">
							<div className="none-color">修改密码</div>
						</div>
						<div>
                            <div className="input-control">
                                <div className="input-box">
                                    <img className="icon-img" src={require('../../assets/phone-icon.png')}/>
                                    <input type="tel" maxLength="11" onChange={(event)=>{
                                        this.handleChange("mobile", event)
                                    }} name="mobile" value={this.state.mobile  || ""} placeholder="请输入手机号"
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
                                        }}  name="code" value={this.state.code  || ""} placeholder="请输入短信验证码"
                                        onBlur={this.inputOnBlur}
                                        onFocus={this.inputOnFocus}/>
                                    </div>
                                    <button className={this.state.mobile.length==11?'code-box open-code':'code-box'}
                                        disabled={this.state.mobile.length==11?false:true}
                                        style={{display: this.state.showCountBtn==false?'block':'none'}}
                                        onClick={()=>{
                                            this.openSafeMask()
                                        }}
                                    >{this.state.sendCodeBtnText}</button>
                                    <button className={this.state.countBtn?"code-box open-code":"code-box"}
                                        style={{display: this.state.showCountBtn==true?'block':'none'}}
                                    >{this.state.totalNum}s可重发</button>
                                </div>
                            </div>
                            <div className="input-control">
                                <div className="input-box">
                                    {/* <img className="icon-img" src={require('../../assets/phone-icon.png')}/> */}
                                    <input type="password" className="newpwd-input" onChange={(event)=>{
                                        this.handleChange("password", event)
                                    }} name="password" value={this.state.password || ""} placeholder="请设置密码(6-20位字符，支持字母或数字)"
                                    onBlur={this.inputOnBlur}
                                    onFocus={this.inputOnFocus}/>
                                </div>
                            </div>
						</div>
						<button className={this.state.submitBtn?"login-btn":"not-btn"} onClick={()=>{
							this.onSubmit()
						}}></button>
					</div>
				</div>

				<div className="safe-mask" style={{display:this.state.showSafeMaskFlag?'flex':'none'}}>
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
			</div>
		)
	}
}
ViewChangePwd.propTypes = {
	fromViewUser : PropTypes.bool,
	onClose: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
	return {
		showToastState : state.toast
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
)(ViewChangePwd)