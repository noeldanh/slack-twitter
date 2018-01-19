const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controller = require('./controller')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/tweet', controller.postTweets)
app.post('/hashtag', controller.getHashtagTweets);

const port = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log('Listening on port 3000');
})
