import {ipcRenderer} from "electron";


export function rows (state = {}, action:any) {
    if(action.type === 'file.rows.load'){
        console.log('load')
        ipcRenderer.send('file', {
            type: 'rows.load',
            payload: action.payload
        })
    }
    if(action.type === 'file.rows.loaded'){
        console.log(action.payload);
        return action.payload;
    }
    return state;
}