// Immediately Invoked Function Expressions (IIFE)
(function chai(){// name IIFE
    console.log(`DB CONNECTED`);
})();
( (name)=>{
    
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')
// global variable se pollution nahi chahiye hame isliye 
// immediately invoked krwana hai to 
//semicolon (;) is mandetory after first iife call otherwise you will get errors (to give where to end first iife call )