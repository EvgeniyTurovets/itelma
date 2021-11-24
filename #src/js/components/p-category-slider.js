// p-category-slider

if(document.getElementById("p-category-slider")){

  var p_category_swiper = new Swiper("#p-category-slider", {
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

  p_category_swiper.on('slideChange', function () {
    var activeIndex = p_category_swiper.activeIndex
   
    point.forEach(function(el2){
      el2.classList.remove('active')
    })

    point[activeIndex].classList.add('active')
  });


  var point = document.querySelectorAll('.point')

  point.forEach(function(el,index){
    el.setAttribute('data-index', index)
    el.addEventListener('click', function(){
      if(!el.classList.contains('active')){
        var index = el.getAttribute('data-index')
        p_category_swiper.slideTo(index)
      }
    })
  })

}