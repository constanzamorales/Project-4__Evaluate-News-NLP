var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mockAPIResponse = require('./mockAPI.js');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const apiKey = process.env.API_KEY;
console.log(`Your API key is ${process.env.API_KEY}`);

const app = express();

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
    console.log(`Running on localhost: ${port}`);
});

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

// Post Route
app.post('/addData', addData);
async function addData(req, res) {
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&of=json&url=${req.body.userURL}`);
    try {
        const data = await response.json();
        console.log(data);
        res.send(data);
    }
    catch (error) {
        console.log('An error ocurred: ', error);
    }
}

