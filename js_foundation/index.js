// Rest, spread, destructuring


// destructuring

// obj
// const user = {
//     name: 'Vinh',
//     age: 20
// };
// const { name, age } = user
// console.log('name:', name)
// console.log('age:', age)

// // array
// const count = [1, function() {console.log('Hello'); return 'hello'}];
// const [a, hello] = count

// console.log('number:', a);
// console.log('function:', hello())

// spread: Giai
const user1 = {
    name: 'Vinh',
    age: 20,
    address: ['bac lieu']
}

// primative type (string, number, bolean, ...)
// reference type (arrray, fn, object)

// spread
const user2 = user1

const user3 = {
    ...user1
}

// console.log(user1)
// console.log(user2)

// // change property 'address'
// user2.address = ['hcm city']

// // user1 and user2 have changed
// console.log(user1)
// console.log(user2)

// console.log(user1.address === user2.address) // true
// console.log(user1 === user2) // true


console.log(user1)
console.log(user3)
// changed property 'address'
user1.address = ['hcm city']

// after changed
console.log(user1)
console.log(user3)

console.log(user1.address === user3.address) // true || if changed => false
console.log(user1 === user3) // false

// rest (con lai)
function getSum(...rest) {
    return rest
}

console.log(getSum(1, 2, 3, 4, 5));
