const process = require('process')
require('dotenv').config()


console.log(process.env.NODE_VERSION)

console.log(process.pid); // Output: ID của tiến trình
console.log(process.title); // Output: node
console.log(process.cwd()); // Output: thư mục hiện tại
console.log(process.argv); // Output: ['node', 'app.js', ...args]
