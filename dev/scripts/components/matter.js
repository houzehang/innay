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
				<div className="matter-item">
					<div className="logo"></div>
					<div className="matter-item-title">
						<span className="icon icon-rocket" onClick={()=>{
							context.linkTo('https://www.58pic.com/')
						}}></span>
					</div>
					<div>登陆方式:
						<div className="login-style qq"></div>
					</div>
					<div>账号：2415343397
						<span className='copy' onClick={()=>{
							clipboard.writeText('2415343397')
						}}>复制</span>
					</div>
					<div>密码：{this.state.view_open_qiantu ? 'chengxubao598' : '************'} 
						<span className="copy view icon icon-eye" onClick={()=>{
							// context.linkTo('https://www.58pic.com/')
							this.setState({
								view_open_qiantu: true
							})
						}}></span>
						<span className='copy' onClick={()=>{
							clipboard.writeText('chengxubao598')
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