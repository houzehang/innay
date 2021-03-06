import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import IN_RENDER from 'is-electron-renderer'
import * as electron from 'electron';

const STORE_KEY = 'MINGXI-INC';

class DB {
	constructor() {
		let app
		if (IN_RENDER) {
			app = electron.remote.app
		} else {
			app = electron.app
		}
		// const adapter = new FileSync(`${app.getPath('userData')}/db.json`);
		// this.$db = lowdb(adapter);
	}
	get(key) {
		let value = this.$db.get(STORE_KEY).cloneDeep().value()
		if (value) {
			return value[key]
		}
	}
	store(key, value) {
		let data = this.$db.get(STORE_KEY).value() || {}
		data[key] = value;
		this.$db.set(STORE_KEY, {...data}).write();
	}
	remove(key) {
		let data = this.$db.get(STORE_KEY).value()
		if (data && data[key]) {
			delete data[key];
			this.$db.set(STORE_KEY, {...data}).write();
		}
	}
	clear() {
		this.$db.unset(STORE_KEY).write();
	}
	update() {
		this.$db.read()
	}
}
export default new DB