
function checkTitle(){
  let title = document.getElementById("title");
  if( title.nodeValue.length <= 100 && title.nodeValue.length >= 30){
    return true;
  } else {
    return title.style.border = "1px solid red";
  }

}