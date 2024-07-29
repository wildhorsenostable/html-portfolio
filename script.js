let currentSlide = 0;
let currentImageIndex = 0;
const fadeInterval = 3000;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-inner img');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const newTransformValue = `translateX(${-currentSlide * 100}%)`;
    document.querySelector('.carousel-inner').style.transform = newTransformValue;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Initialize carousel
showSlide(currentSlide);

function fadeImage() {
    const images = document.querySelectorAll('.fade-image');
    images[currentImageIndex].style.opacity = 0;

    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.opacity = 1;
}

// Initialize image fade
setInterval(fadeImage, fadeInterval);
