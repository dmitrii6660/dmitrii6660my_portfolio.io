const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function nextSlide() {
  const total = slides.length;
  // Nykyinen div liukuu pois oikealle (100%)
  slides[currentIndex].classList.remove('visible');
  slides[currentIndex].style.transform = 'translateX(-100%)'; // Liukuu vasemmalta pois (näytön vasen puoli)

  // Päivitetään indeksiä
  currentIndex = (currentIndex + 1) % total;

  // Seuraava div on aluksi oikealla ulkona (100%)
  slides[currentIndex].style.transform = 'translateX(100%)';

  // Pieni viive, jotta transition toimii (pakollinen, jotta selain rekisteröi muutoksen)
  requestAnimationFrame(() => {
    // Seuraava div liukuu sisään (0%)
    slides[currentIndex].classList.add('visible');
    slides[currentIndex].style.transform = 'translateX(0)';
  });

  // Edellinen div on nyt siirtynyt pois näytöltä vasemmalle, siirretään se pois näkyvistä oikealle, 
  // jotta se on valmiina seuraavaan kiertoon:
  setTimeout(() => {
    let prevIndex = (currentIndex - 1 + total) % total;
    slides[prevIndex].style.transform = 'translateX(100%)';
  }, 600); // Hetki transitionin jälkeen
}