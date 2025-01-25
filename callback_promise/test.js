// Promisifying a callback
const fs = require('fs').promises

const { resolve } = require('path')
const util = require('util')

// created file
fs.writeFile('data.txt', 'Hello world', (err) => {
    if(err) {
        throw err
    }
})

// read file (this use callback)
// fs.readFile('file.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.error('Error:', err)
//     } else {
//         console.log('Data:', data)
//     }
// })


// convert to promise
fs.readFile('data.txt', 'utf8')
    .then(data => console.log('File data:', data))
    .catch((err) => console.log('Error:', err))


const sampleCallback = (arg1, arg2, callback) => {
    // callback recieve 2 arguments: error(null), result
    callback(null, `Result: ${arg1}, ${arg2}`)
}

// used util.promisify convert promise
const samplePromisify =  util.promisify(sampleCallback)

samplePromisify('Hello', 'world2')
    .then((data) => console.log('Data:', data))
    .catch((err) => console.log('Error:', err))



// Promisify with setTimeout
function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function example() {
    console.log('Starting waiting...')
    await wait(2000)
    console.log('Finished waiting') 
}

example()