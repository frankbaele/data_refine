import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import {Provider} from "react-redux";
import {store} from "../store";

const Root = () => (
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
            <Route path="/project/new" component={App} />
        </Router>
    </Provider>
)


export default Root