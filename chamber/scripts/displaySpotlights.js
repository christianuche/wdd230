function displaySpotlights(members) {
    const spotlightsContainer = document.getElementById('spotlights-container');
    spotlightsContainer.innerHTML = '';

    const qualifiedMembers = members.filter(member => member.level === 'Silver' || member.level === 'Gold');
    const randomMembers = getRandomElements(qualifiedMembers, 2);

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
