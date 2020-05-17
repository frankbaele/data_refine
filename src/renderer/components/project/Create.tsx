import React, {Fragment, useEffect} from "react";
import {ipcRenderer} from "electron";
import {connect} from "react-redux";
import {store} from "../../store";

function createProject() {
    ipcRenderer.send('project', {
        type: 'create',
        payload: {
            name: 'test'
        }
    })
}

const Create = ({projects}) => {
    useEffect(() => {
        ipcRenderer.send('projects', {
            type: 'load',
            payload: {}
        })
    }, []);
    let list;
    if (Array.isArray(projects)) {
        list = projects.map((project) =>
            <li key={project.id}>{project.name}</li>
        );
    }
    return (
        <div>
            <div>{list}</div>
            <button onClick={createProject}>Add project</button>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(Create)