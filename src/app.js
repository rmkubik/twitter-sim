"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Twitter = require("twitter");
console.log('hello world');
var client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});
client.get('friends/list', function (error, response) {
    console.log(response.users.length);
});
client.post('statuses/update', { status: 'Hello world! #myfirstTweet' }, function (error, tweet, response) {
    if (error)
        throw error;
    console.log(tweet); // Tweet body. 
    console.log(response); // Raw response object. 
});
//# sourceMappingURL=app.js.map