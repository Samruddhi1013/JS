
// for of- for of loop only works with iterables like arrays, maps, sets, etc.

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

 //Maps - data is in key-value form. duplicate data is removed

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


 //console.log(map);

for (const [key, value] of map) {
     console.log(key, ':-', value);
}




/* const myObject = { //o/p-error forof works only only with  arrays, maps, sets, etc.
    game1: 'NFS',
    game2: 'Spiderman'
}

 for (const [key, value] of myObject) {
     console.log(key, ':-', value);
    
 } 
==================================================================

/*  Here’s an easy way to remember the difference between forEach, for...in, and for...of:

🎯 Trick to Remember:
📝 Think of "Each", "In", and "Of" as clues!

1️⃣ forEach → "Each item in an array" (Only for arrays, no break/return)

Keyword: each → values of an array

🔹 Example: arr.forEach((val) => console.log(val));

Think: "Each value one by one in an array!"

2️⃣ for...in → "Inside the object/array" not with map (Gives keys/indexes, can take values with help of key  ${arryname[key]}!)

Keyword: in → keys inside an object/array

🔹 Example: for (key in obj) { console.log(key, obj[key]); }

Think: "IN an object, you get KEYS!"

3️⃣ for...of → "Of the values in the array" (Gives actual values, not indexes!)

Keyword: of → values of an iterable

🔹 Example: for (val of arr) { console.log(val); }

Think: "OF these values, let's loop!"
  */