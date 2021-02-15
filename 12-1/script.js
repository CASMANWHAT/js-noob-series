var docBody = document.body;

var ulElement = document.getElementById("ulElement");

var liElement = document.createElement("LI");
var liTxtNode = document.createTextNode("I AM NOOB");

liElement.appendChild(liTxtNode);

ulElement.appendChild(liElement);

var newBtn = document.createElement("button");
var newBtnTxt = document.createTextNode("make a li dynamically");

newBtn.appendChild(newBtnTxt);

function liCreation(){
  let x = document.createElement("li");
  let textNode = document.createTextNode("dynamically created");
  x.appendChild(textNode);
  ulElement.appendChild(x);
}

newBtn.addEventListener("click", liCreation);

docBody.append(ulElement);
docBody.append(newBtn);
