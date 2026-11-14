let inp = document.getElementById("pin_display");
let display = document.getElementById("message");
let pin = 1234;

function num(val) {
  if (inp.value.length < 4) {
    inp.value += val;
  }
}
//CLEAR PIN
function clearpin() {
  inp.value = "";
  display.innerHTML = "please enter your 4digit  pin";
  display.style.color = "black";
}
//CHECK PIN
function checkpin() {
  if (inp.value == pin) {
    window.open("../second-page/index.html", "_blank");
  } else if (inp.value == "") {
    display.innerHTML = "Enter-pin";
  } else {
    display.innerHTML = "Incorrect PIN.Please try again";
    display.style.color = "red";
  }
}
