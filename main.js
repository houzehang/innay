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
log.info('App starting...');

let win;

function sendStatusToWindow(text) {
  log.info(text);
  win.webContents.on('did-finish-load', () => {
    win.webContents.send('message', text);
  })
}

function createUpdateWindow() {
  win = new BrowserWindow();
  win.webContents.openDevTools();
  win.on('closed', () => {
    win = null;
  });
  win.loadURL(`file://${__dirname}/dist/version.html#v${app.getVersion()}`);
  return win;
}
autoUpdater.on('checking-for-update', () => {
  sendStatusToWindow('Checking for update...');
})
autoUpdater.on('update-available', (ev, info) => {
  sendStatusToWindow('Update available.');
})
autoUpdater.on('update-not-available', (ev, info) => {
  sendStatusToWindow('Update not available.');
  createMainWindow()
  win.close()
})
autoUpdater.on('error', (ev, err) => {
  sendStatusToWindow('Error in auto-updater.');
})
autoUpdater.on('download-progress', (ev, progressObj) => {
  sendStatusToWindow('Download progress...');
})
autoUpdater.on('update-downloaded', (ev, info) => {
  sendStatusToWindow('Update downloaded; will install in 5 seconds');
});

autoUpdater.on('update-downloaded', (ev, info) => {
    autoUpdater.quitAndInstall();  
})

app.on('ready', function()  {
    createUpdateWindow();
    autoUpdater.checkForUpdates();
});

function createMainWindow() {
    // 创建主窗口，配置详见Electron官方文档
    let $main = new BrowserWindow({width: 1300, height: 768, 
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
    // 加载本地入口文件，用于生成主UI界面
    $main.loadURL(`file://${__dirname}/dist/index.html`)
    
    if (DEBUG) {
        // 打开调试器
        $main.webContents.openDevTools();
    }
    $main.webContents.on('will-navigate', (ev, url) => {
        ev.preventDefault();
    });
    $main.on('closed', function (event) {
        mainWindow = null
    })
}

app.on('window-all-closed', () => {
    app.quit();
});
