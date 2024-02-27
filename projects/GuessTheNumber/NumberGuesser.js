let randomNumber = parseInt(Math.random()*100 + 1)
//console.log(randomNumber);

// captured submit button
let button = document.querySelector("#subt")
let userInput = document.querySelector("#guessField")
let guessCollection = document.querySelector(".guesses")
let remainingAttempt = document.querySelector(".lastResult")
let banner = document.querySelector(".lowOrHi")


    let  previousGuesses = []  // initialize previous guesses here
    const p =  document.createElement("p")

    //create a start new game button
    let newGameBtn = document.createElement("button")
    
        

button.addEventListener( 'click', function(event){
    event.preventDefault()
   console.log(randomNumber);
    const guess = parseInt(userInput.value)
    //console.log(`This is user input ${guess}`);
    userInput.value = ""

    ValidResponse(guess)
} )


// Funtion to validate the response
function ValidResponse(guess){

    if (guess < 1 || guess > 100 || isNaN(guess)) {
        alert("please enter valid number")
    } else {
        // when user enters valid responses update all counters 
       // console.log(`This is a valid response ${guess}`);  
        previousGuesses.push(guess)
        console.log(previousGuesses);
        guessCollection.innerHTML = `${previousGuesses}`
        remainingAttempt.innerHTML = `${10 - previousGuesses.length}`
        MatchResponse(guess)  
        
    }

}

// Function to match User response with Random Number
function MatchResponse(guess){
    // console.log(`Got value form ValidResponse ${guess}`); Checking if we are getting value from ValidResponse

    if(guess === randomNumber){
        // If user guessed the right number then what should happen: Game should end, Option to start new game, Input field should be cleared
        console.log(`Yay!! you guessed the right number. The number was ${guess}`);
        endGame()

    }
    

}


// Function to end the Game
function endGame(){
 userInput.setAttribute('disabled', "")
 userInput.value = ""
 button.remove()
 p.innerHTML = `Yay!! you guessed the right number`
 p.style.backgroundColor = 'Green'
 newGameBtn.classList = "guessSubmit"
 newGameBtn.innerHTML = "New Game"
 
 banner.append(p , newGameBtn)



}



