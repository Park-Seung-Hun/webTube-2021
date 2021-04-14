const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeBtn");
const fullScrnBtn = document.getElementById("jsFullScreen");

/* playBtn 동작 */
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

/* volumeBtn 동작 */
function handleVolumeClick() {
  if (videoPlayer.muted) {
    /* 비디오가 음소거 되어있는 경우 */
    videoPlayer.muted = false;
    volumeBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
  } else {
    /* 비디오의 음량이 출력되는 경우 */
    videoPlayer.muted = true;
    volumeBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
  }
}

/* fullScreen 동작 */

// 1. FullScreen 사용 x
function exitFullScreen() {
  fullScrnBtn.innerHTML = '<i class="fas fa-expand"></i>';
  fullScrnBtn.addEventListener("click", goFullScreen);
  document.webkitExitFullscreen();
}

// 2. FullScreen 사용
function goFullScreen() {
  videoContainer.webkitRequestFullscreen();
  fullScrnBtn.innerHTML = '<i class="fas fa-compress"></i>';
  fullScrnBtn.removeEventListener("click", goFullScreen);
  fullScrnBtn.addEventListener("click", exitFullScreen);
}

/* init() 동작 */
function init() {
  playBtn.addEventListener("click", handlePlayClick);
  volumeBtn.addEventListener("click", handleVolumeClick);
  fullScrnBtn.addEventListener("click", goFullScreen);
}

/* 비디오가 존재할 경우 init() 실행 */
if (videoContainer) {
  init();
}
