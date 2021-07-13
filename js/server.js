
import {mapFun, displeyBlock} from "./map.js"


const allForm = document.querySelector(".ad-form");
const success = document.getElementById("success")
const err = document.getElementById("error")



function allFunction(){
 debugger

 
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
 async function sendData(e){
   e.preventDefault();
   const responseSend = await fetch("https//:23.javascript.pages.academy/keksobooking", {
     method: "POST",
     body: JSON.stringify(formData)
   }).then(function(response){
     success.style.display = "";
   })
   .then(()=>{
     allForm.reset()
   })
   .catch(function(error){
     err.style.display = "";
     success.style.display = none;
     console.log(error)
   })
   
   const formData  = new FormData(allForm);
   
  for(const name in e) {
   formData.append(name, e[name]);
  }
 }

}
allFunction();



.then(function(response){
  success.style.display = "";
})
.then(()=>{
  allForm.reset()
})
.catch(function(error){
  err.style.display = "";
  console.log(error)
})