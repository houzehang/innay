import { TC_DEBUG } from '../env.js';
import { BrowserWindow } from 'electron';
import bridge from './MessageBridge'
import { EventEmitter } from 'events';
import * as PackageManager from './PackageManager'
export default class Updater extends EventEmitter {
	constructor(dirname) {
		super()
		this.$dirname = dirname
	}

	start() {
		let updateWindow = new BrowserWindow({
			width: 600, height: 300,
			resizable: false,
			center: true,
			frame: false,
			autoHideMenuBar: true
		});
		if (TC_DEBUG) {
			updateWindow.webContents.openDevTools();
		}
		updateWindow.on('closed', () => {
			updateWindow = null;
		});
		updateWindow.loadURL(`file://${this.$dirname}/dist/index.html`);
		this.$update_window = updateWindow
		bridge.delegate = PackageManager
		bridge.delegate = { openMainWindow: async (pack)=>{
			this.emit("open-main-window", pack)
		} }
		this.$window = updateWindow
	}

	close() {
		if (this.$window) {
			this.$window.close()
		}
	}
}