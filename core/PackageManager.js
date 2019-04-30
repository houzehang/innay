import path 		from "path"
import fs 			from "fs-extra"
import got 			from "got"
import del 			from "del"
import logger 		from 'electron-log'
import bridge 		from './MessageBridge'
import md5file  	from 'md5-file'
import decompress 	from 'decompress'
import semver	    from 'semver'
import { PACKAGE_PATH, ASSETS_PATH, INSTALLED_META_FILE, PACKAGE_META_FILE } from './Configure'
let tasks_list = {}

function getLocalPackageMetaFilePath(pack) {
	return path.join(PACKAGE_PATH, pack, PACKAGE_META_FILE)
}

function getLocalInstalledMetaFilePath(pack) {
	return path.join(ASSETS_PATH, pack, INSTALLED_META_FILE)
}

export async function getLocalPackageVersion({pack}) {
	let meta = getLocalPackageMetaFilePath(pack)
	try {
		await fs.ensureFile(meta)
		let content = await fs.readFile(meta,"utf8")
		if (content) {
			try {
				content = JSON.parse(content)
				return content
			} catch(e) {
				return
			}
		}
	} catch(e) {
		return
	}
}

export async function getServerPackageVersion({url}) {
	url = `${url}?t=${new Date().getTime()}`
	let response = await got.get(url, {json: true})
	return response.body
}

export async function isUpdateAvailable({url, pack, checkVersionOnly}) {
	let serverInfo = await getServerPackageVersion({url}),
		localInfo  = await getLocalInstalledVersion({ pack })
	if (!serverInfo || !semver.valid(serverInfo.version)) {
		if (localInfo) {
			return { available: false, local: localInfo }
		} else {
			throw new Error("获取远程更新出错，且本地未安装。")
		}
	}
	if (!localInfo || !semver.valid(localInfo.version)) {
		return { available: true, local: null, server: serverInfo  }
	}
	let result = {
			local	: localInfo,
			server	: serverInfo
		}
	if (checkVersionOnly) {
		result.available = semver.gt(serverInfo.version, localInfo.version)
		return result
	} else {
		result.available = semver.gt(serverInfo.version, localInfo.version) || 
						   (semver.eq(serverInfo.version, localInfo.version) && serverInfo.md5 != localInfo.md5)
		return result
	}
}

export async function getLocalInstalledVersion({pack}) {
	let meta = getLocalInstalledMetaFilePath(pack)
	try {
		await fs.ensureFile(meta)
		let content = await fs.readFile(meta,"utf8")
		if (content) {
			try {
				content = JSON.parse(content)
				return content
			} catch(e) {
				return
			}
		}
	} catch(err) {
		return
	}
}

export async function getDownloadTask({ identity }) {
	return tasks_list[identity] || null
}

export async function startDownloadTask({ pack, url, md5, version, autoUnzip, checksum }, sender) {
	let filename = `v${version}${md5?("-build."+md5):""}.zip`
	let identity = `${pack}/${filename}`,
		destpath = `${PACKAGE_PATH}/${identity}`
	if (fs.existsSync(destpath)) {
		await del(destpath, { force: true })
		logger.info(`delete local file ${destpath}`)
	}
	if (tasks_list[identity]) {
		tasks_list[identity].abort()
		delete tasks_list[identity]
	}
	let task, aborted, error, lastPercent = 0, taskAbort
	try {
		task = got(url, { encoding: null, timeout: {socket: 60000} })
	} catch(e) {
		error = e
	}
	if (
        !task ||
        typeof task.on !== 'function' ||
        typeof error !== 'undefined'
    ) {
        if (!error) {
            error = new Error('unknown error');
        }
		if (sender) {
			bridge.call({ 
				method	: `${identity}/error`, 
				args	: error, sender 
			}).catch(err=>{
				console.log("error",err)
			})
		}
        logger.error('[Download Error]', error.message);
        logger.error(error.stack);
        return;
	}
	task.on('downloadProgress', (progress) => {
		let { total, transferred, percent } = progress;
		percent = parseFloat(percent.toFixed(2));
		if (percent > lastPercent) {
			logger.info(`download ${identity} [${transferred}/${total}] - ${ percent * 100 }%`);
			lastPercent = percent
			bridge.call({
				method : `${identity}/progress`,
				args   : { total, transferred, percent },
				sender
			}).catch(err=>{
				console.log("error",err)
			})
		}
	}).on('request', (request) => {
		if (aborted) {
			request.abort()
		}
		taskAbort = () => {
			request.abort()
		};
	});
	tasks_list[identity] = {
        identity,
        abort: () => {
            aborted = true
            if (taskAbort) {
                taskAbort()
            }
        },
        task: task.then((response) => {
			return fs.outputFile(destpath, response.body);
		})
		.then(()=>{
			return new Promise((resolve, reject)=>{
				if (checksum && md5) {
					md5file(destpath, (err, hash) => {
						if (err) {
							reject(new Error("计算文件md5出错"))
						} else {
							if (hash == md5) {
								logger.info(`check md5 sucess ${identity} ${md5}`)
								resolve()
							} else {
								// 删除下载的文件
								del.sync(destpath, { force: true })
								reject(new Error("下载文件完整性校验失败"))
							}
						}
					})
				} else {
					logger.info(`no need to check md5 ${identity}`)
					resolve()
				}
			})
		})
		.then(() => {
			// write downloaded version to local
			let metaContent = JSON.stringify({version,md5,file:filename})
			logger.info(`write to local package for version ${metaContent}`)
			let metaFilePath = getLocalPackageMetaFilePath(pack)
			try {
				fs.writeFileSync(metaFilePath, metaContent, 'utf8')
			} catch(err) {
				throw new Error("写入本地文件包版本号出错")
			}
			if (autoUnzip) {
				return decompressZip({ pack, file: destpath }).then(()=>{
					logger.info(`write to local installed package for version ${metaContent}`)
					metaFilePath = getLocalInstalledMetaFilePath(pack)
					try {
						fs.writeFileSync(metaFilePath, metaContent, 'utf8')
					} catch(err) {
						throw new Error("写入本地安装版本号出错")
					}
				})
			}
		})
		.then(() => {
			logger.info(`downloaded ${identity}, ${url}, ${destpath}`)
			bridge.call({
				method: `${identity}/success`, args: {identity, destpath}, sender
			}).catch(err=>{
				console.log("error",err)
			})
		})
    };
    tasks_list[identity].task.catch(err => {
		err = err || new Error('unknown error')
		bridge.call({ 
			method: `${identity}/error`,
			args: err.message, sender
		}).catch(err=>{
			console.log("error",err)
		})
		logger.error('[Download Error]', err.message)
		logger.error(err.stack)
	})
	.then(() => {
		delete tasks_list[identity]
	});
	return tasks_list[identity]
}

export async function abortDownloadTask({ identity }) {
	if (identity in tasks_list) {
		tasks_list[identity].abort()
		delete tasks_list[identity]
	}
}

export async function decompressZip({ pack, file }) {
	try {
		await fs.ensureFile(file)
		const unpackDir = `${ASSETS_PATH}/${pack}_${new Date().getTime()}`,
			  destDir   = `${ASSETS_PATH}/${pack}`
		await decompress(file, unpackDir)
		await del(destDir, { force: true })
		await fs.move(unpackDir, destDir)
		return true
	} catch(err) {
		console.error(err)
		return
	}
}