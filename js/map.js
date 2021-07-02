import {cloneCard} from "./card.js"
import {house} from "./date.js"

const mapBlock = document.getElementById("map-canvas");
const formAdress = document.getElementById("address")

mapBlock.addEventListener("click", mapFun, {once: true});

export function mapFun (){
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

  // Это была попытка 
  // let markerN = new Array(10)
  // markerN.fill()
  // let normalMarker = markerN.map(el =>{
  //   let elMarker = L.marker([house.x, house.y ],markerOptionsN ).addTo(map)
  // })
  
  function createPopup (offerObj){
   let locX =  offerObj.offer.address.x 
   let locY =  offerObj.offer.address.y
   const markerN = L.marker([locX , locY], markerOptionsN);
   markerN.addTo(map).bindPopup(cloneCard(offerObj));

  }
 
  house.forEach(el => createPopup(el))
    // нужно брать каждый елемент CloneCard(first) и присваить ему метку  с адрессом который генерируеться  в CloneCard popAddress 

    // потом каждой такой метке прицепить балун-инфу имено с данными метки(соответствовать должны координаты с popAddress)
  

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
