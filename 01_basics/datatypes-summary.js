// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

// Reference (Non primitive)
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId); // false

const bigNumber = 234234334535352424242424n
console.log(typeof bigNumber);

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
console.log(typeof heros); // object

let myObj = {
    name: "nency",
    age: 22,
}
console.log(typeof myObj); // object

const myFunction = function(){
    console.log("hello world");;
    
}
console.log(typeof myFunction); // function

// documentation for typeof operator 
// https://262.ecma-international.org/5.1/#sec-11.4.3
