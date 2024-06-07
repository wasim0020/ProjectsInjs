 //this is fiest way to create project
 const button = document.querySelectorAll(".box");
 const body = document.querySelector("body");
 button.forEach(function (item) {
   item.addEventListener("click", function (e) {
     switch (e.target.id) {
       case "box1":
         body.style.backgroundColor = "gray";
         break;
       case "box2":
         body.style.backgroundColor = "red";
         break;
       case "box3":
         body.style.backgroundColor = "blue";
         break;
       case "box4":
         body.style.backgroundColor = "brown";
         break;
       default:
         break;
     }
   });
 });

 //Second Way to Create a Project
 function changecolor_1() {
   document.getElementById("body").style.backgroundColor = "brown";
   const change = document.querySelectorAll("h2");
   change.forEach(function (item) {
     item.style.color = "gray";
   });
 }
 function changecolor_2() {
   document.getElementById("body").style.backgroundColor = "green";
   const change = document.querySelectorAll("h2");
   change.forEach(function (item) {
     item.style.color = "red";
   });
 }
 function changecolor_3() {
   document.getElementById("body").style.backgroundColor = "orange";
   const change = document.querySelectorAll("h2");
   change.forEach(function (item) {
     item.style.color = "blue";
   });
 }
 function changecolor_4() {
   document.getElementById("body").style.backgroundColor = "purple";
   const change = document.querySelectorAll("h2");
   change.forEach(function (item) {
     item.style.color = "brown";
   });
 }