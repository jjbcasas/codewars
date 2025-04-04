// Description:
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.Description:
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//  My solution

function isPangram(string){
    //remove all the numbers and punctuations
    // make it all lowercase
    // use set to remove all duplicate letters
   return new Set(string.replaceAll(/[0-9.,/#!$%^&*;:{}=\-_`'"~() ]/g, "")
                  .toLowerCase())
                  .size  === 26
  }