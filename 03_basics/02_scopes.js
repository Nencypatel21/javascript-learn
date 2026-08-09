// var c = 300;
let a = 300
if(true){
    let a = 10;
    const b = 20;
    console.log("Inner : ",a);
    
}

console.log(a);
// console.log(b); // gives error


function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website); // gives error
    two()
}

one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);  // gives error
    
}
// console.log(username);  // gives error


// +++++++++++++++++ Interesting +++++++++++++++++

function addone(num){
    return num + 1
}
console.log(addone(5))


// another way of creating a function 
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))