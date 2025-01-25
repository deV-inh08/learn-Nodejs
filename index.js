const name = require('./module/module1')
const { getInfor, sayBye } = require('./module/moduls2')
const { items, singlePerson } = require('./module/module3')

console.log(items)

getInfor('Vinh', 20);
sayBye();

console.log(singlePerson)