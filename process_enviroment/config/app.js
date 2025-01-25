if(process.argv.length > 2) {
    process.argv.forEach((val, index) => {
        if(process.argv[2]) {
            const db = require('./' + process.argv[2] + '.json')
            console.log(db)
            return
        }
    })
}

