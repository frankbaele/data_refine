import {ipcRenderer} from 'electron';
export function projects (state = {}, action:any) {
    if(action.type === 'projects.loaded'){
        return action.payload;
    }
    if(action.type === 'projects.load'){
        ipcRenderer.send('projects', {
            type: 'load',
            payload: {}
        })
    }

    return state;
}