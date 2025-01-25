// Nodejs has 3 basic ways to handle exception/errors
// 1 try-catch
// 2 error as the first argument to a callback
// 3 emit an error event using eventEmitter

const http = require('http')
const fs = require('fs')

// Example 1: try-catch
function doSomeSynchounousOpeator(req, res) {
    if (req.body.username === '') {
        throw new Error('User name cannot be empty')
    };

    return true
};

// example 2: Callback
fs.writeFile('file.txt', 'Hello world', (err) => {
    if (err) {
        console.log(err)
    }
})

fs.readFile('file.txt', (err, data) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log(data)
    }
})


// example 3: emit event
const EventEmitter = require('events')

const myEmitter = new EventEmitter();
myEmitter.on('error', (err) => {
    console.error('An error occurred', err.message)
})

myEmitter.emit('error', new Error('something went wrong'))



http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    try {
        // synchronous code
        doSomeSynchounousOpeator(req, res)
    } catch (err) {
        console.log(err)
    }

    res.write('Hello world')

    res.end()
}).listen(3000)


// Sự kiện uncaughtException: Có thể được sử dụng để xử lý các lỗi chưa xử lý, 
// nhưng không được khuyến khích cho ứng dụng sản xuất vì nó có thể gây ra trạng thái không ổn định
process.on('uncaughtException', (err) => {
    console.error('Unhandled Exception:', err.message);
    // Có thể dọn dẹp tài nguyên hoặc ghi log trước khi thoát ứng dụng
    process.exit(1); // Thoát với mã lỗi
});

// Gây lỗi không xử lý
throw new Error('This is an unhandled exception!');


// Khi một Promise bị từ chối nhưng không được .catch(), Node.js sẽ phát ra sự kiện unhandledRejection.
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', reason.message);
});

// Gây ra Promise không xử lý
Promise.reject(new Error('Promise was rejected without catch'));
