import {combineReducers} from "redux";
import {project} from "./project";
import {projects} from "./projects";
import {router} from "./router";



export default combineReducers({
    project: project,
    projects: projects,
    router: router
})
