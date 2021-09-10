const submitButton = document.querySelector('.submit-answer');
const submitText = document.querySelector('.submit-text');
const checkIcon = document.querySelector('.fa-check-circle');

submitButton.addEventListener('mouseover', () => {
    let appliedStyle = `
                transition: all .28s ease-in-out;
                transform: translateX(3.2em)
                `;
    let buttonWidth = `
                border-radius: .8em;
                width: 8em;
                `;
    submitButton.style = buttonWidth;
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
    let buttonWidth = `
                border-radius: 50%;
                width: 75px;
                `;
    submitButton.style = buttonWidth;
    checkIcon.style = appliedStyle;
    for (opacity = 1; opacity >= 0; opacity = opacity - 1) 
    {   
        submitText.style.opacity = opacity;                         
    }
});