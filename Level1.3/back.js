

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    const display = document.getElementById('display');
    let currentInput = '0';
    let operator = null;
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '0';
                operator = null;
                previousInput = '';
            } else if (value === '=') {
                if (operator && previousInput !== '') {
                    currentInput = eval(previousInput + operator + currentInput).toString();
                    operator = null;
                }
            } else if (this.classList.contains('operator')) {
                if (operator && previousInput !== '') {
                    currentInput = eval(previousInput + operator + currentInput).toString();
                }
                operator = value;
                previousInput = currentInput;
                currentInput = '0';
            } else {
                if (currentInput === '0') {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
            }

            display.innerText = currentInput;
        });
    });
});
