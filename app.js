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
