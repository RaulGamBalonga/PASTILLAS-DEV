const str = "Hello, World!";

// Length of the string
console.log(str.length); // Output: 13

// Convert to uppercase
console.log(str.toUpperCase()); // Output: HELLO, WORLD!

// Convert to lowercase
console.log(str.toLowerCase()); // Output: hello, world!

// Access individual characters by index
console.log(str.charAt(0)); // Output: H
console.log(str[7]); // Output: W

// Find the index of a substring
console.log(str.indexOf("o")); // Output: 4
console.log(str.lastIndexOf("o")); // Output: 8

// Extract a substring
console.log(str.slice(7, 12)); // Output: World
console.log(str.substring(7, 12)); // Output: World
console.log(str.substr(7, 5)); // Output: World

// Replace a substring
console.log(str.replace("Hello", "Hi")); // Output: Hi, World!

// Split the string into an array
console.log(str.split(",")); // Output: ["Hello", " World!"]

// Trim leading and trailing whitespace
const whitespaceStr = "   Hello, World!   ";
console.log(whitespaceStr.trim()); // Output: Hello, World!
