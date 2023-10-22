// Wait for the DOM to finish loading the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    // Get all button elements and store them in buttons[]
    let buttons = document.getElementsByTagName('button');
    // Iterate over the buttons array and store each button element in button for each iteration
    for (let button of buttons){
        // Add event listeners to each button that perform a function when clicked
        // That function checks the data-type of each and executes some code based on which button is clicked
        button.addEventListener('click', function() {
            if(this.getAttribute('data-type') === 'submit'){
                alert('You clicked Submit!');
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You clicked ${gameType}`);
            }
        })

    }
})

/**
 * The main game "loop", called when the script is first loaded 
 * and after the user's answer had been processed
 */
function runGame() {

    // Create two random numbers between 1 and 25 for our operands
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;
}

function checkAnswer() {
    
}

function calculateCorrectAnswer() {
    
}

function incrementScore() {
    
}

function incrementWrongAnswer() {
    
}

function displayAdditionQuestion() {
    
}

function displaySubtractionQuestion() {
    
}

function displayMultiplyQuestion() {
    
}