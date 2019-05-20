import { DEBUG } from '../env.js';
import { BrowserWindow } from 'electron';
import bridge from './MessageBridge'
import { EventEmitter } from 'events';
import MenuBuilder from '../menu';
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
		updateWindow.on('closed', () => {
			console.log("remove delegate openMainWindow")
			bridge.removeDelegate("openMainWindow")
			updateWindow = null;
		});
		let url = DEBUG ? "http://localhost:3031" : `file://${this.$dirname}/dist/index.html`
		updateWindow.loadURL(url);
		this.$update_window = updateWindow
		bridge.delegate = { 
			openMainWindow: async (pack)=>{
				this.emit("open-main-window", pack)
			}
		}
		const menuBuilder = new MenuBuilder(updateWindow);
		menuBuilder.buildMenu();
		this.$window = updateWindow
	}

	close() {
		if (this.$window) {
			this.$window.close()
		}
	}
}