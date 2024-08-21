let resultInput = document.getElementById("result");
let currentInput = "";
let currentOperator = null;

function appendNumber(number) {
    currentInput += number;
    updateResult();
}

function appendDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateResult();
    }
}

function appendOperator(operator) {
    if (currentInput !== "") {
        calculate();
        currentOperator = operator;
    } else {
        currentOperator = operator;
    }
}

function calculate() {
    if (currentOperator !== null && currentInput !== "") {
        let previousValue = parseFloat(resultInput.value);
        let currentValue = parseFloat(currentInput);
        switch (currentOperator) {
            case '+':
                resultInput.value = previousValue + currentValue;
                break;
            case '-':
                resultInput.value = previousValue - currentValue;
                break;
            case '*':
                resultInput.value = previousValue * currentValue;
                break;
            case '/':
                if (currentValue !== 0) {
                    resultInput.value = previousValue / currentValue;
                } else {
                    resultInput.value = "Error: Division by zero";
                }
                break;
        }
        currentInput = "";
        currentOperator = null;
    }
}

function clearResult() {
    currentInput = "";
    currentOperator = null;
    resultInput.value = "";
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateResult();
}

function updateResult() {
    resultInput.value = currentInput;
}