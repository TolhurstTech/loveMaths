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
                checkAnswer();
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        })

    }

    runGame("addition");
})

/**
 * The main game "loop", called when the script is first loaded 
 * and after the user's answer had been processed
 */
function runGame(gameType) {

    
    // Create two random numbers between 1 and 25 for our operands
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;
    
    if (gameType === 'addition'){
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Checks the answer against the first element in 
 * the returned calculatedCorrectAnswer array
 */

function checkAnswer() {

    // Get the users guess from the DOM
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    // Calculate the correct answer by calling the function we created and store it in the variable
    let calculatedAnswer = calculateCorrectAnswer();
    // Check if they match
    let isCorrect = userAnswer === calculatedAnswer[0];

    // Decide what happens if correct or incorrect
    if (isCorrect) {
        alert('Hey! You got it right! :D');
        incrementScore();
    } else {
        alert(`Awww... you answerd ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    // Run the game again with a new question of the current game type
    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {
    // Get all the components for the calculation from the DOM
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    // Check the operator to decide what calculation needs doing
    if (operator === '+') {
        return [operand1 + operand2, 'addition'];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplement oeprator ${operator}. Aborting!`;
    }
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
    
}

/**
 * Gets the current tally of wrong answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

/**
 * Takes the two random numbers created in the game creation method and
 * passes them below if the game is an addition game and displays them
 * in the relevant HTML
 * @param {*} operand1 
 * @param {*} operand2 
 */
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractionQuestion() {
    
}

function displayMultiplyQuestion() {
    
}