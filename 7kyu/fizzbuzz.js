// Description:
// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

// My Solution

// Return an array
function fizzbuzz(n){
    //container
    let arr = []
    //loop starting 1 to n
    for ( let i = 1; i <= n; i++){
      //if divisbile by 3 & 5 return fizzbuzz
      if ( i % 5 === 0 && i % 3 === 0 ){
        arr.push('FizzBuzz')
      //if divisbile by 3 & 5 return fizz
      } else if ( i % 3 === 0 ){
        arr.push('Fizz')
      //if divisbile by 3 & 5 return buzz
      } else if ( i % 5 === 0 ){
        arr.push('Buzz')
      //else return the number
      } else {
        arr.push(i)
      }
    }
    //return the array
    return arr
  }