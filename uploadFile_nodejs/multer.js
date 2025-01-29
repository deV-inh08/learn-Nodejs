// multer dependency ExpressJS
const express = require('express')
const fs = require('fs')
const path = require('path')
const multer = require('multer')

const app = express();
const PORT = 3001

// config multer
const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        const uploadDir = './uploads';
        if(!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir)
        }
        callback(null, uploadDir)
    },
    filename: (request, file, callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});


// filter upload file
const fileFilter = (request, file, callback) => {
    const allowedExtUpload = ['.png', '.jpg', '.jpeg', '.gif'];
    const ext = path.extname(file.originalname)
    if(allowedExtUpload.includes(ext)) {
        callback(null, true)
    } else {
        callback(new Error('Only images are allowed !'), false)
    }
}

const upload = multer({ storage, fileFilter }).single('file')

app.get('/', (request, response) => {
    response.send('Hello Multer with Express')
})

app.post('/uploads', (request, response) => {
    
    upload(request, response, (error) => {
        
        if(error) {
            return response.end(`Error uploading file: ${error.message}`);
        }
        if (!request.file) {
            return response.status(400).send("No file uploaded.");
        }
        response.end("File is uploaded");
    })
    
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
