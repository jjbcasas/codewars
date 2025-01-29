// Description:
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

//  My Solution

function between(a, b) {
    // container for the integers
    let arr = []
    // loop for the smaller integer up to the largest integer
    for ( let i = a; i <= b; i++ ){
      // push all the integers into the arr container
      arr.push(i)
    }
    // return the container
    return arr
  }