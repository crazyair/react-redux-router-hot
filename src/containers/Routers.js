import React from 'react'
import {Route, Router, IndexRoute, IndexRedirect, Link, Redirect} from 'react-router'
import App from './App';
import Demo from './demo';

export default (store) => {
    return (
        <Route path="/">
            <IndexRedirect to="/app"/>
            <Route path="/app" component={App}>
                <IndexRedirect to="/app/demo"/>
                <Route path="/app/demo" component={Demo}/>
            </Route>
        </Route>
    );
};
