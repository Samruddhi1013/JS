const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

 marvel_heros.push(dc_heros)

console.log(marvel_heros);
 console.log(marvel_heros[3][1]); 
 
 
 
//     [ "thor", 
//      "Ironman", 
//      "spiderman", 
//      ["superman", "flash", "batman"]  // Nested array at index 3
//    ]

//  - `marvel_heros[3]` refers to `["superman", "flash", "batman"]` (the nested array).
//  - `marvel_heros[3][1]` refers to `"flash"` (index `1` of the nested array).
 

 const allHeros = marvel_heros.concat(dc_heros)
 console.log(allHeros);

 


// ✅ 2. Using spread operator (...) to merge arrays into a single-level array,instead concat
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);      //Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); // Removes all levels of nesting
console.log(real_another_array);                        // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]



console.log(Array.isArray("Hitesh")); //// Output: false (because "Hitesh" is a string, not an array)


// ✅ 5. Converting a string to an array using `Array.from()`
console.log(Array.from("Hitesh")); /// Output: ["H", "i", "t", "e", "s", "h"]


// Trying to convert an object to an array
console.log(Array.from({name: "hitesh"}));    //However, plain objects {} are not iterable and do not have a length 
                                            //property, so Array.from({ name: "hitesh" }) returns an empty array [].
//correct way:-
console.log(Object.entries({ name: "hitesh", age: 25 }));  // Output: [["name", "hitesh"], ["age", 25]]



// ✅ 6. Creating an array from multiple values using `Array.of()`
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300]

