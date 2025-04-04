// Description:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

//  My Solution

function createPhoneNumber(numbers){
    // number container
    let phoneNum = []
    // loop for the numbers array
    for( let i=0; i < numbers.length; i++){
      // conditionals
      if ( i === 0){
        phoneNum.push(`(${numbers[i]}`)
      } else if ( i === 2){
          phoneNum.push(`${numbers[i]}) `)
      } else if(i === 5){
          phoneNum.push(`${numbers[i]}-`)
      } else {
          phoneNum.push(numbers[i])
      }
    }
    // return the container and make it a string
    return phoneNum.join('')
  }