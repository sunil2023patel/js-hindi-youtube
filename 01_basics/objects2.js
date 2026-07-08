const tinderuser={}
tinderuser.id="123ans"
tinderuser.name="sammy"
tinderuser.isloggedin=false
// console.log(tinderuser)
const regularuser={
    email:"some@gmail.com",
    fullname:{
        usernamefullname:{
            firstname:"hitesh",
            lastname:"choudhari"

        }


        
    }
              

}                       
// console.log(regularuser.fullname.usernamefullname.firstname);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
// const ob3={obj1,obj2}
const obj3=Object.assign({},obj1,obj2,obj4)
const obj7={...obj1,...obj2,...obj4}
// console.log(obj3)
// console.log(obj1===obj3)
// console.log(obj7)
const users=[
    {
        id:1,
        email:"jamiala@gmail.com"
    },
    {
        id:1,
        email:"jamiala@gmail.com"
    },
    {
        id:1,
        email:"jamiala@gmail.com"
    },
    {
        id:1,
        email:"jamiala@gmail.com"
    },{
        id:1,
        email:"jamiala@gmail.com"
    },{
        id:1,
        email:"jamiala@gmail.com"
    },{
        id:1,
        email:"jamiala@gmail.com"
    }


]

users[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
// console.log(tinderuser.hasOwnProperty('islo'))
const course={
    coursename:"js in hindi",
    price:"999",
    courseinstructor:"hitesh"
}
// course.courseinstructor
const {courseinstructor:ins}=course
console.log(ins)
// {
//     coursename:"js in hindi",
//     price:"free",
//     courseinstructor:"hitesh"

// } json 
