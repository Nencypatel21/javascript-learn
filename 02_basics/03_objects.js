// singleton
// Object.create  // constructure method and gives singleton object


// object literals

const mySym = Symbol("key1")

const JsUser = {  // here multiple instance will be created
    name : "Nency",
    "full name" : "Nency Patel",
    [mySym] : "mykey1", // symbol
    age : 18,
    location : "Jaypur",
    email: "nency@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}  
console.log(JsUser.email); // 1st way to access value
console.log(JsUser["email"]); // another way to access value
// console.log(JsUser."full name"); not allowed
console.log(JsUser["full name"]); 
console.log(JsUser[mySym]); 
console.log(typeof JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
console.log(JsUser); // 1st way to access value
// Object.freeze(JsUser)
console.log(JsUser); // 1st way to access value

JsUser.greeting = function(){
    console.log("Hello JsUser");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JsUser,${this.name}`);
}
console.log(JsUser.greeting);
JsUser.greetingTwo();