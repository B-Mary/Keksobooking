'use strict';
  
let form = document.querySelector(".ad-form__element");
let typeHome = document.getElementById("type");
let formPrice = document.getElementById("price");

let avatarPreview = document.querySelector(".ad-form-header__preview")

let avatarLoadInput = document.getElementById("avatar")


let photoHousePreview = document.querySelector(".ad-form__photo")
let photoHouseInput = document.getElementById("images")

typeHome.addEventListener("change", homePrice )

 export function homePrice(evt){

  const typeHome =evt.target.value;
  formPrice.value="";
  let count = null
 
  switch (typeHome){
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
  formPrice.setAttribute("placeholder", count)
  formPrice.min = count;
}

let formEl = document.querySelector(".ad-form__element--time");

let timeIn = document.getElementById("timein")
let timeOut = document.getElementById("timeout")

timeIn.addEventListener("change", inTime )
timeOut.addEventListener("change", outTime )


export function inTime(evt){
  const timeIn  =evt.target.value;
  let count = null;
  switch (timeIn){
    case "12:00":
     count = "12:00"
      break;
    case "13:00":
    count = "13:00"
      break;
    case "14:00":
     count = "14:00"
      break;
  }
 timeOut.value = count;
}


export function outTime(e){
  const timeOut  =e.target.value; 
  let cc =null
  switch (timeOut){
    case "12:00":
      cc= "12:00"
      break;
    case "13:00":
      cc = "13:00"
      break;
    case "14:00":
      cc = "14:00"
      break;
  }
 timeIn.value = cc;
} 


 avatarLoadInput.addEventListener("change", loadImg)

 function loadImg(){
  
   while(avatarPreview.firstChild) {
    avatarPreview.removeChild(avatarPreview.firstChild);
   }
    if(avatarLoadInput.files.length === 0){
      return;
    } 
     
    let f = avatarLoadInput.files[0],     
     fr = new FileReader();

    if(f.type.indexOf("image") === -1){
      return;
    }

    fr.addEventListener("load", previewImage)

    function previewImage(e){
      const image = document.createElement('img');
      image.width = "60"
      image.height = "70"
      avatarPreview.id = "nopadding"
      image.src = e.target.result;
      avatarPreview.append(image)
      
    }
    fr.readAsDataURL(f);
  
 }

 photoHouseInput.addEventListener("change", loadHouseImg)


function loadHouseImg(e) {

  while(photoHousePreview.firstChild) {
    photoHousePreview.removeChild(photoHousePreview.firstChild);
   }
  
  let files = e.target.files;
  photoHousePreview.id = "dispflex"

  debugger
 
  let  filesLength = files.length;
  for (let i = 0; i < filesLength; i++) {
   let f = files[i]
   let fileRead = new FileReader();
  

   fileRead.addEventListener("load", previewHouseImage)

    function previewHouseImage(e){
      debugger
      let file = e.target ;
      file.width ="50";
      file.height = "50";
      file.visibility = "visible"
      photoHousePreview.innerHTML += "<img  src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>"
    }
    fileRead.readAsDataURL(f) 
 }
}
