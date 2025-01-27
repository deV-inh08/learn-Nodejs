const url = require('url')
const { Products } = require('../models/product.model')
const { databaseServices } = require('../connect')

function addProduct(request, response) {
    if(request.method === 'POST') {
        // Data is JSON
        let body = ''
        request.on('data', (chunk) => {
            body += chunk
        })

        request.on('end', () => {
            // parse data => Object
            const { title, description, price } = JSON.parse(body);
            if(!title || !description || !price) {
                response.end({
                    message: 'Missed fields'
                })
            } else {
                // created collection 
                const collection = databaseServices.products;
                const result = collection.insertOne(new Products({ title, description, price }))
                
                // return status code (Created Product) 
                response.statusCode = 201
                response.end(JSON.stringify({
                    message: 'Product is added successfully',
                    result: result
                }))
            }
        })
    } else {
        response.statusCode = 405;
        response.end(JSON.stringify({ message: 'Method are not allowed' }))
    }
};


async function searchProduct(request, response) {
    // get 'query' from request url
    const parseURL = url.parse(request.url, true)
    const { product } = parseURL.query
    const collection = databaseServices.products;
    await collection.createIndex({
        title: 'text',
        description: 'text'
    })
    const result = await collection.find({
        $text: {
            $search: product
        }
    })
    .toArray() // convert to Array

    response.end(JSON.stringify({
        message: 'Query successfully',
        result: result
    }))
   
}

module.exports = {
    addProduct,
    searchProduct
};
