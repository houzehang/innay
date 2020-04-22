import React from 'react'
import PropTypes from 'prop-types'
import "../../less/download.less"
import net from '../network'
import {remote} from 'electron';
const logger = remote.require('electron-log')
import bridge from '../../../core/MessageBridge'
import DomainUtil from '../utils/DomainUtil'
class Download extends React.Component {
	constructor(props) {
		super(props)
		
		this.$downloading = null
		this.state = {
			title: "准备更新基础库...",
			percent: 0,
			notice: ""
		}
		this.$domain_course = DomainUtil.availibleDomain('course');
		console.log('MINGXI_DEBUG_LOG>>>>>>>>>init download','');
	}

	__start(retry) {
		const room   		= this.props.data
		const recording 	= this.props.recording
		const camp			= this.props.camp
		const homework  	= this.props.homework
		const preview 		= this.props.preview
		const baseFrameUrl 	= DomainUtil.availibleDomain('frame',retry)
		if (!baseFrameUrl) {
			this.__setStatus("UPDATE.ERROR",new Error('检测基础库出错，无可用域名'))
			return
		}
		const params = {
			room,
			token 	: net.token,
			account	: this.props.user,
		}
		let stepForward = false
		if (homework) {
			this.__update_homework_frame(baseFrameUrl).then(data=>{
				logger.log(`下载作业资源成功。版本号：${data.version} 资源库下载地址：${baseFrameUrl}`)
				this.props.complete(params)
			}).catch(error=>{
				logger.error("检测作业资源出错", error, `下载地址：${baseFrameUrl}/homework.json`)
				this.__setStatus("UPDATE.ERROR", error);
				this.__start(true)
			})
		} else if (preview) {
			this.__update_base_frame(baseFrameUrl).then(data=>{
				logger.log(`下载基础库成功。版本号：${data.version} 基础库下载地址：${baseFrameUrl}`)
				let lesson = room.prepare_name
				stepForward = true
				return this.__update_preview_bundle(lesson)
			}).then(data=>{
				logger.log(`下载预习课程包成功。课程名：${room.prepare_name}, 版本号：${data.version}`)
				this.__on_complete(params)
			}).catch(error=>{
				this.__setStatus("UPDATE.ERROR", error);
				if (!stepForward) {
					logger.error("检测基础库出错", error, `基础库下载地址：${baseFrameUrl}/liveroom.json 预习课程包:${room.prepare_name}.json`)
					this.__start(true)
				} else {
					logger.error("检测预习课程包出错", error)
				}
			})
		} else {
			this.__update_base_frame(baseFrameUrl).then(data=>{
				logger.log(`下载基础库成功。版本号：${data.version} 基础库下载地址：${baseFrameUrl}`)
				let lesson = room.en_name
				if (recording && !camp) lesson = lesson + `.${room.version}`.replace('..','.')
				stepForward = true
				return this.__update_course_bundle(lesson)
			}).then(data=>{
				logger.log(`下载课程包成功。课程名：${room.en_name}, 版本号：${data.version}`)
				this.__on_complete(params)
			}).catch(error=>{
				this.__setStatus("UPDATE.ERROR", error);
				if (!stepForward) {
					logger.error("检测基础库出错", error, `基础库下载地址：${baseFrameUrl}/liveroom.json 课程包：${room.en_name}.json`)
					this.__start(true)
				} else {
					logger.error("检测课程包出错", error)
				}
			})
		}
	}

	__restart() {
		this.setState({
			title: "准备更新基础库...",
			percent: 0,
			notice: "",
			error: null
		})
		this.__start()
	}

	componentDidMount() {
		this.__start()
	}

	componentWillUnmount() {
		this.$unmounted = true
		if (this.$downloading) {
			bridge.call({
				method: "abortDownloadTask",
				args  : {identity: this.$downloading}
			}).then(()=>{
				logger.log("中止任务成功", this.$downloading)
			}).catch(error=>{
				logger.error("中止任务失败", this.$downloading, error)
			})
		}
	}

