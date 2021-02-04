var myTimer = 0;
var secondsPassed = 0;
var minutesPassed = 0;
var hoursPassed = 0;
var timerText = document.getElementById("timerText");
var textToShow = "";

window.onload = Start();

function Start() {
    myTimer = window.setInterval(function () { Tick(); }, 1000);
}

function Tick() {

    textToShow = "";

    secondsPassed++;

    if (secondsPassed >= 60) {
        secondsPassed = 0;
        minutesPassed++;
    }

    if (minutesPassed >= 60) {
        minutesPassed = 0;
        hoursPassed++;
    }

    if (hoursPassed < 10) {
        textToShow += `0${hoursPassed}`;
    }
    else {
        textToShow += `${hoursPassed}`;
    }
    textToShow += ":";

    if (minutesPassed < 10) {
        textToShow += `0${minutesPassed}`;
    }
    else {
        textToShow += `${minutesPassed}`;
    }
    textToShow += ":";

    if (secondsPassed < 10) {
        textToShow += `0${secondsPassed}`;
    }
    else {
        textToShow += `${secondsPassed}`;
    }

    timerText.innerHTML = textToShow;
}

function nextQuestion(){

}

function previousQuestion(){
    
}