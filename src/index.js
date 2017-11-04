import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import {AppContainer} from 'react-hot-loader'
import {Router, browserHistory} from 'react-router'
import configureStore from './stores/configureStore'

const store = configureStore();

function startApp(Root) {
    ReactDOM.render(
        <AppContainer warnings={false}>
            <Root store={store} history={browserHistory}/>
        </AppContainer>, document.getElementById("root"),);
}

startApp(Root);
if (module.hot) {
    module.hot.accept('./Root', (e) => {
        startApp(Root);
    })
}
registerServiceWorker();
