import React from 'react';
import ReactDom from 'react-dom';
import 'bulma/bulma.sass'
import Root from "./components/Root";
import {store} from "./store";
const { ipcRenderer } = require('electron');
ipcRenderer.on('store', (event, arg) => {
    store.dispatch(arg)
})
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

ReactDom.render(<Root />, mainElement);