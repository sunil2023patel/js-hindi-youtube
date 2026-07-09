var c=300
let a =300
if(true){
    let a =10
    const b=8
    var c=9

    console.log("INNER:",a)

}
console.log("OUTER:",a)
// console.log(b)
console.log(c)
function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        // console.log(username)
    }
    // console.log(website)
    // two()
}
one()
if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website="youtube"
    //     console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)
// +++++++++++++interesting++++++++++++++
console.log(addone(8))
function addone(num){
    return num+1
}
// console.log(addone(8))
console.log(addtwo(8))
const addtwo=function(num){
    return num+2
}
