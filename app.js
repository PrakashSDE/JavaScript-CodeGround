const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#"+randomColor;
},1000);

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}



