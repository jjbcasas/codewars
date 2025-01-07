// Description:
// You are standing on top of an amazing Himalayan mountain. The view is absolutely breathtaking! you want to take a picture on your phone, but... your memory is full again! ok, time to sort through your shuffled photos and make some space...

// Given a gallery of photos, write a function to sort through your pictures. You get a random hard disk drive full of pics, you must return an array with the 5 most recent ones PLUS the next one (same year and number following the one of the last).

// You will always get at least a photo and all pics will be in the format YYYY.imgN

// Examples:

// sortPhotos["2016.img1","2016.img2","2015.img3","2016.img4","2013.img5"]) ==["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]
// sortPhotos["2016.img1"]) ==["2016.img1","2016.img2"]

// My Solution
function sortPhotos(pics){

    // container for final elements
    let correct = []
    let photoAlbum = pics.map( elem => elem.replace('.img',''))
  
    //arranging the elements for proper sorting
    let box = photoAlbum.map( elem => {
      if (elem.length === 5){
        return elem.slice(0,4)+0+elem.slice(4)
      } else {
      return elem
      }
    })
    
    let stock = box.sort()
    
    // putting back the orig string of the elements
    let right = stock.map( elem => {
      if( elem[4] === '0'){
        return String(elem).slice(0,4) + '.img' + String(elem).slice(5)
      } else {
        return String(elem).slice(0,4) + '.img' + String(elem).slice(4)}
      })
    
    // getting the 5 recent elements to push to the containers
    if (right.length <= 4){
      for( let i = 0; i <right.length; i++){
        correct.push(right[i])
      }
    } else {
    for( let i = right.length -5; i < right.length; i++){
          correct.push(right[i])
       }
     }
    
    //getting the latest element and adding the next supposed element
    let store  = correct[correct.length-1]
    let num = Number(store.slice(8)) + 1
    let lastElem = store.slice(0,8)
    correct.push(lastElem+num)
    
    return correct
  };