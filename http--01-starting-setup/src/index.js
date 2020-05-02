import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(requestConf => {
    console.log(requestConf);
    // Edit request here if needed
    return requestConf;
}, error => {
    console.log(error);

    return Promise.reject(error);
});

axios.interceptors.response.use(responseConf => {
    console.log(responseConf);
    // Edit response here if needed
    return responseConf;
}, error => {
    console.log(error);

    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
