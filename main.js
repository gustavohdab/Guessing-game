const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const randomNumber = Math.round(Math.random() * 10)
let attempts = 1

// callback function
function handleTryClick(event){
    event.preventDefault(); // não faça o padrão, no caso era um button de um form, e o padrão desse button é de ao clicar enviar o formulario para algum lugar, e nesse caso, não queriamos isso. por isso o .preventDefault !!

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) === randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        document.querySelector(".screen2 h2").innerText = `Yay! you got it in ${attempts} tries`
    }
    inputNumber.value = ""
    attempts++;
}

// events

const buttonTry = document.querySelector("#buttonTry")
const buttonPlayAgain = document.querySelector("#buttonPlayAgain")

buttonTry.addEventListener("click", handleTryClick)
buttonPlayAgain.addEventListener("click", function() {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    attempts = 1
})

// dark theme
const body = document.querySelector("body")
const toggle = document.getElementById("toggle-theme")
toggle.onclick = function(){
    toggle.classList.toggle("active")
    body.classList.toggle("active")
}