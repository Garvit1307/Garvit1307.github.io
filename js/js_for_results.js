const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");
var scoreText = document.getElementById("scoreText");
var timeText = document.getElementById("timeText");
var bestTimeText = document.getElementById("bestTimeText");
var bestScoreText = document.getElementById("bestScoreText");
var newBestTimeText = document.getElementById("newBestTimeText");

var questionOneNumberArea = document.getElementById("questionOneNumberArea");
var questionOneQueArea = document.getElementById("questionOneQueArea");
var questionOneYourAnswerArea = document.getElementById("questionOneYourAnswerArea");
var questionOneCorrectAnswerArea = document.getElementById("questionOneCorrectAnswerArea");

var questionTwoNumberArea = document.getElementById("questionTwoNumberArea");
var questionTwoQueArea = document.getElementById("questionTwoQueArea");
var questionTwoYourAnswerArea = document.getElementById("questionTwoYourAnswerArea");
var questionTwoCorrectAnswerArea = document.getElementById("questionTwoCorrectAnswerArea");

var questionThreeNumberArea = document.getElementById("questionThreeNumberArea");
var questionThreeQueArea = document.getElementById("questionThreeQueArea");
var questionThreeYourAnswerArea = document.getElementById("questionThreeYourAnswerArea");
var questionThreeCorrectAnswerArea = document.getElementById("questionThreeCorrectAnswerArea");

var questionFourNumberArea = document.getElementById("questionFourNumberArea");
var questionFourQueArea = document.getElementById("questionFourQueArea");
var questionFourYourAnswerArea = document.getElementById("questionFourYourAnswerArea");
var questionFourCorrectAnswerArea = document.getElementById("questionFourCorrectAnswerArea");

var questionFiveNumberArea = document.getElementById("questionFiveNumberArea");
var questionFiveQueArea = document.getElementById("questionFiveQueArea");
var questionFiveYourAnswerArea = document.getElementById("questionFiveYourAnswerArea");
var questionFiveCorrectAnswerArea = document.getElementById("questionFiveCorrectAnswerArea");


var MCQQuestionOne;
var MCQQuestionTwo;
var TFQuestion;
var DROPQuestion;
var FILLQuestion;

var MCQAnswerOne;
var MCQAnswerTwo;
var TFAnswer;
var DROPAnswer;
var FILLAnswer;

var MCQAnswerOneIsCorrect = false;
var MCQAnswerTwoIsCorrect = false;;
var TFAnswerIsCorrect = false;;
var DROPAnswerIsCorrect = false;;
var FILLAnswerIsCorrect = false;;

var correctQuestions = 0;

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.onload = Start();

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })
})


