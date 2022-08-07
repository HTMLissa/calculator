// Calculator functions

// add
let add = function (x, y) {
  return x + y;
};

// subtract
let subtract = function (x, y) {
  return x - y;
};

// multiply
let multiply = function (x, y) {
  return x * y;
};

// divide
let divide = function (x, y) {
  return x / y;
};

let value1, value2, chosenOperator;
let result = 0;

// Create a new function "operate" that takes an operator and 2 numbers and then calls one of the above functions on the numbers

function operate(operator, num1, num2) {
  let result = operator(num1, num2);
  return result;
}

// Create a functions that populate the display when you click the number buttons

let numberButtons = document.querySelectorAll(".numeric");
let resultDisplay = document.querySelector(".result");

numberButtons.forEach((num) => {
  num.addEventListener("click", function () {
    if (chosenOperator) {
      resultDisplay.textContent = "";
    }
    resultDisplay.textContent += num.getAttribute("data-value");
    value1 = parseInt(resultDisplay.textContent);
    if (chosenOperator == "add") {
      result = operate(add, result, value1);
    } else if (chosenOperator == "subtract") {
      result = operate(subtract, result, value1);
    } else if (chosenOperator == "multiply") {
      result = operate(multiply, result, value1);
    } else if (chosenOperator == "divide") {
      result = operate(divide, result, value1);
    } else {
      result = value1;
    }
  });
});

// Add functionality to the operator buttons
let operatorButtons = document.querySelectorAll(".operator");
let equalButton = document.querySelector(".equal");

operatorButtons.forEach((operator) => {
  operator.addEventListener("click", function () {
    if (chosenOperator) {
      resultDisplay.textContent = result;
    } else {
      resultDisplay.textContent = "";
    }
    chosenOperator = operator.getAttribute("data-value");
  });
});

equalButton.addEventListener("click", function () {
  resultDisplay.textContent = result;
});

// Add functionality to clear calculator display

let clearButton = document.querySelector(".clear-Btn");

clearButton.addEventListener("click", function () {
  result = 0;
  chosenOperator = undefined;
  resultDisplay.textContent = "";
});
