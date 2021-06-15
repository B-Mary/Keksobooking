'use strict';


import {house} from "./date.js" 
let first = house[0];
console.log(first);

console.log(house);

function cloneCard(offerDate){ 
  const card = document.querySelector('#card')
  .content
  .querySelector('.popup');
  const clonedCard = card.cloneNode(true);

  let popTitle = clonedCard.querySelector(".popup__title")
  
  let someText = offerDate['offer'].title;
  popTitle.innerText = someText;
  let mapCanvas = document.querySelector("#map-canvas")
  mapCanvas.prepend(clonedCard);

  let popAddress = clonedCard.querySelector(".popup__text--address");
  let newAddressX = offerDate['offer'].address.x;
  let newAddressY = offerDate['offer'].address.y;
  let newAddress = newAddressX + ' ' + newAddressY;
  popAddress.innerText = newAddress;
 
 let popPrice = clonedCard.querySelector(".popup__text--price")
 let newPrice = offerDate['offer'].price;
 let endPrice = newPrice + ' ' + '₽/ночь';
 popPrice.innerText = endPrice ;

  let popType = clonedCard.querySelector(".popup__type")
  let allType = offerDate['offer'].type;
  switch (allType) {
    case "flat":
      popType.innerText = 'Квартира'
      break;
    case "palace":
      popType.innerText = 'Особняк'
      break;
    case "house":
      popType.innerText = 'Дом'
      break;
    case "bungalow":
      popType.innerText = 'Бунгало'
      break;
  }


 let popGuests = clonedCard.querySelector(".popup__text--capacity");
 let newGuests = offerDate['offer'].guests;
 let newRooms = offerDate['offer'].rooms;
 let roomGuests = newRooms + ' ' + 'комнаты' + ' '+ 'для' +' ' + newGuests + ' ' + 'гостей';
 popGuests.innerText = roomGuests

 let popTime = clonedCard.querySelector(".popup__text--time");
 let timeIn = offerDate['offer'].checkin;
 let timeOut = offerDate['offer'].checkout;
 let timeAll = 'Заезд в ' + timeIn + ', ' + 'выезд до ' + timeOut;
 popTime.innerText = timeAll

 let popFeatures = clonedCard.querySelector(".popup__features");
 let newFeatures = offerDate['offer'].features;
 popFeatures.innerText = newFeatures;

 let popDescription = clonedCard.querySelector(".popup__description");
 let newDescription = offerDate['offer'].description;
 
 popDescription.innerText = newDescription;

 let popPhotos = clonedCard.querySelector(".popup__photos");
   let newPhotos = offerDate['offer'].photos.map(photo => {
   let image =  document.createElement('img')
  image.src = photo
  return image
    }); 
    let joinPhotos = newPhotos.join(',')
    console.log(joinPhotos)
  popPhotos.innerText = joinPhotos
  
  debugger
 
 let popAvatar = clonedCard.querySelector(".popup__avatar");
 let srcAvatar = offerDate['author'].avatar;
 popAvatar.innerText = srcAvatar;
 
 console.log(offerDate);
}

cloneCard(first);


