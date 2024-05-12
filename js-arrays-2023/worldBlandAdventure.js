// Create a function named blendWords that receives word1 and word2 as its parameters.

// This function aims to concatenate the two words together, but with a twist: if the last letter of word1 and the first letter of word2 are the same, one of the duplicate letters should be omitted.

// The function should handle the following cases:

// If the last letter of word1 and the first letter of word2 are the same, omit one of the duplicate letters when concatenating the words.
// If either word1 or word2 is an empty string, return the non-empty string.
// If both word1 and word2 are empty strings, return an empty string.
// Parameters:

// word1 (string): The first word to be blended.
// word2 (string): The second word to be blended.
// The function returns a string, which is the result of blending word1 and word2 according to the rules described above


function blendWords(word1, word2) {
  if (word1 === '' && word2 === '') {
    return '';
  }
  
  if (word1 === '') {
    return word2;
  }
  
  if (word2 === '') {
    return word1;
  }
  
  const lastChar1 = word1[word1.length - 1];
  const firstChar2 = word2[0];
  
  if (lastChar1 === firstChar2) {
    return word1 + word2.slice(1);
  }
  
  return word1 + word2;
}