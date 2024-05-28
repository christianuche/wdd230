const baseURL = "https://christianuche.github.io/wdd230/"
const linksURL = `${baseURL}links.json`


async function getLinks() {
    try {
      const response = await fetch(linksURL);
      const data = await response.json();
      displayLinks(data.weeks);
    } catch (error) {
      console.error('Error fetching links:', error);
    }
  }