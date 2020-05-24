import React from 'react'
import { Router, Route } from 'react-router-dom'
import App from './App'
import {Provider} from "react-redux";
import {store} from "../store";
import Create from "./projects/Create";
import history from '../lib/history'
import List from "./projects/List";
import Wrapper from "./project/Wrapper";

const Root = () => (
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route exact path="/" component={App} />
                <Route path="/projects/create" component={Create} />
                <Route path="/projects/list" component={List} />
                <Route path="/project/:id" component={Wrapper} />
            </Router>
        </div>
    </Provider>
)


export default Root