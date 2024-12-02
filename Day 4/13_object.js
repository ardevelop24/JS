// object and event are important part of javascipt

//singleton--constructor se banega to hamesha singleton banega

// Object.create

//object literals

const mySymbol =Symbol("key1")

const Jsuser={
    name:"Abhi",
    age : 21,
    location : "Noida",
    [mySymbol]: "mykey1", //this is right syntax of symbol
    number:"ardev@gmail.com",
    isloggedIn: ["Monday","Saturday"]
}

console.log(Jsuser.age)
console.log(Jsuser["age"])

console.log(Jsuser.mySymbol)

console.log(typeof(Jsuser.mySymbol))



Jsuser.email ="abhi@gmail.com"   //updating the email 

// Object.freeze(Jsuser)  //locked the Jsuser.no change can be made

Jsuser.greeting =function(){
    console.log("Hello Js User");
}

Jsuser.greetingTwo =function(){
    console.log(`Hello Js user,${this.name}`)
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

