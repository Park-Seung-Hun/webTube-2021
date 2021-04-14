const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");

function handlePlayClick() {
  if (videoPlayer.paused) {
    /* 비디오가 멈춰있는 경우 */
    videoPlayer.play();
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
  } else {
    /* 비디오가 동작하고 있는 경우*/
    videoPlayer.pause();
    playBtn.innerHTML = `<i class="fas fa-play"></i>`;
  }
}

function init() {
  playBtn.addEventListener("click", handlePlayClick);
}

/* 1. 비디오가 존재할 경우 init() 실행 */
if (videoContainer) {
  init();
}
