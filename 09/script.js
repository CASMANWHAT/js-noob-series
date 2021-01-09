var h1Node = document.createElement("H1")                // Create a <h1> element
// var h1Text = document.createTextNode("Hello World");     // Create a text node
// h1Node.appendChild(h1Text);     

var pNode = document.createElement('p');
var pText = document.createTextNode("Hello i'm in a p tag, yay!");
pNode.appendChild(pText);

var docBody = document.body

// document.body.append(h1Node);
// document.body.append(pNode);

docBody.append(h1Node);
docBody.append(pNode);


//turn document.body into a var