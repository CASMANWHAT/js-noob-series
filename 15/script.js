setInterval(function () {
  console.log("Hello");
}, 1000);

//2nd ex
setInterval(moveElementRight, 10);

var pTag = document.getElementById("helloPTag");

console.log(pTag);

pTag.innerHTML = "#noobgang#noobgang";
pTag.style.color = "#000";
pTag.style.border = "1px solid black";
pTag.style.backgroundColor = "Yellow";
pTag.style.fontSize = "45px";

var contentHolder = document.getElementById("contentHolder");
contentHolder.style.position = "relative";

var pos = 0;

function moveElementRight() {
  pos += 10;

  contentHolder.style.left = pos + "px";
}
