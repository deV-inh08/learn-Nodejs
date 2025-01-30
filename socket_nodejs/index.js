const express = require('express');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*" // Cho phép tất cả client kết nối
    }
});

// Middleware parse JSON
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Hello Socket.IO NodeJS');
});

// API nhận tin nhắn từ HTTP request và phát đến tất cả client qua WebSocket
app.post('/message', (req, res) => {
    const data = req.body;
    if (!data || !data.message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    // Gửi tin nhắn đến tất cả client
    io.emit('message-from-server-to-client', data.message);

    res.json({ success: true, message: 'Message broadcasted' });
});

// Lắng nghe sự kiện khi client kết nối
io.on('connection', (socket) => {
    console.log('A client connected:', socket.id);

    // Nhận tin nhắn từ client và phát lại cho tất cả client khác
    socket.on('new-message', (msg) => {
        io.emit('message-from-server-to-client', msg);
    });

    // Lắng nghe khi client ngắt kết nối
    socket.on('disconnect', () => {
        console.log('A client disconnected:', socket.id);
    });
});

// Khởi động server
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
