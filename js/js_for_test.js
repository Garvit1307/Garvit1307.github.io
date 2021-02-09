var myTimer = 0;
var secondsPassed = 0;
var minutesPassed = 0;
var hoursPassed = 0;
var totalSecondsPassed = 0;
var timerText = document.getElementById("timerText");
var textToShow = "";
var correctQuestions = 0;
var MCQOptions = document.getElementById("MCQOptions");
var dropdown = document.getElementById("dropdown");
var TFOptions = document.getElementById("TFOptions");
var fillInTheBlank = document.getElementById("fillInTheBlank");
var fillInTheBlankBLANK = document.getElementById("fillInTheBlankBLANK");;
var questionText = document.getElementById("question");
var MCQQuestionOne;
var MCQQuestionTwo;
var TFQuestion;
var FILLQuestion;
var DROPQuestion;
var questionSequence = ["MCQ", "TF", "DROP", "FILL", "MCQ1"];
var dropdownUserSelectedAnswer = -1;
var MCQUserSelectedAnswerOne = -1;
var MCQUserSelectedAnswerTwo = -1;
var TFUserSelectedAnswer = -1;
var FILLUserSelectedAnswer;

var MCQQuestionOneRandInt;
var MCQQuestionTwoRandInt;
var TFQuestionRandInt;
var FILLQuestionRandInt;
var DROPQuestionRandInt;

var dropdownOptions = [document.getElementById("dropdownOptionOne"), document.getElementById("dropdownOptionTwo")];
var dropdownMainText = document.getElementById("dropdownMainText");
var currentQuestion = 0;

var optionOneLabel = document.getElementById("optionOneLabel");
var optionTwoLabel = document.getElementById("optionTwoLabel");
var optionThreeLabel = document.getElementById("optionThreeLabel");
var optionFourLabel = document.getElementById("optionFourLabel");

var optionOne = document.getElementById("optionOne");
var optionTwo = document.getElementById("optionTwo");
var optionThree = document.getElementById("optionThree");
var optionFour = document.getElementById("optionFour");

window.onload = Start();

function Start() {
    myTimer = window.setInterval(function () { Tick(); }, 1000);
    pickRandomQuestions();
    loadQuestion(0);
}

function Tick() {

    textToShow = "";

    secondsPassed++;
    totalSecondsPassed++;

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

    if (questionSequence[questionIndex] == "MCQ") {
        dropdown.style.visibility = "hidden";
        TFOptions.style.visibility = "hidden";
        fillInTheBlank.style.visibility = "hidden";
        MCQOptions.style.visibility = "visible";
        questionText.innerHTML = MCQQuestionOne["question"];
        optionOneLabel.innerHTML = MCQQuestionOne["answers"][0]["text"];
        optionTwoLabel.innerHTML = MCQQuestionOne["answers"][1]["text"];
        optionThreeLabel.innerHTML = MCQQuestionOne["answers"][2]["text"];
        optionFourLabel.innerHTML = MCQQuestionOne["answers"][3]["text"];
    }

    if (questionSequence[questionIndex] == "TF") {
        dropdown.style.visibility = "hidden";
        MCQOptions.style.visibility = "hidden";
        fillInTheBlank.style.visibility = "hidden";
        TFOptions.style.visibility = "visible";
        questionText.innerHTML = TFQuestion["question"];
    }

    if (questionSequence[questionIndex] == "DROP") {
        TFOptions.style.visibility = "hidden";
        MCQOptions.style.visibility = "hidden";
        fillInTheBlank.style.visibility = "hidden";
        dropdown.style.visibility = "visible";
        questionText.innerHTML = DROPQuestion["question"];
        dropdownOptions[0].innerHTML = DROPQuestion["answers"][0]["text"];
        dropdownOptions[1].innerHTML = DROPQuestion["answers"][1]["text"];
    }

    if (questionSequence[questionIndex] == "FILL") {
        dropdown.style.visibility = "hidden";
        MCQOptions.style.visibility = "hidden";
        TFOptions.style.visibility = "hidden";
        fillInTheBlank.style.visibility = "visible";
        questionText.innerHTML = FILLQuestion["question"];

    }

    if (questionSequence[questionIndex] == "MCQ1") {
        dropdown.style.visibility = "hidden";
        TFOptions.style.visibility = "hidden";
        fillInTheBlank.style.visibility = "hidden";
        MCQOptions.style.visibility = "visible";
        questionText.innerHTML = MCQQuestionTwo["question"];
        optionOneLabel.innerHTML = MCQQuestionTwo["answers"][0]["text"];
        optionTwoLabel.innerHTML = MCQQuestionTwo["answers"][1]["text"];
        optionThreeLabel.innerHTML = MCQQuestionTwo["answers"][2]["text"];
        optionFourLabel.innerHTML = MCQQuestionTwo["answers"][3]["text"];

    }

}

