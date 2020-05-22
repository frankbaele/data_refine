import React from 'react';
import ReactDom from 'react-dom';

import 'tailwindcss/dist/tailwind.css'
import "typeface-jetbrains-mono/dist/index.css"
import './index.scss'

import Root from "./components/Root";
import {store} from "./store";
const { ipcRenderer } = require('electron');
ipcRenderer.on('store', (event, arg) => {
    store.dispatch(arg)
})

ReactDom.render(<Root />, document.getElementById("app"));