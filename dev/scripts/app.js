/**
 * 样式文件
 */
require('../less/anim.less')
require('../less/common.less')
require('../less/main.less')


// let Const 		= require("../const.js");
// const Loading   = require("./loading")
// const net 		= require("./network")
// const Viewer    = require("./Viewer")
// const context   = require("./context")
// const DMG 		= require("./DataManager")
// const Session 	= require('./session')
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import App from './containers/entry.page'
import { restoreUserInfo } from './actions'
import thunk from 'redux-thunk'

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