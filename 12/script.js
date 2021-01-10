var randomInput = document.createElement("input");

function reusableFn(e) {
  console.log(e);
}

randomInput.addEventListener("focus", reusableFn);

randomInput.addEventListener("blur", reusableFn);

randomInput.addEventListener("keypress", reusableFn);

document.body.appendChild(randomInput);
