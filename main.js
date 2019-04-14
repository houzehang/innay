import { app, screen, protocol } from 'electron';
import log from 'electron-log';
import path from 'path'
import {autoUpdater} from 'electron-updater'
import Updater from './core/Updater'
import MainUI from './core/MainUI'
import { PROXY } from './core/Configure'
import { trigger } from './core/Eventer'
import logger from 'electron-log'

if (process.env.NODE_ENV == "development") {
    autoUpdater.updateConfigPath = path.join(__dirname, 'dev-app-update.yml');
}
protocol.registerStandardSchemes([ PROXY ])

app.on('ready', function () {
    let updater     = new Updater(__dirname)
    let screenSize  = screen.getPrimaryDisplay().size;
    updater.start()
    updater.on("open-main-window", (pack)=>{
        setTimeout(()=>{
            updater.close()
        },100)
        logger.log("call open main ui window", PROXY, pack)
        protocol.registerBufferProtocol(PROXY,(request, callback)=>{
            trigger("proxy-pass", { request, callback })
        }, error=>{
            logger.error(error)
        })
        let main = new MainUI(screenSize, pack)
        main.open()
    })
});

app.on('window-all-closed', () => {
    app.quit();
});

process.on('uncaughtException', function (err) {
    log.error("uncaughtException", err);
});

// app.on('browser-window-focus', function () {
//     if (TEACHER) {
//         mainWindowHotkeyListener.register();
//     }
// });

// app.on('browser-window-blur', function () {
//     if (TEACHER) {
//         mainWindowHotkeyListener.unregister();
//     }
// });

// ipcMain.on('off-hotkey', function () {
//     TEACHER && mainWindowHotkeyListener.unregister();
// });

// ipcMain.on('on-hotkey', function () {
//     TEACHER && mainWindowHotkeyListener.register();
// });

// ipcMain.on('on-closewarning', function (warningMsg) {
//     TEACHER && (closeWarning = warningMsg);
// });

// ipcMain.on('off-closewarning', function () {
//     TEACHER && (closeWarning = warningMsg);
// });