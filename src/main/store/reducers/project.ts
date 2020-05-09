import * as Project from "../../database/models/Project";

export function project (state = {}, action:any) {

    if(action.type === 'project.create'){
        project.create(action.payload.name);

    }

    if(action.type === 'project.update'){

    }

    if(action.type === 'project.delete'){

    }

    return state;
}