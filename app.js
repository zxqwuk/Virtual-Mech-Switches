const { app, BrowserWindow } = require('electron')
const path = require("path");
const url = require("url");
const { Howl } = require('howler');
let win;

function createWindow() {
    win = new BrowserWindow({
        width: 250,
        height: 400,
        webPreferences: {
            nodeIntegration: true
        }
    });

    //win.setResizable(false);
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', () => {
    createWindow()
});

app.on('will-quit', () => {
    // Unregister all shortcuts.
    //globalShortcut.unregisterAll()
})