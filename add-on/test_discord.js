const request = require('request')
const prompt = require('prompt-sync')()

let token = 'enter your token here'
const headers = { authorization: token }
const delay = 5
let interval
let count = 0
let channel = prompt('Enter the channel ID: ')

if (channel === '' || channel === null || channel === undefined) {
    return console.log('You must enter a channel ID')
}

setTimeout(() => {
    const url = `https://discord.com/api/v9/channels/${channel}/typing`

    interval = setInterval(() => {
        request.post({ url, headers }, (err, res, body) => {
            if (err) return console.error(err)
            count++
            console.log(`Sent ${count} requests`)
        })
    }, delay * 1000)
});