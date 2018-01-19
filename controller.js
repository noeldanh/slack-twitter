const request = require('request')
const config = require('./config');
const Twit = require('twit');
const T = new Twit(config);

const slackWebHookURL = config.webhookURL;

module.exports = {
    postTweets: (req, res) => {
        let text = req.body.text;
        T.post('statuses/update', { status: text, language: 'en' }, function(err, data, response) {
            if(err) {
                console.log('Error sending tweet')
            } else {
                // if you want to know the data/response
                // console.log(data)
                // console.log(response)
            }
        })
    },
    getHashtagTweets: (req, res) => {
        let hashtagName = req.body.text;
        let stream = T.stream('statuses/filter', {track: hashtagName, language: 'en'});
        // start streaming most recent hashtag tweets
            stream.on('tweet', (tweet) => {
              request.post({url: slackWebHookURL, json: {text:tweet.text}}, (err, response) => {
                  if(err) {
                      console.log('uh oh error');
                  } else {
                      console.log('successfuly sent');
                  }
              })
            });
            stream.on('disconnect', function (disconn) {
              console.log('disconnect');
            });
            // connect stream
            stream.on('connect', function (conn) {
              console.log('connecting');
            });
            // send status codes if errors
            stream.on('reconnect', function (reconn, res, interval) {
              console.log('reconnecting. statusCode:', res.statusCode);
            });
    }
}
