var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var AYLIENTextAPI = require('aylien_textapi');
const dotenv = require('dotenv');
dotenv.config();


const app = express()

app.use(express.static('dist'))

console.log(__dirname)

var textapi = new aylien({
   application_id: process.env.API_ID,
   application_key: process.env.API_KEY
});

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
