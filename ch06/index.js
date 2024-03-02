"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: 
      Date:   

      Filename: project06-01.js
*/

let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

submitButton.addEventListener("click", function(event){
    event.preventDefault();

    if(pwd.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)){
        alert("Your password must be at least 8 characters with at least one letter and one number");
        // pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
    }else if(pwd.value !== pwd2.value){
        alert("Your passwords must watch");
    }else{
        alert("");
    }
})