"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

require("@babel/polyfill");

var _morgan = _interopRequireDefault(require("morgan"));

var _helmet = _interopRequireDefault(require("helmet"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _connectMongo = _interopRequireDefault(require("connect-mongo"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _middlewares = require("./middlewares");

var _expressSession = _interopRequireDefault(require("express-session"));

var _passport = _interopRequireDefault(require("passport"));

var _path = _interopRequireDefault(require("path"));

require("./passport");

var _globalRouter = _interopRequireDefault(require("./routers/globalRouter"));

var _userRouter = _interopRequireDefault(require("./routers/userRouter"));

var _videoRouter = _interopRequireDefault(require("./routers/videoRouter"));

var _apiRouter = _interopRequireDefault(require("./routers/apiRouter"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* node module */

/* 미들웨어 */
// log를 기록
// 기초 보안
// 쿠키에 유저 정보를 저장 (session을 다루기 위해)
// form 형식 다루기

/* routers의 각 route (URL 분리 용도) */
var app = (0, _express["default"])(); // express를 실행해서 app를 만든 것.

var CookieStore = (0, _connectMongo["default"])(_expressSession["default"]);
app.use((0, _helmet["default"])({
  contentSecurityPolicy: false
}));
/* pug 파일 경로 설정 */

app.set("view engine", "pug");
app.set("views", ["./views/layouts", "./views/videoViews", "./views/userViews"]);
app.set("views", _path["default"].join(__dirname, "views"));
app.use("/static", _express["default"]["static"](_path["default"].join(__dirname, "static")));
/* 미들웨어 use */

app.use((0, _cookieParser["default"])());
app.use(_bodyParser["default"].json()); // 서버에게 json 전달시

app.use(_bodyParser["default"].urlencoded({
  extended: true
})); // 서버에게 html form 전달시

app.use((0, _morgan["default"])("dev"));
/* passport 와 session */

app.use((0, _expressSession["default"])({
  secret: process.env.COOKIE_SECRET,
  resave: true,
  saveUninitialized: false,
  store: new CookieStore({
    mongooseConnection: _mongoose["default"].connection
  })
}));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session());
/* local middleware*/

app.use(_middlewares.localsMiddleware);
/* Router use */

app.use(_routes["default"].home, _globalRouter["default"]);
app.use(_routes["default"].users, _userRouter["default"]);
app.use(_routes["default"].videos, _videoRouter["default"]);
app.use(_routes["default"].api, _apiRouter["default"]);
var _default = app; // 다른 파일에서 해당 파일을 불러올 때 app 객체를 준다.

exports["default"] = _default;