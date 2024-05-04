
// Challenge

// Easy
// Create a function named trimCreativeString that receives inputString and maxLength as its parameters.

// This function aims to trim a given string about a day filled with artistic endeavors and creative pursuits, ensuring that it does not exceed a specified maximum length while preserving complete words and the word "art".

// The inputString represents a sentence or phrase describing various artistic activities. The function should remove all vowels from the inputString, except for the vowels that are part of the word "art". If the word "break" appears in the inputString, it should be skipped entirely, and the processing should continue with the remaining characters.

// After removing the vowels (except those in "art") and skipping "break", the resulting string should be trimmed to ensure it does not exceed the maxLength. If the trimming occurs in the middle of a word, the entire word should be removed from the final string.

// Parameters:

// inputString (string): The input string describing the artistic activities of the day.
// maxLength (integer): The maximum length the trimmed string should have.
// The function returns a string representing the trimmed version of the input string, with vowels removed (except in "art"), "break" skipped, and length not exceeding maxLength.


function trimCreativeString(inputString, maxLength) {
  const words = inputString.split(' ');
  let result = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word === 'break') {
      continue;
    }

    let trimmedWord = '';
    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      if (word === 'art' || !'aeiou'.includes(char.toLowerCase())) {
        trimmedWord += char;
      }
    }

    if (result.length + trimmedWord.length + 1 <= maxLength) {
      result += (result ? ' ' : '') + trimmedWord;
    } else {
      break;
    }
  }

  return result;
}