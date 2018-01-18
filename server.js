const express = require('express');
const bodyParser = require('body-parser');
const request = require('request')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const config = require('./config');
// add twit module for streamlined slack webhooks
const Twit = require('twit');

var T = new Twit(config);
var slackWebHookURL = config.webhookURL;

// change hashtagName to send different values -- can also use an array [apple,banna,orange] to query more hashtag values
var hashtagName = '#apple'

// choose hashtag values and filter
var stream = T.stream('statuses/filter', {track: hashtagName, language: 'en'});

// start streaming most recent hashtag tweets
stream.on('tweet', (tweet) => {
  request.post({url: slackWebHookURL, json: {text:tweet.text}}, (err, response) => {
      if(err) {
          console.log('uh oh error')
      } else {
          console.log('successfuly sent')
      }
  })
})

// disconnect stream
stream.on('disconnect', function (disconn) {
  console.log('disconnect')
})

// connect stream
stream.on('connect', function (conn) {
  console.log('connecting')
})

// send status codes if errors
stream.on('reconnect', function (reconn, res, interval) {
  console.log('reconnecting. statusCode:', res.statusCode)
})


const port = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log('Listening on port 3000');
})
