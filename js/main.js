'use strict';


import {cloneCard} from "./card.js"

import {homePrice, inTime, outTime} from "./form.js"

let mapBlock = document.getElementById("map-canvas");

let mapOptions = {
  center: [35.6894, 139.692],
  zoom: 10
}

let map = new L.map('map-canvas', mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
         
map.addLayer(layer);

let notice = document.querySelector('.notice')
let footer = document.querySelector('.footer')

notice.style.display = 'none';
footer.style.display = 'none';

mapBlock.addEventListener('click',displeyBlock );

function displeyBlock(){
  notice.style.display = '';
footer.style.display = '';
}