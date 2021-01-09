var docBody = document.body;

var newInput = document.createElement("input");

function eventCallback(e) {
  console.log(e);
}

newInput.addEventListener("focus", eventCallback);

newInput.addEventListener("blur", eventCallback);

newInput.addEventListener("keydown", eventCallback);

docBody.append(newInput);
