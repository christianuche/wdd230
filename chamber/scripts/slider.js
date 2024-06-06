let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlides(n) {
    slideIndex += n;
    if (slideIndex >= totalSlides) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = totalSlides - 1; }
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
}

// Initial call to display the first slide
showSlides(0);

// Next/previous controls
function plusSlides(n) {
    showSlides(n);
}

// Auto slide
setInterval(() => {
    plusSlides(1);
}, 3000); // Change slide every 5 seconds
