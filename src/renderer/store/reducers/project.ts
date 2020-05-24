import {ipcRenderer} from "electron";


export function project (state = {}, action:any) {
    if(action.type === 'project.create'){
        ipcRenderer.send('project', {
            type: 'create',
            payload: action.payload
        })
    }
    if(action.type === 'project.load'){
        ipcRenderer.send('project', {
            type: 'load',
            payload: action.payload
        })
    }
    if(action.type === 'project.loaded'){
        return action.payload;
    }
    return state;
}