function sayMyName(){
    console.log("N");
    console.log("E");
    console.log("N");
    console.log("C");
    console.log("Y");
}
sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
    
}
function addTwoNumbersV2(number1, number2){
    return number1 + number2
    
}
addTwoNumbers(3,5)
const result = addTwoNumbersV2(3,5)
console.log(result);

function loginUserMessage(username){
    if(!username){
        console.log("please enter the usename");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Nency"))
console.log(loginUserMessage())
