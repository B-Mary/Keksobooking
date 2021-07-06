'use strict';


import {cloneCard} from "./card.js"

import {homePrice, inTime, outTime} from "./form.js"

import {mapFun, displeyBlock} from "./map.js"
const title = document.getElementById("title").value;
const submit = document.querySelector(".ad-form__submit").value;
const form = document.querySelector(".ad-form").value;
const avatar = document.getElementById("avatar").value;
const price = document.getElementById("price").value;
const photo = document.getElementById("images").value;

function allValid () {
// отмена действия по уомлчанию, при нажатии  enter на любом поле 
  form.addEventListener("submit", function (event) {
    event.preventDefault()
  })

// это не позволяет вводить что-то кроме текста
  title.addEventListener("keyup", function(){
    this.value = this.value.replace(/[^\D]/g, '');
  });

//  ограничение по количеству символов, но не знаю как вывести сообщение о: мало/много к-во символов, не alert и не console.log?????
    title.addEventListener("change", function(){
      
      if(this.value.length < 30){
      console.log("Минимальная длина -30 символов ");
      this.style.border = "2px solid red"
      this.value = " ";
      } 
      else if (this.value.length > 100){
      console.log("Максимальная длина -100 символов");
      this.style.border = "2px solid red"
      this.value = " ";
      } 
      else {
      console.log("в точку");
      this.value = " ";
      }
    })

    price.addEventListener("keyup", function(){
      this.value = this.value.replace(/[^\d]/g, '');
    });
    
    price.addEventListener("change", function(){
      if(this.value > 1000000){
        console.log("Максимальная сумма - 1 000 000")
        return false;
      } else {
        return true;
      }
    })



}
// title.addEventListener('keyup', function(){
//   this.value = this.value.replace(/[^\d]/g, '');
//   запрещяет ввод текста
// });



// title.addEventListener( "input", checkTitle)
// function checkTitle(){
 
//   if(   title.value.length >= 30){
//     title.style.border ="2px solid green"
//     title.setCustomValidity("");
//     return true;

//   }
//   if(title.value.lenght == "0" || title.value.length > 30) {
//     title.style.border ="2px solid red"
//     title.setCustomValidity("Your title is too short, please write more.")  
//     return "Your title is too short, please write more.";
//   }

// }
  
