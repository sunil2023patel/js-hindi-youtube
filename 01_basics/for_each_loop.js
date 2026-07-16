// for each loop .
const coding=["js","ruby","java","python","cpp"]
// coding.forEach(function (item){
//     console.log(item)
// })
// coding.forEach((item)=>{
//     console.log(item)
// })
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })
const mycoding=[
    {
        language:"javascript",
        languagefilename:"for each"
        
    },
    {
        language:"java",
        languagefilename:"for each"
        
    },
    {
        language:"python",
        languagefilename:"for each"
        
    },
    {
        language:"cpp",
        languagefilename:"for each"
        
    }
]
// const values=mycoding.forEach((item)=>{
//     // console.log(item)
//     return item
// })
// console.log(values)
const mynums=[1,2,3,4,5,6,7,8,9,10]
// const newnums=mynums.filter((num)=>{
//     return num>4;
// })
// console.log(newnums)
// const newnums=[]
// for (const element of mynums) {
//     if(element>4){
//         newnums.push(element)
//     }
// }
// console.log(newnums)
//some more examples
const books=[
    {
        title:'Book one',genre:'fiction',publish:1909,edition:2009
    },
    {
        title:'Book two',genre:'non-fiction',publish:1988,edition:2004
    },
    {
        title:'Book three',genre:'fiction',publish:1956,edition:2002
    },
    {
        title:'Book four',genre:'non-fiction',publish:1985,edition:2001
    },
    {
        title:'Book five',genre:'history',publish:1978,edition:2009
    },
    {
        title:'Book six',genre:'science',publish:1954,edition:2002
    },
    {
        title:'Book seven',genre:'history',publish:1990,edition:2005
    },
    {
        title:'Book eight',genre:'non-fiction',publish:2000,edition:2009
    }
]
const userbooks=books.filter((bk)=>(bk.genre === 'history'))
// console.log(userbooks)
const userdata=books.filter((bk)=>{return bk.genre==='history' && bk.publish>=1980})
console.log(userdata);

