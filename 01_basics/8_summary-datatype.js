// ********** Primitive Data Types ********** 
// These are immutable and stored in the stack memory. 
// JavaScript has 7 primitive data types:

// 1️⃣ String - Represents text data
// 2️⃣ Number - Represents both integer and floating-point numbers
// 3️⃣ Boolean - Represents true/false values
// 4️⃣ null - Represents an intentional absence of a value
// 5️⃣ undefined - Represents an uninitialized variable
// 6️⃣ Symbol - Represents unique values (useful for object properties)
// 7️⃣ BigInt - Used for very large integers

const score = 100;  // Number
const scoreValue = 100.3;  // Number (floating point)

const isLoggedIn = false;  // Boolean
const outsideTemp = null;  // Null (intentional empty value)
let userEmail;  // Undefined (value not assigned)

const id = Symbol('123');  // Symbol (unique identifier)
const anotherId = Symbol('123');  // Another Symbol (even with same string, it's unique)

console.log(id === anotherId);  // false (because Symbols are always unique)
console.log(typeof anotherId);  // Output: "symbol"

// BigInt (for large numbers, 'n' at the end makes it a BigInt)
const bigNumber = 3456543576654356754n;  

// ------------------------------------------------------------------------------

// ********** Reference (Non-Primitive) Data Types *******************************

// These are mutable and stored in heap memory (reference stored in stack).
// 3 Common Reference Data Types:

// 1️⃣ Arrays - Used to store multiple values
const heros = ["shaktiman", "naagraj", "doga"];  // Array

// 2️⃣ Objects - Used to store key-value pairs
let myObj = {
    name: "hitesh",
    age: 22,
}

// 3️⃣ Functions - Used to define reusable logic
const myFunction = function(){
    console.log("Hello world");
}

// ----------------------------------------------------------------



// Reference link for deep dive into JavaScript types
// https://262.ecma-international.org/5.1/#sec-11.4.3
