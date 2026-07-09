
function saymyname(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
    
}

function addtwonumbers(num1,num2){
    console.log(num1+num2)
}
function addtwonumbers1(num1,num2){
   let result=num1+num2
   return result
   console.log("hello")
}
const result=addtwonumbers1(7,3)
console.log(result)
function loginusermessage(username="sam"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in `
}
// let message=loginusermessage("shikha")
console.log(loginusermessage())
function calculatecardpricea(val1,val2,...num1){// here ... is a rest operator
    return num1
}
console.log(calculatecardpricea(7,9,8,6))
const user={
    username:"hitesh",
    prices:999

}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleobject(user)
handleobject({
    username:"sam",
    price:90
})
const mynewarr=[90,80,70,78]
function resecondval(getarr){
    return getarr[0]
}
console.log(resecondval(mynewarr))
