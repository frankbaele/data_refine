import {readRows} from "../file";

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
    ipcMain.on('file', async (event, arg) => {

        if(arg.type ==='rows.load'){
            const collection = await readRows(arg.payload.type, arg.payload.file, arg.payload.rows, arg.payload.options);
            mainWindow.send('store', {
                type:'file.rows.loaded',
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