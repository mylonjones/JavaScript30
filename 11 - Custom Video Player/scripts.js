const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePause() {
  if(video.paused === true){
    video.play();
  } else {
    video.pause();
  }
}

function updateProgress() {
  let percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = percent + '%';
}

function scrub(e) {
  let time = (e.offsetX / progress.offsetWidth) *  video.duration;
  video.currentTime = time;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
  console.log(this.dataset.skip)

}

function adjustRange() {
  video[this.name] = this.value
  console.log(this.value)
}

video.addEventListener('click', togglePause);
toggle.addEventListener('click', togglePause);
video.addEventListener('play', () => {toggle.textContent = '►'})
video.addEventListener('pause', () => {toggle.textContent = '❚ ❚'})
video.addEventListener('timeupdate', updateProgress)
progress.addEventListener('click', scrub)
skipButtons.forEach(button => {
  button.addEventListener('click', skip)
})
ranges.forEach(range => {
  range.addEventListener('change', adjustRange)
})