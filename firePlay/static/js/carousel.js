const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0;

// Navigate to the next slide
nextBtn.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the first slide
  }
  updateCarousel();
});

// Navigate to the previous slide
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1; // Loop back to the last slide
  }
  updateCarousel();
});

// Update the carousel position
function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Optional: Auto-play the carousel
setInterval(() => {
  nextBtn.click();
}, 5000); // Change every 5 seconds
