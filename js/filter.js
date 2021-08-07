
import { allFunction } from "./server.js";
import { createBlueMarkers} from "./map.js"

const filterBlock = document.querySelector(".map__filters");
const filterTypeHome = document.getElementById("housing-type")
const mapBlock = document.getElementById("map-canvas");
const house = document.getElementById("housing-type")
const housePrice = document.getElementById("housing-price")


filterBlock.style.display = "none";

mapBlock.addEventListener("click", blockFilterActive)

export function blockFilterActive(){
  filterBlock.style.display = "";
}

filterTypeHome.addEventListener("change", filtersChange)

export function filtersChange(event){
  debugger
  const filterValue = event.target.value
  switch (filterValue){
    case "bungalow":
      let bungalowFilter = createBlueMarkers.filter(el=> el.typeHouse === filterValue)
      break;
    case "flat":
      let flatFilter = createBlueMarkers.filter(el=> el.typeHouse === filterValue)
      break;
    case "house":
      let houseFilter = createBlueMarkers.filter(el=> el.typeHouse === filterValue)
      break;
    case "palace":
      let placeFilter = createBlueMarkers.filter(el=> el.typeHouse === filterValue)     
      break; 
  }

}
