import React from 'react';
import { connect } from 'react-redux'
import "../../less/changepw.less"
import PropTypes from 'prop-types'
import { 
	loginSuccess, doLogin, 
	showLoading, hideLoading,
	alert,
} from '../actions'
import net from "../network"
import context from "../context"
import { ipcRenderer } from 'electron';

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
			timer           : null
		}
	}

	handleChange(name, event) {
		let value = event.target.value
		this.setState({ [name]: value })
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
            this.props.alert({
                content: "请输入完整信息进行提交！"
            })
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
			this.props.loginSuccess(res.user)
			this.props.onClose()
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
                                    >发送验证码</button>
                                    <button className="code-box open-code"
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
						<button className="login-btn" onClick={()=>{
							this.onSubmit()
						}}>提交</button>
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
							}} name="piccode" value={this.state.piccode || ""} placeholder="请输入右边图中的验证码"
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
ViewChangePwd.propTypes = {
	fromViewUser : PropTypes.bool,
	onClose: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
	loginSuccess : (account)   => dispatch(loginSuccess(account)),
	showLoading  : (message)   => dispatch(showLoading(message)),
	hideLoading  : ()          => dispatch(hideLoading()),
	alert        : (configure) => dispatch(alert(configure)),
})
  
export default connect(
	null,
	mapDispatchToProps
)(ViewChangePwd)