	__setStatus(status, message) {
		if (this.$unmounted) return
		this.setState({ error: null })
		switch (status) {
			case "UPDATE.BASEFRAME":
			this.setState({ title: "准备下载基础库" })
			break
			case "UPDATE.DOWNLOADING":
			this.setState({ notice: "正在下载，请稍候...", percent: Math.min(1, message.percent) })
			break
			case "UPDATE.ERROR":
			this.setState({ error: `下载失败，${message}` })
			break
			case "UPDATE.DOWNLOADED_UI":
			this.setState({ notice: "下载成功！", percent: 1 })
			break
			case "UPDATE.DOWNLOADING_UI":
			this.setState({ notice: "有版本更新，等待下载...", percent: 0 })
			break
			case "UPDATE.LASTEST":
			this.setState({ notice: "已是最新版本，无需更新。", percent: 1 })
			break
			case "UPDATE.COURSE_BUNDLE":
			this.setState({ title: "准备下载课程包" })
			break
		}
	}

	__on_complete(data) {
		let recording = this.props.recording;
		let camp 	  = this.props.camp;
		let preview   = this.props.preview;
		if (recording) {
			if (camp) {
				data.recording = true;
				data.camp 	   = true;
				this.props.complete(data)
			}else{
				net.getRoomInfoForRecord(data.room.channel_id).then((result)=>{				
					data.students 		= result.students
					data.recording 		= recording
					this.props.complete(data)
				}, error=>{
					this.props.error(error)
				})
			}
		}else{
			net.getRoomInfo(data.room.channel_id, preview).then((result) => {
				data.students 				= result.students
				data.channel_token			= result.channel_token
				data.rtm_signaling_token 	= result.rtm_signaling_token
				data.features 				= result.features
				data.star_switch 			= result.star_switch
				data.eye_switch 			= result.eye_switch
				this.props.complete(data)
			}, error=>{
				this.props.error(error)
			})
		}
	}

	__do_update_bundle({pack, result, base_url = this.$base_url, checksum = true}) {
		return new Promise((resolve, reject)=>{
			bridge.call({
				method: "startDownloadTask", 
				args: {
					pack, 
					url			: `${base_url}/${result.url}`, 
					md5			: result.md5,
					version		: result.version,
					key  		: result.lesson,
					autoUnzip	: true,
					checksum
				}
			}).then((response)=>{
				let identity = response.identity
				this.$downloading = identity
				bridge.delegate = {
					[`${identity}/progress`] : ({ total, transferred, percent })=>{
						this.__setStatus("UPDATE.DOWNLOADING", {percent});
					},
					[`${identity}/error`] : (error)=>{
						this.$downloading = null
						this.__setStatus("UPDATE.ERROR", error.message);
						reject(error)
					},
					[`${identity}/success`] : ()=>{
						this.$downloading = null
						this.__setStatus("UPDATE.DOWNLOADED_UI")
						resolve(result)
					}
				}
			}).catch(error=>{
				this.$downloading = null
				logger.error("下载文件出错", pack, error)
				reject(error)
			})
		})
	}

	__update_homework_frame(baseFrameUrl) {
		return new Promise((resolve, reject)=>{
			bridge.call({
				method: "isUpdateAvailable",
				args: {
					url : `${baseFrameUrl}/homework.json`,
					pack: "homeworkroom"
				}
			}).then(result=>{
				this.__setStatus("UPDATE.BASEFRAME");
				if (result.available) {
					this.__setStatus("UPDATE.DOWNLOADING_UI");
					this.__do_update_bundle({
						pack	: "homeworkroom", 
						result	: result.server,
						base_url: baseFrameUrl
					}).then(data=>{
						resolve(data)
					}).catch(error=>{
						reject(error)
					})
				} else {
					this.__setStatus("UPDATE.LASTEST");
					resolve(result.server)
				}
			}).catch(err=>{
				reject(err)
			})
		})
	}

	__update_base_frame(baseFrameUrl) {
		return new Promise((resolve, reject)=>{
			bridge.call({
				method: "isUpdateAvailable",
				args: {
					url : `${baseFrameUrl}/liveroom.json`,
					pack: "liveroom"
				}
			}).then(result=>{
				this.__setStatus("UPDATE.BASEFRAME");
				if (result.available) {
					this.__setStatus("UPDATE.DOWNLOADING_UI");
					this.__do_update_bundle({
						pack	: "liveroom", 
						result	: result.server,
						base_url: baseFrameUrl
					}).then(data=>{
						resolve(data)
					}).catch(error=>{
						reject(error)
					})
				} else {
					this.__setStatus("UPDATE.LASTEST");
					resolve(result.server)
				}
			}).catch(err=>{
				reject(err)
			})
		})
	}

