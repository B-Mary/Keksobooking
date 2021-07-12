'use strict';


import {cloneCard} from "./card.js"

import {homePrice, inTime, outTime} from "./form.js"

import {mapFun, displeyBlock} from "./map.js"


 import { allValid } from "./valid.js";
  
 const allForm = document.querySelector(".ad-form");

 

 function allFunction(){
  debugger

 //  Получение данных с сервера
   function getData(){
    const responseGet =  fetch("https://22.javascript.pages.academy/keksobooking/data",{
      method:"GET"
    }).then((data)=>console.log(data))
    .catch((err)=> alert(err))

  }
  
  getData();
  
  
 
  allForm.addEventListener("submit", sendData)
  function sendData(e){
    e.preventDefault();
    const responseSend = fetch(url, {
      method: "POST",
      body: formData
    }).then(()=>{
      allForm.reset()
      alert("Форма очищенная")
    })
    .catch((err)=>alert(err))
  }
 
 }
 allFunction();