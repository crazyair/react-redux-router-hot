import {combineReducers} from 'redux';
import demo from './demo'
import {routerReducer as routing} from 'react-router-redux'

const rootReducer = combineReducers({
    demo,
    routing
});

export default rootReducer;
