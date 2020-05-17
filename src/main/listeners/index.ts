const { ipcMain } = require('electron')
import {create, getCollection} from "../database/models/Project";
export function listen(mainWindow){
    ipcMain.on('project', (event, arg) => {

        if(arg.type ==='create'){
            create(arg.payload.name);
            const collection = getCollection();
            mainWindow.send('store', {
                type:'projects.loaded',
                payload: collection
            })
        }

    })
    ipcMain.on('projects', (event, arg) => {

        if(arg.type ==='load'){
            const collection = getCollection();
            mainWindow.send('store', {
                type:'projects.loaded',
                payload: collection
            })
        }
    })
}