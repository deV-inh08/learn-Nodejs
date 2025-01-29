// Promise => thay the async.js(library)
function shortTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resultShortTime')
        }, 1000);
    })
};

function mediumTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resultMediumTime')
        }, 200)
    })
};


function longTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resultLongTime')
        }, 3000)
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
        const [ result1, result2, result3 ] = await Promise.all([shortTime(), mediumTime(), longTime()]) // 
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
async function Series() {
   try {
    const result1 = await shortTime()
    const result2 = await mediumTime()
    const result3 = await longTime()
    console.log(result1)
    console.log(result2)
    console.log(result3)
   } catch(error) {
    // if error
   }
}

Series()


// Waterfall Execution
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: 'Mqa' })
        }, 1000);
    })
}

function getFriendsFromUser(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if(user.name === 'Mqa') {
                resolve([{ name: 'Vinh' }, { name: 'Cong' }])
            } else {
                resolve([])
            }
        }, 1000)
    })
}


async function waterfallExcution() {
    const user = await getUser();
    const listFriends = await getFriendsFromUser(user);
    console.log(listFriends)
}


// handle loop with asycn/await
function recursiveAction(n) {
    return new Promise((resolve) => {
        resolve('result' + n)
    })
}

// loop and push result in []
async function runLoop(n) {
    try {
        let results = [];
        for(let i = 1; i <= n; i++) {
            let result = await recursiveAction(i);
            results.push(result) 
        }
        console.log(results)
    
    } catch(err) {
        console.log('Error:', err)        
    }
}

runLoop(5)