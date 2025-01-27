const dotenv = require('dotenv')
const name = require('./module/module1')
const { getInfor, sayBye } = require('./module/moduls2')
const { items, singlePerson } = require('./module/module3')
require('./module/module4')
dotenv.config()

console.log(items)

getInfor('Vinh', 20);
sayBye();

console.log(singlePerson)


 // you can run NODE_ENV=production node --watch index.js
console.log(process.env.NODE_ENV) // production
