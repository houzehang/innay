import React from 'react';
import { connect } from 'react-redux'
import GlobalMsg from '../components/globalMsg'
import "../../less/lobby.less"
import * as types from '../constants/ActionTypes'
import Toast from './toast'
import context from './../context'
import { 
	confirm, alert, hide,
	showLoading,
	hideLoading,
	onShowGlobalMsg,
	onShowTost
} from '../actions'
import os from "os"
import fs from "fs"
import path from "path"
import child_process from 'child_process'
import {remote, ipcRenderer, dialog} from 'electron'

class Main extends React.Component {
	constructor(props) {
		super(props)
		this.$home_major_cfg = {
			page_pngquant: 1,
			page_tinypng: 2,
			localserver: 3,
			connectAuth: 4
		}

		this.state = {
			selectedPage: 0,
			working: false,
			homeMajor: this.$home_major_cfg.page_pngquant,
			tinyFiles: [],
			tinyDone: 0,
			outPutPath: '',
			outMode: 1
		}
		this.$darwin = new RegExp('darwin', 'i').test(os.type())
	}

	componentDidMount() {  
		let userId = localStorage.getItem('USER_ID')
		if (!userId) {
			userId = Date.now()
			localStorage.setItem('USER_ID', userId)
		}
		context.sentryBrowser.bindUser(userId, '-', '-', window.ENV_CONF.version, '-')
		context.mark(20001, window.ENV_CONF.systeminfo)
		
		if (!this.$darwin) {
			var curWindow = remote.getCurrentWindow();
			curWindow.webContents.openDevTools();
		}
	}

	componentWillUnmount() {
	}

	__home_major(){
		let result = '';
		switch (this.state.homeMajor) {
			case this.$home_major_cfg.page_pngquant:
				result = this.__home_major_pngquant()
				break;
			case this.$home_major_cfg.page_tinypng:
				result = this.__home_major_tinypng()
				break;
			case this.$home_major_cfg.localserver:
				result = this.__home_major_localserver()
				break;
			case this.$home_major_cfg.connectAuth:
				result = this.__home_major_connect_auth()
				break;
			default:
				result = this.__home_major_pngquant()
				break;
		}
		return result
	}

	__select_output_path(callback){
		remote.dialog.showOpenDialog(remote.getCurrentWindow(),{
		    properties: ['openDirectory','createDirectory']
		}, (files) => {
			if (files && files.length && files[0]) {
				this.setState({
					outPutPath: files[0]
				}) 
				callback && callback()
			}
		})
	}

	__open_output_path(){
		if (this.state.outPutPath) {
			remote.shell.openItem(this.state.outPutPath)
		}
	}

	__import_files_from_folder(){
		ipcRenderer.send('open-directory-dialog','openFile');
		remote.dialog.showOpenDialog(remote.getCurrentWindow(),{
		    properties: ['openDirectory']
		}, (files) => {
			files && files.length && this.setState({
				tinyFiles: files.map((filePath)=>{
					return {
						path : filePath,
						size : 900
					}
				})
			})
		})
	}

	__import_files(){
		ipcRenderer.send('open-directory-dialog','openFile');
		remote.dialog.showOpenDialog(remote.getCurrentWindow(), {
		    properties: ['openFile', 'multiSelections'],
			filters: [
				{ 
					name: 'Images', 
					extensions: ['jpg', 'png','jpeg', 'PNG', 'JPG'] 
				},
			]
		}, (files) => {
				let tinyFiles = []
				if (files && files.length) {
					this.__reset_tiny()
				}
				if (files && files.length) {
					let allFiles = [...files];
					let __next_one = ()=>{
						let filePath = allFiles.shift()
						if (filePath) {
							fs.stat(filePath,(error,stats)=>{
								if(error){
									console.log("file size calc error",filePath);
								}else{
									tinyFiles.push({
										path : filePath,
										size : Math.ceil(stats.size / 1024)
									})
									this.setState({
										tinyFiles
									})
								}
								__next_one()
							})
						} else {
							this.setState({
								working : false
							})
						}
					}
					this.setState({
						working : true
					})
					__next_one()
					__next_one()
					__next_one()
				}
			})
	}

	__trans_size(size){
		if (size == null || size == undefined) {
			return '-'
		}
		console.log('MINGXI_DEBUG_LOG>>>>>>>>>size',size,size > 1024 ,size > 1024 ? "M" : "KB");
		return `${size > 1024 ? (size / 1024).toFixed(2) : size}${size > 1024 ? "M" : "KB"}`
	}

	__calc_reduce(preSize, finalSize){
		if (preSize == null || preSize == undefined || !finalSize) {
			return '-'
		}
		return (-((1-(finalSize / preSize)) * 100) | 0) + '%'
	}

