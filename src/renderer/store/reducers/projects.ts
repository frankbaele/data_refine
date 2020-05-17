export function projects (state = {}, action:any) {
    if(action.type === 'projects.loaded'){
        return action.payload;
    }

    return state;
}