	__update_preview_bundle(lesson) {
		return new Promise((resolve, reject)=>{
			bridge.call({
				method: "getLocalInstalledVersion",
				args: {
					pack: "preview-ui"
				}
			}).then((localInfo)=>{
				
				let __downloadPackage = (retry)=>{
					let baseCourseUrl = DomainUtil.availibleDomain('course', retry)
					if (!baseCourseUrl) {
						let errorMessage = `no avalible domain for course-preview[${lesson}] retrying`
						logger.log('[debug-domain] errorMessage', errorMessage)
						reject(new Error(errorMessage))
						return
					}
					bridge.call({
						method: "getServerPackageVersion",
						args: {
							url : `${baseCourseUrl}/${lesson}.json`,
						}
					}).then((serverInfo)=>{
						this.__setStatus("UPDATE.COURSE_BUNDLE");
						serverInfo = serverInfo || {}
						if (!localInfo||
							localInfo.key != serverInfo.lesson ||
							localInfo.md5 != serverInfo.md5) {
							this.__setStatus("UPDATE.DOWNLOADING_UI");
							this.__do_update_bundle({
								pack  	: "preview-ui", 
								result	: serverInfo,
								base_url: baseCourseUrl
							}).then(data=>{
								resolve(data)
							}).catch(error=>{
								reject(error)
							})
						}else{
							this.__setStatus("UPDATE.LASTEST");
							resolve(serverInfo)
						}
					}).catch(err=>{
						__downloadPackage(true)
					})
				}
				__downloadPackage()
				
			}).catch(err=>{
				reject(err)
			})
		})
	}

	__update_course_bundle(lesson) {
		return new Promise((resolve, reject)=>{
			bridge.call({
				method: "getLocalInstalledVersion",
				args: {
					pack: "course-ui"
				}
			}).then((localInfo)=>{
				let __downloadPackage = (retry)=>{
					let baseCourseUrl = DomainUtil.availibleDomain('course', retry)
					if (!baseCourseUrl) {
						let errorMessage = 'no avalible domain for course retrying'
						logger.log('[debug-domain] errorMessage', errorMessage)
						reject(new Error(errorMessage))
						return
					}
					bridge.call({
						method: "getServerPackageVersion",
						args: {
							url : `${baseCourseUrl}/${lesson}.json`,
						}
					}).then((serverInfo)=>{
						this.__setStatus("UPDATE.COURSE_BUNDLE");
						serverInfo = serverInfo || {}
						if (!localInfo||
							localInfo.key != serverInfo.lesson ||
							localInfo.md5 != serverInfo.md5) {
							this.__setStatus("UPDATE.DOWNLOADING_UI");
							this.__do_update_bundle({
								pack  	: "course-ui", 
								result	: serverInfo,
								base_url: baseCourseUrl
							}).then(data=>{
								resolve(data)
							}).catch(error=>{
								reject(error)
							})
						}else{
							this.__setStatus("UPDATE.LASTEST");
							resolve(serverInfo)
						}
					}).catch(err=>{
						__downloadPackage(true)
					})
				}
				__downloadPackage()
				
			}).catch(err=>{
				reject(err)
			})
		})
	}


	render() {
		return (
			<div className="downloader">
				<div className="info">{this.state.title}</div>
				{this.state.error?[
					<div className="info notice" key="notice">{this.state.error}</div>,
					<div className="restart-btn" key="restart" onClick={()=>{
						this.__restart()
					}}></div>
				]:[
					<div className="progress" key="progress">
						<div className="bar">
							<div className="bar-i" style={{
								width: `${this.state.percent*100}%`
							}}></div>
						</div>
						<div className="percent">{this.state.percent*100>>0}%</div>
					</div>,
					<div className="info notice" key="notice">{this.state.notice}</div>
				]}
			</div>
		)
	}
}

Download.propTypes = {
	data: PropTypes.object.isRequired,
	complete: PropTypes.func.isRequired,
	error: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
}

export default Download