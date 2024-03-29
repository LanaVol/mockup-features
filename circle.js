// Variable progress, which contains the percentage of filling color
const progress = 80;
const circle = document.getElementById("progressCircle");
const circleText = document.querySelector(".center-circle span");

const gradientColor = "blue";
const gradientValue = `transparent ${
  360 * (1 - progress / 100)
}deg, ${gradientColor} 0deg`;
circle.style.background = `conic-gradient(${gradientValue})`; /* Change gradient */
circleText.innerHTML = `${progress}%`;
