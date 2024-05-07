document.addEventListener("DOMContentLoaded", function() {
    // Copyright year
    var yearSpan = document.getElementById("year");
    var currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Last modified date
    var lastModifiedSpan = document.getElementById("lastModified");
    var lastModifiedDate = new Date(document.lastModified);
    lastModifiedSpan.textContent = "Last modified: " + lastModifiedDate.toLocaleString();
});

const hamburgerElement = document.querySelector('#myButton')
const navElement = document.querySelector('#animateMe')

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open')
})

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});