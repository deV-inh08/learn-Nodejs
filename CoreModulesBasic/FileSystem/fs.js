const fs = require('fs');

// Sync: chặn chương trình cho đến khi đọc xong.

// Create file
// fs.writeFile('newFile.txt', 'Hello world', (err, data) => {
//     if(err) throw err;
//     console.log('File created')
// })


// Readfile
// fs.readFile('newFile.txt', (err, data) => {
//     if(err) throw err;
//     console.log(data.toString())
// })


// check exist file
// console.log(fs.existsSync('newFile.txt'))

// Create Folder
// fs.mkdir('hello', (err) => {
//     if(err) {
//         console.error('Error:', err)
//         return;
//     }

//     console.log('Created successfully')
// })

// remove folder
// fs.rmdir('test', (err) => {
//     if(err) {
//         console.error('Error', err)
//     }
//     console.log('Xóa thư mục thành công!');
// })

// ********* MINI Project: createFile, readFile, deleteFile ************ //


function createFile(fileName, content) {
    fs.writeFile(fileName, content, (err) => {
        if(err) {
            console.error('Error when created', err)
        } else {
            console.log('File created')
        }
    })
}


function readFile(fileName) {
    fs.readFile(fileName, (err, data) => {
        if(err) {
            console.error('Error:', err)
        } else {
            console.log('Data:', data.toString())
        }
    })
}

function deleteFile(fileName) {
    fs.rm(fileName, (err, data) => {
        if(!(fs.existsSync(fileName))) {
            console.log('File name is not exist')
        } else {
            console.log('Deleted file:', data)
        }
    })
}

createFile('hello.txt', 'Hello NodeJS')
readFile('hello.txt')
deleteFile('hello.txt')
