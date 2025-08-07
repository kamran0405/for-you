// Create falling flower animation
function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 4 + Math.random() * 3 + "s";
  document.getElementById("flower-container").appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 7000);
}

setInterval(createFlower, 400);
