/* node module */
import express from "express";

/* 미들웨어 */
import morgan from "morgan"; // log를 기록
import helmet from "helmet"; // 기초 보안
import cookieParser from "cookie-parser"; // 쿠키에 유저 정보를 저장 (session을 다루기 위해)
import bodyParser from "body-parser"; // form 형식 다루기
import { localsMiddleware } from "./middlewares";
import passport from "passport";
import "./passport";

/* routers의 각 route (URL 분리 용도) */
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";

const app = express(); // express를 실행해서 app를 만든 것.

app.use(helmet({ contentSecurityPolicy: false }));
/* pug 파일 경로 설정 */
app.set("view engine", "pug");
app.set("views", [
  "./views/layouts",
  "./views/videoViews",
  "./views/userViews",
]);
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));

/* 미들웨어 use */
app.use(cookieParser());
app.use(bodyParser.json()); // 서버에게 json 전달시
app.use(bodyParser.urlencoded({ extended: true })); // 서버에게 html form 전달시
app.use(morgan("dev"));
app.use(passport.initialize());
app.use(passport.session());

/* local middleware*/
app.use(localsMiddleware);

/* Router use */
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app; // 다른 파일에서 해당 파일을 불러올 때 app 객체를 준다.
