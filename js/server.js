
 import { displeyBlock, redMarker, createBlueMarkers} from "./map.js"
 import {cloneCard} from "./card.js"


 const allForm = document.querySelector(".ad-form");
 const success = document.getElementById("success")
 const err = document.getElementById("error")
 const resetBtn = document.querySelector(".ad-form__reset")
 const errBtn = document.querySelector(".error__button")
 const mapBlock = document.getElementById("map-canvas");
 const formAdress = document.getElementById("address")

 const mapFilters = document.querySelector(".map__filters")
 

 const main = document.querySelector(".mainm")
 const EscapeKey = "27"
 const LAT =  35.68813;
 const LNG = 139.75836;  


export function allFunction(){

  mapBlock.addEventListener("click", functGet, {once: true});

  function functGet (){
    
    async function getDate(){

      let responseGet = await fetch("https://23.javascript.pages.academy/keksobooking/data",
      {
        method: 'GET',
        credentials: 'same-origin',
      })
      let dataGet = await responseGet.json()
      return dataGet;
      }
      
      getDate().then(function(resp){
        console.log(resp);
        redMarker(LAT, LNG)
      
        // createBlueMarkers(resp)

        mapFilters.addEventListener("change", filter)
        
        function filter(event){
          
          let filterValue = event.target.value
          const houseType = document.getElementById("housing-type")
          const housePrice = document.getElementById("housing-price")
          const houseRooms = document.getElementById("housing-rooms")
          const houseGuests = document.getElementById("housing-guests")
          const houseFeatures = document.getElementById("housing-features")
          let houseTypeValue = houseType.value
          let housePriceValue = housePrice.value
          let houseRoomsValue = houseRooms.value
          let houseGuestsValue = houseGuests.value
          let houseFeaturesValue = houseFeatures.value
         
          function housingTypeHandler(elem){
           if(houseTypeValue === "palace"){
            return elem.offer.type === "palace"
           }
           if(houseTypeValue === "flat"){
            return elem.offer.type === "flat"
           }
           if(houseTypeValue === "house"){
            return elem.offer.type === "house"
           }
           if(houseTypeValue === "bungalow"){
            return elem.offer.type === "bungalow"
           }
           if (houseTypeValue === "any"){
             return elem.offer.type === "bungalow" && elem.offer.type === "house" && elem.offer.type === "flat" && elem.offer.type === "palace"
           }
          }

          function housingPriceHandler(elem){
            
           if (housePriceValue === "low"){             
             return  elem.offer.price < 10000             
           }
           if (housePriceValue === "middle"){                   
             return elem.offer.price >= 10000 && elem.offer.price <= 50000             
           }
           if (housePriceValue === "high"){ 
             return elem.offer.price > 50000             
           }
           if (housePriceValue === "any"){
            return elem.offer.price >= 0 && elem.offer.price <= 100000
           }
          }

          
          function housingRoomHandler(elem){
            
            if (houseRoomsValue === "1"){             
              return  elem.offer.rooms === "1"             
            }
            if (houseRoomsValue === "2"){                   
              return elem.offer.rooms === "2" 
            }
            if (houseRoomsValue === "3"){ 
              return elem.offer.rooms === "3"            
            }
            if (houseRoomsValue === "any"){
              return elem.offer.rooms >= 0 && elem.offer.rooms <= 10
            }
           }

           function housingGuestsHandler(elem){
            
            if (houseGuestsValue === "1"){             
              return  elem.offer.guests === "1"             
            }
            if (houseGuestsValue === "2"){                   
              return elem.offer.guests === "2" 
            }
            if (houseGuestsValue === "0"){ 
              return elem.offer.guests === "0"            
            }
            if (houseGuestsValue === "any"){
              return elem.offer.guests >= 0 && elem.offer.guests <= 10
            }
           }

           function housingFeaturesHandler(elem){
             debugger
            if (houseFeaturesValue === "wifi"){             
              return  elem.offer.features === "wifi"             
            }
            if (houseFeaturesValue === "dishwasher"){                   
              return elem.offer.features === "dishwasher" 
            }
            if (houseFeaturesValue === "parking"){ 
              return elem.offer.features === "parking"            
            }
            if (houseFeaturesValue === "washer"){
              return elem.offer.features === "washer"
            }
            if (houseFeaturesValue === "elevator"){ 
             return elem.offer.features === "elevatorg"            
            }
            if (houseFeaturesValue === "conditioner"){
             return elem.offer.features === "conditioner"
            }
           }


         let commonFilter = function (elem) {
          return housingTypeHandler && housingPriceHandler(elem) && housingRoomHandler(elem) && housingGuestsHandler(elem) && housingFeaturesHandler(elem)
         }
          const filteredOffers = resp.filter(commonFilter)
          createBlueMarkers (filteredOffers)
        }
         })
  }



  allForm.addEventListener("submit", sendData);

  async function sendData(e){
    e.preventDefault();

     const formData  = new FormData(allForm); 

    let responce = await fetch("https://23.javascript.pages.academy/keksobooking", {
      method: 'POST',
      body:formData
    });
    
    function  status(response){
      if(response = "ok"){
        let elem = document.createElement("div");
        let clone = success.content.cloneNode(true)
        elem.append(clone);  
        main.append(elem)

        allForm.reset();
        
        const markerRed = document.querySelector(".leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive.leaflet-marker-draggable")
        markerRed.remove();
 
        window.addEventListener("click", templateClick) 
        window.addEventListener("keydown", templateKey)

        function templateClick (event) {
          debugger
          if (event.target.className === "successs"){
            elem.style.display = "none"
            document.location.reload();
          }
        }

        function templateKey (ev){      
          if (ev.keyCode == 27){
            elem.style.display = "none"
            document.location.reload();
          }
        }
        
        formAdress.value = [LAT + "  " + LNG]  
        } else  {
        let elem = document.createElement("div");
        let clone = err.content.cloneNode(true)
        elem.append(clone);  
        main.append(elem)

        window.addEventListener("click", templateClock) 
        window.addEventListener("keydown", templateKey)
          
        function templateClock (event) {
          if (event.target.className === "error"){
            elem.style.display = "none"
          } else if(event.target.className === "error__button"){
            elem.style.display = "none"
          }
        }

        function templateKey (ev){
          if (ev.keyCode == 27){
            elem.style.display = "none"
          }
        }

      }

    }
    status(responce)

  }
  
  resetBtn.addEventListener("click", ()=>{
    allForm.reset()
  })
 
}

allFunction()


  