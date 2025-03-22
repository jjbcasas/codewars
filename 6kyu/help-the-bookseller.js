// Description:
// A bookseller has lots of books classified in 26 categories labeled A, B, C, ..., Z. Each book has a code of at least 3 characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code is followed by a space and by a positive integer, which indicates the quantity of books of this code in stock.

// Task
// You will receive the bookseller's stocklist and a list of categories. Your task is to find the total number of books in the bookseller's stocklist, with the category codes in the list of categories. Note: the codes are in the same order in both lists.

// Return the result as a string described in the example below, or as a list of pairs (Haskell/Clojure/Racket/Prolog).

// If any of the input lists is empty, return an empty string, or an empty array/list (Clojure/Racket/Prolog).

// Example
// # the bookseller's stocklist:
// "ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"

// # list of categories: 
// "A", "B", "C", "W"

// # result:
// "(A : 20) - (B : 114) - (C : 50) - (W : 0)"
// Explanation:

// category A: 20 books (ABART)
// category B: 114 books = 25 (BKWRK) + 89 (BTSQZ)
// category C: 50 books (CDXEF)
// category W: 0 books

// My Solution

function stockList(books, categories) {
    //container for the total of the books
    let map = {}
    //container for the string that will be returned
    let phrase = ''
    //container for the categories and putting it inside a parenthesis
    let arr = []
    
    //loop for the books and putting it in tha map
    for ( let page of books ){
      //conditional if the key already exist, add the value to it
      if ( map[page[0]] ){
        map[page[0]] += Number(page.slice(-3))
      // conditional for the key that dont exist yet, put it in the map and then put the value to it
      }else {
        map[page[0]] = Number(page.slice(-3))
      }
    }
  
    //loop for all the categories that needs to be returned
    for ( let cat of categories ){
      //if it exist in the map, push it in the arr
      if(map[cat]){
        arr.push(`(${cat} : ${map[cat]})`)
      //else put the value of 0
      } else {
        arr.push(`(${cat} : 0)`)
      }
    }
    
    //loop to put the values in a string
    for ( let i=0; i< arr.length; i++){
      //if the value is the last, just put the value
      if(i === arr.length-1){
        phrase += arr[i]
        //else add ' - ' to it after the value
      } else {
        phrase += arr[i] + ' - '
      }
    }
    
    //conditionals for the value that needs to be returned
    if ( books.length < 1 ){
      //if the books array is empty, return an empty string
      return phrase = ''
      //else return phrase
    } else {
      return phrase
    }
  }