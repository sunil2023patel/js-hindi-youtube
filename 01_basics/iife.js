// Immediately Invoked Function Expressions (IIFE)
(function chai(){// name IIFE
    console.log(`DB CONNECTED`);
})();
( (name)=>{
    
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')
// global variable se pollution nahi chahiye hame isliye 
// immediately invoked krwana hai to 