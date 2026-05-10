const express = require('express');

const { getLatestTrades } = require("../services/alpacaService");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const { data } = await getLatestTrades();
        res.status( data && data.length > 0 ? 200 : 404).send(data && data.length > 0 ? data : { message: "No data found" });
    } catch (error) {
        console.error("Error fetching market data:", error);
        res.status(500).send(error.message);
    }
})

module.exports = router;