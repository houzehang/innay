require=function l(u,i,c){function f(r,e){if(!i[r]){if(!u[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(s)return s(r,!0);var o=new Error("Cannot find module '"+r+"'");throw o.code="MODULE_NOT_FOUND",o}var n=i[r]={exports:{}};u[r][0].call(n.exports,function(e){return f(u[r][1][e]||e)},n,n.exports,l,u,i,c)}return i[r].exports}for(var s="function"==typeof require&&require,e=0;e<c.length;e++)f(c[e]);return f}({HelloWorld:[function(e,r,t){"use strict";cc._RF.push(r,"280c3rsZJJKnZ9RqbALVwtK","HelloWorld"),cc.Class({extends:cc.Component,properties:{label:{default:null,type:cc.Label},text:"Hello, World!"},onLoad:function(){this.label.string=this.text},update:function(e){}}),cc._RF.pop()},{}]},{},["HelloWorld"]);