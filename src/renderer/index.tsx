import React from 'react';
import ReactDom from 'react-dom';
import 'bulma'
import Root from "./components/root";

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

ReactDom.render(<Root />, mainElement);

