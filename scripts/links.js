const baseURL = "https://yourgithubusername.github.io/wdd230/";
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

        const linksList = document.createElement('ul');
        week.links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = baseURL + link.url;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });
        activitiesSection.appendChild(linksList);
    });
}

getLinks();
