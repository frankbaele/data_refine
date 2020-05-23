import history from '../../lib/history'
export function router (state = {}, action:any) {
    if(action.type === 'router.push'){
        setTimeout(()=>{
            history.push(action.payload)
        }, 1)
    }
    return state;
}