import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/site.css';
import App from './components/App';


 
render(<App/>, document.getElementById('app'));