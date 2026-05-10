const axios = require('axios');

const API_KEY = process.env.ALPACA_KEY;
const API_SECRET = process.env.ALPACA_SECRET

const ALPACA_MARKET_ENDPOINT = "https://data.alpaca.markets/v2/stocks/"

const getLatestTrades = async () => {
    const symbols = ["AAPL", "MSFT", "TSLA", "AMZN"];

    const request = symbols.map(symb => axios.get(`${ALPACA_MARKET_ENDPOINT}${symb}/trades/latest`, {
        headers: {
            'APCA-API-KEY-ID': API_KEY,
            'APCA-API-SECRET-KEY': API_SECRET
        }
    }))

    const responses = await Promise.all(request);

    return responses.map((res, index) => ({
        symbol: symbols[index],
        price: res.data.trade.p,
        timestamp: res.data.trade.t
    }));
};

module.exports = {
    getLatestTrades
}