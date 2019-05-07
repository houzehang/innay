const shell 	= require("shelljs")
const archiver 	= require('archiver')
const del 		= require('del')
const md5File 	= require('md5-file')
const fs 		= require('fs')
const path 		= require('path')
require("dotenv").config()
function makeBundle() {
	return new Promise((resolve, reject)=>{
		const zipFile = path.resolve(__dirname, "app.zip")
		var output = fs.createWriteStream(zipFile);
		var archive = archiver('zip', {
			zlib: { level: 9 } 
		});
		output.on('close', function() {
			resolve(zipFile)
		});
		output.on('end', function() {
			console.log('Data has been drained');
		});
		
		archive.on('warning', function(err) {
			if (err.code === 'ENOENT') {
				console.error(err);
				reject()
			} else {
				console.error(err);
			}
		});
		archive.on('error', function(err) {
			console.error(err);
			reject()
		});
		
		archive.pipe(output);
		archive.directory(path.resolve(__dirname, 'app'), false);
		archive.finalize();
	})
}
console.log("step 1: create bundle")
makeBundle().then((zipfile)=>{
	console.log("step 2: create md5")
	md5File(zipfile, (err, hash) => {
		if (err) throw err
		const jsonFile = path.join(__dirname,"app.json")
		let info
		if (fs.existsSync(jsonFile)) {
			info = JSON.parse(fs.readFileSync(jsonFile, "utf8"))
			info.hash = hash
			info.url  = `app.zip?m=${hash}`
		} else {
			info = { 
				lesson: "app",
				url: `app.zip?m=${hash}`,
				md5: hash,
				version: "1.0.0"
			}
		}
		console.log("step 3: create json")
		fs.writeFileSync(jsonFile,JSON.stringify(info),"utf8")
		if (shell.exec(`mv ${path.join(__dirname, `app.zip`)} ${process.env.BUNDLE_PATH}`).code == 0) {
			if (shell.exec(`mv ${path.join(__dirname, `app.json`)} ${process.env.BUNDLE_PATH}`).code == 0) {
				console.log("step 4: move files")
				console.log("done!")
			}
		}
	})
})