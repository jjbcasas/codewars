// Description:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// My Solution

function toCamelCase(str){
  
    // put them in an array and remove the characters
    let arr = str.split(/[_-]/)
    
    // use map to loop through the element
    let camelCased = arr.map((e,i) => {
      // conditionals for the array after index 0 to make capital letters
      if(i > 0){
        // get the 1st character and make it capital and then concat the rest
        return e[0].toUpperCase() + e.slice(1)
      } else {
        // return the 1st elem because we dont need to change it
        return e
      }
    })
    
    // concat all the elements into one string and return it
    return camelCased.join('')
  }