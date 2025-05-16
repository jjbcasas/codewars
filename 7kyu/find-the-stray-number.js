// Description:
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// My solution
function stray(numbers) {
  //use filter to get the number thats diff from the rest by checking
  //if the indexOf and lastIndexOf of the same element is the same
  //if its the same then that means it has no similar value
  return +numbers.filter( ( e, i, a ) => a.indexOf(e) === a.lastIndexOf(e))
}