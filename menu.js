// @flow
import { app, Menu, shell } from 'electron';

export default class MenuBuilder {
  constructor(mainWindow) {
    this.mainWindow = mainWindow;
  }

  buildMenu() {
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.DEBUG_PROD === 'true'
    ) {
      this.setupDevelopmentEnvironment();
    }

    const template =
      process.platform === 'darwin'
        ? this.buildDarwinTemplate()
        : this.buildDefaultTemplate();

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    return menu;
  }

  setupDevelopmentEnvironment() {
    // this.mainWindow.openDevTools();
    this.mainWindow.webContents.on('context-menu', (e, props) => {
      const { x, y } = props;

      Menu.buildFromTemplate([
        {
          label: '检查元素',
          click: () => {
            this.mainWindow.inspectElement(x, y);
          }
        }
      ]).popup(this.mainWindow);
    });
  }

  buildDarwinTemplate() {
    const subMenuAbout = {
      label: '程序宝',
      submenu: [
        {
          label: "版本信息",
          selector: 'orderFrontStandardAboutPanel:'
        },
        { type: 'separator' },
        {
          label: '退出',
          accelerator: 'Command+Q',
          click: () => {
            app.quit();
          }
        }
      ]
    };
    const subMenuEdit = {
      label: '编辑',
      submenu: [
        { label: '剪切', accelerator: 'Command+X', selector: 'cut:' },
        { label: '复制', accelerator: 'Command+C', selector: 'copy:' },
        { label: '粘贴', accelerator: 'Command+V', selector: 'paste:' },
        {
          label: '全选',
          accelerator: 'Command+A',
          selector: 'selectAll:'
        }
      ]
    };
    const subMenuViewDev = {
      label: '显示',
      submenu: [
        {
          label: '刷新',
          accelerator: 'Command+R',
          click: () => {
            this.mainWindow.webContents.reload();
          }
        }
        // ,
        // {
        //   label: '切换全屏',
        //   accelerator: 'Ctrl+Command+F',
        //   click: () => {
        //     this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
        //   }
        // }
        //,
        // {
        //   label: '切换开发者工具',
        //   accelerator: 'Alt+Command+I',
        //   click: () => {
        //     this.mainWindow.toggleDevTools();
        //   }
        // }
      ]
    };
    const subMenuViewProd = {
      label: '显示',
      submenu: [
        // {
        //   label: '切换全屏',
        //   accelerator: 'Ctrl+Command+F',
        //   click: () => {
        //     this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
        //   }
        // }
        // ,
        // {
        //   label: '切换开发者工具',
        //   accelerator: 'Alt+Command+I',
        //   click: () => {
        //     this.mainWindow.toggleDevTools();
        //   }
        // }
      ]
    };
    const subMenuHelp = {
      label: '帮助',
      submenu: [
        {
          label: '关于明兮',
          click() {
            shell.openExternal('https://www.gookoo.cn');
          }
        }
      ]
    };

    const subMenuView =
      process.env.NODE_ENV === 'development' ? subMenuViewDev : subMenuViewProd;

    return [subMenuAbout, subMenuEdit, subMenuView, subMenuHelp];
  }

  buildDefaultTemplate() {
    const templateDefault = [
      {
        label: '&View',
        submenu:
          process.env.NODE_ENV === 'development'
            ? [
                {
                  label: '刷新',
                  accelerator: 'Ctrl+R',
                  click: () => {
                    this.mainWindow.webContents.reload();
                  }
                }
                // ,
                // {
                //   label: '切换全屏',
                //   accelerator: 'F11',
                //   click: () => {
                //     this.mainWindow.setFullScreen(
                //       !this.mainWindow.isFullScreen()
                //     );
                //   }
                // }
                // ,
                // {
                //   label: '切换开发者工具',
                //   accelerator: 'Alt+Ctrl+I',
                //   click: () => {
                //     this.mainWindow.toggleDevTools();
                //   }
                // }
              ]
            : [
                // {
                //   label: '切换全屏',
                //   accelerator: 'F11',
                //   click: () => {
                //     this.mainWindow.setFullScreen(
                //       !this.mainWindow.isFullScreen()
                //     );
                //   }
                // }
              ]
      },
      {
        label: '帮助',
        submenu: [
          {
            label: '关于我们',
            click() {
              shell.openExternal('https://www.mingxi.cn');
            }
          }
        ]
      }
    ];

    return templateDefault;
  }
}