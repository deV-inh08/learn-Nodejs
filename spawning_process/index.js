const { spawn, exec, execFile } = require('child_process')

// spawn() được dùng để tạo một tiến trình con mới để thực thi một lệnh hoặc chương trình hệ thống.

const ls = spawn('ls', ['-lh', '/usr']);

// Lấy dữ liệu từ stdout (output)
ls.stdout.on('data', (data) => {
    // console.log('Output:', data.toString())
})


// Lấy lỗi từ stderr (error)
// ls.stderr.on('data', (data) => {
//     console.log('Error:', data)
// })

// ls.on('close', (code) => {
//     console.log(`Child process exited with code ${code}`)
// })



// Phương pháp: child_process.exec()
// exec() dùng để tạo một shell (dòng lệnh) và thực thi lệnh bên trong đó.

exec('ls -lh /usr', (error, stdout, stderr) => {
    if(error) {
        console.log(`Error: ${error.message}`)
    } 
    if(stderr) {
        console.error(`Stderr: ${stderr}`)
        return
    }
    console.log(`Stdout: ${stdout}`)
})


execFile('node', ['-v'], (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Node.js Version: ${stdout}`);
  });