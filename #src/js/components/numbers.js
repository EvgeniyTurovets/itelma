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
}, false)