var far = document.querySelector("#fValue");
var cel = document.querySelector("#cValue");
document.onkeydown = function(event){
    if(event.key === "Tab"){
        if(far.value !== ""){
      cel.value = calCelsius(far.value);
        }else {
            console.log("Nothing!");
        }

        if(cel.value !== ""){
            far.value = calFahrenheit(cel.value);
        }else{
            console.log("Nothing!!");
        }
    }
}

function calCelsius(value){
    console.log("This is value: " + value);
return (value - 32) / 1.8;
}

function calFahrenheit(value){
return value * 1.8 + 32;
}
