
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
      let seatsValue = numberSeats.value;
      let count = null; 
      switch(roomValue){
        case "1":
          if (count ==2){
            seatsValue[2].setAttribute("disabled", "disabled");
          } else if  (count ==3){
            seatsValue[1].setAttribute("disabled", "disabled")
          } 
          break;
        case "2":
         
           if (count ==3){
            seatsValue[1].setAttribute("disabled", "disabled");
          } else{

          }
          break;
        case "3":

          break;
        case "100":
          break;
      }
      seatsValue = count;
    }
    
    
     
      
     
    

}

allValid();