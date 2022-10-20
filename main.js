// variables
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const buttonTry = document.querySelector("#buttonTry")
const buttonPlayAgain = document.querySelector("#buttonPlayAgain")
const body = document.querySelector("body")
const toggle = document.getElementById("toggle-theme")
let randomNumber = Math.round(Math.random() * 10)
let attempts = 1

// events
buttonTry.addEventListener("click", handleTryClick)
buttonPlayAgain.addEventListener("click", handleResetClick)
document.addEventListener('keydown', function(e){
    if (e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }
})

// Functions
function handleTryClick(event){ // callback function
    event.preventDefault(); // não faça o padrão, no caso era um button de um form, e o padrão desse button é de ao clicar enviar o formulario para algum lugar, e nesse caso, não queriamos isso. por isso o .preventDefault !!

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) === randomNumber) {
        screen1.classList.toggle("hide")
        screen2.classList.toggle("hide")

        document.querySelector(".screen2 h2").innerText = `Yay! you got it in ${attempts} tries`
    }
    inputNumber.value = ""
    attempts++;
}

function handleResetClick(){
    toggleScreenReset()
    attempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreenReset(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

// extra: dark theme
toggle.onclick = function(){
    toggle.classList.toggle("active")
    body.classList.toggle("active")
}