const express = require("express"); // node module을 'express' 폴더에서 가져오는 것.
const app = express(); // express를 실행해서 app를 만든 것.

const PORT = 4000;
function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}
app.listen(PORT, handleListening);
