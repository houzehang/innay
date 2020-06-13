const fs 		= require("fs")
const path 		= require("path")
const shell 	= require("shelljs")
const lesson 	= process.argv[2]
const walk 		= require('walk')
const semver 	= require('semver')
var oss 		= require('ali-oss');
var urlExists 	= require('url-exists');
const got 		= require("got")
var repairMode  = lesson == "all" || (process.argv[3] == "repair")
require("dotenv").config()
var uploader 	= oss({
	accessKeyId		: process.env.OSS_KEY,
	accessKeySecret	: process.env.OSS_SECRET,
	bucket			: process.env.OSS_BUCKET,
	region			: process.env.OSS_REGION,
	timeout			: 180000
});

function getJson(file, nullValue={}) {
	try {
		return JSON.parse(fs.readFileSync(file, "utf8"))
	} catch(e) {
		return nullValue
	}
}
	
async function uploadToOSS(name, file) {
	try {
		console.log("upload oss",name, file)
		let result = await uploader.put(name, file);
		return result
	} catch (err) {
		throw err
	}
}
async function deploy(lesson) {
	const descriptor = path.join(__dirname, `${lesson}.json`),
		  zipfile    = path.join(__dirname, `${lesson}.zip`)
	if (!fs.existsSync(zipfile)) {
		console.log("invalide file", lesson)
		return
	}
	let rollbackFn, clearFn
	let info = getJson(descriptor)
	if (!info.version) {
		// meta文件不存在，则新创建
		info.version = "1.0.0"
		fs.writeFileSync(descriptor,JSON.stringify(info),"utf8")
		rollbackFn = ()=>{
			delete info.version
			fs.writeFileSync(descriptor,JSON.stringify(info),"utf8")
		}
	} else {
		if (!repairMode) {
			let old = fs.readFileSync(descriptor, "utf8")
			info.version = semver.inc(info.version, "patch")
			fs.writeFileSync(descriptor, JSON.stringify(info), "utf8")
			rollbackFn = ()=>{
				fs.writeFileSync(descriptor, old, "utf8")
			}
		}
	}
	if (info.version && info.md5) {
		// 生成本地version json文件
		let data = { version: info.version, md5: info.md5, url: `${lesson}.${info.md5}.zip` }
		let versionJson = path.join(__dirname, `${lesson}.${info.version}.json`)
		fs.writeFileSync(versionJson, JSON.stringify(data), "utf8")
		clearFn = ()=>{
			fs.unlinkSync(versionJson)
		}
		// 生成zip包，上传oss
		let lessonZip   = path.join(__dirname, `${lesson}.zip`),
			zipName 	= `${lesson}.${info.md5}.zip`
		return await uploadToOSS(path.basename(versionJson), versionJson).then((result)=>{
			console.log("uploaded version json file",result.name, result.url)
			return uploadToOSS(`${lesson}.json`, descriptor)
		}).then((result)=>{
			console.log("uploaded json file",result.name, result.url)
			return uploadToOSS(zipName, lessonZip)
		}).then((result)=>{
			console.log("uploaded version zip file",result.name, result.url)
			return uploadToOSS(`${lesson}.zip`, lessonZip)
		}).then((result)=>{
			clearFn()
			console.log("uploaded zip file",result.name, result.url)
		}).catch(err=>{
			console.error("deploy failed", err)
			rollbackFn()
			clearFn()
			throw err
		}) 
	}

}
function updateGit(complete) {
	// console.log('git pulling...')
	// if (shell.exec('git pull').code == 0) {
		complete()
	// } else {
	// 	console.error("update git failed")
	// }
}
function commitGit(complete) {
	if (shell.exec('git add -A').code == 0 && shell.exec(`git commit -m"auto deploy for ${lesson}"`).code == 0) {
		complete()
	} else {
		console.error("update git failed")
	}
}
function pushGit(complete) {
	if (shell.exec(`git push`).code == 0) {
		complete()
	} else {
		console.error("push git failed")
	}
}
if (lesson) {
	updateGit(async ()=>{
		try {
			await deploy(lesson)
			if (!repairMode) {
				commitGit(()=>{
					console.log("commit git complete.")
					pushGit(()=>{
						console.log("push git complete.")
						console.log(`deploy ${lesson} done.`)
					})
				})
			}
		} catch(e) {
			console.error(e)
			return
		}
	})
} else {
	console.log("usage node deploy.js [all|lesson]")
}