// Working with different scopes
// Instructions
// Declare a global variable x and assign it the value of 10.
// Declare a function myFunction and within it, declare a local variable y and assign it the value of 5.
// Log to the console the value of both variables x and y within the function.
// Log to the console the value of both variables x and y outside of the function in the global scope.
// Declare a simple block using {} and within it, declare a block scoped variable x and assign it the value of 2.
// Log to the console the value of x within the block and outside of it.
// Write a paragraph explaining what you’ve learned from the above steps.

let x = 10;
console.log("outer - global --> x: ", x); // 10

function myFunction() {
  console.log("inside the function - global scoped --> x: ", x); // 10
  let y = 5;
  console.log("inside the function - block scoped --> y: ", y); // 5
}

myFunction();

console.log("outer - global --> x: ", x); // 10
// console.log("outside the function - block scoped --> y: ", y); // ReferenceError: y is not defined

{
  let x = 2;
  console.log("inner - block scoped --> x:", x); // 2
}

console.log("outer - global --> x: ", x); // 10