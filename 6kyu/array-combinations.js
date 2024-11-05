// Description:
// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// See test cases for more examples.

// Good luck!

// If you like this Kata, please try:

// Sum of integer combinations

// Sum of array singles

// My Solution

function solve(arr){
    //get rid of dupes - set
    //multiply the length of sub array reduce //return result of the multi
    return arr.reduce( (a,c) => a * new Set(c).size, 1 )
    //｝
    //const solve = arr = arr.reduce( (a,c) => a * new Set(c).size, 1 )
    }

console.log(solve([[1,2],[4],[5,6]]),4);
console.log(solve([[1,2],[4,4],[5,6,6]]),4);
console.log(solve([[1,2],[3,4],[5,6]]),8);
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72);