// Variable progress, which contains the percentage of filling color
var progress = 50;
var circle = document.getElementById("progressCircle");

var gradientColor = "blue";
var gradientValue = `transparent ${
  360 * (1 - progress / 100)
}deg, ${gradientColor} 0deg`;
circle.style.background = `conic-gradient(${gradientValue})`; /* Change gradient */
