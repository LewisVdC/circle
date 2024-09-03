document.addEventListener("DOMContentLoaded", () => {
  const image = document.getElementById("image");
  const slider = document.getElementById("myRange");
  const background = document.querySelector(".background");

  if (!image) {
    console.error("Image element not found");
    return;
  }
  if (!slider) {
    console.error("Slider element not found");
    return;
  }
  if (!background) {
    console.error("Background element not found");
    return;
  }

  let angle = 0;
  let rotationSpeed = 0;
  let rotationInterval;

  function startRotation() {
    if (rotationInterval) {
      clearInterval(rotationInterval);
    }

    rotationInterval = setInterval(() => {
      angle = (angle + rotationSpeed) % 360;
      image.style.transform = `rotate(${angle}deg)`;

      let blurAmount = rotationSpeed * 0.1;
      background.style.filter = `blur(${blurAmount}px)`;
    }, 20);
  }

  slider.addEventListener("input", function () {
    rotationSpeed = slider.value * 3.6;
    startRotation();
  });

  startRotation();
});
