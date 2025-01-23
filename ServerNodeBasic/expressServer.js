const express = require('express')

const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
    response.send('Hello world')
})

app.get('/menu', (request, response) => {
    response.send('This is Menu page')
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})