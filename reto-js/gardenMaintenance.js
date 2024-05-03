// Garden Maintenance


// Challenge

// Easy
// Create a function named maintainGarden that receives gardenBed and hedge as its parameters.

// This function aims to simulate the daily tasks of a groundskeeper in maintaining a beautiful garden. It involves watering the plants in the garden bed and trimming the hedges.

// The gardenBed parameter represents the current state of the garden bed. It is a string consisting of characters 'w' for watered plants and 'd' for dry plants. Your task is to water all the dry plants by replacing the 'd' characters with 'w'. Return the new string representing the fully watered garden bed.

// The hedge parameter represents the current state of the hedge. It is a string consisting of characters 'g' for properly trimmed sections and 'u' for untrimmed sections. Your task is to trim the untrimmed sections by reversing the characters in each 'u' substring. Return the new string representing the neatly trimmed hedge.

// Parameters:

// gardenBed (string): A string representing the current state of the garden bed, consisting of 'w' for watered plants and 'd' for dry plants.
// hedge (string): A string representing the current state of the hedge, consisting of 'g' for properly trimmed sections and 'u' for untrimmed sections.
// The function returns an array with two elements:

// The first element is a string representing the fully watered garden bed.
// The second element is a string representing the neatly trimmed hedge.


function maintainGarden(gardenBed, hedge) {
  const wateredGardenBed = gardenBed.replace(/d/g, 'w');
  
  const trimmedHedge = hedge.replace(/u+/g, match => match.split('').reverse().join(''));
  
  return [wateredGardenBed, trimmedHedge];
}