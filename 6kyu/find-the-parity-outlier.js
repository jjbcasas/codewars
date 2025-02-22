// Description:
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

//  My Solution

function findOutlier(integers){
    // containers for the odd and even numbers
    let odd = []
    let even = []
    
    // for loop for the array integers
    for( let int of integers ){
      // conditionals for even and odd, then push it to its appropriate container
      if(int % 2 === 0){
        even.push(int)
      }else{
        odd.push(int)
      }
    }
   
    // return the value of an array if it only has one integer value
   return even.length === 1 ? +even : +odd
  }