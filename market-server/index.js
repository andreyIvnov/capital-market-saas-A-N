const express =require('express');
const cors = require('cors');
require('dotenv').config();

const marketRoutes = require('./routes/marketRoutes')

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/market", marketRoutes);

app.listen(process.env.PORT, () => {
    console.log(`market-server listening at http://localhost:${process.env.PORT}`);
})