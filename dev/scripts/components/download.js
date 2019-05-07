import React from 'react'
import PropTypes from 'prop-types'
import "../../less/download.less"
import net from '../network'
import {remote} from 'electron';
const logger = remote.require('electron-log')
import bridge from '../../../core/MessageBridge'
import {TC_DEBUG, DEBUG, TEST} from "../../../env"

class Download extends React.Component {
	constructor(props) {
		super(props)
		this.$base_frame_url 	= "http://localhost:8080"
		this.$base_course_url 	= "https://lessonsyun.mx0a.com"
		// if (DEBUG) {
		// 	base_url = "http://localhost:8080"
		// } else if (TEST) {
		// 	base_url = "http://bundles.runsnailrun.com"
		// } else {
		// 	base_url = "https://bundles.mw019.com"
		// }
		this.state = {
			title: "",
			percent: 0,
			notice: ""
		}
	}

	componentDidMount() {
		const room   = this.props.data
		const params = {
			room,
			token 	: net.token,
			account	: this.props.user,
		}
		this.__update_base_frame().then(data=>{
			logger.log(`下载基础库成功。版本号：${data.version}`)
			return this.__update_course_bundle(room.en_name)
		}).then(data=>{
			logger.log(`下载课程包成功。课程名：${room.en_name}, 版本号：${data.version}`)
			this.__on_complete(params)
		}).catch(error=>{
			logger.error(error)
			this.__setStatus("UPDATE.ERROR", error.message);
		})
		
	}

	componentWillUnmount() {
	}

	__setStatus(status, message) {
		switch (status) {
			case "UPDATE.BASEFRAME":
			this.setState({ title: "准备下载基础库" })
			break
			case "UPDATE.DOWNLOADING":
			this.setState({ notice: "正在下载，请稍候...", percent: Math.min(1, message.percent) })
			break
			case "UPDATE.ERROR":
			this.setState({ notice: `下载失败，${message}` })
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
		net.getRoomInfo(data.room.channel_id).then((result) => {
			data.students 		= result.students
			data.channel_token	= result.channel_token
			data.features 		= result.features
			this.props.complete(data)
		}, error=>{
			this.props.error(error)
		})
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
					autoUnzip	: true,
					checksum
				}
			}).then((response)=>{
				let identity = response.identity
				bridge.delegate = {
					[`${identity}/progress`] : ({ total, transferred, percent })=>{
						this.__setStatus("UPDATE.DOWNLOADING", {percent});
					},
					[`${identity}/error`] : (error)=>{
						this.__setStatus("UPDATE.ERROR", error.message);
						reject(error)
					},
					[`${identity}/success`] : ()=>{
						this.__setStatus("UPDATE.DOWNLOADED_UI")
						resolve(result)
					}
				}
			}).catch(error=>{
				logger.error(error)
				reject(error)
			})
		})
	}

	__update_base_frame() {
		return new Promise((resolve, reject)=>{
			bridge.call({
				method: "isUpdateAvailable",
				args: {
					url : `${this.$base_frame_url}/liveroom.json`,
					pack: "liveroom"
				}
			}).then(result=>{
				this.__setStatus("UPDATE.BASEFRAME");
				if (result.available) {
					this.__setStatus("UPDATE.DOWNLOADING_UI");
					this.__do_update_bundle({
						pack	: "liveroom", 
						result	: result.server,
						base_url: this.$base_frame_url
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

	__update_course_bundle(lesson) {
		return new Promise((resolve, reject)=>{
			bridge.call({
				method: "isUpdateAvailable",
				args: {
					url : `${this.$base_course_url}/${lesson}.json`,
					pack: "course-ui"
				}
			}).then(result=>{
				this.__setStatus("UPDATE.COURSE_BUNDLE");
				if (result.available) {
					this.__setStatus("UPDATE.DOWNLOADING_UI");
					this.__do_update_bundle({
						pack  	: "course-ui", 
						result	: result.server,
						base_url: this.$base_course_url
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

	render() {
		return (
			<div className="downloader">
				<div className="info">{this.state.title}</div>
				<div className="progress">
					<div className="bar">
						<div className="bar-i" style={{
							width: `${this.state.percent*100}%`
						}}></div>
					</div>
					<div className="percent">{this.state.percent*100>>0}%</div>
				</div>
				<div className="info notice">{this.state.notice}</div>
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