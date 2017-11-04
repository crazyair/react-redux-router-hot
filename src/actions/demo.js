import http from '../http'
import {message} from 'antd';

export const types = {
    GET_LIST: 'GET_LIST',
};

export const loadData = (paramsData) => (dispatch) => {
    return http.get('/api/users', {params: paramsData}).then(response => {
        const {code, data, msg} = response.data;
        if (code === '0000') {
            dispatch({
                type: types.GET_LIST,
                data: data,
            });
            return Promise.resolve(data);
        } else {
            message.error(msg);
            return Promise.reject(msg);
        }
    });
};
