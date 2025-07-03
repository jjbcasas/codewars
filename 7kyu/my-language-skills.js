// Description:
// Task
// You are given a dictionary-like object (implementation may vary by language) containing languages as keys and your corresponding test results as values. Return the list of languages where your score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// Input object with key-value pairs:
// "Java" -> 10, "Ruby" -> 80, "Python" -> 65
// Ouput:
// [ "Ruby", "Python" ]

// Input object with key-value pairs:
// "Hindi" -> 60, "Greek" -> 71, "Dutch" -> 93
// Output:
// [ "Dutch", "Greek", "Hindi" ]

// Input object with key-value pairs:
// "C++" -> 50, "ASM" -> 10, "Haskell" -> 20
// Output:
// [ ]

// My solution
function myLanguages(results) {
  // array container
  let arr = []
  
  // new sorted object => obj to array, sort the array, array to obj
  let sortedResults = Object.fromEntries(Object.entries(results).sort((a,b)=>b[1]-a[1]))
  
  // for... in loop for object to iterate the object
  for( let key in sortedResults){
    // conditional to check if the value is equals or greater than 60
    if (results[key] >= 60){
      // if true, push it to the arr container
      arr.push(key)
      }
    }
  
  // return the arr container
  return arr
}