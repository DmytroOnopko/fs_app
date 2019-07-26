const axios = require('axios');
const url = 'http://localhost:3001';

const instanceAxios = axios.create({
    baseURL: url,
    headers: {'Authorization' : window.localStorage.getItem('token')}
});

module.exports = instanceAxios;
module.exports.default = module.exports;