// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// My Solution
function sumMix(x){
    return x.map(elem => Number(elem)).reduce((acc, c) => acc + c)
    }