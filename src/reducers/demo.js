import {types} from '../actions/demo';

export default (state = {}, action) => {
    switch (action.type) {
        case types.GET_LIST:
            return {
                ...state,
                demoData: action.data,
            };
        default :
            return state;
    }
};
