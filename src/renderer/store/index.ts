// in the renderer store
import { forwardToMain, replayActionRenderer, getInitialStateRenderer } from 'electron-redux';
import {applyMiddleware,  createStore} from "redux";
import reducer from './reducers'
const initialState = getInitialStateRenderer();

export const store = createStore(
    reducer,
    initialState,
    applyMiddleware(
        forwardToMain, // IMPORTANT! This goes first
    ),
);

replayActionRenderer(store);