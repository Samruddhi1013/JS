// Dates

let myDate = new Date() 
console.log(myDate.toString());                    // Mon Mar 17 2025 12:52:50 GMT+0530 (India Standard Time)-Human-readable string	
 console.log(myDate.toDateString());                // Mon Mar 17 2025
 console.log(myDate.toLocaleString());              // 3/17/2025, 12:55:16 PM
console.log(typeof myDate);                         //interview question - object

//let myCreatedDate = new Date(2023, 0, 23)              //1/23/2023, 12:00:00 AM
//let myCreatedDate = new Date(2023, 0, 23, 5, 3)       //1/23/2023, 5:03:00 AM
//let myCreatedDate = new Date("2023-01-14")            //1/14/2023, 5:30:00 AM
let myCreatedDate = new Date("01-14-2023")              //1/14/2023, 12:00:00 AM
console.log(myCreatedDate.toLocaleString());

 let myTimeStamp = Date.now()

console.log(myTimeStamp);                           //current time in millisecond
console.log(myCreatedDate.getTime());               // Returns the timestamp in milliseconds for a specific date.
console.log(Math.floor(Date.now()/1000));           //in seconds

let newDate = new Date();
console.log(newDate);                              // Prints the full current date & time -ISO 8601 (default) std
console.log(newDate.getMonth() + 1);              // Returns the current month (0-based index, so +1 is needed)
console.log(newDate.getDay());                    // Returns the day of the week (0 = Sunday, 6 = Saturday)

// // `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })