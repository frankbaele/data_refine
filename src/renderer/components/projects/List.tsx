import React, {useEffect} from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

const List = (props: any) => {

    useEffect(() => {
        props.loadProjects();
    }, []);

    let list;
    if (Array.isArray(props.projects)) {
        list = props.projects.map((project: { id: string, name: string }) =>
            <NavLink className="btn" key={project.id} to={'/project/' + project.id}>
                {project.name}
            </NavLink>
        );
    }


    return (
        <div className="flex h-screen ">
            <div className="m-auto max-w-md rounded">
                <ul className="list-reset flex flex-col">{list}</ul>
            </div>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        projects: state.projects
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        loadProjects: () => dispatch({type: 'projects.load'}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)