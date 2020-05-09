import {combineReducers} from "redux";
import {project} from "./project";
import {router} from "./router";



export default combineReducers({
    project: project,
    router: router
})
