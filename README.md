A bidirectional communication system between slack and twitter using Slack API and Twitter API.


## Requirements

1. Node.js
2. Slack API
3. Twitter API

## Usage

Allows users to detect any hashtag tweets from twitter, post the tweet on slack and send tweets from slack

## Installation
1. Download the repository
2. Run terminal command: npm install
3. Create a file called "config.js" in the root of the project
4. Create a Slack App
5. Create a Twitter App
6. Add all access tokens, keys and urls to config js
7. Run nodemon server.js to test

## Slack Setup
1. Click create new APP at Slack App
2. Name your app and select which workspace to add it to
3. Activate the web hooks by sliding on
4. Click Add New Webhook at the bottom
5. Select and authorize the channel you would like to receive incoming messages to
6. Copy the newly generated Webhook URL to the .config file of your project

## Tips
1. To change hashtag value go to server.js enter new value for var hashtagName
2. Twitter API may timeout due to multiple requests, if so, request new access tokens
3. Checkout https://github.com/ttezel/twit for various endpoints on twitter


## Future Updates
1. Keep on the lookout for integration of slash commands through slack to communicate to multiple twitter endpoints
2. Instead of hard coding hashtagName it will be dynamic and use outgoing webhooks
