@@include('../../node_modules/swiper/swiper-bundle.min.js');
@@include('../../node_modules/chart.js/dist/chart.js');

document.addEventListener("DOMContentLoaded", function () {
  // Burger btn
  let burgerBtn = document.querySelector('.burger');
  let navMenu = document.querySelector('.menu');

  burgerBtn.onclick = function () {
    burgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
  };

  // Slider
  var swiper = new Swiper(".main-slider", {
    pagination: {
      el: ".swiper-pagination",
    },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    loop: true,
  });

  // 
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
  }, false)

  // Видео
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
  });

  //
  const ctx = document.getElementById('myChart');
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
      },
      // layout: {
      //   padding: {
      //     left: 18,
      //   }
      // }
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


  // p-category-slider
  var swiper = new Swiper("#p-category-slider", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
});

