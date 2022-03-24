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

function ErrorOutput() {
    console.log("Either the channel ID is invalid/unable, or there has been an error with the discord API.")
}

function Post(message, channel, token) {
    try {
        const URL = `https://discord.com/api/v9/channels/${channel}/messages`
        const payload = { content: `${message}` }
        axios.post(URL, payload, { headers: { 'authorization': token } })
    } catch {
        ErrorOutput()
    }
}

function PostInterval(message, channel, token, interval) {
    try {
        const URL = `https://discord.com/api/v9/channels/${channel}/messages`
        const payload = { content: `${message}` }
        while (true) {
            setTimeout(() => { axios.post(URL, payload, { headers: { 'authorization': token } }); }, interval);
        }
    } catch {
        ErrorOutput()
    }
}

function SpamPost(message, channel, token, amount) {
    try {
        const URL = `https://discord.com/api/v9/channels/${channel}/messages`
        const payload = { content: `${message}` }

        if (!Number.isNaN(amount)) {
            for (var i = 0; i >= amount; i++) {
                axios.post(URL, payload, { headers: { 'authorization': token } })
            }
        } else if (amount == "infinite") {
            while (true) {
                axios.post(URL, payload, { headers: { 'authorization': token } })
            }
        } else {
            throw new Error("Please add a valid number or add \"infinity\" as your amount argument!")
        }
    } catch {
        ErrorOutput()
    }
}

module.exports = {
    Post, PostInterval, SpamPost
}