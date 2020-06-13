/**
 * 样式文件
 */
import '../less/anim.less'
import '../less/common.less'
import '../less/main.less'

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import App from './containers/entry.page'
import { restoreUserInfo } from './actions'
import thunk from 'redux-thunk'
import {ipcRenderer} from 'electron'
import context from './context'

ipcRenderer.on('configure', (_, data)=>{
	if (!window.ENV_CONF) {
		window.ENV_CONF = {}
	}
	for (let key in data) {
		window.ENV_CONF[key] = data[key]
	}
	let platform = (function() {
		switch(process.platform) {
			case 'win32':
				return 'win'
			case 'darwin':
				return 'mac'
		}
	}())
	let dir = 'native-' + platform, basedir
	if (process.env.NODE_ENV != "development") {
		basedir = data.__apppath + "/dist"
	} else {
		basedir = data.__dirname
	}
	console.log("app configure", data)
	if (data.data && data.data.usingBackupUrl) {
		context.usingBackupUrl = true
	}
	// window.agora = $require(`${basedir}/libs/AgoraSDK/${dir}/agora_node_ext.node`)
	// _next()
})

ipcRenderer.on('systeminfo', (_, data)=>{
	console.log("systeminfo",data)
	if (!window.ENV_CONF) {
		window.ENV_CONF = {}
	}
	for (let key in data) {
		window.ENV_CONF[key] = data[key]
	}
})

function _next(){
	const middleware = [ thunk ];
	const store = createStore(
		rootReducer,
		applyMiddleware(...middleware)
	)
	store.dispatch(restoreUserInfo())
	render(
		<Provider store={store}>
			<App/>
		</Provider>, 
		document.getElementById("app")
	)
}