//get elements
let burgerIcon = document.querySelector(".toggle")
let menu = document.querySelector(".menu")

//cover the page when the icon clicked
let coverPage = document.createElement("div")
//make it display none so it won't show until we click
coverPage.style.display = "none"

//function on click
burgerIcon.addEventListener("click", function () {
    //add classes
    burgerIcon.classList.toggle("btn")
    menu.classList.toggle("show")

    //conditions to show the cover and make the button fixed
    if (burgerIcon.classList.contains("btn")) {
        burgerIcon.style.cssText = "position:fixed; top:35px; right:20px;"
        coverPage.style.cssText = "position:fixed; top:0; left:0; background-color:rgba(1, 22, 61, 0.9); width:100%; height:100%; z-index:30;"
        document.body.appendChild(coverPage)
    }
    else {
        coverPage.style.display = "none"
        burgerIcon.style.cssText = "position:relative"
    }
})

//first drop menu
let dropMenu = document.querySelector(".drop-down")
dropMenu.addEventListener("click", function () {
    dropMenu.classList.toggle("drop-menu")
})

//deep drop menu and the ul inside it
let deepDropMenu = document.querySelector(".deep-drop-menu")
let deepDropMenuUl = document.querySelector(".deep-drop-menu ul")
// deep drop menu (li) on click will show the ul inside it
deepDropMenu.addEventListener("click", function () {
    deepDropMenuUl.classList.toggle("drop-menu-two")
})


//scroll button and header to be fixed while scrolling
let header = document.querySelector("header")
let scrollBtn = document.querySelector(".scroll-btn")

//scroll btn function
scrollBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})

window.onscroll = function () {
    //header
    if (window.scrollY >= 400) {
        header.style.cssText = "position:fixed;background-color:white;z-index: 50;box-shadow:0px 0px 30px rgb(127 137 161 / 25%);"
    }
    if (window.scrollY === 0) {
        header.style.cssText = "position:absolute;background-color:tranparent;padding:0 7px;"
    }
    //scroll btn
    if (window.scrollY >= 600) {
        scrollBtn.style.display = "block"
    }
    if (window.scrollY <= 600) {
        scrollBtn.style.display = "none"
    }
}

//FAQ
let faqQuestions = document.querySelectorAll(".faq-ul .question")
let answers = document.querySelectorAll(".question .answer")

//for each question we will do a function on click
faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {

        let answer = question.querySelector(".answer")
        let faqArrowIcon = question.querySelector(".faq-ul .fa-solid");

        //make sure to remove all other classes
        answers.forEach(function (ans) {
            if (ans !== answer) {
                let arrows = document.querySelectorAll(".faq-ul .fa-solid")
                arrows.forEach(function(arrow){
                    arrow.classList.remove("rotate-arrow")
                })
                ans.classList.remove("show-text")
            }
        })

        faqArrowIcon.classList.add("rotate-arrow")
        answer.classList.toggle("show-text")
    })
})

//feautures taps
let btns = document.querySelectorAll(".holder .info span")
let infoTexts = document.querySelectorAll(".holder .info-text")

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        //get the btn data-id
        let targetId = e.target.dataset.id
        // console.log(targetId)

        infoTexts.forEach(function(e){
            e.classList.remove("show-text")
        })

        //get text id
        infoTexts.forEach(function(text){
            let textId = text.id
            // console.log(textId)
            //if btn data-id === text id
            if(targetId === textId){
                text.classList.add("show-text")
            }
        })


        //remove class acrive from all other btns
        btns.forEach(function (btn) {
            btn.classList.remove("active")
        })
        //add class active to the btn
        btn.classList.toggle("active")
    })
})
