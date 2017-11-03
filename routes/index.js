const express = require('express'),
      request = require('request'),
      router = express.Router()

.get('/', (req, res) => {
  request('https://launchlibrary.net/1.2/launch/next/80', (err, response, body) => {
    if(err) return res.end(err.message);
    const launches = JSON.parse(body).launches;
    res.render('index', { launches });
  }).on('error', (e) => {
    console.log(e)
  }).end();
});

module.exports = router;
