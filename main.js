import { app, screen, protocol } from 'electron';
import log from 'electron-log';
import path from 'path'
import {autoUpdater} from 'electron-updater'
import Updater from './core/Updater'
import * as PackageManager from './core/PackageManager'
import bridge from './core/MessageBridge'
import WindowFactory from './core/WindowFactory'
import { PROXY } from './core/Configure'
import { trigger } from './core/Eventer'
import logger from 'electron-log'
if (process.env.NODE_ENV == "development") {
    autoUpdater.updateConfigPath = path.join(__dirname, 'dev-app-update.yml');
}
protocol.registerStandardSchemes([ PROXY ])

app.on('ready', function () {
    protocol.registerBufferProtocol(PROXY,(request, callback)=>{
        trigger("proxy-pass", { request, callback })
    }, error=>{
        logger.error(error)
    })
    bridge.delegate = PackageManager
    let updater     = new Updater(__dirname)
    let screenSize  = screen.getPrimaryDisplay().size
    let windowFactory = new WindowFactory(screenSize)
    updater.start()
    updater.on("open-main-window", (pack)=>{
        setTimeout(()=>{
            updater.close()
        },100)
        logger.log("call open main ui window", PROXY, pack)
        windowFactory.open(pack, {
            openLiveRoom: ({pack, data})=>{
                windowFactory.open(pack, null, data)
            }
        })
    })
});

app.on('window-all-closed', () => {
    app.quit();
});

process.on('uncaughtException', function (err) {
    log.error("uncaughtException", err);
});