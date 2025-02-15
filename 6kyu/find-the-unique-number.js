// Description:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

//  My Solution

function findUniq(arr) {
    // hash map container
    let map = {}
    
    // loop thru the array of numbers
    for ( let nums of arr){
    
      // conditionals to track the total count of numbers
      if ( map[nums]){
        // if the property already exists, add 1
        map[nums] += 1
      } else {
        // if it dont exist yet, put it in the map and put a value of 1
        map[nums] = 1
      }
    }
    
    // loop thru the map
    for ( let odd in map){
      // conditionals to check if the value existed only once
      if (map[odd] === 1){
        // if true return the property
        return +odd
      }
    }
  }