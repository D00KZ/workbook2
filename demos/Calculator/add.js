"use strict";

function add() {
  var numberOne = 2;
  var numberTwo = 4;
  var result = numberOne + numberTwo;
  console.log(result);
}
// add();

function init() {
  var addButton = document.getElementById("addButton"); //Line is calling a Id from the index.html page and turning it into a var
  addButton.onclick = add; //Commanding when the clikc on the "addButton" var to run the add() function (the funtion on top)
}

// init();
window.onload = init; //Saying when window loads to call the function "init()"
init(); //Running the function "init()" in the output when you run code in code runner
