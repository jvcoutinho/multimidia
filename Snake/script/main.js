var canvas = document.querySelector("#canvas");
canvas.setAttribute("width", window.innerWidth / 2);
canvas.setAttribute("height", window.innerHeight / 1.2);
var context = canvas.getContext("2d");

start();
setInterval(loop, 1000/20);