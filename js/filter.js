
import { allFunction } from "./server.js";
import { createBlueMarkers} from "./map.js"

const filterBlock = document.querySelector(".map__filters");
const housingType = document.getElementById("housing-type")
const mapBlock = document.getElementById("map-canvas");
const housingPrice = document.getElementById("housing-price")
const MIN_PRICE_VALUE =  "10000"
const MAX_PRICE_VALUE =  "50000"

filterBlock.style.display = "none";

mapBlock.addEventListener("click", blockFilterActive)

export function blockFilterActive(){
  filterBlock.style.display = "";
}



  // let typeOfHousingFilter = function (elem) {
  //   if (housingType.value === 'any') {
  //     return true;
  //   }
  //   return elem.offer.type === housingType.value;
  // };


// тут логика понятно, это чисто отработка фильтра..но у нас же должно срабатывать при выборе("change" , function) какого-либо значения в фильтре на странице
  // function GetFilter(data){

  //   const filteredData =data.filter(el => el.houseType === houseType())
  //   houseType(){
  //   return offer.houseType
  //   }
  //   createBlueMarkers(filteredData)
  // }

// PRICE FILTER

 // let priceOfHousingfilter = function (elem) {
    //   let priceValue = false;
    //   debugger
    //   switch (housingPrice.value) {
    //     case 'any':
    //       priceValue = 'true';
    //       break;
    //     case 'low':
    //       priceValue = elem.offer.price <= MIN_PRICE_VALUE;
    //       break;
    //     case 'high':
    //       priceValue = elem.offer.price >= MAX_PRICE_VALUE;
    //       break;
    //     case 'middle':
    //       priceValue = elem.offer.price >= MIN_PRICE_VALUE && elem.offer.price <= MAX_PRICE_VALUE;
    //   }
    //   return priceValue;
    // };

 