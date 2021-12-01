document.addEventListener("DOMContentLoaded", function () {

  // Menu btn
var header = $('.header__wrapper'),
  scrollPrev = 0;

$(window).scroll(function () {
  var scrolled = $(window).scrollTop();

  if (scrolled > 300 && scrolled > scrollPrev) {
    header.addClass('out');
  } else {
    header.removeClass('out');
  }
  scrollPrev = scrolled;
});

function startResize(e) {
  let windowWidth = window.innerWidth;

  if (windowWidth > 991) {
  } else {
    let burgerBtn = document.querySelector('.burger');
    let navMenu = document.querySelector('.menu-1');
    burgerBtn.onclick = function () {
      burgerBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
    };

    let buttonsMenu = document.querySelectorAll('.menu-toggle');

    buttonsMenu.forEach((elem) => {
      elem.addEventListener('click', () => {
        let menuItem = $(elem).closest('.menu-item').find('.submenu').eq(0);
        menuItem.toggleClass('active');
        $(elem).eq(0).toggleClass('active');
      })
    });
  }
}

startResize();

window.addEventListener("resize", startResize);;
  // main Slider
var swiper = new Swiper(".main-slider", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
});

// career slider
;
  // Numbers
let counter = document.querySelectorAll('.numbers__number');

function numberWithCommas(x, suffix = '') {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + suffix;
}

function animateValue(obj, start, end, duration, suffix) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = numberWithCommas(Math.floor(progress * (end - start) + start), suffix);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}
window.addEventListener('scroll', () => {
  counter.forEach((el) => {
    let isEnded = el.dataset.ended;
    let start = parseFloat(el.dataset.start);
    let end = parseFloat(el.dataset.end);
    let duration = parseFloat(el.dataset.duration);
    let delay = el.dataset.delay ? parseFloat(el.dataset.delay) : 0;
    let suffix = el.dataset.suffix ? el.dataset.suffix : '';
    if (!isEnded && elementInViewport(el)) {
      el.setAttribute('data-ended', true);
      setTimeout(() => {
        animateValue(el, start, end, duration, suffix);
      }, delay)
    }
  });
}, false);
  // Video
let videoPlayer = document.querySelectorAll('.js-video');

videoPlayer.forEach(element => {
  let video = element.querySelector('video');
  let videoFilter = element.querySelector('.video__filter');
  video.volume = 0.2;

  element.addEventListener('click', () => {
    if (video.paused) {
      videoFilter.classList.add('active');
      video.play();
    } else {
      video.pause();
      videoFilter.classList.remove('active');
    }
  })
});;
  //Chart
const ctx = document.getElementById('myChart');
if (ctx) {
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
      datasets: [{
        label: 'Продано',
        data: [650000, 900000, 900000, 1000000, 1000000, 1200000, 1500000, 1600000, 1650000, 1800000],
        backgroundColor: '#00A7B5',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (val, index) {
              let result = nFormatter(val, 1);
              let tmp = result.split(' ');
              tmp[0] = tmp[0].replace('.', ',');
              return tmp.join(' ');
            },
            stepSize: 400000,
            padding: 18,
          },
          grid: {
            drawBorder: false,
          }
        },
        x: {
          grid: {
            display: false,
            drawBorder: false,
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });

  function nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: " тыс." },
      { value: 1e6, symbol: " млн." },
      { value: 1e9, symbol: " млрд." },
      // { value: 1e12, symbol: "T" },
      // { value: 1e15, symbol: "P" },
      // { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function (item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
  };
}



var xAxisLabelMinWidth = 15; // Replace this with whatever value you like
// var myChart = new Chart(document.getElementById('chart').getContext('2d'), {
//     type: 'line',
//     data: {},
//     options: {
//         responsive: true,
//         maintainAspectRatio: false
//     }
// });

function fitChart() {
  var chartCanvas = document.querySelectorAll('.chart__canvas');
  var maxWidth = chartCanvas.parentElement.parentElement.clientWidth;
  var chartCanvas = Math.max(mayChart.data.labels.length * xAxisLabelMinWidth, maxWidth);

  chartCanvas.parentElement.style.width = width + 'px';
};
  // p-category-slider

if (document.getElementById("p-category-slider")) {

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

    point.forEach(function (el2) {
      el2.classList.remove('active')
    })

    point[activeIndex].classList.add('active')
  });


  var point = document.querySelectorAll('.point')

  point.forEach(function (el, index) {
    el.setAttribute('data-index', index)
    el.addEventListener('click', function () {
      if (!el.classList.contains('active')) {
        var index = el.getAttribute('data-index')
        p_category_swiper.slideTo(index)
      }
    })
  })

}
;
  // respond
