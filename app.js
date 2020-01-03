const { app, BrowserWindow } = require('electron')
const path = require("path");
const url = require("url");
const { Howl } = require('howler');
let win;

function createWindow() {
    win = new BrowserWindow({
        width: 350,
        height: 420,
        icon: __dirname + "/assets/icon.png",
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
    win.on('closed', () => {
        win = null;
    })

    win.setMenu(null);
    win.setResizable(false);

}

app.on('ready', () => {
    createWindow()
});

app.on('will-quit', () => {
    // Unregister all shortcuts.
    //globalShortcut.unregisterAll()
})