import { TC_DEBUG } from '../env.js';
import { BrowserWindow, ipcMain } from 'electron';
import messageBridge from './MessageBridge'
import { getServerPackageVersion,getLocalPackageVersion } from './PackageManager'
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
		messageBridge.init(updateWindow.webContents, ipcMain, {
			getServerPackageVersion,
			getLocalPackageVersion
		})
	}
}

export default Updater