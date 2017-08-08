'use strict';
//Electron main-window configuration goes here
var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;

var mainWindow = null;
app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 641,
        width: 447,
        frame: false /*Renders a Frame-less window of given size*/
    });
    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});