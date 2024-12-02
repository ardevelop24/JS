// const tinderUser =new Object()    //Singleton object

const tinderUser={}    //non singleton object

tinderUser.id ="32323abc"
tinderUser.name ="Rani"
tinderUser.isLoggedIn =false
// console.log(tinderUser);

const regualarUser ={
    email: "something@gmail.com",
    fullname: {  //nesting of object
        userFirstName :"Sharma",
        userLastName : "ji Ka ladka"
    }
}

// console.log(regualarUser.fullname)
// console.log(regualarUser.fullname.userFirstName);

const obj1 ={1:"a",2:"b"}
const obj2 ={3: "a",4 :"b"}

// const obj3 ={obj1,obj2}        //spread the value

// const obj3=Object.assign({},obj1,obj2)  //spread the value

const obj3={...obj1,...obj2}
console.log(obj3);


const Users =[
    {
        id :1,
        email: "har@gmail.com"
    },
    {
        id :1,
        email: "hr@gmail.com"
    },
    {
        id :1,
        email: "ha@gmail.com"
    }



]

console.log(Users[1].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser));      //saari keys de do

console.log(Object.values(tinderUser));   //values de do

console.log(Object.entries(tinderUser));  //enteries

console.log(tinderUser.hasOwnProperty('isLoggedIn'))   //check the availablity

