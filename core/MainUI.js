import MenuBuilder from '../menu';
import SystemInfo from "systeminformation"
import Const from '../config/const';
import { PROXY, ASSETS_PATH } from './Configure'
import { register } from './Eventer'
import { TC_DEBUG, TEST, DEBUG } from '../env';
import { app, BrowserWindow } from 'electron'
import url from 'url'
import path from 'path'
import fs from 'fs-extra'
import mime from 'mime-types'

export default class MainUI {
	constructor(screenSize, pack) {
		this.$screen_size 	= screenSize
		this.$pack 			= pack
		this.$error_page    = '<h1>404 Not Found</h1>'
		this.__init()
	}

	__init() {
		register("proxy-pass", ({ request, callback })=>{
			let location 	= url.parse(request.url)
			if (location.pathname == "/") {
				location.pathname = "index.html"
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

	open() {
		let {width, height} = Const.MAIN_WINDOW_SIZE,
			screenSize 		= this.$screen_size,
			ratio 			= Math.min(screenSize.width/width, screenSize.height/height)
	
		let mainWindow = new BrowserWindow({
			width: width * ratio >> 0, 
			height: height * ratio >> 0,
			resizable: TC_DEBUG,
			center: true,
			autoHideMenuBar: true
		})
		let userAgent = mainWindow.webContents.getUserAgent()
		mainWindow.webContents.setUserAgent(`${userAgent} KCPC v${app.getVersion()}`);
		let url = DEBUG ? "http://localhost:3030" : `${PROXY}://${this.$pack}`
		mainWindow.loadURL(url)
		if (TC_DEBUG || TEST) {
			const installExtensions = () => {
				const installer = require('electron-devtools-installer');
				const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
				const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];
				extensions.map(name => installer.default(installer[name], forceDownload))
			};
			installExtensions()
			mainWindow.webContents.openDevTools();
		}
		mainWindow.webContents.on('did-finish-load', () => {
			mainWindow.webContents.send('configure', {
				__dirname: path.resolve(__dirname,'..'), __apppath: app.getAppPath(),
				version: app.getVersion()
			});
			
			SystemInfo.getStaticData((info)=>{
				mainWindow.webContents.send('systeminfo', {
				   systeminfo: info
				});
			})
		})
		mainWindow.on('crashed', function (event) {
			log.error("main window crashed", event);
			createMainWindow()
			mainWindow.destroy()
		})
		const menuBuilder = new MenuBuilder(mainWindow);
		menuBuilder.buildMenu();
	}
}