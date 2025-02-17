// YOUR CODE HERE
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const cors = require("cors");
const Store = require("./models/store");
const app = express();

app.use(express.json());

app.use(morgan('tiny'));

app.use(cors());

app.get('/', async (req,res) => {
    res.json({ping: "pong"});
});

app.get('/store/:productId', async (req, res) => {
    const id = req.params.productId;
    const product = await Store.fetchByID(id);
    res.status(200).json({product});
})

app.get('/store', async (req, res) => {
    const response = await axios.get("https://codepath-store-api.herokuapp.com/store");
    const products = response.data;
    res.json(products);
});

module.exports = app;
