


function runGame(selected) {
    gameType = selected;

    operandOneNum = Math.floor(Math.random() * 100);
    operandTwoNum = Math.floor(Math.random() * 100);

    operandOne = document.getElementById('operand1');
    operandTwo = document.getElementById('operand2');

    operandOne.innerText = operandOneNum;
    operandTwo.innerText = operandTwoNum;    
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayQuestion() {

}