// ******************  Conversion *********************************************

// choose any one of them to see outputs for different scenarios
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
// "33abc" => NaN but still typeof says its a number
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

//  ************************ Operations *************************

let value =3
let negValue = -value
// console.log(negValue);

// Basics math operation
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%3);

let str1 = "hello"
let str2 = " nency"
let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2); // output : 12
// console.log(1 + "2"); // output : 12
// console.log("1" + 2 + 2); // output : 122
// console.log(1 + 2 + "2"); // output : 32

// dont use tricky code as example
// console.log(+true);
// console.log(+"");

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
