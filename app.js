const { app, nativeImage, Menu, Tray, BrowserWindow } = require('electron')
const path = require("path");
const url = require("url");
const { Howl } = require('howler');

let win;
let tray = null;
let top = {};
var hidden = false;

function createWindow() {
    top.win = new BrowserWindow({
        width: 350,
        height: 425,
        resizeable: false,
        fullscreen: false,
        fullscreenable: false,
        center: true,
        maximizable: false,
        skipTaskbar: true,
        icon: __dirname + "/assets/icon.ico",
        webPreferences: {
            webSecurity: true,
            devTools: false,
            nodeIntegration: true,
            disableHtmlFullscreenWindowResize: false
        }
    });
    top.win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
    top.win.on('will-resize', (e) => {
        //prevent resizing even if resizable property is true.
        e.preventDefault();
    });
    top.win.setMenu(null);
}

function createTray() {
    top.tray = new Tray(__dirname + "/assets/icon.ico") 
    const menu = Menu.buildFromTemplate([
        {
            label: "Hide", click: (item, window, event) => {
                trayHandling()
            }
        },
        { role: "quit" }, // "role": system prepared action menu
    ]);
    top.tray.setToolTip("<switches/>")
    top.tray.setIgnoreDoubleClickEvents(true)
    top.tray.setContextMenu(menu)
    top.tray.on('click', function (e) {
        trayHandling()
    });
}

function trayHandling() {
    if (hidden) {
        top.win.show()
        hidden = false
        const menu_new = Menu.buildFromTemplate([
            {
                label: "Hide", click: (item, window, event) => {
                    trayHandling()
                }
            },
            { role: "quit" },
        ]);
        top.tray.setContextMenu(menu_new)
    } else {
        top.win.hide()
        hidden = true
        const menu_new = Menu.buildFromTemplate([
            {
                label: "Show", click: (item, window, event) => {
                    trayHandling()
                }
            },
            { role: "quit" },
        ]);
        top.tray.setContextMenu(menu_new)
    }
}

app.once("ready", ev => {
    createWindow()
    createTray()
});

app.on("before-quit", ev => {
    top.win.removeAllListeners("close");
    top = null;
});