// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// My Solution
function solution(str){
    let rev = ""
    for (let i =str.length - 1; i >= 0; i--){
    rev += str[i]
    }
    return rev
  }