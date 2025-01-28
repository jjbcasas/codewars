// Description:
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Examples:
// divisors(12) --> [2, 3, 4, 6]
// divisors(25) --> [5]
// divisors(13) --> "13 is prime"

//  My Solution

function divisors(integer) {
    // container for the divisor
    let divisor = []
    // loop to get all the divisors of the integer
    for ( let i = 2; i < integer; i++){
      // conditionals to check if i is divisor of the integer
      if ( integer % i === 0){
        // if true push it to the array container
        divisor.push(i)
      } 
    }
    // conditional if the number is prime
    if ( divisor.length === 0){
      // if true return the string
      return `${integer} is prime`
    } else {
      // if not return the array containing all the divisors
      return divisor
    }
  }