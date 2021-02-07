var myTimer = 0;
var secondsPassed = 0;
var minutesPassed = 0;
var hoursPassed = 0;
var timerText = document.getElementById("timerText");
var textToShow = "";
var correctQuestions = 0;
var MCQOptions = document.getElementById("MCQOptions");
var dropdown = document.getElementById("dropdown");
var TFOptions = document.getElementById("TFOptions");
var fillInTheBlank = document.getElementById("fillInTheBlank");
var questionText = document.getElementById("question");
var MCQQuestionOne;
var MCQQuestionTwo;
var TFQuestion;
var FILLQuestion;
var DROPQuestion;
var questionSequence = ["MCQ", "TF", "DROP", "FILL", "MCQ1"];

var dropdownOptions = [document.getElementById("dropdownOptionOne"), document.getElementById("dropdownOptionTwo"), document.getElementById("dropdownOptionThree")];
var dropdownMainText = document.getElementById("dropdownMainText");
var currentQuestion = 0;


window.onload = Start();

function Start() {
    myTimer = window.setInterval(function () { Tick(); }, 1000);
    pickRandomQuestions();
    loadQuestion(0);
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



function loadQuestion(questionIndex) {

    var questionSequence = ["MCQ", "TF", "DROP", "FILL", "MCQ1"];

    if (questionIndex == 4) {
        changeNextButtonText("Sumbit");
    }
    else {
        changeNextButtonText("Next");
    }

    if (questionSequence[questionIndex] == "MCQ") {
        dropdown.style.visibility = "hidden";
        TFOptions.style.visibility = "hidden";
        fillInTheBlank.style.visibility = "hidden";
        MCQOptions.style.visibility = "visible";
        questionText.innerHTML = MCQQuestionOne["question"];
    }

    if (questionSequence[questionIndex] == "TF") {
        dropdown.style.visibility = "hidden";
        MCQOptions.style.visibility = "hidden";
        fillInTheBlank.style.visibility = "hidden";
        TFOptions.style.visibility = "visible";
    }

    if (questionSequence[questionIndex] == "DROP") {
        TFOptions.style.visibility = "hidden";
        MCQOptions.style.visibility = "hidden";
        fillInTheBlank.style.visibility = "hidden";
        dropdown.style.visibility = "visible";
    }

    if (questionSequence[questionIndex] == "FILL") {
        dropdown.style.visibility = "hidden";
        MCQOptions.style.visibility = "hidden";
        TFOptions.style.visibility = "hidden";
        fillInTheBlank.style.visibility = "visible";
    }

    if (questionSequence[questionIndex] == "MCQ1") {
        dropdown.style.visibility = "hidden";
        TFOptions.style.visibility = "hidden";
        fillInTheBlank.style.visibility = "hidden";
        MCQOptions.style.visibility = "visible";
    }

}



function changeNextButtonText(toWht) {

    var nextButton = document.getElementById("nextButton");


    if (toWht == "Submit") {

        nextButton.innerHTML = "Submit";
        nextButton.addEventListener("click", function () { submit(); });
    }

    if (toWht == "Next") {

        nextButton.innerHTML = "Next";
        nextButton.addEventListener("click", function () { nextQuestion(); });
    }
}


function nextQuestion() {
    checkQuestionAnswer();
    currentQuestion++;
    loadQuestion(currentQuestion);
}


function dropdownOptionClicked(index) {
    dropdownMainText.innerHTML = dropdownOptions[index].innerHTML;
}

function submit() {
    sessionStorage.setItem("correctQuestions", correctQuestions);
    sessionStorage.setItem("timeTaken", timerText.innerHTML);

    if (localStorage.getItem("highestScore") === null) {
        localStorage.setItem("highestScore", correctQuestions);
    }
    else if (correctQuestions > localStorage.getItem("highestScore")) {
        localStorage.setItem("highestScore", correctQuestions);
    }

    if (localStorage.getItem("bestTime") === null) {
        localStorage.setItem("bestTime", timerText.innerText);
    }
    else if (correctQuestions > localStorage.getItem("bestTime")) {
        localStorage.setItem("bestTime", timerText.innerText);
    }

    window.location.href = "Thanks.html";
}


function pickRandomQuestions() {
    // MCQ
    while (true) {
        var MCQQuestionOneRandInt = Math.floor((Math.random() * questionsMCQ.length));
        var MCQQuestionTwoRandInt = Math.floor((Math.random() * questionsMCQ.length));
        console.log(questionsMCQ[MCQQuestionOneRandInt]);
        console.log(questionsMCQ[MCQQuestionTwoRandInt]);
        if (MCQQuestionOneRandInt != MCQQuestionTwoRandInt) {
            break;
        }
    }
    // TF
    var TFQuestionRandInt = Math.floor((Math.random() * questionsTF.length));

    // FILL
    var FILLQuestionRandInt = Math.floor((Math.random() * questionsFill.length));

    // DROP
    var DROPQuestionRandInt = Math.floor((Math.random() * questionsDropdown.length));

    MCQQuestionOne = questionsMCQ[MCQQuestionOneRandInt];
    MCQQuestionTwo = questionsMCQ[MCQQuestionTwoRandInt];
    TFQuestion = questionsTF[TFQuestionRandInt];
    FILLQuestion = questionsFill[FILLQuestionRandInt];
    DROPQuestion = questionsDropdown[DROPQuestionRandInt];
}

function checkQuestionAnswer() {

}
