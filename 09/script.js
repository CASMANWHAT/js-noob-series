var pTag = document.createElement("p");
var pTagTextNode = document.createTextNode("Hello I made an element");
pTag.appendChild(pTagTextNode);

var h1Tag = document.createElement("h1");
var h1TagTxtNode = document.createTextNode("Hey this is an H1");

h1Tag.appendChild(h1TagTxtNode);

var docBody = document.body;

docBody.append(h1Tag);
docBody.append(pTag);