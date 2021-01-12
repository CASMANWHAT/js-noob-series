var pTag = document.createElement("p");
var pTxtNode = document.createTextNode("WE NEED SOME TXT!@!!!");

pTag.appendChild(pTxtNode);

var h1Tag = document.createElement("h1");
var h1TxtNode = document.createTextNode("THIS IS ONE EPIC TXT NODE!");

h1Tag.appendChild(h1TxtNode);

var docBod = document.body;

docBod.append(pTag);
docBod.append(h1Tag);