// Primitive
// call by value
// 7 types : String,Number,Boolean,null,undefined,symbol,BigInt
const score=100
const scoreValue=1000.3

const loggedIn=false
const outsideTemp=null
let useEmail;
const id=Symbol('1230')
const anotherId=Symbol('1230')
console.log(id===anotherId)




// Refrence (Non primitive)
// Array,objects,fuctions
const heros=["shaktiman,naagraj","doga"]
let myObj={
    name:"sunil",
    age:22,
}
const myFuntion=function(){
    console.log("hello world");
}

console.log(typeof anotherId ) 

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object