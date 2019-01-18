import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/App';


export default  (
    
        <Switch>
            <Route exact path="/" component={App} />
        </Switch>
    
);