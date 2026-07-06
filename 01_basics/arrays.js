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



