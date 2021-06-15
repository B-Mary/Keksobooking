'use strict';

import {
  getRandomInt, getRandomType, getArray, getRandomCheck, getRandomArbitrary, getRandomIntInclusive, getRandomPhoto, avatarNumber}from "./util.js"


let typObj = ['palace', 'flat', 'house', 'bungalow']

let check = [ '12:00', '13:00', '14:00']

let featObj = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']

 let photoObj = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 
'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 
'http://o0.github.io/assets/images/tokyo/hotel3.jpg']

let numb = [1, 2, 3, 4, 5, 6, 7, 8]



let rent = new Array(10)
rent.fill()
console.log(rent)
 export let house = rent.map(el =>({
  author: {
    avatar: avatarNumber(8, numb)
  },
  offer: {
    title: 'Живите комфортно',
    address:{
      x: getRandomArbitrary(35.65000, 35.70000),
      y:getRandomArbitrary(139.70000, 139.80000)
    } ,
    price: getRandomIntInclusive(5000, 30000) ,
    type: getRandomType(4, typObj) ,
    rooms: getRandomIntInclusive(1, 10) ,
    guests: getRandomIntInclusive(1, 8) ,
    checkin: getRandomCheck(3,check ),
    checkout: getRandomCheck(3,check ),
    features:getArray(6, featObj) ,
    description: 'Все красиво и прелестно, и удобно, и чудесно.',
    photos: getRandomPhoto(3, photoObj)
  },
  location:{
    x: getRandomArbitrary(35.65000, 35.70000),
    y:getRandomArbitrary(139.70000, 139.80000) ,
  }
}))



