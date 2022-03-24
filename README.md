<h1 align="center">Discord-autosender</h1>
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
npm i Discord-autosender --save
```


## Usage
```js
const autosend = require("Discord-autosender")

var message = "This message has been sent from an automated script!"
var channelID = 945821788531732500
var tokenID = "mfa.HrKVKI8EIvRCSTrrfvNL6x9yp9jRDyvheux8PjwUCBigMVDdn8vRFw3GgfGxbB2pAvYOnGa7cJw2BPVZk-KJ"

Post(message, channelID, tokenID)
```


## Options
```js
// This will post a message using the discord token and channelID provided
Post(message, channelID, tokenID)

// This will do the same as above but with an interval parameter in milliseconds
PostInterval(message, channelID, tokenID, milliseconds)

// This will spam the message in a set amount of times, might break due to how dodgy this function is
SpamSend(message, channelID, tokenID, amount)
```