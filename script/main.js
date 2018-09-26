var canvas = document.querySelector("#canvas");
canvas.setAttribute("width", window.innerWidth - 4);
canvas.setAttribute("height", window.innerHeight - 50.89);
var context = canvas.getContext("2d");

var pointsHTML = document.querySelector("#points");
setTimeout(loop, 60);