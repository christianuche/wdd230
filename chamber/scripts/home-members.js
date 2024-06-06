const baseURL = "https://christianuche.github.io/wdd230/"
const memberURL = `${baseURL}chamber/data/home-members.json`;

async function fetchMembers() {
    try {
        const response = await fetch(memberURL);
        if (!response.ok) {
            throw new Error('Failed to fetch members data');
        }
        const data = await response.json();
        displaySpotlights(data.members);
    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}

function getRandomElements(array, num) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

fetchMembers();
