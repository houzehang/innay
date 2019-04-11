import path from "path"
import fs from "fs-extra"
import got from "got"
import { PACKAGE_PATH, ASSETS_PATH, INSTALLED_META_FILE, PACKAGE_META_FILE } from './Configure'

export async function getLocalPackageVersion(pack) {
	let meta = path.join(PACKAGE_PATH, pack, PACKAGE_META_FILE)
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

export async function getServerPackageVersion(url) {
	url = `${url}?t=${new Date().getTime()}`
	let response = await got.get(url, {json: true})
	return response.body
}

export async function getLocalInstalledVersion(pack) {
	let meta = path.join(ASSETS_PATH, pack, INSTALLED_META_FILE)
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

export async function startDownloadTask({ pack, url, meta }) {
	
}

export async function cancelDownloadTask() {

}