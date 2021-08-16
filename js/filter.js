
import { allFunction } from "./server.js";
import { createBlueMarkers} from "./map.js"

const filterBlock = document.querySelector(".map__filters");

const mapBlock = document.getElementById("map-canvas");



filterBlock.style.display = "none";

mapBlock.addEventListener("click", blockFilterActive)

export function blockFilterActive(){
  filterBlock.style.display = "";
}

