const score = 400
console.log(score);
console.log(typeof(score))                   //o/p-number

const balance = new Number(100)              //explicit giving datatype 
console.log(balance);

 console.log(balance.toString().length);     
console.log(balance.toFixed(1));             //give one value after point

const otherNumber = 123.8966

 console.log(otherNumber.toPrecision(4));    //give precision(roundof) to total number 
 console.log(otherNumber.toPrecision(3)); 
 console.log(otherNumber.toPrecision(5)); 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++=++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));

 console.log(Math.round(4.6));    //Rounds to the nearest integer (>= 0.5 rounds up, otherwise down). 
console.log(Math.ceil(4.6));      //Always rounds down (toward -∞)
 console.log(Math.floor(4.6));    // Always rounds up (toward +∞).

console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);
//for finding value in between 10 to 20 example can be taken for dice game value needed between 1 to 6
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)