const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values-

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {                //check if array is empty or not
   console.log("Array is empty");
 }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {     //check if object empty or not
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10                         //o/p-5
// val1 = null ?? 10                      //o/p-10
// val1 = undefined ?? 15                 //o/p-undefined 
 
val1 = null ?? 10 ?? 20                   //o/p-10



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80") 