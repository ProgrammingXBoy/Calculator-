let displayValue = "0";
let currentValue = null;
let currentOperator = null;
let resetDisplayOnNextInput = false;

function updateDisplay() {
  document.getElementById("result").textContent = displayValue;
}

function clearDisplay() {
  displayValue = "0";
  currentValue = null;
  currentOperator = null;
  updateDisplay();
}

function deleteDigit() {
  if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1);
  } else {
    displayValue = "0";
  }
  updateDisplay();
}

function appendNumber(number) {
  if (resetDisplayOnNextInput) {
    displayValue = number.toString();
    resetDisplayOnNextInput = false;
  } else {
    displayValue += number.toString();
  }
  updateDisplay();
}

function appendDecimal() {
  if (!displayValue.includes(".")) {
    displayValue += ".";
  }
  updateDisplay();
}

function appendOperator(operator) {
  if (currentOperator !== null) {
    calculate();
  }
  currentValue = parseFloat(displayValue);
  currentOperator = operator;
  resetDisplayOnNextInput = true;
}

function calculate() {
  if (currentOperator !== null) {
    const newValue = parseFloat(displayValue);
    switch (currentOperator) {
      case "+":
        displayValue = (currentValue + newValue).toString();
        break;
      case "-":
        displayValue = (currentValue - newValue).toString();
        break;
      case "*":
        displayValue = (currentValue * newValue).toString();
        break;
      case "/":
        displayValue = (currentValue / newValue).toString();
        break;
      default:
        break;
    }
    currentValue = null;
    currentOperator = null;
    resetDisplayOnNextInput = true;
    updateDisplay();
  }
}
 
updateDisplay();