function TFOptionClicked(val) {
    TFUserSelectedAnswer = val;
}

function MCQOptionsClikced(index) {
    if (currentQuestion == 0) {
        MCQUserSelectedAnswerOne = index;
    }
    if (currentQuestion == 4) {
        MCQUserSelectedAnswerTwo = index;
    }
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion(currentQuestion);
    if (currentQuestion == 4) {
        var nextButton = document.getElementById("nextButton");
        nextButton.innerHTML = "Sumbit";
        nextButton.removeEventListener("click", nextQuestion);
        nextButton.addEventListener("click", function () { submit(); });
        nextButton.style.marginLeft = "93vw";
    }
    optionOne.checked = false;
    optionTwo.checked = false;
    optionThree.checked = false;
    optionFour.checked = false;
}




function dropdownOptionClicked(index) {
    dropdownMainText.innerHTML = dropdownOptions[index].innerHTML;
    dropdownUserSelectedAnswer = index;
}

function submit() {
    sessionStorage.setItem("timeTaken", timerText.innerHTML);


    if (localStorage.getItem("bestTime") == null){
        localStorage.setItem("bestTime", timerText.innerHTML);
        localStorage.setItem("bestTimeInSeconds", totalSecondsPassed);
    } 
    else if (totalSecondsPassed < localStorage.getItem("bestTimeInSeconds")){
        localStorage.setItem("bestTime", timerText.innerHTML);
        localStorage.setItem("bestTimeInSeconds", totalSecondsPassed);
        sessionStorage.setItem("newBestTime", true);
    }

    sessionStorage.setItem("MCQQuestionOne", MCQQuestionOneRandInt);
    sessionStorage.setItem("MCQQuestionTwo", MCQQuestionTwoRandInt);
    sessionStorage.setItem("TFQuestion", TFQuestionRandInt);
    sessionStorage.setItem("DROPQuestion", DROPQuestionRandInt);
    sessionStorage.setItem("FILLQuestion", FILLQuestionRandInt);

    sessionStorage.setItem("MCQUserSelectedAnswerOne", MCQUserSelectedAnswerOne);
    sessionStorage.setItem("MCQUserSelectedAnswerTwo", MCQUserSelectedAnswerTwo);
    sessionStorage.setItem("TFUserSelectedAnswer", TFUserSelectedAnswer);
    sessionStorage.setItem("dropdownUserSelectedAnswer", dropdownUserSelectedAnswer);
    sessionStorage.setItem("FILLUserSelectedAnswer", fillInTheBlankBLANK.value);

    window.location.href = "Thanks.html";
}

function pickRandomQuestions() {
    // MCQ
    while (true) {
        MCQQuestionOneRandInt = Math.floor((Math.random() * questionsMCQ.length));
        MCQQuestionTwoRandInt = Math.floor((Math.random() * questionsMCQ.length));
        if (MCQQuestionOneRandInt != MCQQuestionTwoRandInt) {
            break;
        }
    }
    // TF
    TFQuestionRandInt = Math.floor((Math.random() * questionsTF.length));

    // FILL
    FILLQuestionRandInt = Math.floor((Math.random() * questionsFill.length));

    // DROP
    DROPQuestionRandInt = Math.floor((Math.random() * questionsDropdown.length));

    MCQQuestionOne = questionsMCQ[MCQQuestionOneRandInt];
    MCQQuestionTwo = questionsMCQ[MCQQuestionTwoRandInt];
    TFQuestion = questionsTF[TFQuestionRandInt];
    FILLQuestion = questionsFill[FILLQuestionRandInt];
    DROPQuestion = questionsDropdown[DROPQuestionRandInt];
}