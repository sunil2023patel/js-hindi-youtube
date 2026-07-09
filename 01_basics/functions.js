
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
