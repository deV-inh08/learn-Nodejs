const EventEmitter = require('events')
const http = require('http')


// created events
const myEmitter = new EventEmitter()

// register events
myEmitter.on('hello', (name) => {
    console.log(`Hello ${name}`)
})

myEmitter.on('bye', () => {
    console.log(`Bye bye`)
})

// active event
myEmitter.emit('hello', 'Vinh')

myEmitter.emit('bye')

// Get list event
console.log(myEmitter.eventNames()) // [ 'hello', 'bye' ]


// Analytics HTTP
myEmitter.on('request', (method, request) => {
    console.log(`Method: ${method}, URL: ${request}`)
})


const server = http.createServer((request, response) => {
    myEmitter.emit('request', request.method, request.url)

    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    response.write('Hello world')

    response.end()
});

server.listen(3000)


// count event
console.log(myEmitter.listenerCount('bye'))