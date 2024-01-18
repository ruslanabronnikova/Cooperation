// slider-init.js

$(document).ready(function () {
  var mySwiper = new Swiper('.swiper', {
    // Ваши настройки Swiper
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000, // Задержка между переключениями в миллисекундах (например, 5000 = 5 секунд)
    },
    loop: true,
    speed: 800, // Скорость перелистывания в миллисекундах (например, 800 = 0.8 секунды)
    effect: 'fade', // Эффект "fade" для плавного затухания и появления слайдов
    fadeEffect: {
      crossFade: true,
    },
  });
});
