const useremail=[]
// if(useremail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email")
// }
// falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN
// Trythy values
// [],"0",'false'," ",{},function(){}
if(useremail.length==0){
    console.log("array is empty")
}
const emptyobject={}
if(Object.keys(emptyobject).length ===0){
    console.log("Object is empty")
}
// Nullish Coalescing Operator (??):null undefined
let val1;
// val1=5??10 5
// val1=null ?? 10 10
// val1=undefined?? 15 15
val1=null?? 10?? 30
console.log(val1)
// Terniary Operator
// condition? true:false
const iceteaprice=100
iceteaprice>=80?console.log("more than 80"):console.log("less than 80")