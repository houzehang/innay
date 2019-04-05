import path from 'path'
import fs from 'fs'
import {ipcMain,app} from 'electron';
import log from 'electron-log';
import {DEBUG} from './env.js';

class StaticServer {
	constructor(entity) {
		this.$downloading 	= false
		this.$down_queue 	= []
		this.$entity 		= entity
		this.$loaded 		= {}
		this.$dir = path.join(app.getPath("userData"),"class_sounds");
		this.__clearCache()
		log.log("download dir",this.$dir);
		ipcMain.on("DOWNLOAD", (event, url)=>{
			if (!url) return
			this.__log("on download message",url);
			this.__download(url)
		})
		this.$entity.webContents.session.on("will-download", (event, item, webContents)=>{
			let file = path.join(this.$dir,item.getFilename())
			this.__log("will download",file);
			item.setSavePath(file)
			item.on("updated", (event, state)=>{
				if (state === 'interrupted') {
					this.__log("Download is interrupted but can be resumed")
				} else if (state === 'progressing') {
					if (item.isPaused()) {
						this.__log("Download is paused")
					}
				}
			})
			item.once('done', (event, state)=>{
				this.$downloading = false
				let url = item.getURL()
				if (state === 'completed') {
					this.__log('Download successfully',file,item.getURL())
					this.$loaded[url] = file
					this.$entity.webContents.send('DOWNLOADED', url, file);
					this.__download()
				} else {
					this.__log(`Download failed: ${state}`)
					this.$entity.webContents.send('DOWNLOADERROR', url);
					this.__download()
				}
			})
		})
	}

	__clearCache () {
		this.__log("clear cache..")
		let files = [], dir = this.$dir
		if (fs.existsSync(dir)) {
			files = fs.readdirSync(dir)
			files.forEach((file)=>{
				let curPath = path.join(dir, file)
				if (/\.mp3/.test(curPath)) {
					fs.unlinkSync(curPath)
				}
			})
		}
	};

	__log(...params) {
		log.log(...params);
		console.log(...params)
	}

	__download(url) {
		if (url) {
			this.$down_queue.push(url)
		}
		if (this.$downloading) {
			return
		}
		url = this.$down_queue.shift()
		if (this.$loaded[url]) {
			this.$entity.webContents.send('DOWNLOADED', url, this.$loaded[url]);
			this.__download()
			return
		}
		if (url) {
			// 判断本地硬盘是否存在文件
			let name = url.match(/([^\/]+)$/)
			if (name) {
				let file = path.join(this.$dir,name[1])
				if (fs.existsSync(file)) {
					this.$loaded[url] = file
					this.$entity.webContents.send('DOWNLOADED', url, this.$loaded[url]);
					this.__download()
					return
				}
			}
			this.$downloading = true
			this.$entity.webContents.downloadURL(url)
		}
	}
}

export default StaticServer