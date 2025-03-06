// Description:
// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

// My Solution

function findMissingLetter(array){
    //alphabet array
    let map = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    //getting the index of the letters present in the array input
    let arr = array.map(e=> map.indexOf(e.toLowerCase()))
    //storing the start counter for the comparison
    let store = arr[0]
    //loop to check the missing letter
    for ( let letter of arr){
      //conditional to check where the missing letter occured
      if( letter !== store ){
        //conditionals to check if it shoudld be a lowercase or uppercase
        if( array[0] !== map[arr[0]]){
          //return the missing letter by putting the current index
          return map[store].toUpperCase()
        } else {
          return map[store]
        } 
      }
      //if the comparison is still the same, increment one
      store++
    }
  }