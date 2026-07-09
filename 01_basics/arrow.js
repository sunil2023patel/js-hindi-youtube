const user={
    username:"hitesh",
    Price:999,
    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to website`);
        // console.log(this)
        
    }
}// this refers to current context
user.welcomeMessage()
user.username="shikha"
user.welcomeMessage()
console.log(this)
// function chai(){
//     let username="hitesh"
//     console.log(this.username)
// }
// chai()
const chai=()=>{
    let username="hitesh"
    console.log(this)
}
// chai()
// const addtwo=(num1,num2)=>{
//     return num1+num2;
//}
// implicit return 
// const addTwo=(num1,num2)=> (num1+num2)
const addTwo=(num1,num2)=> ({username:"hitesh"})
console.log(addTwo(8,9))
const myarray=[2,4,5,6,8];




