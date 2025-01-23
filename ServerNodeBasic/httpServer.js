// http core modules
const http = require('http')

// Routes with http module
const routes = {
    '/': function(request, response) {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.write('This is HOME page')
        response.end()
    },
    '/foo': function(request, response) {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.write('This is Foo page')
        response.end()
    }
}

http.createServer((request, response) => {

    for(let route in routes) {
        if(request.url === route) {
            return routes[route](request, response)
        }
    };

    response.writeHead(404, { 'Content-Type': 'text/plain' })
    response.write('Not found')
    response.end();

}).listen(1122);


console.log(`Server is running at: http://localhost:1122`)