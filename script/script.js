const display = document.querySelector(".result");
const buttons = document.querySelectorAll(".digit");
const equals = document.querySelector(".equals");
const allClear = document.querySelector(".C");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    display.value += buttons[i].innerHTML;
  });
}
equals.addEventListener("click", function () {
  let res = display.value;
  if (res) {
    display.value = eval(res);
  }
});

allClear.addEventListener("click", function () {
  display.value = "";
});
