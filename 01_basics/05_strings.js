const name = "nency"
const repoCount = 5

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way to create string
const gameName = new String('nency-123')

console.log(gameName.__proto__);

// Some Methods
console.log(gameName.length);
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(3));
console.log(gameName.indexOf("y"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(4,-1)
console.log(anotherString);

const newStringOne = "  hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/nency%20patel"

console.log(url.replace("%20","-"))
console.log(url);
console.log(url.includes("abc"))
console.log(gameName.split("-"));

// JavaScript String Methods Demonstration with Test Cases

function runStringMethodTests() {
    console.log("=== STRING INFORMATION ===");
    let str = "Hello World";
    console.log("Length:", str.length); // Expected: 11
    console.log("charAt(1):", str.charAt(1)); // Expected: 'e'
    console.log("charCodeAt(0):", str.charCodeAt(0)); // Expected: 72
    console.log("at(-1):", str.at(-1)); // Expected: 'd'

    console.log("\n=== SEARCHING ===");
    console.log("indexOf('l'):", str.indexOf("l")); // Expected: 2
    console.log("lastIndexOf('l'):", str.lastIndexOf("l")); // Expected: 9
    console.log("includes('World'):", str.includes("World")); // Expected: true
    console.log("startsWith('He'):", str.startsWith("He")); // Expected: true
    console.log("endsWith('ld'):", str.endsWith("ld")); // Expected: true

    console.log("\n=== EXTRACTING ===");
    console.log("slice(0, 5):", str.slice(0, 5)); // Expected: 'Hello' // can also work with negative value
    console.log("substring(6, 11):", str.substring(6, 11)); // Expected: 'World'
    console.log("substr(6, 5):", str.substr(6, 5)); // Expected: 'World' (deprecated)

    console.log("\n=== MODIFYING ===");
    console.log("toUpperCase():", str.toUpperCase()); // Expected: 'HELLO WORLD'
    console.log("toLowerCase():", str.toLowerCase()); // Expected: 'hello world'
    console.log("trim():", "   Hi   ".trim()); // Expected: 'Hi'
    console.log("trimStart():", "   Hi".trimStart()); // Expected: 'Hi'
    console.log("trimEnd():", "Hi   ".trimEnd()); // Expected: 'Hi'
    console.log("padStart(5, '0'):", "7".padStart(5, "0")); // Expected: '00007'
    console.log("padEnd(5, '0'):", "7".padEnd(5, "0")); // Expected: '70000'
    console.log("repeat(3):", "Hi".repeat(3)); // Expected: 'HiHiHi'
    console.log("replace('World', 'JS'):", str.replace("World", "JS")); // Expected: 'Hello JS'
    console.log("replaceAll('l', '*'):", str.replaceAll("l", "*")); // Expected: 'He**o Wor*d'

    console.log("\n=== SPLITTING & JOINING ===");
    let csv = "a,b,c";
    console.log("split(','):", csv.split(",")); // Expected: ['a', 'b', 'c']

    // console.log("\n=== MATCHING WITH REGEX ===");
    // console.log("match(/\\d+/):", "abc123".match(/\d+/)); // Expected: ['123']
    // console.log("matchAll(/\\d+/g):", [..."abc123abc456".matchAll(/\d+/g)]); // Expected: [['123'], ['456']]
    // console.log("search(/\\d+/):", "abc123".search(/\d+/)); // Expected: 3

    console.log("\n=== TEMPLATE LITERALS ===");
    let name = "Nency";
    console.log(`Hello, ${name}!`); // Expected: 'Hello, John!'
}

// Run the test cases
runStringMethodTests();
