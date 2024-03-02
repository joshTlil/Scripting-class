"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: 
      Date:   

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 8;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
let timeId;
let questionList = document.querySelectorAll("div#quiz input");
let wrongGuess = document.querySelectorAll("div#quiz input.wronganswer")

let counter = 2;

// startQuiz.onclick(() =>{
//     overlay.setAttribute("class", "showquiz");
//     timeId = window.setInterval(countdown, 1000);
// })

startQuiz.onclick = function(){
    overlay.setAttribute("class", "showquiz");
    timeId = window.setInterval(countdown, 1000);
}

function countdown(){
    if(timeLeft === 0){
        clearInterval();
        let totalCorrect = checkAnswers();
        if(totalCorrect === correctAnswers.length){
            window.alert("You win")
        }else{
           window.alert(totalCorrect);
           timeLeft = quizTime;
           quizClock.value = timeLeft;
           let clearTime = setInterval(function(){
            counter--;
            if(counter === 0){
                clearInterval(clearTime);
                overlay.setAttribute("class", "hidequiz");
            }
           },1000);
        //    overlay.setAttribute("class", "hidequiz");
        }
    }else{
        timeLeft--;
        quizClock.value = timeLeft;
    }
}















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
         questionList[i].querySelectorAll("div#quiz input.wronganswer");
      }      
   }
   return correctCount;
}
