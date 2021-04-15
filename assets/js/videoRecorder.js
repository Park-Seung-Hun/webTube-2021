const recorderContanier = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject; // stream 객체 생성

/* 비디오 데이터 control */
const handleVideoData = (event) => {
  console.log(event);
};

/* 녹화 시작 */
const startRecording = () => {
  const videoRecorder = new MediaRecorder(streamObject);
  videoRecorder.start();
  videoRecorder.addEventListener("dataavailable", handleVideoData);
};

/* 녹화된 비디오 추출 */
const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
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
