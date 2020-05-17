import React from 'react'
import { Router, Route } from 'react-router-dom'
import App from './App'
import {Provider} from "react-redux";
import {store} from "../store";
import Create from "./project/Create";
import history from '../lib/history'

const Root = () => (
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route exact path="/" component={App} />
                <Route path="/project/create" component={Create} />
            </Router>

        </div>
    </Provider>
)


export default Root