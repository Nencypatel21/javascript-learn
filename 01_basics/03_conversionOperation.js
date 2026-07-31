// let score = null
// let score = undefined
// let score = "33abc"
let score = 33
// let score = true

console.log(score);

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); //NaN

//  Number Conversion
// "33" => 33
// "33abc" => NaN but still typeof syas its a number
// true => 1; false => 0
// null => 0 and and typeof says its a number
// undefined => NaN but still typeof says its a number

let isLoggedIn = undefined
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// Boolean Conversion
// 1 => true; 0 => false
// "" => false
// "n" => true
// null => false
// undefined => false

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
