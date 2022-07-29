// Calculator functions

// add
function add(x, y) {
  return x + y;
}

// subtract
function subtract(x, y) {
  return x - y;
}

// multiply
function multiply(x, y) {
  return x * y;
}

// divide
function divide(x, y) {
  return x / y;
}

// Create a new function "operate" that takes an operator and 2 numbers and then calls one of the above functions on the numbers

function operate(operator, num1, num2) {
  let result = operator(num1, num2);
  return result;
}

// Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.
let numberButtons = document.querySelectorAll(".numeric");
let result = document.querySelector(".result");

numberButtons.forEach((num) => {
  num.addEventListener("click", function () {
    result.textContent += num.getAttribute("data-value");
  });
});
