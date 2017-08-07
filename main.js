'use strict';

var app = require('electron').app;
const shell = require('electron').shell;


/*var myserver = require('http');
var server = myserver.createServer(function(request,response){

});
server.listen(80);*/
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
 //open links externally by default
function openxx(){
	shell.openExternal('https://github.com');
}
