import React from 'react'
import PropTypes from 'prop-types'
import context from "../context"
import electron from "electron"
import Toast from './../components/toast.export'
const clipboard = electron.clipboard

class MatterPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = { hover: false }
	}

	__goto(url){
		this.$timer && clearTimeout(this.$timer)
		this.$timer = setTimeout(() => {
			clearTimeout(this.$timer)
			context.linkTo(url)
		}, 100);
	}

	__writeTextToClipboard(text){
		Toast.success("复制成功",1000)
		clipboard.writeText(text)
	}

	render() {
		return <div className='matter-container' onMouseOver={()=>{
                    
        }} onMouseOut={(event)=>{
            
        }}>
            <div className="matter-content">
				{/* 千图网 */}
				<div className="matter-item">
					<div className="logo qiantu" onClick={()=>{
							this.__goto('https://www.58pic.com/')
						}}></div>
					<div className="matter-item-title">
						<span className="icon icon-link" onClick={()=>{
							this.__goto('https://www.58pic.com/')
						}}></span>
					</div>
					<div>登陆方式：
						<div className="login-style qq"></div>
					</div>
					<div>账号：2415343397
						<span className='copy' onClick={()=>{
							this.__writeTextToClipboard('2415343397')
						}}>复制</span>
					</div>
					<div>动态密码：{this.state.view_open_qiantu ? 'chengxubao598' : '************'} 
						<span className="copy view icon icon-eye" onClick={()=>{
							let view_open_qiantu = this.state.view_open_qiantu
							this.setState({
								view_open_qiantu: !view_open_qiantu
							})
						}}></span>
						<span className='copy' onClick={()=>{
							this.__writeTextToClipboard('chengxubao598')
						}}>复制</span>
					</div>
				</div>
				{/* 17素材 */}
				<div className="matter-item">
					<div className="logo sucai17" onClick={()=>{
							this.__goto('https://www.17sucai.com/')
						}}></div>
					<div className="matter-item-title">
						<span className="icon icon-link" onClick={()=>{
							this.__goto('https://www.17sucai.com/')
						}}></span>
					</div>
					<div>登陆方式：
						<div className="login-style qq"></div>
					</div>
					<div>账号：2415343397
						<span className='copy' onClick={()=>{
							this.__writeTextToClipboard('2415343397')
						}}>复制</span>
					</div>
					<div>动态密码：{this.state.view_open_17sucai ? 'chengxubao598' : '************'} 
						<span className="copy view icon icon-eye" onClick={()=>{
							let view_open_17sucai = this.state.view_open_17sucai
							this.setState({
								view_open_17sucai: !view_open_17sucai
							})
						}}></span>
						<span className='copy' onClick={()=>{
							this.__writeTextToClipboard('chengxubao598')
						}}>复制</span>
					</div>
				</div>
				{/* 6m5m */}
				<div className="matter-item">
					<div className="logo _6m5m" onClick={()=>{
							this.__goto('http://www.6m5m.com/')
						}}></div>
					<div className="matter-item-title">
						<span className="icon icon-link" onClick={()=>{
							this.__goto('http://www.6m5m.com/')
						}}></span>
					</div>
					<div>登陆方式：
						<div className="login-style qq"></div>
					</div>
					<div>账号：2415343397
						<span className='copy' onClick={()=>{
							this.__writeTextToClipboard('2415343397')
						}}>复制</span>
					</div>
					<div>动态密码：{this.state.view_open_6m5m ? 'chengxubao598' : '************'} 
						<span className="copy view icon icon-eye" onClick={()=>{
							let view_open_6m5m = this.state.view_open_6m5m
							this.setState({
								view_open_6m5m: !view_open_6m5m
							})
						}}></span>
						<span className='copy' onClick={()=>{
							this.__writeTextToClipboard('chengxubao598')
						}}>复制</span>
					</div>
				</div>
				{/* 爱给网 */}
				<div className="matter-item">
					<div className="logo aigei" onClick={()=>{
							this.__goto('http://www.aigei.com/')
						}}></div>
					<div className="matter-item-title">
						<span className="icon icon-link" onClick={()=>{
							this.__goto('http://www.aigei.com/')
						}}></span>
					</div>
					<div>登陆方式：暂不可用
						{/* <div className="login-style">-</div> */}
					</div>
					<div>账号：暂不可用
						<span className='copy' onClick={()=>{
							this.__writeTextToClipboard('暂不可用')
						}}>复制</span>
					</div>
					<div>动态密码：{this.state.view_open_aigei ? '暂不可用' : '************'} 
						<span className="copy view icon icon-eye" onClick={()=>{
							let view_open_aigei = this.state.view_open_aigei
							this.setState({
								view_open_aigei: !view_open_aigei
							})
						}}></span>
						<span className='copy' onClick={()=>{
							this.__writeTextToClipboard('暂不可用')
						}}>复制</span>
					</div>
				</div>
			</div>
        </div>
				 
	}
}

MatterPage.propTypes = {
}

export default MatterPage