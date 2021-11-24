// p-category-slider
var p_category_swiper = new Swiper("#p-category-slider", {
  loop: true,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});