// for 
for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
    

}
// for(let i=0;i<=10;i++){
//     console.log(`outer loop value ${i} `)
//     for(let j=0;j<=10;j++){
//         const element=j;
//         console.log(element)
        
//     }
// }

let arr=["flash","batman","superman"]
// for(let i=0;i<arr.length;i++){
//     const ele=arr[i];
//     console.log(ele);
// }
// // break and continue
// let ind=0;
// while(ind<arr.length){
//     console.log(`your hero ${arr[ind]}`);
//     ind++;
// }
let score=11;
// do{
//     console.log(`Score is ${score}`);
//     score++;
// }while(score<=10);
// const x=[1,2,3,4];
// for (const element of x) {
//     console.log(element)
// }
const greetings="Hello world!"
for (const element of greetings) {
    console.log(`each char is ${element}`)
}
//maps
const map=new Map()
map.set("cf",1)
map.set("cc",2)
map.set("leetcode",3)
console.log(map.get("leetcode"))
map.set("codingninjas",4)
// console.log(map)

console.log(map.size)
// map.delete("codingninjas")
console.log(map.size)
map.set("codingninjas",5)
console.log(map)

// console.log(NaN===NaN) false;
for (const [key,val] of map) {
    console.log(key,':-',val)
}
const myobject={
    'game1':'NFS',
    'game2':'spiderman'

}
// for (const [key,val] of myobject) {
//     console.log(key,':-',value)

//}
 const mo={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
 }
//  for (const key in mo) {
    
//     console.log(`${key} shorcut is for ${mo[key]}`);
    
//  }
//  const narr=["js","cpp","ruby","py"]
//  console.log(typeof narr) // object
// for(const key in narr){
//     console.log(key)
// }
// for (const element of narr) {
//     console.log(element)
// }
for (const key in map) { // is tarike se map iterable nahi hai
    console.log(key);
    
    
    
}
// for each loop .
const coding=["js","ruby","java","python","cpp"]
