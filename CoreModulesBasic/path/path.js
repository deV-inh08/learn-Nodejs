const path = require('path');

const myPath = '/home/users/docs/file.txt'

// Join path
const fullPath = path.join('/user', 'docs', 'file.txt');
console.log(fullPath) // /user/docs/file.txt


// get extName of file
console.log(path.extname(myPath))


// get dirName
console.log(path.dirname(myPath))


// path.parse(): Tách một đường dẫn thành các phần (root, dir, base, ext, name).
// path.format(): Ghép lại các phần thành đường dẫn.
const parsePath = path.parse(myPath)

let pathFormat = path.format(parsePath);
console.log(pathFormat);


console.log(__dirname) // Folder
console.log(__filename) // File

