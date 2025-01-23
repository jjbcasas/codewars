// Description:
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// My Solution

function order(words){
    // containers
    let map = {}
    let order = []
    
    let arr = words.split(' ')
    
    // put the data into a hash map
    for (let word of arr){
      map[word] = word.replace(/[a-z]/gi,'')
    }
    
    // take the properties to arrays and then sort the values
    let entry = Object.entries(map).sort((a,b)=> a[1] - b[1])
    // take the keys and return it in order
    return entry.map( key => key[0] ).join(' ')
    
  }