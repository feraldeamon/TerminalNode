/*
var express = require('express');
var app = express();

var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = process.env.PORT || 3000;

var users = [];
var connections = [];

server.listen(port, function() {
    console.log('Server listening at port %d', port);
});

//Routing
app.use(express.static(path.join(__dirname, '/')));*/

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

const isDev = require('electron-is-dev');

if(isDev) {
    console.log('Running in development');
} else {
    console.log('Running in production');
}

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });

    mainWindow.webContents.openDevTools();

    mainWindow.loadURL('file://' + __dirname + '/index.html');
});