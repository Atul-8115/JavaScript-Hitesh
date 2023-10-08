// Primitive (Value) => every time when we pass these data types into any function then JS makes compy of it.

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
// const userEmail;
    // Always gives error because const value must be initialized
let useEmail;  

const id = Symbol('123');
const anotherId = Symbol('123');
// Every Time it gives different answer or returns different values
console.log(id == anotherId);

const bigNumber = 345651234987343433n

// Reference (Non primitve)

// Array, Object, Function

const heros = ["Krishn", "Ram", "Hanuman"]
let obj = {
    name: "atul",
    age: 22,
}

const myFunction = function() {
    console.log("Hello world");
}

// console.log(typeof bigNumber);
// console.log(typeof null);
console.log(typeof myFunction); // Object function
console.log(typeof obj); // function object
console.log(typeof heros); // function object