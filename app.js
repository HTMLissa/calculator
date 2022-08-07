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

// Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.
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

// Make the calculator work!
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
