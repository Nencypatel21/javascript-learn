function sayMyName(){
    console.log("N");
    console.log("E");
    console.log("N");
    console.log("C");
    console.log("Y");
}
// sayMyName()


//add two number and print it
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
    
}

// add two numbers and return it
function addTwoNumbersV2(number1, number2){
    return number1 + number2
    
}
addTwoNumbers(3,5)
const result = addTwoNumbersV2(3,5)
console.log(result);

// function printing login message
function loginUserMessage(username){
    if(!username){
        console.log("please enter the usename");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Nency"))
console.log(loginUserMessage())


// REST Operator
function calculateCartPrice(val1,val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000))

// function taking OBject as argument
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

const user = {
    username : "hitesh",
    prices : 199
}

handleObject(user)
handleObject({
    username : "sam",
    price : 399
})

// function taking Array as argument
function returnSecondValue(getArray){
    return getArray[1]
}
const myNewArray = [200,400,100,600]

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,100,400,400]));

