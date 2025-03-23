
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); //refer current context
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

 console.log(this);   //here it will display empty{} but on console it will display its properites

/* function chai(){
     let username = "hitesh"      //is block-scoped 
     console.log(this.username);  //o/p-undefined ,becoz it refers to the global object (in browsers, window).
 }

 chai() 

const chai = function () {
    let username = "hitesh"
     console.log(this.username);  //o/p- undefined
 }
      chai()*/

/*====================ways to write arrow function===============================
const chai =  () => {
    let username = "hitesh"
    console.log(this);   //here it will display empty{} but on console it will display its properites
}
 



 const addTwo = (num1, num2) => {
     return num1 + num2
 }

//const addTwo = (num1, num2) =>  num1 + num2

 //const addTwo = (num1, num2) => ( num1 + num2 )

//const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()*/
 