(function () {

  let fileInputs = document.querySelectorAll('.dropzone__input');
  let files = [];


  fileInputs.forEach((currentInput) => {
    let parentLabel = currentInput.closest('.dropzone__label');
    let tagsUl = currentInput.closest('.dropzone__wrapper').querySelector('.dropzone-output');

    currentInput.addEventListener('dragover', () => {
      parentLabel.classList.add('dropzone__label--focused');
    })

    currentInput.addEventListener('change', () => {

      try {
        files.push(...currentInput.files);
        renderTags(files, tagsUl, currentInput);
        currentInput.files = new FileListItem(files)
        console.log(currentInput.value, currentInput.files);
      } catch (error) {
        console.log(error)
      }

    })

    currentInput.addEventListener('dragleave', removeFocus);
    currentInput.addEventListener('drop', removeFocus);

    function removeFocus() {
      parentLabel.classList.remove('dropzone__label--focused');
    }
  })

  function renderTags(tags, tagsUl, currentInput) {
    if (!tagsUl) {
      return
    }
    $(tagsUl).empty();
    if (Array.isArray(tags)) {
      tags.forEach(tag => {
        let tagLi = document.createElement('li')
        tagLi.classList.add('dropzone-output__item')

        let iconSpan = document.createElement('span')
        iconSpan.classList.add('dropzone-output__icon', 'icon-pin')
        tagLi.append(iconSpan)

        let nameSpan = document.createElement('span')
        nameSpan.classList.add('dropzone-output__name')
        nameSpan.innerHTML = tag.name
        tagLi.append(nameSpan)

        let deleteSpan = document.createElement('span')
        deleteSpan.classList.add('dropzone-output__delete', 'icon-delete')
        deleteSpan.addEventListener('click', (e) => {
          e.preventDefault()
          console.log(tag)
          let newFiles = tags.filter(t => {
            return tag.name != t.name && tag.lastModified != t.lastModified
          })
          files = newFiles
          currentInput.files = new FileListItem(files)
          renderTags(newFiles, tagsUl, currentInput)
          console.log(newFiles)
        })
        tagLi.append(deleteSpan)
        tagsUl.append(tagLi)
      })
    }
  }
  // Used for creating a new FileList in a round-about way
  function FileListItem(a) {
    a = [].slice.call(Array.isArray(a) ? a : arguments)
    for (var c, b = c = a.length, d = !0; b-- && d;) d = a[b] instanceof File
    if (!d) throw new TypeError("expected argument to FileList is File or array of File objects")
    for (b = (new ClipboardEvent("")).clipboardData || new DataTransfer; c--;) b.items.add(a[c])
    return b.files
  }
})()

MicroModal.init({
  openClass: 'is-open',
});

;
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
};

  $(document).ready(function () {
  $('.vacancy__select').niceSelect();
});;
  var sub_news_form = document.getElementById('sub-news-form') 
var sub_news_form_submite = document.getElementById('sub-news-form-submite')
var sub_news_btn = document.getElementById('sub-news__btn') 
if(sub_news_form){
    sub_news_form.addEventListener('submit', function(e){
        e.preventDefault()
        sub_news_form.classList.add('active')
        sub_news_form_submite.classList.add('active')
        return false
    })

    sub_news_btn.addEventListener('click', function(){
        sub_news_form.classList.remove('active')
        sub_news_form_submite.classList.remove('active')
    })
}
lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false,
});

var js_video_gallary = document.querySelectorAll('.js-video-gallary') 
if(js_video_gallary){
    js_video_gallary.forEach(function(el){
        lightGallery(el, {
            selector: 'this',
            download: false,
            counter: false,
            plugins: [lgVideo],
        });
    })
};
  ;
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
    breakpoints: {
      320: {
        slidesPerView: 0.24,
      },
      400: {
        slidesPerView: 0.30,
      },
      500: {
        slidesPerView: 0.38,
      },
      700: {
        slidesPerView: 0.52,
      },
      900: {
        slidesPerView: 0.68,
      },
      1100: {
        slidesPerView: 0.80,
      },
      1300: {
        slidesPerView: 1,
      }
    }
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

// };

  try {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [55.678362, 37.631757],
      zoom: 14,
      controls: ['zoomControl']
    }, {
      searchControlProvider: 'yandex#search'
    }),


      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './img/label.png',
        // Размеры метки.
        iconImageSize: [40, 62],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      })
    myMap.geoObjects
      .add(myPlacemark)
  });
} catch (error) {
  console.log(error)
};
});

