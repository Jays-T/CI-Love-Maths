const submitButton = document.querySelector('.submit-answer');
const submitText = document.querySelector('.submit-text');
const checkIcon = document.querySelector('.fa-check-circle');
const operandIcons = document.querySelectorAll('.operand');
const buttons = document.querySelectorAll('.btn');
const answerBox = document.getElementById('answer-box');
const questionSetContainer = document.querySelector('.question-set-container');
const operator = document.getElementById('operator');

const baseFontColor = `hsla(206, 23%, 18%, 0.839)`;
const additionActiveColor = `hsla(263, 91%, 35%, 0.839)`;
const subtractionActiveColor = `hsla(327, 89%, 28%, 0.839)`;
const multiplicationActiveColor = `hsla(22, 86%, 25%, 0.839)`;
const divisionActiveColor = `hsla(202, 93%, 11%, 0.839)`;

const iconShadow = `-1px -1px 2px hsla(205, 22%, 65%, 0.439),
                    1px 1px 2px hsla(206, 23%, 18%, 0.439),
                    -1px -1px 2px hsla(205, 22%, 65%, 0.439),
                    1px 1px 2px hsla(206, 23%, 18%, 0.439);`

submitButton.addEventListener('mouseover', () => {
    let appliedStyle = `
                transition: all .28s ease-in-out;
                transform: translateX(3.2em);
                color: hsla(155, 89%, 14%, 0.774);
                text-shadow: ${iconShadow};
                `;
    let buttonWidth_andRadius = `
                border-radius: .8em;
                width: 8em;
                `;
    submitButton.style = buttonWidth_andRadius;
    checkIcon.style = appliedStyle;

    for (opacity = 0; opacity < 1.1; opacity = opacity + 0.1) 
    {           
        setTimeout(() => {
            submitText.style.opacity = opacity;
        },300)                       
    }
});

submitButton.addEventListener('mouseleave', () => {
    
    // submitText.innerHTML = "";
    let appliedStyle = `
                transition: all .28s ease-in-out;
                transform: translateX(0)
                `;
    let buttonWidth_andRadius = `
                border-radius: 50%;
                width: 75px;
                `;
    submitButton.style = buttonWidth_andRadius;
    checkIcon.style = appliedStyle;
    for (opacity = 1; opacity >= 0; opacity = opacity - 1) 
    {   
        submitText.style.opacity = opacity;                         
    }
});

operandIcons.forEach(icon => icon.addEventListener('mouseover', () => {
    operand = icon.dataset.operand;

    if(operand) {

        switch(operand){
            case "/":
                icon.style.color = divisionActiveColor;
                break
            case "*":
                icon.style.color = multiplicationActiveColor;
                break
            case "+":
                icon.style.color = additionActiveColor;
                break
            case "-":
                icon.style.color = subtractionActiveColor;
                break
        }
    }
}));

operandIcons.forEach(icon => icon.addEventListener('mouseout', () => {
    icon.style.color = baseFontColor;
}));


// Display chosen Operand 

const icons = [
    {   
        operand: '+',
        icon_style: `<i class="fas fa-plus"></i>`,
        color: additionActiveColor,
    },
    {   
        operand: '-',
        icon_style: `<i class="fas fa-minus"></i>`,
        color: subtractionActiveColor,
    },
    {   
        operand: '*',
        icon_style: `<i class="fas fa-times"></i>`,
        color: multiplicationActiveColor,
    },
    {   
        operand: '/',
        icon_style: `<i class="fas fa-divide"></i>`,
        color: divisionActiveColor,
    },
]

buttons.forEach(button => button.addEventListener('click', () => {

    operator.style.opacity = 0;
    // button pressed effect
    button.classList.toggle('btn-anim');
    setTimeout(() => {
        button.classList.toggle('btn-anim')
    }, 600)
    
    // show answer box
    if (!answerBox.classList.contains('set-visible')) {
        answerBox.classList.add('set-visible');
    }

    // fade in opacity on questionSetContainer
    for (opacity = 0; opacity < 1.1; opacity = opacity + 0.1) 
    {           
        setTimeout(() => {
            questionSetContainer.style.opacity = opacity;
        },220)     
    }

    chosenOperand = button.dataset.operand;
    for (icon of icons) {
        if (chosenOperand === icon.operand) {

            for (opacity = 0; opacity < 1.1; opacity = opacity + 0.1) 
            {           
                setTimeout(() => {
                    operator.style.opacity = opacity;
                },400)
            };

            appliedIcon = icon.icon_style
            appliedStyle = `
                    text-shadow: ${iconShadow};
                    color: ${icon.color}`

            setTimeout(() => {
                operator.innerHTML = appliedIcon;
                operator.style = appliedStyle;
            }, 200)
        }
    }

}));
