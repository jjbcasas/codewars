// Description:
// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

// My Solution

function solution(digits){
    //get the 1st 5 digits
    let highNum = Number(digits.slice(0,5))
    //loop thru all the digits
    for( let i= 5; i<digits.length; i++){
      //get the next five consecutive numbers after the first and so on
      let one = String(digits[i-4]) + String(digits[i-3]) + String(digits[i-2]) + String(digits[i-1]) + String(digits[i])
      //conditionals to compare the bigger num,first 5 digits and the next one
      if ( highNum < one){
        //if yes always store the bigger value in the highNum variable
        highNum = one
      }
    }
    //return the value
    return Number(highNum)
  }