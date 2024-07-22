const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let displayValue = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        
        if (buttonText === 'AC') {
            displayValue = '';
        } else if (buttonText === 'DEL') {
            displayValue = displayValue.slice(0, -1);
        } else if (buttonText === '=') {
            try {
                displayValue = eval(displayValue).toString();
            } catch {
                displayValue = 'Error';
            }
        } else if (buttonText === '%') {
            displayValue = (parseFloat(displayValue) / 100).toString();
        } else {
            displayValue += buttonText;
        }
        
        display.value = displayValue;
    });
});