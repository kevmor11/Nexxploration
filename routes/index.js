const express = require('express'),
      request = require('request'),
      router = express.Router()

.get('/', (req, res) => {
  request('https://launchlibrary.net/1.2/launch/next/30', (error, response, body) => {
    const launches = JSON.parse(body).launches;
    res.render('index', { launches });
  });
});

module.exports = router;
