'use strict';

const axios = require('axios').default;
const { Client } = require("discord.js")

async function CheckToken(token) {
    let client = new Client();
    try {
        await client.login(token).then(() => {
            return true
        })
    } catch {
        return false
    }
}

async function CheckParams(message, channel, token) {
    var boolmessage, boolchannel, booltoken;

    if (typeof channel === 'string' || channel instanceof String) { boolchannel = true } else {
        throw new Error("Please make sure that the channel parameter is a string!")
    }
    if (typeof token === 'string' || token instanceof String) { booltoken = true } else {
        throw new Error("Please make sure that the token parameter is a string!")
    }
    if (typeof message === 'string' || message instanceof String) { boolmessage = true }  else {
        throw new Error("Please make sure that the message parameter is a string!")
    }

    if (boolchannel && boolmessage && booltoken) { return true }
}

function ErrorOutput(error) {
    console.error("Either the channel ID is invalid/unable, or there has been an error with the discord API.")
    console.error(error)
}

function Post(message, channel, token) {
    try {
        const URL = `https://discord.com/api/v9/channels/${channel}/messages`
        const payload = { content: `${message}` }

        if (CheckParams(message, channel, token)) {
            axios.post(URL, payload, { headers: { 'authorization': token } })
        } 
    } catch (error) {
        ErrorOutput(error)
    }
}

function PostLoop(message, channel, token, min, max) {
    try {
        if (CheckParams(message, channel, token)) {
            if (!isNaN(min) && !isNaN(max)) {
                const URL = `https://discord.com/api/v9/channels/${channel}/messages`
                const payload = { content: `${message}` }
    
                var interval = Math.floor(Math.random()*(max - min) + min);
                setInterval(async () => {
                    interval = Math.floor(Math.random()*(max - min) + min);
                    await axios.post(URL, payload, { headers: { 'authorization': token } });
                }, interval);
            } else {
                throw new Error("Please make sure that the min and max parameters are numbers!")
            }
        }
    } catch (error) {
        ErrorOutput(error)
    }
}

function SpamPost(message, channel, token, amount) {
    try {
        const URL = `https://discord.com/api/v9/channels/${channel}/messages`
        const payload = { content: `${message}` }

        if (!Number.isNaN(amount)) {
            for (var i = 0; i <= amount; i++) {
                axios.post(URL, payload, { headers: { 'authorization': token } })
            }
        } else if (amount == "infinite") {
            while (true) {
                axios.post(URL, payload, { headers: { 'authorization': token } })
            }
        } else {
            throw new Error("Please add a valid number or add \"infinity\" as your amount argument!")
        }
    } catch (error) {
        ErrorOutput(error)
    }
}

module.exports = {
    Post, PostLoop, SpamPost
}
