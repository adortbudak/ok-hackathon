const electron = require('electron');
const path = require('path');
const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on("ready", function () {
    mainWindow = new BrowserWindow({
        height: 800,
        width: 1280,
        resizable: true
    });

    var windowPath  = path.join(__dirname,"/index.html");
    console.log(windowPath);
    mainWindow.loadURL("file://" + windowPath);
    mainWindow.openDevTools();
})