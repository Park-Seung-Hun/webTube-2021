const express = require("express"); // node module을 'express' 폴더에서 가져오는 것.
const app = express(); // express를 실행해서 app를 만든 것.

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send("Hello my home");
}

function handleProfile(req, res) {
  res.send("You are on my profile");
}

app.get("/", handleHome); // '/'(root)에 접근할 떄 동작.
app.get("/profile", handleProfile); // '/profile'에 접근할 떄 동작.
app.listen(PORT, handleListening);
