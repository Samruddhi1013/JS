
const myNums = [1, 2, 3]

 const myTotal = myNums.reduce(function (acc, currval) {
    // console.log(`acc: ${acc} and currval: ${currval}`);
  return acc + currval
 }, 0)

//using arrow function-
const myTotal1 = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);
console.log(myTotal1);


//realworld application-
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);


/*.reduce() – Short & Simple Explanation-
📌 What is .reduce()?
Purpose: Used to reduce an array into a single value (sum, product, object, etc.).

Return Value: A single accumulated result.

Common Use Cases: Sum of numbers, finding max/min, converting arrays to objects.

🔹 How .reduce() Works
.reduce() takes a callback function with:

javascript
Copy
Edit
array.reduce((accumulator, currentValue) => {  
    // Logic to update accumulator  
}, initialValue);
accumulator → Stores the result after each step.

currentValue → Current element being processed.

initialValue → (Optional) Starting value of the accumulator.

*/
