const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);


//result is pass to next function
///map and filter
/* .filter() – Used for Selecting Elements
Purpose: Creates a new array by keeping only elements that match a condition.

Return Value: A new array with selected elements (same or shorter length).

Does it Modify Original Array? ❌ No

🔹 How .filter() Works:
Takes a callback function.

Each element is passed to this function.

If the function returns true, the element is kept in the new array.

If false, the element is removed from the new array.

2️⃣ .map() – Used for Transforming Elements
Purpose: Creates a new array by modifying each element.

Return Value: A new array (always same length as original).

Does it Modify Original Array? ❌ No

🔹 How .map() Works:
Takes a callback function.

Each element is passed to this function.

The function modifies the element and stores it in a new array.

The new array has the same length as the original. */