import axios from "axios";

const API = "http://localhost:3000/api/market";

const getMarketData = () => axios.get(API);

export {
    getMarketData
}