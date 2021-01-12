var input = document.createElement("input");

input.addEventListener("focus", function (event) {
  console.log(event);
  console.log("focusing");
});

input.addEventListener("keypress", function (e) {
  console.log(e.key);
  console.log(e.keyCode);
});

document.body.append(input);
