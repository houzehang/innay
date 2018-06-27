/**
 * 整个程序的入口函数
 * 过程介绍
 * 1. 初始化Electron主框架
 * 2. 创建主窗口
 * 3. 添加渲染线程监听器
 */
const setupEvents  = require('./installers/setupEvents')
const {DEBUG}      = require('./env.js');
const Const        = require('./const.js'); 
const fs           = require("fs");
const path         = require("path");
if (setupEvents.handleSquirrelEvent()) {
    return;
}

// 初始化主框架
const {session,app,BrowserWindow,ipcMain} = require('electron');
let mainWindow
app.on('ready', ()=>{
    function createWindow() {
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
        // $main.loadURL('https://wx.qq.com')
        
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
        mainWindow = $main
    }
    createWindow()
	// Modify the user agent for all requests to the following urls.
	const filter = {
		urls: []
    }

    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            app.quit()
            app.exit(0)
            mainWindow = null
        }
    })

    app.on('activate', function () {
        if (mainWindow === null) {
            createWindow()
        }
    })
});
ipcMain.on("ASK_FOR_REFRESH", function(event, data) {
    console.log("ipcmain...refresh...")
    mainWindow.reload()
})
