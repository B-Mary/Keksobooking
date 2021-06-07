'use strict';
//Не работает нужны строки(для type, photos, checkin, checkout) и по одному значениюююю

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let typObj = ['palace', 'flat', 'house', 'bungalow']

function getRandomType(max, types) {
  let randomCount = getRandomInt( 4);
  let typeeNumber = typObj[randomCount];
 return typeeNumber;
}

let check = [ '12:00', '13:00', '14:00']

function getRandomCheck (max, checkins) {
  let randomTime = getRandomInt( 3);
  let checkinTime = check[randomTime];
  return checkinTime;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let featObj = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']


function getArray (max, featuress) {
  let randomNumber = getRandomInt(6) ;
 let featNumber =featObj[randomNumber];
return featNumber;
}

let photoObj = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg.']

function getRandomPhoto (max, photoss) {
  let randomPhoto = getRandomInt( 3);
  let photosCount =photoObj[randomPhoto];
  return photosCount;
}

