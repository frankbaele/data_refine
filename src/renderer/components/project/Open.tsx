import React, {useEffect} from "react";
import {ipcRenderer} from "electron";
import {connect} from "react-redux";


const Open = (props: any) => {
    useEffect(() => {
        ipcRenderer.send('projects', {
            type: 'load',
            payload: {}
        })
    }, []);
    let list;
    if (Array.isArray(props.projects)) {
        list = props.projects.map((project: { id: string, name: string }) =>
            <li key={project.id}>{project.name}</li>
        );
    }
    return (
        <div>
            <div>{list}</div>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(Open)