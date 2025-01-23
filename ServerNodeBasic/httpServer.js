// http core modules
const http = require('http')

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    response.write('Hello world');

    response.end();
}).listen(1122);


console.log(`Server is running at: http://localhost:1122`)