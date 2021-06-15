
'use strict';

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getRandomType(max, types) {
  let randomCount = getRandomInt( 4);
  let typeeNumber = types[randomCount];
 return typeeNumber;
}

export function getArray (max, featuress) {
  let randomNumber = getRandomInt(6) ;
 let featNumber = featuress[randomNumber];
return featNumber;
}

export function getRandomCheck (max, checkins) {
  let randomTime = getRandomInt( 3);
  let checkinTime = checkins[randomTime];
  return checkinTime;
}

export function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

export function getRandomPhoto (max, photoss) {
  let randomPhoto = getRandomInt( 3);
  let picePhotoss = photoss.slice(randomPhoto)
   return picePhotoss;
}

export function avatarNumber (max, numbers) {
  let randomtNumb = getRandomIntInclusive(1, 8);
  let avat = "img/avatars/user0" + randomtNumb +".jpg" ;
  return avat;
}