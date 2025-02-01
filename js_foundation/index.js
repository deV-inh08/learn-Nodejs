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

// // spread: Giai
// const user1 = {
//     name: 'Vinh',
//     age: 20
// }

// // spread

// // primative type (string, number, bolean, ...)
// const user2 = {
//     ...user1
// }
// // reference type (arrray, fn, object)

// console.log(user1)
// console.log(user2)
// console.log(user1 === user2)


// rest (con lai)
function getSum(...rest) {
    return rest
}

console.log(getSum(1, 2, 3, 4, 5));
