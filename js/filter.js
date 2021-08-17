
import { allFunction } from "./server.js";
import { createBlueMarkers} from "./map.js"



const mapBlock = document.getElementById("map-canvas");
const mapFilters = document.querySelector(".map__filters")


mapFilters.style.display = "none";

mapBlock .addEventListener("click", blockFilterActive)

export function blockFilterActive(){
  mapFilters.style.display = "";
}


mapFilters.addEventListener("change", filter)

export function filter(event, resp){
  debugger
  let  filteredOffers =[]
  let bluePin = document.querySelectorAll('[title*="My another Location"]')
  bluePin.forEach(el => el.remove())

  
  const houseType = document.getElementById("housing-type")
  const housePrice = document.getElementById("housing-price")
  const houseRooms = document.getElementById("housing-rooms")
  const houseGuests = document.getElementById("housing-guests")
  
  let houseTypeValue = houseType.value
  let housePriceValue = housePrice.value
  let houseRoomsValue = houseRooms.value
  let houseGuestsValue = houseGuests.value
 
 
  function housingTypeHandler(elem){
    
   if(houseTypeValue === "palace"){
    return elem.offer.type === "palace"
   }
   if(houseTypeValue === "flat"){
    return elem.offer.type === "flat"
   }
   if(houseTypeValue === "house"){
    return elem.offer.type === "house"
   }
   if(houseTypeValue === "bungalow"){
    return elem.offer.type === "bungalow"
   }
   if (houseTypeValue === "any"){
     return true
   }
  }

  function housingPriceHandler(elem){
    
   if (housePriceValue === "low"){             
     return  elem.offer.price < 10000             
   }
   if (housePriceValue === "middle"){                   
     return elem.offer.price >= 10000 && elem.offer.price <= 50000             
   }
   if (housePriceValue === "high"){ 
     return elem.offer.price > 50000             
   }
   if (housePriceValue === "any"){
    return true
   }
  }

  
  function housingRoomHandler(elem){
    
    if (houseRoomsValue === "1"){             
      return  elem.offer.rooms === "1"             
    }
    if (houseRoomsValue === "2"){                   
      return elem.offer.rooms === "2" 
    }
    if (houseRoomsValue === "3"){ 
      return elem.offer.rooms === "3"            
    }
    if (houseRoomsValue === "any"){
      return true
    }
   }

   function housingGuestsHandler(elem){
    
    if (houseGuestsValue === "1"){             
      return  elem.offer.guests === "1"             
    }
    if (houseGuestsValue === "2"){                   
      return elem.offer.guests === "2" 
    }
    if (houseGuestsValue === "0"){ 
      return elem.offer.guests === "0"            
    }
    if (houseGuestsValue === "any"){
      return true
    }
   }

   let featuresFilter = function (elem) {
   
      const filterFeaturesCheckboxes = document.querySelectorAll('.map__features input[type=checkbox]:checked');
      let filtered = true;
      if (filterFeaturesCheckboxes.length && elem.offer.features) {
          filterFeaturesCheckboxes.forEach(function (chBox) {
           if (!elem.offer.features.includes(chBox.value) ) {
             filtered = false;
            }
        });
      }
       return filtered;
   };

  

 let commonFilter = function (elem) {
  return housingTypeHandler(elem) && housingPriceHandler(elem) && housingRoomHandler(elem) && housingGuestsHandler(elem) && featuresFilter(elem)
 }
   filteredOffers = event.filter(commonFilter)
  createBlueMarkers (filteredOffers)
}

