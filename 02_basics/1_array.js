// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

myArr.push(6)
 myArr.push(7)
myArr.pop()
console.log(myArr)
 
myArr.unshift(9)                           //add element in starting of the array
myArr.shift()                              ////remove starting element
                           
console.log(myArr) 
console.log(myArr.includes(0));            //returns true if element is present in the array
console.log(myArr.indexOf(3));

const newArr = myArr.join()                

 console.log(myArr);

console.log( newArr);


