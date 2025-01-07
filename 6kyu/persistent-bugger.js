// Description:
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

// My Solution

function persistence(num) {
    // for keeping count
      let count = 0
    // storing the converted values and making it an array
      let box = String(num).split('').map(Number)
    // container for the product
      let container = 0
    
    // loop to check if its a single digit every time we multiply it
     for(let i=box.length; box.length > 1; i--){
      
        if( box.length > 1){
        //storing the product
        container = box.reduce((acc,c)=> acc * +c,1)
        // converting the values an array and reassigning it to box
        box = String(container).split('')
        // the count for the times the values are being multiplied to get to a single digit
        count++
        }
      }
      
      return count
    }