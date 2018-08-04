const log = require('electron-log');

class Reporter {
	constructor() {
		this.$logpath = log.transports.file.findLogPath("kecheng-pc")
	}
}

module.exports = new Reporter