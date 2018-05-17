(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.BridgeH5Command = (callback, content)=>{
	/**
	 * 通过注入后向上层渲染进程传输数据的唯一形式
	 * 目前是通过调研的最简单的方案，虽然不是很优美，但是好在很实用
	 * 采用分包传输，通过修改document.title，渲染进程会自动监听title的变化从而获取数据
	 * 但是document.title有长度限制，故采用分包形式，每个包头部包含自己在整包的位置和总包长度
	 * 渲染进程收到所有包内容后才会进行解析
	 * @param {*} str 发送的数据字符串 
	 */
	var parts = [];
	while(content) {
		parts.push(content.substr(0,500));
		content = content.substr(500,content.length);
	}
	parts.forEach((part,index)=>{
		document.title = `#PART#${index+1}#${parts.length}#${part}`;
	});
}
},{}]},{},[1])