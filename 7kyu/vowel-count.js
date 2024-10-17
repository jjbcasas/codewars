// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// My Solution
function getCount(str) {
    let words= 0
    let vowel = str.split('')
    for (let i = 0; i < vowel.length; i++){
    if ( vowel[i] === 'a' || vowel[i] === 'e' || vowel[i] === 'i' ||
  vowel[i] === 'o' || vowel[i] === 'u'){
  words += 1}
    }
    return words
  }