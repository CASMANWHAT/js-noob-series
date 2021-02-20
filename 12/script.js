var ulElement = document.getElementById("ulElement");

var liElement = document.createElement("li");
var liElementTxtNode = document.createTextNode("IM A NOOOOOOOB");
liElement.appendChild(liElementTxtNode);

ulElement.appendChild(liElement);

var btn = document.createElement("button");
var btnTxtNode = document.createTextNode("PRESS ME");

btn.appendChild(btnTxtNode);

function liCreation() {
  let li = document.createElement("li");
  let txtNode = document.createTextNode("dynamically created LI ITEM");
  li.appendChild(txtNode);
  ulElement.appendChild(li);
}

btn.addEventListener("click", liCreation);

document.body.append(btn);
