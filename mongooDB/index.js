// core modules (30- 34)
const http = require('http')

const { databaseServices } = require('./connect')
const { addProduct, searchProduct } = require('./controllers/products.controller')

// routes
const routes = {
    '/': function(request, response) {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/plain');
        response.end('Hello world')
    },
    '/add-product': (request, response) => {
        addProduct(request, response)
    },
    '/search-product': (request, response) => {
        // get 'query' from request
        searchProduct(request, response)
        
    }
}

// create Server
const server = http.createServer((request, response) => {
    const { url } = request
    const handleURL = url.split('?')[0]
    if(routes[handleURL]) {
        return routes[handleURL](request, response)
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({ message: 'Page not Found' }))
    }
})

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000')
});

databaseServices.connect()

