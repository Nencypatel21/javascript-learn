const userEmail = "h@google.com"

if(userEmail){
    console.log("Got user email");    
}else{
    console.log("Don't havr user email");    
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value
// all non falsy values are truthy value but some will surprise
// "0", "false", " ", [], {}, function{}

const userEmailArray = []

if(userEmailArray.length === 0){
    console.log("Array is empty");    
}

const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??) : null, undefined

let val1;
val1 = 5 ?? 10;
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 20
console.log(val4);


// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");

