if (document.getElementById("career-slider")) {

  var career_slider = new Swiper("#career-slider", {
    spaceBetween: 8,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination3",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      }
    },
  });
}