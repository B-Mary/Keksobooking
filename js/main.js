'use strict';

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


let numb = [1, 2, 3, 4, 5, 6, 7, 8]

function avatarNumber (max, numbers) {
  let randomtNumb = getRandomIntInclusive(1, 8);
  let avat = "img/avatars/user0" + randomtNumb +".jpg" ;
  return avat;
 }


let rent = new Array(10)
rent.fill()
console.log(rent)

let house= rent.map(el =>([{
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
    quests: getRandomIntInclusive(1, 8) ,
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
}]))
