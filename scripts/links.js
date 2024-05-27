const baseURL = "https://christianuche.github.io/wdd230/";
const linksURL = `https://christianuche.github.io/wdd230/data/links.json`;

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    const activitiesSection = document.getElementById('activities');
    activitiesSection.innerHTML = ''; // Clear existing content

    weeks.forEach(week => {
        const weekHeader = document.createElement('h3');
        weekHeader.textContent = week.week;
        activitiesSection.appendChild(weekHeader);

