//Declare variables
var pTag = document.getElementById("helloPTag");
var pos = 0;
var loopLimit = 0;

//Element
pTag.innerHTML = "#noobgang#noobgang";
pTag.style.color = "#000";
pTag.style.border = "1px solid black";
pTag.style.backgroundColor = "Yellow";
pTag.style.fontSize = "45px";

var contentHolder = document.getElementById("contentHolder");
contentHolder.style.position = "relative";

//Button
var btn = document.createElement("button");
var txtNode = document.createTextNode("CLICK ME");
btn.appendChild(txtNode);
document.body.append(btn);

//Functionality
function moveElementRight(timer) {}

//show them how to clear the interval..
btn.addEventListener("click", function () {
  var timer = setInterval(function () {
    if (loopLimit != 7) {
      pos += 10;
      contentHolder.style.left = pos + "px";
      loopLimit++;
    } else {
      clearInterval(timer);
    }
  }, 500);
});
