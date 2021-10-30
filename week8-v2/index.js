days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];


for (i=0; i<document.getElementByClassName("days").length; i++){
  document.getElementsByClassName("days")[i].innerHTML= "<h2>"+days[i]+"</h2>";
  document.getElementsByClassName("days")[i].addEventListener('click',setActive,false);
  document.getElementsByClassName("days")[i].id= days[i];
}