	__reset_tiny(onlyStatus){
		if (onlyStatus) {
			this.setState({
				tinyDone: 0,
				tinyFiles: this.state.tinyFiles.map((fileItem)=>{
					fileItem.done 	   = false;
					fileItem.finalSize = null;
					fileItem.fail 	   = null;
					return fileItem;
				})
			})
		} else {
			this.setState({
				tinyDone: 0,
				tinyFiles: []
			})
		}
	}

	__home_major_tinypng(){
		return '开发中'
	}

	__home_major_pngquant(){
		let forbiden = this.state.tinyDone == this.state.tinyFiles.length || this.state.working || (this.state.outMode == 2 && !this.state.outPutPath)
		return <div className ="pane">
			<table className ="table-striped home-major">
				<thead>
					<tr>
						<th width="50%">文件</th>
						<th width="10%">压缩前</th>
						<th width="20%">当前进度</th>
						<th width="10%">压缩后</th>
						<th>减少</th>
					</tr>
				</thead>
				
				<tbody>
					{this.state.tinyFiles.length ? this.state.tinyFiles.map((fileItem = {}, index)=>{
						let done = !!fileItem.done
						let fail = fileItem.fail
						let content = 
							<tr key={index}>
								<td width="50%" className="file-item">
									<span className="file-path" title={fileItem.path}>{fileItem.path}</span>
									<span className ="icon icon-folder gray" onClick={(e)=>{
										remote.shell.showItemInFolder(fileItem.path)
										e.preventDefault()
									}}>	
									</span>
								</td>
								<td width="10%">{this.__trans_size(fileItem.size)}</td>
								<td width="20%" className="progress">
									<div className="progress-bar back"></div>
									<div className={`progress-bar ${done ? 'done' : ''} ${fail ? 'fail' : ''}`}>
										{fail ? <span>{fail}</span> : ''}
									</div>
									<span className="progress-num">{done ? 100 : 0}%</span>
								</td>
								<td width="10%">{this.__trans_size(fileItem.finalSize)}</td>
								<td>{this.__calc_reduce(fileItem.size, fileItem.finalSize)}</td>
							</tr>
						return content;
					}) : <tr></tr>}
				</tbody>
			</table>
			{this.state.tinyFiles.length ? "" : <div className="empty">未导入任何文件</div>}
			<footer className="toolbar toolbar-footer fixed-bottom">
				<div className="toolbar-actions">
					<button className={`btn btn-default ${this.state.working ? 'disabled' : '' }`} disabled={this.state.working} onClick={()=>{
						this.__import_files()
					}}>
					批量导入
					</button>

					{/* <button className="btn btn-default" onClick={()=>{
						this.__import_files_from_folder()
					}}>
					导入文件夹
					</button> */}
				</div>
				<div className="radio" onClick={(e)=>{
					if (e.target.tagName === "INPUT") return
					if (this.state.working) return;
					this.setState({
						outMode: 1
					})
				}}>
					<label>
						<span className={`icon ${this.state.outMode == 1 ? "icon-check" : ""} radio-icon`}></span>
						<input className="radio-input" type="radio" name="radios" defaultChecked={`${this.state.outMode == 1 ? "checked" : ""}`}/>
						覆盖原图
					</label>
				</div>
				<div className="radio" disabled={this.state.working} onClick={(e)=>{
					if (e.target.tagName === "INPUT") return
					if (this.state.working) return;
					this.setState({
						outMode: 2
					})
				}}>
					<label>
						<span className={`icon ${this.state.outMode == 2 ? "icon-check" : ""} radio-icon`}></span>
						<input className="radio-input" type="radio" name="radios"  disabled={this.state.working} defaultChecked={`${this.state.outMode == 2 ? "checked" : ""}`}/>
						自定义输出路径
					</label>
				</div>
				<input className={`form-control ${this.state.outMode == 2 ? "": "hidden"}`} type="text" placeholder="未选择输出目录" value={this.state.outPutPath} disabled="disabled"/>
				<div className={`toolbar-actions ${this.state.outMode == 2 ? "": "hidden"}`}>
					<button className={`btn btn-default ${this.state.working ? 'disabled' : '' }`} disabled={this.state.working} onClick={()=>{
						this.__select_output_path()
					}}>
					选择
					</button>
					<button className={`btn btn-default ${!this.state.outPutPath ? 'disabled' : '' }`} disabled={!this.state.outPutPath} onClick={()=>{
						this.__open_output_path()
					}}>
					打开
					</button>
				</div>
				<div className="status"><span>{`已完成：${this.state.tinyDone}/${this.state.tinyFiles.length}`}</span></div>
				<div className="toolbar-actions">
					<button className={`btn btn-primary ${forbiden ? 'disabled' : '' }`} disabled={forbiden} onClick={()=>{
						this.__start()
					}}>
					开始
					</button>
					<button className={`btn btn-default ${this.state.working ? 'disabled' : '' }`} disabled={this.state.working} onClick={()=>{
						this.__reset_tiny(true)
					}}>
					重置
					</button>
					<button className={`btn btn-default ${this.state.working ? 'disabled' : '' }`} disabled={this.state.working} onClick={()=>{
						this.__reset_tiny()
					}}>
					清空
					</button>
				</div>
			</footer>
		</div>
	}

