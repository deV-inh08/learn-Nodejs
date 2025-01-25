const http = require('http')

// http server
const server = http.createServer((request, response) => {
    response.statusCode = 200;

    response.setHeader('Content-Type', 'text/plain')

    response.end('Hello world')
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000')
});


// http client
// send request to server

const options = {
    hostName: 'http://localhost:3000',
    method: 'GET'
}

const req = http.request(options, (res) => {
    console.log(`Status Code: ${res.statusCode}`)
    
    let data;

    res.on('data', (chunk) => {
        data = chunk
    })

    res.on('end', () => {
        console.log('Response Data:', data.toString())
    })
})

// handle error
req.on('error', (error) => {
    console.error('Request error:', error)
})

req.end()

