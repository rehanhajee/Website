import 'react-app-polyfill/ie11';
import 'core-js/stable';

import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";


import { REACT_APP_API_KEY, REACT_APP_AUTH_DOMAIN, REACT_APP_DATABASE_URL, REACT_APP_PROJECT_ID, REACT_APP_STORAGE_BUCKET, REACT_APP_MESSAGING_SENDER_ID, REACT_APP_APP_ID, REACT_APP_MEASUREMENT_ID } from './config.js';


var firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_AUTH_DOMAIN,
    databaseURL: REACT_APP_DATABASE_URL,
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
    appId: REACT_APP_APP_ID,
    measurementId: REACT_APP_MEASUREMENT_ID
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics();
const database = getDatabase(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
