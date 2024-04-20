// Booleans & conditionals #2
// Instructions
// Write a program that does the following:

// Declare a variable called num and assign it the value of -10.
// -Declare a variable called isEven and assign it the initial value false.
// -Next, check if the value stored in num is even or odd. If it is even, change the value of isEven to true, otherwise leave the isEven to be false.
// -Declare a variable called isPositive and assign it the initial value false.
// -Next, check if the value stored in num is a positive number and change the value of isPositive to true if it is a positive number.
// -Declare a variable called isNegative and assign it the initial value false.
// -Next, check if num is a negative number (smaller than 0) and change the value of isNegative to true if it is a negative number.
// -Print out on the console the values of isEven, isPositive, and isNegative.

// Step 1
let num = -10;
 
// Step 2
let isEven = false;
 
// Step 3
if (num % 2 === 0){
  isEven = true;
}
 
// Step 4
let isPositive = false;
 
 
// Step 5
if (num > 0){
  isPositive = true;
}
 
// Step 6
let isNegative = false;
 
// Step 7
if (num < 0){
  isNegative = true;
}
 
// Step 8
console.log(isEven); // true
console.log(isPositive); // false
console.log(isNegative); // true||