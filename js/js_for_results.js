
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

    console.log("MCQ ONE ANSWER = " + MCQAnswerOne);
    console.log("MCQ TWO ANSWER = " + MCQAnswerTwo);
    console.log("TF ANSWER = " + TFAnswer);
    console.log("DROP ANSWER = " + DROPAnswer);

    if (MCQAnswerOne != -1) {
        if (MCQQuestionOne['answers'][MCQAnswerOne]['correct']) {
            console.log("MCQ IS CORRECT POGGG");
            correctQuestions++;
        }
        else {
            console.log("MCQ IS WRONG NOOOO")
        }
    }
    else {
        console.log("NO ANSWER FOR MCQ!!! WHY");
    }
    if (MCQAnswerTwo != -1) {
        if (MCQQuestionTwo['answers'][MCQAnswerTwo]['correct']) {
            console.log("MCQ2 IS CORRECT POGGG");
            correctQuestions++;
        }
        else {
            console.log("MCQ2 IS WRONG NOOOO")
        }
    }
    else {
        console.log("NO ANSWER FOR MCQ2!!! WHY");
    }
    if (TFAnswer != -1) {
        if (TFQuestion['answers'][TFAnswer]['correct']) {
            console.log("TF IS CORRECT POGGG");
            correctQuestions++;
        } else {
            console.log("TF IS WRONG NOOOO")
        }
    }
    else {
        console.log("NO ANSWER FOR TF!!! WHY");
    }
    if (DROPAnswer != -1) {
        if (DROPQuestion['answers'][DROPAnswer]['correct']) {
            console.log("DROP IS CORRECT POGGG");
            correctQuestions++;
        }
        else {
            console.log("DROP IS WRONG NOOOO");
        }
    }
    else {
        console.log("NO ANSWER FOR DROP!!! WHY");
    }

    scoreText.innerHTML = "Your Score: " + correctQuestions * 20;
    timeText.innerHTML = "Time Taken: " + sessionStorage.getItem("timeTaken");
    bestTimeText.innerHTML = "Best Time: " + localStorage.getItem("bestTime");
    bestScoreText.innerHTML = "Best Score: " + localStorage.getItem("highestScore");
}