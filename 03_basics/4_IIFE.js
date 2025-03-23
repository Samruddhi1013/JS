// Immediately Invoked Function Expressions (IIFE)


(function chai(){                               //named iife
    
    console.log(`DB CONNECTED`);
})();

( () => {                                      //unnamed iife
    console.log("DB CONNECTED TWO");
} )();

( (name) => {                                 //unnamed with parameter
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')