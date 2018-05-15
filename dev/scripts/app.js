let tmpl    	= require("./jquery.tmpl.js");
let Q 			= require("q");
let Const 		= require("../const.js");
const Loading   = require("./loading")
const net 		= require("./network")
const Viewer    = require("./Viewer")
const context   = require("./context")
const DMG 		= require("./DataManager")
class App {
	constructor() {
		this.$dmg		= new DMG
		context.dmg 	= this.$dmg
		this.$viewer   	= new Viewer
		this.$loading 	= new Loading
		context.loading = this.$loading
		this.__bind()
	}

	__bind() {
	}
}

module.exports = new App