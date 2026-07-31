// Conversion
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);  // true
console.log("02" > 1); // true
console.log(true > 0); // true
console.log("02" == 2); // true 


console.log("nn" > 2); // false
console.log("nn" == 2); // false

console.log(null > 0); //false
console.log(null == 0); // false
console.log(null >= 0); // ture

//Reason: an equality check == and comparisions >, <, >=, <= work differently.
// Comparisions convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0  is false.

console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined > 0);  // false

// AVOID comparision of different datatype value and also numm and undefined comparisions TO make sure consistency 

// Strict check
console.log("2" === 2);
// strict check also checks for the datatype 
