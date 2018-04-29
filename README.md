# wechat app quick start


This is an application base on framwork Electron and the [Quick Start Guide](http://electron.atom.io/docs/latest/tutorial/quick-start) within the Electron documentation.

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Install dependencies and run the app
npm install && npm run start
```

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/latest).

## To Build And Release
```bash
# step 1 compile and package resource and code
gulp
# step 2 build and release
# for windows application
npm run package-win 
# for mac application
npm run package-mac 
# for windows installer
npm run create-installer-win
```
Need more info please goto package.json in the root directory.

## To Develop And Debug
```bash
gulp watch
```
