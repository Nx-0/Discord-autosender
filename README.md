<h1 align="center">discord-autosender</h1>
<br>

<p align="center">A package that allows you to automatically send messages through a discord account!</p>

## With this package, you can:
 - Create automated messages
 - Create spam messages from your account
 - Send messages in an interval loop
 - Exploit discord bots (like claiming daily prizes for example)
 - And more!


## Install from NPM
```
npm i discord-autosender
```


## Usage
```js
const autosend = require("discord-autosender")

var message = "This message has been sent from an automated script!"
var channelID = "945821788531732500"
var tokenID = "mfa.HrKVKI8EIvRCSTrrfvNL6x9yp9jRDyvheux8PjwUCBigMVDdn8vRFw3GgfGxbB2pAvYOnGa7cJw2BPVZk-KJ"

autosend.Post(message, channelID, tokenID)
```


## How to get your discord token
- Please do not get confused between a `bot` token and an `account` token, just to be 100% clear.
- I recommend you watch [this video](https://www.youtube.com/watch?v=YEgFvgg7ZPI) to obtain your token. Please be careful to not share it with anybody else.


## Functions
```js
// This will post a message using your discord token with the channel ID provided
autosend.Post(message, channelID, tokenID)

// This will do the same as above but it'll loop with the given mimimum and maximum interval delay parameter in milliseconds, this is added to avoid bot detection from discord
autosend.PostLoop(message, channelID, tokenID, min, max)

// This will spam the message in a set amount of times, might break due to how dodgy this function is
autosend.SpamSend(message, channelID, tokenID, amount)
```


## Credits
- kernel: https://github.com/Existential-Kernel (please contact me on discord at nonce#0001 if you encounter any issues or if you have any questions. I'll be happy to help!)