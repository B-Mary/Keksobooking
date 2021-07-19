
 import {mapFun, displeyBlock} from "./map.js"
 import {cloneCard} from "./card.js"

 const allForm = document.querySelector(".ad-form");
 const success = document.getElementById("success")
 const err = document.getElementById("error")
 const resetBtn = document.querySelector(".ad-form__reset")
 const errtBtn = document.querySelector(".error__button")
 const mapBlock = document.getElementById("map-canvas");

 
 
 

export function allFunction(){

  mapBlock.addEventListener("click", functGet, {once: true});
  
  function functGet (){
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
  }
  
  allForm.addEventListener("submit", sendData);
 
  
 async function sendData(e){
    e.preventDefault();
   
  
     const formData  = new FormData(allForm); 

     
    let responce = await fetch("https://23.javascript.pages.academy/keksobooking", {
      method: 'POST',
      body:formData
    });
    debugger
     function  status(response){
        if(response = "ok"){
          
          let elem = document.createElement("div");
          elem.append(success.content.cloneNode(true));
        document.body.append(elem);
        allForm.reset();
        } else {
          let elem = document.createElement("div");
          elem.append(err.content.cloneNode(true));  
          document.body.append(elem);
        }
       }
       status(responce)

  }
  

    resetBtn.addEventListener("click", ()=>{
      allForm.reset()
    })
 
 }

allFunction()
