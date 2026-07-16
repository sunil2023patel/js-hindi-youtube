const mynums=[1,2,3,4,5,6,7,8,9,10]
// const newnums=mynums.map((num)=>(num+10))
const newnums=mynums
    .map((num)=>(num*10))
    .map((num)=>(num+1))
    .filter((num)=>(num>=18))
console.log(newnums)
// map is used to update array elements and returns new updated array
// filter is used to filter elements in a new array according to the given condition (game of true or false)

