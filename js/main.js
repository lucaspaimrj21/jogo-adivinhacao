// Variáveis

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")



generateRandomNumber()
//console.log(generateRandomNumber())

let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter') {
        handleResetClick()
    }
})

// Funções 
function generateRandomNumber() {
    return randomNumber = Math.round(Math.random() * 10)
}

function handleTryClick(e) {
    e.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
       toggleScreen()
       

       screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`

      
    }

    inputNumber.value = ""
    xAttempts++

}

function handleResetClick() {
   toggleScreen()

    xAttempts = 1

    generateRandomNumber()
    // console.log(generateRandomNumber())

}

function toggleScreen() {
    screen2.classList.toggle("hide")
    screen1.classList.toggle("hide")

}

