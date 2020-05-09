import history from '../../lib/history'
export function router (state = {}, action:any) {
    // const history = useHistory();
    if(action.type === 'router.push'){
        // history.push(action.payload.destination);
        console.log(action)
        history.push(action.payload.destination)
        history.goForward();
    }
    return state;
}