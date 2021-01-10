var btnElement = document.createElement("button");
var btnElementTxtNode = document.createTextNode("PRESS ME");

btnElement.appendChild(btnElementTxtNode);

btnElement.addEventListener("click", function () {
  console.log("Hello you clicked me!");
});

var newBtn = document.createElement("button");
var newBtnTxtNode = document.createTextNode("NEW BUTTON PRESS IT");
newBtn.appendChild(newBtnTxtNode);

newBtn.addEventListener("mouseenter", function () {
  alert("U HOVERED OVER ME!");
});

var docBody = document.body;

docBody.append(btnElement);
docBody.append(newBtn);
