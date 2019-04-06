import { TC_DEBUG, TEST, TEACHER } from './env.js';
import Const from './config/const.js';
import Hotkey from './config/hotkey.js';
import StaticServ from "./staticserv"
import SystemInfo from "systeminformation"
// 初始化主框架
import { app, BrowserWindow, ipcMain, Menu, globalShortcut, dialog } from 'electron';
import log from 'electron-log';
import { autoUpdater } from "electron-updater";
import path from 'path'
import MenuBuilder from './menu';

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
if (process.env.NODE_ENV == "development") {
    autoUpdater.updateConfigPath = path.join(__dirname, 'dev-app-update.yml');
}
let updateWindow,
    loaded,
    mainWindowHotkeyListener,
    rationalMaximize = false,
    screenSize,
    closeWarning,
    mainWindowSize = { width: 1300, height: 790 },
    hotkeyTickTimer;

//register hotkey for mainwindow
mainWindowHotkeyListener = {
    mainWindow: null,
    tick: function () {
        // 处理从输入框激活状态直接切出,
        // app不响应`browser-window-blur`的问题
        hotkeyTickTimer = setInterval(() => {
            try {
                this.mainWindow && !this.mainWindow.webContents.isFocused() && this.unregister();
            } catch(e) {
                console.log("window has been destroy.")
            }
        }, 2000);
    },
    send: function (key) {
        if (!this.mainWindow) return;
        this.mainWindow.webContents && this.mainWindow.webContents.send('hotkey', key);
    },
    register: function () {
        for (let _keyName in Hotkey) {
            globalShortcut.unregister(Hotkey[_keyName].code);
            globalShortcut.register(Hotkey[_keyName].code, () => {
                this.send(_keyName);
            })
        }
    },
    unregister: function () {
        for (let _keyName in Hotkey) {
            if (Hotkey[_keyName].windowFocusNeeded) {
                globalShortcut.unregister(Hotkey[_keyName].code);
            }
        }
    },

}

function sendStatusToWindow(status, data) {
    if (!loaded) {
        updateWindow.webContents.on('did-finish-load', () => {
            loaded = true
            if (updateWindow) {
                log.info("send message", status);
                updateWindow.webContents.send('message', status, data);
            }
        })
    } else {
        if (updateWindow) {
            log.info("send message", status);
            updateWindow.webContents.send('message', status, data);
        }
    }
}

function createUpdateWindow() {
    updateWindow = new BrowserWindow({
        width: 600, height: 300,
        resizable: false,
        center: true,
        frame: false,
        autoHideMenuBar: true,
        webPreferences: {
            webSecurity: true,
            javascript: true,
            plugins: true
        }
    });
    if (TC_DEBUG) {
        updateWindow.webContents.openDevTools();
    }
    updateWindow.on('closed', () => {
        updateWindow = null;
    });
    updateWindow.loadURL(`file://${__dirname}/dist/version.html`);
}
autoUpdater.on('checking-for-update', () => {
    sendStatusToWindow(Const.UPDATE.CHECKING);
})
autoUpdater.on('update-available', () => {
    sendStatusToWindow(Const.UPDATE.AVAILABLE);
})
autoUpdater.on('update-not-available', () => {
    sendStatusToWindow(Const.UPDATE.LASTEST);
    createMainWindow()
    updateWindow.close()
})
autoUpdater.on('error', (err) => {
    sendStatusToWindow(Const.UPDATE.ERROR);
    setTimeout(() => {
        createMainWindow()
        updateWindow.close()
    }, 2000)
})
autoUpdater.on('download-progress', (progress) => {
    sendStatusToWindow(Const.UPDATE.DOWNLOADING, progress);
})
autoUpdater.on('update-downloaded', () => {
    sendStatusToWindow(Const.UPDATE.DOWNLOADED);
    setTimeout(() => {
        autoUpdater.quitAndInstall();
    }, 3000)
});
app.on('ready', function () {
    createUpdateWindow();
    autoUpdater.checkForUpdates();
});

function createMainWindow() {
    process.env.APP_PATH = app.getAppPath();
    console.log("app path", process.env.APP_PATH)

    if (screenSize && rationalMaximize) {
        let maxRatio = Math.min(screenSize.width / mainWindowSize.width, screenSize.height / mainWindowSize.height);
        mainWindowSize.width *= maxRatio;
        mainWindowSize.height *= maxRatio;
    }

    let $main = new BrowserWindow({
        width: mainWindowSize.width | 0, height: mainWindowSize.height | 0,
        resizable: TC_DEBUG,
        center: true,
        frame: true,
        autoHideMenuBar: true,
        webPreferences: {
            webSecurity: false,
            javascript: true,
            plugins: true
        }
    })
    let userAgent = $main.webContents.getUserAgent()
    $main.webContents.setUserAgent(userAgent + ' KCPC');
    $main.loadURL(`file://${__dirname}/dist/index.html`)
    if (TC_DEBUG || TEST) {
        const installExtensions = () => {
            const installer = require('electron-devtools-installer');
            const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
            const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];
            extensions.map(name => installer.default(installer[name], forceDownload))
        };
        installExtensions()
        $main.webContents.openDevTools();
    }
    $main.webContents.on('did-finish-load', () => {
        $main.webContents.send('configure', {
            __dirname, __apppath: app.getAppPath(),
            version: app.getVersion()
        });
        if (TEACHER) {
            mainWindowHotkeyListener.mainWindow = $main;
            mainWindowHotkeyListener.tick();
        }
        
		SystemInfo.getStaticData((info)=>{
            $main.webContents.send('configure', {
               systeminfo: info
            });
		})
    })
    $main.webContents.on('will-navigate', (ev, url) => {
        ev.preventDefault();
    });
    $main.on('closed', function (event) {
        clearInterval(hotkeyTickTimer)
    })
    $main.on('close', function (event) {
        clearInterval(hotkeyTickTimer)
        if (closeWarning) {
            dialog.showMessageBox(null, {
                type: 'question',
                buttons: ['取消', '确认'],
                title: '',
                message: closeWarning.toString()
            }, function (code) {
                if (code == 0) {
                    event.preventDefault();
                }
            });
        }
    })
    $main.on('crashed', function (event) {
        log.error("main window crashed", event);
        createMainWindow()
        $main.destroy()
    })
    const menuBuilder = new MenuBuilder($main);
    menuBuilder.buildMenu();
    new StaticServ($main)
}

app.on('window-all-closed', () => {
    app.quit();
});

app.on('ready', function () {
    screenSize = require('electron').screen.getPrimaryDisplay().size;
})

app.on('browser-window-focus', function () {
    if (TEACHER) {
        mainWindowHotkeyListener.register();
    }
});

app.on('browser-window-blur', function () {
    if (TEACHER) {
        mainWindowHotkeyListener.unregister();
    }
});

process.on('uncaughtException', function (err) {
    log.error("uncaughtException", err);
});

ipcMain.on('off-hotkey', function () {
    TEACHER && mainWindowHotkeyListener.unregister();
});

ipcMain.on('on-hotkey', function () {
    TEACHER && mainWindowHotkeyListener.register();
});

ipcMain.on('on-closewarning', function (warningMsg) {
    TEACHER && (closeWarning = warningMsg);
});

ipcMain.on('off-closewarning', function () {
    TEACHER && (closeWarning = warningMsg);
});