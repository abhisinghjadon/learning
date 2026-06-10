const display = document.getElementById("display");
function clearDisplay() {
  display.value = 0;
  currentValueOp1 = "";
  currentValueOp2 = "";
  last = "";
}
let op1 = true;
let currentValueOp1 = "";
let currentValueOp2 = "";
let operator = "";
function pressNum(params) {
  if (op1) {
    currentValueOp1 += params;
    display.value = currentValueOp1;
  } else {
    currentValueOp2 += params;
    display.value = currentValueOp2;
  }
}

function pressOperator(params) {
  switch (params) {
    case "+":
      op1 = false;
      operator = params;
      display.value = 0;
      break;
    case "-":
      op1 = false;
      operator = params;
      display.value = 0;
      break;
    case "*":
      op1 = false;
      operator = params;
      display.value = 0;
      break;
    case "/":
      op1 = false;
      operator = params;
      display.value = 0;
      break;
    default:
      break;
  }
}

function calculate() {
  let num1 = Number(currentValueOp1);
  let num2 = Number(currentValueOp2);
  let result = 0;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      return;
  }

  display.value = result;

  currentValueOp1 = String(result);
  currentValueOp2 = "";
  operator = "";
  op1 = true;
}
