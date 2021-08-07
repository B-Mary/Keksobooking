import {cloneCard} from "./card.js"
import { allValid } from "./valid.js";

const formAdress = document.getElementById("address")
const mapBlock = document.getElementById("map-canvas");
const LAT = 35.685257;
const LNG = 139.75146;
const mapZoom = 10




const mapOptions = {
  center: [LAT, LNG],
  zoom: mapZoom
}
const map = new L.map("map-canvas", mapOptions);
const layer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");   
map.addLayer(layer);


export function redMarker(lat, lng){
 
  const markerMain = {
    iconUrl: "../img/main-pin.svg",
    iconSize: [50, 50],
    }
  const customIcon = L.icon(markerMain);
  
  const markerOptions = {
    title: "MyLocation",
    clickable: true,
    draggable: true,
    icon: customIcon
  }

  const markerM = L.marker([lat, lng], markerOptions);

  markerM.addTo(map)
  formAdress.value = [lat + "  " +  lng]

  formAdress.setAttribute("readonly", "readonly")
       
  markerM.on("drag", newAddressMarker);
  
  function newAddressMarker () {
   formAdress.value = markerM.getLatLng().lat + " " + markerM.getLatLng().lng;
  };    
}



export function createBlueMarkers(all){
   let tenBlueMarkers = all.slice(0,10)
   tenBlueMarkers.forEach(el => createPopup(el))
}

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



let notice = document.querySelector(".notice")
let footer = document.querySelector(".footer")

notice.style.display = "none";
footer.style.display = "none";

mapBlock.addEventListener("click",displeyBlock );


export function displeyBlock(){
  notice.style.display = "";
  footer.style.display = "";
  
}
