const path = require('path')
const {ipcMain,app} = require('electron');
const log = require('electron-log');
const {DEBUG}   = require('./env.js');

class StaticServer {
	constructor(entity) {
		this.$downloading 	= false
		this.$down_queue 	= []
		this.$entity 		= entity
		this.$loaded 		= {}
		if (DEBUG) {
			this.$dir = path.join(app.getAppPath(),'downloads');
		} else {
			this.$dir = path.join(app.getAppPath(), '..', 'downloads');
		}
		log.log("download dir",this.$dir);
		ipcMain.on("DOWNLOAD", (event, url)=>{
			console.log("on download message", url)
			log.log("on download message",url);
			this.__download(url)
		})
		this.$entity.webContents.session.on("will-download", (event, item, webContents)=>{
			let file = path.join(this.$dir,item.getFilename())
			log.log("will download",file);
			item.setSavePath(file)
			item.on("updated", (event, state)=>{
				if (state === 'interrupted') {
					log.log("Download is interrupted but can be resumed");
					console.log('Download is interrupted but can be resumed')
				} else if (state === 'progressing') {
					if (item.isPaused()) {
						log.log("Download is paused");
						console.log('Download is paused')
					} else {
						log.log(`Received bytes: ${item.getReceivedBytes()},${item.getTotalBytes()}`);
						console.log(`Received bytes: ${item.getReceivedBytes()},${item.getTotalBytes()}`)
					}
				}
			})
			item.once('done', (event, state)=>{
				this.$downloading = false
				let url = item.getURL()
				if (state === 'completed') {
					log.log('Download successfully',file,item.getURL());
					console.log('Download successfully',file,item.getURL())
					this.$loaded[url] = file
					this.$entity.webContents.send('DOWNLOADED', url, file);
					this.__download()
				} else {
					log.log(`Download failed: ${state}`);
					console.log(`Download failed: ${state}`)
					this.__download(url)
				}
			})
		})
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
			this.__download()
			return
		}
		if (url) {
			this.$downloading = true
			this.$entity.webContents.downloadURL(url)
		}
	}
}

module.exports = StaticServer