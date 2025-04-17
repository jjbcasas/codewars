// Description:
// Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)

// Examples:

// "(123) 456-7890"  => true
// "(1111)555 2345"  => false
// "(098) 123 4567"  => false

// My Solution

function validPhoneNumber(phoneNumber){
    //change the data types of numbers to numbers instead of string
    let num = phoneNumber.split('').map(e=> {
      if( e === '(' || e === ')' || e === ' ' || e === '-'){
        return e
      } else {
        return +e
      }
    })
    
    //then check if its s number type make it a string 'X'
    let nums = num.map( e =>{
      if( e === '(' || e === ')' || e === ' ' || e === '-'){
        return e
      } else {
        return 'X'
      }
    })
    
    //the correct format of a phone number
    let defaultPhoneNum = '(XXX) XXX-XXXX'
    //compare the given string of number to the default if its true or false
    return nums.join('') === defaultPhoneNum 
  
  }