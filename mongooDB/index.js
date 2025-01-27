// core modules (30- 34)
const http = require('http')

const { databaseServices } = require('./connect')
const { Products } = require('./models/product.model')

// routes
const routes = {
    '/': function(request, response) {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/plain');
        response.end('Hello world')
    },
    '/add-product': function(request, response) {
        if(request.method === 'POST') {
            let body = ''
            request.on('data', (chunk) => { // get data from 'client' request (buffer)
                body += chunk
            });

            request.on('end', async () => {
                try {
                    const { title, description, price } = JSON.parse(body);
                    if(!title || !description || !price) {
                        response.statusCode = 400 // Bad request
                        response.end(JSON.stringify({ message: 'Missing required fields' }))
                        return;
                    } else {
                        const collection = databaseServices.products;
                        const result = await collection.insertOne(new Products({ title, description, price }))
                        response.statusCode = 201; // Created
                        response.end(JSON.stringify({
                            message: 'Product added Successfully',
                            product: result
                        }));
                    }
                } catch(error) {
                    console.log(error)
                    response.statusCode = 500;
                    response.end(JSON.stringify({
                        message: 'Error adding products',
                        error
                    }))
                }
            })
        } else {
            response.statusCode = 405;
            response.end(JSON.stringify({ message: 'Method not allowed' }))
        }
    }
}

// create Server
const server = http.createServer((request, response) => {
    const { url } = request
    if(routes[url]) {
        return routes[url](request, response)
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({ message: 'Page not Found' }))
    }
})

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000')
});

databaseServices.connect()

