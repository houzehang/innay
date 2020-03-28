import { app, screen, protocol, ipcMain }   from 'electron';
import log                                  from 'electron-log';
import path                                 from 'path'
import {autoUpdater}                        from 'electron-updater'
import Updater                              from './core/Updater'
import * as PackageManager                  from './core/PackageManager'
import bridge                               from './core/MessageBridge'
import WindowFactory                        from './core/WindowFactory'
import { PROXY, LOG_PATH }                  from './core/Configure'
import { trigger }                          from './core/Eventer'
import logger                               from 'electron-log'
import { onPossiblyUnhandledRejection } from 'bluebird';

if (process.env.NODE_ENV == "development") {
    autoUpdater.updateConfigPath = path.join(__dirname, 'dev-app-update.yml');
}
protocol.registerStandardSchemes([ PROXY ], { secure: true })
logger.transports.file.file = LOG_PATH

app.disableDomainBlockingFor3DAPIs()
var ActivedWindow, offHire

let gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
    app.quit()
} else {
    app.on('second-instance', (event, commandLine, workingDirectory) => {
        if (ActivedWindow) {
            if (ActivedWindow.isMinimized()) {
                ActivedWindow.restore()
            }
            ActivedWindow.focus()
        }
    })

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
        ActivedWindow = updater.win
        updater.on("open-main-window", ({pack, data})=>{
            setTimeout(()=>{
                updater.close()
            },100)
            logger.log("call open main ui window", PROXY, pack, offHire)
            let _mainWindow = windowFactory.open({
                pack, 
                delegates: {
                    openLiveRoom: ({pack, data})=>{
                        let _window = windowFactory.open({
                            pack, data,
                            unique: true,
                            offHire
                        })
                        _window.on("closed", ()=>{
                            _mainWindow.sendMessage("room-closed")
                            ActivedWindow = _mainWindow.window
                        })
                        ActivedWindow = _window.window
                    }
                },
                data,
                needSystemInfo: true,
                unique: true
            })
            ActivedWindow = _mainWindow.window
        })
    });
}

app.commandLine.appendSwitch('ignore-gpu-blacklist');
app.on('window-all-closed', () => {
    app.quit();
    ActivedWindow = null
});

ipcMain.on('off-hire', ()=>{
    offHire = true;
})

process.on('uncaughtException', function (err) {
    log.error("uncaughtException", err);
});