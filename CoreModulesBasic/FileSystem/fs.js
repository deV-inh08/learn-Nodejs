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


// 4. Theo dõi thay đổi file ( fs.watch )



// ********* MINI Project: createFile, readFile, deleteFile ************ //


class FileSystem {
    createFile(fileName, content) {
        fs.writeFile(fileName, content, (err) => {
            if(err) {
                console.error('Error:', err)
            } else {
                console.log(`File ${fileName} created`)
            }
        })  
    };

    readFile(fileName) {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if(!(fs.existsSync(fileName))) {
                console.error('File is not exist')
            } else {
                console.log('Data:', data)
            }
        })
    };

    deteleFile(fileName) {
        if(!(fs.existsSync(fileName))) {
            console.error(`${fileName} is not exits`)
        } else {
            fs.unlink(fileName, (err) => {
                if (err) {
                    console.error('Error deleting file:', err);
                } else {
                    console.log('File was deleted');
                }
            });
        }
    }
}

const fileSystem = new FileSystem();

fileSystem.createFile('hello.txt', 'Hello world');
fileSystem.readFile('hello.txt');
fileSystem.deteleFile('hello.txt');