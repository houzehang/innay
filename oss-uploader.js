require("dotenv").config()
const oss = require('ali-oss');
const uploader 	= oss({
	accessKeyId		: process.env.OSS_KEY,
	accessKeySecret	: process.env.OSS_SECRET,
	bucket			: process.env.OSS_BUCKET,
	region			: process.env.OSS_REGION
});
const path = require("path")
const fs   = require("fs")
const uploadFile = process.argv[2]
let uploadName   = process.argv[3]

async function uploadToOSS(name, file) {
	try {
		console.log("upload oss",name, file)
		let result = await uploader.put(name, file);
		return result
	} catch (err) {
		throw err
	}
}

if (uploadFile) {
	(async function exec() {
		if (!fs.existsSync(uploadFile)) {
			console.error("no file exists!")
			process.exit(1)
		}
		if (!uploadName) {
			uploadName = path.basename(uploadFile)
		}
		let result = await uploadToOSS(uploadName, uploadFile)
		if(!result) {
			process.exit(1)
		} else {
			console.log(`upload file ${uploadFile} done!`)
		}
	})()
} else {
	console.error("error method")
	process.exit(1)
}