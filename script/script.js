let firstNum = "";
let secondNum = "";
let operator = "";
let result = false;

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operators = ["+", "-", "*", "/"];

const display = document.querySelector(".result");
const buttons = document.querySelector(".buttons");
const allClear = document.querySelector(".C");

allClear.addEventListener("click", function () {
  firstNum = "";
  secondNum = "";
  operator = "";
  result = false;
  display.innerHTML = 0;
});
