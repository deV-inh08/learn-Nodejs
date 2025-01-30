// 1. created server

// 2. fire event 'connection' => recevice data => send to client => disconnect

// 3. user access API endpoint ('/message') => client send data to server (get data from client) => fire data to client


// 1. created server
const http = require('http');
const { Server } = require('socket.io')
const express = require('express')
const app = express() // middleware (trung gian)
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*'
    }
})

// 2 from user (client) => 'POST' server 
app.get('/', (request, response) => {
    response.send('Hello socket IO Nodejs')
});

app.post('/message', (request, response) => {
    // get data from client
    const data = request.body;
    // if not data || if have data
    if(!data || !data.message) {
        response.status(400).json({
            error: 'Message is required !!'
        })
    }
    // fire to client
    io.emit('send-message-from-server-to-client', data)
});

// 1: handle socket connection
io.on('connection', (socket) => {
    // get data
    socket.on('new-message', (msg) => {
        io.emit('send-message-from-server-to-client', msg)
    })

    // disconnect
    socket.on('disconnect', () => {
        console.log('Socket disconnect')
    })
})

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000')
})