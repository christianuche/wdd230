function displayBanner() {
    const banner = document.getElementById('banner');
    const today = new Date().getDay();

    // Show the banner only on Monday (1), Tuesday (2), and Wednesday (3)
    if (today >= 1 && today <= 3) {
        banner.style.display = 'block';
    }
}

function closeBanner() {
    const banner = document.getElementById('banner');
    banner.style.display = 'none';
}

displayBanner();
function displayBanner() {
    const banner = document.getElementById('banner');
    const today = new Date().getDay();

    // Show the banner only on Monday (1), Tuesday (2), and Wednesday (3)
    if (today >= 1 && today <= 3) {
        banner.style.display = 'block';
    }
}

function closeBanner() {
    const banner = document.getElementById('banner');
    banner.style.display = 'none';
}

displayBanner();
