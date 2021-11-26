document.addEventListener("DOMContentLoaded", function () {

  // Menu btn
let burgerBtn = document.querySelector('.burger');
let navMenu = document.querySelector('.menu-1');

burgerBtn.onclick = function () {
  burgerBtn.classList.toggle('active');
  navMenu.classList.toggle('active');
};

var header = $('.header__wrapper'),
  scrollPrev = 0;

$(window).scroll(function () {
  var scrolled = $(window).scrollTop();

  if (scrolled > 100 && scrolled > scrollPrev) {
    header.addClass('out');
  } else {
    header.removeClass('out');
  }
  scrollPrev = scrolled;
});

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

MicroModal.init();;
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
  /*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!function(e){e.fn.niceSelect=function(t){function s(t){t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class")||"").addClass(t.attr("disabled")?"disabled":"").attr("tabindex",t.attr("disabled")?null:"0").html('<span class="current"></span><ul class="list"></ul>'));var s=t.next(),n=t.find("option"),i=t.find("option:selected");s.find(".current").html(i.data("display")||i.text()),n.each(function(t){var n=e(this),i=n.data("display");s.find("ul").append(e("<li></li>").attr("data-value",n.val()).attr("data-display",i||null).addClass("option"+(n.is(":selected")?" selected":"")+(n.is(":disabled")?" disabled":"")).html(n.text()))})}if("string"==typeof t)return"update"==t?this.each(function(){var t=e(this),n=e(this).next(".nice-select"),i=n.hasClass("open");n.length&&(n.remove(),s(t),i&&t.next().trigger("click"))}):"destroy"==t?(this.each(function(){var t=e(this),s=e(this).next(".nice-select");s.length&&(s.remove(),t.css("display",""))}),0==e(".nice-select").length&&e(document).off(".nice_select")):console.log('Method "'+t+'" does not exist.'),this;this.hide(),this.each(function(){var t=e(this);t.next().hasClass("nice-select")||s(t)}),e(document).off(".nice_select"),e(document).on("click.nice_select",".nice-select",function(t){var s=e(this);e(".nice-select").not(s).removeClass("open"),s.toggleClass("open"),s.hasClass("open")?(s.find(".option"),s.find(".focus").removeClass("focus"),s.find(".selected").addClass("focus")):s.focus()}),e(document).on("click.nice_select",function(t){0===e(t.target).closest(".nice-select").length&&e(".nice-select").removeClass("open").find(".option")}),e(document).on("click.nice_select",".nice-select .option:not(.disabled)",function(t){var s=e(this),n=s.closest(".nice-select");n.find(".selected").removeClass("selected"),s.addClass("selected");var i=s.data("display")||s.text();n.find(".current").text(i),n.prev("select").val(s.data("value")).trigger("change")}),e(document).on("keydown.nice_select",".nice-select",function(t){var s=e(this),n=e(s.find(".focus")||s.find(".list .option.selected"));if(32==t.keyCode||13==t.keyCode)return s.hasClass("open")?n.trigger("click"):s.trigger("click"),!1;if(40==t.keyCode){if(s.hasClass("open")){var i=n.nextAll(".option:not(.disabled)").first();i.length>0&&(s.find(".focus").removeClass("focus"),i.addClass("focus"))}else s.trigger("click");return!1}if(38==t.keyCode){if(s.hasClass("open")){var l=n.prevAll(".option:not(.disabled)").first();l.length>0&&(s.find(".focus").removeClass("focus"),l.addClass("focus"))}else s.trigger("click");return!1}if(27==t.keyCode)s.hasClass("open")&&s.trigger("click");else if(9==t.keyCode&&s.hasClass("open"))return!1});var n=document.createElement("a").style;return n.cssText="pointer-events:auto","auto"!==n.pointerEvents&&e("html").addClass("no-csspointerevents"),this}}(jQuery);;
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
});;

});

