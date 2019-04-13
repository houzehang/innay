import { app } from "electron"
import path from 'path'
export const APP_PATH 				= app.getPath("userData")
export const PACKAGE_PATH 			= path.join(APP_PATH, "packages")
export const ASSETS_PATH  	 		= path.join(APP_PATH, "appassets")
export const INSTALLED_META_FILE 	= "lastest-installed-meta"
export const PACKAGE_META_FILE 		= "lastest-downloaded-meta"
