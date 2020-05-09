// in the main store
import { forwardToRenderer, triggerAlias, replayActionMain } from 'electron-redux';
import {applyMiddleware, createStore} from "redux";
import reducer from './reducers'

export const store = createStore(
    reducer,
    applyMiddleware(
        triggerAlias,
        forwardToRenderer, // IMPORTANT! This goes last
    ),
);

replayActionMain(store);

