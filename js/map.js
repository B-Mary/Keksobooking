
const mapBlock = document.getElementById("map-canvas");
const formAdress = document.getElementById("address")

mapBlock.addEventListener("click", mapFun );

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
    // position:latLng, 
    // map:map,  и из-за этого тоже, почему??? не туда вставляю?
    clickable: true,
    draggable: true,
    icon: customIcon
  }

  const markerM = L.marker([35.6894, 139.692], markerOptions);
  markerM.addTo(map)

  const markerNormal ={
    iconUrl: "../img/pin.svg",
   iconSize: [40, 40]
  }

  const customIconNormal = L.icon(markerNormal);

  const markerOptionsN ={
    title: "My another Location",
    clickable: true,
    draggable: false,
    icon: customIconNormal
  }

  const markerN = L.marker([35.6894, 139.679], markerOptionsN);
  markerN.addTo(map)

  formAdress.setAttribute("readonly", "readonly")
// из-за кода ниже не отображаються маркеры
  // markerOptions.addEventListener("dragend", addressMarker)

  // function addressMarker(e){
  //   console.log(e.latLng);
  // }
//   
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
