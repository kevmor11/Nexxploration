const express = require('express'),
      request = require('request'),
      API = 'https://launchlibrary.net/1.2',
      router = express.Router()

.get('/', (req, res) => {
  request(`${API}/launch/next/30`, (error, response, body) => {
    const launches = JSON.parse(body).launches;
    console.log('error:', error);
    console.log('body:', launches[0]);
    res.render('index', { launches });
  });
});

// function queryAPI(parameter) {
//   request(`${API}/${parameter}`, (error, response, body) => {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
//     return body;
//   });
// }

module.exports = router;
