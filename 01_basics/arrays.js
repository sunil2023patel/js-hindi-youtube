// arrays
const myarr=[0,1,2,3,4,5]
// javascript arrays are resizable and mixed datatype can be stored
// console.log(myarr[5])
const myheros=["shaktiman","naagraj"]
const myarr2=new Array(1,2,3,4)

//javascript array copy operations create shallow copy (by refernce)

// array methods
// myarr.push(6)
// console.log(myarr)
// myarr.push(7)


// console.log(myarr)
// // myarr.unshift(9) similar to push operation but element is inserted at the front
// myarr.shift() similar to pop operation but removes element from starting
// console.log(myarr.includes(9))
// console.log(myarr.indexOf(5))
const newArr=myarr.join()
// join method add all the elements into a string separated by specified separator string 
// console.log(myarr)
// console.log(newArr)
// console.log(typeof newArr)
// slice,splice
console.log("A",myarr);
const myn1=myarr.slice(1,3)
console.log(myn1)
console.log("B",myarr)
const myn2=myarr.splice(1,3)
console.log(myn2)
console.log("C",myarr)


// slice -> arr.slice(st,end) end->excluded
// no change in original arr
// splice->arr.splicr(st,end) end->included
// change in original arr
const marval_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
// marval_heros.push(dc_heros)
// console.log(marval_heros)
// console.log(marval_heros[3][1])
const allheros=marval_heros.concat(dc_heros)
console.log(allheros)
//push -> modifies existing array and does not return new array
// concatinate -> does not modifies existing array but returns a modifies array
const all_new_heros=[...marval_heros,...dc_heros]
// console.log(all_new_heros)
const another_arr=[1,2,3,[4,5,6],7,[6,6,[4,5]]]
const real_anothera_arr=another_arr.flat(Infinity)
console.log(real_anothera_arr);






console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"}))// interesting case 
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))
