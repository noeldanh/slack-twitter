A bidirectional communication system between slack and twitter using Slack API and Twitter API.

## Requirements

1. Node.js
2. Slack API
3. Twitter API

## Usage

1. Post a stream of tweets from a hashtag value on twitter
2. Post tweets from slack

## Installation
1. Download the repository
2. Run terminal command: npm install
3. Create a file called "config.js" in the root of the project
4. Create a Slack App
5. Create a Twitter App
6. Add all access tokens, keys and urls to config.js
7. Download https://ngrok.com/download to expose my local web server via an externally-accessible domain
7. Run npm start

## config.js Setup
1. Example:
    const appsettings = {
        consumer_key: 'KEY HERE',
        consumer_secret: 'SECRET HERE',
        access_token: 'TOKEN HERE',
        access_token_secret: 'TOKEN SECRET HERE',
        timeout_ms: 60*1000,
        webhookURL: 'WEBHOOK URL HERE'
    }
    module.exports = appsettings;

## Ngrok Optional (Outgoing Webhooks/Slash Commands)
1.	Download ngrok and run in terminal with this command: ./ngrok http ‘port number’.
2.  For a better understanding of what ngrok does watch video https://www.youtube.com/watch?v=UaxqJUXqvro

## Slack Setup
1. Go to https://slack.com/get-started and create new workspace
2. Name your app and select which workspace to add it to
3. Go to https://<WORKSPACE_NAME_HERE>.slack.com/apps/A0F82E8CA-slash-commands?page=1
4. Click add configuration
5. Choose a Command /tweet - Add Slash Command Integration
6. Go to integration settings - Add URL http://<domain_name_here.com/tweet
7. Save Integration
8. Repeat steps 3 to 7 to create second slash command, but replace /tweet with /hashtag

## Twitter Setup
1. Sign up for a twitter account
2. Go to https://apps.twitter.com/ and click create new app
3. Go to twitter standard API
4. Fill out application details
5. Save all access tokens and keys to config.js

## How To Use
1. Go to slack channel type /tweet "Hello World" to send to your twitter account
2. Go to slack channel type /hashtag "Apple" for most recent hashtags from twitter (Streams Tweets for only 5 seconds)
3. Checkout https://github.com/ttezel/twit for various endpoints on twitter

## Future updates
1. Further develop /hashtag command to choose the duration of a hashtag stream
2. Add all endpoints from Twit module for full integration of twitter to slack
