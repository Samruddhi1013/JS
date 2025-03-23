/* const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
         console.log(item);
    return item
 } )

 console.log(values); //o/p-undefined becoz foreach does not return anything so for returning and using some conditions for further operations we use filter*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => {
    return num > 4   //{} this is scope so ,you need to write return keyword here 
 } )
 console.log(newNums);

 /*arrow function wrtting-
 
 Arr1.filter((num)=>{  //with scope 

 })
 Arr1.filter((num)=>   //without scope
) 

*/

const newNums1 = []
myNums.forEach( (num) => {
     if (num > 4) {
         newNums1.push(num)
     }
 } )

 console.log(newNums1);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  let userBooks1 = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);
  console.log(userBooks1);
 /*  ///////////////////////////////////////////////////////////////////////////////////////////.filter() → Creates a new array with selected elements ✅

  .forEach() → Just runs a function on each element, no new array ❌

  When NOT to Use .forEach()
🔹 Avoid using .forEach() if you need a new array. Instead, use .map() or .filter().

❌ Bad Example:

javascript
Copy
Edit
const arr = [1, 2, 3, 4];
let newarr = [];

arr.forEach(num => {
    if (num > 2) {
        newarr.push(num);
    }
});

console.log(newarr); // Output: [3, 4]
✅ Better with .filter():

javascript
Copy
Edit
const newarr = arr.filter(num => num > 2);
console.log(newarr); // Output: [3, 4] */