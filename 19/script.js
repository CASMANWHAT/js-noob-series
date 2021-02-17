//Show them the window object
console.log(window);

countdown = 0;

window.addEventListener("load", function () {
  var countingDown = setInterval(function () {
    if (countdown < 5) {
      countdown++;
      document.write(countdown);
    } else {
      alert("cleared");
      clearInterval(countingDown);
    }
  }, 1000);
  setTimeout(function () {
    alert("ULTRAAAA NOOB");
  }, 5000);
});
