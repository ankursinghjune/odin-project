const display = document.querySelector(".display");
const digitButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const backButton = document.querySelector(".back");
const decimalButton = document.querySelector(".dot");

let firstNum = "";
let secondNum = "";
let operator = null;
let shouldResetScreen = false;

// operations
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    // handle division error
    if (b === 0) {
        return "error";
    }
    return a / b;
}

// operate
function operate(operator, num1, num2) {
    const a = Number(num1);
    const b = Number(num2);
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return 0;
    }
}

// round off result
function roundResult(result) {
    return Math.round(result * 100000000) / 100000000;
}

// digit buttons
digitButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (shouldResetScreen) {
            display.textContent = "";
            firstNum = "";
            shouldResetScreen = false;
        }
        if (!operator) {
            firstNum += button.textContent;
            display.textContent = firstNum;
        } else {
            secondNum += button.textContent;
            display.textContent = secondNum;
        }
    });
});

// operator buttons
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // if (!firstNum) {
        //     return;
        // } else {
        //     operator = button.textContent;
        // }

        // '12 + 7 -' should display '19'
        if (operator && secondNum) {
            let result = operate(operator, firstNum, secondNum);
            result = roundResult(result);
            display.textContent = result;
            firstNum = String(result);
            secondNum = "";
        }
        operator = button.textContent;
    });
});

// equal buttons
equalButton.addEventListener("click", () => {
    if (!firstNum || !secondNum || !operator) {
        return;
    }
    let result = operate(operator, firstNum, secondNum);
    result = roundResult(result);
    display.textContent = result;
    // when a result is displayed, pressing a new digit clears result and start a new calculation instead of appending digit to existing result
    firstNum = result.toString();
    secondNum = "";
    operator = null;
    shouldResetScreen = true;
});

// clear buttons
clearButton.addEventListener("click", () => {
    firstNum = "";
    secondNum = "";
    operator = null;
    display.textContent = "0";
});

// backspace buttons
backButton.addEventListener("click", () => {
    if (!operator) {
        firstNum = firstNum.slice(0, -1);
        display.textContent = firstNum || "0";
    } else if (operator && !secondNum) {
        operator = null;
        display.textContent = firstNum || "0";
    } else {
        secondNum = secondNum.slice(0, -1);
        display.textContent = secondNum || "0";
    }
});

// decimal numbers
decimalButton.addEventListener("click", () => {
    addDecimal();
});

function addDecimal() {
    if (shouldResetScreen) {
        display.textContent = "0";
        shouldResetScreen = false;
        firstNum = "";
    }
    if (!operator) {
        if (firstNum.includes(".")) return;

        if (firstNum === "") {
            firstNum = "0.";
        } else {
            firstNum += ".";
        }
        display.textContent = firstNum;
    } else {
        if (secondNum.includes(".")) {
            return;
        }
        if (secondNum === "") {
            secondNum = "0.";
        } else {
            secondNum += ".";
        }
        display.textContent = secondNum;
    }
}
