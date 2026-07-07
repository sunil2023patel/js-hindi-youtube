// singleton 
// object literals
// Object.create()
const mysm=Symbol("key")
const jsuser={
    name:"shikha",
    age:18,
    [mysm]:"key1",
    location:"jaipur",
    email:"sunil@google.com",
    isloggedIn:false,
    lastLogindays:["Monday","tuesday"]
}
// console.log(typeof jsuser[mysm])
// console.log(jsuser.email)
// console.log(jsuser["email"])
const mysym=Symbol("key1")
jsuser.email="sunil@amazon.com"
// Object.freeze(jsuser)
jsuser.email="sunil@microsoft.com"
// console.log(jsuser)
jsuser.greeting=function(){
    console.log("Hello js user")
}
jsuser.greetingtwo=function(){
    console.log(`Hello js user,${this.name}`)
}

console.log(jsuser)
console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())

