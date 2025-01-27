// stream: thay vì đọc hết cuốn sách 1000 trang 1 lần, thì ta dùng stream chia nhỏ ra (đọc từng trang,mỗi ngày 10 trang)
// Chúng ta có 1 dữ liệu lớn cần xử lí, thì chia nhỏ chúng ta, xử lí từng phần nhỏ


// 4: Parameter
// Readable: type of stream where data can be read from
// Wriable: type of stream where data can be write to
// Duplex: type of stream that is both readable and writable
// Transform: type of duplex stream that can transform data as it is being read and then written


const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain')

    fs.writeFile('data.txt', 'data 1234', (err) => {
        if(err) {
            console.log(err)
        }
    })

    // Trải nghiệm người dùng kém
//    fs.readFile(__dirname + '/data.txt', (err, data) => {
//     response.end(data)
//    })

   // Cách cải tiến với fs.createReadStream
   const stream = fs.createReadStream(__dirname + '/data.txt');
   stream.pipe(response)


})

server.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`)
})


// Piping là kỹ thuật chuyển dữ liệu từ stream này sang stream khác.
const readable = fs.createReadStream('file1.txt')
const writable2 = fs.createWriteStream('file2.txt')

// file2 copied file1
readable.pipe(writable2)

writable2.on('finish', () => {
    console.log('copy success')
})

readable.on('error', (err) => {
    console.log('Error:', err)
})

// Creating your own readable/writable stream
const { Readable, Writable } = require('stream')


class MyReadableStream extends Readable {
    constructor(data, options) {
        super(options);
        this.data = data;
        this.index = 0;
    }

    _read() {
        if(this.index < this.data.length) {
            this.push(this.data[this.index++])
        } else {
            this.push(null)
        }
    }
};

const myReadable = new MyReadableStream(['Hello', ' ', 'Stream', '!']);

myReadable.on('data', (chunk) => {
    console.log('Read data:', chunk.toString())
})

myReadable.on('end', () => {
    console.log('The end')
})


class MyWriableStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log('Write data:', chunk.toString())
        callback()
    }
};

const myWritable = new MyWriableStream();

myWritable.write('Hello');


