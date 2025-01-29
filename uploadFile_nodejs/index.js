// Have 2 library handling upload file in NodeJS

// 1: Multer {Express Js}
// 2: Formiable (don't dependenci Express)

const http = require('http');
const formiable = require('formidable');
const fs = require('fs');

// auto created folder
const uploadDir = './uploads';

const routes = {
    '/': function(request, response) {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html')
        response.end('Hello nodejs server')
    },
    '/uploads': function(request, response) {
        if(!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir)
        };
        if(request.url === '/uploads' && (request.method).toLowerCase() === 'post') {
            const form = new formiable.IncomingForm();
            form.uploadDir = './uploads'; 

            form.parse(request, (err, fields, files) => {
                if(err) {
                    response.writeHead(500, { 'Content-Type': 'text/plain' })
                    response.end('Error uploading file')
                    return;
                }

                const file = files.file; // file is from name HTML input tag
                const [{ filepath }] = file;
                const newPath = `./uploads/${file[0].originalFilename}`

                // // Move file
                fs.rename(filepath, newPath, (err) => {
                    if(err) {
                        response.writeHead(500, { 'Content-Type': 'text/plain' })
                        response.end('Error moving file')
                        return;
                    }

                    response.writeHead(200, { 'Content-Type': 'text/plain' })
                    response.end('File uploaded successfully')
                })
            })
        }
    }
}

const server = http.createServer((request, response) => {
    for(let route in routes) {
        if(route === request.url) {
            console.log(route === request.url)
            return routes[request.url](request, response)
        }
    }   
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000')
})