import React from 'react';
import { connect } from 'react-redux'
import GlobalMsg from '../components/globalMsg'
import MatterPage from '../components/matter'
import "../../less/lobby.less"
import * as types from '../constants/ActionTypes'
import Toast from './../components/toast.export'
import context from './../context'
import { 
	confirm, alert, hide,
	showLoading,
	hideLoading,
	onShowGlobalMsg,
	onShowTost
} from '../actions'
import os from "os"
import fs from 'fs-extra'
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
			connectAuth: 4,
			matter: 5
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
		this.$compress_total = 0
		this.$darwin 		 = new RegExp('darwin', 'i').test(os.type())

		this.$temp_compress_folder = path.join(remote.app.getPath("userData"), "PngquantTransport")
		fs.ensureDirSync(this.$temp_compress_folder)
	}

	componentDidMount() {  
		let userId = localStorage.getItem('USER_ID')
		if (!userId) {
			userId = Date.now()
			localStorage.setItem('USER_ID', userId)
		}
		context.sentryBrowser.bindUser(userId, '-', '-', window.ENV_CONF.version, '-')
		context.mark(20001, window.ENV_CONF.systeminfo)
		this.$compress_total = (localStorage.getItem('COMPRESS_TOTAL') || '0') - 0

		// if ( !this.$darwin) {
		// 	var curWindow = remote.getCurrentWindow();
		// 	curWindow.webContents.openDevTools();
		// }
	}

	componentWillUnmount() {
	}

	__home_major(){
		let result = '';
		switch (this.state.homeMajor) {
			case this.$home_major_cfg.page_pngquant:
				result = this.__home_major_pngquant()
				break;
			case this.$home_major_cfg.matter:
				result = this.__home_major_matter()
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
					extensions: ['png', 'PNG'] 
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

	__home_major_matter(){
		return <MatterPage/>;
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
					console.log('MINGXI_DEBUG_LOG>>>>>>>>>e.target.tagName',e.target.tagName);
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
				<input className={`form-control ${this.state.outMode == 2 ? "": "hidden"}`} type="text" placeholder="暂未选择输出目录" value={this.state.outPutPath} disabled="disabled"/>
				<div className={`toolbar-actions ${this.state.outMode == 2 ? "": "hidden"}`}>
					<button className={`btn btn-default ${this.state.working ? 'disabled' : '' }`} disabled={this.state.working} onClick={()=>{
						this.__select_output_path()
					}}>
					选择
					</button>
					<button className={`btn btn-default ${!this.state.outPutPath ? 'disabled' : '' }`} disabled={!this.state.outPutPath} onClick={()=>{
						this.__open_output_path()
					}}>
					查看
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
		let src = `https://mingxi-bundles-test.oss-cn-beijing.aliyuncs.com/yaduobao/cocos-wechat.jpeg?t={Date.now()}`
		return <div className='auth-container'>
			{/* <div className='auth-card'></div> */}
			{/* <span><div className='title'>邮箱：</div>houzehang1024@gmail.com</span> */}
			{/* <span><div className='title'>QQ：</div>2210036910</span> */}
			{/* <span><div className='title'>微信号：</div>cocos2d-x</span> */}
			{/* <span><div className='title'>Cocos技术交流群微信群：</div></span> */}
			<div className='self-code'>
				<img src={src} alt=""/>
			</div>
			{/* <span className='click-item' onClick={()=>{
				context.showReport()
			}}><u>问题反馈</u></span> */}
		</div>
	}

	__contain_chinese(str = ''){
		let reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
		return reg.test(str)
	}

	__rmdir(dir) {
		try {
			let arr = [dir]
			let current = null
			let index = 0
			while(current = arr[index++]) {
				let stat = fs.statSync(current)
				if (stat.isDirectory()) {
					let files = fs.readdirSync(current)
					arr = [...arr, ...files.map(file => path.join(current, file))]
				}
			}
			for (var i = arr.length - 1; i >= 0; i--) {
				let stat = fs.statSync(arr[i])
				if (stat.isDirectory()) {
					fs.rmdirSync(arr[i])
				} else {
					fs.unlinkSync(arr[i])
				}
			}
		} catch (error) {}
	}

	__compress_over(){
		this.setState({
			working : false
		})
		localStorage.setItem('COMPRESS_TOTAL', this.$compress_total)
		context.mark(20004, {}, {}, ":"+this.$compress_total)
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
		let __execute = (rawFile, onSuccess, onError)=>{
			
			let fileName		= rawFile.replace(/[^\\\/]*[\\\/]+/g,'').replace(/ /g, '\ ')
			let newFolderFile	= this.$darwin ? `${this.state.outPutPath}/${fileName}` : `${this.state.outPutPath}\\${fileName}`
			let finalFile 		= this.state.outMode == 1 ? rawFile : newFolderFile
			
			let _rawFileTemp
			let _finalFileTemp
			let _beforeSuccessTemp
			let _onSuccess 		= (_finalFile, skipped)=>{
				!skipped && _beforeSuccessTemp && _beforeSuccessTemp(_finalFile);
				!skipped && (this.$compress_total++);
				onSuccess && onSuccess(_finalFile);
			}
			if (!this.$darwin) {
				if (this.__contain_chinese(rawFile)) {
					try {
						this.__rmdir(this.$temp_compress_folder)
						fs.ensureDirSync(this.$temp_compress_folder)
	
						let signature 	= Date.now() + "_" + Math.floor( Math.random() * 100000) + '.png';
						_rawFileTemp   	= path.join(this.$temp_compress_folder, '_raw_' + signature)
						_finalFileTemp 	= path.join(this.$temp_compress_folder, '_final_' + signature)
						fs.copyFileSync(rawFile, _rawFileTemp)
						_beforeSuccessTemp = ()=>{
							try {
								fs.copyFileSync(_finalFileTemp, finalFile)
							} catch (error) {}
						}
					} catch (error) {
						_rawFileTemp = _finalFileTemp = _beforeSuccessTemp = null
					}
				}

			}
			let command = `${pngquant} "${_rawFileTemp || rawFile}" --output "${_finalFileTemp || finalFile}" --force --verbose --skip-if-larger`
			command = window._test_command || command
			console.log('MINGXI_DEBUG_LOG>>>>>>>>>command is:',command);
			exec(command, (error, stdout, stderr)=>{
				let skipped = /skipped/i.test(error || '');
				if(error && !skipped) {
					console.log('error: ' + error);
					context.mark(20002, {error})
					let reason;
					if (/cannot decode/.test(error)) {
						reason = '非合法png'
					} else if (/cannot open/.test(error)) {
						reason = '非法路径'
					} else {
						reason = '未知错误'
					}
					console.log('failed reason:',reason)
					onError && onError(reason)
					return;
				}
				console.log('stdout: ' + stdout);
				console.log('stderr: ' + stderr);
				_onSuccess(finalFile, skipped)
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
							try {
								if (!fs.existsSync(finalFile)) {
									let execSync = child_process.execSync;
									execSync(`${this.$darwin ? 'cp' : 'copy'} "${filePath}" "${finalFile}"`)
								}
							} catch (error) {
								console.error("file copy error",finalFile);
							}
							fs.stat(finalFile,(error,stats)=>{
								if(error){
									console.error("file size calc error",finalFile);
									file.fail = '非法输出路径';
								}else{
									file.finalSize = Math.ceil(stats.size / 1024)
								}

								file.done = true;
								let tinyDone = this.state.tinyDone + 1;
								if (tinyDone == this.state.tinyFiles.length) {
									this.__compress_over()
								};
								this.setState({
									tinyDone,
									tinyFiles: [...files]
								})
								__next_one()
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
								this.__compress_over()
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
				<div className='title-icon'></div>
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
							<span className ="icon icon-picture"></span>图片压缩</span>

							<span className ={`nav-group-item ${this.state.homeMajor == this.$home_major_cfg.matter ? 'active' : ''}`} onClick={()=>{
								this.setState({
									homeMajor: this.$home_major_cfg.matter
								})
							}}>
							<span className ="icon icon-droplet"></span>免费素材</span>
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
							<h5 className ="nav-group-title">社区</h5>
							<span className ={`nav-group-item ${this.state.homeMajor == this.$home_major_cfg.connectAuth ? 'active' : ''}`} onClick={()=>{
								this.setState({
									homeMajor: this.$home_major_cfg.connectAuth
								})
							}}>
								<span className ="icon icon-vcard"></span>Cocos研习社
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
		}}>{content}{globalMsg}</div>)
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