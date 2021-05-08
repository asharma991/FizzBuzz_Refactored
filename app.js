$(document).ready(() => {
  var converted = FizzBuzz();
  $("h1").append("Result is:");
  for (var i = 1; i <= converted; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      $("body").append("fizz buzz" + "<br/><br/>");
    } else if (i % 3 === 0) {
      $("body").append("fizz" + "<br/><br/>");
    } else if (i % 5 === 0) {
      $("body").append("buzz" + "<br/><br/>");
    } else {
      $("body").append(`${i}` + "<br/><br/>");
    }
  }
});

var FizzBuzz = () => {
  var num = prompt(
    "Enter the integer upto which you want to check the FizzBuzz:"
  );
  num = parseFloat(num);
  if (Number.isNaN(num) || Number.isInteger(num) === false) {
    alert("Please enter an integer");
    FizzBuzz();
  } else {
    return num;
  }
};
