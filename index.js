require('dotenv').config();

const express = require('express');
const bodyParser = require("body-parser");
const getEnv = require("./src/helperFunctions/getEnv");


const port = getEnv('PORT');


// Routing
const app = express();
app.use(bodyParser.json());
app.get('/' ,(req, res) => res.send('Hello World'))



app.listen(
    port, () => console.log(`Example app listening on port ${port}!`)
);