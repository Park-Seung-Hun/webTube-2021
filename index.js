import express from "express"; // node module을 'express' 폴더에서 가져오는 것.
import morgan from "morgan"; // log를 기록해 주는 미들웨어
import helmet from "helmet"; // 기초 보안 담당 미들웨어
import cookieParser from "cookie-parser"; // 쿠키에 유저 정보를 저장(session을 다루기 위해)
import bodyParser from "body-parser"; // form을 받았을 때

const app = express(); // express를 실행해서 app를 만든 것.
const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("I'm hungry");

const handleProfile = (req, res) => res.send("You are on my profile"); // es6 화살표 함수

const betweenHome = (res, req, next) => {
  console.log("between");
  next();
};

app.use(cookieParser());
app.use(bodyParser.json()); // 서버에게 json 전달시
app.use(bodyParser.urlencoded({ extended: true })); // 서버에게 html form 전달시
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome); // '/'(root)에 접근할 떄 동작.

app.get("/profile", handleProfile); // '/profile'에 접근할 떄 동작.

app.listen(PORT, handleListening);
