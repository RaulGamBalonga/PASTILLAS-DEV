// Create a function named sortColors that receives an array of color strings. The function will sort the color strings in alphabetical order, but will put the color "green" first if it exists in the array.

// The function should meet the following criteria:
// The input array will contain only valid color strings.
// The output array should have all the colors sorted alphabetically, with "green" appearing first if it exists.
// If there are multiple occurrences of "green", they should all appear at the beginning of the output array.
// The sorting should be case-sensitive, so "Green" and "green" are treated as different colors.

// Here are some examples:
// sortColors(["blue", "red", "yellow"]) => ["blue", "red", "yellow"]
// sortColors(["blue", "green", "red"]) => ["green", "blue", "red"]
// sortColors(["purple", "orange", "green", "cyan"]) => ["green", "cyan", "orange", "purple"]


function sortColors(colors) {
  const greenColors = colors.filter(color => color === 'green');
  const otherColors = colors.filter(color => color !== 'green').sort();
  return [...greenColors, ...otherColors];
}
