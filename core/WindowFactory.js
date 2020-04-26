import MenuBuilder from '../menu';
import SystemInfo from "systeminformation"
import Const from '../config/const';
import { PROXY, ASSETS_PATH, WINDOW_ADAPTER } from './Configure'
import { register } from './Eventer'
import { TC_DEBUG, TEST, DEBUG } from '../env';
import { app, BrowserWindow } from 'electron'
import url from 'url'
import path from 'path'
import fs from 'fs-extra'
import mime from 'mime-types'
import bridge from './MessageBridge'
import { EventEmitter } from 'events';
import DomainMgr from './DomainMgr'

export default class WindowFactory {
	constructor(screenSize) {
		this.$screen_size 	= screenSize
		this.$error_page    = '404 Not Found'
		this.__init()
	}

	__init() {
		register("proxy-pass", ({ request, callback })=>{
			let location 	= url.parse(request.url)
			if (location.pathname == "/") {
				location.pathname = "index.html"
			}
			if (/^\/__root__/.test(location.pathname)) {
				const parsed = location.pathname.match(/^\/__root__\/([^/]+?)\/(.+)/)
				if (parsed) {
					location.host 		= parsed[1]
					location.pathname 	= parsed[2]
				}
			}
			const file 		= path.join(ASSETS_PATH, location.host, location.pathname),
				  exist 	= fs.existsSync(file),
				  mimeType  = mime.lookup(location.pathname)
			if (exist) {
				try {
					let data = fs.readFileSync(file)
					callback({ mimeType, data })
				} catch(e) {
					callback({ mimeType, data: Buffer.from(this.$error_page) })
				}
			} else {
				callback({ mimeType, data: Buffer.from(this.$error_page) })
			}
		})
	}

	open({ pack, delegates = {}, data = {}, unique = false, needSystemInfo = false, offHire}) {
		if (unique) {
			BrowserWindow.getAllWindows().forEach(win=>{
				if (win.$$name$$ == pack) {
					win.close()
				}
			})
		}
		const eventer 		= new EventEmitter
		let {width, height} = Const.MAIN_WINDOW_SIZE,
			screenSize 		= this.$screen_size,
			ratio 			= Math.min(screenSize.width/width, screenSize.height/height)
	
		let _window = new BrowserWindow({
			title: "明兮学堂",
			width: width * ratio >> 0, 
			height: height * ratio >> 0,
			resizable: TC_DEBUG,
			center: true,
			autoHideMenuBar: true,
			webPreferences: {
				webSecurity: false
			}
		})
		let userAgent = _window.webContents.getUserAgent(), url
		_window.webContents.setUserAgent(`${userAgent} KCPC v${app.getVersion()} ${pack}`);
		if (DEBUG && WINDOW_ADAPTER[pack]) {
			url = WINDOW_ADAPTER[pack]
			console.log("url",url)
		} else {
			url = `${PROXY}://${pack}${(TEST||DEBUG)?'?env=test':''}`
		}
		// if (pack == "homeworkroom") {
		// 	url = `http://10.1.0.53:8001`
		// }
		_window.loadURL(url)
		if (TC_DEBUG || TEST) {
			const installExtensions = () => {
				const installer = require('electron-devtools-installer');
				const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
				const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];
				extensions.map(name => installer.default(installer[name], forceDownload))
			};
			installExtensions()
			_window.webContents.openDevTools();
		}

		let domainMgr = DomainMgr
		_window.customData = {domainMgr};
		_window.webContents.on('did-finish-load', () => {
			_window.webContents.send('configure', {
				__dirname: path.resolve(__dirname,'..'), 
				__apppath: app.getAppPath(),
				version: app.getVersion(),
				data,
				TC_DEBUG, 
				TEST, 
				DEBUG
			});
			offHire && _window.webContents.send('offHire')
			if (needSystemInfo) {
				SystemInfo.getStaticData((info)=>{
					_window.webContents.send('systeminfo', {
					systeminfo: info
					});
				})
				console.log("send system info")
			}
			eventer.emit("loaded")
		})
		_window.on('crashed', function (event) {
			log.error("main window crashed", event);
			_window.destroy()
			eventer.emit("crashed")
			eventer.emit("closed")
		})
		_window.on('closed', () => {
			for (let key in delegates) {
				console.log("remove delegate for key")
				bridge.removeDelegate(key)
			}
			eventer.emit("closed")
		});
		_window.$$name$$  	= pack
		bridge.delegate   	= delegates
		const menuBuilder 	= new MenuBuilder(_window);
		menuBuilder.buildMenu();
		eventer.window   	= _window
		eventer.sendMessage = (...args)=>{
			_window.webContents.send(...args)
		}
		process.nextTick(()=>{
			eventer.emit("start")
		})
		return eventer
	}
}