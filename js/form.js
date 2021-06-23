'use strict';
  
  let form = document.querySelector('.ad-form__element');
  let typeHome = document.getElementById("type");
  let formPrice = document.getElementById("price");

export function homePrice(evt){
  
  const typeHome =evt.target.value
 
  switch (typeHome){
    case "bungalow":
      formPrice.setAttribute("placeholder", "0");
      break;
    case "flat":
      formPrice.setAttribute("placeholder", "1000");
      break;
    case "house":
      formPrice.setAttribute("placeholder", "5000");
      break;
    case "palace":
      formPrice.setAttribute("placeholder", "10000");
      break;
  }
  
}





let formTime = document.querySelector('.ad-form__element--time');

let timeIn = document.getElementById("timein")
let timeOut = document.getElementById("timeout")

timeIn.addEventListener('change',inTime )
timeOut.addEventListener('change', outTime)


export function inTime(evt){
  const timeIn  =evt.target.value
  document.getElementById("timeout").value = document.getElementById("timein").value
 }

export function outTime(evt){
  const timeOut  =evt.target.value
  document.getElementById("timein").value = document.getElementById("timeout").value
  }
 

