
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United States of America")
 map.set('Fr', "France")
 map.set('IN', "India")

for (const key in map) {
     console.log(key);
 } //o/p-nothing becoz,Map is an iterable, but it's not an object.

 //for...in works on objects, iterating over their keys.
 
 //Since Map is not an object, for...in does nothing here.
 
 
