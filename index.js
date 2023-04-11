// Variaveis no Javascript

// Declarar Variavel != Inicializar Variavel

// var person // declaração de variavel
// person = 'Gabriel' // inicializando

// var, let, const
var message = 'Hello!!'

if (true) {
  console.log(message)
  var message = 'Bye!!'
  message = 'bye bye'
}

console.log(message)

// Hoisting - Içamento

console.log('declaração', cat)

var cat = 'Matilde'

console.log('inicialização', cat)

// Problemas com Var

// var greeter = 'Hey hi'
// var times = 4

// if (times > 3) {
//   var greeter = 'Say Hello!'
// }

// console.log(greeter)

// Loop

for (var i = 0; i < 10; i += 1) {
  console.log(i)
}

console.log(i)

// Let
// console.log(age) - Não posso acessar antes da inicialização
let age = 50
// let age = 42 -> não posso redeclarar
age = 42
console.log(age)

for (var j = 0; j < 10; j += 1) {
  console.log(j)
}

// console.log(j) - not defined

// Shadowing

let person = 'Gabriel'

function sayHello() {
  let person = 'Hilda'
  console.log(`Hi ${person}`)
}

sayHello()

console.log(person)

// CONST
// const gravity
const gravity = 9.8

function changeGravity() {
  const gravity = 10
  console.log(gravity)
}
changeGravity()
console.log(gravity)

const dog = {
  name: 'Kevin, "O Matador"',
  age: 9,
  bark() {
    console.log(`Auau,${this.name}`)
  },
}

console.log(dog.name)

// dog = { name: 'Wilson' } - não pode reatribuir valores.

console.log(dog.name)

dog.bark()

// Um papo sobre o this. O que é? Do que vive? Onde mora? Do que se alimenta?

class Dog {
  constructor(name) {
    this.name = name
    this.age = 9
  }
  bark() {
    console.log(this.name)
  }
  showThis() {
    console.log(this)
  }
}

const kevin = new Dog('Kevin')
const brad = new Dog('Brad')

kevin.bark()
kevin.showThis()
