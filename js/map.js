import {cloneCard} from "./card.js"
import { allValid } from "./valid.js";

const formAdress = document.getElementById("address")
const mapBlock = document.getElementById("map-canvas");

export function mapFun (all){
 
  const mapOptions = {
    center: [35.6894, 139.692],
    zoom: 10
  }

  const map = new L.map("map-canvas", mapOptions);

  const layer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
         
 map.addLayer(layer);
  
 const markerMain = {
  iconUrl: "../img/main-pin.svg",
  iconSize: [40, 40],
 
  }
  const customIcon = L.icon(markerMain);

  const markerOptions = {
    title: "MyLocation",
    clickable: true,
    draggable: true,
    icon: customIcon
  }
  const markerM = L.marker([35.6894, 139.692], markerOptions);
    markerM.addTo(map)
    formAdress.value = [35.6894 + "  " + 139.692]
 
  formAdress.setAttribute("readonly", "readonly")
       
   markerM.on("drag", newAddressMarker);
  function newAddressMarker () {
      formAdress.value = markerM.getLatLng().lat + " " + markerM.getLatLng().lng;
   };

  const markerNormal ={
    iconUrl: "../img/pin.svg",
   iconSize: [40, 40]
  }

  const customIconNormal = L.icon(markerNormal);

  const markerOptionsN ={
    title: "My another Location",
    clickable: true,
    raggable: false,
    icon: customIconNormal
  }

  
  function createPopup (offerObj){
   
   let locX =  offerObj.location.lat
   let locY =  offerObj.location.lng
   const markerN = L.marker([locX , locY], markerOptionsN);
   markerN.addTo(map).bindPopup(cloneCard(offerObj));
  }
 
  all.forEach(el => createPopup(el))

}


let notice = document.querySelector(".notice")
let footer = document.querySelector(".footer")

notice.style.display = "none";
footer.style.display = "none";

mapBlock.addEventListener("click",displeyBlock );


export function displeyBlock(){
  notice.style.display = "";
  footer.style.display = "";
  
}
