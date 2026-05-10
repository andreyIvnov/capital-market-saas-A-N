const axios = require('axios');

const API = "http://localhost:3000/api/market";

const getMarketData = () => axios.get(API);

export default {
    getMarketData
};