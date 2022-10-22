const request = require('request')
const prompt = require('prompt-sync')()

let token = 'enter your token here'
const headers = { authorization: token }
const delay = 5
let interval
let count = 0

if (token === '' || token === null || token === undefined || token === 'enter your token here') {
    return console.log('You must change the token variable to your token')
}

let channelId = prompt('Enter the channel ID: ')

if (channelId === '' || channelId === null || channelId === undefined || isNaN(channelId) === true) {
    return console.log('You must enter a channel ID with only numbers')
}

setTimeout(() => {
    const url = `https://discord.com/api/v9/channels/${channelId}/typing`

    interval = setInterval(() => {
        request.post({ url, headers }, (err, res, body) => {
            if (err) return console.error(err)
            count++
            console.log(`Sent ${count} requests`)
        })
    }, delay * 1000)
});