var freshBtn = document.createElement("button");
var freshBtnText = document.createTextNode("Press me baby");

freshBtn.appendChild(freshBtnText);

var docBody = document.body;

docBody.append(freshBtn);

freshBtn.addEventListener("click", function () {
  console.log("I LOVE YOU!");
});

var newlyMadeBtn = document.createElement("button");
var newlyMadeBtnText = document.createTextNode("PRESS ME PLZ");

newlyMadeBtn.appendChild(newlyMadeBtnText);

newlyMadeBtn.addEventListener("mouseenter", function () {
  console.log("YOU ARE IN THE TERRITORY OF THE NEWLY MADE BUTTON");
});

docBody.append(newlyMadeBtn);

//turn document.body into a var
