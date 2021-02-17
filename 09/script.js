var button = document.createElement("button");
var btnTxtNode = document.createTextNode("PRESS ME");
button.appendChild(btnTxtNode);

button.addEventListener("click", function () {
  console.log("YOU CLICKED ME!!!");
});

var btn2 = document.createElement("button");
var btntxt2 = document.createTextNode("BUTTON 2 BABY!!!!");

btn2.appendChild(btntxt2);

btn2.addEventListener("mouseover", function () {
  console.log("YOU HOVERED OVER MOI");
});

document.body.append(button);
document.body.append(btn2);
