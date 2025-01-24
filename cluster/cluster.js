const cluster = require('cluster')
const http = require('http')
const os = require('os')

const numCPUs = os.cpus().length

if(cluster.isMaster) {
    for(var i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
        if(signal) {
            console.log(`Worker was killed by signal: ${signal}`)
        } else if(code !== 0) {
            console.log(`worker exited with error code: ${code}`)
        } else {
            console.log(`worker success`)
        }
    })
} else {
    http.createServer((requet, response) => {
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        })

        response.write('Hello world');

        response.end()
    }).listen(3000)

}
