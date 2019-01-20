import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/site.css';
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store/configureStore';
import AppRoute from './routes';
import {loadDashboardInfo} from './actions/dashboardActions';


const store = configureStore();
//store.dispatch(loadDashboardInfo());
render(
    <Provider store={store}>
      <ConnectedRouter history={history}> 
          <AppRoute />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
  );