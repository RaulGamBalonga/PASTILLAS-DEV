// Create a function named countLightningFlashes that receives a string representing the lightning flashes recorded by a sensor. 

// The function will:

// Receive a string containing only the characters '*' (representing a lightning flash) and '-' (representing no flash).
// Return the total number of sequences of consecutive lightning flashes.
// A sequence is defined as one or more '*' characters in a row.
// If a sequence is longer than 4 flashes, it should be ignored and not counted.
// Use the break and continue statements to handle sequences longer than 4 flashes.

function countLightningFlashes(flashes) {
  let count = 0;
  let currentSequence = 0;

  for (let i = 0; i < flashes.length; i++) {
    if (flashes[i] === '*') {
      currentSequence++;
      if (currentSequence > 4) {
        currentSequence = 0;
        continue;
      }
    } else {
      if (currentSequence > 0 && currentSequence <= 4) {
        count++;
      }
      currentSequence = 0;
    }
  }

  if (currentSequence > 0 && currentSequence <= 4) {
    count++;
  }

  return count;
}