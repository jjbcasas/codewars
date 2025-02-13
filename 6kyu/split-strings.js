// Description:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// My Solution

function solution(str){
    // make the string an array
     let arr = str.split('')
    // array container for the paired string
     let splitArr = []
     
    // loop thru the array
     for( let i = 0; i < arr.length; i+=2){
      // if the last element of the array is only one letter
        if ( arr.length - 1 === i){
          // push it like this with '_' as the pair
          splitArr.push(arr[i] + '_' )
        } else{
          // if not, just push it as pair
          splitArr.push(arr[i] + arr[i + 1] )
        }
    }
    // return the array of paired strings
    return splitArr
  }