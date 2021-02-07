
const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

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

function Start(){
    // sessionStorage.setItem("MCQQuestionOne", MCQQuestionOne);
    // sessionStorage.setItem("MCQQuestionTwo", MCQQuestionTwo);
    // sessionStorage.setItem("TFQuestion", TFQuestion);
    // sessionStorage.setItem("DROPQuestion", DROPQuestion);
    // sessionStorage.setItem("FILLQuestion", FILLQuestion);

    // sessionStorage.setItem("MCQUserSelectedAnswerOne", MCQUserSelectedAnswerOne);
    // sessionStorage.setItem("MCQUserSelectedAnswerTwo", MCQUserSelectedAnswerTwo);
    // sessionStorage.setItem("TFUserSelectedAnswer", TFUserSelectedAnswer);
    // sessionStorage.setItem("dropdownUserSelectedAnswer", dropdownUserSelectedAnswer);
    // sessionStorage.setItem("MCQUserSelectedAnswerOne", FILL);

    console.log(sessionStorage.getItem("MCQQuestionOne")["question"]);
    console.log(sessionStorage.getItem("MCQQuestionTwo")["question"]);
    console.log(sessionStorage.getItem("TFQuestion")["question"]);
    console.log(sessionStorage.getItem("DROPQuestion")["question"]);
    console.log(sessionStorage.getItem("FILLQuestion")["question"]);

}