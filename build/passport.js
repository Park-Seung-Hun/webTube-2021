"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _passportGithub = _interopRequireDefault(require("passport-github"));

var _passportKakao = _interopRequireDefault(require("passport-kakao"));

var _passportGoogleOauth = _interopRequireDefault(require("passport-google-oauth20"));

var _User = _interopRequireDefault(require("./models/User"));

var _userController = require("./controller/userController");

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// strategy: 로그인 방식
_passport["default"].use(_User["default"].createStrategy()); // github 로그인


_passport["default"].use(new _passportGithub["default"]({
  clientID: process.env.GH_ID,
  clientSecret: process.env.GH_SECRET,
  callbackURL: "http://localhost:4000".concat(_routes["default"].githubCallback)
}, _userController.githubLoginCallback)); // kakao 로그인


_passport["default"].use(new _passportKakao["default"]({
  clientID: process.env.KAKAO_ID,
  clientSecret: process.env.KAKAO_SECRET,
  callbackURL: "http://localhost:4000".concat(_routes["default"].kakaoCallback)
}, _userController.kakaoLoginCallback)); // 구글 로그인


_passport["default"].use(new _passportGoogleOauth["default"]({
  clientID: process.env.GOOGLE_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: "http://localhost:4000".concat(_routes["default"].googleCallback)
}, _userController.googleLoginCallback));

_passport["default"].serializeUser(function (user, done) {
  done(null, user);
});

_passport["default"].deserializeUser(function (id, done) {
  _User["default"].findById(id, function (err, user) {
    done(err, user);
  });
});