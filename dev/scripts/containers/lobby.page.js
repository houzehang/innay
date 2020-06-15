import React from 'react';
import { connect } from 'react-redux'
import GlobalMsg from '../components/globalMsg'
import "../../less/lobby.less"
import * as types from '../constants/ActionTypes'
import Toast from './toast'
import { 
	confirm, alert, hide,
	showLoading,
	hideLoading,
	onShowGlobalMsg,
	onShowTost
} from '../actions'
import {remote, ipcRenderer, dialog} from 'electron'

class Main extends React.Component {
	constructor(props) {
		super(props)
		this.$home_major_cfg = {
			tiny: 1,
			localserver: 2
		}

		this.state = {
			selectedPage: 0,
			homeMajor: this.$home_major_cfg.tiny,
			tinyFiles: [],
			tinyDone: 0,
			outPutPath: '',
			outMode: 1
		}
	}

	componentDidMount() {  
	}

	componentWillUnmount() {
	}

	__home_major(){
		let result = '';
		switch (this.state.homeMajor) {
			case this.$home_major_cfg.tiny:
				result = this.__home_major_tinypng()
				break;
			case this.$home_major_cfg.localserver:
				result = this.__home_major_localserver()
				break;
			default:
				result = this.__home_major_tinypng()
				break;
		}
		return result
	}

	__select_output_path(callback){
		remote.dialog.showOpenDialog(remote.getCurrentWindow(),{
		    properties: ['openDirectory','createDirectory']
		}, (files) => {
			if (files && files.length) {
				this.setState({
					outPutPath: files[0]
				}) 
				callback && callback()
			}
		})
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
				files && files.length && files.map((filePath)=>{
					let fs = $require("fs");
					fs.stat(filePath,(error,stats)=>{
						if(error){
							console.log("file size calc error",filePath);
						}else{
							tinyFiles.push({
								path : filePath,
								size : (stats.size / 1024) | 0
							})
							this.setState({
								tinyFiles
							})
						}
					})
				})
			})
	}

	__home_major_tinypng(){
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
						let done = 0
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
								<td width="10%">{`${fileItem.size > 1024 ? (fileItem.size / 1024).toFixed(2) : fileItem.size}${fileItem.size > 1024 ? "M" : "KB"}`}</td>
								<td width="20%" className="progress">
									<div className="progress-bar back"></div>
									<div className={`progress-bar ${done ? 'done' : ''}`}></div>
									<span className="progress-num">{done ? 100 : 0}%</span>
								</td>
								<td width="10%">-</td>
								<td>-</td>
							</tr>
						return content;
					}) : <tr></tr>}
				</tbody>
			</table>
			{this.state.tinyFiles.length ? "" : <div className="empty">未导入任何文件</div>}
			<footer className="toolbar toolbar-footer fixed-bottom">
				<div className="toolbar-actions">
					<button className="btn btn-default" onClick={()=>{
						this.__import_files()
					}}>
					导入文件
					</button>

					<button className="btn btn-default" onClick={()=>{
						this.__import_files_from_folder()
					}}>
					导入文件夹
					</button>
				</div>
				<div className="radio" onClick={(e)=>{
					if (e.target.tagName === "INPUT") return
					this.setState({
						outMode: 1
					})
				}}>
					<label>
					<input type="radio" name="radios" defaultChecked={`${this.state.outMode == 1 ? "checked" : ""}`}/>
					覆盖原图
					</label>
				</div>
				<div className="radio" onClick={(e)=>{
					if (e.target.tagName === "INPUT") return
					if (!this.state.outPutPath) {
						this.__select_output_path(()=>{
							this.setState({
								outMode: 2
							})
						})
					} else {
						this.setState({
							outMode: 2
						})

					}
				}}>
					<label>
					<input type="radio" name="radios" defaultChecked={`${this.state.outMode == 2 ? "checked" : ""}`}/>
					自定义输出路径
					</label>
				</div>
				<input className={`form-control ${this.state.outMode == 2 ? "": "gray"}`} type="text" placeholder="未选择输出目录" value={this.state.outPutPath} disabled="disabled"/>
				<div className="toolbar-actions">
					<button className="btn btn-default" onClick={()=>{
						this.__select_output_path()
					}}>
					选择
					</button>
				</div>
				<div className="status"><span>{`已完成：${this.state.tinyDone}/${this.state.tinyFiles.length}`}</span></div>
				<div className="toolbar-actions">
					<button className="btn btn-primary">
					开始
					</button>
					<button className="btn btn-default" onClick={()=>{
						this.setState({
							tinyFiles: []
						})
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

	render() {
        let globalMsg;
		if (this.props.globalMsg) {
			globalMsg = <GlobalMsg></GlobalMsg>
		}
		let selectedPage = this.state.selectedPage
        let content = 
		<div className ="window">
			{/* 上部分 */}
			<header className ="toolbar toolbar-header">
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
					<button className = {`btn btn-default ${selectedPage == 0 ? "active": ""}`} onClick={()=>{
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
					</button>
					</div>
					<button className ="btn btn-default">
					<span className ="icon icon-home icon-text"></span>
					Filters
					</button>
		
				</div>
			</header>
			{/* 下部分 */}
			<div className ="window-content">
				<div className ="pane-group">
					{/* 左侧导航 */}
					<div className ="pane pane-sm sidebar">
						<nav className ="nav-group">
							<h5 className ="nav-group-title">开发必备</h5>
							<span className ={`nav-group-item ${this.state.homeMajor == this.$home_major_cfg.tiny ? 'active' : ''}`} onClick={()=>{
								this.setState({
									homeMajor: this.$home_major_cfg.tiny
								})
							}}>
								<span className ="icon icon-picture"></span>无损压图
							</span>
							<span className ={`nav-group-item ${this.state.homeMajor == this.$home_major_cfg.localserver ? 'active' : ''}`} onClick={()=>{
								this.setState({
									homeMajor: this.$home_major_cfg.localserver
								})
							}}>
								<span className ="icon icon-rss"></span>本地服务
							</span>
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