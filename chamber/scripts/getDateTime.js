document.getElementById("lastModified").textContent = document.lastModified;

const hamburgerElement = document.querySelector('#myButton')
const navElement = document.querySelector('#animateMe')

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open')
})

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");
const container = document.querySelector(".grid-container");


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
        body.style.background = "#000";
		body.style.color = "#fff";
        container.style.background = "#000";
		container.style.color = "#fff";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
        body.style.background = "#eee";
		body.style.color = "#000";
        container.style.background = "#fff";
		container.style.color = "#000";
	}
});