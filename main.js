/**
 * 整个程序的入口函数
 * 过程介绍
 * 1. 初始化Electron主框架
 * 2. 创建主窗口
 * 3. 添加渲染线程监听器
 */
const {DEBUG}      = require('./env.js');
const Const        = require('./const.js'); 
const fs           = require("fs");
const path         = require("path");

// 初始化主框架
const {session,app,BrowserWindow,ipcMain,Menu} = require('electron');
const log = require('electron-log');
const {autoUpdater} = require("electron-updater");

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';

let updateWindow, loaded;

function sendStatusToWindow(status, data) {
    if (!loaded) {
        updateWindow.webContents.on('did-finish-load', () => {
            loaded = true
            if (updateWindow) {
                log.info("send message",status);
                updateWindow.webContents.send('message', status, data);
            }
        })
    } else {
        if (updateWindow) {
            log.info("send message",status);
            updateWindow.webContents.send('message', status, data);
        }
    }
}

function createUpdateWindow() {
    updateWindow = new BrowserWindow({width: 600, height: 300, 
        resizable: false,
        center: true,
        frame: false,
        autoHideMenuBar: true,
        webPreferences : {
            webSecurity: true,
            javascript: true,
            plugins: true
        }
    });
    if (DEBUG) {
        updateWindow.webContents.openDevTools();
    }
    updateWindow.on('closed', () => {
        updateWindow = null;
    });
    updateWindow.loadURL(`file://${__dirname}/dist/version.html#v${app.getVersion()}`);
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
    setTimeout(()=>{
        createMainWindow()
        updateWindow.close()
    },2000)
})
autoUpdater.on('download-progress', (progress) => {
    sendStatusToWindow(Const.UPDATE.DOWNLOADING, progress);
})
autoUpdater.on('update-downloaded', () => {
    sendStatusToWindow(Const.UPDATE.DOWNLOADED);
    setTimeout(()=>{
        autoUpdater.quitAndInstall();  
    },3000)
});

app.on('ready', function()  {
    createUpdateWindow();
    autoUpdater.checkForUpdates();
});

function createMainWindow() {
    process.env.APP_PATH = app.getAppPath();
    console.log("app path",process.env.APP_PATH)
    let $main = new BrowserWindow({width: 1300, height: 790, 
        resizable: DEBUG,
        center: true,
        frame: true,
        autoHideMenuBar: true,
        webPreferences : {
            webSecurity: true,
            javascript: true,
            plugins: true
        }
    })
    $main.webContents.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36 KCPC');
    $main.loadURL(`file://${__dirname}/dist/index.html`)
    if (DEBUG) {
        $main.webContents.openDevTools();
    }
    $main.webContents.on('did-finish-load', () => {
        $main.webContents.send('configure', {
            __dirname, __apppath: app.getAppPath()
        });
    })
    $main.webContents.on('will-navigate', (ev, url) => {
        ev.preventDefault();
    });
    $main.on('closed', function (event) {
        mainWindow = null
    })
    $main.on('crashed', function(event) {
        log.error("main window crashed",event);
        createMainWindow()
        $main.destroy()
    })
}

app.on('window-all-closed', () => {
    app.quit();
});

process.on('uncaughtException', function (err) {
    log.error("uncaughtException",err);
});
