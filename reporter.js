const log = require('electron-log');
const request = require('request')
const fs = require('fs')

class Reporter {
	constructor() {
		this.$logpath 		= log.transports.file.findLogPath("kecheng-pc")
		this.$user_id 		= 0
		this.$channel_id 	= ""
		this.report(true)
	}

	set user(id) {
		this.$user_id = id
	}

	set channel(id) {
		this.$channel_id = id
	}

	_f(num) {
		return num<=9?("0"+num):num
	}

	write(data) {
		log.info("runtime:",data);
	}

	report(onlyToday) {
		let content = fs.readFileSync(this.$logpath,"utf8")
		if (onlyToday) {
			let now = new Date(), result = []
			let str = `[${now.getFullYear()}-${this._f(now.getMonth()+1)}-${this._f(now.getDate())}` 
			content = content.split("\n")
			content.forEach((line)=>{
				if (line.indexOf(str) != -1) {
					result.push(line)
				}
			})
			content = result.join("\n")
		}
		let data = {
			str: content,
			channel_id: "",
			user_id: "" 
		}
		this.__request(data)
	}

	__request(data) {
		request({
			url: "https://kecheng1.runsnailrun.com/api/write_log_file",
			method: "POST",
			json: true,
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data)
		}, function(error, response) {
			console.log(error, response)
			if (!error && response.statusCode == 200) {
			}
		}); 
	}
}

module.exports = new Reporter