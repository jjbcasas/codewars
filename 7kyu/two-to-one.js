// Description:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//  My Solution

function longest(s1, s2) {
    // combining the two strings
    let distinct = s1.concat(s2)
    //sorting the string and then removing its duplicates
    return Array.from(new Set(distinct.split('').sort())).join('')
    
    //other methods
   // return [...new Set(distinct.split('').sort())].join('')
  }