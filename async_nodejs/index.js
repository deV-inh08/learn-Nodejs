// Promise => thay the async.js(library)
function shortTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resultShortTime')
        }, 200);
    })
};

function mediumTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resultMediumTime')
        }, 700)
    })
};


function longTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resultLongTime')
        }, 1000)
    })
}

// Promise all
// Promise.all([shortTime(), mediumTime(), longTime()])
//     .then((data) => {
//         console.log(data) // wait
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// Promise.allSettled([shortTime(), mediumTime(), longTime()])
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => {
//         console.log(error)
//     })

// // async / await
// async function run() {
//     const result1 = await shortTime()
//     const result2 = await mediumTime()
//     const result3 = await longTime()
//     console.log(result1, result2, result3)
// }

// run()


// Parallel Executon with asycn/await
async function Parallel() {
    try {
        
        // recived result => Successfully
        const [ result1, result2, result3 ] = await Promise.all([shortTime(), mediumTime(), longTime()])
        if(result1) {
            console.log('hehehhe')
        }
        console.log('result1:', result1)
        console.log("result2:", result2)
        console.log('result3:', result3)
    } catch(error) {
        if(error) {
            console.log('error:', error)
        }
    }
}

Parallel()

// Series Excution
function Series() {
}