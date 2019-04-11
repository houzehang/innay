import got from 'got'
import logger from 'electron-log'
import bridge from './MessageBridge'
import { PACKAGE_PATH, ASSETS_PATH, INSTALLED_META_FILE, PACKAGE_META_FILE } from './Configure'
import { EventEmitter } from 'events';

class Task extends EventEmitter {
	constructor({ pack, url, version, hash }) {
		super()
		this.$pack 		= pack
		this.$url  		= url
		this.$version 	= version
		this.$hash  	= hash
	}

	__init() {
		try {
			got(this.$url, {
				encoding: null, timeout: { socket: 60000 }
			})
		} catch(e) {
			
		}
	}
}

class TaskManager {
	constructor() {

	}


}

export default new TaskManager
