var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require('aylien_textapi');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
//export * from "./js/nameChecker";
//export * from "./js/formHandler";

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors());


dotenv.config();




app.use(express.static('dist'))

console.log(__dirname)

// https://api.aylien.com/api/v1 <- endpoint
var textapi = new aylien({
   application_id: process.env.API_ID,
   application_key: process.env.API_KEY
});


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Server Initialized: port -> (8080)')
})

app.post('/ETPhoneHome', function (req, res) {
  console.log('API call');

  textapi.sentiment({
    url: req.body.url,
    mode: 'document',
  }, function(error, response) {

    if (error === null) {
      console.log('(null is good) Error: ',error);
    }
    console.log('Returning response')
    res.json(response);
  });
})