	__home_major_localserver(){
		return '敬请期待'
	}

	__home_major_connect_auth(){
		return <div className='auth-container'>
			{/* <div className='auth-card'></div> */}
			<span><div className='title'>邮箱：</div>houzehang1024@gmail.com</span>
			<span><div className='title'>QQ：</div>2210036910</span>
			<span><div className='title'>微信号：</div>cocos2d-x</span>
			<div className='self-code'></div>
		</div>
	}

	__start(){
		this.setState({
			working: true
		})
		let exec 			= child_process.exec;
		let execSync 		= child_process.execSync;
		let pngquant
		if (this.$darwin) {
			if (process.env.NODE_ENV != "development") {
				pngquant = path.join(window.ENV_CONF.__dirname, 'app.asar.unpacked','dist','libs','pngquant', 'mac', 'pngquant')
				execSync(`chmod 777 '${pngquant}'`)
			} else {
				pngquant = `${context.distPath}/libs/pngquant/mac/pngquant`
			}
		} else {
			pngquant = path.join(window.ENV_CONF.__dirname, 'app.asar.unpacked','dist','libs','pngquant', 'win', 'pngquant.exe')
		}
		let __execute = (rawfile, onSuccess, onError)=>{
			console.log('MINGXI_DEBUG_LOG>>>>>>>>>rawfile',rawfile);
			let fileName		= rawfile.replace(/[^\\\/]*[\\\/]+/g,'').replace(/ /g, '\ ')
			let finalFile 		= this.state.outMode == 1 ? rawfile : `${this.state.outPutPath}/${fileName}`
			let command 		= `${pngquant} '${rawfile}' --output '${finalFile}' --force --verbose --skip-if-larger`
			// --skip-if-larger
			// if (!this.$darwin) {
			// 	command = command.replace(/\\/g, '\\\\')
			// }
			exec(command, (error, stdout, stderr)=>{
				if(error && !/skipped/i.test(error)) {
					console.log('error: ' + error);
					context.mark(20002, {error})
					let reason;
					if (/cannot decode/.test(error)) {
						reason = '无法解析'
					} else if (/cannot open/.test(error)) {
						reason = '找不到文件'
					} else {
						reason = '未知错误'
					}
					console.log('failed reason:',reason)
					onError && onError(reason)
					return;
				}
				onSuccess && onSuccess(finalFile)
				console.log('stdout: ' + stdout);
				console.log('stderr: ' + stderr);
			})
		}
		this.state.tinyFiles.map((fileItem)=>{
			let filePath = fileItem.path
		})
		let allFiles 	= [...this.state.tinyFiles];
		let __next_one 	= ()=>{
			let fileItem = allFiles.shift() || {}
			let filePath = fileItem.path
			if (filePath) {
				__execute(filePath, (finalFile)=>{
					let files = this.state.tinyFiles;
					files.map((file)=>{
						if (filePath == file.path) {
							fs.stat(finalFile,(error,stats)=>{
								if(error){
									console.log("file size calc error",finalFile);
								}else{
									file.done = true;
									file.finalSize = Math.ceil(stats.size / 1024)
									let tinyDone = this.state.tinyDone + 1;
									if (tinyDone == this.state.tinyFiles.length) {
										this.setState({
											working: false
										})
									};
									this.setState({
										tinyDone,
										tinyFiles: [...files]
									})

									__next_one()
								}
							})
						}
					})
				}, (reason)=>{
					// fail
					let files = this.state.tinyFiles;
					files.map((file)=>{
						if (filePath == file.path) {
							file.done = true;
							file.fail = reason;
							let tinyDone = this.state.tinyDone + 1;
							if (tinyDone == this.state.tinyFiles.length){
								this.setState({
									working : false
								})
							};
							this.setState({
								tinyDone,
								tinyFiles: [...files]
							})
							__next_one()
						}
					})
				})
			}
		}
		__next_one()
	}

