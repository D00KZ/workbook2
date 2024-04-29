"use strict";

function onHelloBtnClicked() {
  alert("Hi there!");
}

function init() {
  const helloBtn = document.getElementById("helloBtn");
  helloBtn.onclick = onHelloBtnClicked;
}

window.onload = init;
