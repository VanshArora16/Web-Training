let display = document.getElementById("display");
let firstValue = '';
let operator = '';
let secondValue = '';

function appendNumber(number) {
    // Check if an operator has been set; if yes, the second value
    if (operator) {
        secondValue += number;
        display.value = `${firstValue} ${operator} ${secondValue}`;
    } else {
        // Otherwise first value
        firstValue += number;
        display.value = firstValue;
    }
}

function setOperation(op) {
    // Set the operator only if there is a first value
    if (firstValue) {
        operator = op;
        display.value = `${firstValue} ${operator}`;
    }
}

function calculateResult() {
    // Convert values to numbers and perform the operation
    let result;
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "Error"; // Avoid division by zero
            break;
        case '%':
            result = num2 !== 0 ? num1 % num2 : "Error"; // Avoid division by zero
            break;
        default:
            result = "Error";
            break;
    }

    display.value = result;
    firstValue = result.toString();
    operator = '';
    secondValue = '';
}

function clearDisplay() {
    display.value = '';
    firstValue = '';
    operator = '';
    secondValue = '';
}
