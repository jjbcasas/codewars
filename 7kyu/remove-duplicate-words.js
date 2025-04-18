// Description:
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

// My Solutions

function removeDuplicateWords (s) {
    //put the string of words into an array
    let arr = s.split(' ')
    //use the built in Set obj to remove duplicates
    let obj = new Set(arr)
    //use the spread operator to put the values of the object inside an array
    //then use the join method to make the array values a string
    return [...obj].join(' ')
  }