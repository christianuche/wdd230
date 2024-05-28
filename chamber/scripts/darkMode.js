const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		modeButton.textContent = "🔆";
        body.style.background = "#000";
		body.style.color = "#000";
	} else {
		modeButton.textContent = "🕶️";
        body.style.background = "#eee";
		body.style.color = "#000";
	}
});
