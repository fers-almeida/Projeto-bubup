const carouselContainer = document.querySelector('.carousel-container');

// Duplicar o conteúdo do carrossel para criar um loop contínuo
const slides = Array.from(carouselContainer.children);
slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  carouselContainer.appendChild(clone);
});

let offset = 0;
const scrollSpeed = 2; // Ajuste a velocidade do carrossel

function animateCarousel() {
  offset -= scrollSpeed; // Move os itens para a esquerda
  if (Math.abs(offset) >= carouselContainer.scrollWidth / 1.5) {
    offset = 0; // Reinicia quando metade do carrossel já rolou
  }
  carouselContainer.style.transform = `translateX(${offset}px)`;
  requestAnimationFrame(animateCarousel);
}

animateCarousel();