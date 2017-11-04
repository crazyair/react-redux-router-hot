import React from 'react';
import {Provider} from 'react-redux'
import Routers from './containers/Routers';
import {Router} from 'react-router'


export default class Root extends React.Component {
    render() {
        const {store, history} = this.props;
        if (!this.routeConfig) this.routeConfig = Routers(store);
        return (
            <Provider store={store}>
                <Router history={history} routes={this.routeConfig}/>
            </Provider>
        );
    }
}