	render() {
        let globalMsg;
		if (this.props.globalMsg) {
			globalMsg = <GlobalMsg></GlobalMsg>
		}
		let selectedPage = this.state.selectedPage
        let content = 
		<div className ="window">
			{/* 上部分 */}
			<header className ="toolbar toolbar-header normal">
				<h1 className ="title">程序宝</h1>
				{/* 退出 */}
				<button className ="btn btn-default close" onClick={()=>{
					remote.app.quit()
				}}>
					<span className ="icon icon-cancel-squared close"></span>
				</button>
				{/* 最小化 */}
				<button className ="btn btn-default minus" onClick={()=>{
					let win = remote.getCurrentWindow()
					win.minimize();
				}}>
					<span className ="icon icon-minus-squared minus"></span>
				</button>
				{/* 菜单栏 */}
				<div className ="toolbar-actions">
		
					<div className ="btn-group">
						{/* <button className = {`btn btn-default ${selectedPage == 0 ? "active": ""}`} onClick={()=>{
							this.setState({
								selectedPage: 0
							})
						}}>
							<span className ="icon icon-home"></span>
						</button>
						<button className = {`btn btn-default ${selectedPage == 1 ? "active": ""}`} onClick={()=>{
							this.setState({
								selectedPage: 1
							})
						}}>
							<span className ="icon icon-key"></span>
						</button>
						<button className = {`btn btn-default ${selectedPage == 2 ? "active": ""}`} onClick={()=>{
							this.setState({
								selectedPage: 2
							})
						}}>
							<span className ="icon icon-share"></span>
						</button> */}
					</div>
					{/* <button className ="btn btn-default">
						<span className ="icon icon-home icon-text"></span>
						Filters
					</button> */}
		
				</div>
			</header>
			{/* 下部分 */}
			<div className ="window-content">
				<div className ="pane-group">
					{/* 左侧导航 */}
					<div className ="pane pane-sm sidebar">
						<nav className ="nav-group">
							<h5 className ="nav-group-title">开发必备</h5>
							<span className ={`nav-group-item ${this.state.homeMajor == this.$home_major_cfg.page_pngquant ? 'active' : ''}`} onClick={()=>{
								this.setState({
									homeMajor: this.$home_major_cfg.page_pngquant
								})
							}}>
								<span className ="icon icon-picture"></span>无损压图
							</span>
							{/* <span className ={`nav-group-item ${this.state.homeMajor == this.$home_major_cfg.page_tinypng ? 'active' : ''}`} onClick={()=>{
								this.setState({
									homeMajor: this.$home_major_cfg.page_tinypng
								})
								context.showReport()
							}}>
								<span className ="icon icon-picture"></span>压图-tinypng
							</span> */}
							{/* <span className ={`nav-group-item ${this.state.homeMajor == this.$home_major_cfg.localserver ? 'active' : ''}`} onClick={()=>{
								this.setState({
									homeMajor: this.$home_major_cfg.localserver
								})
							}}>
								<span className ="icon icon-rss"></span>本地服务
							</span> */}
						</nav>
						<nav className ="nav-group">
							<h5 className ="nav-group-title">问题帮助</h5>
							<span className ={`nav-group-item ${this.state.homeMajor == this.$home_major_cfg.connectAuth ? 'active' : ''}`} onClick={()=>{
								this.setState({
									homeMajor: this.$home_major_cfg.connectAuth
								})
							}}>
								<span className ="icon icon-vcard"></span>联系作者
							</span>
							{/* <span className ={`nav-group-item ${this.state.homeMajor == this.$home_major_cfg.localserver ? 'active' : ''}`} onClick={()=>{
								this.setState({
									homeMajor: this.$home_major_cfg.localserver
								})
							}}>
								<span className ="icon icon-rss"></span>本地服务
							</span> */}
						</nav>
					</div>
					{/* 右侧内容 */}
					{this.__home_major()}
				</div>
			</div>
		</div>
		return (<div className="full-h" onDragStart={(e)=>{
			e.preventDefault()
		}}>{content}{globalMsg}{this.props.showToastState.showing?<Toast data={this.props.showToastState} /> : ''}</div>)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		showToastState : state.toast
	}
}

const mapDispatchToProps = dispatch => ({
	confirm 	   		: (data) => dispatch(confirm(data)),
	alert 	   	   		: (data) => dispatch(alert(data)),
	hide 				: () => dispatch(hide()),
	hideLoading 		: () => dispatch(hideLoading()),
	showLoading 		: (message) => dispatch(showLoading(message)),
	onShowGlobalMsg 	: (message) => dispatch(onShowGlobalMsg(message)),
	onShowTost   		: (configure) => dispatch(onShowTost(configure))
})
  
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main)