let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Affiche immédiatement la première slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.style.opacity = '0';
  });
  slides[index].classList.add('active');
  slides[index].style.opacity = '1';
}

// Passe à la slide suivante
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

// Démarre le diaporama avec délai initial de 1 seconde puis toutes les 4 secondes
function startSlideshow() {
  showSlide(currentIndex); // Affiche la première slide immédiatement

  setTimeout(() => {
    nextSlide(); // Transition après 1s
    setInterval(nextSlide, 3000); // Puis toutes les 4s
  }, 500); // Délai initial
}

startSlideshow(); // Lancement du diaporama
