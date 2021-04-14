const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeBtn");
const fullScrnBtn = document.getElementById("jsFullScreen");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");

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

  /* 브라우저 호환 */
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

// 2. FullScreen 사용
function goFullScreen() {
  /* 브라우저 호환 */
  if (videoContainer.requestFullscreen) {
    videoContainer.requestFullscreen();
  } else if (videoContainer.mozRequestFullScreen) {
    videoContainer.mozRequestFullScreen();
  } else if (videoContainer.webkitRequestFullscreen) {
    videoContainer.webkitRequestFullscreen();
  } else if (videoContainer.msRequestFullscreen) {
    videoContainer.msRequestFullscreen();
  }
  fullScrnBtn.innerHTML = '<i class="fas fa-compress"></i>';
  fullScrnBtn.removeEventListener("click", goFullScreen);
  fullScrnBtn.addEventListener("click", exitFullScreen);
}

/* Time 동작 */
const formatDate = (seconds) => {
  const secondsNumber = parseInt(seconds, 10);
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (totalSeconds < 10) {
    totalSeconds = `0${totalSeconds}`;
  }
  return `${hours}:${minutes}:${totalSeconds}`;
};

function getCurrentTime() {
  currentTime.innerHTML = formatDate(videoPlayer.currentTime);
  if (
    formatDate(videoPlayer.currentTime) === formatDate(videoPlayer.duration)
  ) {
    playBtn.innerHTML = `<i class="fas fa-redo"></i>`;
  }
}
function setTotalTime() {
  try {
    if (videoPlayer.duration == Infinity) {
      totalTime.innerHTML = "";
    } else {
      totalTime.innerHTML = formatDate(videoPlayer.duration);
    }
  } catch (e) {
    console.error(e);
  }
}

/* init() 동작 */
function init() {
  playBtn.addEventListener("click", handlePlayClick);

  volumeBtn.addEventListener("click", handleVolumeClick);

  fullScrnBtn.addEventListener("click", goFullScreen);

  videoPlayer.addEventListener("loadeddata", setTotalTime);
  if (videoPlayer.readyState >= 1) setTotalTime();
  videoPlayer.addEventListener("timeupdate", getCurrentTime);
}

/* 비디오가 존재할 경우 init() 실행 */
if (videoContainer) {
  init();
}
