// **** Function constructor ****

// function Cat(name, color, type) {
//     this.name = name
//     this.color = color
//     this.type = type

//     // created property 2
//     this.sayBye = function() {
//         console.log(`${this.name} say bi bi`)
//     }
// }

// // create property 1
// Cat.prototype.meow = function() {
//     console.log(`${this.name} say mew mew mewwwww`)
// }

// const alex = new Cat('Alex', 'Red', 'Hoho')
 
// alex.meow()
// alex.sayBye()


// *** Class ***


function handle(cb) {
    cb()
}

class Cat {
    // property
    constructor(name, color, type) {
        this.name = name
        this.color = color
        this.type = type
        // bind()
        this.sayHi = this.sayHi.bind(this)
    }
    // method
    sayHi() {
        console.log(`${this.name} say mew mew`)
    }
    run() {
        handle(this.sayHi)
    }
}

const alex = new Cat('alex', 'red', 'hoho')

