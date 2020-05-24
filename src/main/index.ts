'use strict'

import {app, BrowserWindow, Menu} from 'electron'
import * as path from 'path'
import {format as formatUrl} from 'url'
import {init} from "./database";
import {listen} from './listeners/index';

const isDevelopment = process.env.NODE_ENV !== 'production'

// global reference to mainWindow (necessary to prevent window from being garbage collected)

let mainWindow: BrowserWindow;
app.allowRendererProcessReuse = true;

function createMainWindow() {
    const window = new BrowserWindow({
        webPreferences: {nodeIntegration: true},
        icon: path.join(__dirname, 'assets/icon.png')
    })

    if (isDevelopment) {
        window.webContents.openDevTools()
    }

    if (isDevelopment) {
        window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
    } else {
        window.loadURL(formatUrl({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file',
            slashes: true
        }))
    }

    window.webContents.on('devtools-opened', () => {
        window.focus()
        setImmediate(() => {
            window.focus()
        })
    })

    var menu = Menu.buildFromTemplate([
        {
            label: 'Menu',
            submenu: [
                {
                    label: 'Home',
                    click: () => {
                        goToRoute('/');
                    }
                },
                {
                    label: 'New project',
                    click: () => {
                        goToRoute('/projects/create');
                    }
                },
                {
                    label: 'Open project',
                    click: () => {
                        goToRoute('/projects/list');
                    }
                },
            ]
        }
    ])
    Menu.setApplicationMenu(menu);
    return window
}

function goToRoute(url: string) {
    mainWindow.webContents.send('store', {
        type: 'router.push',
        payload: url
    })
}

// quit application when all windows are closed
app.on('window-all-closed', () => {
    // on macOS it is common for applications to stay open until the user explicitly quits
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', async () => {
    // on macOS it is common to re-create a window even after all windows have been closed
    // @ts-ignore
    if (mainWindow === null) {
        mainWindow = createMainWindow()
    }
})

// create main BrowserWindow when electron is ready
app.on('ready', async () => {
    await init();
    mainWindow = createMainWindow();
    listen(mainWindow);
})
