import { create } from "./DownloadTask"
import { app } from "electron"
import path from "path"
import mkdirp from "mkdirp"
import fs from "fs"
import request from "superagent"

const APP_PATH 		= app.getPath("userData")
const PACKAGE_PATH 	= path.join(APP_PATH, "packages")
const ASSETS_PATH   = path.join(APP_PATH, "assets")

export async function getLocalPackageVersion(pack) {
	return new Promise((resolve, reject)=>{
		let meta = path.join(PACKAGE_PATH, pack, "meta")
		if (fs.existsSync(meta)) {
			let content = fs.readFileSync(meta,"utf8")
			if (content) {
				try {
					content = JSON.parse(content)
					resolve(content)
				} catch(e) {
					reject(e)
				}
			}
		} else {
			reject(new Error("no file exists"))
		}
	})
}

export async function getServerPackageVersion(url) {
	return new Promise((resolve, reject)=>{
		url = `${url}?t=${new Date().getTime()}`
		request.get(url).then((response)=>{
			resolve(response.body)
		}).catch(err => {
			reject(err)
		})
	})
}

export async function getInstalledPackageVersion(pack) {
	return new Promise((resolve, reject)=>{
		let meta = path.join(ASSETS_PATH, pack, "meta")
		if (fs.existsSync(meta)) {
			let content = fs.readFileSync(meta,"utf8")
			if (content) {
				try {
					content = JSON.parse(content)
					resolve(content)
				} catch(e) {
					reject(e)
				}
			}
		} else {
			reject(new Error("no file exists"))
		}
	})
}

export async function startDownloadTask() {

}

export async function cancelDownloadTask() {

}