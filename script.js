var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomButton");

function gradientAtLoad() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

function displayLinearGradient() {
	css.textContent = body.style.background + ";";
}

//-- Generate a random background clicking the button random--//

function generateRandomHexColor() {
	var color = randomColor = Math.floor(Math.random()*16777215).toString(16);
	return color;
}

function setRandomColor() {
	color1.value = "#" + generateRandomHexColor();
	color2.value = "#" + generateRandomHexColor();
	setGradient();
}

//-------------//

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	displayLinearGradient();
}

gradientAtLoad();
displayLinearGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomColor);


