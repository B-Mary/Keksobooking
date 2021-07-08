'use strict';


import {cloneCard} from "./card.js"

import {homePrice, inTime, outTime} from "./form.js"

import {mapFun, displeyBlock} from "./map.js"


// import { allValid } from "./valid.js";
  
const title = document.getElementById("title");
const submit = document.querySelector(".ad-form__submit");
const form = document.querySelector(".ad-form");
const priceHome = document.getElementById("price");
const typeHome = document.getElementById("type");
const roomNumber = document.getElementById("room_number");
const numberSeats = document.getElementById("capacity");

export function allValid () {

  title.addEventListener("keyup", function(){
    this.value = this.value.replace(/[^\D]/g, '');
  });

    title.addEventListener("change", function(evt){
      
      if(evt.target.value.length < 30){
      title.classList.add("invalid");
      } 
      else if (evt.target.length > 100){ 
      title.classList.add("invalid");
      } 
      else {
        title.classList.remove("invalid");
        title.classList.add("valid");
      
      }
    })

    price.addEventListener("keyup", function (){
      price.value = price.value.replace(/[^\d]/g, '');
     });

    price.addEventListener("change", typePrice) ;function typePrice (){
     
       let home = typeHome.value;
      
       let coc = priceHome.value  ;
      switch (home){
        case "bungalow":
          if (coc < 0 || coc > 1000000  ) {
            price.classList.add("invalid");
          }  else {
            price.classList.remove("invalid");
            price.classList.add("valid");
          }     
          break;
        case "flat":
          if (coc < 1000 || coc > 1000000 ) {
            price.classList.add("invalid");
          }  else {
            price.classList.remove("invalid");
            price.classList.add("valid");
          }  
          break;
        case "house":
          if (coc< 5000 || coc > 1000000 ) {
            price.classList.add("invalid");
          }  else {
            price.classList.remove("invalid");
            price.classList.add("valid");
          }  
          break;
        case "palace":
          if (coc < 10000 || coc > 1000000 ) {
            price.classList.add("invalid");
          }  else {
            price.classList.remove("invalid");
            price.classList.add("valid");
          }  
          break; 
      }
       priceHome.setAttribute("value", coc)
       priceHome.min =coc;
    } ; 

    roomNumber.addEventListener("change", rooms);
    function rooms (){
      let roomValue = roomNumber.value;
      let count ;
      debugger
      // let guestValue1 = numberSeats.options[numberSeats.selectedIndex].value ,

      // guestValue2 = numberSeats.options[numberSeats.selectedIndex].value ,

      // guestValue3 = numberSeats.options[numberSeats.selectedIndex].value,

      // guestValue0 = numberSeats.options[numberSeats.selectedIndex].value ;

      switch(roomValue){
        case "1":
         
         break;
         case "2":
         
         break;
         case "3":
         
         break;
         case "4":
         
         break;
      }
      // numberSeats.value = count;

      

      // if (roomValue = 1){
        
      //   guest2.disabled;
      //   guest3.setAttribute("disabled","disabled" );
      //   guest0.setAttribute("disabled","disabled" );
      // } else if (roomValue = 2){

      //   guest3.setAttribute("disabled","disabled" );
      //   guest0.setAttribute("disabled","disabled" );
      // } else if (roomValue = 3){
      //   guest0.setAttribute("disabled","disabled" );
      // } else {
      //   guest1.setAttribute("disabled","disabled" );
      //   guest2.setAttribute("disabled","disabled" );
      //   guest3.setAttribute("disabled","disabled" );
      // }
      
      
    }
    
    
     
      
     
    

}

allValid();
