// Description:
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

// My Solution

function accum(s) {
    let num = 1
    // split every letter into an array
    // capitalize the 1st letter and lower case the rest
    // then repeat the letter to the number of its place and make the rest lower case
      return s.split('')
    .map( char=> char.charAt(0).toUpperCase() + char.repeat(num++).slice(1).toLowerCase() )
    .join('-') 
  }