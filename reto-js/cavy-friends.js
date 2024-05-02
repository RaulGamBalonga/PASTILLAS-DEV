// Create a function named findCavyFriends that receives an array of strings called animalList.

// The function will:
// Search through the animalList array and find all the strings that contain the word "cavy" (case-insensitive).
// Return a new array containing only the strings with "cavy" in them.

// For example:
// findCavyFriends(["dog", "cat", "guinea pig", "rabbit", "cavy", "hamster", "capybara"])
// Should return: ["guinea pig", "cavy", "capybara"]

let animalList = ["dog", "cat", "guinea pig", "rabbit", "cavy", "hamster", "capybara"];

function findCavyFriends(animalList) {
  return animalList.filter(animal => animal.toLowerCase().includes('capy'));
}
const response = findCavyFriends(animalList);
console.log(response);
