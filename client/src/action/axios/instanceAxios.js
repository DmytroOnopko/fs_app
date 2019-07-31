const axios = require('axios');
const url = 'http://localhost:3001';

const instanceAxios = axios.create({
    baseURL: url,
    withCredentials: true
});

module.exports = instanceAxios;
module.exports.default = module.exports;