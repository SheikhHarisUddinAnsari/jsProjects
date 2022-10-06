// Tests for equality and inequality with strings.
let number = "4";
console.log(`number is 4 but its type is string 
 that's why it is returning the next   
console true while after next console false`);
console.log(number == 4);
console.log(number === 4);
console.log(number !== 4);
console.log(number !== "4");

// Tests using the lower case function
let name = "Zamzam illahi Sahito";
console.log(name.toLowerCase() == "zamzam illahi sahito");

// Numerical tests involving equality and inequality,greater than and less than,
// greater than or equal to, and less than or equal to

let number2 = 7;
console.log(number2 == 6);
console.log(number2 !== 6);
console.log(number2 <= 6);
console.log(number2 >= 6);
console.log(number2 < 7);
console.log(number2 > 6);

// Tests using "and" and "or" operators
let number3 = 99;
console.log(number3 > 99 && number3 < 100); // and operator
console.log(number3 > 99 || number3 < 100); // or operator

// Test whether an item is in a array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
let include1 = fruits.includes("Mango");
console.log(include1 + " means this item is in the list");

// Test whether an item is not in a array
let include2 = fruits.includes("Watermelon");
console.log(!include2 + " means this item is not in the list");
