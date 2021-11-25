


document.addEventListener("DOMContentLoaded", function () {

  // Menu btn
let burgerBtn = document.querySelector('.burger');
let navMenu = document.querySelector('.menu-1');

burgerBtn.onclick = function () {
  burgerBtn.classList.toggle('active');
  navMenu.classList.toggle('active');
};



// function startResize(e) {
//   let windowWidth = window.innerWidth;
//   let burgerBtn = document.querySelector('.burger');
//   let navMenu = document.querySelector('.menu-1');
//   let menuItems = navMenu.querySelectorAll('li');

//   if (windowWidth > 991) {
//     console.log('Больше 991');
//   } else {
//     console.log('Меньше 991');
//     burgerBtn.onclick = function () {
//       burgerBtn.classList.toggle('active');
//       navMenu.classList.toggle('active');
//     };

//     let buttonsMenu = document.querySelectorAll('.menu-toggle');

//     buttonsMenu.forEach((elem) => {
//       elem.addEventListener('click', () => {
//         let menuItem = elem.parentNode.closest('.menu-item').find('.submenu')[0];

//         menuItem.classList.toggle('active');
//         elem.closest('.menu-wrap').querySelector('.menu_btn').classList.toggle('menu_btn-active')
//       })
//     });

//     // let menuItemOne = document.querySelector('.menu-1__title');
//     // let menuTwo = document.querySelector('.menu-2');
//     // menuItemOne.onclick = function () {
//     //   menuItemOne.classList.toggle('active');
//     //   menuTwo.classList.toggle('active');
//     // };

//     // let menuItemTwo = document.querySelector('.menu-2__title');
//     // let menuThree = document.querySelector('.menu-3');
//     // menuItemTwo.onclick = function () {
//     //   menuItemTwo.classList.toggle('active');
//     //   menuThree.classList.toggle('active');
//     // };
//   }
// }

// startResize();

// window.addEventListener("resize", startResize);







// // window.addEventListener("resize", function (e) {
// //   let windowWidth = window.innerWidth;
// //   // let menu = document.querySelector('.menu-1');
// //   let burgerBtn = document.querySelector('.burger');
// //   let navMenu = document.querySelector('.menu-1');
// //   let menuItems = navMenu.querySelectorAll('li');
// //   let mouseenterFunc = function (i) {
// //     i.classList.add('active');
// //   }
// //   let mouseleaveFunc = function (i) {
// //     i.classList.remove('active');
// //   }
// //   if (windowWidth > 991) {
// //     console.log('Больше 991');
// //     menuItems.forEach(i => {
// //       i.addEventListener('mouseenter', mouseenterFunc, false);
// //       i.addEventListener('mouseleave', mouseleaveFunc, false);
// //     })
// //   } else {
// //     console.log('Меньше 991');
// //     burgerBtn.onclick = function () {
// //       burgerBtn.classList.toggle('active');
// //       navMenu.classList.toggle('active');
// //     };
// //     menuItems.forEach(i => {
// //       i.removeEventListener('mouseenter', mouseenterFunc, false);
// //       i.removeEventListener('mouseleave', mouseleaveFunc, false);
// //     })
// //   }
// // }, false);

// // let menu = document.querySelector('menu-1');
// // window.addEventListener("resize", function (e) {
// //   let menuItems = navMenu.querySelectorAll('li');
// //   menuItems.forEach(i => {
// //     i.addEventListener('mouseenter', () => {
// //       i.classList.add('active')
// //     })
// //     i.addEventListener('mouseleave', () => {
// //       i.classList.remove('active')
// //     })
// //   })
// // });




// // const InitMultiMenu = ({ menu, params = {} }) => {

// //   //Initialization
// //   let menuObject = document.querySelector(menu);
// //   let subMenus = menuObject.querySelectorAll('ul');

// //   let initParams = {
// //     parentItem: '.menu-toggle',
// //     subMenuClass: 'sub-menu',
// //     itemClass: 'menu-item',
// //     activeClass: 'active',
// //     subMenuWrapper: null,
// //     action: 'click',
// //     responsive: [],
// //     ...params
// //   };

// //   let newParams = { ...initParams };

// //   if (newParams?.responsive) {
// //     newParams?.responsive.sort((a, b) => parseFloat(a?.breakpoint) - parseFloat(b?.breakpoint));
// //   }

// //   //init li class
// //   let menuItems = menuObject.querySelectorAll('li');
// //   menuItems.forEach(li => {
// //     li.classList.add(newParams?.itemClass);
// //   })


// //   //methods
// //   function toggleMenu({
// //     subMenuInstance,
// //     parentLi,
// //     liMenuToggle,
// //     show = true,
// //   }) {
// //     try {
// //       if (show) {
// //         subMenuInstance.classList.add(newParams?.activeClass);
// //         parentLi.classList.add(newParams?.activeClass);
// //         liMenuToggle.classList.add(newParams?.activeClass);
// //       } else {
// //         subMenuInstance.classList.remove(newParams?.activeClass);
// //         parentLi.classList.remove(newParams?.activeClass);
// //         liMenuToggle.classList.remove(newParams?.activeClass);
// //       }
// //     } catch (er) { }
// //   }

// //   function findAll(item) {
// //     let res = [];
// //     if (item) {
// //       let parent = item.parentElement.closest('li');
// //       console.log(parent);
// //       if (parent) {
// //         findAll(parent);
// //       } else {
// //         return;
// //       }
// //     } else {
// //       return;
// //     }
// //   }

// //   function initBreakpoit(e) {
// //     let windowWidth = window.innerWidth;
// //     if (Array.isArray(newParams?.responsive)) {
// //       let foundBreak = newParams?.responsive.find(i => i.breakpoint >= windowWidth);
// //       if (foundBreak) {
// //         let tmpParams = foundBreak?.params || {};
// //         newParams = {
// //           ...newParams,
// //           ...tmpParams,
// //         };


// //       } else {
// //         newParams = { ...initParams };
// //       }

// //       initSubmenu();
// //     }
// //   }

// //   initBreakpoit();
// //   window.addEventListener("resize", initBreakpoit, false);

// //   //Init submenu
// //   function initSubmenu() {
// //     subMenus.forEach(sub => {

// //       sub.classList.add(newParams?.subMenuClass);
// //       let subMenuInstance = sub;

// //       let parentLi = sub.closest('li');
// //       parentLi.classList.add('has-sub');

// //       if (newParams?.subMenuWrapper) {
// //         subMenuInstance = parentLi.querySelector(newParams?.subMenuWrapper) || sub;
// //       }

// //       let liMenuToggle = parentLi.querySelector(newParams?.parentItem);


// //       //Listeners
// //       var mouseEnterListener = function (e) {
// //         e.preventDefault();
// //         toggleMenu({
// //           subMenuInstance: subMenuInstance,
// //           parentLi: parentLi,
// //           liMenuToggle: liMenuToggle,
// //           show: true,
// //         })
// //       }

// //       var mouseLeaveListener = function (e) {
// //         e.preventDefault();
// //         toggleMenu({
// //           subMenuInstance: subMenuInstance,
// //           parentLi: parentLi,
// //           liMenuToggle: liMenuToggle,
// //           show: false,
// //         })
// //       }

// //       var clickListener = function (e) {
// //         e.preventDefault();
// //         subMenuInstance.classList.toggle(newParams?.activeClass);
// //         parentLi.classList.toggle(newParams?.activeClass);
// //         liMenuToggle.classList.toggle(newParams?.activeClass);
// //       }

// //       function clearListeners() {
// //         parentLi?.removeEventListener('mouseenter', mouseEnterListener, true)
// //         parentLi?.removeEventListener('mouseleave', mouseEnterListener, true)
// //         liMenuToggle?.removeEventListener('click', clickListener, true);
// //       }

// //       clearListeners();

// //       // if (liMenuToggle) {
// //       //   if (newParams?.action.toLowerCase() == 'hover') {
// //       //     //При наведении мышки - показываем меню
// //       //     parentLi.addEventListener('mouseenter', mouseEnterListener, true)

// //       //     //При наведении мышки - показываем меню
// //       //     parentLi.addEventListener('mouseleave', mouseLeaveListener, true)

// //       //   } else {
// //       //     liMenuToggle.addEventListener('click', clickListener, true);
// //       //   }
// //       // }
// //     });
// //   }

// //   //initSubmenu();
// // }
// // InitMultiMenu({
// //   menu: '.menu-1',
// //   params: { subMenuWrapper: '.menu-2', action: 'hover' },
// // });;
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
});;
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
;
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
;
  // respond
// Dropzone.options.myDropzone = {
//   url: 'upload.php',
//   autoProcessQueue: false,
//   uploadMultiple: true,
//   parallelUploads: 5,
//   maxFiles: 5,
//   maxFilesize: 1,
//   acceptedFiles: 'image/*',
//   addRemoveLinks: true,
//   init: function () {
//     dzClosure = this; // Makes sure that 'this' is understood inside the functions below.

//     // for Dropzone to process the queue (instead of default form behavior):
//     document.getElementById("submit-all").addEventListener("click", function (e) {
//       // Make sure that the form isn't actually being sent.
//       e.preventDefault();
//       e.stopPropagation();
//       dzClosure.processQueue();
//     });

//     //send all the form data along with the files:
//     this.on("sendingmultiple", function (data, xhr, formData) {
//       formData.append("firstname", jQuery("#firstname").val());
//       formData.append("lastname", jQuery("#lastname").val());
//     });
//   }
// };
  ;

});

