const process = require('process')
require('dotenv').config()


const { NODE_VERSION } = process.env

console.log(NODE_VERSION)

console.log(process.pid); // Output: ID của tiến trình
console.log(process.title); // Output: node
console.log(process.cwd()); // Output: thư mục hiện tại
console.log(process.argv); // Output: ['node', 'app.js', ...args]
