import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Firebase, { FirebaseContext } from './components/Firebase';

import 'react-app-polyfill/ie11';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FirebaseContext.Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
