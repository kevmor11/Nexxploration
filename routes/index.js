require('dotenv').load();

const express = require('express'),
      request = require('request'),
      API = process.env.API,
      router = express.Router()

/* GET home page. */
.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

function queryAPI(parameter) {
  request(`${API}/${parameter}`, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });
}

queryAPI('agency');

module.exports = router;
