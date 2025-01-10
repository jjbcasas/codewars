// Description:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// My Solution
function findShort(s){
    // sort the words from shortest to longest
    let short = s.split(' ').sort((a,b)=> a.length - b.length)
    // return the length of the shortest word
    return short[0].length
  }