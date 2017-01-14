'use strict';

var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;
var mainWindow = null;

app.on('ready', function(){
	mainWindow = new BrowserWindow({
		height : 641,
		width : 447,
		frame: false

	});
	mainWindow.loadURL('file://' + __dirname + '/app/index.html');
/*	BrowserWindow.webContents.openDevTools();
*/  /*window.$ = window.jQuery = require('./js/jquery-3.1.1.min.js');*/     

});
