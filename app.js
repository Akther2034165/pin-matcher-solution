/* HANDLE GENERATE BUTTON AND DISPLAY */
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}
function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}

/* HANDLE NUMPAD USING BUBBLE DELEGATION */
document.getElementById("keypad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const calcInput = document.getElementById("types-numbers");
  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
    }
  } else {
    const previousNumber = calcInput.value;
    const newCalc = previousNumber + number;
    calcInput.value = newCalc;
  }
});

/* SUBMIT BUTTON */
function varifyPin() {
  const pin = document.getElementById("display-pin").value;
  const typesNumber = document.getElementById("types-numbers").value;
  const successMessage = document.getElementById("notify-success");
  const failError = document.getElementById("notify-fail");
  if (pin == typesNumber) {
    successMessage.style.display = "block";
    failError.style.display = "none";
  } else {
    successMessage.style.display = "none";
    failError.style.display = "block";
  }
}
