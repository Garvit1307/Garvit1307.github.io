var myTimer = 0;
var secondsPassed = 0;
var minutesPassed = 0;
var hoursPassed = 0;
var timerText = document.getElementById("timerText");
var textToShow = "";

window.onload = Start();

function Start() {
    myTimer = window.setInterval(function () { Tick(); }, 1000);
    startGame();
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

var questionSequence = ["MCQ", "TF", "DROP", "FILL", "MATCH"];

var currentQuestion = 0;

function loadQuestion(questionIndex) {

    if (currentQuestion == questionSequence.length - 1) {
        changeNextButtonText("Sumbit");
    }
}

var nextButton = document.getElementById("nextButton");

function changeNextButtonText(toWht) {
    if (toWht == "Submit") {

        nextButton.innerHTML = "Submit";
        nextButton.onclick = submit();
    }

    if (toWht == "Next") {

        nextButton.innerHTML = "Next";
        nextButton.onclick = nextQuestion();
    }
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion(currentQuestion);
}

function previousQuestion() {
    currentQuestion--;
    loadQuestion(currentQuestion);
}

var dropdownOptions = [document.getElementById("dropdownOptionOne"), document.getElementById("dropdownOptionTwo"), document.getElementById("dropdownOptionThree")];
var dropdownMainText = document.getElementById("dropdownMainText");

function dropdownOptionClicked(index) {
    dropdownMainText.innerHTML = dropdownOptions[index].innerHTML;
}

function submit() {

}
