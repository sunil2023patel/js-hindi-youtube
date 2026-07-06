// dates Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
let start = Date.now();
// let mydate=new Date()
// // console.log(mydate)

// // console.log(mydate.toString())
// console.log(mydate.toISOString())
// // console.log(mydate.toJSON())
// // console.log(mydate.toLocaleDateString())
// // console.log(mydate.toLocaleString())
// // console.log(mydate.toTimeString())
// // console.log(mydate.toDateString())

// // console.log(mydob.toDateString())
// // console.log(mydob1.toLocaleString())
// // console.log(mydob2.toLocaleString())
// // let mytimestamp=Date.now()
// // console.log(mytimestamp)
// // console.log(mydob.getTime())
// let myt=Date.now()
// console.log(myt-mytimestamp+"ms")


// // kuch code
// console.log(mydate.toDateString())
// let mydob=new Date(2026,6,6,14,57,20)
// let mydob1=new Date(2005,11,2,5,9)
// let mydob2=new Date("02-12-2005")

// console.log(mydob.toDateString())
// console.log(mydob1.toLocaleString())
// console.log(mydob2.toLocaleString())
// let mytimestamp=Date.now()
// console.log(mytimestamp)
// console.log(mydob.getTime())
// let myt=Date.now()
// console.log(myt-mytimestamp+"ms")


// console.log(end - start + " ms");
let newDate=new Date()
console.log(newDate)
console.log(newDate.getFullYear())
console.log(newDate.getSeconds())
newDate.toLocaleString('default',{
    weekday:"long"
    
})
let end = Date.now();
console.log(end - start + " ms");