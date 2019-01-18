import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import AppRoute from './routes';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/site.css';
import {Provider} from 'react-redux';
import { Route, Switch } from 'react-router-dom'; // react-router v4
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store/configureStore';
import App from './components/App';

const store = configureStore();

render(
    <Provider store={store}>
      <ConnectedRouter history={history}> 
          <AppRoute />   
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
  );