function Start() {
    MCQQuestionOne = questionsMCQ[sessionStorage.getItem("MCQQuestionOne")];
    MCQQuestionTwo = questionsMCQ[sessionStorage.getItem("MCQQuestionTwo")];
    TFQuestion = questionsTF[sessionStorage.getItem("TFQuestion")];
    DROPQuestion = questionsDropdown[sessionStorage.getItem("DROPQuestion")];
    FILLQuestion = questionsFill[sessionStorage.getItem("FILLQuestion")];

    MCQAnswerOne = sessionStorage.getItem("MCQUserSelectedAnswerOne");
    MCQAnswerTwo = sessionStorage.getItem("MCQUserSelectedAnswerTwo");
    TFAnswer = sessionStorage.getItem("TFUserSelectedAnswer");
    DROPAnswer = sessionStorage.getItem("dropdownUserSelectedAnswer");
    FILLAnswer = sessionStorage.getItem("FILLUserSelectedAnswer");

    if (MCQAnswerOne != -1) {
        if (MCQQuestionOne['answers'][MCQAnswerOne]['correct']) {
            correctQuestions++;
            MCQAnswerOneIsCorrect = true;
        }
    }
    if (MCQAnswerTwo != -1) {
        if (MCQQuestionTwo['answers'][MCQAnswerTwo]['correct']) {
            MCQAnswerTwoIsCorrect = true;
            correctQuestions++;
        }
    }
    if (TFAnswer != -1) {
        if (TFQuestion['answers'][TFAnswer]['correct']) {
            TFAnswerIsCorrect = true;
            correctQuestions++;
        }
    }
    if (DROPAnswer != -1) {
        if (DROPQuestion['answers'][DROPAnswer]['correct']) {
            DROPAnswerIsCorrect = true;
            correctQuestions++;
        }
    }

    if (FILLAnswer != -1) {
        if (FILLQuestion["answers"][0]["text"].toLowerCase().replace(" ", "") == FILLAnswer.toLowerCase().replace(" ", "")) {
            FILLAnswerIsCorrect = true;
            correctQuestions++;
        }
    }


    if (localStorage.getItem("highestScore") == null) {
        localStorage.setItem("highestScore", correctQuestions);
    }

    else if (correctQuestions > localStorage.getItem("highestScore")) {
        localStorage.setItem("highestScore", correctQuestions);
    }
    scoreText.innerHTML = "Your Score: " + correctQuestions * 20;
    timeText.innerHTML = "Time Taken: " + sessionStorage.getItem("timeTaken");
    bestTimeText.innerHTML = "Best Time: " + localStorage.getItem("bestTime");
    bestScoreText.innerHTML = "Best Score: " + localStorage.getItem("highestScore") * 20;

    if (sessionStorage.getItem("newBestTime")) {
        newBestTimeText.style.visibility = "visible";
    }
    else {
        newBestTimeText.style.visibility = "hidden";
    }

    questionOneQueArea.innerHTML = MCQQuestionOne["question"];


    if (MCQAnswerOneIsCorrect) {
        questionOneNumberArea.innerHTML += "✔️";
    }
    else {
        questionOneNumberArea.innerHTML += "❌";
    }
    questionOneQueArea.innerHTML = MCQQuestionOne["question"];
    if (MCQQuestionOne["answers"][MCQAnswerOne]) {
        questionOneYourAnswerArea.innerHTML += MCQQuestionOne["answers"][MCQAnswerOne]["text"];
    }
    else {
        questionOneYourAnswerArea.innerHTML += "NO ANSWER";
    }
    for (let index = 0; index < MCQQuestionOne["answers"].length; index++) {
        const element = MCQQuestionOne["answers"][index];
        if (element["correct"]) {
            questionOneCorrectAnswerArea.innerHTML += element["text"];
        }
    }


    if (TFAnswerIsCorrect) {
        questionTwoNumberArea.innerHTML += "✔️";
    }
    else {
        questionTwoNumberArea.innerHTML += "❌";
    }
    questionTwoQueArea.innerHTML = TFQuestion["question"];
    if (MCQQuestionOne["answers"][TFAnswer]) {
        questionTwoYourAnswerArea.innerHTML += TFQuestion["answers"][TFAnswer]["text"];
    }
    else {
        questionTwoYourAnswerArea.innerHTML += "NO ANSWER";
    }
    for (let index = 0; index < TFQuestion["answers"].length; index++) {
        const element = TFQuestion["answers"][index];
        if (element["correct"]) {
            questionTwoCorrectAnswerArea.innerHTML += element["text"];
        }
    }

    if (DROPAnswerIsCorrect) {
        questionThreeNumberArea.innerHTML += "✔️";
    }
    else {
        questionThreeNumberArea.innerHTML += "❌";
    }
    questionThreeQueArea.innerHTML = DROPQuestion["question"];
    if (DROPQuestion["answers"][DROPAnswer]) {
        questionThreeYourAnswerArea.innerHTML += DROPQuestion["answers"][DROPAnswer]["text"];
    }
    else {
        questionThreeYourAnswerArea.innerHTML += "NO ANSWER";
    }
    for (let index = 0; index < DROPQuestion["answers"].length; index++) {
        const element = DROPQuestion["answers"][index];
        if (element["correct"]) {
            questionThreeCorrectAnswerArea.innerHTML += element["text"];
        }
    }

    if (FILLAnswerIsCorrect) {
        questionFourNumberArea.innerHTML += "✔️";
    }
    else {
        questionFourNumberArea.innerHTML += "❌";
    }
    questionFourQueArea.innerHTML = FILLQuestion["question"];
    if (FILLAnswer != "") {
        questionFourYourAnswerArea.innerHTML += FILLAnswer;
    }
    else {
        questionFourYourAnswerArea.innerHTML += "NO ANSWER";
    }
    for (let index = 0; index < FILLQuestion["answers"].length; index++) {
        const element = FILLQuestion["answers"][index];
        if (element["correct"]) {
            questionFourCorrectAnswerArea.innerHTML += element["text"];
        }
    }

    if (MCQAnswerTwoIsCorrect) {
        questionFiveNumberArea.innerHTML += "✔️";
    }
    else {
        questionFiveNumberArea.innerHTML += "❌";
    }
    questionFiveQueArea.innerHTML = MCQQuestionTwo["question"];
    if (MCQQuestionTwo["answers"][MCQAnswerTwo]) {
        questionFiveYourAnswerArea.innerHTML += MCQQuestionTwo["answers"][MCQAnswerTwo]["text"];
    }
    else {
        questionFiveYourAnswerArea.innerHTML += "NO ANSWER";
    }
    for (let index = 0; index < MCQQuestionTwo["answers"].length; index++) {
        const element = MCQQuestionTwo["answers"][index];
        if (element["correct"]) {
            questionFiveCorrectAnswerArea.innerHTML += element["text"];
        }
    }
}

function printContent(el) {
    var restorepage = document.body.innerHTML;
    var printcontent = document.getElementById(el).innerHTML;
    document.body.innerHTML = printcontent;
    window.print();
    document.body.innerHTML = restorepage;
    location.reload();
}

function clearHistory() {
    var x = confirm("This will clear your best time and best score as well as you current test results...\nPrinting the results is recommended before clearing...\nDo you wish to continue?");
    if (x) {
        sessionStorage.clear();
        localStorage.clear();
        window.location.href = "Home.html";
        alert("Your history was cleared!!!");
    }
}

