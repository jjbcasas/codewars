// Description:
// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

// My Solution

function squareOrSquareRoot(array) {
    //loop thru the array
    return array.map( elem => {
      //check if the number is an integer after you get its square root
      return Number.isInteger(Math.sqrt(elem))
      //if yes, return the result, if not square it
        ? Math.sqrt(elem): Math.pow(elem,2)
  })
  }