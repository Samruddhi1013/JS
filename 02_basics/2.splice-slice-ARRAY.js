
let myArr = [1, 2, 3, 4, 5];

console.log("A ", myArr); 
const myn1 = myArr.slice(1, 3);          // Extracts elements from index 1 to 2 (3 is not included)

                                        // slice(start, end) -> Returns a portion of the array from index `start` to `end-1`
                                        // ✅ Does NOT modify the original array (returns a shallow copy)



console.log(myn1);                   // Output: [2, 3] (Extracted portion)
console.log("B ", myArr);           // Output: B  [1, 2, 3, 4, 5] (Original array remains unchanged)

//******************************* splice() *************************************************

 const myn2 = myArr.splice(1, 3);    // Removes elements from index 1 to 3 (including 3)
                                    // splice(start, deleteCount) -> Removes `deleteCount` elements starting from `start` index
                                    // ✅ Modifies the original array by removing elements and returns the removed elements


 console.log("C ", myArr);        // Output: C  [1, 5] (Original array is modified)
 console.log(myn2);              // Output: [2, 3, 4] (Removed elements)
