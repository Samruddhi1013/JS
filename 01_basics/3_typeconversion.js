let score = "hitesh"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"
let logout="sam"

let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);
 let islogout = Boolean(logout)
 console.log(islogout);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
 console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3);

 console.log("1" + 2);
console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
 console.log( (3 + 4) * 5 % 3);

 console.log(+true); //convert the operand into a number.true is treated as 1 when converted to a number.

 console.log(+"");  //an empty string is treated as 0 when converted to a number

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion