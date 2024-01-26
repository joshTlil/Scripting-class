/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: 
      Date:   

      Filename: project03-01.js
*/

let menuItems = document.getElementsByClassName("menuItem");

for (let i = 0; i < menuItems.length; i++){
    menuItems[i].addEventListener("click", calcTotal);
}


function calcTotal(){
  let orderTotal = 0;
  if(document.getElementById("item1").checked){
    orderTotal += Number(menuItems[0].value);
  } 
  if(document.getElementById("item2").checked){
    orderTotal += Number(menuItems[1].value);
  }
  if(document.getElementById("item3").checked){
    orderTotal += Number(menuItems[2].value);
  }  
  if(document.getElementById("item4").checked){
    orderTotal += Number(menuItems[3].value);
  }
  if(document.getElementById("item5").checked){
    orderTotal += Number(menuItems[4].value);
  }
  let bill = document.getElementById("billTotal");
  bill.innerHTML = formatCurrency(orderTotal);
}

// function calcTotal(){
//     let orderTotal = 0;
//     for(let i = 0; i < menuItems.length; i++){
//   if(document.getElementById("item1").checked){
//     orderTotal += Number(menuItems[i].value);
//     break;
//   } 
//   if(document.getElementById("item2").checked){
//     orderTotal += Number(menuItems[i].value);
//   }
//   if(document.getElementById("item3").checked){
//     orderTotal += Number(menuItems[i].value);
//   }  
//   if(document.getElementById("item4").checked){
//     orderTotal += Number(menuItems[i].value);
//   }
//   if(document.getElementById("item5").checked){
//     orderTotal += Number(menuItems[i].value);
//   } 
//     }
//       let bill = document.getElementById("billTotal");
//   bill.innerHTML = formatCurrency(orderTotal);
// }

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
    
 }