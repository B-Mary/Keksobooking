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
    const finalGetData = getDate().then(responce=> console.log(responce))
    console.log(finalGetData)
  
  // Oтправка данных
 
  allForm.addEventListener("submit", sendData)
  async function sendData(e, data){
    e.preventDefault();
   
     const formData  = new FormData(this); 
    
    const response = await fetch("https://23.javascript.pages.academy/keksobooking", {
      method: 'POST',
      body: formData
    }).then(function(response){
      return response.text()
     }).then(function(text){
       console.log(text)
       allForm.reset();

        let elem = document.createElement("div");
        // Клонируем содержимое шаблона для того, чтобы переиспользовать его несколько раз
        elem.append(success.content.cloneNode(true));
        document.body.append(elem);

      }).catch(function(error){
        let elem = document.createElement("div");
        elem.append(err.content.cloneNode(true));  
        document.body.append(elem);
        console.log(error)
        
     })
    
  }
  
    // Кнопка очистки: очистка формы
    resetBtn.addEventListener("click", ()=>{
      allForm.reset()
    })
 
 }
 allFunction();