import { app } from "electron"
import path from 'path'
import { DEBUG } from '../env'
export const APP_PATH 				= app.getPath("userData")
export const PACKAGE_PATH 			= path.join(APP_PATH, "packages")
export const ASSETS_PATH  	 		= path.join(APP_PATH, "appassets")
export const LOG_PATH				= path.join(APP_PATH, "system.log")
export const INSTALLED_META_FILE 	= "lastest-installed-meta"
export const PACKAGE_META_FILE 		= "lastest-downloaded-meta"
export const PROXY 					= "mingxi"
export const WINDOW_ADAPTER 		= DEBUG ? {
	"classroom-ui" : "http://localhost:3030",
	"liveroom"     : "http://localhost:4000/app?from=turbo"
} : {}
