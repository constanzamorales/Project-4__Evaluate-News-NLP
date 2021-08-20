var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const cors = require('cors');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

const apiKey = process.env.API_KEY;
console.log(`Your API key is ${process.env.API_KEY}`);

const app = express()
app.user(express.urlencoded({ extended: false }));
app.user(express.json());
app.use(express.static('dist'))

const port = 8081;
const server = app.listen(port, () => {
    console.log(`Running on localhost: ${port}`);
});

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
