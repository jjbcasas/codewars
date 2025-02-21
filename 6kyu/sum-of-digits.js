// Description:
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// My Solution

function digitalRoot(n) {
    //convert the numbers into array
    let val = n.toString().split('')
    //while loop until the number is only single digit
    while( val.length > 1){
      //add all the digits
      val = val.reduce((acc,c)=> acc + Number(c),0).toString().split('')
    }
    //return the value if the val is only single digits
    return Number(val.join())
    
  }