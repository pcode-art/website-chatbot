const { app, BrowserWindow, Tray } = require('electron');
const path = require('path');
const fs = require('fs');
let mainWindow;
let tray;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

   // mainWindow.loadFile('/clg4/clg2/clg/my-chatbot-app/index.html');
   mainWindow.loadFile(path.join(__dirname, 'index.html'));
}



app.on('ready', () => {
    createWindow();

    //tray = new Tray(path.join(__dirname, 'path-to-your-icon.png'));

   // tray.on('click', () => {
     //   mainWindow.show();
    });
//});
