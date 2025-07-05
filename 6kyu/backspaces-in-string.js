// Description:
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

// My Solution
function cleanString(s) {
  let backspaceString = []
  // convert the string to an array
  s.split('')
  // iterate thru it and use a conditional to check if its a string or a '#'
  // if its true push it to the array container if not use the pop method
  .forEach(e=> e!=='#' ? backspaceString.push(e) : backspaceString.pop())
  // convert it back to a string
  return backspaceString.join('')
}