// Variables para el carrusel
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-images img');
const totalSlides = slides.length;

// Función para cambiar la imagen
function moveSlide(n) {
  slideIndex = (slideIndex + n + totalSlides) % totalSlides;
  const carouselImages = document.querySelector('.carousel-images');
  carouselImages.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Cambiar imagen automáticamente cada 2 segundos
setInterval(() => {
  moveSlide(1);
}, 4000);

// Modal
const openBtn = document.getElementById('openBtn');
const modalCard = document.getElementById('modalCard');
const closeBtn = document.getElementById('closeBtn');

// Mostrar la tarjeta modal con animación
openBtn.addEventListener('click', function() {
  modalCard.classList.add('show');
});

// Cerrar la tarjeta modal con animación
closeBtn.addEventListener('click', function() {
  modalCard.classList.remove('show');
});



document.getElementById("listenBtn").addEventListener("click", function() {
  // URL de la canción de YouTube (enlace de incrustación)
  const songUrl = "https://www.youtube.com/embed/6XcCg9iQQpQ?autoplay=1"; // Enlace de incrustación

  // Establece la URL en el iframe del modal de la canción
  document.getElementById("songIframe").src = songUrl;

  // Muestra el modal de la canción
  document.getElementById("songModal").classList.add("show");
});

document.getElementById("closeSongBtn").addEventListener("click", function() {
  // Oculta el modal de la canción
  document.getElementById("songModal").classList.remove("show");
  
  // Limpia el src del iframe para detener la canción
  document.getElementById("songIframe").src = "";
});

