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

window.addEventListener("resize", startResize);