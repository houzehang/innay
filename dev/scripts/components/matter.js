import React from 'react'
import PropTypes from 'prop-types'
import context from "../context"
import electron from "electron"
const clipboard = electron.clipboard

class MatterPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = { hover: false }
	}
	render() {
		return <div className='matter-container' onMouseOver={()=>{
                    
        }} onMouseOut={(event)=>{
            
        }}>
            <div className="matter-content">
				{/* 千图网 */}
				<div className="matter-item">
					<div className="logo qiantu"></div>
					<div className="matter-item-title">
						<span className="icon icon-rocket" onClick={()=>{
							context.linkTo('https://www.58pic.com/')
						}}></span>
					</div>
					<div>登陆方式：
						<div className="login-style qq"></div>
					</div>
					<div>账号：2415343397
						<span className='copy' onClick={()=>{
							clipboard.writeText('2415343397')
						}}>复制</span>
					</div>
					<div>密码：{this.state.view_open_qiantu ? 'chengxubao598' : '************'} 
						<span className="copy view icon icon-eye" onClick={()=>{
							let view_open_qiantu = this.state.view_open_qiantu
							this.setState({
								view_open_qiantu: !view_open_qiantu
							})
						}}></span>
						<span className='copy' onClick={()=>{
							clipboard.writeText('chengxubao598')
						}}>复制</span>
					</div>
				</div>
				{/* 6m5m */}
				<div className="matter-item">
					<div className="logo _6m5m"></div>
					<div className="matter-item-title">
						<span className="icon icon-rocket" onClick={()=>{
							context.linkTo('http://www.6m5m.com/')
						}}></span>
					</div>
					<div>登陆方式：
						<div className="login-style qq"></div>
					</div>
					<div>账号：2415343397
						<span className='copy' onClick={()=>{
							clipboard.writeText('2415343397')
						}}>复制</span>
					</div>
					<div>密码：{this.state.view_open_6m5m ? 'chengxubao598' : '************'} 
						<span className="copy view icon icon-eye" onClick={()=>{
							let view_open_6m5m = this.state.view_open_6m5m
							this.setState({
								view_open_6m5m: !view_open_6m5m
							})
						}}></span>
						<span className='copy' onClick={()=>{
							clipboard.writeText('chengxubao598')
						}}>复制</span>
					</div>
				</div>
				{/* 爱给网 */}
				<div className="matter-item">
					<div className="logo aigei"></div>
					<div className="matter-item-title">
						<span className="icon icon-rocket" onClick={()=>{
							context.linkTo('http://www.aigei.com/')
						}}></span>
					</div>
					<div>登陆方式：暂无
						{/* <div className="login-style">-</div> */}
					</div>
					<div>账号：暂无
						<span className='copy' onClick={()=>{
							clipboard.writeText('2415343397')
						}}>复制</span>
					</div>
					<div>密码：{this.state.view_open_aigei ? '暂无' : '************'} 
						<span className="copy view icon icon-eye" onClick={()=>{
							let view_open_aigei = this.state.view_open_aigei
							this.setState({
								view_open_aigei: !view_open_aigei
							})
						}}></span>
						<span className='copy' onClick={()=>{
							clipboard.writeText('暂无')
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