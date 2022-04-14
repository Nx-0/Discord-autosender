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

function ErrorOutput(error) {
    console.error("Either the channel ID is invalid/unable, or there has been an error with the discord API.")
    console.error(error)
}

function Post(message, channel, token) {
    try {
        const URL = `https://discord.com/api/v9/channels/${channel}/messages`
        const payload = { content: `${message}` }
        axios.post(URL, payload, { headers: { 'authorization': token } })
    } catch (error) {
        ErrorOutput(error)
    }
}

function PostInterval(message, channel, token, min, max) {
    try {
        const URL = `https://discord.com/api/v9/channels/${channel}/messages`
        const payload = { content: `${message}` }

        var interval = Math.floor(Math.random()*(max - min) + min);
        console.log(interval)
        setInterval(async () => {
            interval = Math.floor(Math.random()*(max - min) + min);
            await axios.post(URL, payload, { headers: { 'authorization': token } });
        }, interval);
    } catch (error) {
        ErrorOutput(error)
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
    } catch (error) {
        ErrorOutput(error)
    }
}

module.exports = {
    Post, PostInterval, SpamPost
}
