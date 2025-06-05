const btn = document.querySelector(".btn");
const image = document.getElementsByTagName("img")[0];
const body = document.getElementsByTagName("body")[0];

btn.addEventListener("click", function () {
  image.src = "./img/yellow_lamp.png";
  image.alt = "Lamp on";
  body.style.backgroundColor = "white";
  btn.style.color = "black";
  btn.innerHTML = "Spegni";
});
