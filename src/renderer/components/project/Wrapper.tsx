import React, {useEffect} from "react";
import {connect, Provider} from "react-redux";
import {store} from "../../store";
import {Route, Router} from "react-router-dom";
import history from "../../lib/history";
import Import from "./Import";
import Detail from "./Detail";


const Wrapper = (props: any) => {
    useEffect(() => {
        props.loadProject(props.match.params.id);
        // eslint-disable-next-line
    }, [props.match.params.id]);

    const routes = [];

    if(!props.project.imported){
        routes.push(<Route key="import" path="/" component={Import} />)
    } else {
        routes.push(<Route key="detail" path="/" component={Detail} />)
    }

    return (
        <Provider store={store}>
            <div>
                {props.project.name}
                <Router history={history}>
                    {routes}
                </Router>
            </div>
        </Provider>
    )
}
const mapStateToProps = (state: any) => {
    return {
        project: state.project
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        loadProject: (id: string) => dispatch({type: 'project.load', payload:id}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)