const outputVal = document.getElementById('outputVal');

let previousInput = '';
let currentInput = '';
let operator = '';

function calculate(firstNum, secondNum, operator) { 
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    let result;

    if (operator == '+') {
        result = firstNum + secondNum;
    }
    else if (operator == '-') {
        result = firstNum - secondNum;
    }
    else if (operator == '*') {
        result = firstNum * secondNum;
    }
    else if (operator == '/') {
        result = firstNum / secondNum;
    } else {
        return;
    }
    return result;
}

document.querySelectorAll('.numBtn').forEach(btn => {
    btn.addEventListener('click', () =>{
        const value = btn.dataset.value;
        currentInput += value;
        outputVal.textContent = currentInput;
    });
});

document.querySelectorAll('.operatorBtn').forEach(btn => {
    btn.addEventListener('click', () =>{
        const op = btn.dataset.value;

        if (op === 'C') {
            previousInput = '';
            currentInput = '';
            outputVal.textContent = '0';
            return;
        }

        if (op === '='){
            if (previousInput != null && currentInput != null && op != null) {
                const result = calculate(previousInput, currentInput, operator);

                outputVal.textContent = result;
                previousInput = result;
                currentInput = "";
                operator = "";
            } else if(previousInput == null || currentInput == null || op == null || outputVal == null) {
                return outputVal.textContent = '0';
            }
        }
        if (currentInput === '')return;
        if (previousInput !== '' && operator !== '') {

            previousInput = calculate(previousInput, currentInput, operator);
            outputVal.textContent = previousInput;
        } else {
            previousInput = currentInput;
        }

        currentInput = '';
        operator = op;

    });
});