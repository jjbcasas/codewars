// Description:
// Task
// You get an array of numbers, return the sum of all of the positives ones.

// Example
// [1, -4, 7, 12] => 
// 1
// +
// 7
// +
// 12
// =
// 20
// 1+7+12=20
// Note
// If there is nothing to sum, the sum is default to 0.

// My Solution

function positiveSum(arr) {
    // container for the sum of the positive values
    let num = 0
    // looping thru all the numbers
    for (let i = 0; i < arr.length; i++){
    // conditionals to check if its positive
      if ( arr[i] > 0 ){
        // if positive, add it to the num container
        num += arr[i]
      }
    }
    // return the sum
    return num
  }