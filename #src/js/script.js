@@include('../../node_modules/swiper/swiper-bundle.min.js');
@@include('../../node_modules/chart.js/dist/chart.js');


document.addEventListener("DOMContentLoaded", function () {

  @@include('components/header.js');
  @@include('components/sliders.js');
  @@include('components/numbers.js');
  @@include('components/video.js');
  @@include('components/chart.js');
  @@include('components/p-category-slider.js');


  // p-category-slider
  var swiper = new Swiper("#p-category-slider", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
});

