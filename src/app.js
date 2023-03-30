require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const dbConect = require('./config/mongo');

app.use(cors());
app.use(express.json());
const port = process.env.PORT;

app.use('/api', require('./routes'));

app.listen(port, () => {
    console.log('escucha en puerto:'+port);
})

dbConect();
