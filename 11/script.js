var docBody = document.body;

var newInput = document.createElement("input");

newInput.addEventListener("focus", function (e) {
  console.log(e);
  console.log("We are focusing");
});

newInput.addEventListener("blur", function (e) {
  console.log(e);
  console.log("we are blurring");
});

newInput.addEventListener("keydown", function (e) {
  console.log(e);
  console.log(e.key);
});

docBody.append(newInput);
