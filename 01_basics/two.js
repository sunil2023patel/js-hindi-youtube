const mynums=[1,2,3,4]

const mytotal=mynums.reduce(function (acc,curr){
    console.log(`acc: ${acc} and currval: ${curr}`);
    
    return acc+curr
},4)
// const mytotal=mynums.reduce((acc,curr)=>(acc+curr),0)
// console.log(mytotal);
// total sum of array elements starting from intial val 
const shoppingcart=[
    {
        itemname:"one8shoes",
        price:8000
    },
    {
        itemname:"kurta",
        price:6000
    },
    {
        itemname:"rollex",
        price:4000
    },
    {
        itemname:"iphone17",
        price:190000

    }
]
const totalprice=shoppingcart
    
    .reduce((acc,curr)=>(acc+curr.price),0)
console.log(totalprice);
