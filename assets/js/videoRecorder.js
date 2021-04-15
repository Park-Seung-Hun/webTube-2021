const recorderContanier = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject; // stream 객체 생성
let videoRecorder; // 비디오 녹화본
let stream;

/* 비디오 데이터 control */
const handleVideoData = (event) => {
  const { data: videoFile } = event;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(videoFile);
  link.download = "recorded.webm";
  document.body.appendChild(link);
  link.click();
};

/* 녹화 시작 */
const startRecording = () => {
  videoRecorder = new MediaRecorder(streamObject); // 전체 파일을 한번에 저장
  videoRecorder.start();
  videoRecorder.addEventListener("dataavailable", handleVideoData); // 녹화가 멈췄을때 호출
  recordBtn.addEventListener("click", stopRecording);
};

const stopRecording = () => {
  videoRecorder.stop();
  stream.getTracks().forEach((track) => track.stop());
  stream = null;
  recordBtn.removeEventListener("click", stopRecording);
  recordBtn.addEventListener("click", getVideo);
  recordBtn.innerHTML = "🎥 녹화 시작";
};

/* 녹화된 비디오 추출 */
const getVideo = async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 },
    });
    videoPreview.srcObject = stream;
    videoPreview.muted = true;
    videoPreview.play();

    recordBtn.innerHTML = "🛑 녹화 중지";
    streamObject = stream;
    startRecording();
  } catch (error) {
    recordBtn.innerHTML = "☹️ 녹화 오류";
  } finally {
    recordBtn.removeEventListener("click", getVideo);
  }
};

function init() {
  recordBtn.addEventListener("click", getVideo); // 녹화 시작 버튼 클릭시 동작
}

if (recorderContanier) {
  init();
}
