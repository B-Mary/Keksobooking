
const allForm = document.querySelector(".ad-form");



function allFunction(){

// Отправка формы на сервер 
const sendForm = async (url, data)=>{
//  получаем ответ от сервера 
  const response  = await fetch(url, {
    method: "POST",
    body: data
  })
  // проверка условий 
  if (response.status >= 200 && response.status < 300 ){ 
    return await response.json()
  } else { 
    alert("Ошибка по адресу ${url}б статус ошибки ${response}"); 
  }
 }

//  Получение данных с сервера
 const getResponse = async (url)=>{
  const responseGet = await fetch(url);
   // проверка условий 
  if (responseGet.status >= 200 && responseGet.status < 300 ){ 
    return  responseGet.json()
  } else { 
    alert("Ошибка по адресу ${url} статус ошибки ${responseGet}"); 
  }
  
 }
 getResponse("https://22.javascript.pages.academy/keksobooking/data").then((data)=>console.log(data))
 .catch((err)=> alert(err))

 allForm.addEventListener("submit", e =>{
   e.preventDefault();
  //  должны назвать переменную и присвоить ей new FormData(allForm)
  sendForm("https://22.javascript.pages.academy/keksobooking/data", /* наша переменная пункт выше*/).then(()=>{
    allForm.reset() /*усли все отпр очищаем форму*/
    alert("Форма очищенная")
  })
  .catch((err)=> alert(err))
 })

}
allFunction();


// sendForm.addEventListener("submit", server)

// async function server(e){
//   e.preventDefault();
//  let urlRes = await fetch("https://22.javascript.pages.academy/keksobooking/data", {
//    method:"POST",
//    body: formData
//  })
//  .then((res)=>{
//    if(res.status >= 200 && res.status < 300){
//        return res;
//       }
//       else {
//         Promise.reject(res)
//           }
//   })
//   .then(res => res.json())
//   .then(data => console.log('+', data))
//   .catch(error => alert(error.message))


  // if(responce.ok){
  //   let json = await response.json();

  // }
  // else { alert("Ошибка HTTP: " + response.status); }
// }

getResponce();