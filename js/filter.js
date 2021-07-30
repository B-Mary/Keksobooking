
import { allFunction } from "./server.js";
import { createBlueMarkers} from "./map.js"

const filterBlock = document.querySelector(".map__filters");
const mapBlock = document.getElementById("map-canvas");
const house = document.getElementById("housing-type")
const housePrice = document.getElementById("housing-price")



mapBlock.addEventListener("click", blockFilterActive)

filterBlock.style.display = "none";

export function blockFilterActive(){
  filterBlock.style.display = "";
}

filterBlock.addEventListener("change", filtersChange)

function filtersChange(event){
//  установить ограничение на отображения 10 пинов 


//  это получение значения 
  const filterValue = event.target.value
  // нужно удалять все маркеры


  // нужно при изменение соотв option вырисовывать новые пины

  //  у нас несколько фильтров, мы должны ждать пока изменяться все или после каждого фильтра удалять все- отриовывать нужное?

  // брать масив значений всего блока(всех фильтров или каждого фильтра отдельно?)

  let resultFilter = тут должен быть масив.filter(function(item){
    item.value()
  }) 
}
