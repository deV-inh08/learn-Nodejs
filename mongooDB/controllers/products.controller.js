function addProduct(request, response) {
    if(request.method === 'POST') {

    } else {
        response.statusCode = 405;
        response.end(JSON.stringify({ message: 'Method are not allowed' }))
    }
}