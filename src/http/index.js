import axios from 'axios';

const host = '/';
const timeout = 10000; // 10s

const instance = axios.create({
    baseURL: host,
    timeout: timeout,
    validateStatus: (status) => {
        return status >= 200 && status < 300; // default
    },
});


// Add a request interceptor
instance.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error.text);
});

// response interceptor
instance.interceptors.response.use((res) => {
    return res;

}, (error) => {
    return Promise.reject(error.text || '请求错误');
});


export default instance