import React from 'react'
import PropTypes from 'prop-types'
import "../../less/viewuser.less"
import net from "../network"
import * as types from '../constants/ActionTypes'
import bridge from '../../../core/MessageBridge'
import {remote} from 'electron';
const logger = remote.require('electron-log')

class ViewUser extends React.Component {
	constructor(props) {
		super(props)
		let isStudent
		if (this.props.user.dentity == types.DENTITY.STUDENT) {
			isStudent = true
		}
		this.$origin_username = isStudent?this.props.user.child_name:this.props.user.nickname
		this.state = { 
			editmode	: false, 
			username	: this.$origin_username,
			avatarurl	: isStudent?this.props.user.child_avatar:this.props.user.avatarurl,
			version 	: "-"
		}
	}

	componentDidMount() {
		this.setState({ version: window.ENV_CONF.version })
	}

	componentWillUnmount() {
	}

	__on_change_confirm() {
		if (!this.state.username) {
			this.setState({username: this.$origin_username, editmode: false})
			return
		}
		if (this.state.username != this.$origin_username) {
			if (confirm("是否确定修改昵称？")) {
				net.changeUserInfo({
					child_name: this.state.username
				}).then((response)=>{
					if (response.status) {
						this.__change_user()
					}
				})
			} else {
				this.setState({username: this.$origin_username})
			}
		}
		this.setState({editmode: false})
	}

	__change_user() {
		let user = {
			...this.props.user,
			child_avatar : this.state.avatarurl,
			child_name	 : this.state.username
		}
		this.props.user.child_name 		= this.state.username
		this.props.user.child_avatar  	= this.state.avatarurl
		this.$origin_username		    = this.state.username
		this.props.onChangeUser(user)
	}

	__clear_cached_data() {
		this.props.confirm({
			content: "确定要清除本地缓存文件吗？",
			sure: ()=>{
				bridge.call({
					method	: "clearCachedData",
					args 	: {packs: [ 
						{ name: "course-ui" },
						{ name: "preview-ui" },
						{ name: "liveroom" },
						{ name: "homeworkroom" },
						{ name: "classroom-ui", packageOnly: true, clearAssetsLater: true }
					]}
				}).then(()=>{
					this.props.alert({ content: "清除缓存成功！" })
					logger.log("清除缓存成功！")
				}).catch(error=>{
					this.props.alert({ content: "清除缓存失败，" + error.message })
					logger.error("清除缓存失败", error)
				})
			}
		})
	}

	__on_change_avatar(file) {
		if (!file) return
		net.upload_file(file).then((url)=>{
			net.changeUserInfo({
				child_avatar : url
			}).then((response)=>{
				if (response.status) {
					this.setState({avatarurl: url})
					this.__change_user()
				}
			})
		})
	}

	render() {
		let isStudent
		if (this.props.user.dentity == types.DENTITY.STUDENT) {
			isStudent = true
		}
		return (
			<div className={isStudent?"view-user":"view-user teacher"}>
				<div className="avatar" style={{
					"backgroundImage":`url(${this.state.avatarurl})`
				}}>
					{isStudent?<input type="file" accept="image/x-png,image/jpeg" onChange={(event)=>{
						this.__on_change_avatar(event.target.files[0])
					}}/>:""}
				</div>
				<div className="nickname">
					{this.state.editmode?<input type="text" onChange={(event)=>{
						this.setState({ username: event.target.value })
					}} value={this.state.username} autoFocus onBlur={()=>{
						this.__on_change_confirm()
					}}/>:[
						<div className="text" key="0">{this.state.username}</div>,
						isStudent?<div className="edit-btn" key="1" onClick={()=>{
							this.setState({ editmode : true })
						}}></div>:""
					]}
				</div>
				<div className="logout-btn" onClick={()=>{
					this.props.onLogout()
				}}>退出登录</div>
				<div className="logout-line"></div>
				<div className="change-pw" onClick={()=>{
					this.props.changePw()
				}}>修改密码</div>
				<div className="version">当前版本：{this.state.version}</div>
				<div className="cleardata" onClick={()=>{
					this.__clear_cached_data()
				}}>清除缓存</div>
			</div>
		)
	}
}

ViewUser.propTypes = {
	user	    	: PropTypes.shape({
		avatarurl	: PropTypes.string.isRequired,
		child_name 	: PropTypes.string,
		id  		: PropTypes.number.isRequired
	}),
	onLogout    	: PropTypes.func.isRequired,
	onChangeUser	: PropTypes.func.isRequired,
	alert 			: PropTypes.func.isRequired,
	confirm 		: PropTypes.func.isRequired,
	changePw        : PropTypes.func.isRequired,
}

export default ViewUser