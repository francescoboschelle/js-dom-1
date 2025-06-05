// Lamp off: false | Lamp on: true
let lampStatus = false;

const btn = document.querySelector(".btn");
const image = document.getElementsByTagName("img")[0];
const body = document.getElementsByTagName("body")[0];

btn.addEventListener("click", function () {
  if (lampStatus) {
    image.src = "./img/white_lamp.png";
    image.alt = "Lamp off";
    body.style.backgroundColor = "black";
    btn.style.color = "white";
    btn.innerHTML = "Accendi";

    lampStatus = false;
  } else {
    image.src = "./img/yellow_lamp.png";
    image.alt = "Lamp on";
    body.style.backgroundColor = "white";
    btn.style.color = "black";
    btn.innerHTML = "Spegni";

    lampStatus = true;
  }
});
