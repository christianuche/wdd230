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


document.addEventListener("DOMContentLoaded", function() {
    // Lazy loading images
    var lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var image = entry.target;
                image.src = image.dataset.src;
                image.classList.remove("lazy");
                observer.unobserve(image);
            }
        });
    });

    lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
    });

    // Display message based on visit frequency
    var lastVisit = localStorage.getItem("lastVisit");
    var today = new Date();
    var daysSinceLastVisit = Math.floor((today - new Date(lastVisit)) / (1000 * 60 * 60 * 24));

    var sidebarContent = document.querySelector(".sidebar-content");
    if (!lastVisit) {
        sidebarContent.innerHTML = "<h2>Welcome, Guest!</h2><p>Explore the mysterious building and uncover its secrets...</p>";
    } else if (daysSinceLastVisit < 1) {
        sidebarContent.innerHTML = "<h2>Welcome back, Guest!</h2><p>Back so soon! Awesome!</p>";
    } else {
        var message = (daysSinceLastVisit === 1) ? "day" : "days";
        sidebarContent.innerHTML = "<h2>Welcome back, Guest!</h2><p>You last visited " + daysSinceLastVisit + " " + message + " ago.</p>";
    }

    // Store current date as last visit
    localStorage.setItem("lastVisit", today);
});
