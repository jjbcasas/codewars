// Description:
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// My Solution

function arrayDiff(a, b) {
    // container of one array
    let map = {}
    
    // container for the remaining elements
    let arr =[]
    
    // put the array 'b' elements in the container
    for ( let char of b ) {
      map[char] = true
    }
    
    /* check if the array 'a' elements is present in the map,
    if it's not in the map, you push it in the arr container */
    for ( let char of a) {
      if ( !map[char]) {
        arr.push(char)
      }
    }
    
    // return the array
    return arr
  }