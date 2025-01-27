// Description:
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

//  My Solution

// return masked string
function maskify(cc) {
    // container
    let mask = []
    // loop for the string
    for ( let i = 0; i <= cc.length; i++){
      // conditional for the last 4 digit
      if ( i >= cc.length - 4 ){
        mask.push( cc[i] )
      } else { // conditional for the masked strings
        mask.push( '#' )
      }
    }
    // return the container
    return mask.join('')
  }