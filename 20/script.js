var current = 0;

// if (current < 5) {
//   alert("Less than 5");
// }

// if (current > 5) {
//   alert("More than 5");
// }

// setInterval(function () {
//   current++;
//   if (current <= 5) {
//     console.log(current);
//   }
// }, 500);

setInterval(function () {
  current++;
  if (current < 5) {
    console.log(current);
  }
}, 500);