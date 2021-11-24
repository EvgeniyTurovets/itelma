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
});