
let mapBlock = document.getElementById("map-canvas");

mapBlock.addEventListener('click', mapFun );

export function mapFun (){
  let mapOptions = {
    center: [35.6894, 139.692],
    zoom: 10
  }

  let map = new L.map('map-canvas', mapOptions);

  let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
         
 map.addLayer(layer);
  
 let markerMain = {
  iconUrl: '../img/main-pin.svg',
  iconSize: [40, 40]
  }
  let customIcon = L.icon(markerMain);

  let markerOptions = {
    title: "MyLocation",
    clickable: true,
    draggable: true,
    icon: customIcon
  }

  let markerM = L.marker([35.6894, 139.692], markerOptions);
  markerM.addTo(map)

   let markerNormal ={
    iconUrl: '../img/pin.svg',
   iconSize: [40, 40]
  }
  let customIconNormal = L.icon(markerNormal);
  let markerOptionsN ={
    title: "My another Location",
    clickable: true,
    draggable: true,
    icon: customIconNormal
  }

  let markerN = L.marker([35.6894, 139.679], markerOptionsN);
  markerN.addTo(map)

}




let notice = document.querySelector('.notice')
let footer = document.querySelector('.footer')

notice.style.display = 'none';
footer.style.display = 'none';

mapBlock.addEventListener('click',displeyBlock );


export function displeyBlock(){
  notice.style.display = '';
  footer.style.display = '';
}

