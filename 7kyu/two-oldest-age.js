// Description:
// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example (Input --> Output):

// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]

// My Solution

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    //sor the array from lowest to highest
    ages.sort((a,b)=> a-b)
    //return the 2nd to the highest and the highest inside the array
    return [ages[ages.length-2], ages[ages.length-1]]
  }