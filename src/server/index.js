var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const fetch = require("node-fetch");
const apiKey = process.env.API_KEY;
const app = express();

dotenv.config();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
app.user(express.urlencoded({ extended: false }));
app.user(express.json());
*/

// Use cors for cross origin allowance
app.use(cors());
// Initialize in the dist folder
app.use(express.static('dist'))

const port = 8081;
const server = app.listen(port, () => {
    console.log(`Running on port: ${port}`);
});

app.get('/', function (req, res) {
    // res.sendFile(path.resolve('dist/index.html'))
    res.sendFile(path.resolve('src/client/views/index.html'))
});

/*
app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});
*/

// Post Route
app.post('/addData', addData);
async function addData(req, res) {
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${req.body.userURL}&lang=auto`);
    try {
        const newData = await response.json();
        res.send(newData);
    }
    catch (error) {
        console.log('An error ocurred: ', error);
    }
};

