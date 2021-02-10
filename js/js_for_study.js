
const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");
var cardContainerMCQ = document.getElementById("cardContainerMCQ");
var cardContainerTF = document.getElementById("cardContainerTF");
var cardContainerDrop = document.getElementById("cardContainerDrop");
var cardContainerFILL = document.getElementById("cardContainerFILL");


let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

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

window.onload = Start;


var cardTemplate = "<div class='card'> <img class='card__image' src='../img/{{COLOR}}.png' alt='yellow'> <p class='card_text'>{{QUESTION}}</p> <div class='card__content'> <p>Answer: {{ANSWER}}</p> </div> <div class='card__info'> <div> </div> <div> <a href='' class='card__link'>.</a> </div> </div> </div>";

function Start() {

    // MCQ
    for (let index = 0; index < questionsMCQ.length; index++) {
        const element = questionsMCQ[index];
        var card = cardTemplate;
        card = card.replace("{{COLOR}}", "yellow");
        card = card.replace("{{QUESTION}}", element["question"]);
        for (let index2 = 0; index2 < element["answers"].length; index2++) {
            const element2 = element["answers"][index2];
            if (element2["correct"]) {
                card = card.replace("{{ANSWER}}", element2["text"]);
            }
        }
        cardContainerMCQ.innerHTML += card;
    }

    for (let index = 0; index < questionsTF.length; index++) {
        const element = questionsTF[index];
        var card = cardTemplate;
        card = card.replace("{{COLOR}}", "blue");
        card = card.replace("{{QUESTION}}", element["question"]);
        for (let index2 = 0; index2 < element["answers"].length; index2++) {
            const element2 = element["answers"][index2];
            if (element2["correct"]) {
                card = card.replace("{{ANSWER}}", element2["text"]);
            }
        }
        cardContainerTF.innerHTML += card;
    }

    for (let index = 0; index < questionsDropdown.length; index++) {
        const element = questionsDropdown[index];
        var card = cardTemplate;
        card = card.replace("{{COLOR}}", "green");
        card = card.replace("{{QUESTION}}", element["question"]);
        for (let index2 = 0; index2 < element["answers"].length; index2++) {
            const element2 = element["answers"][index2];
            if (element2["correct"]) {
                card = card.replace("{{ANSWER}}", element2["text"]);
            }
        }
        cardContainerDrop.innerHTML += card;
    }

    for (let index = 0; index < questionsFill.length; index++) {
        const element = questionsFill[index];
        var card = cardTemplate;
        card = card.replace("{{COLOR}}", "red");
        card = card.replace("{{QUESTION}}", element["question"]);
        for (let index2 = 0; index2 < element["answers"].length; index2++) {
            const element2 = element["answers"][index2];
            if (element2["correct"]) {
                card = card.replace("{{ANSWER}}", element2["text"]);
            }
        }
        cardContainerFILL.innerHTML += card;
    }

}