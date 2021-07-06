'use strict';


import {cloneCard} from "./card.js"

import {homePrice, inTime, outTime} from "./form.js"

import {mapFun, displeyBlock} from "./map.js"


const title = document.getElementById("title");
const submit = document.querySelector(".ad-form__submit");
const form = document.querySelector(".ad-form");
const price = document.getElementById("price");
let type = document.getElementById("type");

function allValid () {

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

    price.addEventListener("change", typePrice) ;function typePrice (ev){
      
      type = ev.target.value;
      price.value = "";
      let count = "null";
      debugger
      switch (type){
        case "bungalow":
          count = "0";
          
          break;
        case "flat":
          count = "1000";
          break;
        case "house":
          count ="5000";
          break;
        case "palace":
          count= "10000";
          break; 
      }
      price.setAttribute("value", count);
      price.min = count;
    } ; 
    
    
     
      
     
    

}

allValid();
  
