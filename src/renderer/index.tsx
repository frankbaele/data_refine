import React from 'react';
import ReactDom from 'react-dom';
import 'bulma/bulma.sass'
import Root from "./components/Root";

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

ReactDom.render(<Root />, mainElement);

