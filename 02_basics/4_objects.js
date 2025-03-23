// ✅ Creating a Singleton Object
// A Singleton object can be created using Object.create(), but here we use an object literal.

const mySym = Symbol("key1");        // ✅ Creating a unique Symbol (used as a key inside the object)


const JsUser = {                         // ✅ Object Literal
    name: "Hitesh",                      // ✅ Normal key-value pair
    "full name": "Hitesh Choudhary",    // ✅ Key with space (must be accessed using bracket notation)
    [mySym]: "mykey1",                  // ✅ must written inside [] for Symbol as a key (must be accessed using bracket notation)
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]  // ✅ Array inside an object
};


console.log(JsUser.email);          // ✅ Accessing property using dot notation and can be also 
console.log(JsUser["email"]);       // Access property using bracket notation (works for all keys)
console.log(JsUser["full name"]);  // ✅ MUST use bracket notation because key has space
console.log(JsUser[mySym]);        // ✅ Accessing Symbol property (must use brackets)

JsUser.email = "hitesh@chatgpt.com"; // ✅ Updating the email property


//Object.freeze(JsUser);                  // ✅ Freezing the object (Prevents modification)
JsUser.email = "hitesh@microsoft.com";  // ❌ This change won’t work because the object is frozen

console.log(JsUser);                  // ✅ Output will still have "hitesh@chatgpt.com"


 JsUser.greeting = function(){           //✅ Adding Methods to an Object

    console.log("Hello JS user");       //error becoz-must return something
}; 

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
};


console.log(JsUser.greeting());        // ✅ Calls greeting function (Prints "Hello JS user", returns undefined     because it- console.log(JsUser.greeting()); doesnt return anything )
console.log(JsUser.greetingTwo());     // ✅ Calls greetingTwo function (Uses "this" to access the object property) return undefined

