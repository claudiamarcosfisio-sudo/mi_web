// Inicializar Swiper después de que la página se haya cargado
const swiper = new Swiper('.swiper', {
  // Opciones de configuración
  direction: 'horizontal',
  loop: true, // Para que las diapositivas se repitan infinitamente

  // Opciones de Paginación (puntos)
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Hace que los puntos sean clickables
  },

  // Opciones de Navegación (flechas)
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // Opciones de progresión automática (Autoplay)
  autoplay: {
    delay: 4000, // 4 segundos
    disableOnInteraction: false, // El autoplay no se detiene si el usuario interactúa
  }
});
