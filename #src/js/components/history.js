// history slider
if (document.getElementById("history-slider")) {

  var history_swiper = new Swiper("#history-slider", {
    spaceBetween: 0,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    freeMode: {
      enabled: true,
    },
    grabCursor: true,
  });

  history_swiper.on('slideChange', function () {
    var activeIndex = history_swiper.activeIndex

    dateItem.forEach(function (date1) {
      date1.classList.remove('active')
    })

    dateItem[activeIndex].classList.add('active')
  });


  var dateItem = document.querySelectorAll('.date__item')

  dateItem.forEach(function (date, index) {
    date.setAttribute('data-year', index)
    date.addEventListener('click', function () {
      if (!date.classList.contains('active')) {
        var index = date.getAttribute('data-year')
        history_swiper.slideTo(index)
      }
    })
  })

}








// if (document.getElementById("history-slider")) {

//   var history_swiper = new Swiper("#history-slider", {
//     spaceBetween: 0,
//     scrollbar: {
//       el: '.swiper-scrollbar',
//       draggable: true,
//     },
//   });

//   history_swiper.on('slideChange', function () {
//     var activeIndex = history_swiper.activeIndex

//     dateItem.forEach(function (date1) {
//       date1.classList.remove('active')
//     })

//     dateItem[activeIndex].classList.add('active')
//   });


//   var dateItem = document.querySelectorAll('.date__item')

//   dateItem.forEach(function (date, index) {
//     date.setAttribute('data-index', index)
//     date.addEventListener('click', function () {
//       if (!date.classList.contains('active')) {
//         var index = date.getAttribute('data-year')
//         history_swiper.slideTo(index)
//       }
//     })
//   })

// }