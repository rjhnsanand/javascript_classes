let randomNumber =   parseInt(Math.random()*100+1);

const submit =   document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []

let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener( 'click', function(event){
        event.preventDefault()
        const guess = parseInt(userInput.value)

        ValidateGuess(guess)
    } )
}



function ValidateGuess(guess){
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }else if (guess < 1){
        alert('Please enter valid number')
    }else if (guess > 100){
        alert('Please enter valid number')
    }else {
        prevGuess.push(guess)

        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over, Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            CheckGuess(guess)
        }
    }
}

function CheckGuess(guess){

if (guess === randomNumber) {
    displayMessage("You guessed the right number, You Won")
    endGame()
}else if ( guess < randomNumber ){
    displayMessage('Number is low')
}else if ( guess > randomNumber ){
    displayMessage('Nmber is high')
}

}


function displayMessage(message){
    lowOrHi.innerHTML = `${message}`
}

function displayGuess(){
    userInput.value = ""
    guessSlot.innerHTML += `${guess}`
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}

function newGame(){

    const newGameBtn = document.querySelector("#newGame")
    newGameBtn.addEventListener( 'click' , function(event){

        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `{11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true

    } )

}

function endGame(){
        userInput.value = ""
        userInput.setAttribute('disabled', '')
        p.classList.add('button')
        p.innerHTML = `<h2 id = "newGame"> Start new Game </h2>`
        startOver.appendChild(p)

        playGame = false
        newGame()
}
