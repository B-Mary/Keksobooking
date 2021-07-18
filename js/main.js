'use strict';


import {cloneCard} from "./card.js"

import {homePrice, inTime, outTime} from "./form.js"

import {mapFun, displeyBlock} from "./map.js"


 import { allValid } from "./valid.js";

 const allForm = document.querySelector(".ad-form");
 const success = document.getElementById("success")
 const err = document.getElementById("error")
 const resetBtn = document.querySelector(".ad-form__reset")
 const errtBtn = document.querySelector(".error__button")


 
 
 

 function allFunction(){
  
 
  
  async function getDate(){
   
    let responseGet = await fetch("https://22.javascript.pages.academy/keksobooking/data",
    {
      method: 'GET',
      credentials: 'same-origin',
    })
    let dataGet = await responseGet.json()
    return dataGet;
    }
    
    getDate().then(function(resp){
      console.log(resp);
      
      mapFun(resp)
       })
  
  // Oтправка данных
 
  allForm.addEventListener("submit", sendData)
  
 async function sendData(e){
    e.preventDefault();
   debugger
  
     const formData  = new FormData(allForm); 
    //  обджект делает масив , а без этого оно вообще не хочет отображать, типа пустой обьект, вот: {}
     const formDataObj = Object.fromEntries(formData);
     
     
    let responce = await fetch("https://23.javascript.pages.academy/keksobooking", {
      method: 'POST',
      body:JSON.stringify(formDataObj),
      headers: {
        "Content-Type": "application/json"
      }
    });
    let textFrom = await responce.text();
    
    //  (function  status(response){
      //   if(response >= 200 && response <= 300){
      //     let elem = document.createElement("div");
      //     elem.append(success.content.cloneNode(true));
      //   document.body.append(elem);
      //   } else {
      //     let elem = document.createElement("div");
      //     elem.append(err.content.cloneNode(true));  
      //     document.body.append(elem);
      //   }
      //  })

      // .then(function(text){
      //  console.log(text)
      //  allForm.reset();

      //   let elem = document.createElement("div");
      //   // Клонируем содержимое шаблона для того, чтобы переиспользовать его несколько раз
      //   elem.append(success.content.cloneNode(true));
      //   document.body.append(elem);

      // })
    
  }
  
    // Кнопка очистки: очистка формы
    resetBtn.addEventListener("click", ()=>{
      allForm.reset()
    })
 
 }
 allFunction();