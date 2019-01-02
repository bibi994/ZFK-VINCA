import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './view/App';
import * as serviceWorker from './serviceWorker';
import 'jquery/dist/jquery.min.js';

import About from './view/components/about/About.js'

import { FontAwesomeIcon } from '@fortawesome/fontawesome-free/css/all.css'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
