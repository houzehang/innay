import { TC_DEBUG } from '../env.js';
import { BrowserWindow } from 'electron';
import bridge from './MessageBridge'
import * as PackageManager from './PackageManager'
class Updater {
	constructor(dirname) {
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
		bridge.delegate = { openMainWindow: async ()=>{
			
		} }
	}
}

export default Updater