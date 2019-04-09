import { TC_DEBUG } from '../env.js';
import { BrowserWindow, ipcMain, app } from 'electron';

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
		ipcMain.on("render.complete", (event, count)=>{
			ipcMain.removeAllListeners("render.complete")
			console.log("render complete", count)
			event.returnValue = {a:10,b:20}
		})
	}
}

export default Updater