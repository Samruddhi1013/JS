// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));  //convert into array(key-value pair) 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

 console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

 //const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4) //removes nesting of objects

const obj3 = {...obj1, ...obj2}                    //spread operator-easy to use than assign
 console.log(obj3);


 const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email)
 


const course = {
    coursename: "js in hindi",  
    price: "999",              
    courseInstructor: "hitesh" 
};

// ✅ Accessing object properties normally
console.log(course.courseInstructor); // Prints: hitesh

// ✅ Object Destructuring
// Extracting `courseInstructor` and renaming it to `instructor`
const {courseInstructor: instructor} = course;
console.log(instructor); // Prints: hitesh

// ❌ If you try this, it will throw an error:
// console.log(courseInstructor); // ReferenceError: courseInstructor is not defined

// ✅ JSON-like object (correct way to define it in JS)
const courseDetails = {
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
};
console.log(courseDetails.price); // Prints: free

// ✅ Array of Objects (common in APIs)
const courses = [
    { name: "hitesh", coursename: "js in hindi", price: "free" },
    { name: "john", coursename: "python", price: "499" },
    { name: "doe", coursename: "react", price: "999" }
];

// Accessing data inside the array of objects
console.log(courses[0].coursename); // Prints: js in hindi
console.log(courses[1].price);      // Prints: 499
