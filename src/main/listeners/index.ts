const { ipcMain } = require('electron')
import {create, get, getCollection} from "../database/models/Project";
export function listen(mainWindow: any){

    ipcMain.on('project', (event, arg) => {
        if(arg.type ==='create'){
            create(arg.payload);
            mainWindow.send('store', {
                type: 'router.push',
                payload: '/'
            })
        }
        if(arg.type ==='load'){
            const item = get(arg.payload);
            mainWindow.send('store', {
                type:'project.loaded',
                payload: item
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