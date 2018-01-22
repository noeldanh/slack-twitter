const request = require('request')
const config = require('./config');
const Twit = require('twit');
const T = new Twit(config);

const slackWebHookURL = config.webhookURL;

function streamTweetsPost(hashtag) {
    request.post({url: slackWebHookURL, json: {text:hashtag}}, (err, response) => {
        if(err) {
            console.log('uh oh error');
        } else {
            console.log('successfuly sent');
        }
    })
}

module.exports = {
    postTweets: async(req, res) => {
        const text = await req.body.text;
        T.post('statuses/update', { status: text, language: 'en' }, function(err, data, response) {
            if(err) {
                console.log('Error sending tweet')
            } else {
                console.log(data)
            }
        })
    },
    getHashtagTweets: (req, res) => {
        const hashtagName = req.body.text;
        let stream = T.stream('statuses/filter', {track: hashtagName, language: 'en'});

        stream.on('tweet', (tweet) => {
          const hashtagTweets = tweet.text;
          streamTweetsPost(hashtagTweets);
          // post hashtag tweets onto slack
        })

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

        setTimeout(() => stream.stop(), 5000)
    }
}
