const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);  
        console.log(this);
        
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

console.log(this);


function chaiV1(){
    let username = "hitesh"
    // console.log(this.username);  // error
    console.log(username);
    
    console.log(this);  // it will give global object
    
}
chaiV1()


// another way of creating a function
const chaiV2 = function(){
    let username = "hitesh"
    console.log(username);
}
chaiV2()

// Arrow function(another way of creating a function)
const chaiV3 = () =>{
    let username = "hitesh"
    console.log(this); // it will give {}
}
chaiV3()


//Example of arrow function
const addTwoV1 = (num1,num2) => {
    return num1 + num2
}
console.log(addTwoV1(3,4))


//Implicit return
const addTwoV2 = (num1,num2) => (num1 + num2) // ( ) are also optional, you can directly write "num1 + num2"
console.log(addTwoV2(3,4))


// Returning object
const returnObject = () => ({username : "hitesh"}) // here () are compulsory as objects are returned
console.log(returnObject())

// const myArray = [2,3,4,5,6,6]
// myArray.forEach(() => ()) // can be in this format as well