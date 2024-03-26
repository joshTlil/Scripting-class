"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: 
      Date:   

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
//Creating and object for timer
function Timer(min, sec){
    this.minutes = min;
    this.seconds = sec;
    this.timeID = null;
}

//Method for runPause
Timer.prototype.runPause = function(timer, minBox, secBox){
    let self = this;
    if(self.timeID){
        window.clearInterval(self.timeID);
        self.timeID = null;
    }else{
        self.timeID = window.setInterval(function(){
            self.countdown(minBox, secBox);
        }, 1000);
    }
}

//Method for countdown
Timer.prototype.countdown = function(minBox, secBox){
    if(this.seconds > 0){
        this.seconds--;
    }else if(this.minutes > 0){
        this.minutes--;
        this.seconds = 59;
    }else{
        window.clearInterval(this.timeID);
        this.timeID = null;
    }
    minBox.value = this.minutes;
    secBox.value = this.seconds;
}





/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");
//Start a new timer object
let myTimer = new Timer(parseInt(minBox.value), parseInt(secBox.value));
//When minute changes
minBox.onchange = function(){
    myTimer.minutes = parseInt(minBox.value);
}
//When second changes
secBox.onchange = function(){
    myTimer.seconds = parseInt(secBox.value);
}
//when the button is clicked
runPauseTimer.onclick = function(){
    myTimer.runPause(myTimer, minBox, secBox);
}