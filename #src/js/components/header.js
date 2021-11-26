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
// // });