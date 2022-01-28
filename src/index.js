import React from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";
import "babel-polyfill";
import ReactDOM from 'react-dom';
import App from './App.js';
import '../assets/app.scss';

ReactDOM.render(<App />, document.getElementById('root'));