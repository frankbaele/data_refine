import {ipcRenderer} from "electron";


export function project (state = {}, action:any) {
    if(action.type === 'project.create'){
        ipcRenderer.send('project', {
            type: 'create',
            payload: action.payload
        })
    }

    return state;
}