const baseUrl = "https://christianuche.github.io/wdd230/"
const linksURL = `${baseURL}chamber/data/home-members.json`;

async function fetchMembers() {
    try {
        const response = await fetch(membersUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch members data');
        }
        const data = await response.json();
        displaySpotlights(data.members);
    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}

function displaySpotlights(members) {
    const spotlightsContainer = document.getElementById('spotlights-container');
    spotlightsContainer.innerHTML = '';

    const qualifiedMembers = members.filter(member => member.level === 'Silver' || member.level === 'Gold');
    const randomMembers = getRandomElements(qualifiedMembers, 3);

    randomMembers.forEach(member => {
        spotlightsContainer.innerHTML += `
            <div class="spotlight">
                <img src="${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.description}</p>
            </div>
        `;
    });
}

function getRandomElements(array, num) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

fetchMembers();
