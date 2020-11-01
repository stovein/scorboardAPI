require('dotenv').config();

const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const getEnv = require("./src/helperFunctions/getEnv");

// Database Connection
const connectionUrl = getEnv('DATABASE_URI');
const options = {useNewUrlParser: true, useUnifiedTopology:true};

mongoose.connect(connectionUrl, options);

require('./src/test/addTestData')();

// Routing
const app = express();
app.use(bodyParser.json());
app.get('/' ,(req, res) => res.send('Hello World'))

const port = getEnv('PORT');
app.listen(
    port, () => console.log(`Example app listening on port ${port}!`)
);