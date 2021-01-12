var input1 = document.createElement("input");
var input1Txt = document.createTextNode("btn1");
input1.appendChild(input1Txt);

function reusable(event){
  console.log(event);
}

input1.addEventListener("keypress", reusable);

var input2 = document.createElement("input");
var input2Txt = document.createTextNode("btn2");
input2.appendChild(input2Txt);

input2.addEventListener("keypress", reusable);

var input3 = document.createElement("input");
var input3Txt = document.createTextNode("btn3");
input3.appendChild(input3Txt);

input3.addEventListener("keypress", reusable);

var docBod = document.body;

docBod.append(input1);
docBod.append(input2);
docBod.append(input3);
