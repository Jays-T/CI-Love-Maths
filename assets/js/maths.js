


function runGame() {
      
}

function checkAnswer() {

}


function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayQuestion(selected, operandOne, operandTwo) {
    gameType = selected;

    operandOneNum = Math.floor(Math.random() * 100);
    operandTwoNum = Math.floor(Math.random() * 100);

    operandOne.innerText = operandOneNum;
    operandTwo.innerText = operandTwoNum;  
}